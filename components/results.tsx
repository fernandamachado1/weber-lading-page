import { Card, CardContent } from "@/components/ui/card";
import { 
  ChartCandlestick, 
  TrendingDown, 
  Smile, 
  Zap, 
  Star, 
  MessageSquare, 
  Handshake, 
  Building2, 
  RefreshCw, 
  Brain 
} from "lucide-react";

export const Results = () => {
  const results = [
    {
      icon: <ChartCandlestick />,
      title: "Reduz custos",
      description: "Otimização de recursos e processos"
    },
    {
      icon: <TrendingDown />,
      title: "Reduz perdas", 
      description: "Minimização de desperdícios"
    },
    {
      icon: <Smile />,
      title: "Aumenta a satisfação do cliente",
      description: "Melhoria na qualidade do serviço"
    },
    {
      icon: <Zap />,
      title: "Aumento da eficiência operacional",
      description: "Processos mais ágeis e eficazes"
    },
    {
      icon: <Star />,
      title: "Melhora a qualidade",
      description: "Padrões elevados de excelência"
    },
    {
      icon: <MessageSquare />,
      title: "Melhora a comunicação",
      description: "Fluxo de informações otimizado"
    },
    {
      icon: <Handshake />,
      title: "Melhora o engajamento dos colaboradores",
      description: "Equipe mais motivada e produtiva"
    },
    {
      icon: <Building2 />,
      title: "Fortalece a cultura organizacional",
      description: "Valores e práticas alinhadas"
    },
    {
      icon: <RefreshCw />,
      title: "Otimização de processos",
      description: "Fluxos de trabalho aprimorados"
    },
    {
      icon: <Brain />,
      title: "Melhora a tomada de decisão",
      description: "Decisões baseadas em dados"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-background to-weber-orange/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-weber-navy mb-6">
            RESULTADOS NA<br />
            PRÁTICA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-weber-orange to-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transformações reais que você pode esperar ao implementar nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <Card 
              key={index}
              className="group hover:scale-[1.02] transition-all duration-500 border-0 shadow-xl hover:shadow-2xl overflow-hidden bg-white"
            >
              <CardContent className="p-8 relative">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-weber-navy group-hover:text-weber-orange transition-colors duration-300 bg-gradient-to-br from-weber-light-blue/10 to-weber-orange/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-weber-navy group-hover:text-weber-orange transition-colors duration-300">
                      {result.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{result.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-weber-light-blue to-weber-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
