import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Show Toast Notification
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Cart Functions
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to your cart!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white flex flex-col font-['Inter'] relative selection:bg-[#00A8FF] selection:text-black">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171D26] border border-[#00A8FF] text-white px-4 py-3 rounded-2xl shadow-2xl shadow-[#00A8FF]/20 flex items-center gap-3 animate-slide-up">
          <div className="w-8 h-8 rounded-xl bg-[#00A8FF]/20 text-[#00A8FF] flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page View Router */}
      <main className="flex-1 pt-6">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {['earbuds', 'headphones', 'speakers', 'soundbars'].includes(currentPage) && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryPage
              key={currentPage}
              categoryId={currentPage}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          </div>
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Modals & Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(p) => setQuickViewProduct(p)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
