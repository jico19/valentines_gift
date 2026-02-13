import { useContext, useState } from "react"
import { yesContext } from "/src/components/yesContext"

const AskPage = () => {
    const [currText, setCurrText] = useState("No")
    const [scale, setScale] = useState(1)
    const [showConfetti, setShowConfetti] = useState(false)
    const { setYes } = useContext(yesContext)

    const texts = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Last chance!",
        "Hay ano ka naman 😭",
        "Positive?",
        "100% sure?",
        "Okay pero...",
        "Seryoso ka?"
    ]

    const randomText = () => {
        const randomIndex = Math.floor(Math.random() * texts.length)
        setCurrText(texts[randomIndex])
        setScale((prev) => prev + 0.15)
    }

    if (showConfetti) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500">
                <div className="bg-white/90 backdrop-blur rounded-3xl p-10 text-center shadow-xl space-y-6">
                    <h1 className="text-5xl font-extrabold text-pink-500 animate-bounce">
                        Yay! 🎉
                    </h1>

                    <p className="text-xl text-gray-700">
                        I knew you’d say yes 💕
                    </p>

                    <p className="text-gray-500 italic">
                        kasi wala ka naman magagawa hehe
                    </p>

                    <div className="text-4xl">❤️✨💖✨❤️</div>

                    <button
                        onClick={() => setYes(true)}
                        className="mt-4 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold
                       hover:bg-pink-600 transition"
                    >
                        Continue →
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 to-rose-400">
            <div className="bg-white/90 backdrop-blur rounded-3xl p-10 shadow-xl space-y-8 text-center max-w-md w-full">
                <h1 className="text-4xl font-extrabold text-pink-500">
                    Pwede ba kita maging Valentine? 💘
                </h1>

                <div className="flex justify-center gap-6">
                    <button
                        onClick={() => setShowConfetti(true)}
                        style={{ transform: `scale(${scale})` }}
                        className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold
                       transition-transform duration-300"
                    >
                        Yes 💕
                    </button>

                    <button
                        onClick={randomText}
                        className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold
                       hover:bg-rose-600 transition"
                    >
                        {currText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AskPage
