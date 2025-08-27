export const Experience = () => {
  const experienceAreas = [
    {
      title: "Administração de empresas",
      icon: "🏢"
    },
    {
      title: "Gestão de pessoas", 
      icon: "👥"
    },
    {
      title: "Engenharia de operações",
      icon: "⚙️"
    },
    {
      title: "Melhoria contínua",
      icon: "📈"
    },
    {
      title: "Ferramentas de gestão",
      icon: "🛠️"
    },
    {
      title: "Indústrias multinacionais",
      icon: "🌐"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-weber-light-blue/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-weber-navy mb-6">
            MINHA EXPERIÊNCIA<br />
            APLICADA AO SEU NEGÓCIO
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            10 anos de vivência prática em grandes indústrias, agora focada no crescimento do seu negócio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Badge central */}
          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-r from-weber-orange to-yellow-400 text-white px-8 py-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">10+ ANOS DE EXPERIÊNCIA</div>
                <div className="text-sm opacity-90">em grandes operações logísticas</div>
              </div>
            </div>
          </div>

          {/* Grid simples e limpo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="font-semibold text-lg text-weber-navy group-hover:text-weber-orange transition-colors duration-300">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA simples */}
          <div className="text-center mt-16">
            <div className="bg-weber-navy text-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Experiência que gera resultados reais
              </h3>
              <p className="text-lg opacity-90">
                Cada desafio logístico que você enfrenta, eu já resolvi em alguma grande empresa. 
                Vamos aplicar essas soluções no seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};