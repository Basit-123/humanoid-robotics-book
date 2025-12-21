import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import AIChat from '../components/AIChat';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <AIChat />
    </>
  );
}