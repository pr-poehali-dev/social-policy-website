import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon
            name="Shield"
            size={64}
            className="mx-auto mb-6 text-purple-300"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Социальная политика России
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Комплексная система мер государственной поддержки граждан,
          направленная на обеспечение достойного уровня жизни и социальной
          справедливости
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="FileText" size={20} className="mr-2" />
            Изучить направления
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-4 text-lg"
          >
            <Icon name="BarChart3" size={20} className="mr-2" />
            Статистика
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
