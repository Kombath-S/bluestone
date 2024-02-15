import { Carousel } from "../components/macro/Carousel"
import { motion, } from 'framer-motion'

export const Home = () => {
  return (
    <div
      className="flex h-hero  tablet:flex-col "
      id="hero">
      <div className="title bg-gradient-to-t bg-blue flex flex-col items-center px-16 justify-center tablet:min-h-hero">

        <motion.h1
          className="text-6xl text-white font-bold max-w-80"
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            ease: "circIn"
          }}
        >
          Design. Create. and Build.
        </motion.h1>
        <motion.p 
        className="text-white mt-3  max-w-80"
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            ease: "circOut",
            delay: .3
          }}
        >
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quo, amet a eligendi
          excepturi fugit, animi nisi,
          repellendus labore quisquam assumenda
          pariatur esse neque.
          <button className="flex items-center gap-3 px-4 py-3 rounded-md text-white mt-8 border-2 border-gray-200 active:scale-90">
            Start Your Project
            <span >
              <img src="icons/arrow.png" alt="arrow"
                className="h-4" />
            </span>
          </button>
        </motion.p>
      </div>
      <div className="flex-1  min-h-full bg-gray-300 tablet:min-h-96 tablet:h-96 relative flex">
        <Carousel images={[]} auto />
      </div>
    </div>
  )
}
