import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import CockTails from "./components/CockTails"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <CockTails/>
    </main>
  )
}

export default App
