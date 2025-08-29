import React from "react"
import * as motion from "motion/react-client"

export default function Click_animation({ children }) {
    return(
        <>
            <motion.div
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.div>
        </>
    )
}