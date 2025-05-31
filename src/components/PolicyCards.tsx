import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PolicyCards = () => {
  const policies = [
    {
      icon: "Heart",
      title: "Здравоохранение",
      description:
        "Система обязательного медицинского страхования, национальные проекты в сфере здравоохранения",
      initiatives: [
        "ОМС",
        'Национальный проект "Здравоохранение"',
        "Программа диспансеризации",
      ],
      color: "bg-red-100 text-red-700",
    },
    {
      icon: "GraduationCap",
      title: "Образование",
      description:
        "Бесплатное общее образование, программы поддержки высшего образования и развития навыков",
      initiatives: [
        "Общее образование",
        'Национальный проект "Образование"',
        "Цифровая образовательная среда",
      ],
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: "Users",
      title: "Пенсионная система",
      description:
        "Страховые и социальные пенсии, программы негосударственного пенсионного обеспечения",
      initiatives: ["Страховые пенсии", "Социальные пенсии", "НПФ"],
      color: "bg-green-100 text-green-700",
    },
    {
      icon: "Shield",
      title: "Социальная защита",
      description:
        "Поддержка малообеспеченных семей, инвалидов, ветеранов и других социально уязвимых групп",
      initiatives: [
        "Материнский капитал",
        "Пособия на детей",
        "Льготы ветеранам",
      ],
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Основные направления
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ключевые сферы социальной политики Российской Федерации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${policy.color}`}>
                    <Icon name={policy.icon as any} size={24} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {policy.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {policy.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Основные инициативы:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {policy.initiatives.map((initiative, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {initiative}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyCards;
