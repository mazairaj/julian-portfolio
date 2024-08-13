"use client";

import { motion } from "framer-motion"
import Image from "next/image";

const Signature = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        className="mb-5 xl:mb-0 xl:mt-5" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeInOut" }}}
        style={{ height: '50px', width: 'auto', position: 'relative' }}
      >
        <Image 
          src="/assets/white-signature.png"
          alt="White Signature"
          layout="fill" // This ensures the image fills its container
          objectFit="contain" // Removed this as it's being applied in the style prop
          style={{ objectFit: 'contain' }} // Use the appropriate objectFit value
        />
      </motion.div>
    </div>
  )
}

export default Signature