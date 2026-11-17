import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface MermaidProps {
  chart: string;
  caption?: string;
}

interface ThemePalette {
  background: string;
  surface: string;
  surfaceRaise: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
}

const PALETTES: Record<'dark' | 'light', ThemePalette> = {
  dark: {
    background: '#181A1F',
    surface: '#1E2127',
    surfaceRaise: '#111215',
    border: '#2A2E37',
    text: '#F4F2ED',
    muted: '#8E95A2',
    accent: '#A3E635',
  },
  light: {
    background: '#FFFFFF',
    surface: '#F8F8F6',
    surfaceRaise: '#FFFFFF',
    border: '#E2E4E9',
    text: '#111215',
    muted: '#5A6270',
    accent: '#65A30D',
  },
};

function buildThemeVariables(palette: ThemePalette) {
  return {
    background: palette.background,
    mainBkg: palette.surface,
    nodeBorder: palette.border,
    nodeTextColor: palette.text,
    clusterBkg: palette.surfaceRaise,
    clusterBorder: palette.border,
    titleColor: palette.text,
    edgeLabelBackground: palette.background,
    defaultLinkColor: palette.muted,
    lineColor: palette.muted,
    textColor: palette.text,
    primaryColor: palette.surface,
    primaryTextColor: palette.text,
    primaryBorderColor: palette.border,
    secondaryColor: palette.accent,
    tertiaryColor: palette.surfaceRaise,
    actorBkg: palette.surface,
    actorBorder: palette.border,
    actorTextColor: palette.text,
    actorLineColor: palette.muted,
    signalColor: palette.muted,
    signalTextColor: palette.text,
    labelBoxBkgColor: palette.surface,
    labelBoxBorderColor: palette.border,
    labelTextColor: palette.text,
    loopTextColor: palette.text,
    noteBkgColor: palette.surfaceRaise,
    noteBorderColor: palette.border,
    noteTextColor: palette.text,
    activationBkgColor: palette.surfaceRaise,
    activationBorderColor: palette.border,
    sequenceNumberColor: palette.background,
    stateBkg: palette.surface,
    stateBorder: palette.border,
    stateLabelColor: palette.text,
    labelColor: palette.text,
    altBackground: palette.surfaceRaise,
    compositeBackground: palette.surfaceRaise,
    compositeBorder: palette.border,
    transitionColor: palette.muted,
    transitionLabelColor: palette.text,
    fontSize: '14px',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  };
}

export default function Mermaid({ chart, caption }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const reactId = useId();
  const activeTheme = resolvedTheme === 'light' ? 'light' : 'dark';

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      try {
        const mermaid = (await import('mermaid')).default;
        const palette = PALETTES[activeTheme];

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          themeVariables: buildThemeVariables(palette),
        });

        const renderId = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}-${Date.now()}`;
        const { svg } = await mermaid.render(renderId, chart.trim());

        if (cancelled || !containerRef.current) {
          return;
        }

        containerRef.current.innerHTML = svg;
        const svgElement = containerRef.current.querySelector('svg');

        if (svgElement) {
          svgElement.setAttribute('role', 'img');
          svgElement.setAttribute('aria-label', caption ?? 'Diagrama do artigo');
          svgElement.style.maxWidth = '100%';
          svgElement.style.height = 'auto';
        }

        setError(null);
        setRendered(true);
      } catch (renderError) {
        if (cancelled) {
          return;
        }

        const message =
          renderError instanceof Error ? renderError.message : 'Falha ao renderizar o diagrama';
        // eslint-disable-next-line no-console
        console.error('[Mermaid] render failed:', renderError);
        setRendered(false);
        setError(message);
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, activeTheme, caption, reactId]);

  if (error) {
    return (
      <figure className="my-10 overflow-hidden border border-edge-light bg-surface-light dark:border-edge-dark dark:bg-surface-dark">
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-ink-primary dark:text-ink-light">
          <code>{chart.trim()}</code>
        </pre>
        <figcaption className="border-t border-edge-light px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:border-edge-dark dark:text-ink-muted-dark">
          Diagrama indisponível — exibindo o código-fonte
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="my-10 overflow-hidden border border-edge-light bg-surface-light dark:border-edge-dark dark:bg-surface-dark">
      <div
        ref={containerRef}
        className="overflow-x-auto px-4 py-6 sm:px-6 [&_svg]:mx-auto"
        aria-busy={!rendered}
      />
      {!rendered && (
        <p className="px-6 pb-6 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
          Renderizando diagrama…
        </p>
      )}
      {caption && (
        <figcaption className="border-t border-edge-light px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:border-edge-dark dark:text-ink-muted-dark">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
