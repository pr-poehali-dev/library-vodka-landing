import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-lg">
        <div className="border border-primary/30 p-10 sm:p-16 space-y-10">
          
          <div className="text-center space-y-6">
            <h1 
              className="text-6xl sm:text-7xl text-primary leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              Библиотека<br />водок
            </h1>
            
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-8 h-px bg-primary/40" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary opacity-60">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </svg>
              <div className="w-8 h-px bg-primary/40" />
            </div>

            <p 
              className="text-xs tracking-widest uppercase text-primary/70"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: '0.25em' }}
            >
              Каталог вкусов
            </p>
          </div>

          <div className="space-y-2.5">
            <a href="https://2beer4.me/v/biblioteka_vodok_nsk" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-12 text-sm border border-primary/40 hover:bg-primary/5 transition-none rounded-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
              >
                Меню / каталог настоек
              </Button>
            </a>

            <a href="https://t.me/bibliotekavodok" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-12 text-sm border border-primary/40 hover:bg-primary/5 transition-none rounded-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
              >
                Telegram
              </Button>
            </a>

            <a href="https://www.instagram.com/bibliotekavodok/" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-12 text-sm border border-primary/40 hover:bg-primary/5 transition-none rounded-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
              >
                Instagram
              </Button>
            </a>

            <a href="https://vk.com/club231766050" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full h-12 text-sm border border-primary/40 hover:bg-primary/5 transition-none rounded-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
              >
                VK
              </Button>
            </a>

            <a href="tel:+79231102876" className="block">
              <Button 
                variant="outline" 
                className="w-full h-12 text-sm border border-primary/40 hover:bg-primary/5 transition-none rounded-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
              >
                Позвонить нам
              </Button>
            </a>
          </div>

          <div className="pt-8 border-t border-primary/20">
            <p 
              className="text-xs text-center text-primary/60 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, letterSpacing: '0.03em' }}
            >
              +7 (923) 110-28-76<br />
              Красный проспект, 28 · Новосибирск<br />
              17:00–01:00 · ПТ–СБ до 03:00
            </p>
          </div>

          <div className="flex justify-center opacity-40">
            <img 
              src="https://cdn.poehali.dev/files/image.png" 
              alt="" 
              className="h-16 object-contain"
              style={{ filter: 'grayscale(100%) contrast(1.2)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
