export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-space-mono text-sm uppercase tracking-widest mb-3">
                О клубе
              </p>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-6">
                Место, где меняются
                <span className="text-primary block mt-1">по-настоящему</span>
              </h2>
              <p className="text-muted-foreground font-geist text-lg leading-relaxed mb-6">
                Клуб СИЛА — это закрытое пространство для людей, которые устали
                жить на автопилоте. Здесь нет готовых рецептов счастья и
                волшебных таблеток. Есть практики, сообщество и честный разговор
                о том, что происходит внутри.
              </p>
              <p className="text-muted-foreground font-geist text-lg leading-relaxed mb-8">
                Мы объединяем психологию, телесные практики и духовный поиск —
                не потому что это модно, а потому что человек целостен и работать
                нужно со всеми уровнями сразу.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-primary/30 rounded-lg p-4">
                  <div className="text-primary font-orbitron text-2xl font-bold mb-1">
                    3+
                  </div>
                  <div className="text-muted-foreground font-space-mono text-sm">
                    года работы клуба
                  </div>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <div className="text-primary font-orbitron text-2xl font-bold mb-1">
                    200+
                  </div>
                  <div className="text-muted-foreground font-space-mono text-sm">
                    участников прошли путь
                  </div>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <div className="text-primary font-orbitron text-2xl font-bold mb-1">
                    12
                  </div>
                  <div className="text-muted-foreground font-space-mono text-sm">
                    практик и направлений
                  </div>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <div className="text-primary font-orbitron text-2xl font-bold mb-1">
                    100%
                  </div>
                  <div className="text-muted-foreground font-space-mono text-sm">
                    конфиденциальность
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-primary/20 rounded-2xl p-8 glow-border">
                <div className="w-16 h-16 bg-primary/10 border border-primary/40 rounded-full flex items-center justify-center mb-6 text-3xl">
                  🌿
                </div>
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                  Наш подход
                </h3>
                <p className="text-muted-foreground font-geist leading-relaxed mb-6">
                  Мы не продаём быстрые результаты. Мы создаём условия для
                  настоящих изменений — медленных, глубоких и устойчивых.
                </p>
                <ul className="space-y-3">
                  {[
                    "Работа с корнями, а не симптомами",
                    "Практики, проверенные на себе",
                    "Маленькая группа — живой контакт",
                    "Без осуждения и чужих ожиданий",
                    "Свой темп у каждого участника",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 font-bold">→</span>
                      <span className="text-foreground font-geist text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
