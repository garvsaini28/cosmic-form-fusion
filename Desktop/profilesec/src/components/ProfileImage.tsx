
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Camera } from 'lucide-react';
import { toast } from 'sonner';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  onImageChange?: (newImageUrl: string) => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  alt = 'Profile picture',
  size = 110,
  className,
  onImageChange,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState(src);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (onImageChange && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // For demo purposes, we're just creating a local URL
      // In a real app, you'd upload this to a server
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      if (onImageChange) {
        onImageChange(imageUrl);
      }
      toast.success('Profile picture updated!');
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full profile-image group',
        !isLoaded && 'animate-pulse bg-secondary',
        className
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={image}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      {onImageChange && (
        <>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileChange}
          />
          <div 
            className="profile-image-edit opacity-0 group-hover:opacity-100"
            onClick={handleImageClick}
          >
            <Camera size={16} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileImage;
