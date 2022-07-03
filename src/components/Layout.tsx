import { useTheme } from '../contexts/ThemeContext';

export default function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <main className={theme}>
      <div className="min-h-screen dark:bg-gray-700 dark:text-gray-100 transition-colors">
        {children}
      </div>
    </main>
  );
}
