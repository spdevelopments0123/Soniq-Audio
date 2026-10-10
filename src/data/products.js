export const products = [
  // --------------------------------------------------
  // 1. EARBUDS (6 Products)
  // --------------------------------------------------
  {
    id: "eb-01",
    name: "SONIQ AirBuds X1",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 2499,
    rating: 4.6,
    reviewsCount: 184,
    description: "Ultra-sleek TWS earbuds featuring low-latency gaming mode and dynamic bass drivers.",
    keyFeature: "Low Latency Mode (40ms)",
    batteryLife: "28 Hours Total Playtime",
    anc: "Environmental Noise Cancellation (ENC)",
    waterRating: "IPX4 Water Resistant",
    bluetooth: "Bluetooth 5.3",
    image: "/images/earbuds.jpg",
    badge: "POPULAR",
    isFeatured: true,
    specs: {
      "Driver Size": "10mm Graphene Drivers",
      "Playback": "6h (Earbuds) + 22h (Case)",
      "Charging": "Type-C Fast Charge (10 min = 2 hrs)",
      "Latency": "40ms Gaming Mode",
      "Microphones": "Dual Mic with AI Noise Isolation"
    }
  },
  {
    id: "eb-02",
    name: "SONIQ AirBuds Pro",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 3999,
    rating: 4.8,
    reviewsCount: 312,
    description: "Flagship active noise cancellation earbuds with high-fidelity acoustic transparency mode.",
    keyFeature: "Active Noise Cancellation (35dB)",
    batteryLife: "32 Hours Total Playtime",
    anc: "35dB Hybrid Active Noise Cancellation",
    waterRating: "IPX5 Sweat Proof",
    bluetooth: "Bluetooth 5.3",
    image: "/images/earbuds.jpg",
    badge: "BESTSELLER",
    isFeatured: true,
    specs: {
      "Driver Size": "12mm Custom Titanium Drivers",
      "Playback": "8h (ANC Off) + 24h (Case)",
      "Charging": "Wireless Charging + Type-C Fast Charge",
      "Transparency": "Adaptive Ambient Sound Mode",
      "Microphones": "Quad Mic Array with Wind Reduction"
    }
  },
  {
    id: "eb-03",
    name: "SONIQ AirBuds Neo",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 1999,
    rating: 4.4,
    reviewsCount: 96,
    description: "Ergonomic lightweight earbuds with boosted deep bass tuning for active daily use.",
    keyFeature: "BassBoost Dynamic EQ",
    batteryLife: "24 Hours Total Playtime",
    anc: "Passive Noise Isolation",
    waterRating: "IPX4 Sweat Resistant",
    bluetooth: "Bluetooth 5.2",
    image: "/images/earbuds.jpg",
    badge: "VALUE",
    isFeatured: false,
    specs: {
      "Driver Size": "10mm Dynamic Bass Drivers",
      "Playback": "5h (Earbuds) + 19h (Case)",
      "Charging": "Type-C Standard Charging",
      "Fit": "Ergonomic Featherweight Fit (3.9g)",
      "Controls": "Smart Touch Controls"
    }
  },
  {
    id: "eb-04",
    name: "SONIQ AirBuds Max",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 5499,
    rating: 4.9,
    reviewsCount: 245,
    description: "Pro audio TWS with Hybrid 42dB ANC, 360 Spatial Audio and lossless audio streaming.",
    keyFeature: "Hybrid ANC (42dB) & Spatial Audio",
    batteryLife: "40 Hours Total Playtime",
    anc: "42dB Smart Hybrid ANC",
    waterRating: "IPX5 Dust & Water Resistant",
    bluetooth: "Bluetooth 5.4",
    image: "/images/earbuds.jpg",
    badge: "FLAGSHIP",
    isFeatured: true,
    specs: {
      "Driver Size": "Dual Coaxial Drivers (11mm + 6mm)",
      "Playback": "9h (Earbuds) + 31h (Case)",
      "Codec": "LDAC & AAC Lossless Support",
      "Features": "Head Tracking Spatial Audio",
      "Charging": "Qi Wireless Charging Support"
    }
  },
  {
    id: "eb-05",
    name: "SONIQ AirBuds Lite",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 1499,
    rating: 4.3,
    reviewsCount: 88,
    description: "Compact, ultra-comfortable everyday wireless earbuds with crisp voice call clarity.",
    keyFeature: "Featherlight 3.8g & Fast Charge",
    batteryLife: "20 Hours Total Playtime",
    anc: "Quad Mic ENC Calls",
    waterRating: "IPX4 Water Resistant",
    bluetooth: "Bluetooth 5.3",
    image: "/images/earbuds.jpg",
    badge: "BUDGET",
    isFeatured: false,
    specs: {
      "Weight": "3.8g per Earbud",
      "Playback": "5h + 15h Case",
      "Charging": "10 Mins Charge = 120 Mins Playtime",
      "Microphones": "HD Voice ENC"
    }
  },
  {
    id: "eb-06",
    name: "SONIQ AirBuds Elite",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 6999,
    rating: 4.9,
    reviewsCount: 156,
    description: "Audiophile wireless earbuds with high-resolution LDAC audio tuning and premium ceramic body.",
    keyFeature: "Hi-Res Wireless & Ceramic Body",
    batteryLife: "45 Hours Total Playtime",
    anc: "Adaptive AI Noise Cancellation",
    waterRating: "IPX7 Waterproof",
    bluetooth: "Bluetooth 5.4",
    image: "/images/earbuds.jpg",
    badge: "PREMIUM",
    isFeatured: false,
    specs: {
      "Driver Size": "13mm Planar Magnetic Drivers",
      "Material": "Polished Ceramic & Anodized Aluminum",
      "Playback": "10h + 35h Case",
      "Wireless Audio": "Hi-Res Audio Certified Wireless"
    }
  },

  // --------------------------------------------------
  // 2. HEADPHONES (6 Products)
  // --------------------------------------------------
  {
    id: "hp-01",
    name: "SONIQ Studio H1",
    category: "headphones",
    categoryName: "Headphones",
    price: 4999,
    rating: 4.7,
    reviewsCount: 210,
    description: "Professional over-ear wireless headphones with titanium drivers and hybrid noise cancellation.",
    keyFeature: "38dB Hybrid ANC & 50h Battery",
    batteryLife: "50 Hours Playtime",
    anc: "38dB Active Noise Cancellation",
    waterRating: "IPX4 Splashproof",
    bluetooth: "Bluetooth 5.3",
    image: "/images/headphones.jpg",
    badge: "HOT SELLER",
    isFeatured: true,
    specs: {
      "Drivers": "40mm Titanium Diaphragm",
      "Battery": "50 Hours (ANC Off) / 38 Hours (ANC On)",
      "Charging": "Fast USB-C (15 min = 5 hrs)",
      "Cushions": "Memory Foam Protein Leather",
      "Wired Option": "3.5mm Aux Included"
    }
  },
  {
    id: "hp-02",
    name: "SONIQ Bass H2",
    category: "headphones",
    categoryName: "Headphones",
    price: 3499,
    rating: 4.5,
    reviewsCount: 140,
    description: "Bass-heavy over-ear headphones built for bass lovers with 60-hour marathon battery life.",
    keyFeature: "BassBoost EQ & 60 Hours Playtime",
    batteryLife: "60 Hours Playtime",
    anc: "Passive Acoustic Isolation",
    waterRating: "Sweat Resistant",
    bluetooth: "Bluetooth 5.2",
    image: "/images/headphones.jpg",
    badge: "POPULAR",
    isFeatured: false,
    specs: {
      "Drivers": "50mm Bass Monster Drivers",
      "Battery": "60 Hours Continuous Playback",
      "Controls": "Dedicated Bass Boost Toggle Button",
      "Design": "Collapsible Folding Earcups"
    }
  },
  {
    id: "hp-03",
    name: "SONIQ Pro H3",
    category: "headphones",
    categoryName: "Headphones",
    price: 6999,
    rating: 4.9,
    reviewsCount: 290,
    description: "Studio reference headphones engineered with ultra-clean sound staging and USB-C DAC output.",
    keyFeature: "Smart Adaptive ANC & Lossless Audio",
    batteryLife: "55 Hours Playtime",
    anc: "Smart Adaptive Noise Cancellation",
    waterRating: "IPX4 Rated",
    bluetooth: "Bluetooth 5.4",
    image: "/images/headphones.jpg",
    badge: "PRO CHOICE",
    isFeatured: true,
    specs: {
      "Drivers": "45mm Studio Tuned Neodymium",
      "Audio DAC": "Built-in 24-bit/96kHz USB-C Audio DAC",
      "Latency": "Ultra-Low 30ms Mode",
      "Weight": "240g Ultra Comfort"
    }
  },
  {
    id: "hp-04",
    name: "SONIQ Air H4",
    category: "headphones",
    categoryName: "Headphones",
    price: 5499,
    rating: 4.6,
    reviewsCount: 115,
    description: "Lightweight wireless noise-cancelling headphones tailored for everyday travel and office productivity.",
    keyFeature: "Featherlight Comfort & Active ANC",
    batteryLife: "45 Hours Playtime",
    anc: "Active Noise Cancellation",
    waterRating: "IPX4 Rated",
    bluetooth: "Bluetooth 5.3",
    image: "/images/headphones.jpg",
    badge: "TRAVEL",
    isFeatured: false,
    specs: {
      "Weight": "198g Ultra Lightweight",
      "Battery": "45 Hours Playtime",
      "Microphones": "Dual Beamforming Mics",
      "Case": "Premium Hardshell Travel Case Included"
    }
  },
  {
    id: "hp-05",
    name: "SONIQ Studio",
    category: "headphones",
    categoryName: "Headphones",
    price: 7999,
    rating: 4.9,
    reviewsCount: 178,
    description: "Distinguished studio headphones engineered with audiophile flat acoustic frequency response.",
    keyFeature: "Flat EQ Response & Studio Drivers",
    batteryLife: "55 Hours Playtime",
    anc: "Hybrid Noise Cancellation",
    waterRating: "IPX4 Rated",
    bluetooth: "Bluetooth 5.3",
    image: "assets/images/products/hp-05_soniq_studio.jpg",
    badge: "STUDIO",
    isFeatured: false,
    specs: {
      "Model": "SONIQ Studio",
      "Tuning": "Flat Reference Response",
      "Battery": "55 Hours Playtime",
      "Materials": "Aluminum & Anodized Steel"
    }
  },
  {
    id: "hp-06",
    name: "SONIQ Luxe",
    category: "headphones",
    categoryName: "Headphones",
    price: 8999,
    rating: 5.0,
    reviewsCount: 142,
    description: "Ultra-luxury planar magnetic headphones with real leather headbands.",
    keyFeature: "Planar Magnetic & Premium Finish",
    batteryLife: "70 Hours Playtime",
    anc: "Audiophile Grade ANC",
    waterRating: "IPX4 Rated",
    bluetooth: "Bluetooth 5.4",
    image: "assets/images/products/hp-06_soniq_luxe.jpg",
    badge: "FLAGSHIP",
    isFeatured: false,
    specs: {
      "Model": "SONIQ Luxe",
      "Transducer": "Planar Magnetic Drivers",
      "Battery": "70 Hours Playtime",
      "Finish": "Real Leather & Precision Metal"
    }
  },

  // --------------------------------------------------
  // 3. BLUETOOTH SPEAKERS (6 Products)
  // --------------------------------------------------
  {
    id: "sp-01",
    name: "SONIQ Mini",
    category: "speakers",
    categoryName: "Bluetooth Speakers",
    price: 1999,
    rating: 4.5,
    reviewsCount: 104,
    description: "Pocket-sized 10W portable speaker with rubberized shockproof outer shell.",
    keyFeature: "Pocket Size 10W Sound & IPX5",
    batteryLife: "10 Hours Playtime",
    powerOutput: "10W RMS",
    waterRating: "IPX5 Water Resistant",
    bluetooth: "Bluetooth 5.2",
    image: "assets/images/products/sp-01_soniq_mini.jpg",
    badge: "COMPACT",
    isFeatured: false,
    specs: {
      "Model": "SONIQ Mini",
      "Weight": "190g Ultra Light",
      "Battery": "10 Hours Playtime",
      "Output": "10W Dynamic Output"
    }
  },
  {
    id: "sp-02",
    name: "SONIQ Pop",
    category: "speakers",
    categoryName: "Bluetooth Speakers",
    price: 2999,
    rating: 4.6,
    reviewsCount: 165,
    description: "Vibrant outdoor speaker with built-in fabric carrying lanyard and 20W sound.",
    keyFeature: "Fabric Lanyard & 20W Punchy Sound",
    batteryLife: "14 Hours Playtime",
    powerOutput: "20W RMS",
    waterRating: "IPX7 Waterproof",
    bluetooth: "Bluetooth 5.3",
    image: "assets/images/products/sp-02_soniq_pop.jpg",
    badge: "BESTSELLER",
    isFeatured: true,
    specs: {
      "Model": "SONIQ Pop",
      "Lanyard": "Integrated Carrying Strap",
      "Battery": "14 Hours Playtime",
      "Stereo": "TWS Pair 2 Pop Speakers"
    }
  },
  {
    id: "sp-03",
    name: "SONIQ Pulse",
    category: "speakers",
    categoryName: "Bluetooth Speakers",
    price: 3999,
    rating: 4.7,
    reviewsCount: 198,
    description: "Cylindrical speaker featuring vertical RGB light strip that pulses in sync with your music.",
    keyFeature: "Beat-Synced Vertical RGB Light Bar",
    batteryLife: "18 Hours Playtime",
    powerOutput: "30W Stereo Output",
    waterRating: "IP67 Dust & Water Proof",
    bluetooth: "Bluetooth 5.3",
    image: "assets/images/products/sp-03_soniq_pulse.jpg",
    badge: "NEW",
    isFeatured: false,
    specs: {
      "Model": "SONIQ Pulse",
      "Lighting": "Vertical RGB Pulsing Light",
      "Drivers": "Dual Passive Bass Radiators",
      "Battery": "18 Hours Playtime",
      "Power": "30W RMS Output"
    }
  },
  {
    id: "sp-04",
    name: "SONIQ Boom",
    category: "speakers",
    categoryName: "Bluetooth Speakers",
    price: 5499,
    rating: 4.8,
    reviewsCount: 230,
    description: "Heavy-duty boombox speaker with 50W output, integrated handle, and floating IPX7 waterproof body.",
    keyFeature: "50W Outdoor Sound & Floating IPX7",
    batteryLife: "24 Hours Playtime",
    powerOutput: "50W Deep Bass",
    waterRating: "IPX7 Floating Waterproof",
    bluetooth: "Bluetooth 5.3",
    image: "assets/images/products/sp-04_soniq_boom.jpg",
    badge: "POPULAR",
    isFeatured: true,
    specs: {
      "Model": "SONIQ Boom",
      "Power": "50W RMS Bass Monster",
      "Powerbank": "USB Phone Charging Port",
      "Floating": "Floats upright in water"
    }
  },
  {
    id: "sp-05",
    name: "SONIQ Adventure",
    category: "speakers",
    categoryName: "Bluetooth Speakers",
    price: 4499,
    rating: 4.7,
    reviewsCount: 154,
    description: "Rugged outdoor speaker built to withstand dirt, dust, drops, and water immersion.",
    keyFeature: "All-Terrain Body & 40W Output",
    batteryLife: "22 Hours Playtime",
    powerOutput: "40W Output",
    waterRating: "IP67 Dust & Submersible",
    bluetooth: "Bluetooth 5.3",
    image: "assets/images/products/sp-05_soniq_adventure.jpg",
    badge: "OUTDOOR",
    isFeatured: false,
    specs: {
      "Model": "SONIQ Adventure",
      "Durability": "Shock & Drop Proof",
      "Battery": "22 Hours Playtime",
      "Mount": "Carabiner Clip Included"
    }
  },
  {
    id: "sp-06",
    name: "SONIQ Party",
    category: "speakers",
    categoryName: "Bluetooth Speakers",
    price: 7999,
    rating: 4.9,
    reviewsCount: 188,
    description: "100W mega party speaker featuring dual RGB light rings around woofers and deep bass boost.",
    keyFeature: "100W Party Sound & Dual RGB Rings",
    batteryLife: "20 Hours Playtime",
    powerOutput: "100W Peak Output",
    waterRating: "IPX4 Splashproof",
    bluetooth: "Bluetooth 5.3",
    image: "assets/images/products/sp-06_soniq_party.jpg",
    badge: "PARTY",
    isFeatured: false,
    specs: {
      "Model": "SONIQ Party",
      "Lighting": "Dual Ring RGB Party Lights",
      "Power": "100W Peak Output",
      "Battery": "20 Hours Playtime",
      "Inputs": "Aux In + Mic Input"
    }
  },

  // --------------------------------------------------
  // 4. SOUNDBARS (6 Products)
  // --------------------------------------------------
  {
    id: "sb-01",
    name: "SONIQ SB1",
    category: "soundbars",
    categoryName: "Soundbars",
    price: 5999,
    rating: 4.6,
    reviewsCount: 120,
    description: "Ultra-compact TV soundbar delivering crisp dialogue and rich stereo audio for desktop or bedroom TV setup.",
    keyFeature: "Compact TV Design & HDMI ARC",
    channelConfig: "2.0 Channel",
    connectivity: "HDMI ARC, Optical, Bluetooth 5.3",
    dolbyAudio: "Stereo HD Sound",
    image: "assets/images/products/sb-01_soniq_sb1.jpg",
    badge: "COMPACT",
    isFeatured: false,
    specs: {
      "Model": "SONIQ SB1",
      "Size": "20-inch Slim Profile",
      "Power": "100W Peak Output",
      "Inputs": "HDMI ARC, Optical, Aux, Bluetooth 5.3"
    }
  },
  {
    id: "sb-02",
    name: "SONIQ SB2",
    category: "soundbars",
    categoryName: "Soundbars",
    price: 7999,
    rating: 4.7,
    reviewsCount: 154,
    description: "2.0 Channel soundbar with front LED status display, remote control, and dual bass reflex ports.",
    keyFeature: "2.0 Channel & LED Status Display",
    channelConfig: "2.0 Channel Stereo",
    connectivity: "HDMI ARC, Optical, AUX, Bluetooth 5.3",
    dolbyAudio: "Dolby Digital Certified",
    image: "assets/images/products/sb-02_soniq_sb2.jpg",
    badge: "BEST VALUE",
    isFeatured: true,
    specs: {
      "Model": "SONIQ SB2",
      "Display": "Front Digital LED Status Screen",
      "Power": "140W RMS",
      "Ports": "Dual Bass Reflex Ports"
    }
  },
  {
    id: "sb-03",
    name: "SONIQ SB3",
    category: "soundbars",
    categoryName: "Soundbars",
    price: 9999,
    rating: 4.8,
    reviewsCount: 176,
    description: "2.1 Channel soundbar paired with dedicated wireless subwoofer for deep movie bass impact.",
    keyFeature: "2.1 Channel & Wireless Subwoofer",
    channelConfig: "2.1 Channel + Subwoofer",
    connectivity: "HDMI eARC, Optical, Bluetooth 5.3",
    dolbyAudio: "Dolby Audio 3D",
    image: "assets/images/products/sb-03_soniq_sb3.jpg",
    badge: "POPULAR",
    isFeatured: false,
    specs: {
      "Model": "SONIQ SB3",
      "Power": "240W RMS",
      "Subwoofer": "6.5-inch Wireless Subwoofer",
      "Audio": "Dolby Audio 3D Surround"
    }
  },
  {
    id: "sb-04",
    name: "SONIQ SB4",
    category: "soundbars",
    categoryName: "Soundbars",
    price: 12999,
    rating: 4.8,
    reviewsCount: 210,
    description: "Dolby Audio certified soundbar system with wireless subwoofer and full smart remote.",
    keyFeature: "Dolby Audio & Wireless Subwoofer",
    channelConfig: "3.1 Surround",
    connectivity: "HDMI eARC, Optical, Bluetooth 5.3",
    dolbyAudio: "Dolby Digital Plus Certified",
    image: "assets/images/products/sb-04_soniq_sb4.jpg",
    badge: "BESTSELLER",
    isFeatured: true,
    specs: {
      "Model": "SONIQ SB4",
      "Power": "320W RMS",
      "Voice": "Dedicated Center Dialogue Channel",
      "Remote": "Smart Remote Included"
    }
  },
  {
    id: "sb-05",
    name: "SONIQ SB5",
    category: "soundbars",
    categoryName: "Soundbars",
    price: 17999,
    rating: 4.9,
    reviewsCount: 265,
    description: "Futuristic soundbar featuring customizable RGB underglow lighting strip and wireless subwoofer.",
    keyFeature: "Dynamic RGB Underglow & HDMI eARC",
    channelConfig: "3.1.2 Channel",
    connectivity: "HDMI 2.1 eARC, Optical, Wi-Fi",
    dolbyAudio: "Dolby Atmos Certified",
    image: "assets/images/products/sb-05_soniq_sb5.jpg",
    badge: "GAMING & CINEMA",
    isFeatured: false,
    specs: {
      "Model": "SONIQ SB5",
      "Lighting": "Full Underglow RGB Lighting Strip",
      "Power": "450W RMS",
      "Pass": "4K HDR Pass-Through"
    }
  },
  {
    id: "sb-06",
    name: "SONIQ SB6",
    category: "soundbars",
    categoryName: "Soundbars",
    price: 24999,
    rating: 5.0,
    reviewsCount: 190,
    description: "Flagship 5.1 Channel surround home cinema system with dual rear satellite speakers and wireless sub.",
    keyFeature: "5.1 Surround & Dual Rear Satellites",
    channelConfig: "5.1 Channel True Surround",
    connectivity: "HDMI eARC, Optical, Wi-Fi, Bluetooth 5.4",
    dolbyAudio: "Dolby Atmos & DTS Digital Surround",
    image: "assets/images/products/sb-06_soniq_sb6.jpg",
    badge: "FLAGSHIP CINEMA",
    isFeatured: true,
    specs: {
      "Model": "SONIQ SB6",
      "Power": "600W RMS Cinema System",
      "Satellites": "Dual Rear Satellite Speakers",
      "Subwoofer": "8-inch Long-Throw Subwoofer"
    }
  }
];

export const marketingBanners = [
  {
    id: 1,
    title: "Upgrade Your Sound",
    subtitle: "Discover your next audio experience with high-definition wireless technology.",
    cta: "Shop All Products",
    tag: "SPECIAL PROMO",
    discount: "GET UP TO 25% OFF WITH CODE 'SONIQ10'"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Audio Enthusiast & Musician",
    comment: "The SONIQ AirBuds Pro ANC completely blew me away. The depth of bass combined with absolute noise isolation rivals brands double the price!",
    rating: 5,
    product: "SONIQ AirBuds Pro"
  },
  {
    id: 2,
    name: "Priya Malhotra",
    role: "Content Creator",
    comment: "The Studio H1 headphones have become my daily driver for video editing and music. 50 hours of battery life means I charge them once a week.",
    rating: 5,
    product: "SONIQ Studio H1"
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Tech Reviewer",
    comment: "SONIQ Atmos B4 is hands down the best Dolby Atmos soundbar in its segment. The spatial 3D surround sound in movies is unreal.",
    rating: 5,
    product: "SONIQ Atmos B4"
  }
];
