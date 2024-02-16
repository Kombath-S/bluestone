import { Carousel } from "../components/macro/Carousel"
import { motion, } from 'framer-motion'
import { Padded } from "../components/micro/style"
import { WedoCard } from "../components/macro/WedoCard"
import { WorkCard } from "../components/macro"
import { IStaff, StaffCarousel } from "../components/macro/StaffCarousel"
import { BlogItem, IBlogItem } from "../components/macro/BlogItem"
import { TextInput } from "../components/micro/TextInput"
import { ILocationItem, LocationItem } from "../components/macro/LocationItem"

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

const Workdata = [
  {
    image: "/public/img/ourWork-1.png",
    day: 12,
    month: "Mar",
    partner: "",
    place: "",
  },
  {
    image: "/public/img/ourWork-2.png",
    day: 12,
    month: "Nar",
    partner: "Krystal Global Engineering Ltd.",
    place: "Dusseldarf, Germany"
  },
  {
    image: "/public/img/ourWork-3.png",
    day: 12,
    month: "mar",
    partner: "",
    place: "",
  },

]

const staffData: IStaff[] = [
  {
    name: "John Doe",
    title: "Founder",
    image: "/public/img/avatar-2.png"
  },
  {
    name: "David Warner",
    title: "Founder",
    image: "/public/img/avatar-1.png"
  },
  {
    name: "Jane Doe",
    title: "Founder",
    image: "/public/img/avatar-3.png"
  },
  {
    name: "John wick",
    title: "Founder",
    image: "/public/img/avatar-4.png"
  },

]

const blogData: IBlogItem[] = [
  {
    day: 19,
    month: "Mar",
    title: "Questions To Ask Yourself Before Renting Or Buying",
    text: "Trade shows made its place long back while creating a platform to generate business and build professional networks at an international level. Now exhibiting in trade shows is the key..",
    image: "/public/img/blog-1.png",
  },
  {
    day: 20,
    month: "Mar",
    title: "Salon VS Foire, quelle est la différence?",
    "text": "La foire se caractérise comme une manifestation commerciale regroupant des exposants de secteurs d’activité très diversifiés.",
    image: "/public/img/blog-2.png",
  },
  {
    day: 21,
    month: "Mar",
    title: "B2B Marketing Trends to ensure a successful exhi...",
    text: "The B2B marketing landscape is radically changing. With so many tools on the market that achieve results faster and more efficiently,",
    image: "/public/img/blog-3.png",
  },

]

const locationData: ILocationItem[] = [
  {
    country: "INDIA",
    street: "403, Satya Two, Near Ranna Park Bustop, Naranpura, Ahmedabad - 380013, Gujarat(India) ",
    number: "+91 98253 53267",
    email: "info@bluestoneworldwide.com"
  },
  {
    country: "POLAND",
    street: "Telimeny 15, Marki, Post Code 05-270, Warsaw, Poland(Europe) ",
    number: "+48 732 022 871",
    email: "europe@bluestoneworldwide.com"
  },

]

const footerLinks = [
  {
    name: "Exhibition",
    data: [
      ["Exhibition Design", "#"],
      ["Virtual Events", "#"],
      ["Merchandise", "#"],
      ["Event Marketing", "#"],
      ["Exhibition Stand Builders", "#"],
      ["Hybrid Events", "#"],
      ["Event Logistics", "#"],
    ]
  },
  {
    name: "Digital",
    data: [
      ["Web Design", "#"],
      ["Animation", "#"],
      ["WordPress Development", "#"],
      ["Email Marketing", "#"],
      ["SEO", "#"],
      ["Social Marketing", "#"],
      ["App Design & Development", "#"],
    ]
  },
  {
    name: "Branding",
    data: [
      ["Brand Startegy & Development", "#"],
      ["Rebranding", "#"],
      ["Logo Design", "#"],
      ["Packaging Desing", "#"],
      ["Infographics", "#"],
      ["Presentations", "#"],
    ]
  },
  {
    name: "Print",
    data: [
      ["Direct Mail", "#"],
      ["Digital Pinting", "#"],
      ["Large Format", "#"],
      ["Large Format", "#"],
      ["Personalised Mailing", "#"],
      ["Exhibition & Event Planning", "#"],
    ]
  },

]

export const Home = () => {
  return (
    <div className="">
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
          <h1 className=" text-center text-4xl font-bold">What We Do</h1>
          <p className="text-center ">
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

      {/* Our Work*/}
      <section>
        <Padded className=""  >
          <h1 className=" text-center text-4xl font-bold">Our Work</h1>
          <p className="text-center mb-4 ">
            Best Exhibition Stall Designers in India, Europe and Poland</p>

          <div className="flex min-h-72 gap-6 phone:flex-col">
            {
              Workdata.map(el =>
                <WorkCard
                  // text={el.title}
                  image={el.image}
                  key={el.partner}
                  partner={el.partner}
                  month={el.month}
                  day={el.day}
                  place={el.place}
                  type="Exhibition"
                />
              )
            }
          </div>
        </Padded>
      </section>

      {/* Sponsors*/}
      <section>
        <Padded className="bg-blue-2 flex gap-24 tablet:flex-col px-24 my-12 py-12 screen:px-8">

          <div className="left flex py-10 gap-3 flex-1  text-white items-center">
            <div className="self-start">
              <img src="/public/icons/quote.png" alt="" className="w-24" />
            </div>
            <div className="">
              <p className="text-2xl font-bold mb-3">
                You are amazing! You worked so hard for Cady's wedding.
              </p>

              <p className="text-sm mb-6">
                You are amazing! You worked so hard for Cady's wedding. You had every little detail under control you need to run my life!
              </p>
              <StaffCarousel data={staffData} />
            </div>

          </div>

          <div className="right flex-1 flex flex-col gap-14">
            <div className="flex justify-between">
              <img src="/public/img/partner-gocil.png" alt="gocil" className="w-32" />
              <img src="/public/img/partner-Hasco-Lek_1.png" alt="hasco" className="w-32" />
              <img src="/public/img/partner-Ambah.png" alt="ambah" className="w-32" />
            </div>
            <div className="flex justify-between">
              <img src="/public/img/partner-blauberg.png" alt="blauberg" className="w-60 tablet-min:w-52 phone:w-48" />
              <img src="/public/img/partner-Satellite.png" alt="gocil" className="w-60 tablet-min:w-52 phone:w-48" />

            </div>
            <div className="flex justify-between">
              <img src="/public/img/partner-Hoymiles.png" alt="hoymiles" className="w-60 tablet-min:w-52 phone:w-48" />
              <img src="/public/img/partner-mehler-texnologies.png" alt="mehler" className="w-60 tablet-min:w-52 phone:w-48" />

            </div>
          </div>
        </Padded>
      </section>

      {/* blog*/}
      <section>
        <Padded className="">
          <h1 className=" text-center text-4xl font-bold">Latest Blogs</h1>
          <p className="text-center ">
            Our Latest Blogs/News</p>

          <div className="flex phone:flex-col mt-6 justify-between gap-8 phone:items-center">
            {
              blogData.map(el =>
                <BlogItem data={el} key={el.title} />)
            }
          </div>
        </Padded>
      </section>

      {/* form*/}
      <section>
        <Padded className="mt-6 flex tablet:flex-col gap-12">
          <div className="left">
            <h2 className="mb-4 text-6xl font-bold max-w-[26rem] tablet:text-center tablet:max-w-full tablet:mb-6">
              Do you have
              a project?
              Lets Talk.
            </h2>
            <p className="tablet:text-center max-w-[22rem] tablet:max-w-full mb-5">Please fill in the details and we will be in
              touch shortly or send us email or Call us</p>
            <p className="text-blue tablet:text-center">sales@bluestoneworldwide.com</p>
            <p className="text-blue tablet:text-center">99251 77600</p>
          </div>
          <div className="right flex-1">
            <h4 className="tablet:text-center font-semibold text-xl mb-4">Complete the form below...</h4>

            <div className="grid grid-cols-2 gap-4 phone:flex phone:flex-col phone:gap-8">
              <TextInput name="fullName" label="Full Name" />
              <TextInput name="fullName" label="Your Company Name" />
              <TextInput name="fullName" label="Business email" type="email" />
              <TextInput name="fullName" label="Phone Number" type="tel" />
              <TextInput name="fullName" label="Select your Country" type="select" />
              <TextInput name="fullName" label="What service are you  interested in?" type="email" />

              <TextInput name="fullName" label="Tell us about your Projects" type="textarea" className="col-span-2" />

              <span className="bg-blue text-center text-white py-3 col-span-2 cursor-pointer hover:bg-blue-2">Send a request</span>
            </div>
          </div>
        </Padded>
      </section>

      {/* Footer*/}
      <section>
        <Padded className="flex flex-col bg-black min-h-96 text-gray-300 mt-10 px-24 py-8 phone:px-8">

          <div className="flex gap-38 justify-between tablet:flex-col tablet:gap-6 border-b border-gray-200 pb-4">
            <div className="one text-gray-200 font-bold max-w-[26rem]">
              <h3 className="text-6xl relative tablet:text-center w-fit">
                BlueStone
                <span className="w-full h-[1px] bg-gray-200 absolute -bottom-2 left-0"></span>
                <span className=" absolute text-gray-200 text-sm w-max -bottom-4 left-[50%] bg-black -translate-x-[50%] px-2">
                  Empower Your Brand</span>
              </h3>

              {
                locationData.map(el =>
                  <LocationItem data={el} key={el.country} />)
              }
            </div>
            <div className="two grid grid-cols-2  gap-4">
              {
                footerLinks.map(el =>
                  <>
                    <div className="" key={el.name}>
                      <p className="bold text-white mb-4">{el.name}</p>
                      {
                        el.data.map(el =>
                          <p className="text-wrap text-sm mb-2">
                            <a href={el[1]} key={el[0]}>{el[0]}</a>
                          </p>
                        )
                      }
                    </div>
                  </>
                )
              }

            </div>

          </div>
          <div className="copy mt-8">
            <p className="">Copyright © 2022 Bluestone Exhibition and Event Pvt. Ltd.. All rights reserved</p>
            <p className="flex gap-3 items-center justify-between phone:flex-col">
              <p className="flex gap-4 my-2">
                <span className="cursor-pointer">Terms of Use</span>
                <span className="cursor-pointer">Privacy Policy</span>
                <span className="cursor-pointer">Copyright Policy</span>
              </p>
              <p className="flex gap-2">
                <img className="w-4 h-5" src="/public/icons/facebook-dark.png" alt="facebook" />
                <img className="w-5 h-5" src="/public/icons/twitter-dark.png" alt="twitter" />
                <img className="w-5 h-5" src="/public/icons/insta-dark.png" alt="instagram" />
                <img className="w-5 h-5" src="/public/icons/linkedin.png" alt="linkedin" />
                <img className="w-5 h-5" src="/public/icons/youtube-dark.png" alt="youtube" />
              </p>
            </p>
          </div>
        </Padded>
      </section>

    </div>
  )
}
