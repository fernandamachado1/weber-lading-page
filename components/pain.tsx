"use client";
import { AlertTriangle } from "lucide-react";

const painPoints = [
  "Perda de produtos por validade vencida",
  "Divergências entre estoque físico e sistema",
  "Dependência de pessoas específicas para rodar a operação",
  "Falta de processos logísticos documentados",
  "Layout do estoque confuso e sem identificação visual",
  "Ausência de ferramentas de gestão para medir resultados",
  "ERP/WMS que não atende às necessidades reais",
  "Inventários que não refletem o estoque real",
  "Dificuldade em reduzir custos de forma contínua",
  "Decisões tomadas com base na memória dos mais experientes",
];

export function PainPointsSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-4">
        Algum desses sinais acontece na sua empresa?
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Se você se identificou com dois ou mais, sua operação pode estar perdendo eficiência (e dinheiro).
      </p>
      <ul className="grid sm:grid-cols-2 gap-4">
        {painPoints.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-2 bg-white rounded-2xl shadow p-4"
          >
            <AlertTriangle className="text-yellow-500 mt-1" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* CTA que leva para o form */}
      <div className="text-center mt-8">
        <button
          onClick={scrollToForm}
          className="px-6 py-3 rounded-xl bg-weber-orange text-white font-semibold hover:bg-orange-600 transition"
        >
          Quero resolver esses problemas
        </button>
      </div>
    </section>
  );
}
