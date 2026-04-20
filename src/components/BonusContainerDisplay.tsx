import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import BonusCard from '@/components/BonusCard';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Bonuses } from '@/entities';

interface BonusContainer {
  _id: string;
  title?: string;
  description?: string;
  bonusId?: string;
  displayOrder?: number;
  isActive?: boolean;
  containerImage?: string;
}

interface BonusContainerDisplayProps {
  containerId?: string;
}

export default function BonusContainerDisplay({ containerId }: BonusContainerDisplayProps) {
  const [bonus, setBonus] = useState<Bonuses | null>(null);
  const [container, setContainer] = useState<BonusContainer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContainer();
  }, [containerId]);

  const loadContainer = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (containerId) {
        // Load specific container by ID
        const containerData = await BaseCrudService.getById<BonusContainer>('bonuscontainers', containerId);
        if (containerData) {
          setContainer(containerData);
          if (containerData.bonusId) {
            const bonusData = await BaseCrudService.getById<Bonuses>('bonuses', containerData.bonusId);
            setBonus(bonusData || null);
          }
        } else {
          setError('Container not found');
        }
      } else {
        // Load first active container
        const result = await BaseCrudService.getAll<BonusContainer>('bonuscontainers', {}, { limit: 50 });
        const activeContainer = result.items.find((c) => c.isActive !== false);
        
        if (activeContainer) {
          setContainer(activeContainer);
          if (activeContainer.bonusId) {
            const bonusData = await BaseCrudService.getById<Bonuses>('bonuses', activeContainer.bonusId);
            setBonus(bonusData || null);
          }
        } else {
          setError('No active containers found');
        }
      }
    } catch (err) {
      console.error('Error loading container:', err);
      setError('Failed to load container data');
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

  if (error || !bonus || !container) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">{error || 'Container not available'}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">{container.title}</h3>
        {container.description && (
          <p className="text-gray-300 font-paragraph">{container.description}</p>
        )}
      </div>
      <BonusCard bonus={bonus} />
    </div>
  );
}
