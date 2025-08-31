import logistic from "@/assets/logistic.jpg";

export const Testimonial = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logistic.src})` }}
      >
        <div className="absolute inset-0 bg-weber-navy/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            EXCELÊNCIA LOGÍSTICA<br />
            AO SEU ALCANCE
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-2xl">
            <div className="text-center">
              <div className="text-6xl lg:text-8xl text-weber-orange mb-6">&quot;</div>
              <blockquote className="text-xl lg:text-2xl text-weber-navy font-medium leading-relaxed mb-8 italic">
                Trago para a sua operação as melhores práticas e ferramentas usadas em grandes empresas, 
                democratizando o acesso a soluções logísticas de alto nível de forma simples, acessível e 
                adaptada à sua realidade.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-1 h-12 bg-gradient-to-b from-weber-orange to-weber-navy rounded-full"></div>
                <div className="text-right">
                  <div className="text-weber-navy font-bold text-xl">Mayara Weber</div>
                  <div className="text-weber-orange font-semibold">Especialista em Logística</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};