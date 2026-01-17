import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import CockTails from "./components/CockTails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <CockTails/>
      <About/>
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App
