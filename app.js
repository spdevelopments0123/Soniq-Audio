/* ==================================================
   SONIQ AUDIO — Vanilla JavaScript Web Application Logic
   ================================================== */

let allProducts = [];
let cart = [];
let appliedDiscount = 0;
let appliedPromoCode = '';

// Price Formatter (INR ₹)
function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Show Toast Notification
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Load from embedded PRODUCTS_DATA fallback first for instant/offline/file:// support
  if (typeof window.PRODUCTS_DATA !== 'undefined' && window.PRODUCTS_DATA.products) {
    allProducts = window.PRODUCTS_DATA.products;
  }

  // 2. Try fetching data/products.json if served over HTTP/HTTPS
  try {
    const res = await fetch('data/products.json');
    if (res.ok) {
      const data = await res.json();
      if (data && data.products) {
        allProducts = data.products;
      }
    }
  } catch (err) {
    console.warn('fetch data/products.json skipped (using embedded fallback):', err);
  }

  // 3. Explicitly attach all interactive click handler functions to window object
  window.addToCart = addToCart;
  window.buyNow = buyNow;
  window.openQuickView = openQuickView;
  window.closeQuickView = closeQuickView;
  window.openCartDrawer = openCartDrawer;
  window.closeCartDrawer = closeCartDrawer;
  window.openCheckoutModal = openCheckoutModal;
  window.closeCheckoutModal = closeCheckoutModal;
  window.closeSearch = closeSearch;
  window.updateQuantity = updateQuantity;
  window.completeOrder = completeOrder;
  window.handleSortChange = handleSortChange;
  window.switchPage = switchPage;

  initNavigation();
  initSearch();
  initCart();
  initForms();
  renderHomePage();

  // Check URL Hash for routing
  const currentHash = window.location.hash.replace('#', '') || 'home';
  switchPage(currentHash);
});

// Single Page Navigation Routing
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-page]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      switchPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Mobile menu toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
}

function switchPage(pageId) {
  // Update nav links active state
  document.querySelectorAll('[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.remove('open');

  // Hide all sections, show active section
  document.querySelectorAll('.page-section').forEach((sec) => {
    sec.classList.remove('active');
  });

  const activeSection = document.getElementById(`page-${pageId}`);
  if (activeSection) {
    activeSection.classList.add('active');
    window.location.hash = pageId;

    // Render specific category content
    if (['earbuds', 'headphones', 'speakers', 'soundbars'].includes(pageId)) {
      renderCategoryPage(pageId);
    }
  }
}

// Product Card HTML Generator
function createProductCardHTML(product) {
  const originalPrice = Math.round(product.price * 1.25);
  
  return `
    <div class="product-card">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      <button class="quick-view-btn" onclick="openQuickView('${product.id}')" title="Quick View Specs">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>

      <div>
        <div class="product-img-wrapper" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>

        <div class="star-rating">
          ★ ${product.rating} <span class="review-count">(${product.reviewsCount})</span>
        </div>

        <h3 class="product-name" onclick="openQuickView('${product.id}')">${product.name}</h3>
        <p class="product-desc">${product.description}</p>

        <div class="key-feature-pill">
          ⚡ ${product.keyFeature}
        </div>
      </div>

      <div>
        <div class="price-box">
          <span class="price-current">${formatPrice(product.price)}</span>
          <span class="price-original">${formatPrice(originalPrice)}</span>
        </div>

        <div class="card-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Add to Cart
          </button>
          <button class="btn-buy-now" onclick="buyNow('${product.id}')">
            ⚡ Buy Now
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Home Page
function renderHomePage() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;

  const featured = allProducts.filter((p) => p.isFeatured).slice(0, 6);
  container.innerHTML = featured.map((p) => createProductCardHTML(p)).join('');
}

// Render Category Pages
function renderCategoryPage(categoryId) {
  const container = document.getElementById(`${categoryId}-products-grid`);
  if (!container) return;

  let categoryProducts = allProducts.filter((p) => p.category === categoryId);

  // Sorting
  const sortSelect = document.getElementById(`${categoryId}-sort-select`);
  if (sortSelect) {
    const val = sortSelect.value;
    if (val === 'low-high') categoryProducts.sort((a, b) => a.price - b.price);
    else if (val === 'high-low') categoryProducts.sort((a, b) => b.price - a.price);
    else if (val === 'rating') categoryProducts.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = categoryProducts.map((p) => createProductCardHTML(p)).join('');
}

// Handle Sort Select Change
function handleSortChange(categoryId) {
  renderCategoryPage(categoryId);
}

// Cart Functionality
function initCart() {
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  // Promo code listener
  const promoForm = document.getElementById('promo-form');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const codeInput = document.getElementById('promo-input').value.trim().toUpperCase();
      if (codeInput === 'SONIQ10') {
        appliedPromoCode = 'SONIQ10';
        appliedDiscount = 0.1; // 10%
        showToast('Promo code SONIQ10 applied! 10% Off');
        renderCart();
      } else {
        alert('Invalid promo code. Try "SONIQ10" for 10% discount!');
      }
    });
  }
}

function openCartDrawer() {
  document.getElementById('cart-backdrop').classList.add('active');
  document.getElementById('cart-drawer').classList.add('active');
  renderCart();
}

function closeCartDrawer() {
  document.getElementById('cart-backdrop').classList.remove('active');
  document.getElementById('cart-drawer').classList.remove('active');
}

function addToCart(productId) {
  const prod = allProducts.find((p) => p.id === productId);
  if (!prod) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...prod, quantity: 1 });
  }

  updateCartBadge();
  showToast(`Added "${prod.name}" to cart!`);
}

function buyNow(productId) {
  addToCart(productId);
  closeCartDrawer();
  openCheckoutModal();
}

function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.innerText = count;
}

function updateQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  }
  updateCartBadge();
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const footerArea = document.getElementById('cart-footer-area');

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 0; color: var(--text-secondary);">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 12px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3>Your Cart is Empty</h3>
        <p style="font-size: 0.8rem; margin-top: 6px;">Browse our earbuds, headphones, speakers, and soundbars.</p>
      </div>
    `;
    if (footerArea) footerArea.style.display = 'none';
    return;
  }

  if (footerArea) footerArea.style.display = 'block';

  container.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div style="flex: 1; min-width: 0;">
        <h4 style="font-size: 0.85rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
        <p style="font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; margin-top: 2px;">${formatPrice(item.price)}</p>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
          <button onclick="updateQuantity('${item.id}', -1)" style="padding: 2px 8px; background: var(--bg-primary); border: 1px solid var(--border-color); color: #fff; border-radius: 4px;">-</button>
          <span style="font-size: 0.8rem; font-weight: 700;">${item.quantity}</span>
          <button onclick="updateQuantity('${item.id}', 1)" style="padding: 2px 8px; background: var(--bg-primary); border: 1px solid var(--border-color); color: #fff; border-radius: 4px;">+</button>
        </div>
      </div>
      <div style="font-weight: 800; font-size: 0.85rem;">
        ${formatPrice(item.price * item.quantity)}
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  document.getElementById('cart-subtotal').innerText = formatPrice(subtotal);
  document.getElementById('cart-discount').innerText = discountAmount > 0 ? `-${formatPrice(discountAmount)}` : '₹0';
  document.getElementById('cart-total').innerText = formatPrice(finalTotal);
}

// Quick View Modal
function openQuickView(productId) {
  const prod = allProducts.find((p) => p.id === productId);
  if (!prod) return;

  const overlay = document.getElementById('quickview-modal');
  const container = document.getElementById('quickview-content');

  let specsHTML = '';
  if (prod.specs) {
    specsHTML = Object.entries(prod.specs).map(([k, v]) => `
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; font-size: 0.75rem;">
        <span style="color: var(--text-secondary);">${k}</span>
        <span style="font-weight: 700; color: #fff;">${v}</span>
      </div>
    `).join('');
  }

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <div>
        <img src="${prod.image}" alt="${prod.name}" style="width: 100%; border-radius: 16px; border: 1px solid var(--border-color);" />
      </div>
      <div>
        <span style="color: var(--accent-primary); font-size: 0.7rem; font-weight: 800; text-transform: uppercase;">${prod.categoryName}</span>
        <h2 style="font-size: 1.5rem; font-weight: 800; margin: 4px 0 8px 0;">${prod.name}</h2>
        <div style="color: #fbbf24; font-size: 0.85rem; margin-bottom: 12px;">★ ${prod.rating} (${prod.reviewsCount} reviews)</div>
        <div style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 12px;">${formatPrice(prod.price)}</div>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px;">${prod.description}</p>
        
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 12px; border-radius: 12px; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
          <h4 style="font-size: 0.75rem; color: var(--accent-primary); text-transform: uppercase; font-weight: 800;">Technical Specs</h4>
          ${specsHTML}
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <button class="btn-primary" onclick="addToCart('${prod.id}'); closeQuickView();" style="padding: 12px; font-size: 0.8rem;">Add to Cart</button>
          <button class="btn-secondary" onclick="buyNow('${prod.id}'); closeQuickView();" style="padding: 12px; font-size: 0.8rem;">Buy Now</button>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickview-modal').classList.remove('active');
}

// Search Modal
function initSearch() {
  const openSearchBtn = document.getElementById('open-search-btn');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const overlay = document.getElementById('search-modal');
  const input = document.getElementById('search-input');

  if (openSearchBtn) {
    openSearchBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      input.focus();
    });
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  if (input) {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const resultsContainer = document.getElementById('search-results');

      if (!query) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary); font-size: 0.8rem; padding: 24px;">Type to search audio gear...</p>';
        return;
      }

      const filtered = allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.keyFeature.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); font-size: 0.8rem; padding: 24px;">No products found matching "${query}"</p>`;
      } else {
        resultsContainer.innerHTML = filtered.map((p) => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="closeSearch(); openQuickView('${p.id}');">
              <img src="${p.image}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 8px;" />
              <div>
                <h4 style="font-size: 0.85rem; font-weight: 700; color: #fff;">${p.name}</h4>
                <p style="font-size: 0.7rem; color: var(--text-secondary);">${p.keyFeature}</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 0.85rem; font-weight: 800; color: var(--accent-primary);">${formatPrice(p.price)}</span>
              <button onclick="addToCart('${p.id}'); closeSearch();" style="background: var(--accent-primary); color: #000; padding: 6px 12px; border-radius: 6px; font-weight: 800; font-size: 0.7rem;">+ Add</button>
            </div>
          </div>
        `).join('');
      }
    });
  }
}

function closeSearch() {
  document.getElementById('search-modal').classList.remove('active');
}

// Checkout Modal
function openCheckoutModal() {
  const overlay = document.getElementById('checkout-modal');
  document.getElementById('checkout-form-view').style.display = 'block';
  document.getElementById('checkout-confirmation-view').style.display = 'none';
  overlay.classList.add('active');

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const priceElem = document.getElementById('checkout-total-price');
  if (priceElem) priceElem.innerText = formatPrice(finalTotal);
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('active');
}

function completeOrder(e) {
  e.preventDefault();
  
  const customerName = document.getElementById('checkout-name').value;
  const customerEmail = document.getElementById('checkout-email').value;
  const customerPhone = document.getElementById('checkout-phone').value;
  const customerAddress = document.getElementById('checkout-address').value;
  const paymentMethod = document.getElementById('checkout-payment').value;

  const orderId = `SONIQ-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  // Render items list inside receipt
  const itemsHTML = cart.map(item => `
    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding: 8px 0; font-size: 0.8rem;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${item.image}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 6px; background: var(--bg-primary);" />
        <div>
          <strong style="color: #fff; display: block;">${item.name}</strong>
          <span style="color: var(--text-secondary); font-size: 0.7rem;">Qty: ${item.quantity} × ${formatPrice(item.price)}</span>
        </div>
      </div>
      <span style="font-weight: 700; color: #fff;">${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join('');

  const confirmView = document.getElementById('checkout-confirmation-view');
  confirmView.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 2px solid #34d399; color: #34d399; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-size: 1.5rem; font-weight: 800;">
        ✓
      </div>
      <h2 style="font-size: 1.6rem; font-weight: 800; color: #fff;">Order Confirmed!</h2>
      <p style="font-size: 0.85rem; color: #34d399; font-weight: 600; margin-top: 4px; background: rgba(52, 211, 153, 0.1); padding: 6px 14px; border-radius: 8px; display: inline-block;">
        ✉️ An official order receipt has been sent to <strong>${customerEmail}</strong> from <strong>arnavjain22.work@gmail.com</strong>
      </p>
    </div>

    <!-- Official Email Receipt Box -->
    <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 20px; font-size: 0.8rem; margin-bottom: 20px; text-align: left;">
      
      <!-- Email Header Banner -->
      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: var(--text-secondary);">From:</span>
          <span style="color: var(--accent-primary); font-weight: 700;">arnavjain22.work@gmail.com</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: var(--text-secondary);">To:</span>
          <span style="color: #fff; font-weight: 600;">${customerEmail} (${customerName})</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: var(--text-secondary);">Subject:</span>
          <span style="color: #fff; font-weight: 600;">Order Confirmation & Invoice ${orderId}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-secondary);">Date:</span>
          <span style="color: var(--text-secondary);">${dateStr}</span>
        </div>
      </div>

      <!-- Receipt Items -->
      <div style="margin-bottom: 12px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-primary); font-weight: 800; margin-bottom: 8px;">Items Ordered (${cart.length})</h4>
        ${itemsHTML}
      </div>

      <!-- Financial Totals -->
      <div style="border-top: 1px solid var(--border-color); padding-top: 8px; font-size: 0.8rem;">
        <div style="display: flex; justify-content: space-between; margin-top: 4px;">
          <span style="color: var(--text-secondary);">Subtotal</span>
          <span style="color: #fff;">${formatPrice(subtotal)}</span>
        </div>
        ${discountAmount > 0 ? `
        <div style="display: flex; justify-content: space-between; color: #34d399; margin-top: 2px;">
          <span>Promo Discount (${appliedPromoCode})</span>
          <span>-${formatPrice(discountAmount)}</span>
        </div>` : ''}
        <div style="display: flex; justify-content: space-between; margin-top: 2px;">
          <span style="color: var(--text-secondary);">Express Delivery</span>
          <span style="color: #34d399; font-weight: 700;">FREE</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1rem; font-weight: 800; border-top: 1px solid var(--border-color); padding-top: 8px; margin-top: 8px;">
          <span style="color: #fff;">Total Paid (${paymentMethod})</span>
          <span style="color: var(--accent-primary); font-family: var(--font-heading);">${formatPrice(finalTotal)}</span>
        </div>
      </div>

      <!-- Delivery Address -->
      <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed var(--border-color); font-size: 0.75rem; color: var(--text-secondary);">
        <p><strong>Shipping Address:</strong> ${customerName}, ${customerAddress} (${customerPhone})</p>
        <p style="color: #34d399; margin-top: 4px;">🚚 Estimated Delivery: 3-4 Business Days</p>
      </div>
    </div>

    <button onclick="closeCheckoutModal()" class="btn-primary" style="width: 100%; padding: 12px;">Continue Shopping</button>
  `;

  document.getElementById('checkout-form-view').style.display = 'none';
  confirmView.style.display = 'block';

  // Clear cart
  cart = [];
  appliedDiscount = 0;
  appliedPromoCode = '';
  updateCartBadge();

  showToast(`Order ${orderId} Confirmed! Receipt sent from arnavjain22.work@gmail.com`);
}

// Forms Initialization
function initForms() {
  // Newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome to the SONIQ Sound Club! Email subscribed.');
      newsletterForm.reset();
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your enquiry has been received.');
      contactForm.reset();
    });
  }
}
