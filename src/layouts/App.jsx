import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import StickyHead from "../components/StickyHead"
import dataSections from "../components/dataComponents"

function App() {

  return (
    <>
      <StickyHead/>
      <Navbar/>
      <Home/>
      <AboutUs  title={dataSections.about.title} text={dataSections.about.text} img={dataSections.about.img} color={dataSections.about.color}/>
      <AboutUs  title={dataSections.vision.title} text={dataSections.vision.text} img={dataSections.vision.img} color={dataSections.vision.color}/>
      <AboutUs  title={dataSections.mission.title} text={dataSections.mission.text} img={dataSections.mission.img} color={dataSections.mission.color}/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
