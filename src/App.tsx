import React, { useState } from 'react';
import './App.css';
import EmailTemplate from './components/EmailTemplate/EmailTemplate';
import InternationalStudents from './components/EmailTemplate/InternationalStudents';
import HomePage from './components/Home/HomePage';
import GuestVisit from './components/GuestVisit/GuestVisit';
import CoursePromo from './components/CoursePromo/CoursePromo';
import DelmiTrainingEmail from './components/RolandSection/DelmiTrainingEmail';
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
      case 'international-students':
        return <InternationalStudents onBackToMenu={handleBackToMenu} />;
      case 'network-cabling':
      case 'cctv-surveillance':
      case 'electronics-relays':
      case 'access-control':
        return <CoursePromo 
                 courseType={selectedOption as ('network-cabling' | 'cctv-surveillance' | 'electronics-relays' | 'access-control')} 
                 onBackToMenu={handleBackToMenu} 
               />;
      // Roland Section Email Templates
      case 'delmi-training':
        return <DelmiTrainingEmail onBackToMenu={handleBackToMenu} />;
      case 'delmi-solutions':
        // Placeholder for future implementation
        return <div className="App">
          <header className="App-header">
            <h1>Delmi Solutions Email Template</h1>
            <p>This email template will be implemented soon.</p>
            <button 
              onClick={handleBackToMenu}
              style={{ 
                padding: '10px 20px', 
                background: '#4CAF50', 
                border: 'none', 
                borderRadius: '8px', 
                color: 'white', 
                marginTop: '20px',
                cursor: 'pointer'
              }}
            >
              Back to Home
            </button>
          </header>
        </div>;
      case 'shidaa-foundations':
        // Placeholder for future implementation
        return <div className="App">
          <header className="App-header">
            <h1>Shidaa Foundations Email Template</h1>
            <p>This email template will be implemented soon.</p>
            <button 
              onClick={handleBackToMenu}
              style={{ 
                padding: '10px 20px', 
                background: '#FF9800', 
                border: 'none', 
                borderRadius: '8px', 
                color: 'white', 
                marginTop: '20px',
                cursor: 'pointer'
              }}
            >
              Back to Home
            </button>
          </header>
        </div>;
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
