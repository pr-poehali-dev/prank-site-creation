import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const pranks = [
  {
    id: 1,
    title: '🎉 Фейковая Ошибка',
    description: 'Классический пранк с поддельным окном ошибки системы',
    image: 'https://cdn.poehali.dev/projects/83d9507f-b860-4ce0-a792-633dedacf925/files/e0024270-6ac3-447e-803c-4d31b7175cdc.jpg',
    soundUrl: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg'
  },
  {
    id: 2,
    title: '💥 Взрыв Конфетти',
    description: 'Неожиданный взрыв веселья прямо на экране',
    image: 'https://cdn.poehali.dev/projects/83d9507f-b860-4ce0-a792-633dedacf925/files/a2903d23-00c1-4eb1-9d9c-ba81b06be0e1.jpg',
    soundUrl: 'https://actions.google.com/sounds/v1/cartoon/pop.ogg'
  },
  {
    id: 3,
    title: '🎪 Неожиданный Сюрприз',
    description: 'Приготовьтесь к самому смешному пранку дня',
    image: 'https://cdn.poehali.dev/projects/83d9507f-b860-4ce0-a792-633dedacf925/files/4891ea33-91e7-4e5d-8977-29028678cb2d.jpg',
    soundUrl: 'https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg'
  }
];

export default function Index() {
  const [activeSound, setActiveSound] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [signature, setSignature] = useState('');
  const [showPrankDialog, setShowPrankDialog] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const playSound = (soundUrl: string, prankId: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    const audio = new Audio(soundUrl);
    audioRef.current = audio;
    
    audio.play();
    setActiveSound(prankId);
    
    audio.onended = () => {
      setActiveSound(null);
    };

    toast({
      title: '🎵 Звуковой пранк активирован!',
      description: 'Приготовьтесь к веселью!',
      duration: 2000,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const prankSound = new Audio('https://actions.google.com/sounds/v1/cartoon/crazy_dinner_bell.ogg');
    prankSound.play();
    
    toast({
      title: '😂 ПРАНК!',
      description: 'Вы только что попались на наш контактный пранк!',
      duration: 4000,
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSignature = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signature.trim()) {
      const prankSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');
      prankSound.play();
      
      setShowPrankDialog(true);
      setSignature('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950 to-background">
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
              PRANK ZONE 🎪
            </h1>
            <div className="flex gap-6">
              <a href="#hero" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Главная
              </a>
              <a href="#pranks" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Пранки
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Контакты
              </a>
              <a href="#secret" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Только для натуралов 💪
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-6 animate-bounce-crazy bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Готовы к ПРАНКУ? 😜
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-float">
            Самые смешные и безопасные пранки в одном месте. Выбирай, кликай и удивляй!
          </p>
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 animate-glow-pulse hover:scale-110"
            onClick={() => {
              const pranksSection = document.getElementById('pranks');
              pranksSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Icon name="Zap" className="mr-2" size={24} />
            Начать Веселье!
          </Button>
        </div>
      </section>

      <section id="pranks" className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
          🎯 Коллекция Пранков
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pranks.map((prank) => (
            <Card 
              key={prank.id}
              className={`overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer border-2 ${
                activeSound === prank.id 
                  ? 'border-primary animate-shake' 
                  : 'border-border hover:border-secondary'
              }`}
              onMouseEnter={() => {
                const hoverSound = new Audio('https://actions.google.com/sounds/v1/cartoon/swoosh.ogg');
                hoverSound.volume = 0.3;
                hoverSound.play();
              }}
              onClick={() => playSound(prank.soundUrl, prank.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={prank.image} 
                  alt={prank.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {activeSound === prank.id && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="text-6xl animate-wiggle">🎵</div>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{prank.title}</CardTitle>
                <CardDescription className="text-base">{prank.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-2 hover:bg-secondary hover:border-secondary transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    playSound(prank.soundUrl, prank.id);
                  }}
                >
                  <Icon name="Volume2" className="mr-2" size={20} />
                  Активировать Пранк
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="secret" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            💪 ЗАЙДИ ЕСЛИ НАТУРАЛЬ
          </h2>
          <p className="text-center text-foreground/60 mb-8 text-lg">
            Только для настоящих мужиков! Докажи это! 🔥
          </p>
          <Card className="border-2 border-primary hover:border-secondary transition-all animate-glow-pulse">
            <CardHeader>
              <CardTitle className="text-2xl">Подтверждение Натуральности</CardTitle>
              <CardDescription>Распишись ниже, чтобы подтвердить свой статус</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignature} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Твоя подпись</label>
                  <Input 
                    placeholder="Введи свою подпись здесь..."
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    required
                    className="border-2 text-lg h-14"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full text-xl py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:to-primary transition-all duration-300 font-black"
                >
                  <Icon name="CheckCircle" className="mr-2" size={24} />
                  ПОДТВЕРДИТЬ СВОЙ СТАТУС
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            📬 Свяжись с Нами
          </h2>
          <p className="text-center text-foreground/60 mb-8 text-lg">
            (Осторожно: может содержать пранк! 😈)
          </p>
          <Card className="border-2 border-border hover:border-accent transition-all">
            <CardHeader>
              <CardTitle className="text-2xl">Отправить Сообщение</CardTitle>
              <CardDescription>Заполни форму и нажми отправить... если осмелишься 😏</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Твоё имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="твой@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Что ты хочешь сказать?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-2 min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить (на свой страх и риск!)
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={showPrankDialog} onOpenChange={setShowPrankDialog}>
        <DialogContent className="sm:max-w-md border-4 border-primary bg-gradient-to-br from-secondary to-accent">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black text-center mb-4 text-white animate-shake">
              🏳️‍🌈 ПОЗДРАВЛЯЕМ! 🏳️‍🌈
            </DialogTitle>
            <DialogDescription className="text-2xl font-bold text-center text-white">
              ТЫ ТЕПЕРЬ ГЕЙ
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="text-8xl animate-bounce-crazy">🌈</div>
            <p className="text-xl font-bold text-white text-center">
              Ты подписался под этим! 😂
            </p>
            <p className="text-lg text-white/80 text-center">
              Это был пранк, расслабься! 🎪
            </p>
            <Button
              onClick={() => setShowPrankDialog(false)}
              className="mt-4 text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-black"
            >
              ЗАКРЫТЬ ЭТОТ ПОЗОР 😅
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border/40 backdrop-blur-sm bg-background/30 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60">
            © 2024 PRANK ZONE. Все пранки абсолютно безопасны! 🎪✨
          </p>
          <p className="text-foreground/40 text-sm mt-2">
            Сделано с любовью и чувством юмора
          </p>
        </div>
      </footer>
    </div>
  );
}