import React from 'react';
import { createRoot } from 'react-dom/client';
import AIChat from './components/AIChat';

// Create a floating element for the chatbot
const chatContainer = document.createElement('div');
chatContainer.id = 'ai-chat-container';
document.body.appendChild(chatContainer);

// Render the AIChat component
const root = createRoot(chatContainer);
root.render(<AIChat />);