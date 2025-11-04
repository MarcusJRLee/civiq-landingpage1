import React from 'react';
import { CtaForm, CtaFormProps } from './CtaForm';

export const Hero: React.FC<CtaFormProps> = (props) => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Your Government, <span className="text-brand-purple">In Your Hands.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600">
            The platform for modern governance. Hold politicians accountable, shape policy, and build a more transparent democracy.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
             <CtaForm {...props} />
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Hero's journey</h2>
            <div className="relative h-0 pb-[56.25%] max-w-3xl mx-auto bg-slate-200 rounded-lg shadow-lg overflow-hidden">
                <iframe 
                    src="https://docs.google.com/presentation/d/1d6I5m3gbDHwMi92Mv0aorH59X7cAUG9PJZRsbZXHnlA/embed?start=false&loop=false&delayms=3000" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};