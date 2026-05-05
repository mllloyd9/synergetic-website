import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
        style={{ minHeight: 44 }}
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-brand-ink pr-4">
          {question}
        </span>
        <Plus
          className={`h-6 w-6 flex-shrink-0 text-brand-accent transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-brand-slate leading-relaxed pr-10">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
