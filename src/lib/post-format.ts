export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number;
}

const WORDS_PER_MINUTE = 200;

function countProseWords(content: string): number {
  const prose = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`|-]/g, ' ');

  return prose.trim().split(/\s+/).filter(Boolean).length;
}

function parsePostDate(date: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function estimateReadingTime(content: string): number {
  return Math.max(1, Math.ceil(countProseWords(content) / WORDS_PER_MINUTE));
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(parsePostDate(date))
    .replace(/\./g, '')
    .replace(/ de /g, ' ');
}
