"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, FileText, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
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

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          zIndex: -2,
        }}
      />
      {/* Blur Overlay */}
      <div className="fixed inset-0 backdrop-blur-md" style={{ zIndex: -1 }} />
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-30"
        style={{ zIndex: -1 }}
      />

      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full z-10">
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-2/3 p-8 lg:p-12">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Wir freuen uns, von Ihnen zu hören! Füllen Sie das Formular aus,
              und wir melden uns so schnell wie möglich bei Ihnen.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Betreff"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Ihre Nachricht"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32 border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Nachricht senden
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-2/5 bg-primary-500 text-white p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-8">Kontaktinformationen</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p>+49 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <p>info@dmwv.de</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p>
                    Heideläuferweg 75a
                    <br />
                    12353 Berlin
                    <br />
                    Deutschland
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FileText className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Impressum</p>
                  <a
                    href="#"
                    className="underline hover:text-primary-200 transition-colors"
                  >
                    Zum Impressum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
