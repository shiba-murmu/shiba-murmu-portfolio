import React from 'react'
import * as motion from "motion/react-client"

export default function PopUp_open({ children }) {
    // This will popup the open the children...
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                scale: {
                    type: 'spring',
                    visualDuration: 0.4, bounce: 0.5
                }
            }}
        >
            {children}
        </motion.div>
    )
}
