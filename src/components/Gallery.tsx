import { motion } from "motion/react";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1bWFH7MozgGxboSlVJ5pfUluqBR8B3myhablsVVnZI2CrSfg7k0TUip60uuSgRJfWdwkWBdePlIF5xAwS2QFzbJOxotEBnU7momPSB8BGISnEw0pcl8MwK0rWlCUagl7xCsWBgpzsx34y-lhlD-NRbzlqcb5kPwvyJI-oax9-ZMNsqXn2q1UGlY6_EjwVbMzr1gYWIY1ZI95TJANVMWEal5_uICFFDA2_iDu6u0B83V2TgQftJ3CaBENQzWzxVb-vFjH5gAMoj6-t",
    aspect: "aspect-[4/5]",
    promptId: "#8472",
    engine: "FLUX.1",
    iter: "150",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUgQIFFI05tqnwYPme-GGNsEQdfShyy5-VD5unfu8VdpT4eGHzHERwNNNNu9snAMtydAmglMgeFlxm9iOrYl_MfomuNjgnUUzD-OR_oq7L0g8ji1vTBLL084t10N4SNeGQIlaYr4EbepvW8P8rPMED1KGkE6jeu43PDnzlAx9wctaqqrf24ICGwMKW1gZfAy4-AZcWSI8_CDmX_quJacp0Kjm9O4ndu2hGw2KuNS1x6Yi6mwStI1aVxFhXShBSR4aBy_k3p3sHYD8J",
    aspect: "aspect-[3/4]",
    promptId: "#2293",
    engine: "SAMP_METHOD: EULER_A",
    iter: "CFG: 7.5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzIQI4Q_yXLAWXHt3mORXtFmSStzsq82MWCWFVTWD3dC_GwjPQm3WVQB-5nNzG4h4rPLVK8LQNCAg-OCmmy7gqRPIjXDj9hUG4QOk1oVikNnCIm_ikv-hd6jox97J2tAi0XnBtSGsA7RT07l9QBMSD3-dTVysIkbCTUF8gKc5rFtjxvRkL2J202C0WuFc6Wii4EQGgN92QYixs2j28QA6i09U3mXG36yEd7hA6-FeitFLrU5FrtpAJmVca4K06cc9riKW53R8C7sGK",
    aspect: "aspect-[1/1]",
    promptId: "#9104",
    engine: "LATENT_SPACE: V4_HQ",
    iter: "SEED: 88291",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfm7VDrenyyFCOgYLXm9zi5ffOU4UNZMriaagqxamotoiOiqFtV6MxNWHkO9SOfGCEwUejRXSS1-Z6O1y5KJ5qNzwBr-xRyNIhjCJ8kTCQU5E24BEDg3j1LFA-KsmLI8ME5q1rm6ytfP5Lva8yaKXgArb4eNt6bILO-t8CDrh7c3ms8ohW5ntdFEdd0Yw2dQcnWLxrp9bwuSr6PyhZNEEMsBWtbomcVoc3Azr7XMB31OpWpptfIYZZx3BUtJrTd3PgGXbt-5HAsFoD",
    aspect: "aspect-[16/9]",
    promptId: "#4052",
    engine: "GEN_ENGINE: FLUX.PRO",
    iter: "POS: TOP_VIEW",
  },
];

export function Gallery() {
  return (
    <section
      className="py-24 border-t border-grid-line bg-background-dark/50"
      id="archive_gallery"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-wrap items-center gap-0 border border-grid-line bg-surface/50">
          <div className="flex items-center px-4 py-3 border-r border-grid-line bg-primary/5">
            <span className="material-symbols-outlined text-primary text-sm mr-2">
              filter_list
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
              Filter_Params:
            </span>
          </div>
          <div className="flex flex-wrap flex-1">
            <button className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase bg-primary text-white font-bold border-r border-grid-line transition-colors hover:bg-primary/80">
              ALL_GENS
            </button>
            <button className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase text-muted border-r border-grid-line transition-all hover:text-primary hover:bg-surface">
              MIDJOURNEY
            </button>
            <button className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase text-muted border-r border-grid-line transition-all hover:text-primary hover:bg-surface">
              KLING_3
            </button>
            <button className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase text-muted border-r border-grid-line transition-all hover:text-primary hover:bg-surface">
              VEO_3
            </button>
            <button className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase text-muted border-r border-grid-line transition-all hover:text-primary hover:bg-surface">
              FLUX.1
            </button>
            <button className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase text-muted transition-all hover:text-primary hover:bg-surface">
              RUNWAY
            </button>
          </div>
          <div className="hidden xl:flex items-center px-4 py-3 border-l border-grid-line ml-auto">
            <span className="font-mono text-[9px] text-muted uppercase">
              Archive_Index: [001-096]
            </span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group break-inside-avoid"
            >
              <div className="blueprint-border bg-surface p-1 transition-all duration-300 group-hover:border-primary">
                <div className="crosshair ch-tl"></div>
                <div className="crosshair ch-tr"></div>
                <div className="crosshair ch-bl"></div>
                <div className="crosshair ch-br"></div>
                <div className={`relative overflow-hidden ${img.aspect}`}>
                  <img
                    alt={`Gallery item ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    src={img.src}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 px-2 pb-2 flex flex-col gap-1">
                  <p className="font-mono text-[10px] text-primary/80 tracking-tighter uppercase">
                    PROMPT_ID: {img.promptId}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-mono text-[10px] text-muted uppercase">
                      {img.engine}
                    </p>
                    <p className="font-mono text-[10px] text-muted/60">
                      {img.iter}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex gap-4 p-1 bg-surface border border-grid-line">
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] border-r border-grid-line">
              <span className="material-symbols-outlined text-primary">
                download
              </span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">
                BATCH_EXPORT
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] border-r border-grid-line">
              <span className="material-symbols-outlined text-primary">
                share
              </span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">
                GRID_SHARE
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px] border-r border-grid-line">
              <span className="material-symbols-outlined text-primary">
                fullscreen
              </span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">
                EXPAND_ALL
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 min-w-[100px]">
              <span className="material-symbols-outlined text-primary">
                info
              </span>
              <p className="text-[10px] font-mono font-bold tracking-widest text-muted">
                GLOBAL_META
              </p>
            </div>
          </div>
          <button className="group relative flex items-center justify-center px-10 py-4 bg-transparent border border-primary text-primary font-mono font-bold text-xs tracking-[0.2em] transition-all hover:bg-primary/10 rounded-none uppercase">
            LOAD_MORE_ARCHIVE_DATA
          </button>
        </div>
      </div>
    </section>
  );
}
