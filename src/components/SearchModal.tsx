import React, { useRef, useEffect, useState } from "react";
import { Search, X, Info } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("SearchModal");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement your search logic here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent
            className="sm:max-w-[800px] w-full px-0 overflow-hidden fixed top-[20%] md:top-[30%] left-1/2 transform -translate-x-1/2"
            forceMount
            aria-describedby="search-modal-description"
          >
            <VisuallyHidden asChild>
              <DialogTitle>{t("SearchModalTitle")}</DialogTitle>
            </VisuallyHidden>
            <VisuallyHidden id="search-modal-description">
              {t("SearchModalDescription")}
            </VisuallyHidden>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative py-10 px-2 md:p-14">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder={t("SearchPlaceholder")}
                    className="w-full pl-14 pr-12 py-8 text-xl bg-transparent border-2 border-gray-200 focus:border-primary-300 rounded-full transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-center text-gray-500"
                >
                  {searchQuery ? (
                    <p>{t("SearchingFor", { query: searchQuery })}</p>
                  ) : (
                    <div className="space-y-2">
                      <p>{t("StartTyping")}</p>
                      <div className="flex items-center justify-center text-sm text-primary-600">
                        <Info className="w-4 h-4 mr-2" />
                        <p>{t("SearchTip")}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-gray-50 border-t border-gray-200"
                >
                  <p className="text-gray-500">{t("SearchResults")}</p>
                  {/* Add your search results here */}
                </motion.div>
              )}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default SearchModal;
