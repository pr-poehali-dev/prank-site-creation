import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Index() {
  const [showPrank, setShowPrank] = useState(false);
  const [showGayPrank, setShowGayPrank] = useState(false);
  const [signature, setSignature] = useState('');
  const [currentSection, setCurrentSection] = useState<'roblox' | 'natual'>('roblox');

  const handleRobloxClick = () => {
    const prankSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');
    prankSound.play();
    setShowPrank(true);
  };

  const handleSignature = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signature.trim()) {
      const prankSound = new Audio('https://actions.google.com/sounds/v1/cartoon/crazy_dinner_bell.ogg');
      prankSound.play();
      
      setShowGayPrank(true);
      setSignature('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950 to-background">
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => setCurrentSection('roblox')}
              className={`text-xl font-bold transition-all ${
                currentSection === 'roblox'
                  ? 'text-primary scale-110'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              🎮 Роблокс
            </button>
            <button
              onClick={() => setCurrentSection('natual')}
              className={`text-xl font-bold transition-all ${
                currentSection === 'natual'
                  ? 'text-primary scale-110'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              💪 Для натуралов
            </button>
          </div>
        </div>
      </nav>

      {currentSection === 'roblox' && (
        <div 
          className="min-h-[calc(100vh-80px)] flex items-center justify-center cursor-pointer"
          onClick={handleRobloxClick}
        >
          <div className="text-center">
            <h1 className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-bounce-crazy">
              ИГРАТЬ В РОБЛОКС
            </h1>
            <p className="text-3xl text-foreground/80 animate-float">
              👆 Нажми на экран 👆
            </p>
          </div>
        </div>
      )}

      {currentSection === 'natual' && (
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
              💪 ЗАЙДИ ЕСЛИ НАТУРАЛЬ
            </h2>
            <p className="text-2xl text-center text-foreground/80 mb-12 animate-float">
              Только для настоящих мужиков! Докажи это! 🔥
            </p>
            
            <Card className="border-4 border-primary hover:border-secondary transition-all animate-glow-pulse">
              <CardHeader>
                <CardTitle className="text-3xl">Подтверждение Натуральности</CardTitle>
                <CardDescription className="text-lg">Распишись ниже, чтобы подтвердить свой статус</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignature} className="space-y-6">
                  <div>
                    <label className="block text-xl font-medium mb-3">Твоя подпись</label>
                    <Input 
                      placeholder="Введи свою подпись здесь..."
                      value={signature}
                      onChange={(e) => setSignature(e.target.value)}
                      required
                      className="border-2 text-2xl h-16"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full text-2xl py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:to-primary transition-all duration-300 font-black"
                  >
                    <Icon name="CheckCircle" className="mr-2" size={28} />
                    ПОДТВЕРДИТЬ СВОЙ СТАТУС
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <Dialog open={showPrank} onOpenChange={setShowPrank}>
        <DialogContent className="sm:max-w-lg border-4 border-primary bg-gradient-to-br from-secondary to-accent">
          <DialogHeader>
            <DialogTitle className="text-5xl font-black text-center mb-6 text-white animate-shake">
              😱 СЮРПРИЗ! 😱
            </DialogTitle>
            <DialogDescription className="text-3xl font-bold text-center text-white leading-relaxed">
              У ТЕБЯ ДИЛДО В ПОПЕ! 🍆
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="text-9xl animate-wiggle">🍑💥</div>
            <p className="text-2xl font-bold text-white text-center">
              ПОПАЛСЯ! 😂
            </p>
            <p className="text-xl text-white/90 text-center">
              Это был пранк! 🎪
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showGayPrank} onOpenChange={setShowGayPrank}>
        <DialogContent className="sm:max-w-lg border-4 border-primary bg-gradient-to-br from-secondary to-accent">
          <DialogHeader>
            <DialogTitle className="text-6xl font-black text-center mb-6 text-white animate-shake">
              🏳️‍🌈 ПОЗДРАВЛЯЕМ! 🏳️‍🌈
            </DialogTitle>
            <DialogDescription className="text-4xl font-bold text-center text-white leading-relaxed">
              ТЫ ТЕПЕРЬ ГЕЙ
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="text-9xl animate-bounce-crazy">🌈</div>
            <p className="text-2xl font-bold text-white text-center">
              Ты подписался под этим! 😂
            </p>
            <p className="text-xl text-white/90 text-center">
              Это был пранк, расслабься! 🎪
            </p>
            <Button
              onClick={() => setShowGayPrank(false)}
              className="mt-4 text-xl px-10 py-7 bg-white text-primary hover:bg-white/90 font-black"
            >
              ЗАКРЫТЬ ЭТОТ ПОЗОР 😅
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
