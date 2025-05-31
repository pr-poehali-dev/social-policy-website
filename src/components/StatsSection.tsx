import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Baby",
      value: "120 тыс",
      label: "Детей с ДЦП в России",
      description: "Официальная статистика Минздрава",
    },
    {
      icon: "TrendingUp",
      value: "85%",
      label: "Успешность ранней реабилитации",
      description: "При начале лечения до 3 лет",
    },
    {
      icon: "Building2",
      value: "450+",
      label: "Центров реабилитации",
      description: "По всей территории России",
    },
    {
      icon: "Smile",
      value: "78%",
      label: "Улучшение качества жизни",
      description: "С комплексной реабилитацией",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Статистика и достижения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Актуальные данные о развитии детей с ДЦП в России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Icon
                      name={stat.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                </div>

                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>

                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </h3>

                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
