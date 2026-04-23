import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import AboutUs from "./pages/AboutUs"
import BookReview from "./pages/BookReview"
import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookreview" element={<BookReview/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App