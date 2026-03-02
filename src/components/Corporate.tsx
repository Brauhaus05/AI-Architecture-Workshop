import { motion } from "motion/react";

export function Corporate() {
  return (
    <section className="py-24 border-t border-grid-line bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blueprint-border p-8 bg-surface"
        >
          <div className="font-mono text-primary text-xs mb-4 uppercase tracking-widest">
            CORPORATE_TRAINING
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-6 uppercase tracking-tighter">
            Build an Internal Creative Laboratory
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Upskill your entire studio with customized training tailored to your
            firm's DNA. Use your actual floor plans and project briefs as the
            foundation for practical exercises.
          </p>
          <button className="w-full border border-primary text-primary font-mono py-4 text-xs font-bold hover:bg-primary hover:text-white transition-all uppercase">
            Request Corporate Proposal
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-tight italic">
            Why Train as a Team?
          </h3>
          <ul className="space-y-4 font-mono text-xs text-muted">
            <li className="flex gap-4">
              <span>[01]</span>{" "}
              <span>
                Tailor-made exercises using your firm's proprietary floor plans.
              </span>
            </li>
            <li className="flex gap-4">
              <span>[02]</span>{" "}
              <span>
                Unified visual identity matching your distinct architectural
                style.
              </span>
            </li>
            <li className="flex gap-4">
              <span>[03]</span>{" "}
              <span>
                Confidential and focused discussion on internal bottlenecks.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
