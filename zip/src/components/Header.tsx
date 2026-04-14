import { Atom } from 'lucide-react';
import '../styles/Header.css';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-icon-wrapper">
        <Atom className="header-icon" strokeWidth={1.5} />
      </div>
      <h1 className="header-title">Welcome to React JS</h1>
    </header>
  );
}
