import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Шаг 1. Осознание",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Первый и самый важный шаг — честно посмотреть на себя. Вместе с психологами клуба ты определишь, 
            что тебя сдерживает, найдёшь свои истинные ценности и поймёшь, чего на самом деле хочешь от жизни.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Индивидуальные сессии с психологом
            </div>
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Проработка страхов и ограничений
            </div>
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Поиск своих истинных целей и смыслов
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2. Практика",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Знания без практики — ничто. В клубе СИЛА ты будешь практиковать йогу, медитацию, дыхательные 
            техники и методы управления энергией под руководством опытных инструкторов каждую неделю.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Еженедельные занятия йогой и медитацией
            </div>
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Дыхательные практики и работа с телом
            </div>
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Эзотерические техники и духовные практики
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3. Трансформация",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Постепенно ты замечаешь изменения: больше энергии, ясность ума, уверенность в себе, гармония 
            в отношениях. Ты выходишь на новый уровень — и живёшь жизнью, которую сам выбрал.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Раскрытие внутреннего потенциала и силы
            </div>
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Гармония тела, разума и духа
            </div>
            <div className="flex items-center gap-3 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Жизнь по-настоящему — твоя, осознанная
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как проходит путь в клубе</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три шага к настоящей жизни — от первого осознания до полной трансформации вместе с экспертами клуба СИЛА.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}