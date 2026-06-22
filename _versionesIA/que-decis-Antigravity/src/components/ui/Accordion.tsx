"use client";

import React, { useState, useRef, useEffect } from "react";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function AccordionItem({ id, title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-3">
      <h3>
        <button
          type="button"
          id={`accordion-header-${id}`}
          aria-controls={`accordion-panel-${id}`}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between py-4 text-left font-sans font-bold text-lg text-text-dark hover:text-primary-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-lg px-2"
        >
          <span>{title}</span>
          <svg
            className={`h-6 w-6 transform transition-transform duration-300 text-primary-blue ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        aria-labelledby={`accordion-header-${id}`}
        role="region"
        style={{ height: contentHeight }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pb-4 pt-1 px-2 text-text-muted leading-relaxed font-sans text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="w-full space-y-1">{children}</div>;
}
