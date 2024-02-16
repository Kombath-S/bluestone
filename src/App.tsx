import { NavBar } from "./components/macro/NavBar"
import { TopBar } from "./components/macro/TopBar"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <TopBar/>
      <NavBar/>
      <Home/>
      <div className="fixed font-bold w-36 h-6 bg-orange-500 top-5 cursor-pointer text-white text-center -right-8 rotate-45 ">
        <a href="https://dribbble.com/omkaro" target="_blank">DESIGNER</a>
      </div>
    </>
  )
}

export default App
