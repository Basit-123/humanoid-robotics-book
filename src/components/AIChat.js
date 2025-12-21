import React, { useState } from 'react';

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: 'Hello! I am the Physical AI Assistant, your professional guide for the "Physical AI & Humanoid Robotics" textbook. I can answer questions based on the book content. How may I assist you today?',
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Backend API URL
  const BACKEND_URL = 'https://physical-ai-humanoid-robotics-rag-chatbot.onrender.com';

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setInput('');

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data || !data.response) {
        throw new Error('Invalid response format from server');
      }

      const botResponse = data.response;
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Chat error:', error); // For debugging
      let errorMessage = 'The Physical AI Assistant is currently unavailable. ';

      if (error.message.includes('Network error') || error.message.includes('Failed to fetch')) {
        errorMessage += 'Please check if the backend service is running.';
      } else if (error.message.includes('404')) {
        errorMessage += 'The API endpoint may not be available.';
      } else if (error.message.includes('500')) {
        errorMessage += 'The server encountered an error.';
      } else {
        errorMessage += 'Please try again in a few moments.';
      }

      setMessages(prev => [
        ...prev,
        { text: errorMessage, sender: 'bot' }
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat assistant"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          fontSize: '28px',
          boxShadow: '0 8px 25px rgba(79, 70, 229, 0.3)',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '30px',
            width: '380px',
            height: '540px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 999,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '16px 20px',
              fontWeight: '600',
              fontSize: '18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>Physical AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '0',
                lineHeight: '1'
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              backgroundColor: '#f9fafb'
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '12px',
                  textAlign: msg.sender === 'user' ? 'right' : 'left'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '12px 18px',
                    borderRadius: '20px',
                    backgroundColor: msg.sender === 'user' ? '#4f46e5' : '#f3f4f6',
                    color: msg.sender === 'user' ? 'white' : '#1f2937',
                    maxWidth: '80%',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    fontWeight: '400'
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{ textAlign: 'left' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '12px 18px',
                    borderRadius: '20px',
                    backgroundColor: '#e5e7eb',
                    color: '#111827'
                  }}
                >
                  Thinking...
                </span>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{ padding: '16px', backgroundColor: 'white', borderTop: '1px solid #e5e7eb' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
              placeholder="Ask a question about the textbook..."
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '30px',
                border: '1px solid #d1d5db',
                fontSize: '15px',
                outline: 'none',
                backgroundColor: '#f3f4f6'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;