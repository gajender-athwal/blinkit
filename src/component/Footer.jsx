import React from 'react'
import { FaClock } from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10 px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
                <div className='grid grid-cols-3 gap-4 text-gray-600'>
                    <div>
                        <h2 className="text-2xl font-semibold text-black ">Useful Links</h2>
                        <div className="mt-5 space-y-3">
                            <p>Blog</p>
                            <p>Privacy</p>
                            <p>Terms</p>
                            <p>FAQs</p>
                            <p>Security</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="space-y-3 mt-[51px]">
                        <p>Partner</p>
                        <p>Franchise</p>
                        <p>Seller</p>
                        <p>Warehouse</p>
                        <p>Deliver</p>
                        <p>Resources</p>
                    </div>
                    <div className="space-y-3 mt-[51px]">
                        <p>Recipes</p>
                        <p>Bistro</p>
                        <p>District</p>
                        <p>Blinkit Ambulance</p>

                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-4 text-gray-600'>
                        <div>
                            <h2 className="text-2xl font-semibold text-black ">Categories     <a className='text-green-400' href="#">  see all</a>
                            </h2>
                            <div className="mt-5 space-y-3">
                                <p>Bath & Body</p>
                                <p>Beauty & Cosmetics</p>
                                <p>Health & Pharma</p>
                                <p>Atta, Rice & Dal</p>
                                <p>Bakery & Biscuits</p>
                                <p>Kitchenware & Appliances</p>
                                <p>Drinks & Juices</p>
                                <p>Sauces & Spreads</p>
                                <p>Home & Lifestyle</p>
                                <p>Stationery & Games</p>
                                <p>Rakhi Gifts</p>
                            </div>
                        </div>
                        <div className="space-y-3 mt-[51px]">
                            <p>Hair</p>
                            <p>Feminine Hygiene</p>
                            <p>Sexual Wellness</p>
                            <p>Oil, Ghee & Masala</p>
                            <p>Dry Fruits & Cereals</p>
                            <p>Chips & Namkeen</p>
                            <p>Tea, Coffee & Milk Drinks</p>
                            <p>Paan Corner</p>
                            <p>Cleaners & Repellents</p>
                            <p>Print Store</p>
                        </div>
                        <div className="space-y-3 mt-[51px]">
                            <p>Skin & Face</p>
                            <p>Baby Care</p>
                            <p>Vegetables & Fruits</p>
                            <p>Dairy, Bread & Eggs</p>
                            <p>Chicken, Meat & Fish</p>
                            <p>Sweets & Chocolates</p>
                            <p>Instant Food</p>
                            <p>Ice Creams & More</p>
                            <p>Electronics</p>
                            <p>E-Gift Cards</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 max-w-[1280px] mx-auto px-4 py-6 border-t border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-6">

                {/* Copyright */}
                <p className="text-sm text-gray-500 text-center lg:text-left">
                    © Blink Commerce Private Limited, 2016-2026
                </p>

                {/* Download App */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <h3 className="font-semibold text-gray-700">
                        Download App
                    </h3>

                    <img
                        src="https://blinkit.com/d61019073b700ca49d22.png"
                        alt="App Store"
                        className="h-10 cursor-pointer"
                    />

                    <img
                        src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                        alt="Google Play"
                        className="h-10 cursor-pointer"
                    />
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center cursor-pointer">
                        <FaXTwitter />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center cursor-pointer">
                        <FaFacebookF />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center cursor-pointer">
                        <FaInstagram />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center cursor-pointer">
                        <FaLinkedinIn />
                    </div>

                </div>

            </div>

        </footer>
    )
}
