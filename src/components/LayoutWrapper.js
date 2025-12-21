import React from 'react';
import AIChat from './AIChat';

// A wrapper component that adds the AIChat to all pages
const LayoutWrapper = ({ children }) => {
  return (
    <>
      {children}
      <AIChat />
    </>
  );
};

export default LayoutWrapper;