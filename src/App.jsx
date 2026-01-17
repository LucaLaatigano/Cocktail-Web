import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import CockTails from "./components/CockTails"
import About from "./components/About"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <CockTails/>
      <About/>
    </main>
  )
}

export default App
