// src/components/HeartTrail.jsx
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Heart from "./heart";


export default function HeartTrail() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        let last = 0;

        const onMove = (e) => {
            const now = Date.now();
            if (now - last < 40) return; // throttle
            last = now;

            const id = crypto.randomUUID();

            setHearts((h) => [...h, { id, x: e.clientX, y: e.clientY }]);

            setTimeout(() => {
                setHearts((h) => h.filter((heart) => heart.id !== id));
            }, 800);
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <AnimatePresence>
            {hearts.map((heart) => (
                <Heart key={heart.id} x={heart.x} y={heart.y} />
            ))}
        </AnimatePresence>
    );
}
