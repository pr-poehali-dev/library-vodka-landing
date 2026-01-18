import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="border-2 border-primary p-8 sm:p-12 space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl text-primary leading-tight tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Библиотека водок
            </h1>
            <div 
              className="w-16 h-px bg-primary mx-auto"
            />
            <p 
              className="text-sm sm:text-base text-primary tracking-widest uppercase"
              style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 300, letterSpacing: '0.15em' }}
            >
              Каталог вкусов
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <a href="https://2beer4.me/v/biblioteka_vodok_nsk" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 400 }}
              >
                Меню / каталог настоек
              </Button>
            </a>

            <a href="https://t.me/bibliotekavodok" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 400 }}
              >
                Telegram
              </Button>
            </a>

            <a href="https://www.instagram.com/bibliotekavodok/" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 400 }}
              >
                Instagram
              </Button>
            </a>

            <a href="https://vk.com/club231766050" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 400 }}
              >
                VK
              </Button>
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-primary/30">
            <p 
              className="text-xs sm:text-sm text-center text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 300 }}
            >
              Красный проспект, 28 · Новосибирск<br />
              17:00–01:00 · ПТ–СБ до 03:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
