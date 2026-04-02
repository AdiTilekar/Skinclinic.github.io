import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'
import SeoManager from './components/SeoManager'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkinServices from './pages/services/SkinServices'
import HairServices from './pages/services/HairServices'
import LaserServices from './pages/services/LaserServices'

// Skin Treatments
import AcneTreatment from './treatments/skin/AcneTreatment'
import AntiAging from './treatments/skin/AntiAging'
import Pigmentation from './treatments/skin/Pigmentation'
import HydraFacial from './treatments/skin/HydraFacial'
import MediFacial from './treatments/skin/MediFacial'
import SkinTightening from './treatments/skin/SkinTightening'
import GlutathioneIV from './treatments/skin/GlutathioneIV'
import VampireFacial from './treatments/skin/VampireFacial'
import SkinBrightening from './treatments/skin/SkinBrightening'
import ScarTreatment from './treatments/skin/ScarTreatment'

// Hair Treatments
import PRPTherapy from './treatments/hair/PRPTherapy'
import GFCTherapy from './treatments/hair/GFCTherapy'
import Mesotherapy from './treatments/hair/Mesotherapy'
import HairTransplant from './treatments/hair/HairTransplant'
import HairRegrowth from './treatments/hair/HairRegrowth'
import LowLightLaserTreatment from './treatments/hair/LowLightLaserTreatment'
import MicroNeedling from './treatments/hair/MicroNeedling'

// Laser Treatments
import LaserHairRemoval from './treatments/laser/LaserHairRemoval'
import CarbonLaserFacial from './treatments/laser/CarbonLaserFacial'
import QSwitchLaser from './treatments/laser/QSwitchLaser'
import FractionalCO2 from './treatments/laser/FractionalCO2'
import IPLTreatment from './treatments/laser/IPLTreatment'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SeoManager />
      <ScrollToTop />
      <Navbar />
      <FloatingButtons />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/skin" element={<SkinServices />} />
        <Route path="/services/hair" element={<HairServices />} />
        <Route path="/services/laser" element={<LaserServices />} />

        {/* Skin Treatments */}
        <Route path="/treatments/skin/acne-treatment" element={<AcneTreatment />} />
        <Route path="/treatments/skin/anti-aging" element={<AntiAging />} />
        <Route path="/treatments/skin/pigmentation" element={<Pigmentation />} />
        <Route path="/treatments/skin/hydrafacial" element={<HydraFacial />} />
        <Route path="/treatments/skin/medi-facial" element={<MediFacial />} />
        <Route path="/treatments/skin/skin-tightening" element={<SkinTightening />} />
        <Route path="/treatments/skin/glutathione-iv" element={<GlutathioneIV />} />
        <Route path="/treatments/skin/vampire-facial" element={<VampireFacial />} />
        <Route path="/treatments/skin/skin-brightening" element={<SkinBrightening />} />
        <Route path="/treatments/skin/scar-treatment" element={<ScarTreatment />} />

        {/* Hair Treatments */}
        <Route path="/treatments/hair/prp-therapy" element={<PRPTherapy />} />
        <Route path="/treatments/hair/gfc-therapy" element={<GFCTherapy />} />
        <Route path="/treatments/hair/mesotherapy" element={<Mesotherapy />} />
        <Route path="/treatments/hair/hair-transplant" element={<HairTransplant />} />
        <Route path="/treatments/hair/hair-regrowth" element={<HairRegrowth />} />
        <Route path="/treatments/hair/low-light-laser-treatment" element={<LowLightLaserTreatment />} />
        <Route path="/treatments/hair/micro-needling" element={<MicroNeedling />} />

        {/* Laser Treatments */}
        <Route path="/treatments/laser/laser-hair-removal" element={<LaserHairRemoval />} />
        <Route path="/treatments/laser/carbon-laser-facial" element={<CarbonLaserFacial />} />
        <Route path="/treatments/laser/q-switch-laser" element={<QSwitchLaser />} />
        <Route path="/treatments/laser/fractional-co2" element={<FractionalCO2 />} />
        <Route path="/treatments/laser/ipl-treatment" element={<IPLTreatment />} />

        {/* Route Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
