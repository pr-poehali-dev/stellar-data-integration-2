const items = [
  {
    emoji: "🔒",
    title: "Полная конфиденциальность",
    text: "Всё, что происходит в клубе — остаётся в клубе. Никаких скриншотов, никаких обсуждений снаружи. Это правило для всех участников без исключений.",
  },
  {
    emoji: "🤝",
    title: "Без осуждения",
    text: "Пространство клуба построено на принятии. Здесь нет правильных и неправильных чувств, нет нормы, под которую надо подстраиваться.",
  },
  {
    emoji: "🧭",
    title: "Профессиональное сопровождение",
    text: "Все практики ведут специалисты с образованием и опытом. Мы не занимаемся самодеятельностью — каждый инструмент выбран осознанно.",
  },
  {
    emoji: "⚡",
    title: "Твой темп",
    text: "Никто не будет тебя торопить или давить. Ты сам выбираешь глубину и скорость — мы лишь создаём условия и поддерживаем.",
  },
  {
    emoji: "🌱",
    title: "Постепенность",
    text: "Мы не устраиваем марафонов с эффектом ломки. Изменения в клубе происходят мягко, слой за слоем — так, чтобы они держались.",
  },
  {
    emoji: "💬",
    title: "Живая поддержка",
    text: "Ты не один на один с процессом. Куратор и сообщество рядом — можно задать вопрос, попросить помощи, просто написать что-то тяжёлое.",
  },
];

export function SafetySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-3">
              Безопасность
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
              Пространство, которому
              <span className="text-primary block mt-1">можно доверять</span>
            </h2>
            <p className="text-muted-foreground font-geist text-lg max-w-2xl mx-auto">
              Мы знаем, что открыться — это риск. Поэтому безопасность участников
              для нас не декларация, а основа всей работы клуба.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-orbitron text-base font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-geist text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetySection;
