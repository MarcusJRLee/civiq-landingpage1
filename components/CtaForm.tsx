import React from 'react';

export interface CtaFormProps {
  email: string;
  submitted: boolean;
  error: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CtaForm: React.FC<CtaFormProps> = ({ email, submitted, error, onEmailChange, onSubmit }) => {
  if (submitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-lg text-center" role="alert">
        <p className="font-bold">Thank you for your interest!</p>
        <p>We've received your submission. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email address"
          className="flex-grow w-full px-4 py-3 text-lg text-slate-900 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition duration-150 ease-in-out"
          aria-label="Email address for early access"
        />
        <button
          type="submit"
          className="px-6 py-3 text-lg font-semibold text-white bg-brand-purple rounded-md shadow-sm hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple transition-colors"
        >
          Get Early Access
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600 text-left">{error}</p>}
    </form>
  );
};
