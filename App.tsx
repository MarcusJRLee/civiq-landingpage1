import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Values } from "./components/Values";
import { Footer } from "./components/Footer";
import type { CtaFormProps } from "./components/CtaForm";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
    if (error) setError("");
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateZip = (zip: string): boolean => {
    const re = /^\d{5}$/;
    return re.test(zip);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("Email address is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!zip) {
      setError("Zip code is required.");
      return;
    }
    if (!validateZip(zip)) {
      setError("Please enter a valid 5-digit zip code.");
      return;
    }
    console.log("Early access signup:", { email, zip });
    setSubmitted(true);
    setError("");
  };

  const formProps: Omit<CtaFormProps, "onSubmit"> = {
    email,
    zip,
    submitted,
    error,
    onEmailChange: handleEmailChange,
    onZipChange: handleZipChange,
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero {...formProps} onSubmit={handleSubmit} />
        <Features />
        <HowItWorks />
        <Values />
      </main>
      <Footer {...formProps} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
