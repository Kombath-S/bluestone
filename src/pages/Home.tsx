import { Carousel } from "../components/macro/Carousel"
import { motion, } from 'framer-motion'
import { Padded } from "../components/micro/style"
import { WedoCard } from "../components/macro/WedoCard"

const wedoData = [
  {
    text: "Exhibitions Stall Design & Fabrications",
    image: "/public/img/wedo-1.png",
    more: true,
  }, {
    text: "Booth Design & Build",
    image: "/public/img/wedo-2.png"
  }, {
    text: "Digital Marketing",
    image: "/public/img/wedo-3.png"
  }, {
    text: "Designing & Branding",
    image: "/public/img/wedo-4.png"
  },
]


export const Home = () => {
  return (
    <div className="" style={{ minHeight: "300vh" }}>
      {/* HERO */}
      <section
        className="flex screen-min:h-hero  tablet:flex-col"
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
          <Carousel images={[]} />
        </div>
      </section>

      {/* sect1 */}
      <section >
        <Padded className="py-14 my-6 flex gap-24 px-20 tablet:flex-col " >
          <div className="left flex flex-col justify-around min-w-96 gap-6">
            <h1 className="text-6xl text-blue font-bold relative tablet:mb-10">
              BlueStone
              <span className="absolute w-20 h-1 bg-blue left-0 -bottom-5"></span>
            </h1>
            <h3 className="text-4xl text-gray-200 font-bold">
              Design, Create and  {" "}
              <span>
                Build bespoke Exhibition Stall
              </span>
            </h3>
          </div>
          <div className="right">
            <p className="mb-3">
              In the 20 Years of experience in Exhibition Stall Design and Installation field. Know we are own startup and  offering you Exclusive Range of Exhibition Stall and  Stand Design in India, Poland, Germany and Europe. We have built our business by taking the time to understand our clients objectives and creating a stand out solution in line with brand & budget.
            </p>
            <p className="">
              We pride ourselves in providing a totally project-managed service, from start to finish. Our on-site team are able to install your unique stand before the show, ensuring that it achieves maximum impact and captivates your target market.
            </p>
            <p>
              <a
                className="flex items-center gap-2 text-blue cursor-pointer mt-4 hover:font-semibold"
                href="/#"
              >
                Read More
                <span className="">
                  <img src="/public/icons/arrow-blue.png" alt="arrow" />
                </span>
              </a>
            </p>
          </div>

        </Padded>
      </section>

      {/* Wedo */}
      <section>
        <Padded className="">
          <h1 className=" text-center">What We Do</h1>
          <p className="text-center text-4xl font-bold">
            Best Exhibition Stall Designers in India, Europe and Poland</p>

          <div className="grid grid-cols-2 gap-6 phone:grid-cols-1 my-6">
            {
              wedoData.map(el =>
                <WedoCard more={el.more} text={el.text} image={el.image} key={el.text} />
              )
            }
          </div>
        </Padded>
      </section>
    </div>
  )
}
