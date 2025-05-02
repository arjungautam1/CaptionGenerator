import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Input,
  Container,
} from '@chakra-ui/react';

interface CaptionGeneratorProps {
  initialCategory?: string;
  initialPlatform?: string;
}

const CaptionGenerator: React.FC<CaptionGeneratorProps> = ({ 
  initialCategory = '', 
  initialPlatform = '' 
}) => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState(initialPlatform || 'instagram');
  const [tone, setTone] = useState('casual');
  const [generatedCaptions, setGeneratedCaptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
      
      // Set predefined topic based on category
      switch (initialCategory) {
        case 'reels':
          setTopic('Engaging short video content');
          setTone('casual');
          break;
        case 'guest-visit':
          setTopic('Customer visit to our office');
          setTone('professional');
          break;
        case 'network-cabling':
          setTopic('Network infrastructure installation');
          setTone('professional');
          break;
        case 'cctv-surveillance':
          setTopic('Security camera system');
          setTone('professional');
          break;
        case 'electronics-relays':
          setTopic('Electronic control systems');
          setTone('professional');
          break;
        case 'access-control':
          setTopic('Secure access control solution');
          setTone('professional');
          break;
        default:
          break;
      }
    }
    
    if (initialPlatform) {
      setPlatform(initialPlatform);
    }
  }, [initialCategory, initialPlatform]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulated caption generation for the frontend template
    setIsLoading(true);
    
    setTimeout(() => {
      let dummyCaptions: string[] = [];
      
      if (category === 'reels') {
        dummyCaptions = [
          `🎬 Quick ${topic} tips that will change how you work! #${platform}reels #trending`,
          `Watch until the end for the best ${topic} hack! Tag someone who needs to see this 👇 #${topic.replace(/\s+/g, '')}`,
          `POV: When you discover this amazing ${topic} trick! 🔥 #viral #${platform.toLowerCase()}algorithm`,
        ];
      } else {
        // Category-specific captions
        switch (category) {
          case 'guest-visit':
            dummyCaptions = [
              `It was a pleasure hosting the team from ${topic} at our office today. Looking forward to building a great partnership! #BusinessVisit #Networking`,
              `Building relationships in person - welcoming ${topic} to our headquarters for a productive discussion on future collaborations. #BusinessPartnership`,
              `Great minds meet! Thanks to the amazing team from ${topic} for visiting our facility today. #CorporateMeeting #BusinessGrowth`,
            ];
            break;
          case 'network-cabling':
            dummyCaptions = [
              `Just completed this clean ${topic} installation. Structured cabling done right ensures reliability and future scalability. #NetworkInfrastructure #TechInstallation`,
              `Before and after: Transforming chaotic wiring into this organized ${topic} system. Your network deserves this level of precision! #CablingExperts`,
              `Our team delivering another flawless ${topic} project. Every connection matters for optimal network performance. #ITInfrastructure #NetworkEngineering`,
            ];
            break;
          case 'cctv-surveillance':
            dummyCaptions = [
              `Protecting what matters most with our latest ${topic} installation. Peace of mind through advanced security technology. #SecuritySolutions #CCTVInstallation`,
              `Modern problems require modern solutions. Our ${topic} provides comprehensive coverage with crystal clear footage. #SecurityTech #BusinessSecurity`,
              `This ${topic} setup ensures 24/7 monitoring with smart alerts and remote access. Security that works as hard as you do. #SecurityExpert #SurveillanceSystems`,
            ];
            break;
          case 'electronics-relays':
            dummyCaptions = [
              `Precision engineering at work: our ${topic} ensure reliable automation for critical applications. #IndustrialControls #AutomationSolutions`,
              `Behind every automated system is a carefully designed ${topic} that makes it all possible. Here's our latest implementation. #ElectricalEngineering`,
              `Small components, big impact. These ${topic} are the backbone of the smart control system we installed this week. #ElectronicsExpert #IndustrialAutomation`,
            ];
            break;
          case 'access-control':
            dummyCaptions = [
              `Modern ${topic} combining security and convenience. Protecting your assets while streamlining access for authorized personnel. #AccessManagement #SecurityTech`,
              `Implemented this state-of-the-art ${topic} featuring biometric verification and detailed audit trails. #PhysicalSecurity #AccessSolutions`,
              `Security upgrade complete! This intelligent ${topic} integrates with existing systems for comprehensive facility management. #SmartSecurity #EnterpriseProtection`,
            ];
            break;
          default:
            dummyCaptions = [
              `#${platform} Check out this amazing ${topic}! Perfect for your ${platform} feed. What do you think? #${topic.replace(/\s+/g, '')} #content #socialmedia`,
              `Looking for the perfect ${topic}? Look no further! This is exactly what you need. #${topic.replace(/\s+/g, '')} #trending`,
              `Elevate your ${platform} game with this incredible ${topic}. Tag someone who needs to see this! #${topic.replace(/\s+/g, '')} #inspo`,
            ];
            break;
        }
      }
      
      setGeneratedCaptions(dummyCaptions);
      setIsLoading(false);
    }, 1500);
  };

  const handleCopyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption);
    alert('Caption copied to clipboard');
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value);
  };

  const handleToneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTone(e.target.value);
  };

  return (
    <Container maxW="800px">
      <Box borderWidth="1px" borderRadius="lg" p={6} mb={6} bg="white" shadow="md">
        <Heading size="md" mb={4}>
          {category ? `Generate ${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Captions` : 'Generate Captions'}
        </Heading>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap={4}>
            <Box>
              <Text mb={2} fontWeight="medium">Topic or Subject</Text>
              <Input 
                placeholder="e.g. beach vacation, new product, coffee shop" 
                value={topic} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)} 
              />
            </Box>
            
            <Box>
              <Text mb={2} fontWeight="medium">Platform</Text>
              <select 
                style={{
                  width: "100%", 
                  padding: "8px", 
                  borderWidth: "1px",
                  borderRadius: "6px",
                  borderColor: "#E2E8F0"
                }}
                value={platform} 
                onChange={handlePlatformChange}
                disabled={!!initialPlatform}
              >
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter/X</option>
                <option value="linkedin">LinkedIn</option>
                <option value="tiktok">TikTok</option>
              </select>
            </Box>
            
            <Box>
              <Text mb={2} fontWeight="medium">Tone</Text>
              <select 
                style={{
                  width: "100%", 
                  padding: "8px", 
                  borderWidth: "1px",
                  borderRadius: "6px",
                  borderColor: "#E2E8F0"
                }}
                value={tone} 
                onChange={handleToneChange}
              >
                <option value="casual">Casual</option>
                <option value="professional">Professional</option>
                <option value="funny">Funny</option>
                <option value="inspirational">Inspirational</option>
                <option value="promotional">Promotional</option>
              </select>
            </Box>
            
            <Button 
              mt={4} 
              colorScheme="teal" 
              type="submit" 
              spinner={isLoading ? <span>Loading...</span> : null}
            >
              {isLoading ? "Generating..." : "Generate Captions"}
            </Button>
          </Flex>
        </form>
      </Box>
      
      {generatedCaptions.length > 0 && (
        <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
          <Heading size="md" mb={4}>Your Captions</Heading>
          
          {generatedCaptions.map((caption, index) => (
            <Box 
              key={index}
              p={4} 
              borderWidth="1px" 
              borderRadius="md" 
              bg="gray.50"
              mb={index < generatedCaptions.length - 1 ? 4 : 0}
            >
              <Text fontSize="md" mb={4}>{caption}</Text>
              <Box borderTopWidth="1px" pt={3} mt={3}>
                <Flex justifyContent="flex-end">
                  <Button 
                    size="sm" 
                    colorScheme="blue" 
                    onClick={() => handleCopyCaption(caption)}
                  >
                    Copy Caption
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default CaptionGenerator; 