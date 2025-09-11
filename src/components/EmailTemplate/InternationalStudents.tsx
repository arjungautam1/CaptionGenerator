import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';

interface Props {
  onBackToMenu: () => void;
}

const InternationalStudents: React.FC<Props> = ({ onBackToMenu }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 600;
  const isSmallMobile = width <= 480;
  const themeColor = '#4E7BB5';
  const templateRef = useRef<HTMLDivElement>(null);

  const message = `🙏 Thank you for your interest in Delmi Training Institute! Currently, our training programs are only available to students who are based in Canada. At the moment, we are not able to offer courses to students outside Canada.\n\nHowever, we are working on launching online training programs soon so that international students like yourself from other countries can also benefit from our hands-on training.\n\nIn the meantime, we encourage you to stay connected with us on our social media and YouTube channel, where we share tutorials, updates, and announcements about upcoming online opportunities:\n\nYouTube: https://www.youtube.com/@Delmitraining\n\nInstagram: https://www.instagram.com/delmitraining/\n\nTikTok: https://www.tiktok.com/@delmitraining\n\nLinkedIn: https://www.linkedin.com/company/delmitraining\n\nWe truly appreciate your interest and look forward to supporting your learning journey in the near future.\n\nBest regards,\nDelmi Training Institute Team`;

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    toast.success('International Students message copied!', {
      icon: '🌎',
      style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '800px', marginBottom: '15px' }}>
          <button 
            onClick={onBackToMenu}
            style={{ 
              padding: '8px 14px', 
              background: 'transparent', 
              color: 'white', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            Back
          </button>
        </div>

        <h1 style={{ marginBottom: '10px', fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '2rem' }}>International Students</h1>
        <p style={{ margin: '0 0 25px 0', opacity: 0.8, fontSize: isMobile ? '0.9rem' : '1rem', maxWidth: '600px', padding: '0 15px' }}>
          Share this message with students outside Canada.
        </p>

        <div style={{ 
          backgroundColor: 'rgba(30, 30, 40, 0.6)', 
          backdropFilter: 'blur(10px)',
          padding: '25px', 
          borderRadius: '16px', 
          width: '100%', 
          maxWidth: '800px', 
          marginTop: '10px',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div ref={templateRef} style={{
            marginBottom: '20px',
            textAlign: 'left',
            background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)',
            color: '#222',
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
            padding: isMobile ? '20px 15px' : '24px 28px',
            fontSize: isMobile ? '1.05rem' : '1.12rem',
            fontWeight: 500,
            lineHeight: 1.7,
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '0.01em',
            whiteSpace: 'pre-wrap'
          }}>
            {message}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexDirection: isSmallMobile ? 'column' : 'row' }}>
            <button 
              onClick={handleCopy}
              style={{ 
                padding: '10px 16px', 
                background: themeColor, 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: isMobile ? '0.95rem' : '1rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              Copy Message
            </button>
            <button 
              onClick={() => {
                window.open(`mailto:?subject=International Students - Program Availability&body=${encodeURIComponent(message)}`);
              }}
              style={{ 
                padding: '10px 16px', 
                background: '#7146BF', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: isMobile ? '0.95rem' : '1rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              Open in Email
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default InternationalStudents;


