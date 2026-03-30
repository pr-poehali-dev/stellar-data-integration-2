const tools = [
  {
    emoji: "🎙️",
    title: "Живые встречи онлайн",
    text: "Групповые сессии в Zoom 2 раза в неделю. Живой голос, живые лица — не курс в записи.",
  },
  {
    emoji: "📱",
    title: "Чат сообщества",
    text: "Закрытый Telegram-чат, где участники общаются, делятся, поддерживают друг друга между встречами.",
  },
  {
    emoji: "🧘",
    title: "Практики в записи",
    text: "Медитации, дыхательные техники и йога-последовательности — в личном кабинете, доступны в любое время.",
  },
  {
    emoji: "📓",
    title: "Дневник практика",
    text: "Еженедельные письменные практики для осмысления опыта. Никто не проверяет — это только для тебя.",
  },
  {
    emoji: "👤",
    title: "Индивидуальная сессия",
    text: "Раз в месяц — личная встреча с куратором. Можно разобрать то, о чём не хочется говорить в группе.",
  },
  {
    emoji: "🔔",
    title: "Ежедневные практики",
    text: "Короткие утренние напоминания и микро-практики на день. 5–10 минут, которые меняют тон всего дня.",
  },
];

export function TechnologySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-3">
              Как это работает
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
              Формат и
              <span className="text-primary"> инструменты</span>
            </h2>
            <p className="text-muted-foreground font-geist text-lg max-w-2xl mx-auto">
              Клуб работает онлайн — ты можешь быть из любого города. Всё, что
              нужно: интернет, желание и немного времени для себя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {tool.emoji}
                </div>
                <h3 className="font-orbitron text-base font-bold text-foreground mb-2">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground font-geist text-sm leading-relaxed">
                  {tool.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center glow-border">
            <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-3">
              Расписание
            </p>
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
              Группы набираются раз в месяц
            </h3>
            <p className="text-muted-foreground font-geist max-w-xl mx-auto">
              Новый поток стартует в начале каждого месяца. Размер группы — до 12
              человек. Это сознательное ограничение: маленькая группа — это
              живой контакт, а не вебинар.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
