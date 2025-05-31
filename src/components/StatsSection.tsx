import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      value: "146.2 млн",
      label: "Население России",
      description: "Общая численность населения",
    },
    {
      icon: "Heart",
      value: "42.5 млн",
      label: "Получатели соцподдержки",
      description: "Граждане, получающие социальные выплаты",
    },
    {
      icon: "GraduationCap",
      value: "99.7%",
      label: "Уровень грамотности",
      description: "Доля грамотного населения",
    },
    {
      icon: "Building2",
      value: "5.2%",
      label: "ВВП на здравоохранение",
      description: "Доля расходов от ВВП",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ключевые показатели
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Основные статистические данные в области социальной политики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Icon
                    name={stat.icon as any}
                    size={40}
                    className="mx-auto text-purple-600"
                  />
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
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
