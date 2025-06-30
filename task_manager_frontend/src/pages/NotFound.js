import React from 'react';

// PUBLIC_INTERFACE
function NotFound() {
  /** 404 Not Found page for unmatched routes. */
  return (
    <div className="container">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
