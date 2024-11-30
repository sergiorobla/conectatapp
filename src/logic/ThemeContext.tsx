import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definir el tipo para el contexto
interface ThemeContextType {
  theme: string;
  handleThemeToggle: () => void;
}

// Crear el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor del contexto
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Leer el tema desde localStorage o establecer el tema por defecto
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState<string>(storedTheme);

  // Función para alternar el tema
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardar el tema en localStorage
  };

  // Sincronización del tema con localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme); // Guardar el tema en localStorage cuando cambie
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para acceder al contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}