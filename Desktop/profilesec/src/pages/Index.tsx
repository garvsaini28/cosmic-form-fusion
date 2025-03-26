import React, { useState } from 'react';
import ProfileImage from '@/components/ProfileImage';
import ProfileInput from '@/components/ProfileInput';
import TokenCard from '@/components/TokenCard';
import CryptoCard from '@/components/CryptoCard';
import WalletButton from '@/components/WalletButton';
import { toast } from 'sonner';
import { Coins, CreditCard, Edit2, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [userName, setUserName] = useState('John Appleseed');
  const [userId, setUserId] = useState('john.appleseed21');
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80');
  const [isEditingName, setIsEditingName] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  
  const handleWalletOpen = () => {
    toast.success("Wallet opened successfully!", {
      description: "Your crypto wallet is now accessible.",
      position: "top-center",
    });
  };

  const handleImageChange = (newImageUrl: string) => {
    setProfileImage(newImageUrl);
  };

  const saveUserName = () => {
    setUserName(newUserName);
    setIsEditingName(false);
    toast.success("Username updated successfully!");
  };

  const cancelEditName = () => {
    setNewUserName(userName);
    setIsEditingName(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-crypto-darkBlue text-foreground">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-center cyber-heading">CRYPTO<span className="text-white">MART</span></h1>
        
        <div className="profile-card">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
              <ProfileImage 
                src={profileImage} 
                onImageChange={handleImageChange} 
              />
              
              <div className="flex-1 space-y-4 w-full">
                <div className="flex items-center">
                  {isEditingName ? (
                    <div className="flex items-center w-full gap-2">
                      <ProfileInput 
                        label="User Name" 
                        value={newUserName} 
                        onChange={(e) => setNewUserName(e.target.value)}
                        placeholder="Enter your name"
                      />
                      <div className="flex flex-col gap-2 mt-6">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={saveUserName}
                          className="text-primary border-primary hover:bg-primary/10"
                        >
                          Save
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={cancelEditName}
                          className="text-muted-foreground border-muted hover:bg-secondary"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <ProfileInput 
                        label="User Name" 
                        value={userName} 
                        onChange={() => {}}
                        placeholder="Enter your name"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setIsEditingName(true)}
                        className="text-primary hover:bg-primary/10 -mt-8 ml-2"
                      >
                        <Edit2 size={14} />
                      </Button>
                    </div>
                  )}
                </div>
                <ProfileInput 
                  label="User ID" 
                  value={userId} 
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your ID"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <TokenCard 
                label="Remaining Token" 
                value="3,450"
                animationDelay="0.1s"
                icon={<Ticket size={18} />}
              />
              <TokenCard 
                label="Used Token" 
                value="1,250"
                animationDelay="0.2s"
                icon={<Coins size={18} />}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <CryptoCard 
                value="$2,345.00"
                animationDelay="0.3s"
              />
              
              <div className="wallet-section">
                <div className="flex justify-between items-center mb-2">
                  <div className="card-label">Wallet</div>
                  <div className="text-primary"><CreditCard size={18} /></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Connected</span>
                    <span className="text-sm font-medium text-primary">MetaMask</span>
                  </div>
                  
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full crypto-button justify-center"
                      >
                        Manage Wallets
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-card border-accent/30">
                      <SheetHeader>
                        <SheetTitle className="cyber-heading">WALLET MANAGEMENT</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6 space-y-4">
                        <div className="p-4 bg-secondary rounded-lg border border-accent/30">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">MetaMask</div>
                            <div className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">Connected</div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">0x71C...93E4</div>
                        </div>
                        
                        <div className="p-4 bg-secondary rounded-lg border border-accent/30">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">Coinbase Wallet</div>
                            <Button variant="outline" size="sm" className="text-xs h-7 crypto-button">
                              Connect
                            </Button>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-secondary rounded-lg border border-accent/30">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">WalletConnect</div>
                            <Button variant="outline" size="sm" className="text-xs h-7 crypto-button">
                              Connect
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <WalletButton onClick={handleWalletOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
