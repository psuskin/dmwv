import { unstable_setRequestLocale } from "next-intl/server";
import MedicalWellnessContent from "./MedicalWellnessContent";

export default function MedicalWellnessPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <MedicalWellnessContent />;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
