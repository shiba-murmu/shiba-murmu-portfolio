import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Mail, MapPin, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const fadeUpVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
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
        <section id="contact" className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header */}
                <motion.div className="space-y-3 mb-16 text-center md:text-left" {...fadeUpVariant}>
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
                    <motion.div className="lg:col-span-5 space-y-8" {...fadeUpVariant}>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold tracking-tight text-slate-200">System Parameters</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                                Seeking full-time engineering deployments, system optimizations, or end-to-end infrastructure architecture builds.
                            </p>
                        </div>

                        {/* Structured Communication Nodes */}
                        <div className="space-y-4 font-mono text-xs">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/20 border border-slate-900/60 backdrop-blur-sm">
                                <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-cyan-400">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Direct Mailbox</p>
                                    <a href="mailto:shibamurmu.dev@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                        shibamurmu.dev@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/20 border border-slate-900/60 backdrop-blur-sm">
                                <div className="w-8 h-8 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-purple-400">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Operational Node</p>
                                    <p className="text-slate-300 font-light">Jamshedpur, Jharkhand, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Network Routing Array */}
                        <div className="space-y-3 pt-4">
                            <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">External Core Directories</p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-950/40 border border-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                                >
                                    <FaGithub className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-950/40 border border-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                                >
                                    <FaLinkedinIn className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Context Pane: Secure Gateway Transmission Engine */}
                    <motion.div className="lg:col-span-7" {...fadeUpVariant}>
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

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 bg-white text-gray-950 text-xs font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm select-none"
                                >
                                    {isSubmitting ? 'Transmitting...' : 'Dispatch Message'}
                                    <Send className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}