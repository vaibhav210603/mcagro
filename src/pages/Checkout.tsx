import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, HelpCircle, Lock, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Helper to get a realistic mock price since catalog prices are set to 0 in Context
const getMockPrice = (itemId: string): number => {
    if (itemId.startsWith('t')) return 530; // Teas
    if (itemId.startsWith('o')) return 850; // Oils
    return 1200; // Fertilizers
};

export const Checkout = () => {
    const { items, clearCart } = useCart();
    const navigate = useNavigate();
    
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [country, setCountry] = useState('India');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('Maharashtra');
    const [pinCode, setPinCode] = useState('');
    const [phone, setPhone] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form inputs for Credit Card
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardName, setCardName] = useState('');

    // Calculations based on mock prices
    const cartItemsWithPrices = items.map(item => ({
        ...item,
        price: getMockPrice(item.id)
    }));

    const subtotal = cartItemsWithPrices.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = address ? 0 : null; // Free shipping if address is entered, else "Enter shipping address"
    const total = subtotal;
    const taxes = total * 0.18; // 18% GST mock

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            clearCart();
            navigate('/mrc-mall');
        }, 3500);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md w-full"
                >
                    <div className="w-16 h-16 bg-[#1773B0]/10 text-[#1773B0] rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank you for your order!</h2>
                    <p className="text-gray-500 mb-6 text-sm">Your order has been placed successfully. A confirmation email has been sent to <span className="font-semibold text-gray-800">{emailOrPhone || 'your email'}</span>.</p>
                    <div className="bg-gray-50 rounded-2xl p-4 mb-8 text-left border border-gray-100 space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Order number</span>
                            <span className="font-semibold text-gray-800">#MRC-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Shipping method</span>
                            <span className="font-semibold text-gray-800">Standard Shipping (Free)</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 animate-pulse">Redirecting to MRC Mall...</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 lg:pt-40 min-h-screen bg-white flex flex-col lg:flex-row font-sans text-gray-800">
            {/* LEFT COLUMN: Checkout Info Forms */}
            <div className="flex-1 lg:max-w-[58%] xl:max-w-[55%] px-6 md:px-16 py-12 lg:py-16 overflow-y-auto">
                <div className="max-w-[620px] mx-auto space-y-10">
                    
                    {/* Header/Logo/Brand Area */}
                    <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                        <button 
                            onClick={() => navigate('/mrc-mall')}
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to MRC Mall
                        </button>
                        <h1 className="text-xl font-bold tracking-tight text-gray-900">MRC Mall</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* 1. Contact Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
                                <button type="button" className="text-xs text-[#1773B0] hover:underline font-medium">Sign in</button>
                            </div>
                            <input 
                                required
                                type="text"
                                placeholder="Email or mobile phone number"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0] outline-none text-sm placeholder-gray-400 transition-all bg-white"
                            />
                        </div>

                        {/* 2. Delivery Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900">Delivery</h2>
                            
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">Country/Region</label>
                                    <select 
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    >
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <input 
                                        type="text" 
                                        placeholder="First name (optional)" 
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    />
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="Last name" 
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    />
                                </div>

                                <div className="relative">
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="Address" 
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    />
                                    <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                                </div>

                                <input 
                                    type="text" 
                                    placeholder="Apartment, suite, etc. (optional)" 
                                    value={apartment}
                                    onChange={(e) => setApartment(e.target.value)}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                />

                                <div className="grid grid-cols-3 gap-3">
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="City" 
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    />
                                    <select 
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    >
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                    </select>
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="PIN code" 
                                        value={pinCode}
                                        onChange={(e) => setPinCode(e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    />
                                </div>

                                <div className="relative">
                                    <input 
                                        required 
                                        type="tel" 
                                        placeholder="Phone" 
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                                    />
                                    <HelpCircle className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                                </div>
                            </div>

                            <label className="flex items-center gap-2 mt-4 cursor-pointer text-xs text-gray-600">
                                <input type="checkbox" className="rounded border-gray-300 text-[#1773B0] focus:ring-[#1773B0] w-4 h-4" defaultChecked />
                                <span>Save this information for next time</span>
                            </label>
                        </div>

                        {/* 3. Shipping Method Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900">Shipping method</h2>
                            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-xs text-gray-500 text-center">
                                {address ? (
                                    <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                                        <span>Standard Shipping</span>
                                        <span className="text-green-600 font-bold">Free</span>
                                    </div>
                                ) : (
                                    "Enter your shipping address to view available shipping methods."
                                )}
                            </div>
                        </div>

                        {/* 4. Payment Section */}
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
                                <p className="text-xs text-gray-500 mt-0.5">All transactions are secure and encrypted.</p>
                            </div>

                            <div className="border border-gray-300 rounded-md overflow-hidden">
                                {/* Credit Card Option */}
                                <div className={`p-4 border-b border-gray-200 flex items-center justify-between cursor-pointer ${paymentMethod === 'credit' ? 'bg-[#F4F9FC]' : 'bg-white'}`} onClick={() => setPaymentMethod('credit')}>
                                    <label className="flex items-center gap-3 font-medium text-sm text-gray-800 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="payment" 
                                            checked={paymentMethod === 'credit'} 
                                            onChange={() => setPaymentMethod('credit')}
                                            className="w-4 h-4 text-[#1773B0] border-gray-300 focus:ring-[#1773B0]" 
                                        />
                                        <span>Credit card</span>
                                    </label>
                                    <div className="flex gap-1">
                                        <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" className="h-5 object-contain" />
                                        <img src="https://img.icons8.com/color/32/mastercard.png" alt="Mastercard" className="h-5 object-contain" />
                                        <img src="https://img.icons8.com/color/32/amex.png" alt="Amex" className="h-5 object-contain" />
                                        <span className="text-[10px] text-gray-500 font-bold border border-gray-200 rounded px-1 flex items-center justify-center bg-white">+3</span>
                                    </div>
                                </div>

                                {paymentMethod === 'credit' && (
                                    <div className="p-4 bg-gray-50 border-b border-gray-200 space-y-3">
                                        <div className="relative">
                                            <input 
                                                required={paymentMethod === 'credit'}
                                                type="text" 
                                                placeholder="Card number" 
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)}
                                                className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 text-sm outline-none bg-white focus:border-[#1773B0]"
                                            />
                                            <Lock className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <input 
                                                required={paymentMethod === 'credit'}
                                                type="text" 
                                                placeholder="Expiration date (MM / YY)" 
                                                value={expiry}
                                                onChange={(e) => setExpiry(e.target.value)}
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none bg-white focus:border-[#1773B0]"
                                            />
                                            <div className="relative">
                                                <input 
                                                    required={paymentMethod === 'credit'}
                                                    type="password" 
                                                    placeholder="Security code" 
                                                    value={cvv}
                                                    onChange={(e) => setCvv(e.target.value)}
                                                    maxLength={4}
                                                    className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 text-sm outline-none bg-white focus:border-[#1773B0]"
                                                />
                                                <HelpCircle className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
                                            </div>
                                        </div>
                                        <input 
                                            required={paymentMethod === 'credit'}
                                            type="text" 
                                            placeholder="Name on card" 
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value)}
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-none bg-white focus:border-[#1773B0]"
                                        />
                                        <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-gray-600">
                                            <input type="checkbox" className="rounded border-gray-300 text-[#1773B0] focus:ring-[#1773B0] w-4 h-4" defaultChecked />
                                            <span>Use shipping address as billing address</span>
                                        </label>
                                    </div>
                                )}

                                {/* Razorpay Option */}
                                <div className={`p-4 flex items-center justify-between cursor-pointer ${paymentMethod === 'razorpay' ? 'bg-[#F4F9FC]' : 'bg-white'}`} onClick={() => setPaymentMethod('razorpay')}>
                                    <label className="flex items-center gap-3 font-medium text-sm text-gray-800 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="payment" 
                                            checked={paymentMethod === 'razorpay'} 
                                            onChange={() => setPaymentMethod('razorpay')}
                                            className="w-4 h-4 text-[#1773B0] border-gray-300 focus:ring-[#1773B0]" 
                                        />
                                        <span>Razorpay Secure (UPI, Cards, Wallets)</span>
                                    </label>
                                    <div className="flex gap-1 items-center">
                                        <span className="text-[10px] text-gray-500 font-bold border border-gray-200 rounded px-1 bg-white">UPI</span>
                                        <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" className="h-4 object-contain" />
                                        <img src="https://img.icons8.com/color/32/mastercard.png" alt="Mastercard" className="h-4 object-contain" />
                                        <span className="text-[10px] text-gray-500 font-bold border border-gray-200 rounded px-1 bg-white">+18</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pay Now Button */}
                        <button 
                            type="submit" 
                            disabled={items.length === 0}
                            className="w-full bg-[#1773B0] hover:bg-[#15679e] text-white py-4 rounded-md font-semibold text-base transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Pay now
                        </button>
                    </form>

                    {/* Footer Policy Links */}
                    <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#1773B0]">
                        <button type="button" className="hover:underline">Refund policy</button>
                        <button type="button" className="hover:underline">Shipping</button>
                        <button type="button" className="hover:underline">Privacy policy</button>
                        <button type="button" className="hover:underline">Terms of service</button>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Shopify Summary Side panel (gray background) */}
            <div className="flex-1 lg:max-w-[42%] xl:max-w-[45%] bg-[#F5F5F5] border-l border-gray-200 px-6 md:px-16 py-12 lg:py-16">
                <div className="max-w-[440px] mx-auto space-y-6">
                    {/* Item list */}
                    {items.length === 0 ? (
                        <div className="py-16 text-center text-gray-400 space-y-3">
                            <ShoppingBag className="w-12 h-12 mx-auto text-gray-300" />
                            <p className="text-sm font-medium">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                            {cartItemsWithPrices.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 py-2">
                                    <div className="relative w-16 h-16 rounded-md bg-white border border-gray-200 p-1 flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain rounded" />
                                        <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-1 text-xs">
                                        <h3 className="font-semibold text-gray-800 text-sm leading-tight">{item.name}</h3>
                                        <p className="text-gray-400 mt-0.5 leading-none">{item.category}</p>
                                    </div>
                                    <span className="font-medium text-sm text-gray-700">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="h-px bg-gray-200 w-full my-6"></div>

                    {/* Discount Input */}
                    <div className="flex gap-3">
                        <input 
                            type="text" 
                            placeholder="Discount code" 
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm outline-none focus:border-[#1773B0] focus:ring-1 focus:ring-[#1773B0]"
                        />
                        <button 
                            type="button" 
                            disabled={!discountCode}
                            className="px-5 py-2.5 rounded-md bg-gray-200 text-gray-600 font-medium text-xs tracking-wider uppercase transition-colors hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Apply
                        </button>
                    </div>

                    <div className="h-px bg-gray-200 w-full my-6"></div>

                    {/* Summary Math lines */}
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-semibold text-gray-800">₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="flex items-center gap-1">
                                Shipping <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                            </span>
                            <span>{shipping === 0 ? "Free" : <span className="text-xs text-gray-400 font-normal">Enter shipping address</span>}</span>
                        </div>
                        <div className="flex justify-between text-base font-bold text-gray-900 pt-4">
                            <span>Total</span>
                            <div className="text-right">
                                <span className="text-xs text-gray-400 font-normal mr-2">INR</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 text-right mt-1">Including ₹{taxes.toFixed(2)} in taxes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
