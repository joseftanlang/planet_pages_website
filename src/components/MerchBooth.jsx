import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Heart,
  Send,
  CreditCard,
  Truck,
  Shield,
  Package,
  MapPin,
  Mail,
  User,
  Phone,
  DollarSign,
  Gift,
  Trash2,
  CheckCircle,
  Printer,
  ShoppingCart
} from "lucide-react";

// Clothing Products
const PRODUCTS = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    category: "t-shirts",
    sizes: ["S", "M", "L", "XL"],
    inStock: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Premium cotton essential tee"
  },
  {
    id: 2,
    name: "Black Hoodie",
    price: 59.99,
    category: "hoodies",
    sizes: ["M", "L", "XL", "XXL"],
    inStock: 28,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    description: "Cozy fleece hoodie"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 89.99,
    category: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    inStock: 15,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop",
    description: "Classic denim jacket"
  },
  {
    id: 4,
    name: "Graphic Tee - Blue",
    price: 34.99,
    category: "t-shirts",
    sizes: ["S", "M", "L"],
    inStock: 32,
    image: "https://images.unsplash.com/photo-1503342394120-c7d7d53d4c7c?w=400&h=400&fit=crop",
    description: "Artistic graphic print"
  },
  {
    id: 5,
    name: "Cargo Pants",
    price: 69.99,
    category: "pants",
    sizes: ["30", "32", "34", "36"],
    inStock: 20,
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=400&fit=crop",
    description: "Utility cargo pants"
  },
  {
    id: 6,
    name: "White Sneakers",
    price: 79.99,
    category: "shoes",
    sizes: ["7", "8", "9", "10", "11"],
    inStock: 18,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    description: "Classic leather sneakers"
  },
  {
    id: 7,
    name: "Striped Polo",
    price: 44.99,
    category: "t-shirts",
    sizes: ["S", "M", "L", "XL"],
    inStock: 25,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop",
    description: "Smart casual polo"
  },
  {
    id: 8,
    name: "Bomber Jacket",
    price: 99.99,
    category: "outerwear",
    sizes: ["M", "L", "XL"],
    inStock: 12,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    description: "Classic bomber style"
  },
  {
    id: 9,
    name: "Jogger Pants",
    price: 49.99,
    category: "pants",
    sizes: ["S", "M", "L", "XL"],
    inStock: 30,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop",
    description: "Comfortable joggers"
  }
];

const CATEGORIES = ["all", "t-shirts", "hoodies", "outerwear", "pants", "shoes"];

export default function MergeBooth() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const [orderNumber, setOrderNumber] = useState("");
  const [receiptData, setReceiptData] = useState(null);
  const [quantities, setQuantities] = useState({});
  
  // Checkout form state
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "Singapore"
  });

  // Initialize selected sizes and quantities
  useEffect(() => {
    const initialSizes = {};
    const initialQuantities = {};
    PRODUCTS.forEach(p => {
      initialSizes[p.id] = p.sizes[0];
      initialQuantities[p.id] = 1;
    });
    setSelectedSizes(initialSizes);
    setQuantities(initialQuantities);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = [...PRODUCTS];

    if (searchTerm) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      products = products.filter(p => p.category === selectedCategory);
    }

    return products;
  }, [searchTerm, selectedCategory]);

  // Cart functions
  const addToCart = (product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const quantity = quantities[product.id] || 1;
    
    // Check if enough stock
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    const currentQty = existingItem ? existingItem.quantity : 0;
    
    if (currentQty + quantity > product.inStock) {
      alert(`Only ${product.inStock} items left in stock!`);
      return;
    }
    
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, size, quantity }];
    });

    // Show added animation
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const removeFromCart = (productId, size) => {
    setCart(prev => prev.filter(item => !(item.id === productId && item.size === size)));
  };

  const updateQuantity = (productId, size, delta) => {
    setCart(prev => 
      prev.map(item => {
        if (item.id === productId && item.size === size) {
          const newQty = Math.max(1, item.quantity + delta);
          if (newQty > item.inStock) {
            alert(`Only ${item.inStock} items left in stock!`);
            return item;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Wishlist functions
  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalWithTip = subtotal + tipAmount;

  // Generate receipt
  const generateReceipt = () => {
    const orderNum = `MB-${Date.now().toString().slice(-8)}`;
    const date = new Date().toLocaleString('en-SG', { 
      timeZone: 'Asia/Singapore',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const receipt = {
      orderNumber: orderNum,
      date: date,
      customer: checkoutForm,
      items: cart,
      subtotal: subtotal,
      tip: tipAmount,
      total: totalWithTip,
      status: 'Paid'
    };

    // Create HTML receipt
    const receiptHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a; }
          .header { text-align: center; border-bottom: 2px solid #8B5CF6; padding-bottom: 20px; margin-bottom: 20px; }
          .logo { font-size: 24px; font-weight: bold; color: #8B5CF6; }
          .order-info { background: #f8f7fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          .items { margin: 20px 0; }
          .item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .total { font-size: 18px; font-weight: bold; text-align: right; border-top: 2px solid #8B5CF6; padding-top: 15px; margin-top: 15px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px; }
          .tip { color: #8B5CF6; font-weight: bold; }
          .status { display: inline-block; background: #22c55e; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">🛍️ MergeBooth</div>
          <p style="margin: 5px 0 0; color: #666;">Order Receipt</p>
          <span class="status">✓ PAID</span>
        </div>
        
        <div class="order-info">
          <p><strong>Order #:</strong> ${orderNum}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Customer:</strong> ${checkoutForm.name}</p>
          <p><strong>Email:</strong> ${checkoutForm.email}</p>
          <p><strong>Phone:</strong> ${checkoutForm.phone || 'N/A'}</p>
          <p><strong>Delivery:</strong> ${checkoutForm.address}, ${checkoutForm.city}, ${checkoutForm.zip || 'N/A'}, ${checkoutForm.country}</p>
        </div>

        <div class="items">
          <h3>Order Items</h3>
          ${cart.map(item => `
            <div class="item">
              <span>${item.name} (${item.size}) × ${item.quantity}</span>
              <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
          ${tipAmount > 0 ? `
            <div class="item" style="border-bottom: 1px solid #eee;">
              <span>💝 Donation/Tip</span>
              <span class="tip">$${tipAmount.toFixed(2)}</span>
            </div>
          ` : ''}
        </div>

        <div class="total">
          <p>Subtotal: $${subtotal.toFixed(2)}</p>
          ${tipAmount > 0 ? `<p>Tip: $${tipAmount.toFixed(2)}</p>` : ''}
          <p style="font-size: 24px; color: #8B5CF6;">Total: $${totalWithTip.toFixed(2)}</p>
        </div>

        <div class="footer">
          <p>Thank you for shopping at MergeBooth!</p>
          <p>For inquiries, contact: tanjosef33@gmail.com</p>
          <p style="margin-top: 10px; font-size: 10px; color: #999;">This is a digital receipt - no physical copy will be mailed</p>
        </div>
      </body>
      </html>
    `;

    return { receipt, receiptHTML };
  };

  // Handle checkout
  const handleCheckout = async () => {
    // Validate form
    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.address || !checkoutForm.city) {
      alert("Please fill in all required fields (Name, Email, Address, City)");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsProcessing(true);

    try {
      const { receipt, receiptHTML } = generateReceipt();
      setReceiptData(receipt);
      setOrderNumber(receipt.orderNumber);
      
      // Store for printing
      localStorage.setItem('lastReceipt', receiptHTML);
      localStorage.setItem('lastOrderNumber', receipt.orderNumber);

      // Simulate API call to send email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show receipt
      setShowCheckout(false);
      setShowReceipt(true);
      
      // Open print window
      setTimeout(() => {
        const receiptWindow = window.open('', '_blank', 'width=600,height=800');
        if (receiptWindow) {
          receiptWindow.document.write(receiptHTML);
          receiptWindow.document.close();
          setTimeout(() => receiptWindow.print(), 500);
        }
      }, 300);

      // Clear cart after order
      setTimeout(() => {
        setCart([]);
        setTipAmount(0);
        setCustomTip("");
      }, 1000);

    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Tip presets
  const tipPresets = [2, 5, 10, 20];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                MergeBooth
              </h1>
              <span className="hidden sm:inline text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                Clothing
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* CART BUTTON - BIGGER AND MORE VISIBLE */}
              <button
                onClick={() => setShowCart(true)}
                className="relative bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-lg text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2 font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-pulse border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold">✨ Fresh Drops</h2>
            <p className="text-white/80 mt-2">New collection just landed — shop the latest styles</p>
            <button className="mt-4 px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-purple-50/50"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all capitalize ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative"
              >
                <div className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  {/* Square Image */}
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.inStock < 10 && product.inStock > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Only {product.inStock} left
                      </div>
                    )}
                    {product.inStock === 0 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          Sold Out
                        </span>
                      </div>
                    )}
                    
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-2 left-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`w-4 h-4 transition-colors ${
                          wishlist.includes(product.id) 
                            ? "fill-red-500 text-red-500" 
                            : "text-gray-600 hover:text-red-500"
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-purple-600 font-bold text-sm">
                        ${product.price}
                      </span>
                      <span className="text-xs text-gray-500">
                        {product.inStock} left
                      </span>
                    </div>
                    
                    {/* Size, Quantity, and Add to Cart */}
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-1">
                        <select 
                          className="text-xs border border-purple-200 rounded px-1.5 py-1 bg-white flex-1"
                          value={selectedSizes[product.id] || product.sizes[0]}
                          onChange={(e) => {
                            setSelectedSizes(prev => ({
                              ...prev,
                              [product.id]: e.target.value
                            }));
                          }}
                          disabled={product.inStock === 0}
                        >
                          {product.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                        
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-purple-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => {
                              setQuantities(prev => ({
                                ...prev,
                                [product.id]: Math.max(1, (prev[product.id] || 1) - 1)
                              }));
                            }}
                            className="px-1.5 py-1 bg-purple-50 hover:bg-purple-100 transition-colors"
                            disabled={product.inStock === 0}
                          >
                            <Minus className="w-3 h-3 text-purple-600" />
                          </button>
                          <span className="w-6 text-center text-xs font-medium">
                            {quantities[product.id] || 1}
                          </span>
                          <button
                            onClick={() => {
                              const currentQty = quantities[product.id] || 1;
                              if (currentQty < product.inStock) {
                                setQuantities(prev => ({
                                  ...prev,
                                  [product.id]: currentQty + 1
                                }));
                              } else {
                                alert(`Only ${product.inStock} items available!`);
                              }
                            }}
                            className="px-1.5 py-1 bg-purple-50 hover:bg-purple-100 transition-colors"
                            disabled={product.inStock === 0}
                          >
                            <Plus className="w-3 h-3 text-purple-600" />
                          </button>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => addToCart(product)}
                        disabled={product.inStock === 0}
                        className={`w-full text-xs font-medium py-1.5 px-2 rounded-lg transition-all ${
                          product.inStock > 0
                            ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-md hover:scale-[1.02]"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {addedToCart[product.id] ? (
                          <span className="flex items-center justify-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Added!
                          </span>
                        ) : (
                          `Add ${quantities[product.id] || 1} to Cart`
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👕</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or category</p>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowCart(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                  <span className="text-sm text-gray-500">({totalItems} items)</span>
                </div>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-gray-500">Your cart is empty</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="mt-4 text-purple-600 font-medium hover:text-purple-700"
                    >
                      Start Shopping →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={`${item.id}-${item.size}`} className="bg-purple-50/50 rounded-lg p-3 flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500">Size: {item.size}</p>
                          <p className="text-purple-600 font-bold text-sm">${item.price}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, -1)}
                              className="p-0.5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, 1)}
                              className="p-0.5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="ml-auto text-red-500 hover:text-red-700 text-xs font-medium flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-purple-100 p-4 bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Items: {totalItems}</span>
                      <span>Shipping calculated at checkout</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                    className="w-full mt-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowCheckout(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-y-auto max-w-2xl mx-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="bg-purple-50/50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
                  {cart.map(item => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm py-1">
                      <span>{item.name} ({item.size}) × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-purple-200 mt-2 pt-2">
                    <div className="flex justify-between font-medium">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Tip/Donation */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    💝 Add a Tip / Donation
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tipPresets.map(amount => (
                      <button
                        key={amount}
                        onClick={() => {
                          setTipAmount(amount);
                          setCustomTip("");
                        }}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          tipAmount === amount && !customTip
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setTipAmount(0);
                        setCustomTip("");
                      }}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        tipAmount === 0 && !customTip
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      None
                    </button>
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Custom amount..."
                      value={customTip}
                      onChange={(e) => {
                        setCustomTip(e.target.value);
                        setTipAmount(parseFloat(e.target.value) || 0);
                      }}
                      className="w-full pl-9 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      min="0"
                      step="0.50"
                    />
                  </div>
                  {tipAmount > 0 && (
                    <p className="text-xs text-purple-600 mt-1">
                      Thank you for your generous support! ❤️
                    </p>
                  )}
                </div>

                {/* Shipping Information */}
                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-gray-900">Shipping Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                        className="w-full pl-9 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email *"
                        value={checkoutForm.email}
                        onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                        className="w-full pl-9 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={checkoutForm.phone}
                        onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                        className="w-full pl-9 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Address Line *"
                        value={checkoutForm.address}
                        onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                        className="w-full pl-9 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City *"
                        value={checkoutForm.city}
                        onChange={(e) => setCheckoutForm({...checkoutForm, city: e.target.value})}
                        className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={checkoutForm.zip}
                        onChange={(e) => setCheckoutForm({...checkoutForm, zip: e.target.value})}
                        className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isProcessing || cart.length === 0}
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                    isProcessing || cart.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-lg hover:scale-[1.02]"
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    `Place Order • $${totalWithTip.toFixed(2)}`
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Receipt Modal */}
      <AnimatePresence>
        {showReceipt && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowReceipt(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-y-auto max-w-2xl mx-auto"
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-2">
                  Your receipt has been sent to <strong>{checkoutForm.email}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  A copy has also been sent to <strong>tanjosef33@gmail.com</strong>
                </p>

                <div className="bg-purple-50/50 rounded-lg p-4 text-left mb-6 max-h-80 overflow-y-auto">
                  <h3 className="font-semibold text-gray-900 mb-2">Receipt Preview</h3>
                  <p className="text-xs text-gray-500 mb-2">Order #{orderNumber}</p>
                  <div className="text-sm">
                    {receiptData?.items?.map(item => (
                      <div key={`${item.id}-${item.size}`} className="flex justify-between py-1 border-b border-purple-100">
                        <span>{item.name} ({item.size}) × {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    {tipAmount > 0 && (
                      <div className="flex justify-between py-1 text-purple-600 font-medium">
                        <span>💝 Tip</span>
                        <span>${tipAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2 font-bold text-purple-600 border-t-2 border-purple-300 mt-2">
                      <span>Total</span>
                      <span>${totalWithTip.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowReceipt(false);
                      setCart([]);
                      setTipAmount(0);
                      setCustomTip("");
                      setCheckoutForm({
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        city: "",
                        zip: "",
                        country: "Singapore"
                      });
                    }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => {
                      const receipt = localStorage.getItem('lastReceipt');
                      if (receipt) {
                        const win = window.open('', '_blank', 'width=600,height=800');
                        if (win) {
                          win.document.write(receipt);
                          win.document.close();
                          setTimeout(() => win.print(), 500);
                        }
                      }
                    }}
                    className="flex-1 border border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Printer className="w-4 h-4" /> Print Receipt
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}