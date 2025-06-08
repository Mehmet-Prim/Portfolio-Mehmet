"use client";

import React from 'react';
import Image from "next/image";
import { ReactTyped } from "react-typed";

import Project1 from "@/public/Project1.png"
import Project2 from "@/public/Project2.png"
import Project3 from "@/public/Project3.png"
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen text-white font-sans relative overflow-hidden">
            <div className="fixed inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float1 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float2 animate-pulse-slow-delay"></div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float3 animate-pulse-slow"></div>
            </div>

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

            <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
                        <div className="text-center lg:text-left space-y-6">
                            <div className="inline-block bg-gray-800/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700 mb-4">
                                <span className="text-cyan-400 text-sm font-medium">Frontend Developer</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                <ReactTyped
                                    className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                                    strings={["Mehmet Yörük"]}
                                    typeSpeed={40}
                                    backSpeed={100}
                                    loop
                                />
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl">
                                Ich entwickle moderne Webanwendungen mit Fokus auf Performance,
                                nutzerzentriertes Design und skalierbare Architektur.
                            </p>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                <Link href="/kontakt" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20">
                                    Kontakt aufnehmen
                                </Link>
                                <Link href="/portfolio" className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-gray-300 hover:bg-gray-800/50 transition-all">
                                    Projekte ansehen
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Über mich
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Hey, ich bin Mehmet Yörük – ein leidenschaftlicher angehender Frontend-Entwickler mit einem starken Fokus auf moderne Webtechnologien. Aktuell habe ich mein Fachabitur abgeschlossen und vertiefe mein Wissen in der Entwicklung dynamischer, nutzerfreundlicher Anwendungen.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Mein Ziel? Cleaner Code, skalierbare Lösungen und ein nahtloses Nutzererlebnis – von Frontend. Inspiriert von der Schnelllebigkeit der Tech-Welt, liebe ich es, mich in neue Frameworks und Tools einzuarbeiten, um innovative Projekte umzusetzen.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-green-900 to-gray-900 p-6 rounded-xl border border-green-800/50">
                        <h3 className="text-xl font-bold mb-4 text-green-400">Technische Skills</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">▹</span>
                                <span className="text-gray-300">Frontend: React, Next.js, Tailwind</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">▹</span>
                                <span className="text-gray-300">Backend: Spring Boot 3</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">▹</span>
                                <span className="text-gray-300">Datenbanken: MySQL, PostgreSQL</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">▹</span>
                                <span className="text-gray-300">UI/UX & Responsive Design</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-6 rounded-xl border border-blue-800/50">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Interessen</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-blue-400 mr-2">▹</span>
                                <span className="text-gray-300">Technik & Zukunftsthemen</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-400 mr-2">▹</span>
                                <span className="text-gray-300">KI & Wissenschaft</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-400 mr-2">▹</span>
                                <span className="text-gray-300">Mathematik & Informatik</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-400 mr-2">▹</span>
                                <span className="text-gray-300">Programmieren</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-6 rounded-xl border border-purple-800/50">
                        <h3 className="text-xl font-bold mb-4 text-purple-400">Community</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-2">▹</span>
                                <span className="text-gray-300">Open Source Beiträge</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-2">▹</span>
                                <span className="text-gray-300">Tech-Podcasts</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-2">▹</span>
                                <span className="text-gray-300">Lernprojekte</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900 to-gray-900 p-6 rounded-xl border border-cyan-800/50">
                        <h3 className="text-xl font-bold mb-4 text-cyan-400">Freizeit</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-2">▹</span>
                                <span className="text-gray-300">Fitness & Joggen</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-2">▹</span>
                                <span className="text-gray-300">Gaming</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-2">▹</span>
                                <span className="text-gray-300">3D-Modellierung</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Mein Tech Stack
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Die Technologien und Tools, mit denen ich täglich arbeite und die ich beherrsche
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
                            { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
                            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                            { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
                            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                            {name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-20 h-20 bg-gray-800/50 backdrop-blur-md rounded-xl flex items-center justify-center p-3 border border-gray-700 group-hover:border-cyan-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-400/20">
                                    <Image
                                        src={tech.icon}
                                        alt={`${tech.name} Icon`}
                                        width={40}
                                        height={40}
                                        className="filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span className="mt-3 text-gray-400 text-sm group-hover:text-white transition-colors duration-300 font-medium">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Meine Projekte
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Eine Auswahl meiner aktuellen Arbeiten und Projekte
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                image: Project1,
                                title: "Neurozentrum Wunstorf",
                                description: "Psychologie und Neurologie Praxis Website",
                                tags: ["Next.js", "Tailwind CSS", "Spring Boot 3"],
                                githubUrl: "https://github.com/Mehmet-Prim/neurozentrum-wunstorf"
                            },
                            {
                                id: 2,
                                image: Project2,
                                title: "WebLovely Website",
                                description: "Webentwickler Website",
                                tags: ["NextJS", "Tailwind CSS", "Framer Motion"],
                                githubUrl: "https://github.com/Mehmet-Prim/Webdeveloper-Firma"
                            },
                            {
                                id: 3,
                                image: Project3,
                                title: "Portfolio Mehmet",
                                description: "Portfolio von Mehmet",
                                tags: ["NextJS", "Tailwind CSS", "ShadcnUI"],
                                githubUrl: "#"
                            },
                        ].map((project) => (
                            <div key={project.id} className="group relative overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-500">
                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} GitHub Repository (öffnet in neuem Tab)`}
                                    className="block h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
                                    <Image
                                        src={project.image}
                                        alt={`Screenshot des ${project.title} Projekts`}
                                        width={400}
                                        height={250}
                                        className="w-full h-72 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        loading="lazy"
                                        quality={85}
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs bg-gray-800/70 text-cyan-400 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {tag}
                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/portfolio" className="px-8 py-3 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20">
                            Alle Projekte anzeigen
                        </Link>
                    </div>
                </section>
            </main>

            <style jsx global>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-50px, -50px) rotate(5deg); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(50px, 50px) rotate(-5deg); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(30px, -30px) rotate(3deg); }
                }
                .animate-float1 { animation: float1 15s ease-in-out infinite; }
                .animate-float2 { animation: float2 20s ease-in-out infinite; }
                .animate-float3 { animation: float3 18s ease-in-out infinite; }
            `}</style>
        </div>
    );
}