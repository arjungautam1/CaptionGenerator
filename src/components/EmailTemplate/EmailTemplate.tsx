import React, { useState, ChangeEvent, useRef } from 'react';
import toast from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';

interface EmailTemplateProps {
  onBackToMenu: () => void;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ onBackToMenu }) => {
  const [emailTemplate, setEmailTemplate] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [referralName, setReferralName] = useState('');
  const [includePricing, setIncludePricing] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  
  const isMobile = width <= 600;
  const isSmallMobile = width <= 480;
  
  // Theme color for this component
  const themeColor = '#4E7BB5';

  // Prebuilt content library messages
  const internationalMessage = `🙏 Thank you for your interest in Delmi Training Institute! Currently, our training programs are only available to students who are based in Canada. At the moment, we are not able to offer courses to students outside Canada.\n\nHowever, we are working on launching online training programs soon so that international students like yourself from other countries can also benefit from our hands-on training.\n\nIn the meantime, we encourage you to stay connected with us on our social media and YouTube channel, where we share tutorials, updates, and announcements about upcoming online opportunities:\n\nYouTube: https://www.youtube.com/@Delmitraining\n\nInstagram: https://www.instagram.com/delmitraining/\n\nTikTok: https://www.tiktok.com/@delmitraining\n\nLinkedIn: https://www.linkedin.com/company/delmitraining\n\nWe truly appreciate your interest and look forward to supporting your learning journey in the near future.\n\nBest regards,\nDelmi Training Institute Team`;

  const generateEmailTemplate = () => {
    const courseList = `✅  Network Cabling – 1 week (Monday to Friday, 9 AM to 5 PM)\n✅  CCTV Surveillance – 1 week (Monday to Friday, 9 AM to 5 PM)\n✅  Electronics and Relays – 4 days (Monday to Thursday, 9 AM to 5 PM)\n✅  Access Control – 1 week (Monday to Friday, 9 AM to 5 PM)`;
    const internshipLine = `\n\n✅  We also provide a 2-week on-field internship after course completion to give you practical, real-world experience.`;
    const safetyLine = `\n✅  We also provide safety training: WHMIS (Workplace Hazardous Materials Information System) and Working at Heights.`;
    const pricingLine = `\n\nOur courses are normally CAD $1,999, but from time to time we also offer special discounts. You can check our website or call us to get the best offer.`;
    const template = `Hi ${recipientName || '[Name]'},\n\nI hope you're doing well.\n\nI'm reaching out to share information about the training programs offered at Delmi Training Institute.\n\n${courseList}${internshipLine}${safetyLine}${includePricing ? pricingLine : ''}\n\nYou can explore detailed course information here:\n👉  https://www.delmitraining.com/ourcourses\n\n${referralName ? `As ${referralName} shared your contact with us, we're pleased to extend a special discount exclusively for you.\n\n` : ''}If you have any questions or need help with enrollment, feel free to contact us:\n📞  +1 905-783-3564\n\nFor more information, visit our website:\n🌐  https://www.delmitraining.com\n\nFeel free to come and visit us at:\n🏢  7600 Ontario 27 #5a, Vaughan ON L4H 0P8, Canada\n📍  View on Google Maps: https://g.co/kgs/Y6unGMQ\n\nBest regards,\nDelmi Training Institute`;

    setEmailTemplate(template);
    
    // Scroll to template
    setTimeout(() => {
      if (templateRef.current) {
        templateRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const generateInternationalTemplate = () => {
    setEmailTemplate(internationalMessage);

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
        }}>Email Template Generator</h1>
        <p style={{ 
          margin: '0 0 25px 0', 
          opacity: 0.8, 
          fontSize: isMobile ? '0.9rem' : '1rem',
          maxWidth: '600px',
          padding: '0 15px' 
        }}>
          Create professional email templates for your Delmi Training Institute communications.
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
              transform: 'translateY(0)',
              animation: 'fadeIn 0.4s ease-out'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between', 
                alignItems: isMobile ? 'flex-start' : 'center', 
                marginBottom: '15px', 
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '12px',
                gap: '15px'
              }}>
                <h3 style={{ 
                  margin: 0, 
                  fontWeight: 600, 
                  fontSize: isMobile ? '1.2rem' : '1.3rem', 
                  color: '#333'
                }}>
                  Email Template
                </h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '10px',
                  flexDirection: isSmallMobile ? 'column' : 'row',
                  width: isMobile ? '100%' : 'auto' 
                }}>
                  <button 
                    onClick={handleCopyToClipboard}
                    style={{ 
                      padding: '10px 16px', 
                      background: themeColor, 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      width: isSmallMobile ? '100%' : 'auto',
                      fontSize: isMobile ? '0.95rem' : '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    Copy Template
                  </button>
                  
                  <button 
                    onClick={() => {
                      window.open(`mailto:?subject=Training Programs at Delmi Training Institute&body=${encodeURIComponent(emailTemplate)}`);
                    }}
                    style={{ 
                      padding: '10px 16px', 
                      background: '#7146BF', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      width: isSmallMobile ? '100%' : 'auto',
                      fontSize: isMobile ? '0.95rem' : '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Open in Email
                  </button>
                </div>
              </div>
              
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {renderEmailWithLinks(emailTemplate)}
              </div>
            </div>
          )}

          {/* Form controls */}
          <div style={{ 
            display: 'flex', 
            gap: '15px',
            marginBottom: '25px',
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <button 
              onClick={generateEmailTemplate}
              style={{ 
                padding: isSmallMobile ? '10px 16px' : '12px 24px', 
                background: themeColor,
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                order: isMobile ? 1 : 2,
                flexGrow: 1,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
              }}
            >
              Generate Email Template
            </button>
          </div>
          
          {/* Form fields */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
            gap: '20px',
            marginBottom: '25px'
          }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500'
              }}>
                Recipient's Name
              </label>
              <input 
                type="text" 
                value={recipientName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRecipientName(e.target.value)}
                placeholder="Enter recipient's name" 
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  fontSize: '1rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = themeColor;
                  e.target.style.boxShadow = '0 0 0 3px rgba(78, 123, 181, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500'
              }}>
                Referral Name (optional)
              </label>
              <input 
                type="text" 
                value={referralName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setReferralName(e.target.value)}
                placeholder="Who referred them? (e.g., Daniel)" 
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  fontSize: '1rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = themeColor;
                  e.target.style.boxShadow = '0 0 0 3px rgba(78, 123, 181, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div style={{ 
            marginBottom: '25px', 
            textAlign: 'left', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
          }}>
            <input
              type="checkbox"
              id="includePricing"
              checked={includePricing}
              onChange={() => setIncludePricing(!includePricing)}
              style={{ 
                width: '20px', 
                height: '20px',
                accentColor: themeColor,
                cursor: 'pointer'
              }}
            />
            <label 
              htmlFor="includePricing" 
              style={{ 
                fontSize: '1rem', 
                cursor: 'pointer',
                color: '#fff',
                fontWeight: '500'
              }}
            >
              Include Pricing Information (CAD $1,999)
            </label>
          </div>

          
          {/* Content Categories */}
          <div style={{ 
            backgroundColor: 'rgba(30, 30, 40, 0.6)', 
            backdropFilter: 'blur(10px)',
            padding: '18px', 
            borderRadius: '12px', 
            width: '100%', 
            marginTop: '10px',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: `2px solid ${themeColor}`,
              paddingBottom: '10px',
              marginBottom: '14px'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Content Categories</h3>
              <span style={{ opacity: 0.8, fontSize: '0.9rem' }}>Reusable messages</span>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
              gap: '12px'
            }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.06)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '14px',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong>International Students</strong>
                </div>
                <p style={{ margin: '0 0 12px 0', opacity: 0.85, fontSize: '0.95rem' }}>
                  Inform students outside Canada about availability and upcoming online options.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={generateInternationalTemplate}
                    style={{ 
                      padding: '8px 12px', 
                      background: themeColor,
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Insert
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(internationalMessage);
                      toast.success('International message copied!', {
                        icon: '🌎',
                        style: { borderRadius: '10px', background: '#333', color: '#fff' }
                      });
                    }}
                    style={{ 
                      padding: '8px 12px', 
                      background: '#7146BF',
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default EmailTemplate; 