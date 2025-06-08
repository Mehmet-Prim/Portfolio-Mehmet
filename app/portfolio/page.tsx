"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Project1 from "@/public/Project1.png";
import Project2 from "@/public/Project2.png";
import Project3 from "@/public/Project3.png";
import {ReactTyped} from "react-typed";

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Arzt-Praxis Website",
            description: "Arzt-Praxis Website mit NextJS und Spring Boot 3",
            image: Project1,
            tags: ["React", "Next.js", "Spring Boot 3", "Tailwind CSS"],
            link: "https://github.com/Mehmet-Prim/neurozentrum-wunstorf"
        },
        {
            id: 2,
            title: "WebLovely Website",
            description: "WebLovely Website mit NextJS und Spring Boot 3",
            image: Project2,
            tags: ["React", "NextJS", "Spring Boot 3", "Tailwind CSS"],
            link: "https://github.com/Mehmet-Prim/Webdeveloper-Firma"
        },
        {
            id: 3,
            title: "Portfolio Mehmet",
            description: "Portfolio von Mehmet",
            image: Project3,
            tags: ["NextJS", "React", "Tailwind CSS"],
            link: "https://github.com/Mehmet-Prim/Portfolio-Mehmet"
        },
    ];

    return (
        <div className="min-h-screen text-white font-sans relative overflow-hidden">
            <div className="fixed inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float1 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float2 animate-pulse-slow-delay"></div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float3 animate-pulse-slow"></div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <section className="mb-16 text-center flex flex-col">
                    <div className="inline-block bg-gray-800/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700 mb-6 max-w-[150px] self-center">
                        <span className="text-cyan-400 text-sm font-medium">Meine Arbeiten</span>
                    </div>
                    <ReactTyped
                        strings={["Projekt Portfolio"]}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                        typeSpeed={40}
                        backSpeed={100}
                        loop>
                    </ReactTyped>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Eine Auswahl meiner Projekte, die meine Fähigkeiten und Erfahrungen in der Webentwicklung zeigen.
                    </p>
                </section>

                <div className="flex justify-center gap-4 mb-16">
                    <button className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-600/40 transition-all">
                        Alle Projekte
                    </button>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs bg-gray-800/70 text-cyan-400 px-3 py-1 rounded-full backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Mehr erfahren
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </section>

                <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700/50 mb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Interessiert an einer Zusammenarbeit?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Wenn Sie ein Projekt haben, das Sie umsetzen möchten, oder einfach nur hallo sagen wollen, würde ich mich freuen, von Ihnen zu hören!
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
                        >
                            Kontakt aufnehmen
                        </Link>
                    </div>
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
    );
}