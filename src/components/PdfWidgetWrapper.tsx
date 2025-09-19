"use client";

import { useEffect, useState } from "react";
import PDFWidget from "@/components/PDFWidget";

const PdfWidgetWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <PDFWidget />;
};

export default PdfWidgetWrapper;