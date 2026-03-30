interface PricingSectionProps {
  onJoinClick: () => void;
}

export function PricingSection({ onJoinClick }: PricingSectionProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-3">
              Стоимость
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
              Три недели,
              <span className="text-primary"> два пути</span>
            </h2>
            <p className="text-muted-foreground font-geist text-lg max-w-xl mx-auto">
              Выбери формат, который подходит тебе. Оба включают полный курс
              трёх недель с командой экспертов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Тариф База */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors duration-300">
              <p className="text-primary font-space-mono text-xs uppercase tracking-widest mb-3">
                Тариф
              </p>
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                База
              </h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="font-orbitron text-4xl font-bold text-foreground">
                  9 900
                </span>
                <span className="text-muted-foreground font-space-mono mb-1">
                  ₽
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "3 недели интенсивной работы",
                  "Групповые онлайн-встречи",
                  "Доступ к практикам в записи",
                  "Закрытый чат сообщества",
                  "Дневник практика",
                  "Поддержка куратора в чате",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground font-geist text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onJoinClick}
                className="w-full border border-primary text-primary font-orbitron text-sm font-bold py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Выбрать «Базу»
              </button>
            </div>

            {/* Тариф Глубина */}
            <div className="bg-card border border-primary rounded-2xl p-8 flex flex-col relative glow-border">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground font-orbitron text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Рекомендуем
                </span>
              </div>
              <p className="text-primary font-space-mono text-xs uppercase tracking-widest mb-3">
                Тариф
              </p>
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                Глубина
              </h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="font-orbitron text-4xl font-bold text-foreground">
                  14 900
                </span>
                <span className="text-muted-foreground font-space-mono mb-1">
                  ₽
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Всё из тарифа «База»",
                  "Индивидуальная сессия с куратором",
                  "Персональный разбор запроса",
                  "Расширенные авторские практики",
                  "Приоритетная поддержка",
                  "Доступ к материалам после курса",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-foreground font-geist text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onJoinClick}
                className="w-full bg-primary text-primary-foreground font-orbitron text-sm font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 pulse-button"
              >
                Выбрать «Глубину»
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
