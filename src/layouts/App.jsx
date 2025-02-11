import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Mission from "../components/Mission"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import StickyHead from "../components/StickyHead"
import Vision from "../components/Vision"

function App() {

  return (
    <>
      <StickyHead/>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Vision/>
      <Mission/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
