import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-md">
        <div className="relative border-2 border-primary/40 p-12 sm:p-14" style={{ borderRadius: '24px' }}>
          <div className="absolute inset-3 border border-primary/25" style={{ borderRadius: '20px' }} />
          
          <div className="relative z-10 space-y-8">
            <div className="flex justify-center mb-6">
              <img 
                src="https://cdn.poehali.dev/files/photo_5433710538497133322_y.jpg" 
                alt="" 
                className="h-16 sm:h-20 object-contain opacity-80"
              />
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-primary/30" />
                <svg width="28" height="28" viewBox="0 0 100 100" className="text-primary opacity-70">
                  <path d="M45 25 L48 30 L50 25 L52 30 L55 25" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="50" cy="40" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M42 40 L58 40 M50 48 L50 70 M45 70 L55 70 M43 75 L57 75" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
                <div className="w-12 h-px bg-primary/30" />
              </div>

              <h1 
                className="text-5xl sm:text-6xl text-primary leading-tight tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: '0.02em' }}
              >
                БИБЛИОТЕКА<br />ВОДОК
              </h1>

              <div className="flex items-center justify-center gap-3 py-3">
                <div className="w-10 h-px bg-primary/40" />
                <div className="w-1 h-1 bg-primary/40 rounded-full" />
                <div className="w-10 h-px bg-primary/40" />
              </div>
            </div>

            <div className="flex justify-center py-4">
              <img 
                src="https://cdn.poehali.dev/files/photo_5433710538497133323_y.jpg" 
                alt="" 
                className="h-20 sm:h-24 object-contain opacity-70"
              />
            </div>

            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-8 h-px bg-primary/30" />
              <svg width="40" height="12" viewBox="0 0 100 30" className="text-primary opacity-60">
                <path d="M10 15 Q 25 5, 40 15 Q 55 25, 70 15 Q 85 5, 90 15" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </svg>
              <div className="w-8 h-px bg-primary/30" />
            </div>

            <p 
              className="text-xs text-center text-primary tracking-widest uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, letterSpacing: '0.3em' }}
            >
              АРХИВ ВКУСОВ
            </p>

            <div className="space-y-2 pt-4">
              <a href="https://2beer4.me/v/biblioteka_vodok_nsk" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline" 
                  className="w-full h-11 text-xs border border-primary/35 hover:bg-primary/5 transition-none rounded-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
                >
                  Меню / каталог настоек
                </Button>
              </a>

              <a href="https://t.me/bibliotekavodok" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline" 
                  className="w-full h-11 text-xs border border-primary/35 hover:bg-primary/5 transition-none rounded-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
                >
                  Telegram
                </Button>
              </a>

              <a href="https://www.instagram.com/bibliotekavodok/" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline" 
                  className="w-full h-11 text-xs border border-primary/35 hover:bg-primary/5 transition-none rounded-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
                >
                  Instagram
                </Button>
              </a>

              <a href="https://vk.com/club231766050" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline" 
                  className="w-full h-11 text-xs border border-primary/35 hover:bg-primary/5 transition-none rounded-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
                >
                  VK
                </Button>
              </a>

              <a href="tel:+79231102876" className="block">
                <Button 
                  variant="outline" 
                  className="w-full h-11 text-xs border border-primary/35 hover:bg-primary/5 transition-none rounded-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, boxShadow: 'none' }}
                >
                  Позвонить нам
                </Button>
              </a>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <p 
                className="text-xs text-center text-primary/60 leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, letterSpacing: '0.05em' }}
              >
                +7 (923) 110-28-76<br />
                Красный проспект, 28 · Новосибирск<br />
                17:00–01:00 · ПТ–СБ до 03:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
