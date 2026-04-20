import { Bonuses } from '@/entities';
import { Image } from '@/components/ui/image';
import { Gift } from 'lucide-react';

interface BonusCardProps {
  bonus: Bonuses;
}

export default function BonusCard({ bonus }: BonusCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/50 p-8 h-full min-h-[500px] flex flex-col hover:border-primary/60 transition-all duration-300 group">
      {/* Background Image with Enhanced Overlay */}
      {bonus.promotionalImage && (
        <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-300">
          <Image
            src={bonus.promotionalImage}
            alt={bonus.bonusTitle || 'Bonus'}
            className="w-full h-full object-cover"
            width={400}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950"></div>
        </div>
      )}

      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
            <Gift className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-6">
          <h3 className="text-3xl font-heading font-bold text-white mb-2 leading-tight">
            {bonus.bonusTitle}
          </h3>
          {bonus.rewardDetails && (
            <p className="text-base text-gray-300 font-paragraph leading-relaxed">
              {bonus.rewardDetails}
            </p>
          )}
        </div>

        {/* Eligibility and Terms */}
        <div className="space-y-3 mb-8 flex-grow">
          {bonus.eligibilityCriteria && (
            <div className="text-sm text-gray-400 font-paragraph leading-relaxed">
              {bonus.eligibilityCriteria}
            </div>
          )}
          {bonus.termsAndConditions && (
            <div className="text-xs text-gray-500 font-paragraph leading-relaxed opacity-80">
              {bonus.termsAndConditions}
            </div>
          )}
        </div>

        {/* Claim Button */}
        <button className="w-full py-3 px-6 border-2 border-primary text-primary font-heading font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-center text-base hover:shadow-lg hover:shadow-primary/50">
          Claim Bonus
        </button>
      </div>
    </div>
  );
}
