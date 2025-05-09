import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';

interface DelmiTrainingEmailProps {
  onBackToMenu: () => void;
}

const DelmiTrainingEmail: React.FC<DelmiTrainingEmailProps> = ({ onBackToMenu }) => {
  const [emailTemplate, setEmailTemplate] = useState('');
  const [emailHtml, setEmailHtml] = useState('');
  const [companyName, setCompanyName] = useState('');
  const templateRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  
  const isMobile = width <= 600;
  const isSmallMobile = width <= 480;
  
  // Theme color for this component
  const themeColor = '#4E7BB5';

  const videoOptions = [
    { title: "Alex Story", url: "https://youtube.com/shorts/jGWIkvDYiH8?si=kyt_mJaPxHsAhEF5" },
    { title: "Parminder Story", url: "https://youtube.com/shorts/ZcgP2daBoYA?si=5T3ATJv46aXyvkLU" },
    { title: "Shane's Story", url: "https://youtube.com/shorts/htsujuk-deU?si=nHxg8vEA4RQQF24Z" },
    { title: "Malik's Story", url: "https://youtube.com/shorts/qwAEsv6ItZs?si=5DEAQ4XXZfxrmfEz" },
    { title: "Allison's Story", url: "https://youtube.com/shorts/_YG2x-NxtPc?si=5aCD8-GsoK-259Zv" },
    { title: "Jay's Story", url: "https://youtube.com/shorts/NCQWjflufvM?si=2P4NhvWmS188sg8M" },
    { title: "Muhammad's Story", url: "https://youtube.com/shorts/QSz7VWwqIFo?si=3Jzf4t294VER1FMA" },
  ];
  const [selectedVideoLinks, setSelectedVideoLinks] = useState<string[]>([]);

  const indentBullets = (text: string) => {
    // Apply spacing and improve formatting for bullet points and sections
    return text
      .replace(/^•/gm, '    •')  // More indentation for bullets
      .replace(/What sets us apart:/g, '\nWhat sets us apart:')  // Extra spacing before sections
      .replace(/By partnering with Delmi Training Institute, you gain:/g, '\nBy partnering with Delmi Training Institute, you gain:')
      .replace(/Below are video links/g, '\nBelow are video links')
      .replace(/I would be happy to connect/g, '\nI would be happy to connect')
      .replace(/Warm regards,/g, '\nWarm regards,')
      .replace(/Roland Akwensivie/g, 'Roland Akwensivie\n')  // Add space after name in signature
      .replace(/President, Delmi Training Institute/g, 'President\nDelmi Training Institute');  // Split title and company
  };

  const generateEmailTemplate = () => {
    const greeting = companyName || '[Company Name / Hiring Manager]';
    
    // Create video links section
    let videoSection = '';
    let videoHtmlSection = '';
    if (selectedVideoLinks.length > 0) {
      videoSection = 'Below are video links that offer a closer look into our facility and training approach:\n\n';
      videoHtmlSection = '<p style="margin: 15px 0 5px 0;"><strong>Below are video links that offer a closer look into our facility and training approach:</strong></p><ul style="margin: 10px 0; padding-left: 30px;">';
      
      selectedVideoLinks.forEach(link => {
        const option = videoOptions.find(opt => opt.url === link);
        if (option) {
          videoSection += `    • ${option.title}: ${option.url}\n`;
          videoHtmlSection += `<li style="margin: 5px 0;"><strong>${option.title}:</strong> <a href="${option.url}" target="_blank" style="color: #4E7BB5; text-decoration: underline;">${option.url}</a></li>`;
        }
      });
      
      videoHtmlSection += '</ul>';
    }
    
    // Create plain text template - remove Subject line from body
    const template = `Dear ${greeting},\n\nI hope this message finds you well.\n\nI'm writing to introduce Delmi Training Institute, a leading trade school specializing in hands-on, industry-aligned training in Network Cabling, CCTV Design, Configuration & Installation, Electronic Relays & Circuits, and Access Control Systems. Since our founding in 2016, we have proudly trained hundreds of students who have gone on to become key contributors in the cabling and electronic security sectors across the Greater Toronto and Hamilton Area (GTHA) and beyond.\n\nOur training model is unique and results-driven. Each student undergoes a 4-week, instructor-led in-class technical bootcamp, where they spend one week on each specialized module, followed by two additional weeks of on-field, real-world experience. This approach ensures graduates are not only technically proficient but also job-ready from day one.\n\nWhat sets us apart:\n\n    • Courses are 100% hands-on and instructor-led\n    • Graduates receive real-world exposure through a two-week internship\n    • Over 50 five-star reviews from satisfied students and employers\n    • 98% of our students are successfully employed after graduation\n    • New training cohorts begin every 6 weeks, ensuring a steady pipeline of trained technicians\n\nWe are currently expanding our placement network and are looking to partner with companies like yours who are seeking reliable, certified, and field-ready technicians in cabling and electronic security.\n\nBy partnering with Delmi Training Institute, you gain:\n\n    • Direct access to our pool of trained and job-ready graduates\n    • A consistent, cost-effective source for new hires\n    • The opportunity to influence and guide future training curriculums\n\nWe believe this partnership could be a significant asset to your team and operations.\n${videoSection}\nI would be happy to connect further and explore how we can work together. Thank you for considering Delmi Training Institute as your trusted partner in talent development.\n\n\nWarm regards,\n\nRoland Akwensivie\nPresident\nDelmi Training Institute\nPhone: 905-783-3564 | Cell: 416-729-8645\nEmail: roland@delmitraining.com\nWebsite: www.delmitraining.com`;
    
    // Create HTML template for display - remove Subject line from body
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p style="margin: 15px 0;">Dear ${greeting},</p>
        
        <p style="margin: 15px 0;">I hope this message finds you well.</p>
        
        <p style="margin: 15px 0;">I'm writing to introduce Delmi Training Institute, a leading trade school specializing in hands-on, industry-aligned training in Network Cabling, CCTV Design, Configuration & Installation, Electronic Relays & Circuits, and Access Control Systems. Since our founding in 2016, we have proudly trained hundreds of students who have gone on to become key contributors in the cabling and electronic security sectors across the Greater Toronto and Hamilton Area (GTHA) and beyond.</p>
        
        <p style="margin: 15px 0;">Our training model is unique and results-driven. Each student undergoes a 4-week, instructor-led in-class technical bootcamp, where they spend one week on each specialized module, followed by two additional weeks of on-field, real-world experience. This approach ensures graduates are not only technically proficient but also job-ready from day one.</p>
        
        <p style="margin: 15px 0 5px 0;"><strong>What sets us apart:</strong></p>
        <ul style="margin: 10px 0; padding-left: 30px;">
          <li style="margin: 5px 0;">Courses are 100% hands-on and instructor-led</li>
          <li style="margin: 5px 0;">Graduates receive real-world exposure through a two-week internship</li>
          <li style="margin: 5px 0;">Over 50 five-star reviews from satisfied students and employers</li>
          <li style="margin: 5px 0;">98% of our students are successfully employed after graduation</li>
          <li style="margin: 5px 0;">New training cohorts begin every 6 weeks, ensuring a steady pipeline of trained technicians</li>
        </ul>
        
        <p style="margin: 15px 0;">We are currently expanding our placement network and are looking to partner with companies like yours who are seeking reliable, certified, and field-ready technicians in cabling and electronic security.</p>
        
        <p style="margin: 15px 0 5px 0;"><strong>By partnering with Delmi Training Institute, you gain:</strong></p>
        <ul style="margin: 10px 0; padding-left: 30px;">
          <li style="margin: 5px 0;">Direct access to our pool of trained and job-ready graduates</li>
          <li style="margin: 5px 0;">A consistent, cost-effective source for new hires</li>
          <li style="margin: 5px 0;">The opportunity to influence and guide future training curriculums</li>
        </ul>
        
        <p style="margin: 15px 0;">We believe this partnership could be a significant asset to your team and operations.</p>
        
        ${videoHtmlSection}
        
        <p style="margin: 15px 0;">I would be happy to connect further and explore how we can work together. Thank you for considering Delmi Training Institute as your trusted partner in talent development.</p>
        
        <div style="margin-top: 25px;">
          <p style="margin: 5px 0;">Warm regards,</p>
          <p style="margin: 5px 0;"><strong>Roland Akwensivie</strong></p>
          <p style="margin: 2px 0;">President</p>
          <p style="margin: 2px 0;">Delmi Training Institute</p>
          <p style="margin: 2px 0;">Phone: 905-783-3564 | Cell: 416-729-8645</p>
          <p style="margin: 2px 0;">Email: roland@delmitraining.com</p>
          <p style="margin: 2px 0;">Website: <a href="https://www.delmitraining.com" target="_blank" style="color: #4E7BB5; text-decoration: underline;">www.delmitraining.com</a></p>
        </div>
      </div>
    `;
    
    setEmailTemplate(template);
    setEmailHtml(htmlTemplate);
    
    setTimeout(() => {
      if (templateRef.current) {
        templateRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Render email links
  const renderEmailWithLinks = (email: string) => {
    const urlRegex = /(https?:\/\/[^\s]+|www\.delmitraining\.com)/g;
    const parts = email.split(urlRegex);
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        let url = part;
        if (part === 'www.delmitraining.com') {
          url = 'https://www.delmitraining.com';
        }
        return (
          <a
            key={index}
            href={url}
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

  const handleCopySubject = () => {
    const subject = "Partner With Delmi Training Institute – Your Trusted Source for Trained Technicians";
    navigator.clipboard.writeText(subject);
    toast.success('Subject copied!', {
      icon: '📋',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
  };

  const handleSendEmail = () => {
    // Keep the subject for the mailto link
    const subject = `Partner With Delmi Training Institute – Your Trusted Source for Trained Technicians`;
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
                Company Name / Hiring Manager:
              </label>
              <input 
                type="text" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name or hiring manager's name"
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
            <div style={{ marginBottom: '15px', textAlign: 'left' }}>
              <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>Video Links:</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {videoOptions.map(option => (
                  <label key={option.url} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 400 }}>
                    <input
                      type="checkbox"
                      checked={selectedVideoLinks.includes(option.url)}
                      onChange={e => {
                        if (e.target.checked) {
                          setSelectedVideoLinks(prev => [...prev, option.url]);
                        } else {
                          setSelectedVideoLinks(prev => prev.filter(url => url !== option.url));
                        }
                      }}
                    />
                    {option.title}
                  </label>
                ))}
              </div>
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
              transition: 'all 0.3s ease-in-out'
            }}
            dangerouslySetInnerHTML={{ __html: emailHtml }}
            />
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
                Copy Email
              </button>
              
              <button 
                onClick={handleCopySubject}
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
                Copy Subject
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