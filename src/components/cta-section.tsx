import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onJoinClick?: () => void
}

export function CTASection({ onJoinClick }: CTASectionProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов начать жить по-настоящему?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйся к участникам клуба СИЛА, которые уже нашли себя, раскрыли свой потенциал и изменили жизнь. 
            Твой путь начинается с одного шага.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onJoinClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Вступить в клуб
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}