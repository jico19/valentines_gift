import { images } from "/src/assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Timeline = () => {
    return (
        <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-pink-300 -translate-x-1/2" />

            <div className="space-y-20">
                {images.map((item, i) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.2,
                    })

                    const isLeft = i % 2 === 0

                    return (
                        <motion.div
                            key={item.id}
                            ref={ref}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`relative flex ${isLeft ? "justify-start pr-10" : "justify-end pl-10"
                                }`}
                        >
                            {/* Dot */}
                            <span className="absolute left-1/2 top-6 h-4 w-4 rounded-full bg-pink-500 -translate-x-1/2 shadow" />

                            {/* Card */}
                            <div className="w-full sm:w-[45%] bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative aspect-square">
                                    <img
                                        src={item.path}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-4 text-center">
                                    <p className="text-sm text-gray-500">
                                        {new Date(item.date)
                                            .toUTCString()
                                            .split(" ")
                                            .slice(0, 4)
                                            .join(" ")}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Timeline
