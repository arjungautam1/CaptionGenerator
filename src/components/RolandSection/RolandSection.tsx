import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

interface RolandSectionProps {
  onOptionSelect: (option: string) => void;
  onBackToMenu?: () => void;
}

const RolandSection: React.FC<RolandSectionProps> = ({ onOptionSelect, onBackToMenu }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  const handleEmailSelect = (type: string) => {
    onOptionSelect(type);
  };

  return (
    <div style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.08)', 
      padding: isMobile ? '12px' : '15px', 
      borderRadius: '10px',
      marginTop: '20px',
      marginBottom: '20px'
    }}>
      <h2 style={{ 
        marginTop: 0, 
        marginBottom: '15px', 
        textAlign: 'left', 
        borderBottom: '1px solid rgba(255,255,255,0.1)', 
        paddingBottom: '8px',
        fontSize: 'calc(16px + 0.5vmin)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          Roland Section
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14h-16v-12h16v12zm-3-7c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm-9 6h12v1h-12v-1zm0-4h4v1h-4v-1z"/>
          </svg>
        </span>
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: width <= 480 ? '1fr' : width <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
        gap: '12px' 
      }}>
        {/* Delmi Training Button */}
        <button 
          style={{ 
            padding: isMobile ? '12px 10px' : '15px 10px', 
            background: '#4E7BB5', // Blue for Delmi Training
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
          onClick={() => handleEmailSelect('delmi-training')}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          <span style={{ fontSize: isMobile ? '20px' : '24px' }}>📧</span>
          Delmi Training
        </button>

        {/* Delmi Solutions Button */}
        <button 
          style={{ 
            padding: isMobile ? '12px 10px' : '15px 10px', 
            background: '#4CAF50', // Green for Delmi Solutions
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
          onClick={() => handleEmailSelect('delmi-solutions')}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          <span style={{ fontSize: isMobile ? '20px' : '24px' }}>📧</span>
          Delmi Solutions
        </button>

        {/* Shidaa Foundations Button */}
        <button 
          style={{ 
            padding: isMobile ? '12px 10px' : '15px 10px', 
            background: '#FF9800', // Orange for Shidaa Foundations
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
          onClick={() => handleEmailSelect('shidaa-foundations')}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          <span style={{ fontSize: isMobile ? '20px' : '24px' }}>📧</span>
          Shidaa Foundations
        </button>
      </div>
    </div>
  );
};

export default RolandSection; 