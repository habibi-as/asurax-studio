import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  style,
  ...props 
}) => {
  const baseStyles: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '4px',
    padding: '24px',
    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  const hoverStyles = `
    .card-component:hover {
      transform: translateY(-5px);
      border-color: var(--primary-accent);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }
    .card-component:hover::before {
      opacity: 1;
    }
  `;

  return (
    <>
      {hoverEffect && <style>{hoverStyles}</style>}
      <div 
        className={`card-component ${className}`} 
        style={baseStyles}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
