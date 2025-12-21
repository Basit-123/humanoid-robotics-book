import React from 'react';
import AIChat from './components/AIChat';

// Root component that wraps the entire application
export default function Root({ children }) {
  return (
    <>
      {children}
      <AIChat />
    </>
  );
}