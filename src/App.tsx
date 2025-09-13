import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import BookReview from "./pages/BookReview"
import Home from "./pages/Home"
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookreview" element={<BookReview/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
