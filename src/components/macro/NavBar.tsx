import { useState } from "react"
import { Padded } from "../micro/style"

const links = [
  ["Home", ""],
  ["Company", "#"],
  ["Services", "#", [
    "x", "y"
  ]],
  ["Exhibitions", "#"],
  ["Our Work", "#"],
  ["Blog", "#"],
  ["Resource", "#"],
  ["Contact", "#"],
]
export const NavBar = () => {
  const [menu,setMenu]  = useState(false)

  return (
    <nav className={"h-16 my-2"}>
      <Padded className="flex items-center justify-between">
        <div className="logo">
          <a href="">
            <img src="/public/img/logo.png" alt="logo" className="w-72" />
          </a>
        </div>
        <div className="navs flex gap-5 screen:hidden">
          {
            links.map(el =>
              <a href={el[1] as string} key={el[0] as string}
                className={"flex items-center gap-2 font-semibold hover:text-blue active:text-blue active:font-bold"}>
                {el[0]}

                {
                  el[2] &&
                  <span onClick={() => setMenu(true)}>
                    <img src="/public/icons/carret.png" alt="carret-down" className="w-4" />
                  </span>
                }


              </a>
            )
          }
          <span className="bg-blue text-white px-4 py-2 cursor-pointer  rounded-xl">Get a Quote</span>
        </div>

        <span className="menu:hidden" onClick={() => setMenu(true)} >
          <img src="/public/icons/menu.png" alt="menu" className="w-12 cursor-pointer" />
        </span>

      </Padded>

     
     { menu &&
      <div className="absolute  top-0 z-50 bg-gray-300 w-full h-full flex flex-col justify-center items-center gap-5 text-white">
        
        <span className="absolute top-8" onClick={()=>setMenu(false)}>
          <img src="/public/icons/menu.png" alt="menu" className="w-12 cursor-pointer" />
        </span>

        {
          links.map(el =>
            <a href={el[1] as string} key={el[0] as string}
              className={"flex items-center gap-2 text-lg font-semibold hover:text-blue active:text-blue active:font-bold"}>
              {el[0]}

              {
                el[2] &&
                <span>
                  <img src="/public/icons/carret.png" alt="carret-down" className="w-4" />
                </span>
              }


            </a>
          )
        }
      </div>}
    </nav>
  )
}
