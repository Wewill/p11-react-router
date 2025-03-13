import React, { useState } from "react";

interface AccordionProps {
  elClass: string;
  header: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ elClass, header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${elClass}`}>
      <div
        className={`accordion-header bg-kasa text-white ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } p-2 font-bold flex justify-between`}
        onClick={toggleAccordion}
      >
        <h3>{header}</h3>
        <button>
          {isOpen ? (
            <i className="fas fa-chevron-up text-2xl"></i>
          ) : (
            <i className="fas fa-chevron-down text-2xl"></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="accordion-content bg-stone-100 p-6 rounded-b-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
