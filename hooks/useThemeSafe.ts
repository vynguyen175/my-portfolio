import { useTheme } from '@/contexts/ThemeContext';

export function useThemeSafe() {
  try {
    return useTheme();
  } catch (e) {
    // If theme provider is not available, return default light theme
    return { theme: 'light' as const, toggleTheme: () => {} };
  }
}
