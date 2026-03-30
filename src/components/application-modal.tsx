import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

interface ApplicationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApplicationModal({ open, onOpenChange }: ApplicationModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  const handleClose = (val: boolean) => {
    onOpenChange(val)
    if (!val) {
      setTimeout(() => {
        setName("")
        setPhone("")
        setSubmitted(false)
      }, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-950 border border-red-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl text-white text-center">
            КЛУБ <span className="text-red-500">СИЛА</span>
          </DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-2">
            <p className="text-gray-400 text-center text-sm leading-relaxed">
              Оставь заявку — мы свяжемся с тобой и расскажем о форматах участия
            </p>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300 font-geist">
                Имя
              </Label>
              <Input
                id="name"
                placeholder="Как тебя зовут?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-zinc-900 border-zinc-700 focus:border-red-500 text-white placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300 font-geist">
                Телефон или Telegram
              </Label>
              <Input
                id="phone"
                placeholder="+7 900 000-00-00 или @username"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-zinc-900 border-zinc-700 focus:border-red-500 text-white placeholder:text-gray-600"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-geist text-base py-5 border-0"
            >
              {loading ? (
                <Icon name="Loader2" size={20} className="animate-spin" />
              ) : (
                "Вступить в клуб"
              )}
            </Button>

            <p className="text-gray-600 text-xs text-center">
              Нажимая кнопку, ты соглашаешься с обработкой персональных данных
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <Icon name="Check" size={32} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white font-orbitron">Заявка принята!</h3>
            <p className="text-gray-400 text-center text-sm leading-relaxed">
              Мы свяжемся с тобой в ближайшее время и расскажем всё о клубе СИЛА
            </p>
            <Button
              onClick={() => handleClose(false)}
              className="bg-red-500 hover:bg-red-600 text-white border-0 mt-2"
            >
              Отлично!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
