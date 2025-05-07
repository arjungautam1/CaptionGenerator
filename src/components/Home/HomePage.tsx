import React from 'react';
import { platformsData, categoriesData } from '../../constants/icons';
import useWindowSize from '../../hooks/useWindowSize';
import RolandSection from '../RolandSection/RolandSection';

interface HomePageProps {
  onOptionSelect: (option: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOptionSelect }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Delmi Content Generator</h1>
        
        <div style={{ 
          marginTop: '20px', 
          width: '100%', 
          maxWidth: '800px'
        }}>
          {/* Content Categories at Top */}
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.08)', 
            padding: isMobile ? '12px' : '15px', 
            borderRadius: '10px' 
          }}>
            <h2 style={{ 
              marginTop: 0, 
              marginBottom: '15px', 
              textAlign: 'left', 
              borderBottom: '1px solid rgba(255,255,255,0.1)', 
              paddingBottom: '8px',
              fontSize: 'calc(16px + 0.5vmin)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Content Categories
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z"/>
                </svg>
              </span>
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: width <= 480 ? '1fr' : width <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
              gap: '12px' 
            }}>
              {categoriesData.map(category => (
                <button 
                  key={category.id}
                  style={{ 
                    padding: isMobile ? '12px 10px' : '15px 10px', 
                    background: category.color, 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontSize: isMobile ? '14px' : '16px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  }}
                  onClick={() => onOptionSelect(category.id)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  <span style={{ fontSize: isMobile ? '20px' : '24px' }}>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Roland Section in the middle */}
          <RolandSection onOptionSelect={onOptionSelect} />
          
          {/* Social Media Platforms at Bottom */}
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.08)', 
            padding: isMobile ? '12px' : '15px', 
            borderRadius: '10px',
            marginTop: '20px'
          }}>
            <h2 style={{ 
              marginTop: 0, 
              marginBottom: '15px', 
              textAlign: 'left', 
              borderBottom: '1px solid rgba(255,255,255,0.1)', 
              paddingBottom: '8px',
              fontSize: 'calc(16px + 0.5vmin)'
            }}>
              Social Media Platforms
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: width <= 480 ? '1fr' : width <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
              gap: '12px' 
            }}>
              {platformsData.map(platform => (
                <button 
                  key={platform.id}
                  style={{ 
                    padding: isMobile ? '12px 10px' : '15px 10px', 
                    background: platform.color, 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontSize: isMobile ? '14px' : '16px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  }}
                  onClick={() => onOptionSelect(platform.id)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  <span style={{ fontSize: isMobile ? '20px' : '24px' }}>{platform.icon}</span>
                  {platform.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage; 