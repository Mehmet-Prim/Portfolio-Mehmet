"use client";

import React from 'react'
import { Mail, MapPin, Phone, Send, Clock, Calendar, MessageSquare, Globe, Code, Cpu, Server } from 'lucide-react'
import { ReactTyped } from "react-typed";
import Image from 'next/image';

import GitHub from '@/public/Github.png';

export default function UberMich() {
     return (
        <div className="min-h-screen text-white font-sans relative overflow-hidden">
            <div className="fixed inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float1 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float2 animate-pulse-slow-delay"></div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float3 animate-pulse-slow"></div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <section className="text-center mb-20">
                    <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700 mb-6">
                        <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">Über mich</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <ReactTyped
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                            strings={["Mehmet Yörük"]}
                            typeSpeed={40}
                            backSpeed={100}
                            loop
                        />
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Frontend-Entwickler mit Leidenschaft für moderne Webtechnologien und ästhetisches Design.
                    </p>
                </section>

                <section className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Wer ich bin
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <p>
                                Ich bin Mehmet Yörük, ein leidenschaftlicher Frontend-Entwickler aus der Nähe von Hannover.
                                In der Webentwicklung habe ich zahlreiche Projekte von Konzept bis
                                zur Implementierung begleitet.
                            </p>
                            <p>
                                Meine Stärken liegen in der Entwicklung performanter, zugänglicher und benutzerfreundlicher 
                                Webanwendungen mit modernen Technologien wie React und Next.js.
                            </p>
                            <p>
                                Neben der Entwicklung widme ich mich gerne der Architektur von Softwarelösungen und der 
                                Optimierung von Entwicklungsprozessen.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Meine Skills
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="p-2 bg-cyan-900/30 rounded-lg mr-4">
                                    <Code className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
                                    <p className="text-gray-300">
                                        React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Zustand
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="p-2 bg-purple-900/30 rounded-lg mr-4">
                                    <Server className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
                                    <p className="text-gray-300">
                                        Node.js, Express, NestJS, PostgreSQL, MongoDB, Firebase
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                                    <Cpu className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">DevOps & Tools</h3>
                                    <p className="text-gray-300">
                                        Docker, Git, GitHub Actions, CI/CD, AWS Basics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-gradient-to-br from-cyan-900/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-800/50 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-cyan-900/30 rounded-lg mr-4 group-hover:bg-cyan-900/50 transition-all">
                                <MapPin className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-cyan-400">Standort</h3>
                        </div>
                        <p className="text-gray-300 pl-14 mb-4">
                            Kornblumenweg 13<br />
                            31515 Wunstorf<br />
                            Deutschland
                        </p>
                        <div className="pl-14 flex items-center text-sm text-cyan-300">
                            <Globe className="w-4 h-4 mr-2" />
                            <span>Nahe Hannover (30min Entfernung)</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 p-8 rounded-2xl border border-purple-800/50 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 group">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-purple-900/30 rounded-lg mr-4 group-hover:bg-purple-900/50 transition-all">
                                <Phone className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-purple-400">Telefon & Verfügbarkeit</h3>
                        </div>
                        <p className="text-gray-300 pl-14 mb-2">
                            <a href="tel:+4917681085103" className="hover:text-white transition-colors flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                +49 (0)176 81085103
                            </a>
                        </p>
                        <div className="pl-14 mt-4">
                            <div className="flex items-center text-sm text-purple-300 mb-2">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Mo-Fr: 9:00 - 18:00 Uhr</span>
                            </div>
                            <div className="flex items-center text-sm text-purple-300">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>Termine nach Vereinbarung</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/50 to-gray-900/50 p-8 rounded-2xl border border-blue-800/50 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-900/50 transition-all">
                                <Mail className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-400">E-Mail & Social</h3>
                        </div>
                        <p className="text-gray-300 pl-14 mb-2">
                            <a href="mailto:yorukmehmet544@gmail.com" className="hover:text-white transition-colors flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                yorukmehmet544@gmail.com
                            </a>
                        </p>
                        <div className="pl-14 mt-4">
                            <p className="text-sm text-blue-300 mb-3">
                                Folgen Sie mir auf:
                            </p>
                            <div className="flex space-x-3">
                                <a href="#" className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-900/50 transition-all">
                                    <Image src={GitHub} alt="GitHub" width={25} height={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="max-w-7xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Schreib mir eine Nachricht
                            </h2>
                            <p className="text-gray-400">Ich antworte normalerweise innerhalb von 24 Stunden.</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center text-sm bg-gray-700/50 px-4 py-2 rounded-lg">
                            <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                            <span>Mo-Fr: 9:00 - 18:00 Uhr</span>
                        </div>
                    </div>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                    placeholder="Ihr Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">E-Mail*</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                    placeholder="ihre@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-300 mb-2">Betreff*</label>
                            <input
                                type="text"
                                id="subject"
                                required
                                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                placeholder="Worum geht es?"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-2">Nachricht*</label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                placeholder="Ihre Nachricht..."
                            ></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                                * Pflichtfelder
                            </p>
                            <button
                                type="submit"
                                className="flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 w-full md:w-auto"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Nachricht senden
                            </button>
                        </div>
                    </form>
                </section>
            </main>

            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(1.2); }
                }
                @keyframes pulse-slow-delay {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.25; transform: scale(1.3); }
                }
                .animate-pulse-slow { 
                    animation: pulse-slow 6s ease-in-out infinite; 
                }
                .animate-pulse-slow-delay { 
                    animation: pulse-slow-delay 7s ease-in-out infinite 1.5s; 
                }
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    50% { transform: translate(-50px, -50px) rotate(5deg) scale(1.05); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    50% { transform: translate(50px, 50px) rotate(-5deg) scale(1.03); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    50% { transform: translate(30px, -30px) rotate(3deg) scale(1.04); }
                }
                .animate-float1 { animation: float1 15s ease-in-out infinite; }
                .animate-float2 { animation: float2 20s ease-in-out infinite; }
                .animate-float3 { animation: float3 18s ease-in-out infinite; }
            `}</style>
        </div>
    )
}