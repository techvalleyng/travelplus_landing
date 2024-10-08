import Background from "../components/Background";
// import Book from "../components/Book";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Helps from "../components/Helps";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Header/>
      <Background/>
      <Services/>
      <Helps/>
      <Footer/>
    </div>
  )
}
