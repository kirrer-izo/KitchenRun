import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
            <div className="sticky top-0 z-50 bg-[#FDFDFC] dark:bg-[#0a0a0a] shadow-sm">
                <header className="w-full px-4 py-3">
                    <nav className="flex justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm text-white bg-red-500 hover:bg-red-600"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm text-white bg-green-500 hover:bg-green-600"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
            </div>

                


                        
                <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
                    <div className="container mx-auto px-4 py-8 max-w-7xl">
                        {/* <!-- Header --> */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                🍽️ Restaurant Management System
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                                Complete multi-user platform for restaurants, delivery drivers, and customers
                            </p>
                        </div>

                        {/* <!-- Roles Grid --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                            {/* <!-- Customer Card --> */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 to-pink-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white mr-4 group-hover:animate-pulse-slow">
                                        👥
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Customer Portal</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Browse interactive menu with categories
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Add items to cart & secure checkout
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Choose delivery or pickup options
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Real-time order tracking
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Rate orders and delivery drivers
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Order history & favorites
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Loyalty points & discounts
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Driver Card --> */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 to-cyan-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white mr-4 group-hover:animate-pulse-slow">
                                        🚗
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Driver Dashboard</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        View available delivery requests
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Accept/decline orders with one tap
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Google Maps navigation integration
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Update delivery status in real-time
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Track earnings & delivery history
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Customer contact & support
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Performance analytics
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Manager Card --> */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl text-white mr-4 group-hover:animate-pulse-slow">
                                        📊
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Manager Control</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Comprehensive sales dashboard
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Menu management (add/edit/remove)
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Driver assignment & tracking
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Staff account management
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Advanced reporting & analytics
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Inventory monitoring
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Customer feedback overview
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Staff Card --> */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl text-white mr-4 group-hover:animate-pulse-slow">
                                        👨‍🍳
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Kitchen Staff</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Receive instant order notifications
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Update order status (Cooking → Ready)
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Mark items as out of stock
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Communication with drivers
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Kitchen queue management
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Preparation time tracking
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                                        Special instructions handling
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- System Flow --> */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                                🔄 System Workflow
                            </h2>
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                                {/* <!-- Step 1 --> */}
                                <div className="flex-1 text-center relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg animate-float">
                                        1
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Order Placed</h4>
                                    <p className="text-gray-600 text-sm">Customer selects items, pays, and order goes to kitchen</p>
                                    <div className="hidden md:block absolute -right-4 top-6 text-2xl text-indigo-500 font-bold">→</div>
                                </div>

                                {/* <!-- Step 2 --> */}
                                <div className="flex-1 text-center relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                                        2
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Kitchen Prep</h4>
                                    <p className="text-gray-600 text-sm">Staff prepares food and marks as "Ready for Pickup"</p>
                                    <div className="hidden md:block absolute -right-4 top-6 text-2xl text-indigo-500 font-bold">→</div>
                                </div>

                                {/* <!-- Step 3 --> */}
                                <div className="flex-1 text-center relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                                        3
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Driver Assigned</h4>
                                    <p className="text-gray-600 text-sm">Nearest available driver accepts and picks up order</p>
                                    <div className="hidden md:block absolute -right-4 top-6 text-2xl text-indigo-500 font-bold">→</div>
                                </div>

                                {/* <!-- Step 4 --> */}
                                <div className="flex-1 text-center relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                                        4
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Delivery</h4>
                                    <p className="text-gray-600 text-sm">Customer receives order and rates the experience</p>
                                    <div className="hidden md:block absolute -right-4 top-6 text-2xl text-indigo-500 font-bold">→</div>
                                </div>

                                {/* <!-- Step 5 --> */}
                                <div className="flex-1 text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg animate-float" style={{animationDelay: '2s' }}>
                                        5
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Analytics</h4>
                                    <p className="text-gray-600 text-sm">Manager reviews performance data and insights</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Advanced Features --> */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                                🚀 Advanced Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">🗺️ GPS Tracking</h3>
                                    <p className="text-sm opacity-90">Real-time location tracking for deliveries</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">💬 Live Chat</h3>
                                    <p className="text-sm opacity-90">Communication between all user types</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-400 to-emerald-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">🎯 Smart Matching</h3>
                                    <p className="text-sm opacity-90">AI-powered driver assignment</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">📊 Analytics</h3>
                                    <p className="text-sm opacity-90">Comprehensive reporting dashboard</p>
                                </div>
                                <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">🔔 Push Notifications</h3>
                                    <p className="text-sm opacity-90">Real-time updates for all users</p>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">💰 Multi-Payment</h3>
                                    <p className="text-sm opacity-90">Cash, M-Pesa, Card, Wallet support</p>
                                </div>
                                <div className="bg-gradient-to-br from-teal-400 to-blue-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">⭐ Review System</h3>
                                    <p className="text-sm opacity-90">Rate food, service, and drivers</p>
                                </div>
                                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">🏪 Multi-Branch</h3>
                                    <p className="text-sm opacity-90">Support for multiple restaurant locations</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Interface Mockups --> */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                                📱 Interface Mockups
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* <!-- Customer Mobile App --> */}
                                <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-4 font-bold text-center">
                                        Customer Mobile App
                                    </div>
                                    <div className="p-6 bg-gray-50 min-h-80">
                                        <div className="bg-white rounded-xl p-4 mb-4 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Chicken Burger</h4>
                                                <p className="text-sm text-gray-600">With fries and drink</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-800">$12.99</p>
                                                <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mt-1 hover:shadow-lg transition-shadow">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mb-6 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Pizza Margherita</h4>
                                                <p className="text-sm text-gray-600">Fresh basil and mozzarella</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-800">$15.99</p>
                                                <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mt-1 hover:shadow-lg transition-shadow">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">Order Preparing</span>
                                            <p className="text-gray-600 mt-3">Estimated: 25 mins</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Driver Dashboard --> */}
                                <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-4 font-bold text-center">
                                        Driver Dashboard
                                    </div>
                                    <div className="p-6 bg-gray-50 min-h-80">
                                        <div className="bg-white rounded-xl p-4 mb-4 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Order #1234</h4>
                                                <p className="text-sm text-gray-600">📍 123 Main St → 456 Oak Ave</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-800">$5.50</p>
                                                <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold mt-1 hover:shadow-lg transition-shadow">
                                                    Accept
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mb-6 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Order #1235</h4>
                                                <p className="text-sm text-gray-600">📍 789 Pine St → 321 Elm St</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-800">$4.25</p>
                                                <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold mt-1 hover:shadow-lg transition-shadow">
                                                    Accept
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">Today's Earnings: $67.50</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Manager Dashboard --> */}
                                <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4 font-bold text-center">
                                        Manager Dashboard
                                    </div>
                                    <div className="p-6 bg-gray-50 min-h-80">
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-green-100 p-4 rounded-xl text-center">
                                                <p className="text-2xl font-bold text-green-600">$2,450</p>
                                                <p className="text-sm text-gray-600">Today's Sales</p>
                                            </div>
                                            <div className="bg-blue-100 p-4 rounded-xl text-center">
                                                <p className="text-2xl font-bold text-blue-600">47</p>
                                                <p className="text-sm text-gray-600">Orders</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mb-3 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Order #1234</h4>
                                                <p className="text-sm text-gray-600">Table 5 - John Doe</p>
                                            </div>
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Ready</span>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Order #1235</h4>
                                                <p className="text-sm text-gray-600">Delivery - Jane Smith</p>
                                            </div>
                                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">Preparing</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Kitchen Staff Terminal --> */}
                                <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-4 font-bold text-center">
                                        Kitchen Staff Terminal
                                    </div>
                                    <div className="p-6 bg-gray-50 min-h-80">
                                        <div className="bg-white rounded-xl p-4 mb-4 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Order #1234</h4>
                                                <p className="text-sm text-gray-600">2x Burger, 1x Pizza</p>
                                            </div>
                                            <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-shadow">
                                                Mark Ready
                                            </button>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mb-6 shadow-md flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800">Order #1235</h4>
                                                <p className="text-sm text-gray-600">3x Pasta, 2x Salad</p>
                                            </div>
                                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">Cooking</span>
                                        </div>
                                        <div className="text-center text-gray-600">
                                            <p>Queue: 3 orders</p>
                                            <p>Avg. prep time: 18 mins</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
