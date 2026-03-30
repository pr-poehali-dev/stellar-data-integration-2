import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Для кого подходит клуб СИЛА?",
      answer:
        "Клуб подходит для всех, кто чувствует, что хочет большего от жизни, но не знает с чего начать. Для тех, кто ищет ответы на важные вопросы о себе, хочет разобраться в своих целях, улучшить здоровье и найти внутренний баланс.",
    },
    {
      question: "Нужен ли опыт в йоге или медитации?",
      answer:
        "Нет, абсолютно не нужен. Наши инструкторы работают с людьми любого уровня — от полных новичков до опытных практиков. Каждый найдёт свой темп и глубину.",
    },
    {
      question: "Как проходят занятия?",
      answer:
        "Занятия проходят в форматах онлайн и офлайн — групповые практики, индивидуальные сессии с экспертами, вебинары и живые встречи сообщества. Ты сам выбираешь удобный формат.",
    },
    {
      question: "Сколько времени нужно уделять клубу?",
      answer:
        "Достаточно 2-3 часов в неделю, чтобы почувствовать первые результаты. Клуб встраивается в твой ритм жизни, а не требует его полностью перестроить.",
    },
    {
      question: "Как быстро появятся результаты?",
      answer:
        "Многие участники отмечают первые изменения уже через 2-4 недели — больше ясности, энергии и спокойствия. Глубокая трансформация происходит постепенно, в своём темпе для каждого.",
    },
    {
      question: "Как вступить в клуб?",
      answer:
        "Нажми кнопку «Вступить в клуб» — мы свяжемся с тобой, расскажем о форматах участия и поможем выбрать подходящий план. Первый шаг самый простой.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что ты хотел узнать о клубе СИЛА перед тем, как сделать первый шаг.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}