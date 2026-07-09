import { motion } from 'framer-motion';
import { useMemo } from 'react';

const GRID_COLS = 6;
const GRID_ROWS = 4;

/**
 * ShatterImage — splits an image into a grid of pieces that fly in
 * from random scattered positions and assemble into the full image.
 */
export default function ShatterImage({ src, alt, className = '' }) {
    const pieces = useMemo(() => {
        const result = [];
        for (let row = 0; row < GRID_ROWS; row++) {
            for (let col = 0; col < GRID_COLS; col++) {
                // Each piece gets a unique random scatter origin
                const angle = Math.random() * Math.PI * 2;
                const distance = 300 + Math.random() * 500;
                const randomX = Math.cos(angle) * distance;
                const randomY = Math.sin(angle) * distance;
                const randomRotate = (Math.random() - 0.5) * 240;
                const randomScale = Math.random() * 0.3 + 0.2;

                // Stagger delay: edge pieces arrive first, center pieces last
                const centerDistRow = Math.abs(row - (GRID_ROWS - 1) / 2) / ((GRID_ROWS - 1) / 2);
                const centerDistCol = Math.abs(col - (GRID_COLS - 1) / 2) / ((GRID_COLS - 1) / 2);
                const centerDist = Math.sqrt(centerDistRow ** 2 + centerDistCol ** 2);
                const delay = (1 - centerDist) * 0.4 + Math.random() * 0.08;

                result.push({
                    row,
                    col,
                    initialX: randomX,
                    initialY: randomY,
                    initialRotate: randomRotate,
                    initialScale: randomScale,
                    delay,
                });
            }
        }
        return result;
    }, []);

    return (
        <div className={`relative ${className}`}>
            {/* Invisible sizing image — sets the container dimensions */}
            <img
                src={src}
                alt={alt}
                className="w-full h-auto invisible select-none pointer-events-none mix-blend-multiply"
                draggable={false}
            />

            {/* Animated pieces overlay */}
            {pieces.map((piece, i) => {
                const clipTop = (piece.row / GRID_ROWS) * 100;
                const clipBottom = ((piece.row + 1) / GRID_ROWS) * 100;
                const clipLeft = (piece.col / GRID_COLS) * 100;
                const clipRight = ((piece.col + 1) / GRID_COLS) * 100;

                return (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        initial={{
                            x: piece.initialX,
                            y: piece.initialY,
                            rotate: piece.initialRotate,
                            scale: piece.initialScale,
                            opacity: 0,
                            filter: 'blur(4px)',
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 1,
                            opacity: 1,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 1.4,
                            delay: 0.5 + piece.delay,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            clipPath: `polygon(${clipLeft}% ${clipTop}%, ${clipRight}% ${clipTop}%, ${clipRight}% ${clipBottom}%, ${clipLeft}% ${clipBottom}%)`,
                            willChange: 'transform, opacity, filter',
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            className="w-full h-auto select-none pointer-events-none mix-blend-multiply"
                            draggable={false}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}
