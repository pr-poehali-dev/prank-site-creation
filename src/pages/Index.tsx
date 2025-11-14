import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Index() {
  const [showPrank, setShowPrank] = useState(false);

  const handleClick = () => {
    const prankSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');
    prankSound.play();
    setShowPrank(true);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-background via-purple-950 to-background flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-bounce-crazy">
          ИГРАТЬ В РОБЛОКС
        </h1>
        <p className="text-3xl text-foreground/80 animate-float">
          👆 Нажми на экран 👆
        </p>
      </div>

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
    </div>
  );
}
