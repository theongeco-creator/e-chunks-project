import { LogIn, LogOut, Crown, UserCircle } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({}: HeaderProps) {
  return (
    <header 
      className="w-full border-b px-6 py-4 sticky top-0 z-10 shadow-sm transition-colors duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-color)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Tiêu đề ngắn gọn bên trái */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-base md:text-lg" style={{ color: 'var(--text-color)' }}>
            Dashboard Học Tập
          </h1>
        </div>
      </div>
    </header>
  );
}