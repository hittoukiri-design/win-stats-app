import { Bonuses } from '@/entities';
import { Image } from '@/components/ui/image';
import { Gift } from 'lucide-react';

interface BonusCardProps {
  bonus: Bonuses;
}

export default function BonusCard({ bonus }: BonusCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-6 h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
      {/* Background Image with Overlay */}
      {bonus.promotionalImage && (
        <div className="absolute inset-0 opacity-30">
          <Image
            src={bonus.promotionalImage}
            alt={bonus.bonusTitle || 'Bonus'}
            className="w-full h-full object-cover"
            width={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon and Title */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Gift className="w-5 h-5 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-1">
            {bonus.bonusTitle}
          </h3>
        </div>

        {/* Reward Details */}
        {bonus.rewardDetails && (
          <p className="text-sm text-gray-300 mb-4 font-paragraph">
            {bonus.rewardDetails}
          </p>
        )}

        {/* Eligibility and Terms */}
        <div className="space-y-2 mb-6 flex-grow">
          {bonus.eligibilityCriteria && (
            <div className="text-xs text-gray-400 font-paragraph">
              <span className="text-gray-500 font-semibold">Eligibility:</span> {bonus.eligibilityCriteria}
            </div>
          )}
          {bonus.termsAndConditions && (
            <div className="text-xs text-gray-400 font-paragraph">
              <span className="text-gray-500 font-semibold">Terms:</span> {bonus.termsAndConditions}
            </div>
          )}
        </div>

        {/* Claim Button */}
        <button className="w-full py-3 px-4 border-2 border-primary text-primary font-heading font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-center">
          Claim Bonus
        </button>
      </div>
    </div>
  );
}
