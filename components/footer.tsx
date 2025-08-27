import { Instagram, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-weber-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-weber-orange text-3xl font-bold">W</span>
              <span className="text-white text-2xl font-bold">EBER</span>
            </div>
            <p className="text-weber-light-blue text-sm mb-2">SOLUÇÕES EM LOGÍSTICA</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando operações logísticas com 10 anos de experiência em grandes indústrias. 
              Soluções práticas e personalizadas para sua empresa.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-weber-orange">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5541998222988" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-weber-orange transition-colors"
              >
                <Phone size={18} />
                <span>(41) 99822-2988</span>
              </a>
              <a 
                href="mailto:contato@webersolucoes.com.br"
                className="flex items-center gap-3 text-gray-300 hover:text-weber-orange transition-colors"
              >
                <Mail size={18} />
                <span>contato@webersolucoes.com.br</span>
              </a>
              <a 
                href="https://instagram.com/weber_solucoes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@weber_solucoes</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-weber-orange">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-weber-light-blue transition-colors cursor-default">
                Controle de estoque
              </li>
              <li className="text-gray-300 hover:text-weber-light-blue transition-colors cursor-default">
                Gestão de inventário
              </li>
              <li className="text-gray-300 hover:text-weber-light-blue transition-colors cursor-default">
                Layout e identificações
              </li>
              <li className="text-gray-300 hover:text-weber-light-blue transition-colors cursor-default">
                Ferramentas de gestão
              </li>
              <li className="text-gray-300 hover:text-weber-light-blue transition-colors cursor-default">
                Análise de dados
              </li>
              <li className="text-gray-300 hover:text-weber-light-blue transition-colors cursor-default">
                Otimização de processos
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-weber-light-blue/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Weber Soluções em Logística. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-weber-light-blue">🎯 Primeira visita gratuita</span>
              <span className="text-weber-light-blue">🏆 10 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};