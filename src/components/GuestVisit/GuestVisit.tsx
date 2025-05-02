import React, { useState, ChangeEvent, useRef } from 'react';
import toast from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';

interface GuestVisitProps {
  onBackToMenu: () => void;
}

const GuestVisit: React.FC<GuestVisitProps> = ({ onBackToMenu }) => {
  const [captionTemplate, setCaptionTemplate] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestTitle, setGuestTitle] = useState('');
  const [guestCompany, setGuestCompany] = useState('');
  const [visitDescription, setVisitDescription] = useState('insightful');
  const [sharedContent, setSharedContent] = useState('');
  const [templateType, setTemplateType] = useState('general');
  const captionRef = useRef<HTMLDivElement>(null);
  
  const { width } = useWindowSize();
  const isMobile = width <= 600;
  const isSmallMobile = width <= 480;

  // Template variations
  const templateVariations = [
    { id: 'general', name: 'General Guest Visit', color: '#5E60CE' },
    { id: 'security', name: 'Security Technology', color: '#1976D2' },
    { id: 'cctv', name: 'CCTV Surveillance', color: '#FF5C8D' },
    { id: 'access', name: 'Access Control', color: '#7371FC' }
  ];

  const generateCaption = () => {
    let template = '';
    const baseHashtags = '#DelmiTrainingInstitute #DelmiSolutions ';
    let specificHashtags = '';
    let commitment = '';
    
    // Opening line
    template += `We were privileged to welcome ${guestName}, ${guestTitle} at ${guestCompany}, for a ${visitDescription} visit to Delmi Training Institute.\n\n`;
    
    // Second paragraph - what they shared
    template += `${guestName.split(' ')[0]} ${sharedContent}.\n\n`;
    
    // Third paragraph - Delmi's commitment
    switch (templateType) {
      case 'security':
        commitment = "connecting our students and technicians with leading industry experts and the latest innovations in security technology";
        specificHashtags = '#AccessControl #Electronics #SecuritySolutions #BuildingSecurity #ElectronicSecurity #SmartBuildings #CanadianSecurity #SkilledTradesCanada';
        break;
      case 'cctv':
        commitment = "creating opportunities that connect our students and technicians with real-world industry leaders and cutting-edge technologies";
        specificHashtags = '#CCTVTraining #VideoSurveillance #SecuritySystems #CanadianSecurity #AIinSecurity #SkilledTradesCanada';
        break;
      case 'access':
        commitment = "exposing our students and technicians to industry leaders and real-world innovations that shape the security landscape";
        specificHashtags = '#AccessControl #SmartSecurity #SecuritySolutions #BuildingSecurity #ElectronicSecurity #SmartBuildings #CanadianSecurity #SkilledTradesCanada';
        break;
      default:
        commitment = "connecting our students and technicians with industry experts and innovative technologies";
        specificHashtags = '#SecuritySolutions #TechnicalTraining #ProfessionalDevelopment #IndustryExperts #CanadianSecurity #SkilledTradesCanada';
    }
    
    template += `At Delmi Training Institute and Delmi Solutions Inc., we're committed to ${commitment}.\n\n`;
    
    // Call to action
    template += `📢 𝙎𝙩𝙖𝙧𝙩 𝙮𝙤𝙪𝙧 𝙟𝙤𝙪𝙧𝙣𝙚𝙮 𝙞𝙣 ${templateType === 'cctv' ? 'electronic security' : 'access control, electronics, and security'} — 𝗲𝗻𝗿𝗼𝗹𝗹 𝗻𝗼𝘄 at www.delmitraining.com\n\n`;
    
    // Hashtags
    template += `${baseHashtags} ${specificHashtags}`;
    
    setCaptionTemplate(template);
    setTimeout(() => {
      if (captionRef.current) {
        captionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(captionTemplate);
    toast.success('Caption copied!', {
      icon: '📋',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
  };

  // Find the selected template color
  const selectedTemplateColor = templateVariations.find(t => t.id === templateType)?.color || '#5E60CE';

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginBottom: '10px' }}>Guest Visit Caption Generator</h1>
        <p style={{ 
          margin: '0 0 25px 0', 
          opacity: 0.8, 
          fontSize: '1rem', 
          maxWidth: '600px' 
        }}>
          Create professional social media captions for guest visits in seconds.
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
          {/* Generated caption card */}
          {captionTemplate && (
            <div ref={captionRef} style={{
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
              maxHeight: '400px',
              overflowY: 'auto',
              transition: 'all 0.3s ease-in-out',
              transform: 'translateY(0)',
              animation: 'fadeIn 0.4s ease-out'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '15px', 
                borderBottom: `2px solid ${selectedTemplateColor}`,
                paddingBottom: '12px'
              }}>
                <h3 style={{ 
                  margin: 0, 
                  fontWeight: 600, 
                  fontSize: isMobile ? '1.2rem' : '1.3rem', 
                  color: '#333',
                  textTransform: 'capitalize',
                }}>
                  {templateType} Caption
                </h3>
                <button 
                  onClick={handleCopyToClipboard}
                  style={{ 
                    padding: '10px 16px', 
                    background: selectedTemplateColor, 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    width: isMobile ? '100%' : 'auto',
                    fontSize: isMobile ? '0.98rem' : '1rem',
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
                  Copy Caption
                </button>
              </div>
              <div style={{ whiteSpace: 'pre-wrap' }}>{captionTemplate}</div>
            </div>
          )}

          {/* Form section */}
          <div style={{ 
            display: 'flex', 
            gap: '15px',
            marginBottom: '25px',
          }}>
            <button 
              onClick={onBackToMenu}
              style={{ 
                padding: '12px 20px', 
                background: 'transparent', 
                color: 'white', 
                border: '1px solid rgba(255, 255, 255, 0.3)', 
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                flexShrink: 0,
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
              ← Back
            </button>
            
            <button 
              onClick={generateCaption}
              style={{ 
                padding: '12px 24px', 
                background: selectedTemplateColor,
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem',
                flexGrow: 1,
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
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
              Generate Caption
            </button>
          </div>
          
          {/* Template selection - modern style */}
          <div style={{ marginBottom: '25px', textAlign: 'left' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Template Style
            </label>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
              gap: '12px' 
            }}>
              {templateVariations.map(template => (
                <button
                  key={template.id}
                  onClick={() => setTemplateType(template.id)}
                  style={{
                    padding: '15px',
                    minWidth: '150px',
                    height: '48px',
                    background: templateType === template.id ? 
                      template.color : 
                      'rgba(255, 255, 255, 0.08)',
                    color: templateType === template.id ? 
                      'white' : 
                      'rgba(255, 255, 255, 0.8)',
                    border: templateType === template.id ?
                      'none' :
                      '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: templateType === template.id ? '600' : '500',
                    fontSize: '0.95rem',
                    transition: 'all 0.25s ease',
                    boxShadow: templateType === template.id ? 
                      '0 4px 12px rgba(0,0,0,0.2)' : 
                      'none',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseOver={(e) => {
                    if (templateType !== template.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (templateType !== template.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Guest information - modern inputs */}
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
                Guest's Name
              </label>
              <input 
                type="text" 
                value={guestName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setGuestName(e.target.value)}
                placeholder="e.g., Conrad Henry" 
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
                  e.target.style.borderColor = selectedTemplateColor;
                  e.target.style.boxShadow = `0 0 0 3px ${selectedTemplateColor}33`;
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
                Guest's Title
              </label>
              <input 
                type="text" 
                value={guestTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setGuestTitle(e.target.value)}
                placeholder="e.g., 𝗥𝗲𝗴𝗶𝗼𝗻𝗮𝗹 𝗦𝗮𝗹𝗲𝘀 𝗠𝗮𝗻𝗮𝗴𝗲𝗿 - 𝗖𝗮𝗻𝗮𝗱𝗮" 
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
                  e.target.style.borderColor = selectedTemplateColor;
                  e.target.style.boxShadow = `0 0 0 3px ${selectedTemplateColor}33`;
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
                Company
              </label>
              <input 
                type="text" 
                value={guestCompany}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setGuestCompany(e.target.value)}
                placeholder="e.g., NAPCO Security Technologies" 
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
                  e.target.style.borderColor = selectedTemplateColor;
                  e.target.style.boxShadow = `0 0 0 3px ${selectedTemplateColor}33`;
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
                Visit Description
              </label>
              <select
                value={visitDescription}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setVisitDescription(e.target.value)}
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
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = selectedTemplateColor;
                  e.target.style.boxShadow = `0 0 0 3px ${selectedTemplateColor}33`;
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="insightful">insightful</option>
                <option value="valuable">valuable</option>
                <option value="productive">productive</option>
                <option value="informative">informative</option>
              </select>
            </div>
          </div>
          
          <div style={{ marginBottom: '25px', textAlign: 'left' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '500'
            }}>
              What did they share/bring?
            </label>
            <textarea 
              value={sharedContent}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSharedContent(e.target.value)}
              placeholder="e.g., shared insights into cutting-edge security technologies, highlighting the future of integrated access and alarm systems" 
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                fontSize: '1rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                minHeight: '100px',
                resize: 'vertical',
                transition: 'all 0.2s ease',
                outline: 'none',
                lineHeight: '1.5',
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = selectedTemplateColor;
                e.target.style.boxShadow = `0 0 0 3px ${selectedTemplateColor}33`;
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default GuestVisit; 