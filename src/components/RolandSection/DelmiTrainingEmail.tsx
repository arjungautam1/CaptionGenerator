import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';

interface DelmiTrainingEmailProps {
  onBackToMenu: () => void;
}

const DelmiTrainingEmail: React.FC<DelmiTrainingEmailProps> = ({ onBackToMenu }) => {
  const [emailTemplate, setEmailTemplate] = useState('');
  const [companyName, setCompanyName] = useState('');
  const templateRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  
  const isMobile = width <= 600;
  const isSmallMobile = width <= 480;
  
  // Theme color for this component
  const themeColor = '#4E7BB5';

  const generateEmailTemplate = () => {
    const template = `Dear ${companyName || '[Company Name]'},

I hope you're doing well.

My name is Roland Akwensivie, and I'm reaching out on behalf of Delmi Training Institute, a trade school specializing in delivering hands-on, industry-relevant training for technicians in Structured Network Cabling, CCTV Installation, Electronic Relays & Circuits, and Access Control Systems.

Since 2016, Delmi Training has been focused on one mission: to produce job-ready technicians through a practical and engaging learning experience. Our programs are short, intensive, and tailored to meet the needs of today's fast-moving low-voltage and electronic security industry.

Each of our courses is:

• 100% hands-on and instructor-led
• Structured into a 4-week in-class technical training module
• Followed by 2 weeks of real-world, on-site field experience

We also offer specialized week-long bootcamps and masterclasses, providing flexible upskilling options for both newcomers and experienced workers looking to sharpen their skills. With a strong track record of graduate success, we're proud to share that 98% of our students are currently working in the field, and our 5-star reviews reflect the strength of our program and the impact it's having on our community.

To support the growing demand for skilled technicians, we are launching a new training cycle that will graduate a minimum of 5 fully trained and certified technicians every 6 weeks.

We are now actively seeking industry partners who:

• Are looking for pre-screened, technically-trained entry-level talent
• Want a direct connection to a reliable and consistent talent pipeline
• Would like to collaborate on field placement opportunities or hiring pathways

We see tremendous potential in partnering with companies like ${companyName || 'yours'} and becoming your go-to source for trained, job-ready technicians.

In the coming days, we'll be sending a short video that gives a behind-the-scenes look at our training process and student experiences. We'd love the opportunity to talk with you about how Delmi Training can support your technician hiring needs.

Thank you for your time and consideration. Please feel free to reach out directly if you'd like to set up a quick call or visit our training facility.

Best regards,

Roland Akwensivie
Delmi Training Institute
📞 +1 905-783-3564
🌐 https://www.delmitraining.com
📍 7600 Ontario 27 #5a, Vaughan ON L4H 0P8, Canada`;

    setEmailTemplate(template);
    
    // Scroll to template
    setTimeout(() => {
      if (templateRef.current) {
        templateRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };
  
  const renderEmailWithLinks = (email: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = email.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#61dafb', textDecoration: 'underline' }}
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(emailTemplate);
    toast.success('Email template copied!', {
      icon: '📋',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
  };

  const handleSendEmail = () => {
    const subject = `Delmi Training Institute - Industry Partnership Opportunity`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailTemplate)}`;
    window.open(mailtoLink);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '100%',
          maxWidth: '800px',
          marginBottom: '15px',
          position: isMobile ? 'sticky' : 'relative',
          top: isMobile ? '0' : 'auto',
          zIndex: 10,
          padding: isMobile ? '10px' : '0',
          backgroundColor: isMobile ? 'rgba(40, 44, 52, 0.95)' : 'transparent',
          backdropFilter: isMobile ? 'blur(10px)' : 'none',
          borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }}>
          <div style={{ display: 'flex', gap: '10px' }}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg>
              Back
            </button>
            
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
              </svg>
              Home
            </button>
          </div>
        </div>
        
        <h1 style={{ 
          marginBottom: '10px',
          fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '2rem' 
        }}>Delmi Training Industry Partnership</h1>
        <p style={{ 
          margin: '0 0 25px 0', 
          opacity: 0.8, 
          fontSize: isMobile ? '0.9rem' : '1rem',
          maxWidth: '600px',
          padding: '0 15px' 
        }}>
          Generate a professional email to establish industry partnerships for Delmi Training Institute.
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
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ 
                display: 'block', 
                textAlign: 'left', 
                marginBottom: '8px', 
                fontWeight: 500 
              }}>
                Company Name:
              </label>
              <input 
                type="text" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
              />
            </div>
            
            <button 
              onClick={generateEmailTemplate}
              style={{
                backgroundColor: themeColor,
                color: 'white',
                padding: '12px 18px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
                marginTop: '10px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#4169A8';
                e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = themeColor;
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
              }}
            >
              Generate Email Template
            </button>
          </div>

          {/* Generated email template */}
          {emailTemplate && (
            <div ref={templateRef} style={{
              marginBottom: '35px',
              textAlign: 'left',
              background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)',
              color: '#222',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
              padding: isMobile ? '20px 15px' : '28px 32px',
              fontSize: isMobile ? '1.08rem' : '1.15rem',
              fontWeight: 500,
              lineHeight: 1.7,
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '0.01em',
              wordBreak: 'break-word',
              maxHeight: '600px',
              overflowY: 'auto',
              transition: 'all 0.3s ease-in-out',
              whiteSpace: 'pre-wrap'
            }}>
              {renderEmailWithLinks(emailTemplate)}
            </div>
          )}
          
          {emailTemplate && (
            <div style={{ 
              display: 'flex', 
              gap: '10px',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <button 
                onClick={handleCopyToClipboard}
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                Copy to Clipboard
              </button>
              <button 
                onClick={handleSendEmail}
                style={{
                  flex: 1,
                  backgroundColor: themeColor,
                  color: 'white',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#4169A8';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = themeColor;
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                </svg>
                Open in Email App
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default DelmiTrainingEmail; 