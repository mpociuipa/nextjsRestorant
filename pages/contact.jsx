import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export default function Contact() {
  return (
    <>
      <Header />
      <ContactWrapper>
        <h1>Contact Us</h1>
        <FormWrapper>
          <ContactForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Message" required />
            <Button type="submit">Submit</Button>
          </ContactForm>
        </FormWrapper>
      </ContactWrapper>
      <Footer />
    </>
  );
}
