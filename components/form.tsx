"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import emailjs from "@emailjs/browser";
import { Textarea } from "./ui/textareat";
import { MessageCircle } from "lucide-react";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7vue19f",
        "template_tqacv4j",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        "PFLdgv32N7ylz3Vt6"
      );

      alert("Mensagem enviada com sucesso! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ops! Algo deu errado.");
    }

    setIsSubmitting(false);
  };

  const whatsappNumber = "5541998222988";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi o site e gostaria de saber mais sobre como vocês podem ajudar minha operação logística."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact-form"
      className="py-16 bg-gradient-to-br from-background to-weber-orange/5"
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-weber-navy mb-6 text-center">
              Entre em Contato
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input
                  name="name"
                  placeholder="Digite seu nome"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  name="message"
                  placeholder="Digite sua mensagem"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Botões centralizados e com mesma largura/altura */}
              <div className="mt-6 flex flex-col items-center gap-4">
                <Button
                  type="submit"
                  className="w-[230px] h-[46px] text-md"
                  disabled={isSubmitting}
                  style={{cursor: "pointer"}}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-[230px] h-[46px] text-md rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  <MessageCircle size={24} />
                  Falar no WhatsApp
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
