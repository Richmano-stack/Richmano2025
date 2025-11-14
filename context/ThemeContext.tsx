// context/ThemeContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // ⭐ Initialisation : Lit localStorage au moment du montage côté client
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem("theme");
        // Si 'light' est stocké, isDark est false. Sinon (y compris null), isDark est true (Dark mode).
        return storedTheme !== "light"; 
    }
    // Par défaut pour le SSR
    return true; 
  });

  // ⭐ Effet : Gère l'application au DOM et à localStorage
  useEffect(() => {
    if (isDark) {
        // Mode Sombre : Retire l'attribut (pour que le CSS par défaut s'applique)
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
    } else {
        // Mode Clair : Ajoute l'attribut html[data-theme="light"] (pour que le CSS light s'applique)
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
  }, [isDark]); // S'exécute à chaque changement de isDark

  // Toggle theme
  const toggleTheme = () => {
    // Bascule uniquement l'état. Le useEffect gère les effets secondaires.
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);