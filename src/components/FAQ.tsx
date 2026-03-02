import { motion } from "motion/react";

const faqs = [
  {
    q: "Do I need previous experience?",
    a: "Not at all. This course is designed for both beginners and seasoned industry professionals. If you’re new to audiovisual production, you’ll learn the fundamentals step by step. If you already use tools like AutoCAD or SketchUp, you’ll discover how to drastically accelerate your workflow.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No coding required. All the tools we’ll use are designed for creatives. You’ll learn through conversational prompts, user-friendly interfaces, and established workflows.",
  },
  {
    q: "How is the course delivered?",
    a: "The course is 100% online, delivered through 4 live sessions (each 2 hours long). You’ll also get access to recorded sessions, downloadable resources, and a private Slack community of AEC professionals.",
  },
  {
    q: "What equipment do I need?",
    a: "A standard laptop with a reliable internet connection is enough, as most of these AI tools are cloud-based. We’ll guide you through platforms like Midjourney, Veo 3, and Nano Banana Pro, explaining pricing tiers so you can fit your budget.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 border-t border-grid-line bg-surface/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase"
          >
            FREQUENTLY_ASKED_QUESTIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-bold text-white tracking-tighter uppercase"
          >
            Support_Protocols
          </motion.h2>
        </div>
        <div className="divide-y divide-grid-line border-y border-grid-line">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="faq-item py-6 focus-within:outline-none"
              tabIndex={0}
            >
              <button className="flex items-center justify-between w-full text-left">
                <span className="font-display text-lg font-bold text-white uppercase hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <span className="material-symbols-outlined text-primary">
                  add
                </span>
              </button>
              <div className="faq-content mt-6 text-slate-400 text-sm leading-relaxed max-w-3xl">
                {faq.a}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
