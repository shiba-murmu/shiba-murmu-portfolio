import React from "react"
import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export default function Animate_box() {
    const ref = useRef(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
            
        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.6;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: #28B8D5;
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: #229ABD;
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: #1B7CA5;
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: #155E8D;
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: #0F3F74;
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: #08215C;
        }

    `}</style>
    )
}
