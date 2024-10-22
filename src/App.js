import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Pf from './components/Pf';
import Offer from './components/banner/offer';
import Review from './Review';
import Enquiry from './components/Enquiry';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Offer />
      <Pf/>
      <Review />
      <Enquiry />
      <Footer/>
    </div>
  );
}

export default App;
