'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 45,
        backgroundColor: '#FFD700',
        border: '4px solid #000',
        padding: '12px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '24px',
        fontWeight: 900,
        boxShadow: '5px 5px 0px rgba(0,0,0,0.3)',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '52px',
        height: '52px'
      }}
      onMouseEnter={(e) => {
        const elem = e.currentTarget;
        elem.style.transform = 'translateY(-2px)';
        elem.style.boxShadow = '6px 6px 0px rgba(0,0,0,0.4)';
      }}
      onMouseLeave={(e) => {
        const elem = e.currentTarget;
        elem.style.transform = 'translateY(0)';
        elem.style.boxShadow = '5px 5px 0px rgba(0,0,0,0.3)';
      }}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <FaMoon color="#000" size={24} />
      ) : (
        <FaSun color="#000" size={24} />
      )}
    </button>
  );
}
