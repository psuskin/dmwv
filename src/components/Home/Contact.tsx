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
  Instagram,
  Linkedin,
} from "lucide-react";
import { useTranslations } from "next-intl";

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
}

const ContactPage: React.FC = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const socialIcons: SocialIcon[] = [
    { icon: Facebook, name: "Facebook", color: "bg-blue-600" },
    { icon: Instagram, name: "Instagram", color: "bg-pink-600" },
    { icon: Linkedin, name: "LinkedIn", color: "bg-blue-700" },
  ];

  const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-6 px-6 rounded-md transition duration-300 text-base flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <span>{t("sendButton")}</span>
                  <Send className="h-5 w-5 ml-2" />
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
                    <Phone
                      className="w-6 h-6 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-lg">{t("phoneTitle")}</p>
                      <p className="text-primary-100">{t("phoneNumber")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail
                      className="w-6 h-6 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-lg">{t("emailTitle")}</p>
                      <a
                        href="mailto:info@dmwv.de"
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
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">{t("followUs")}</h3>
                <div className="flex flex-wrap gap-4">
                  {socialIcons.map((social) => (
                    <a
                      key={social.name}
                      href={`https://${social.name.toLowerCase()}.com/dmwv`}
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
                  <a
                    href="https://twitter.com/dmwv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black p-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    aria-label={t("socialAriaLabel", {
                      socialName: "X (Twitter)",
                    })}
                  >
                    <XIcon className="h-6 w-6 text-white" />
                  </a>
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
  );
};

export default ContactPage;