import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Bonuses } from '@/entities';
import BonusCard from '@/components/BonusCard';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function ReferAFriendBonusContainer() {
  const [bonus, setBonus] = useState<Bonuses | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadReferAFriendBonus();
  }, []);

  const loadReferAFriendBonus = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await BaseCrudService.getAll<Bonuses>('bonuses', {}, { limit: 50 });
      const referralBonus = result.items.find(
        (b) => b.bonusTitle?.toLowerCase().includes('refer') || 
               b.bonusTitle?.toLowerCase().includes('friend') ||
               b.bonusTitle?.toLowerCase() === 'refer a friend bonus'
      );
      
      if (referralBonus) {
        setBonus(referralBonus);
      } else {
        setError('Refer a Friend Bonus not found');
      }
    } catch (err) {
      console.error('Error loading Refer a Friend Bonus:', err);
      setError('Failed to load bonus data');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !bonus) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">{error || 'Bonus not available'}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <BonusCard bonus={bonus} />
    </div>
  );
}
