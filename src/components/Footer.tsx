import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-background-dark border-t border-grid-line py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block border border-primary p-2 mb-12"
        >
          <div className="bg-primary text-white font-mono px-8 py-2 uppercase font-bold text-xs">
            ENROLLMENT OPENS: MAY 2026
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter uppercase leading-[0.9]"
        >
          READY TO CREATE THE FUTURE
          <br />
          OF VISUALIZATION?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-primary text-white font-mono px-12 py-5 text-lg font-bold hover:scale-105 transition-transform uppercase">
            Apply Now
          </button>
          <button className="border border-grid-line text-white font-mono px-12 py-5 text-lg font-bold hover:bg-surface transition-colors uppercase">
            Join Waitlist
          </button>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-grid-line flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-muted uppercase">
          <div>© 2026 A.I. ARCHITECT // BRAUHAUS WORKSHOPS</div>
          <div className="flex items-center gap-12">
            <a className="hover:text-primary" href="#">
              PRIVACY_POLICY
            </a>
            <a className="hover:text-primary" href="#">
              TERMS_OF_SERVICE
            </a>
            <a className="hover:text-primary" href="#">
              CORPORATE_TRAINING
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-success">●</span>
            SYSTEM_STATUS: NOMINAL
          </div>
        </div>
      </div>
    </footer>
  );
}
