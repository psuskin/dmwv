/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { initGA } from "@/lib/analytics";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cookie, ChevronRight } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const t = useTranslations("cookies");

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowConsent(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowConsent(false);
    initGA();
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-[400px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                <Cookie className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {t("title")}
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t("description")}
            </p>

            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <Button
                  onClick={acceptAll}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center gap-2 py-5"
                >
                  <Shield className="w-4 h-4" />
                  {t("acceptAll")}
                  <ChevronRight className="w-4 h-4" />
                </Button>

                <Button
                  onClick={acceptEssential}
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 py-5"
                >
                  {t("essentialOnly")}
                </Button>
              </div>

              <div className="text-center">
                <a
                  href="/privacy-policy"
                  className="text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 underline"
                >
                  {/* {t("privacyPolicy")} */}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
