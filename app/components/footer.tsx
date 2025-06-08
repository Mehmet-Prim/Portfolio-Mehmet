import React from "react";
import Link from "next/link";
import { Mail, MapPin, PhoneCall, ExternalLink, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-700 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    <div className="space-y-6 group">
                        <Link href="/" className="flex items-center group-hover:scale-105 transition-transform duration-300 ease-out">
                            <h1 className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 font-bold text-3xl text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 transition-all duration-300">
                                Mehmet Yörük
                            </h1>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                            Professionelle Webentwicklung und maßgeschneiderte digitale Lösungen für Ihr Business.
                        </p>
                        <div className="h-1 w-0 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative inline-block">
                            Schnelllinks
                            <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { href: "/", text: "Home" },
                                { href: "../portfolio", text: "Portfolio" },
                                { href: "../uber-mich", text: "Über mich" },
                                { href: "../kontakt", text: "Kontakt" }
                            ].map((link, index) => (
                                <li key={index} className="group">
                                    <Link href={link.href} className="relative text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 inline-flex items-center gap-2 py-1 px-2 -mx-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 group-hover:translate-x-2 group-hover:shadow-sm">
                                        <span className="relative">
                                            {link.text}
                                            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
                                        </span>
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative inline-block">
                            Kontakt
                            <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                        </h3>
                        <ul className="space-y-5">
                            <li className="group">
                                <Link href="tel:+4917681085103" className="flex items-start group-hover:translate-x-2 transition-all duration-300 py-2 px-3 -mx-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-sm">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg mr-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 group-hover:scale-110 transition-all duration-300">
                                        <PhoneCall className="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 font-medium">
                                            +49 1768 1085103
                                        </span>
                                    </div>
                                    <ExternalLink className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                            </li>
                            <li className="group">
                                <Link href="mailto:yorukmehmet544@gmail.com" className="flex items-start group-hover:translate-x-2 transition-all duration-300 py-2 px-3 -mx-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-sm">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg mr-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 group-hover:scale-110 transition-all duration-300">
                                        <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 font-medium">
                                            yorukmehmet544@gmail.com
                                        </span>
                                    </div>
                                    <ExternalLink className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                            </li>
                            <li className="group">
                                <div className="flex items-start group-hover:translate-x-2 transition-all duration-300 py-2 px-3 -mx-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-sm cursor-pointer">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg mr-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 group-hover:scale-110 transition-all duration-300">
                                        <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 font-medium">
                                            Kornblumenweg 13<br />
                                            31515 Wunstorf
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-transparent rounded-lg -mx-4 px-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 font-medium">
                        © {new Date().getFullYear()} Mehmet Yörük. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        {[
                            { href: "../portfolio", text: "Portfolio" },
                            { href: "../kontakt", text: "Kontakt" }
                        ].map((link, index) => (
                            <Link key={index} href={link.href} className="group relative text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-all duration-300 font-medium">
                                <span className="relative inline-flex items-center gap-1">
                                    {link.text}
                                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                                </span>
                                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}