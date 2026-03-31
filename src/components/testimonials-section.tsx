import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Марина К.",
    role: "Участница клуба, 8 месяцев",
    avatar: "/professional-woman-scientist.png",
    content:
      "Полтора года я почти не вставала с кровати. Клуб стал первым местом, где мне не было страшно говорить об этом вслух. Постепенно что-то начало меняться — появились силы, потом интерес, потом радость. Я вышла из депрессии и сама себя не узнаю.",
  },
  {
    name: "Алексей Р.",
    role: "Участник клуба, 1 год",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "До клуба я жил на автопилоте — работа, диван, снова работа. Через два месяца начал замечать вещи, которых раньше не видел: запах кофе утром, разговор с другом, закат. Каждый день стал чувствоваться как настоящий.",
  },
  {
    name: "Ольга С.",
    role: "Участница клуба, 5 месяцев",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Я пришла просто попробовать. А ушла с ощущением, что моя жизнь сдвинулась с места. Поменяла работу, починила отношения с мамой, начала заниматься собой. Это не клуб изменил меня — он дал мне толчок, и дальше покатилось само.",
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