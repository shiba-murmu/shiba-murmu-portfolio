import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Mail, MapPin, ShieldCheck, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import portfolioData from '../constants/Data';

// 1. Central Layout Orchestrator Variant
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        }
    }
};

// 2. Standard Cascading Fade-Up Variant
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

// 3. Interactive Parameters/Communication Node Variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    hover: {
        y: -4,
        borderColor: 'rgba(6, 182, 212, 0.3)',
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        boxShadow: '0 12px 30px -10px rgba(6, 182, 212, 0.12)',
        transition: { duration: 0.25, ease: 'easeOut' }
    }
};

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mimic secure production infrastructure validation delay
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Secure payload dispatched successfully.');
            setFormState({ name: '', email: '', message: '' });
        }, 1200);
    };

    return (
        <motion.section
            id="contact"
            className="relative py-24 px-6 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
        >
            {/* Ambient Background Grid Nodes */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header Grid Anchor */}
                <motion.div className="space-y-3 mb-16 text-center md:text-left" variants={itemVariants}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Secure Link</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Initiate Connection
                    </h2>
                </motion.div>

                {/* Master Structural Dual Pane Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Context Pane: Parameter Records */}
                    <div className="grid grid-cols-1 lg:col-span-5 gap-8">

                        <motion.div className="space-y-3" variants={itemVariants}>
                            <h3 className="text-xl font-bold tracking-tight text-slate-200">System Parameters</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                                Seeking full-time engineering deployments, system optimizations, or end-to-end infrastructure architecture builds.
                            </p>
                        </motion.div>

                        {/* Structured Interactive Communication Nodes */}
                        <div className="space-y-4 font-mono text-xs">
                            <motion.div
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/20 border border-slate-900/60 backdrop-blur-sm cursor-pointer"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-cyan-400">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Direct Mailbox</p>
                                    <a href={`mailto:${portfolioData.contactData.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                                        {portfolioData.contactData.email}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/20 border border-slate-900/60 backdrop-blur-sm"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-purple-400">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Operational Node</p>
                                    <p className="text-slate-300 font-light">{portfolioData.contactData.location}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Network Routing Array */}
                        <motion.div className="space-y-3 pt-2" variants={itemVariants}>
                            <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">External Core Directories</p>
                            <div className="flex items-center gap-3">
                                <motion.a
                                    href={portfolioData.contactData.socialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-950/40 border border-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors duration-200"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="w-4 h-4" />
                                </motion.a>
                                <motion.a
                                    href={portfolioData.contactData.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-950/40 border border-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors duration-200"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedinIn className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Context Pane: Secure Gateway Transmission Engine */}
                    <motion.div className="lg:col-span-7" variants={itemVariants}>
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-950/40 to-slate-950/10 backdrop-blur-md border border-slate-900/60 space-y-6 relative overflow-hidden"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Identity Input Row */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Identity / Handle</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="e.g., Alex Carter"
                                        className="w-full h-11 px-4 text-xs text-white placeholder-slate-600 bg-slate-950/50 border border-slate-900 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all font-light"
                                    />
                                </div>

                                {/* Routing Input Row */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Return Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="name@enterprise.com"
                                        className="w-full h-11 px-4 text-xs text-white placeholder-slate-600 bg-slate-950/50 border border-slate-900 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all font-light"
                                    />
                                </div>
                            </div>

                            {/* Secure Payload Message Body */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Payload Message Body</label>
                                <textarea
                                    rows="5"
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Describe connection intent, architecture criteria, or opportunity structures..."
                                    className="w-full p-4 text-xs text-white placeholder-slate-600 bg-slate-950/50 border border-slate-900 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none font-light leading-relaxed"
                                />
                            </div>

                            {/* Action Submit Dispatch Button System */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                                    <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                                    <span>Encrypted communication framework.</span>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 bg-white text-gray-950 text-xs font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm select-none"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isSubmitting ? (
                                            <motion.span
                                                className="inline-flex items-center gap-2"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.15 }}
                                                key="transmitting"
                                            >
                                                Transmitting...
                                                <Loader2 className="w-3 h-3 animate-spin text-cyan-950" />
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                className="inline-flex items-center gap-2"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.15 }}
                                                key="dispatch"
                                            >
                                                Dispatch Message
                                                <Send className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                </div>

            </div>
        </motion.section>
    );
}