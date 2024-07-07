import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HistorySection = styled.section`
  max-width: 800px;
  text-align: justify;
`;

export default function Home() {
  return (
    <>
      <Header />
      <HomeWrapper>
        <HistorySection>
          <h1>Our Story</h1>
          <p>
            Welcome to our restaurant! Our journey began with a passion for culinary excellence and a desire to create a dining experience like no other. Our team of expert chefs crafts each dish with the freshest ingredients and an eye for perfection. Join us on a culinary adventure that will tantalize your taste buds and leave you craving for more.
          </p>
        </HistorySection>
      </HomeWrapper>
      <Footer />
    </>
  );
}

