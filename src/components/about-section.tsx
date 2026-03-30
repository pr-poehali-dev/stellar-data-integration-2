const experts = [
  {
    emoji: "🧠",
    name: "Егорова Елена",
    role: "Психолог, коуч трансформационных игр",
    desc: "Создатель исцеляющей техники «Нейро-гимнастика». Опыт работы — 20 лет.",
  },
  {
    emoji: "🌿",
    name: "Андрей Волга",
    role: "Натуропат",
    desc: "Создатель детокс-метода «Возвращение к истокам». Исцеляет людей уже 10 лет.",
  },
  {
    emoji: "🧘",
    name: "Елизавета Тарасова",
    role: "Йога-мастер",
    desc: "В практике более 6 лет.",
  },
  {
    emoji: "✨",
    name: "Камилла Ринатова",
    role: "Квантовый психолог, куратор",
    desc: "Создатель авторских практик для работы с травмой. Опыт более 5 лет.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-3">
              О клубе
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-6">
              Перезапусти свою жизнь
              <span className="text-primary block mt-1">за три недели</span>
            </h2>
            <p className="text-muted-foreground font-geist text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              В клубе СИЛА ты получишь поддержку и раскроешь свою силу, чтобы
              сотворять лучшую версию себя. Мягко, но без жалости препарируем
              насущные жизненные темы.
            </p>
            <p className="text-muted-foreground font-geist text-lg leading-relaxed max-w-3xl mx-auto">
              Комплексный подход встряхнёт тебя и сделает первый вдох настоящей
              жизни — как если бы мы делали искусственное дыхание.
            </p>
          </div>

          <div className="mb-14">
            <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-8 text-center">
              Эксперты клуба
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experts.map((e, i) => (
                <div
                  key={i}
                  className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 flex gap-5 items-start"
                >
                  <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-2xl">
                    {e.emoji}
                  </div>
                  <div>
                    <h3 className="font-orbitron text-base font-bold text-foreground mb-1">
                      {e.name}
                    </h3>
                    <p className="text-primary font-space-mono text-xs mb-2">
                      {e.role}
                    </p>
                    <p className="text-muted-foreground font-geist text-sm leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "20", label: "лет опыта ведущего эксперта" },
              { num: "4", label: "специалиста в команде" },
              { num: "3", label: "недели до результата" },
              { num: "100%", label: "конфиденциальность" },
            ].map((s, i) => (
              <div key={i} className="border border-primary/30 rounded-lg p-4 text-center">
                <div className="text-primary font-orbitron text-2xl font-bold mb-1">
                  {s.num}
                </div>
                <div className="text-muted-foreground font-space-mono text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
