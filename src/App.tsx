import React, { useState } from 'react';
import './App.css';
import EmailTemplate from './components/EmailTemplate/EmailTemplate';
import HomePage from './components/Home/HomePage';
import GuestVisit from './components/GuestVisit/GuestVisit';
import CoursePromo from './components/CoursePromo/CoursePromo';
import { Toaster } from 'react-hot-toast';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  
  const handleBackToMenu = () => {
    setSelectedOption('');
  };

  // Render appropriate component based on selection
  const renderContent = () => {
    switch (selectedOption) {
      case 'email':
        return <EmailTemplate onBackToMenu={handleBackToMenu} />;
      case 'guest-visit':
        return <GuestVisit onBackToMenu={handleBackToMenu} />;
      case 'network-cabling':
      case 'cctv-surveillance':
      case 'electronics-relays':
      case 'access-control':
        return <CoursePromo 
                 courseType={selectedOption as ('network-cabling' | 'cctv-surveillance' | 'electronics-relays' | 'access-control')} 
                 onBackToMenu={handleBackToMenu} 
               />;
      default:
        return <HomePage onOptionSelect={handleOptionSelect} />;
    }
  };
  
  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
            fontSize: '16px',
            padding: '12px 20px',
            borderRadius: '8px',
          },
        }}
      />
      {renderContent()}
    </>
  );
}

export default App;
