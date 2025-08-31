export const Knowledge = () => {
  const features = [
    {
      icon: "🎯",
      title: "Não é só uma consultoria",
      subtitle: "É uma parceria estratégica",
      description: "Oferecemos orientação personalizada, trabalhando junto com você para entender suas necessidades específicas e criar soluções sob medida.",
      gradient: "from-weber-orange to-weber-navy",
      bgGradient: "from-weber-light-blue/20 to-transparent"
    },
    {
      icon: "🚀",
      title: "Não é só uma mentoria", 
      subtitle: "É transformação real",
      description: "Desenvolvemos soluções práticas e implementáveis que geram resultados mensuráveis no seu dia a dia operacional.",
      gradient: "from-weber-navy to-weber-orange",
      bgGradient: "from-weber-orange/20 to-transparent"
    },
    {
      icon: "🤝",
      title: "É envolver todo o time",
      subtitle: "Crescimento conjunto",
      description: "Capacitamos sua equipe inteira, criando uma cultura de melhoria contínua e garantindo a sustentabilidade dos resultados.",
      gradient: "from-yellow-400 to-weber-orange",
      bgGradient: "from-yellow-100 to-transparent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-weber-light-blue/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-weber-light-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-weber-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-weber-navy mb-4">
              CONHECIMENTO É<br />
              <span className="bg-gradient-to-r from-weber-orange to-yellow-400 bg-clip-text text-transparent">
                PODER
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-weber-orange to-yellow-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            Nossa abordagem vai além do tradicional. Construímos conhecimento compartilhado.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group hover:scale-[1.02] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Icon Section */}
                  <div className="p-8 text-center relative">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-weber-navy mb-2 group-hover:text-weber-orange transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-weber-orange font-semibold text-sm mb-4">
                      {feature.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Central CTA Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-weber-navy via-weber-light-blue to-weber-orange p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden">
              
              <div className="relative z-10">
                <div className="text-7xl mb-6 animate-pulse">🧠</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Metodologia Colaborativa
                </h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                  Trabalhamos lado a lado com sua equipe, compartilhando conhecimento e 
                  construindo soluções sustentáveis que transformam sua operação de forma definitiva.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-white/80">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span>✨</span>
                    <span className="font-medium">Capacitação</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span>🎯</span>
                    <span className="font-medium">Implementação</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span>📈</span>
                    <span className="font-medium">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            {/* <div className="absolute -top-6 -right-6 w-12 h-12 bg-weber-orange rounded-full animate-bounce shadow-lg"></div> */}
            {/* <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div> */}
            {/* <div className="absolute top-1/2 -left-4 w-6 h-6 bg-weber-light-blue rounded-full animate-ping"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};