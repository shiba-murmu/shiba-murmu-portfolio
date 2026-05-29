import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Database, GitBranch, Terminal, Shield, Orbit, Activity } from 'lucide-react';

const skillGroups = [
    {
        category: "Frontend Systems",
        icon: <Layout className="w-4 h-4" />,
        borderColor: "from-cyan-500/30 to-blue-500/10",
        glowColor: "rgba(6, 182, 212, 0.15)",
        description: "Architecting complex, state-driven user interfaces with sub-pixel rendering accuracy.",
        skills: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "TypeScript", "Next.js Core"]
    },
    {
        category: "Backend Engineering",
        icon: <Cpu className="w-4 h-4" />,
        borderColor: "from-purple-500/30 to-pink-500/10",
        glowColor: "rgba(147, 51, 234, 0.15)",
        description: "Building resilient microservices, custom distributed logic systems, and secure API networks.",
        skills: ["Python", "Django", "Node.js", "RESTful APIs", "JWT Auth Engine", "Java"]
    },
    {
        category: "Database & Cloud",
        icon: <Database className="w-4 h-4" />,
        borderColor: "from-emerald-500/30 to-cyan-500/10",
        glowColor: "rgba(16, 185, 129, 0.15)",
        description: "Designing structural relational schemas, handling object stores, and scaling serverless instances.",
        skills: ["PostgreSQL", "MongoDB", "Firebase", "SQL Optimization", "Vercel Systems", "Railway"]
    },
    {
        category: "Developer Tooling",
        icon: <GitBranch className="w-4 h-4" />,
        borderColor: "from-blue-500/30 to-purple-500/10",
        glowColor: "rgba(59, 130, 246, 0.15)",
        description: "Maintaining deterministic git workflows, CI/CD pipelines, and high-fidelity wireframes.",
        skills: ["Git / GitHub", "Lucide Architecture", "Lenis Smooth Scroll", "Vibe Coding Assets", "Clean Architecture", "UI/UX Prototyping"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header */}
                <div className="space-y-3 mb-16 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/40 border border-slate-900/80 backdrop-blur-md rounded-full">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Engine Capabilities</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Technical Architecture Stack
                    </h2>
                </div>

                {/* Premium Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group) => <SkillCard key={group.category} group={group} />)}
                </div>
            </div>
        </section>
    );
}

/* Isolated Card Component to manage dynamic mouse position mechanics safely */
function SkillCard({ group }) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-950/40 to-slate-950/10 backdrop-blur-md border border-slate-900/60 overflow-hidden group transition-all duration-300"
        >
            {/* Interactive Cursor Spotlight Glow Effect */}
            <div
                className="absolute pointer-events-none transition-opacity duration-500 rounded-full"
                style={{
                    width: '250px',
                    height: '250px',
                    background: `radial-gradient(circle, ${group.glowColor} 0%, transparent 70%)`,
                    left: `${coords.x - 125}px`,
                    top: `${coords.y - 125}px`,
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Dynamic Colored Top-Border Accents on Hover */}
            <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${group.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 space-y-5">
                {/* Card Header Unit */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-700 transition-all duration-300 shadow-inner">
                            {group.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-tight">
                            {group.category}
                        </h3>
                    </div>
                    <Activity className="w-3 h-3 text-slate-700 group-hover:text-cyan-400/50 transition-colors duration-500" />
                </div>

                {/* Content Paragraph Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-light min-h-[48px]">
                    {group.description}
                </p>

                {/* High-Fidelity Interactive Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    {group.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-2.5 py-1 text-[10px] font-mono font-medium text-slate-400 bg-slate-950/40 border border-slate-900 rounded-md hover:text-white hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-200 cursor-default shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Decorative Matrix Corner Accent */}
            <div className="absolute bottom-1 right-2 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <Orbit className="w-16 h-16 text-slate-400 animate-[spin_20s_linear_infinite]" />
            </div>
        </div>
    );
}