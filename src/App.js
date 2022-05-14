import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
// import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <h1> Hello World!</h1>
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
