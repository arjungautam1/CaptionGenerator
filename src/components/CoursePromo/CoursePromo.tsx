import React, { useState, ChangeEvent, useRef } from 'react';
import toast from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';

interface CoursePromoProps {
  courseType: 'network-cabling' | 'cctv-surveillance' | 'electronics-relays' | 'access-control';
  onBackToMenu: () => void;
}

// Map course types to display names and details
const courseDetails = {
  'network-cabling': { name: 'Network Cabling', code: 'DTIL 101', color: '#009688' },
  'cctv-surveillance': { name: 'CCTV Surveillance', code: 'DTIL 201', color: '#d32f2f' },
  'electronics-relays': { name: 'Electronics & Relays', code: 'DTIL 401', color: '#FF9800' },
  'access-control': { name: 'Access Control', code: 'DTIL 402', color: '#4CAF50' },
};

const CoursePromo: React.FC<CoursePromoProps> = ({ courseType, onBackToMenu }) => {
  const [captionTemplate, setCaptionTemplate] = useState('');
  const [specialOffer, setSpecialOffer] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const captionRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  
  const isMobile = width <= 600;
  const isSmallMobile = width <= 480;
  
  const selectedCourse = courseDetails[courseType];
  const themeColor = selectedCourse.color; // Use course-specific color

  const generateCaption = () => {
    let template = '';
    const offerText = specialOffer ? `\n\n🎁 <b>Special Offer:</b> <b>${specialOffer}</b>\n` : '';
    const commonFooter = `🔗 𝗘𝗻𝗿𝗼𝗹𝗹 𝗡𝗼𝘄: www.delmitraining.com
📞 𝗖𝗮𝗹𝗹 𝗨𝘀: +1-905-783-3564
📍 𝗩𝗶𝘀𝗶𝘁 𝗨𝘀: 7600 Hwy 27 #5a, Woodbridge, Canada 🇨🇦`;

    switch (courseType) {
      case 'network-cabling':
        template = `🚨 𝗗𝗧𝗜𝗟 𝟭𝟬𝟭: 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗖𝗮𝗯𝗹𝗶𝗻𝗴 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗶𝗮𝗻 𝗖𝗼𝘂𝗿𝘀𝗲 at 𝗗𝗲𝗹𝗺𝗶 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗜𝗻𝘀𝘁𝗶𝘁u𝘁𝗲! 🚨\n\n<b>𝙉𝙚𝙩 𝙬𝙤𝙧k Cabling Technician</b>\nMaster the essentials of 𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝗱 𝗰𝗮𝗯𝗹𝗶𝗻𝗴, 𝗳𝗶𝗯𝗲𝗿 𝗼𝗽𝘁𝗶𝗰𝘀, and 𝗻𝗲𝘁𝘄𝗼𝗿𝗸 𝗶𝗻𝘀𝘁𝗮𝗹𝗹𝗮𝘁𝗶𝗼𝗻 with our comprehensive, hands-on program. Build the foundation for a successful career in IT and telecommunications.\n\n✨ 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝙨 ✨\n🔹 Learn from expert instructors with 𝟯𝟬+ 𝘆𝗲𝗮𝗿𝘀 of industry experience\n🔹 Intensive 𝗵𝗮𝗻𝗱𝘀-𝗼𝗻 𝗹𝗮𝗯𝘀 using industry-standard tools and equipment.\n🔹 Gain skills in 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗶𝗼𝗻, 𝘁𝗲𝘀𝘁𝗶𝗻𝗴, and 𝘁𝗿𝗼𝘂𝗯𝗹𝗲𝘀𝗵𝗼𝗼𝘁𝗶𝗻𝗴 copper and fiber networks.\n🔹 Earn a 𝗖𝗮𝗻𝗮𝗱𝗶𝗮𝗻 𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝘆-𝗿𝗲𝗰𝗼𝗴𝗻𝗶𝘇𝗲𝗱 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻.${offerText}\n\n${commonFooter}\n\n🚀 Launch your career in network infrastructure with Delmi!\n\n#DTIL101 #NetworkCabling #StructuredCabling #FiberOptics #ITInfrastructure #DelmiTraining #HandsOnTraining #SkilledTrades #CablingTechnician #JobReadyCanada #NetworkCablingTechnician #SkillTradeinCanda`;
        break;
      case 'cctv-surveillance':
        template = `🚨 𝗗𝗧𝗜𝗟 𝟮𝟬𝟭: 𝗖𝗖𝗧𝗩 𝗦𝘂𝗿𝘃𝗲𝗶𝗹𝗹𝗮𝗻𝗰𝗲 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗶𝗮𝗻 𝗖𝗼𝘂𝗿𝘀𝗲 at 𝗗𝗲𝗹𝗺𝗶 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗜𝗻𝘀𝘁𝗶𝘁𝘂𝘁𝗲! 🚨

✨ 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝙨 ✨
✨ Learn from expert instructors with 𝟯𝟬+ 𝘆𝗲𝗮𝗿𝘀 of industry experience
💡 𝗛𝗮𝗻𝗱𝘀-𝗼𝗻 training with 𝗿𝗲𝗮𝗹-𝘄𝗼𝗿𝗹𝗱 scenarios
🎓 𝗖𝗮𝗻𝗮𝗱𝗶𝗮𝗻 🇨🇦 industry-recognized 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻${offerText}

${commonFooter}

💥 𝗦𝘁𝗮𝗿𝘁 𝗬𝗼𝘂𝗿 𝗖𝗮𝗿𝗲𝗲𝗿 𝗝𝗼𝘂𝗿𝗻𝗲𝘆 𝘄𝗶𝘁𝗵 𝗗𝗲𝗹𝗺𝗶 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗜𝗻𝘀𝘁𝗶𝘁𝘂𝘁𝗲!

#DTIL201 #CCTVSurveillance #CCTVTechnician #DelmiTraining #ElectronicSecurity #JobReady #HandsOnTraining #CareerInSecurity #CCTVTrainingCanada`;
        break;
      case 'electronics-relays':
        template = `🚨 𝗗𝗧𝗜𝗟 𝟰𝟬𝟭: 𝗘𝗹𝗲𝗰𝘁𝗿𝗼𝗻𝗶𝗰𝘀 & 𝗥𝗲𝗹𝗮𝘆𝘀 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗶𝗮𝗻 𝗖𝗼𝘂𝗿𝘀𝗲 @ 𝗗𝗲𝗹𝗺𝗶 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗜𝗻𝘀𝘁𝗶𝘁𝘂𝘁𝗲 🚨

⚡ 𝙍𝙚𝙖𝙙𝙮 𝙩𝙤 𝙥𝙤𝙬𝙚𝙧 𝙪𝙥 𝙮𝙤𝙪𝙧 𝙘𝙖𝙧𝙚𝙚𝙧? ⚡
Dive deep into 𝗰𝗿𝗼𝗻𝗶𝘁 𝗱𝗲𝘀𝗶𝗴𝗻, 𝗿𝗲𝗹𝗮𝘆 𝘀𝘆𝘀𝘁𝗲𝗺𝘀, and 𝗰𝘂𝘁𝘁𝗶𝗻𝗴-𝗲𝗱𝗴𝗲 𝗲𝗹𝗲𝗰𝘁𝗿𝗼𝗻𝗶𝗰𝘀 with our 𝗵𝗮𝗻𝗱𝘀-𝗼𝗻, industry-focused program—designed to make you job-ready! With expert instructors and hands-on labs, you'll gain the skills and confidence to excel in the rapidly expanding 𝗲𝗹𝗲𝗰𝘁𝗿𝗼𝗻𝗶𝗰𝘀 𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝘆.

✨ 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝘀 ✨
🔹 Learn from expert instructors with 𝟯𝟬+ 𝘆𝗲𝗮𝗿𝘀 of industry experience.
🔹 Hands-on training with 𝗿𝗲𝗮𝗹-𝘄𝗼𝗿𝗹𝗱 𝘀𝗰𝗲𝗻𝗮𝗿𝗶𝗼𝘀 to build practical skills.
🔹 Earn a 𝗖𝗮𝗻𝗮𝗱𝗶𝗮𝗻 𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝘆-𝗿𝗲𝗰𝗼𝗴𝗻𝗶𝘇𝗲𝗱 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 that employers trust.
🔹 Cutting-edge 𝗰𝘂𝗿𝗿𝗶𝗰𝘂𝗹𝘂𝗺 tailored to meet industry demands.${offerText}

${commonFooter}

⏳ 𝗗𝗼𝗻'𝘁 𝗪𝗮𝗶𝘁! 𝗟𝗶𝗺𝗶𝘁𝗲𝗱 𝘀𝗲𝗮𝘁𝘀 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲—secure your spot today and take the first step toward a high-demand career in electronics security.

💻 𝗟𝗲𝗮𝗿𝗻 𝗠𝗼𝗿𝗲: www.delmitraining.com

#DTIL401 #ElectronicsRelays #ElectronicsTrainingInToronto #ElectronicSecurity #AccessControlTraining #ElectronicsCareers #TechTraining #RelaySystems #HandsOnLearning #networkcabling #delmitraininginstitute #accesscontrol`;
        break;
      case 'access-control':
        template = `🚨 𝗗𝗧𝗜𝗟 𝟰𝟬𝟮: 𝗔𝗰𝗰𝗲𝘀𝘀 𝗖𝗼𝗻𝘁𝗿𝗼𝗹 𝗦𝘆𝘀𝘁𝗲𝗺𝘀 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗶𝗮𝗻 𝗖𝗼𝘂𝗿𝘀𝗲 at 𝗗𝗲𝗹𝗺𝗶 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗜𝗻𝘀𝘁𝗶𝘁𝘂𝘁𝗲! 🚨

🔐 𝙎𝙚𝙘𝙪𝙧𝙚 𝙔𝙤𝙪𝙧 𝙁𝙪𝙩𝙪𝙧𝙚 𝙞𝙣 𝘼𝙙𝙫𝙖𝙣𝙘𝙚𝙙 𝙎𝙚𝙘𝙪𝙧𝙞𝙩𝙮! 🔐
Become proficient in designing, installing, and managing cutting-edge 𝗮𝗰𝗰𝗲𝘀𝘀 𝗰𝗼𝗻𝘁𝗿𝗼𝗹 𝘀𝘆𝘀𝘁𝗲𝗺𝘀. From card readers to biometrics, gain the expertise needed in the high-demand physical security industry.

✨ 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝙨 ✨
🔹 Learn from seasoned professionals with deep knowledge of 𝗮𝗰𝗰𝗲𝘀𝘀 𝗰𝗼𝗻𝘁𝗿𝗼𝗹 𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀.
🔹 Practical, 𝗵𝗮𝗻𝗱𝘀-𝗼𝗻 𝘁𝗿𝗮𝗶𝗻𝗶𝗻𝗴 with modern hardware and software.
🔹 Master system 𝗰𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝘁𝗶𝗼𝗻, 𝗺𝗮𝗶𝗻𝘁𝗲𝗻𝗮𝗻𝗰𝗲, and 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻.
🔹 Earn a 𝗖𝗮𝗻𝗮𝗱𝗶𝗮𝗻 𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝘆-𝗿𝗲𝗰𝗼𝗴𝗻𝗶𝘇𝗲𝗱 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻.${offerText}

${commonFooter}

🔑 Unlock a rewarding career path with Delmi Training Institute!

#DTIL402 #AccessControl #PhysicalSecurity #SecuritySystems #SmartSecurity #Biometrics #DelmiTraining #SecurityTechnician #HandsOnTraining #JobReady #CanadianSecurity`;
        break;
      default:
        template = 'Error: Invalid course type.';
    }

    setCaptionTemplate(template);
    
    // Scroll to caption
    setTimeout(() => {
      if (captionRef.current) {
        captionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleCopyToClipboard = () => {
    let content = captionTemplate;
    
    // Apply platform-specific modifications
    if (platform === 'twitter') {
      // Twitter: limit to 280 characters
      content = content.length > 280 ? content.substring(0, 277) + '...' : content;
    } else if (platform === 'instagram' || platform === 'tiktok') {
      // Instagram/TikTok: remove links and phone numbers
      content = content.replace(/🔗 𝗘𝗻𝗿𝗼𝗹𝗹 𝗡𝗼𝘄: www\.delmitraining\.com\n📞 𝗖𝗮𝗹𝗹 𝗨𝘀: \+1-905-783-3564\n📍 𝗩𝗶𝘀𝗶𝘁 𝗨𝘀: 7600 Hwy 27 #5a, Woodbridge, Canada 🇨🇦/g, '📍 𝗩𝗶𝘀𝗶𝘁 𝗨𝘀: Woodbridge, Canada 🇨🇦');
    }
    // LinkedIn/Facebook: keep full content with links (default)
    
    navigator.clipboard.writeText(content);
    toast.success(`Caption for ${platform.charAt(0).toUpperCase() + platform.slice(1)} copied!`, {
      icon: '📋',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
  };

  // Function to get the formatted caption based on selected platform
  const getFormattedCaption = () => {
    if (!captionTemplate) return '';
    
    let content = captionTemplate;
    
    // Apply platform-specific modifications
    if (platform === 'twitter') {
      // Twitter: only include title and two hashtags
      const titleMatch = content.match(/🚨.*?🚨/);
      const title = titleMatch ? titleMatch[0] : '';
      
      // Determine course-specific hashtags
      let hashtags = '';
      switch (courseType) {
        case 'network-cabling':
          hashtags = '#NetworkCabling #DelmiTraining';
          break;
        case 'cctv-surveillance':
          hashtags = '#CCTV #DelmiTraining';
          break;
        case 'electronics-relays':
          hashtags = '#Electronics #DelmiTraining';
          break;
        case 'access-control':
          hashtags = '#AccessControl #DelmiTraining';
          break;
        default:
          hashtags = '#DelmiTraining';
      }
      
      content = `${title}\n\n${hashtags}`;
    } else if (platform === 'instagram' || platform === 'tiktok') {
      // Instagram/TikTok: remove links and phone numbers
      content = content.replace(/🔗 𝗘𝗻𝗿𝗼𝗹𝗹 𝗡𝗼𝘄: www\.delmitraining\.com\n📞 𝗖𝗮𝗹𝗹 𝗨𝘀: \+1-905-783-3564\n📍 𝗩𝗶𝘀𝗶𝘁 𝗨𝘀: 7600 Hwy 27 #5a, Woodbridge, Canada 🇨🇦/g, '📍 𝗩𝗶𝘀𝗶𝘁 𝗨𝘀: Woodbridge, Canada 🇨🇦');
    }
    // LinkedIn/Facebook: keep full content with links (default)
    
    return content;
  };

  // Get platform icon for each social media platform
  const getPlatformIcon = (platformName: string) => {
    switch (platformName) {
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
          </svg>
        );
      default:
        return null;
    }
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
        }}>
          {selectedCourse.name} Promotion Generator
        </h1>
        <p style={{ 
          margin: '0 0 25px 0', 
          opacity: 0.8, 
          fontSize: isMobile ? '0.9rem' : '1rem',
          maxWidth: '600px',
          padding: '0 15px'
        }}>
          Generate a promotional caption for the {selectedCourse.name} course ({selectedCourse.code}).
        </p>
        
        {/* Content Categories at Top - OUTSIDE the card */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: isSmallMobile ? '8px' : '12px', 
          marginBottom: '22px', 
          marginTop: '10px',
          flexWrap: 'wrap',
          padding: '0 10px'
        }}>
          {Object.entries(courseDetails).map(([key, detail]) => (
            <div
              key={key}
              style={{
                padding: isSmallMobile ? '6px 10px' : isMobile ? '7px 15px' : '8px 18px',
                borderRadius: '8px',
                background: key === courseType ? themeColor : 'rgba(255,255,255,0.08)',
                color: key === courseType ? '#fff' : '#cfd8dc',
                fontWeight: key === courseType ? 700 : 500,
                fontSize: isSmallMobile ? '0.85rem' : isMobile ? '0.95rem' : '1.08rem',
                border: key === courseType ? `2px solid ${themeColor}` : '1px solid rgba(255,255,255,0.15)',
                boxShadow: key === courseType ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
                cursor: 'default',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
                userSelect: 'none',
              }}
            >
              {detail.name}
            </div>
          ))}
        </div>
        <div style={{ 
          backgroundColor: 'rgba(30, 30, 40, 0.6)', 
          backdropFilter: 'blur(10px)',
          padding: '25px', 
          borderRadius: '16px', 
          width: '100%', 
          maxWidth: '800px', 
          marginTop: '0',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Generated caption card */}
          {captionTemplate && (
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '10px', 
                flexWrap: 'wrap', 
                gap: '8px' 
              }}>
                {/* Social Media Platforms next to copy button */}
                <div style={{ 
                  display: 'flex', 
                  gap: isSmallMobile ? '5px' : '8px',
                  flexWrap: 'wrap',
                  maxWidth: '100%',
                  overflow: 'auto',
                  padding: isSmallMobile ? '5px 0' : '0',
                  margin: isSmallMobile ? '0 -5px' : '0'
                }}>
                  {['instagram','facebook','twitter','linkedin','tiktok'].map((plat) => (
                    <button
                      key={plat}
                      onClick={() => setPlatform(plat)}
                      style={{
                        padding: isSmallMobile ? '6px 8px' : isMobile ? '6px 10px' : '7px 12px',
                        borderRadius: '6px',
                        background: platform === plat ? themeColor : 'rgba(255,255,255,0.10)',
                        color: platform === plat ? '#fff' : '#cfd8dc',
                        fontWeight: platform === plat ? 600 : 500,
                        fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
                        border: platform === plat ? `2px solid ${themeColor}` : '1px solid rgba(255,255,255,0.15)',
                        boxShadow: platform === plat ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        letterSpacing: '0.01em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span>{getPlatformIcon(plat)}</span>
                      <span>{plat === 'twitter' ? (isSmallMobile ? 'X' : 'Twitter/X') : (isSmallMobile ? plat.charAt(0).toUpperCase() : plat.charAt(0).toUpperCase() + plat.slice(1))}</span>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={handleCopyToClipboard}
                  style={{
                    padding: isSmallMobile ? '8px 12px' : '10px 16px',
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
                    marginTop: isSmallMobile ? '5px' : '0',
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
                  {isSmallMobile ? 'Copy' : `Copy for ${platform.charAt(0).toUpperCase() + platform.slice(1).replace('twitter', 'Twitter/X')}`}
                </button>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: getFormattedCaption().replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>') }}
                style={{ 
                  textAlign: 'left', 
                  background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)', 
                  color: '#222', 
                  borderRadius: '12px', 
                  border: '1px solid #e0e0e0', 
                  boxShadow: '0 12px 28px rgba(0,0,0,0.12)', 
                  padding: isSmallMobile ? '15px 12px' : isMobile ? '20px 15px' : '28px 32px', 
                  fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1.0rem' : '1.05rem', 
                  fontWeight: 400, 
                  lineHeight: 1.6, 
                  fontFamily: 'Inter, system-ui, sans-serif', 
                  letterSpacing: '0.01em', 
                  wordBreak: 'break-word', 
                  maxHeight: isSmallMobile ? '400px' : '600px', 
                  overflowY: 'auto', 
                  transition: 'all 0.3s ease-in-out', 
                  transform: 'translateY(0)', 
                  animation: 'fadeIn 0.4s ease-out', 
                  whiteSpace: 'normal' 
                }}
              />
            </div>
          )}

          {/* Form section */}
          <div style={{ marginBottom: '25px', textAlign: 'left' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '500'
            }}>
              Special Offer (optional)
            </label>
            <input 
              type="text" 
              value={specialOffer}
              onChange={(e) => setSpecialOffer(e.target.value)}
              placeholder="e.g., Black Friday 50% OFF | Limited seats available!" 
              style={{ 
                width: '100%', 
                padding: isSmallMobile ? '12px 14px' : '14px 16px', 
                fontSize: isMobile ? '0.95rem' : '1rem', 
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
                e.target.style.boxShadow = `0 0 0 3px ${themeColor}33`; // Use themeColor with transparency
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '15px',
            marginBottom: '25px',
          }}>
            <button 
              onClick={generateCaption}
              style={{ 
                padding: isSmallMobile ? '10px 16px' : '12px 24px', 
                background: themeColor,
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                width: '100%',
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
        </div>
      </header>
    </div>
  );
};

export default CoursePromo; 