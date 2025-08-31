import { Button } from "@/components/ui/button";
import warehouseHero from "@/assets/warehouse-hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${warehouseHero.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-weber-navy/90 via-weber-navy/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="text-weber-orange text-6xl lg:text-8xl font-bold">W</span>
            <span className="text-white text-4xl lg:text-6xl font-bold">EBER</span>
          </div>
          <p className="text-weber-orange text-lg lg:text-xl mb-8 font-medium">
            SOLUÇÕES EM LOGÍSTICA
          </p>
          <h1 className="text-white text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            PRONTO PARA TRANSFORMAR A<br />
            LOGÍSTICA DA SUA EMPRESA?
          </h1>
          <p className="text-weber-orange text-lg lg:text-xl mb-8 max-w-2xl">
            Primeira visita gratuita para entender sua operação e apresentar oportunidades de melhoria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-weber-orange to-red-600 hover:from-red-600 hover:to-weber-orange text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Fale conosco
            </Button>
            {/* <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-weber-light-blue text-weber-light-blue hover:bg-weber-light-blue hover:text-weber-navy font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              @WEBER_SOLUCOES
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
