import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Homepage = () => {
    const messages = [
        "Happy Valentine’s, love",
        "Kada araw na nagigising ako, lagi akong nagpapasalamat sa itaas na ikaw ang nakilala ko.",
        "Na kahit minsan tayo’y nagkakasakitan,",
        "Ikaw pa rin ang pipiliin ko.",
        "Ang tanging hiling ko ay ako at ikaw hanggang huli.",
        "Dumaan man ang mga araw na hindi tayo nagkakaintindihan,",
        "Hindi sa biro  ikaw pa rin ang aking pipiliin ko.",
        "Ayun lang naman sa mga corny na salitang binitawan ko.",
        "Haha. Happy Valentine’s ulit, love.",
        "Sana’y nagustuhan mo itong munting gawa ko.",
        "I love you. Happy Valentine’s."
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= messages.length - 1) return

        const timer = setTimeout(() => {
            setIndex((i) => i + 1)
        }, 3500)

        return () => clearTimeout(timer)
    }, [index])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 to-rose-500 px-6">
            <div className="max-w-3xl w-full text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl"
                    >
                        <p className="text-lg md:text-2xl font-medium text-gray-700 leading-relaxed">
                            {messages[index]}
                        </p>

                        <div className="mt-6 flex justify-center gap-2 text-xl text-pink-400">
                            <span>♥</span>
                            <span>♥</span>
                            <span>♥</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Homepage
