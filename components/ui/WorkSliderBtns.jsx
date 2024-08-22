"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"


const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper()

  return (
    <div className={containerStyles}>
        <button aria-label="Prev" className={btnStyles} onClick={() =>swiper.slidePrev()}>
            <PiCaretLeftBold className={iconsStyles}/>
        </button>
        <button aria-label="Next" className={btnStyles} onClick={() =>swiper.slideNext()}>
            <PiCaretRightBold className={iconsStyles}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns