
import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';

interface CryptoCardProps {
  value: string | number;
  className?: string;
  animationDelay?: string;
  icon?: React.ReactNode;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  value,
  className,
  animationDelay = '0s',
  icon = <TrendingUp size={18} />,
}) => {
  return (
    <div
      className={cn('crypto-card', className)}
      style={{ animationDelay }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="card-label">Crypto Balance</div>
        <div className="text-primary">{icon}</div>
      </div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default CryptoCard;
