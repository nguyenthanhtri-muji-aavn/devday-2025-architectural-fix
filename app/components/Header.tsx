import Link from 'next/link';
import { ReactNode } from 'react';

export interface HeaderProps {
  title?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export default function Header({ 
  title = 'Inbox', 
  leftContent,
  rightContent,
  showSearch = true,
  onSearch
}: HeaderProps) {
  return (
    <header className="header-container">
      <div className="header-left">
        {leftContent || (
          <button className="menu-button">
            <span className="material-icons">menu</span>
          </button>
        )}
        <h1 className="header-title">{title}</h1>
      </div>

      <div className="header-right">
        {showSearch && (
          <div className="search-container">
            <span className="material-icons">search</span>
            <input 
              type="text" 
              placeholder="Search" 
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        )}
        {rightContent || (
          <>
            <button className="help-button">
              <span className="material-icons">help_outline</span>
            </button>
            <button className="profile-button">
              <img src="/default-avatar.png" alt="Profile" />
            </button>
          </>
        )}
      </div>
    </header>
  );
} 