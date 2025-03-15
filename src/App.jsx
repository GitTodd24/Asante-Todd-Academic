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
      return <Footer />;
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
      if (currentPage === 'Contact') {
        return <Contact />;
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
