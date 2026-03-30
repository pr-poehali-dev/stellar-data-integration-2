import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Психология и коучинг",
    description: "Практикующие психологи помогут разобраться в себе, проработать ограничивающие убеждения и выстроить новые паттерны мышления.",
    icon: "brain",
    badge: "Психология",
  },
  {
    title: "Йога и тело",
    description: "Инструкторы йоги проведут тебя через практики, которые соединят тело и разум, снимут напряжение и наполнят энергией.",
    icon: "globe",
    badge: "Йога",
  },
  {
    title: "Здоровье и энергия",
    description: "Специалисты по здоровому образу жизни помогут выстроить режим, питание и практики для высокого уровня энергии каждый день.",
    icon: "zap",
    badge: "Здоровье",
  },
  {
    title: "Эзотерика и духовность",
    description: "Глубокое погружение в практики осознанности, медитации и духовного роста для понимания себя и мира вокруг.",
    icon: "target",
    badge: "Эзотерика",
  },
  {
    title: "Сообщество и поддержка",
    description: "Живое сообщество людей на пути роста — ты не один. Поддержка, вдохновение и единомышленники рядом каждый день.",
    icon: "link",
    badge: "Комьюнити",
  },
  {
    title: "Личная трансформация",
    description: "Комплексный подход: от осознания — к действию. Выйди на новый уровень жизни с помощью практик и наставничества экспертов клуба.",
    icon: "lock",
    badge: "Рост",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Направления клуба СИЛА</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Эксперты в каждом направлении помогут тебе разобраться в себе и начать жить по-настоящему
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}