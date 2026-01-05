import { motion } from "framer-motion";

export default function ProductCard({
    title,
    description,
    tag,
    accent = "cyan",
    location,
}) {
    const accents = {
        cyan: "from-[#5EEAD4] to-[#60A5FA]",
        violet: "from-[#60A5FA] to-[#A78BFA]",
        gold: "from-[#FACC15] to-[#FDBA74]",
    };

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 240 }}
            className="h-full"
        >
            <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
                {/* Accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${accents[accent] || accents.cyan}`} />

                <div className="p-8 flex flex-col h-full">
                    <span className="text-xs uppercase tracking-widest text-[#7C8499] mb-4">
                        {tag}
                    </span>

                    <h4 className="text-2xl font-semibold text-white mb-3">
                        {title}
                    </h4>

                    <p className="text-[#A8B0C2] text-sm leading-relaxed flex-grow">
                        {description}
                    </p>

                    <div className="mt-6 text-sm font-medium text-[#5EEAD4] flex items-center gap-2 hover:underline cursor-pointer" onClick={() => {
                        if (location) {
                            window.location.href = location;
                        }  }}>
                        Learn more →
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
