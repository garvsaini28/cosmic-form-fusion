
import React from 'react';
import { cn } from '@/lib/utils';

interface TokenCardProps {
  label: string;
  value: string | number;
  className?: string;
  animationDelay?: string;
  icon?: React.ReactNode;
}

const TokenCard: React.FC<TokenCardProps> = ({
  label,
  value,
  className,
  animationDelay = '0s',
  icon,
}) => {
  return (
    <div
      className={cn('token-card', className)}
      style={{ animationDelay }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="card-label">{label}</div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default TokenCard;
