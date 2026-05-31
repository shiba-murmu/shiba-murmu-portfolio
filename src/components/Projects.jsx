import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, ArrowUpRight, FolderGit2, Layers, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import portfolioData from '../constants/Data';
// Hardware-accelerated hardware curves 
const headerVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const textBlockVariants = (isEven) => ({
    initial: { opacity: 0, x: isEven ? -40 : 40 },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
});

const previewBlockVariants = (isEven) => ({
    initial: { opacity: 0, x: isEven ? 50 : -50, scale: 0.96 },
    whileInView: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
});

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header */}
                <motion.div
                    className="space-y-3 mb-20 text-center md:text-left"
                    variants={headerVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full">
                        <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Selected Work</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Production Showcase
                    </h2>
                </motion.div>

                {/* Asymmetrical Layout Stack */}
                <div className="space-y-32">
                    {portfolioData.projects.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} idx={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ProjectCard({ project, idx }) {
    const isEven = idx % 2 === 0;
    const targetRef = useRef(null);

    // Track scroll coordinates independently per row block
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Create asymmetrical parallax transforms for the canvas card vs layout container
    const previewY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const dynamicFade = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);

    return (
        <motion.div
            ref={targetRef}
            style={{ opacity: dynamicFade }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center will-change-transform"
        >
            {/* Text Context Block */}
            <motion.div
                variants={textBlockVariants(isEven)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-120px" }}
                className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <div className="space-y-2">
                    <p className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
                        {project.type}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                        {project.title}
                    </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {project.description}
                </p>

                {/* System Architecture Metrics */}
                <div className="space-y-2.5 pt-2">
                    {project.metrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />
                            <span className="font-light">{metric}</span>
                        </div>
                    ))}
                </div>

                {/* Micro Tech Pill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] font-mono text-slate-400 bg-slate-950/30 border border-slate-900 rounded-md hover:text-white hover:border-slate-800 transition-colors duration-200 cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Link Row */}
                <div className="flex items-center gap-4 pt-4">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center gap-1.5 h-10 px-4 bg-white text-gray-950 text-xs font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-sm"
                    >
                        Launch Application
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 h-10 px-4 border border-slate-800 text-slate-400 text-xs font-medium rounded-lg hover:border-slate-600 hover:text-white transition-colors duration-200"
                    >
                        <FaGithub className="w-3.5 h-3.5" />
                        View Source
                    </a>
                </div>
            </motion.div>

            {/* Minimalist Visual Preview Block */}
            <motion.div
                variants={previewBlockVariants(isEven)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-120px" }}
                className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            >
                {/* Scroll Parallax Applied to Wrapper Element */}
                <motion.div
                    style={{ y: previewY }}
                    className="relative group overflow-hidden rounded-2xl border border-slate-900/60 bg-gradient-to-b from-slate-950/20 to-slate-950/5 backdrop-blur-sm p-4 sm:p-6 transition-all duration-500 hover:border-slate-700/60 shadow-lg will-change-transform"
                >
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-900 flex items-center justify-center">

                        {/* 1. PROJECT BACKGROUND IMAGE WITH HOVER ZOOM SCALE */}
                        {project.image && (
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                {/* Soft dark overlay gradient to ensure text/icons remain highly legible */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
                            </div>
                        )}

                        {/* Interactive Background Grid Zoom Shift */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 z-1" />

                        {/* Central Canvas Context Markup */}
                        <div className="text-center space-y-2 p-6 z-10">
                            {/* Icon Pulse Effect on Hover */}
                            <div className="w-10 h-10 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center mx-auto shadow-inner group-hover:border-slate-600 group-hover:bg-slate-900 transition-all duration-300">
                                <Layers className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            </div>
                            <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase group-hover:text-slate-300 transition-colors">
                                Deployment Canvas
                            </p>
                            <p className="text-xs text-slate-400 font-light max-w-[220px] mx-auto group-hover:text-slate-200 transition-colors">
                                Active production environment context snapshot
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}