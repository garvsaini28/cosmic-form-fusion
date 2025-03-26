
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfileInputProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <div className={cn('flex flex-col space-y-2', className)}>
      <label className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="profile-input w-full"
      />
    </div>
  );
};

export default ProfileInput;
