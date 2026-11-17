import type { ReactNode } from 'react';
import { Info, Lightbulb, Warning } from 'phosphor-react';

type CalloutVariant = 'note' | 'warning' | 'tip';

interface CalloutProps {
  type?: CalloutVariant;
  children: ReactNode;
}

const VARIANTS = {
  note: {
    label: 'Nota',
    icon: Info,
    accent: 'border-l-blue-500',
    labelColor: 'text-blue-500',
  },
  warning: {
    label: 'Atenção',
    icon: Warning,
    accent: 'border-l-orange-500',
    labelColor: 'text-orange-500',
  },
  tip: {
    label: 'Dica',
    icon: Lightbulb,
    accent: 'border-l-accent-light dark:border-l-accent',
    labelColor: 'text-accent-light dark:text-accent',
  },
} as const;

export default function Callout({ type = 'note', children }: CalloutProps) {
  const variant = VARIANTS[type] ?? VARIANTS.note;
  const Icon = variant.icon;

  return (
    <aside
      className={`my-8 border-l-2 bg-surface-light/60 py-4 pl-5 pr-4 dark:bg-surface-dark/60 ${variant.accent}`}
    >
      <p
        className={`mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide ${variant.labelColor}`}
      >
        <Icon size={14} weight="bold" aria-hidden />
        {variant.label}
      </p>
      <div className="text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
        {children}
      </div>
    </aside>
  );
}
