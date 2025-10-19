"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialIcon {
  icon: React.ElementType;
  name: string;
  color: string;
  href: string;
}

const formsparkUrl = `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_ID}`;

const ContactPage: React.FC = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(formsparkUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _redirect: false,
          _honeypot: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Show success modal
      setShowSuccessModal(true);

      // Auto-hide the modal after 3 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        t("errorMessage") || "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons: SocialIcon[] = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      color: "bg-blue-700",
      href: "https://www.linkedin.com/in/lutz-lungwitz-98999335/",
    },
    {
      icon: Facebook,
      name: "Facebook",
      color: "bg-blue-600",
      href: "https://www.facebook.com/dmwv.de",
    },
  ];

  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-title"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1
              id="contact-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-4"
            >
              {t("title")}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Form */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <h2 className="text-3xl font-semibold text-primary-800 mb-8">
                  {t("formTitle")}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  action={formsparkUrl}
                >
                  <input
                    type="checkbox"
                    name="_honeypot"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {t("nameLabel")}
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder={t("namePlaceholder")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full text-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {t("emailLabel")}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={t("emailPlaceholder")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full text-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("subjectLabel")}
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder={t("subjectPlaceholder")}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full text-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("messageLabel")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("messagePlaceholder")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-40 text-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-6 px-6 rounded-md transition duration-300 text-base flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t("sending") || "Sending..."}
                      </span>
                    ) : (
                      <>
                        <span>{t("sendButton")}</span>
                        <Send className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:w-1/3 bg-gradient-to-b from-primary-800 to-primary-900 text-white p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    {t("contactInfoTitle")}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          {t("emailTitle")}
                        </p>
                        <a
                          href="mailto:lutz.lungwitz@mwmg.de"
                          className="text-primary-100 hover:underline"
                        >
                          {t("emailAddress")}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          {t("addressTitle")}
                        </p>
                        <p className="text-primary-100">
                          {t("addressLine1")}
                          <br />
                          {t("addressLine2")}
                          <br />
                          {t("addressLine3")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          {t("phoneTitle")}
                        </p>
                        <p className="text-primary-100">{t("phoneNumber")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">
                    {t("followUs")}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialIcons.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} p-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center`}
                        aria-label={t("socialAriaLabel", {
                          socialName: social.name,
                        })}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </a>
                    ))}
                  </div>
                  <p className="mt-6 text-primary-100 text-sm">
                    {t("stayConnected")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span>
                {t("successModalTitle") || "Message Sent Successfully!"}
              </span>
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              {t("successModalDescription") ||
                "Thank you for your message. We'll get back to you as soon as possible."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactPage;
