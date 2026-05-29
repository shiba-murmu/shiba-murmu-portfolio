import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Cpu, Database, GitBranch, Terminal, Orbit, Activity } from 'lucide-react';

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

// Entry Variant Blueprints
const headerVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    whileInView: (idx) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: idx * 0.1
        }
    })
};

export default function Skills() {
    // 1. Target reference to capture localized viewport cross-sections
    const sectionRef = useRef(null);

    // 2. Track scroll position specifically from when the section sits locked at top until it exits
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // 3. Map exit interpolations: scales down, drifts down, and drops to 0 opacity
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);
    const containerY = useTransform(scrollYProgress, [0, 0.7], [0, 80]);

    return (
        <section ref={sectionRef} id="skills" className="relative py-24 px-6 overflow-hidden">

            {/* 4. Hardware-Accelerated Wrapper mapping real-time scroll properties */}
            <motion.div
                className="max-w-7xl mx-auto w-full relative z-10"
                style={{ opacity, scale, y: containerY }}
            >
                {/* Animated Section Header */}
                <motion.div
                    className="space-y-3 mb-16 text-center md:text-left"
                    variants={headerVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/40 border border-slate-900/80 backdrop-blur-md rounded-full">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Engine Capabilities</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Technical Architecture Stack
                    </h2>
                </motion.div>

                {/* Premium Interactive Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, idx) => (
                        <SkillCard key={group.category} group={group} idx={idx} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

/* Isolated Card Component managing entry transforms and cursor spotlight physics */
function SkillCard({ group, idx }) {
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
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={cardVariants}
            custom={idx}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, borderColor: "rgba(255, 255, 255, 0.15)" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            className="relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-950/40 to-slate-950/10 backdrop-blur-md border border-slate-900/60 overflow-hidden group shadow-sm will-change-transform"
        >
            {/* Interactive Cursor Spotlight Glow Layer */}
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
        </motion.div>
    );
}