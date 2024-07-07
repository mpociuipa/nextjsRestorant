import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Image from 'next/image';

const MenuWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
`;

export default function Menu() {
  return (
    <>
      <Header />
      <MenuWrapper>
        <h1>Our Menu</h1>
        <CardsWrapper>
          <Card>
            <Image src="/megan.jpg" alt="Dish 1" width={150} height={150} objectFit="cover" />
            <h2>Dish 1</h2>
            <p>$10</p>
          </Card>
          <Card>
            <Image src="/luke.jpg" alt="Dish 2" width={150} height={150} objectFit="cover" />
            <h2>Dish 2</h2>
            <p>$12</p>
          </Card>
          <Card>
            <Image src="/jay.jpg" alt="Dish 3" width={150} height={150} objectFit="cover" />
            <h2>Dish 3</h2>
            <p>$15</p>
          </Card>
        </CardsWrapper>
      </MenuWrapper>
      <Footer />
    </>
  );
}
