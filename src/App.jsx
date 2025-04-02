import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Lectures from './pages/lectures';
import Resume from './pages/resume';
import Bio from './pages/bio';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Ethics from './pages/ethics';
import Hermeneutics from './pages/hermeneutics';
import AfricanAmericanRelCul from './pages/africanamericanrelcul';
import PublicTheology from './pages/publictheology';
import SpeakingWorkshop from './pages/speakingworkshop';
import Give from './pages/give';
import Venmo from './pages/venmo';
import PayPal from './pages/paypal';
import Zelle from './pages/zelle';
import ApplePay from './pages/applePay';
import MobileText from './pages/mobiletext';
import GooglePay from './pages/googlepay';
import Stocks from './pages/stocks';
import DonorAdvisedFunds from './pages/donorAdvisedFunds';
import Crypto from './pages/crypto';
import DirectTransfer from './pages/directTransfer';
import WordsofAffirmation from './pages/wordsofAffirmation';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'About') {
      return <About handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Bio') {
      return <Bio />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'SpeakingWorkshop') {
      return < SpeakingWorkshop handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Footer') {
      return <Footer handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Lectures') {
      return <Lectures handlePageChange={handlePageChange} />;
    }
    if (currentPage.startsWith('Lectures')) {
      const lecturePage = currentPage.split('/')[1];
      if (lecturePage === 'Ethics') {
        return <Ethics handlePageChange={handlePageChange} />;
      }
      if (lecturePage === 'Hermeneutics') {
        return <Hermeneutics handlePageChange={handlePageChange} />;
      }
      if (lecturePage === 'AfricanAmericanRelCul') {
        return <AfricanAmericanRelCul handlePageChange={handlePageChange} />;
      }
      if (lecturePage === 'PublicTheology') {
        return <PublicTheology handlePageChange={handlePageChange} />;
      }
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Give') {
        return <Give handlePageChange={handlePageChange} />;
      }
      if (currentPage.startsWith('Give')) {
        const givePage = currentPage.split('/')[1];
        if (givePage === 'MobileText') {
          return <MobileText handlePageChange={handlePageChange} />;
        }
        if (givePage === 'Stocks') {
          return <Stocks handlePageChange={handlePageChange} />;
        }
        if (givePage === 'DonorAdvisedFunds') {
          return <DonorAdvisedFunds handlePageChange={handlePageChange} />;
        }
        if (givePage === 'Crypto') {
          return <Crypto handlePageChange={handlePageChange} />;
        }
        if (givePage === 'WordsofAffirmation') {
          return <WordsofAffirmation handlePageChange={handlePageChange} />;
        }
        if (givePage === 'CreditCard') {
          return <CreditCard handlePageChange={handlePageChange} />;
        }
        if (givePage === 'PayPal') {
          return <PayPal handlePageChange={handlePageChange} />;
        }
        if (givePage === 'Venmo') {
          return <Venmo handlePageChange={handlePageChange} />;
        }
        if (givePage === 'Zelle') {
          return <Zelle handlePageChange={handlePageChange} />;
        }
        if (givePage === 'ApplePay') {
          return <ApplePay handlePageChange={handlePageChange} />;
        }
        if (givePage === 'GooglePay') {
          return <GooglePay handlePageChange={handlePageChange} />;
        }
        if (givePage === 'DirectTransfer') {
          return <DirectTransfer handlePageChange={handlePageChange} />;
        }
        }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar handlePageChange={handlePageChange} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
