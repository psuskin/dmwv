import SubHeader from "@/components/SubHeader";
import React from "react";
import { useTranslations } from "next-intl";
import ContactPage from "@/components/Home/Contact";

const KontactClient = () => {
  const t = useTranslations("Contact");
  return (
    <div>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("contact"), href: "/kontact" },
        ]}
      />
      <ContactPage />
    </div>
  );
};

export default KontactClient;
