import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, GraduationCap, Calendar, Cpu, CheckCircle2, Activity } from 'lucide-react';

// Unified hardware-accelerated Bezier curve motion primitives
const headerVariants = {
    initial: { opacity: 0, y: 25 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

const containerVariants = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05
        }
    }
};

const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const axisVariants = {
    initial: { scaleY: 0 },
    whileInView: {
        scaleY: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    whileInView: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.2 }
    }
};

const experienceData = [
    {
        role: "Web Development Intern",
        organization: "Zidio Development",
        duration: "Apr 2026 — Present",
        borderColor: "from-cyan-500/30 to-blue-500/10",
        glowColor: "rgba(6, 182, 212, 0.12)",
        iconColor: "text-cyan-400",
        description: "Successfully processed comprehensive skill evaluations and integrated modern web interface systems. Collaborating on system performance optimizations and building clean, responsive functional modules.",
        milestones: ["Completed targeted tech skill assessments", "Maintained highly responsive front-end components"]
    },
    {
        role: "Professional Internship Program",
        organization: "Perpex",
        duration: "Sep 2025 — Oct 2025",
        borderColor: "from-cyan-500/30 to-blue-500/10",
        glowColor: "rgba(6, 182, 212, 0.12)",
        iconColor: "text-cyan-400",
        description: "Selected to participate in professional agile sprint environments. Successfully configured enterprise version control parameters, localized remote code bases, and managed repository branch workflows safely.",
        milestones: ["Configured multi-branch repository cloning workflows", "Reviewed code base logic loops in fast-paced sprints"]
    },
    {
        role: "Junior Web Developer",
        organization: "Mello",
        duration: "Jun 2025 — Aug 2025",
        borderColor: "from-cyan-500/30 to-blue-500/10",
        glowColor: "rgba(6, 182, 212, 0.12)",
        iconColor: "text-cyan-400",
        description: "Secured placement engineering role following standard application sprints. Built full-stack responsive web systems and refined interactive application interfaces using micro-component patterns.",
        milestones: ["Cracked technical candidate evaluation track", "Designed lightweight UI states to handle variable user data"]
    }
];

const educationData = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Jharkhand University of Technology",
        duration: "2021 — 2025",
        borderColor: "from-purple-500/30 to-pink-500/10",
        glowColor: "rgba(147, 51, 234, 0.12)",
        iconColor: "text-purple-400",
        description: "Successfully completed full 8th Semester core computer science curriculum requirements. Specialization focus tailored toward algorithms, advanced engineering architectures, database logic, and scalable web routing scripts.",
        milestones: ["Completed 8th Sem CSE academic requirements", "Core architecture thesis tailored to web applications"]
    }
];

export default function EducationAndExperience() {
    return (
        <section id="timeline" className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header */}
                <motion.div
                    className="space-y-3 mb-20 text-center md:text-left"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">System History</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Professional Evolution
                    </h2>
                </motion.div>

                {/* Master Parallel Grid System Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ================= LEFT COLUMN: EXPERIENCE ENGINE ================= */}
                    <div className="space-y-8">
                        <motion.div
                            className="flex items-center gap-3 pb-2 border-b border-slate-900/40"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-cyan-400">
                                <Briefcase className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-md font-bold text-white tracking-tight">Engineering Placements</h3>
                                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Professional Track</p>
                            </div>
                        </motion.div>

                        {/* Timeline Wrapper Container with Stagger Orchestration */}
                        <motion.div
                            className="space-y-6 relative ml-4 pl-6"
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            {/* Dynamic Line-Drawing Rail */}
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-slate-800 via-slate-900/60 to-transparent origin-top"
                                variants={axisVariants}
                            />

                            {experienceData.map((item, idx) => (
                                <TimelineCard key={`${item.role}-${idx}`} item={item} type="experience" />
                            ))}
                        </motion.div>
                    </div>

                    {/* ================= RIGHT COLUMN: ACADEMIC ENGINE ================= */}
                    <div className="space-y-8">
                        <motion.div
                            className="flex items-center gap-3 pb-2 border-b border-slate-900/40"
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-purple-400">
                                <GraduationCap className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-md font-bold text-white tracking-tight">Academic Foundations</h3>
                                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Credential Directory</p>
                            </div>
                        </motion.div>

                        {/* Timeline Wrapper Container with Stagger Orchestration */}
                        <motion.div
                            className="space-y-6 relative ml-4 pl-6"
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            {/* Dynamic Line-Drawing Rail */}
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-slate-800 via-slate-900/60 to-transparent origin-top"
                                variants={axisVariants}
                            />

                            {educationData.map((item, idx) => (
                                <TimelineCard key={`${item.degree}-${idx}`} item={item} type="education" />
                            ))}
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}

/* Isolated Card Component to manage individual mouse tracking configurations safely */
function TimelineCard({ item, type }) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const isExp = type === "experience";

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-gradient-to-b from-slate-950/40 to-slate-950/10 backdrop-blur-md border border-slate-900/60 p-6 rounded-xl space-y-4 overflow-hidden transition-all duration-300"
            variants={cardVariants}
        >
            {/* Interactive Cursor Spotlight Glow Effect */}
            <div
                className="absolute pointer-events-none transition-opacity duration-500 rounded-full"
                style={{
                    width: '250px',
                    height: '250px',
                    background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                    left: `${coords.x - 125}px`,
                    top: `${coords.y - 125}px`,
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Dynamic Top Border Accent */}
            <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${item.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Timeline Node Ring Anchor (Animated & Reacts to Hover) */}
            <motion.div
                className={`absolute -left-[31px] top-7 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 ${isHovered
                        ? (isExp ? 'border-cyan-500 scale-125' : 'border-purple-500 scale-125')
                        : 'border-slate-800'
                    } transition-all duration-300 z-10`}
                variants={nodeVariants}
            />

            {/* Header Info Array */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                    <h4 className={`text-sm font-semibold text-white tracking-tight transition-colors duration-300 ${isExp ? 'group-hover:text-cyan-400' : 'group-hover:text-purple-400'}`}>
                        {isExp ? item.role : item.degree}
                    </h4>
                    <p className="text-xs text-slate-400 font-light">
                        {isExp ? item.organization : item.institution}
                    </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-900/80 font-mono text-[10px] text-slate-500 h-6 w-fit flex-shrink-0">
                    <Calendar className="w-3 h-3 text-slate-600" />
                    <span>{item.duration}</span>
                </div>
            </div>

            {/* Description Body Script */}
            <p className="relative z-10 text-xs text-slate-400 font-light leading-relaxed">
                {item.description}
            </p>

            {/* Internal Milestones Layout */}
            <div className="relative z-10 space-y-1.5 pt-1">
                {item.milestones.map((milestone, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        {isExp ? (
                            <CheckCircle2 className="w-3 h-3 text-slate-600 mt-0.5 flex-shrink-0 group-hover:text-cyan-500/50 transition-colors duration-300" />
                        ) : (
                            <Cpu className="w-3 h-3 text-slate-600 mt-0.5 flex-shrink-0 group-hover:text-purple-500/50 transition-colors duration-300" />
                        )}
                        <span className="font-light">{milestone}</span>
                    </div>
                ))}
            </div>

            {/* Activity Status Pulse Indicator */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <Activity className={`w-3 h-3 ${isExp ? 'text-cyan-500/30' : 'text-purple-500/30'}`} />
            </div>
        </motion.div>
    );
}