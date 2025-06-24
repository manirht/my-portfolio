import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../../contexts/ThemeContext';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CodeBlock = ({ language, value, showLineNumbers = true }) => {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <button 
          onClick={copyToClipboard}
          className="p-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition"
          title="Copy to clipboard"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)'
          }}
        >
          {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
        </button>
      </div>
      
      <SyntaxHighlighter 
        language={language} 
        style={darkMode ? materialDark : materialLight}
        customStyle={{ 
          margin: '20px 0', 
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: 'var(--bg-tertiary)',
          border: '1px solid var(--border-color)',
          fontSize: '0.9rem'
        }}
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{ 
          color: 'var(--text-secondary)',
          minWidth: '2.5em'
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;