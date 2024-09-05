import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './BG.css';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Index/Banner';
import PDadvise from './Component/Index/PDadvise';
import PrepaidCard from './Component/Index/PrepaidCard';
import Footer from './Component/Footer/Footer';
import WhyChooseUs from './Component/Index/WhyChooseUs';
import BanFoot from './Component/Index/BanFooter';
import Gamesss from './Component/Games/Games'; // Import the Games component
import UpMoney from './Component/Money/TopUpMoney';
import CashCard from './Component/Money/CashCard';
import BNGames from './Component/Index/BNGames';
import OnlineTopup from './Component/Money/OnlineTopUp';
import Topup from './Component/Money/Topup';
import Article from './Component/Index/Aticle';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Router>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <video className="background-video" autoPlay loop muted>
          <source src="/Img/BGvideo.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <PDadvise />
                    <PrepaidCard />
                    <WhyChooseUs />
                    <BanFoot />
                  </>
                }
              />
              <Route
                path="/games"
                element={
                  <>
                    <BNGames />
                    <Gamesss />
                  </>
                }
              />
              <Route
                path="/topupphone"
                element={
                  <>
                    <BNGames />
                    <UpMoney />
                  </>
                }
              />
              <Route
                path="/cashcard"
                element={
                  <>
                    <BNGames />
                    <CashCard />
                  </>
                }
              />
              <Route
                path="/onlinegames"
                element={
                  <>
                    <BNGames />
                    <OnlineTopup />
                  </>
                }
              />
              <Route
                path="/topup"
                element={
                  <>
                    <BNGames />
                    <Topup />
                  </>
                }
              />
              <Route
                path="/articles"
                element={
                  <>
                    <BNGames />
                    <Article />
                  </>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <FaArrowUp
          className={`scrollTop ${showScroll ? 'show' : ''}`}
          onClick={scrollTop}
          style={{ height: 40 }}
        />
      </div>
    </Router>
  );
}

export default App;
