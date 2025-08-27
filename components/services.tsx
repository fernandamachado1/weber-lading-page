import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: "📦",
      title: "Controle de estoque",
      description: "Gestão eficiente de inventário"
    },
    {
      icon: "📋",
      title: "Inventário", 
      description: "Controle preciso de produtos"
    },
    {
      icon: "🏗️",
      title: "Endereçamento de porta pallet",
      description: "Organização otimizada de armazenagem"
    },
    {
      icon: "🏷️",
      title: "Layout e identificações",
      description: "Sinalização e organização visual"
    },
    {
      icon: "👥",
      title: "Ferramentas de gestão",
      description: "Sistemas para liderança eficaz"
    },
    {
      icon: "📅",
      title: "Controle de data de validade",
      description: "Gestão de prazos e qualidade"
    },
    {
      icon: "📊",
      title: "Análise de dados",
      description: "Insights para tomada de decisão"
    },
    {
      icon: "💻",
      title: "Customização de sistema informatizado",
      description: "Soluções tecnológicas personalizadas"
    },
    {
      icon: "📄",
      title: "Documentos de controle",
      description: "Padronização de processos"
    },
    {
      icon: "💰",
      title: "Mapear perdas, retrabalhos e prejuízos",
      description: "Identificação de oportunidades de melhoria"
    }
  ];

  return (
    <section id="services" className="py-20 bg-weber-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            FORTALECENDO<br />
            SUA LOGÍSTICA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-weber-orange to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-[1.02] transition-all duration-300 border-0 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <CardContent className="p-0 relative">
                <div className="bg-gradient-to-br from-weber-light-blue via-weber-navy to-weber-navy text-white p-6 flex items-center gap-6 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute right-4 bottom-0 w-24 h-24 bg-white/5 rounded-full transform translate-y-8"></div>
                  
                  <div className="text-4xl bg-white/10 p-4 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};