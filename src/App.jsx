import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <div className="h-dvh bg-black"/>
    </main>
  )
}

export default App
