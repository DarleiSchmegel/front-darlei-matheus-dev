import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'phosphor-react';
import OptimizedImage from './OptimizedImage';
import { Achievement } from '../data/site';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  onOpen: (index: number) => void;
}

function AchievementCard({ achievement, index, onOpen }: AchievementCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="group flex h-full flex-col overflow-hidden border border-edge-light bg-surface-light text-left transition-colors duration-300 hover:border-accent-light/50 dark:border-edge-dark dark:bg-surface-dark dark:hover:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-ground-light dark:focus:ring-accent dark:focus:ring-offset-ground-dark"
    >
      <div className="border-b border-edge-light px-4 py-3 dark:border-edge-dark">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-accent-light dark:text-accent">
            {achievement.category}
          </p>
          <p className="font-mono text-[10px] tabular-nums text-ink-muted dark:text-ink-muted-dark">
            {achievement.date}
          </p>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ground-light dark:bg-ground-dark">
        <OptimizedImage
          src={achievement.image}
          alt={`Certificado: ${achievement.title}`}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          blurDataURL={achievement.blurDataURL}
          containerClassName="h-full w-full"
          className="transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ground-dark/0 opacity-0 transition-opacity duration-300 group-hover:bg-ground-dark/20 group-hover:opacity-100">
          <span className="border border-edge-light bg-surface-light px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-primary dark:border-edge-dark dark:bg-surface-dark dark:text-ink-light">
            Visualizar
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-bold leading-snug text-ink-primary dark:text-ink-light">
          {achievement.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-ink-muted dark:text-ink-muted-dark">
          {achievement.organization}
        </p>
        <p className="mt-3 flex-1 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dark">
          {achievement.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light transition-colors group-hover:underline dark:text-accent">
          Ver documento
          <ArrowUpRight size={12} weight="bold" />
        </span>
      </div>
    </button>
  );
}

interface LightboxProps {
  achievement: Achievement;
  imageLoaded: boolean;
  onImageLoad: () => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({
  achievement,
  imageLoaded,
  onImageLoad,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  return (
    <div
      className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-ground-dark/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizar ${achievement.title}`}
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-full w-full max-w-5xl flex-col overflow-hidden border border-edge-light bg-surface-light shadow-2xl dark:border-edge-dark dark:bg-surface-dark sm:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-edge-light px-4 py-3 dark:border-edge-dark">
          <div className="min-w-0">
            <p className="truncate font-mono text-[10px] uppercase tracking-wider text-accent-light dark:text-accent">
              {achievement.category} · {achievement.date}
            </p>
            <p className="mt-0.5 truncate font-display text-sm font-bold text-ink-primary dark:text-ink-light">
              {achievement.title}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onPrev}
              className="flex h-8 w-8 items-center justify-center border border-edge-light text-ink-muted transition-colors hover:border-accent-light hover:text-accent-light dark:border-edge-dark dark:text-ink-muted-dark dark:hover:border-accent dark:hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent-light dark:focus:ring-accent"
              aria-label="Documento anterior"
            >
              <ArrowLeft size={14} weight="bold" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="flex h-8 w-8 items-center justify-center border border-edge-light text-ink-muted transition-colors hover:border-accent-light hover:text-accent-light dark:border-edge-dark dark:text-ink-muted-dark dark:hover:border-accent dark:hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent-light dark:focus:ring-accent"
              aria-label="Próximo documento"
            >
              <ArrowRight size={14} weight="bold" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center border border-edge-light text-ink-muted transition-colors hover:border-red-500 hover:text-red-500 dark:border-edge-dark dark:text-ink-muted-dark dark:hover:border-red-500 dark:hover:text-red-500 focus:outline-none focus:ring-1 focus:ring-accent-light dark:focus:ring-accent"
              aria-label="Fechar visualizador"
            >
              <X size={14} weight="bold" />
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 bg-ground-light dark:bg-ground-dark sm:h-[65vh] sm:flex-initial">
          <div className="relative h-full w-full">
            <OptimizedImage
              key={achievement.id}
              src={achievement.image}
              alt={`Documento completo: ${achievement.title}`}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 1280px"
              priority
              blurDataURL={achievement.blurDataURL}
              onLoad={onImageLoad}
              containerClassName="h-full w-full"
              className={`transition-opacity duration-200 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        <div className="flex h-[3.5rem] shrink-0 items-center border-t border-edge-light px-4 dark:border-edge-dark">
          <p className="line-clamp-2 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AchievementsSection({ achievements }: { achievements: Achievement[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const preloadedRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenIndex(null);
      } else if (e.key === 'ArrowLeft' && openIndex !== null) {
        setOpenIndex((prev) => (prev === 0 ? achievements.length - 1 : (prev ?? 0) - 1));
      } else if (e.key === 'ArrowRight' && openIndex !== null) {
        setOpenIndex((prev) => (prev === achievements.length - 1 ? 0 : (prev ?? 0) + 1));
      }
    };

    if (openIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      if (!preloadedRef.current) {
        achievements.forEach((achievement) => {
          const img = new window.Image();
          img.src = achievement.image;
        });
        preloadedRef.current = true;
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [openIndex, achievements]);

  const handleOpen = (index: number) => {
    setOpenIndex(index);
    setImageLoaded(false);
  };
  const handleClose = () => setOpenIndex(null);
  const handlePrev = () => {
    setOpenIndex((prev) => (prev === 0 ? achievements.length - 1 : (prev ?? 0) - 1));
    setImageLoaded(false);
  };
  const handleNext = () => {
    setOpenIndex((prev) => (prev === achievements.length - 1 ? 0 : (prev ?? 0) + 1));
    setImageLoaded(false);
  };
  const handleImageLoad = () => setImageLoaded(true);

  return (
    <>
      <section id="conquistas" className="w-full border-t border-edge-light dark:border-edge-dark">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl">
              Reconhecimentos & Credenciais
            </h2>
            <span className="hidden font-mono text-xs text-ink-muted dark:text-ink-muted-dark sm:block">
              2022 — 2023
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Conquistas acadêmicas e premiações oficiais que atestam dedicação, excelência e
            capacidade de entregar resultados sob pressão.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox
          achievement={achievements[openIndex]}
          imageLoaded={imageLoaded}
          onImageLoad={handleImageLoad}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
