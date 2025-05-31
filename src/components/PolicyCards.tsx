import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PolicyCards = () => {
  const treatments = [
    {
      icon: "Activity",
      title: "Физиотерапия",
      description:
        "Лечебная физкультура, массаж, механотерапия для развития двигательных функций",
      link: "https://rehabchildren.ru",
      linkText: "Центр детской реабилитации",
      color: "from-green-200 to-emerald-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: "Brain",
      title: "Нейрореабилитация",
      description:
        "Современные методы стимуляции мозга, БОС-терапия, когнитивная реабилитация",
      link: "https://niidetstva.ru",
      linkText: "НИИ детства",
      color: "from-blue-200 to-indigo-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: "MessageCircle",
      title: "Логопедия",
      description: "Развитие речи, коррекция нарушений глотания и артикуляции",
      link: "https://logoped-center.ru",
      linkText: "Логопедический центр",
      color: "from-purple-200 to-pink-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: "Palette",
      title: "Арт-терапия",
      description:
        "Развитие через творчество: музыкотерапия, изотерапия, танцевальная терапия",
      link: "https://art-therapy.ru",
      linkText: "Центр арт-терапии",
      color: "from-yellow-200 to-orange-200",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Методы лечения и реабилитации
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Современные подходы к развитию детей с ДЦП
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader
                className={`pb-4 bg-gradient-to-r ${treatment.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${treatment.iconBg}`}>
                    <Icon
                      name={treatment.icon as any}
                      size={24}
                      className={treatment.iconColor}
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-800">
                    {treatment.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {treatment.description}
                </p>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-full"
                >
                  <a
                    href={treatment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    {treatment.linkText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyCards;
