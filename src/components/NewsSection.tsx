import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      date: "15 мая 2024",
      category: "Пенсии",
      title: "Индексация пенсий превысила уровень инфляции",
      summary:
        "Страховые пенсии проиндексированы на 7,5%, что выше официального уровня инфляции за предыдущий год",
    },
    {
      date: "10 мая 2024",
      category: "Семейная политика",
      title: "Расширены программы поддержки многодетных семей",
      summary:
        "Введены новые меры поддержки, включая льготную ипотеку и дополнительные выплаты на детей",
    },
    {
      date: "5 мая 2024",
      category: "Здравоохранение",
      title: "Запуск новых программ профилактики заболеваний",
      summary:
        'Национальный проект "Здравоохранение" включает расширенные программы скрининга и вакцинации',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Пенсии":
        return "bg-green-100 text-green-700";
      case "Семейная политика":
        return "bg-blue-100 text-blue-700";
      case "Здравоохранение":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Последние обновления
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Актуальная информация о изменениях в социальной политике
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight text-gray-900">
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
