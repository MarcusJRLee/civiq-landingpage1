import React from 'react';
import { CtaForm, CtaFormProps } from './CtaForm';
import { LoopIcon } from './Icons';

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
          <div className="mt-16 flex justify-center opacity-30">
            <div className="w-32 h-32 text-slate-400">
              <LoopIcon />
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500 font-semibold uppercase tracking-wider">The Loop of Accountability</p>
        </div>
      </div>
    </section>
  );
};
