import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      date: "20 мая 2024",
      category: "Прорыв",
      title: "Новый метод стимуляции спинного мозга у детей",
      summary:
        "Российские ученые разработали безопасную методику электростимуляции для детей с ДЦП",
      icon: "Zap",
    },
    {
      date: "15 мая 2024",
      category: "Технологии",
      title: "ИИ помогает в диагностике ДЦП",
      summary:
        "Искусственный интеллект позволяет выявлять ДЦП на 6 месяцев раньше обычного",
      icon: "Bot",
    },
    {
      date: "10 мая 2024",
      category: "Достижения",
      title: "Реабилитационный центр получил международное признание",
      summary:
        "Московский центр детской реабилитации стал лучшим в Европе по результатам лечения",
      icon: "Award",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Прорыв":
        return "bg-green-100 text-green-700";
      case "Технологии":
        return "bg-blue-100 text-blue-700";
      case "Достижения":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Последние новости и достижения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Актуальная информация о прогрессе в лечении ДЦП
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/90 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <Badge className={getCategoryColor(item.category)}>
                    <Icon name={item.icon as any} size={12} className="mr-1" />
                    {item.category}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight text-gray-800">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
