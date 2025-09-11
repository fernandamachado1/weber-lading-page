import { Card, CardContent } from "@/components/ui/card";
import { 
  Boxes, 
  ClipboardList, 
  Warehouse, 
  Tag, 
  Users, 
  CalendarDays, 
  BarChart3, 
  Laptop, 
  FileText, 
  DollarSign 
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Boxes />,
      title: "Controle de estoque",
      description: "Gestão eficiente de inventário"
    },
    {
      icon: <ClipboardList />,
      title: "Inventário", 
      description: "Controle preciso de produtos"
    },
    {
      icon: <Warehouse />,
      title: "Endereçamento de porta pallet",
      description: "Organização otimizada de armazenagem"
    },
    {
      icon: <Tag />,
      title: "Layout e identificações",
      description: "Sinalização e organização visual"
    },
    {
      icon: <Users />,
      title: "Ferramentas de gestão",
      description: "Sistemas para liderança eficaz"
    },
    {
      icon: <CalendarDays />,
      title: "Controle de data de validade",
      description: "Gestão de prazos e qualidade"
    },
    {
      icon: <BarChart3 />,
      title: "Análise de dados",
      description: "Insights para tomada de decisão"
    },
    {
      icon: <Laptop />,
      title: "Customização de sistema informatizado",
      description: "Soluções tecnológicas personalizadas"
    },
    {
      icon: <FileText />,
      title: "Documentos de controle",
      description: "Padronização de processos"
    },
    {
      icon: <DollarSign />,
      title: "Mapear perdas, retrabalhos e prejuízos",
      description: "Identificação de oportunidades de melhoria"
    }
  ];

  return (
    <section id="services" className="py-20 bg-weber-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            SERVIÇOS OFERECIDOS
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
                <div className="bg-background text-foreground p-6 flex items-center gap-6 relative overflow-hidden">
                  <div className="text-4xl text-weber-navy group-hover:text-weber-orange transition-colors duration-300 bg-foreground/10 p-4 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-yellow-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">{service.description}</p>
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
