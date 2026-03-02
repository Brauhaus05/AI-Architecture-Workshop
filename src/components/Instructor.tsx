import { motion } from "motion/react";

export function Instructor() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="instructor">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -top-4 -left-4 font-mono text-[10px] text-primary bg-background-dark px-2 z-10">
            SOURCE_ARCHIVE: BRAUHAUS_VANCOUVER
          </div>
          <div className="blueprint-border p-4">
            <div className="relative aspect-square overflow-hidden grayscale contrast-125 brightness-90 transition-all group-hover:grayscale-0 group-hover:contrast-100">
              <img
                alt="Braulio Brauhaus portrait"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Aq47LEUt8oafwshmraVg8XoqIXszP424UifX0t8ITh1UhZ75VIwLUlltrNK3vm66kdAXG12QhlmaqCgqZjxR8euBUwYOu5-AeImXKBt9RZXDtpEzN0_g3LW5sjFbiNZgEcJps7iG41CTIQMEiNK_3cmxNSd_uian8AuWIyjFT-s4DBHo9GNfrxrwYFeU6JE0HUryfikckhhg8JVWql09EcvBBQEmcRsxhVnJJsqvmwT2AhzlHODmKxcWhbMgc41lBLVBGc-KXzg6"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-white font-mono text-xs px-4 py-2 uppercase font-bold tracking-widest">
            20+ YRS_EXP
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-xs tracking-[0.2em] mb-4 uppercase"
          >
            MEET_YOUR_INSTRUCTOR
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter"
          >
            BRAULIO “BRAUHAUS”
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed"
          >
            Braulio has spent 20+ years at the intersection of design,
            advertising, and audiovisual production. Founder of Doodzoo Studio
            in Vancouver, he specializes in AI-powered concept development and
            audiovisual projects.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 font-mono text-sm text-muted"
          >
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">
                school
              </span>{" "}
              FORMER DIRECTOR AT MIAMI AD SCHOOL MEXICO CITY
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">
                workspaces
              </span>{" "}
              FOUNDER OF DOODZOO STUDIO VANCOUVER
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">
                public
              </span>{" "}
              EDUCATOR ACROSS LATAM, CANADA & U.S.
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
