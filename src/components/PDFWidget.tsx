"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronUp, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PDFWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setIsVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  // prevent body scroll when modal open
  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen, mounted]);

  const toggle = () => setIsOpen((v) => !v);

  // basic iOS detection (covers iPhone/iPad)
  const isIOS =
    typeof navigator !== "undefined" &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

  const pdfPath = "/pdfs/QTM_EmailCampaign_Wellness.pdf";

  if (!isVisible) return null;

  return (
    <>
      {/* Collapsed widget (always fixed) */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={toggle}
              aria-label="Open PDF viewer"
              className="group w-44 sm:w-56"
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200 group-hover:shadow-lg">
                <div className="relative">
                  <Image
                    width={400}
                    height={400}
                    src="/images/pdfwidgetcover.png"
                    alt="Wellness Campaign Preview"
                    className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold flex items-center">
                    <FileText size={12} className="mr-1" />
                    PDF
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-gray-500 text-xs">QTM Email Campaign</p>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                    <span className="text-primary-600 text-xs font-medium">
                      View document
                    </span>
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <ChevronUp size={16} className="text-primary-600" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Expanded modal via portal (appended to body) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                {/* backdrop */}
                <div
                  className="absolute inset-0 bg-black/30"
                  onClick={toggle}
                />

                {/* modal content */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-white w-[95vw] h-[95vh] sm:w-[85vw] sm:h-[90vh] md:w-[80vw] md:h-[85vh] lg:w-[70vw] lg:h-[80vh] flex flex-col rounded-sm shadow-2xl"
                >
                  {/* header */}
                  <div className="flex items-center justify-between p-4 bg-primary-600">
                    <h3 className="text-lg font-semibold text-white">
                      Wellness Campaign
                    </h3>
                    <div className="flex items-center gap-2">
                      {/* PDF remote open (always available) */}
                      <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline text-sm"
                      >
                        Open in new tab
                      </a>
                      <button
                        onClick={toggle}
                        className="text-white hover:text-gray-200 focus:outline-none"
                        aria-label="Close PDF viewer"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* content area */}
                  <div className="flex-1 min-h-0 overflow-hidden">
                    {/* If iOS, show explicit fallback because iOS often won't render PDF in iframe */}
                    {!isIOS ? (
                      <iframe
                        src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=85`}
                        title="Wellness Campaign PDF"
                        className="w-full h-full min-h-0"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full min-h-0 flex flex-col items-center justify-center p-6 text-center">
                        <p className="mb-3 text-gray-700">
                          iOS/Safari may not render PDFs inline. Open the PDF in
                          a new tab for best results.
                        </p>
                        <a
                          href={pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 border rounded text-primary-600"
                        >
                          Open PDF in new tab
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default PDFWidget;
