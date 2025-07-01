
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';

interface RarityControlsProps {
  rarityMultipliers: Record<string, number>;
  onRarityMultiplierChange: (rarity: string, value: number) => void;
}

export const RarityControls: React.FC<RarityControlsProps> = ({
  rarityMultipliers,
  onRarityMultiplierChange
}) => {
  const rarities = ['common', 'uncommon', 'rare', 'very rare', 'legendary'];

  const getRarityColor = (rarity: string): string => {
    const colors = {
      'common': 'text-sage-green',
      'uncommon': 'text-moss-green',
      'rare': 'text-gold-warm',
      'very rare': 'text-gold-bright',
      'legendary': 'text-amber-glow'
    };
    return colors[rarity.toLowerCase() as keyof typeof colors] || 'text-sage-green';
  };

  return (
    <Card className="bg-forest-medium/80 border-moss-green backdrop-blur-sm mb-8">
      <CardHeader>
        <CardTitle className="text-gold-warm flex items-center gap-2">
          <Wand2 className="w-5 h-5" />
          Rarity Probability Adjustments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-5 gap-4">
          {rarities.map(rarity => (
            <div key={rarity} className="space-y-2">
              <Label className={`text-sm font-medium capitalize ${getRarityColor(rarity)}`}>
                {rarity} ({(rarityMultipliers[rarity] * 100).toFixed(0)}%)
              </Label>
              <Slider
                value={[rarityMultipliers[rarity]]}
                onValueChange={(value) => onRarityMultiplierChange(rarity, value[0])}
                max={3}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
