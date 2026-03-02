import { motion } from "motion/react";

const modules = [
  {
    id: "01",
    title: "Ideation & Concepts",
    desc: "Develop project narratives and mood boards using AI. Learn to translate spatial ideas into structured visual concepts.",
    tag1: "Creative_Narrative",
    tag2: "v2.0",
  },
  {
    id: "02",
    title: "Floor Plans to Photorealism",
    desc: "Transform basic layouts and sketches into stunning, high-fidelity renders with absolute architectural precision.",
    tag1: "Rendering_Pipeline",
    tag2: "v3.1",
  },
  {
    id: "03",
    title: "Prompting Architecture",
    desc: "Craft precise prompts to control lighting, materials, and architectural styles using advanced LLM spatial logic.",
    tag1: "Linguistic_Control",
    tag2: "v1.5",
  },
  {
    id: "04",
    title: "Motion & Progress",
    desc: "Generate complex animations to showcase construction phases or spatial walkthroughs using video generation models.",
    tag1: "Temporal_Viz",
    tag2: "v2.2",
  },
  {
    id: "05",
    title: "Sound & Voice Over",
    desc: "Add professional narration and atmospheric audio to your project pitches for a complete cinematic experience.",
    tag1: "Audio_Design",
    tag2: "v1.1",
  },
  {
    id: "06",
    title: "Editing & Assembly",
    desc: "Achieve a professional polish for your final promotional video. Integrate all assets into a pitch-winning showcase.",
    tag1: "Post_Production",
    tag2: "v4.0",
  },
];

export function Curriculum() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="curriculum">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase"
          >
            COURSE_TOPICS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-bold text-white uppercase tracking-tighter mb-4"
          >
            01_CURRICULUM_MODULES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm leading-relaxed"
          >
            The program focuses on Artificial Intelligence, Tools, and the
            Creative Workflow across 4 two-hour sessions plus individual
            coaching.
          </motion.p>
        </div>
        <div className="font-mono text-muted text-[10px] uppercase text-right leading-tight">
          TOTAL_HOURS: 08 + 1 COACHING
          <br />
          PROJECT: 2MIN_PROMO_VIDEO
          <br />
          ACCESS: PRIVATE_COMMUNITY
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-surface p-8 blueprint-border hover:border-primary transition-all duration-300"
          >
            <div className="crosshair ch-tl"></div>
            <div class="crosshair ch-tr"></div>
            <div class="crosshair ch-bl"></div>
            <div class="crosshair ch-br"></div>
            <div className="font-mono text-primary text-2xl font-bold mb-8">
              {mod.id}
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4 uppercase tracking-tight">
              {mod.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8">
              {mod.desc}
            </p>
            <div className="pt-6 border-t border-grid-line font-mono text-[10px] text-muted uppercase flex justify-between">
              <span>{mod.tag1}</span>
              <span>{mod.tag2}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
