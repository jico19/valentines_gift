// src/components/Heart.jsx
import { motion } from "framer-motion";

export default function Heart({ x, y }) {
    return (
        <motion.div
            initial={{ opacity: 1, y: 0, scale: 1, rotate: 45 }}
            animate={{ opacity: 0, y: -40, scale: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
        fixed w-3 h-3 bg-rose-500 pointer-events-none
        before:content-['']
        before:absolute before:w-3 before:h-3
        before:bg-inherit before:rounded-full
        before:-top-1.5 before:left-0
        after:content-['']
        after:absolute after:w-3 after:h-3
        after:bg-inherit after:rounded-full
        after:top-0 after:-left-1.5
      "
            style={{
                left: x,
                top: y,
                transform: "rotate(45deg)",
            }}
        />
    );
}
