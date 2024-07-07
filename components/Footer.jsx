import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>1234 Restaurant St, Food City</p>
      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={{ color: 'white' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={{ color: 'white' }} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ color: 'white' }} />
        </a>
      </SocialLinks>
    </FooterWrapper>
  );
}


