import { MoonStar, Sun } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-[13%] py-4 bg-background/70 backdrop-blur-md border-b border-border">
      <h2 className="font-display-italic text-2xl m-0 text-foreground">
        VMQ<span className="ml-[5px] text-primary">.</span>
      </h2>
      <button
        aria-label="dark-mode-toggle"
        onClick={toggleTheme}
        className="p-0 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer bg-transparent border-2 border-primary dark:border-pink-soft text-primary hover:bg-pink-soft hover:border-primary active:scale-95 transition-all duration-200"
      >
        {isDarkMode ? <Sun size={20} /> : <MoonStar size={20} />}
      </button>
    </nav>
  );
}
