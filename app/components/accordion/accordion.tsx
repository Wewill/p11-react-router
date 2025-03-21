import React, { useId } from "react";

interface AccordionProps {
  elClass: string;
  header: string;
  content: React.ReactNode;
}

const Accordion = ({ elClass, header, content }: AccordionProps) => {
  const inputId = useId();

  return (
    <div className={`accordion ${elClass} relative`}>
      <input id={inputId} className="hidden peer" type="checkbox" />

      <label
        htmlFor={inputId}
        className="accordion-header bg-kasa text-white p-2 font-bold flex justify-between cursor-pointer transition-all delay-300 peer-checked:delay-0 rounded-lg peer-checked:rounded-b-none"
      >
        <h3>{header}</h3>
      </label>

      <i className="text-2xl text-white fas fa-chevron-up transition-all  rotate-0 peer-checked:rotate-180 absolute top-0 end-0 p-2 select-none pointer-events-none cursor-pointer"></i>

      <div
        ref={(elRef) => {
          if (elRef) {
            elRef.style.setProperty(
              "--scrollHeight",
              `${elRef.scrollHeight}px`
            );
          }
        }}
        className="accordion-content bg-stone-100 rounded-b-lg transition-all duration-500 ease-in-out overflow-hidden max-h-0 peer-checked:max-h-(--scrollHeight)"
      >
        <div className="content-inner p-6">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
