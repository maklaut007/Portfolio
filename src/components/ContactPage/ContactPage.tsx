import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;
const TextImput = styled.input`
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
  padding: 8px 10px;
`;
const TextAreaImput = styled.textarea`
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
  padding: 8px 10px;
`;
const SubmitButton = styled.button`
  width: 100%;
  max-width: 280px;
  margin: 10px 0;
  padding: 12px 10px;
`;
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <ContactForm method="POST" onSubmit={handleSubmit}>
      <TextImput type="name" placeholder="Name" required />
      <TextImput type="email" placeholder="Email" required />
      <TextImput type="phone" placeholder="Phone" />
      <TextAreaImput placeholder="Your message" required />
      <SubmitButton type="submit">Send a message</SubmitButton>
    </ContactForm>
  );
}

export default ContactPage;