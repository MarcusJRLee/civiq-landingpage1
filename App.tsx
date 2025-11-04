import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Values } from './components/Values';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    console.log('Early access signup:', email);
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero 
          email={email} 
          submitted={submitted}
          error={error}
          onEmailChange={handleEmailChange} 
          onSubmit={handleSubmit}
        />
        <Features />
        <HowItWorks />
        <Values />
      </main>
      <Footer 
        email={email}
        submitted={submitted}
        error={error}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
