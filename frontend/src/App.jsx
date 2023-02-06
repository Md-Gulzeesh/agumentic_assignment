import './App.css'
import ApiDevelopmentSection from './components/ApiDevelopmentSection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import GlimpsIntoFuture from './components/GlimpsIntoFuture'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ObserPlateform from './components/ObserPlateform'
import SolutionSection from './components/SolutionSection'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <SolutionSection/>
    <ApiDevelopmentSection/>
    <GlimpsIntoFuture/>
    <ObserPlateform/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
