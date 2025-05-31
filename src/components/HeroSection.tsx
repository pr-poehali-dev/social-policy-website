import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-blue-50 to-yellow-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center gap-4">
          <div className="p-4 bg-pink-200 rounded-full">
            <Icon name="Heart" size={48} className="text-pink-600" />
          </div>
          <div className="p-4 bg-blue-200 rounded-full">
            <Icon name="Users" size={48} className="text-blue-600" />
          </div>
          <div className="p-4 bg-yellow-200 rounded-full">
            <Icon name="Star" size={48} className="text-yellow-600" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Развитие детей с ДЦП в 2025
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Современные методы реабилитации, поддержка семей и новые возможности
          для полноценного развития каждого ребенка
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-full"
          >
            <Icon name="Heart" size={20} className="mr-2" />
            Методы лечения
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full"
          >
            <Icon name="Users" size={20} className="mr-2" />
            Центры реабилитации
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
