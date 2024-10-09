"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, HelpCircle, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface FAQItemProps {
  question: string;
  answer: string;
  isInitiallyOpen: boolean;
  index: number;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({
  question,
  answer,
  isInitiallyOpen,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const itemId = `faq-item-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div className="border-b border-primary-200 last:border-b-0">
      <h3>
        <button
          className="w-full text-left py-6 px-4 flex justify-between items-center cursor-pointer group focus:outline-none focus:ring-1 focus:ring-primary-300 focus:ring-offset-1 pb-6 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={itemId}
        >
          <span className="flex items-center text-xl font-medium text-primary-800">
            <HelpCircle
              className="w-8 h-8 mr-4 text-primary-500"
              aria-hidden="true"
            />
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            {isOpen ? (
              <Minus className="w-8 h-8 text-primary-500" aria-hidden="true" />
            ) : (
              <Plus className="w-8 h-8 text-primary-500" aria-hidden="true" />
            )}
          </motion.div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div
              className="px-4 pb-6 text-primary-700 flex items-start text-lg"
              id={answerId}
              role="region"
              aria-labelledby={itemId}
            >
              <ChevronRight
                className="w-8 h-8 mr-4 text-primary-400 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const t = useTranslations("FAQSection");

  const faqItems = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer"),
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary-600 text-lg sm:text-xl font-semibold mb-3 tracking-wide uppercase">
            {t("subtitle")}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 mb-6 leading-tight">
            {t("title")}
          </h3>
          <div
            className="w-24 h-1 bg-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"
            aria-hidden="true"
          ></div>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>
        <div
          className="bg-white rounded-lg shadow-sm"
          role="region"
          aria-label={t("ariaLabel")}
        >
          {faqItems.map((item, index) => (
            <FAQItemComponent
              key={index}
              question={item.question}
              answer={item.answer}
              isInitiallyOpen={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
