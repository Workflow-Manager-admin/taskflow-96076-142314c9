import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Minimal navigation bar for the app.
 */
function Navbar() {
  return (
    <nav className="navbar" style={{
      padding: "1rem", background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)",
      display: "flex", gap: "1rem"
    }}>
      <Link to="/" style={{fontWeight: 600}}>Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <span style={{flex: 1}} />
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
