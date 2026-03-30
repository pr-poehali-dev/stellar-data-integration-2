import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Марина К.",
    role: "Участница клуба, 8 месяцев",
    avatar: "/professional-woman-scientist.png",
    content:
      "Я наконец-то поняла, чего хочу от жизни. После трёх месяцев в клубе ушли тревога и постоянное ощущение «что-то не так». Живу осознанно — это другой уровень.",
  },
  {
    name: "Алексей Р.",
    role: "Участник клуба, 1 год",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Пришёл скептиком. Ушёл с ответами на вопросы, которые мучали меня годами. Йога и работа с психологом изменили моё отношение к себе и к людям.",
  },
  {
    name: "Ольга С.",
    role: "Участница клуба, 5 месяцев",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Клуб СИЛА — это не просто занятия, это сообщество людей, которые хотят расти. Чувствую поддержку и вдохновение каждый день. Очень рада, что нашла это место.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Истории участников</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные люди, которые уже изменили свою жизнь вместе с клубом СИЛА
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}