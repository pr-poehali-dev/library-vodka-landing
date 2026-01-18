import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="border border-primary/40 p-8 sm:p-12 space-y-8 sm:space-y-12 bg-background/80 backdrop-blur-sm shadow-lg" style={{ boxShadow: '0 4px 20px rgba(47, 79, 47, 0.08)' }}>
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl text-primary leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Библиотека водок
            </h1>
            <div 
              className="w-20 h-px bg-primary mx-auto"
            />
            <p 
              className="text-sm sm:text-base text-primary tracking-wide uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: '0.2em' }}
            >
              Каталог вкусов
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <a href="https://2beer4.me/v/biblioteka_vodok_nsk" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Меню / каталог настоек
              </Button>
            </a>

            <a href="https://t.me/bibliotekavodok" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Telegram
              </Button>
            </a>

            <a href="https://www.instagram.com/bibliotekavodok/" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Instagram
              </Button>
            </a>

            <a href="https://vk.com/club231766050" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                VK
              </Button>
            </a>

            <a href="tel:+79231102876" className="block">
              <Button 
                variant="outline" 
                className="w-full h-14 sm:h-16 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Позвонить нам
              </Button>
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-primary/20">
            <p 
              className="text-xs sm:text-sm text-center text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              +7 (923) 110-28-76<br />
              Красный проспект, 28 · Новосибирск<br />
              17:00–01:00 · ПТ–СБ до 03:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}