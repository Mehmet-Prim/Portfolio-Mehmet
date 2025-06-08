"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = ({ onClick = () => {} }) => (
    <>
        <li className="hover:text-green-500 transition-all duration-200 list-none font-semibold px-2 mx-2 rounded-lg">
            <Link href="/" onClick={onClick}>Home</Link>
        </li>
        <li className="hover:text-green-500 transition-all duration-200 list-none font-semibold px-2 mx-2 rounded-lg">
            <Link href="../portfolio" onClick={onClick}>Portfolio</Link>
        </li>
        <li className="hover:text-green-500 transition-all duration-200 list-none font-semibold px-2 mx-2 rounded-lg">
            <Link href="../uber-mich" onClick={onClick}>Über mich</Link>
        </li>
        <li className="hover:text-green-500 transition-all duration-200 list-none font-semibold px-2 mx-2 rounded-lg">
            <Link href="../kontakt" onClick={onClick}>Kontakt</Link>
        </li>
    </>
);

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <div className="shadow-2xs">
                <header className="max-w-7xl mx-auto py-4 px-4 relative z-50">
                    <nav className="flex items-center justify-between">
                        <h1 className="bg-gradient-to-r from-primary to-green-500 font-bold text-3xl text-transparent bg-clip-text text-nowrap">
                            <Link href="/">Mehmet Yörük</Link>
                        </h1>
                        <ul className="md:flex items-center gap-8 hidden">
                            <NavLinks />
                        </ul>
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-500 transition-colors duration-200 relative z-50"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </nav>
                </header>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40 md:hidden"
                            onClick={closeMenu}
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 left-0 h-full w-80 bg-black/50 backdrop-blur-lg shadow-2xl border-r border-gray-200 z-50 md:hidden"
                        >
                            {/* Header in Sidebar */}
                            <div className="p-6 border-b border-gray-200">
                                <h1 className="bg-gradient-to-r from-primary to-green-500 font-bold text-3xl text-transparent bg-clip-text">
                                    Mehmet Yörük
                                </h1>
                            </div>

                            <div className="pt-4 space-y-4">
                                <NavLinks onClick={closeMenu} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}