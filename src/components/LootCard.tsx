
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Weight, User, Scroll } from 'lucide-react';
import { LootItem } from '@/types/loot';

interface LootCardProps {
  item: LootItem;
}

export const LootCard: React.FC<LootCardProps> = ({ item }) => {
  const getRarityColor = (rarity: string): string => {
    const colors = {
      'common': 'bg-sage-green',
      'uncommon': 'bg-moss-green',
      'rare': 'bg-gold-warm',
      'very rare': 'bg-gold-bright',
      'legendary': 'bg-amber-glow text-forest-dark'
    };
    return colors[rarity.toLowerCase() as keyof typeof colors] || 'bg-sage-green';
  };

  const getRarityGlow = (rarity: string): string => {
    const glows = {
      'common': 'shadow-sage-green/20',
      'uncommon': 'shadow-moss-green/30',
      'rare': 'shadow-gold-warm/30',
      'very rare': 'shadow-gold-bright/40',
      'legendary': 'shadow-amber-glow/50'
    };
    return glows[rarity.toLowerCase() as keyof typeof glows] || 'shadow-sage-green/20';
  };

  return (
    <Card className={`bg-gradient-to-br from-forest-medium/90 to-forest-light/90 border-moss-green backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${getRarityGlow(item.rarity)}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-gold-warm text-lg leading-tight">{item.item}</CardTitle>
          <Badge className={`${getRarityColor(item.rarity)} text-white text-xs`}>
            {item.rarity}
          </Badge>
        </div>
        <p className="text-sage-green text-sm italic">{item.category}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sage-green text-sm leading-relaxed">{item.description}</p>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-amber-glow">
            <Coins className="w-4 h-4" />
            <span>{item.estValue}</span>
          </div>
          
          <div className="flex items-center gap-2 text-moss-green">
            <Weight className="w-4 h-4" />
            <span>{item.weight}</span>
          </div>
        </div>

        {item.properties && (
          <div>
            <h4 className="text-gold-warm text-sm font-semibold mb-1">Properties:</h4>
            <p className="text-sage-green text-sm">{item.properties}</p>
          </div>
        )}

        {item.requirements && (
          <div>
            <h4 className="text-gold-warm text-sm font-semibold mb-1">Requirements:</h4>
            <p className="text-sage-green text-sm">{item.requirements}</p>
          </div>
        )}

        <div className="flex justify-between items-center pt-2 border-t border-moss-green/50">
          {item.author && (
            <div className="flex items-center gap-1 text-moss-green text-xs">
              <User className="w-3 h-3" />
              <span>{item.author}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 text-moss-green text-xs">
            <Scroll className="w-3 h-3" />
            <span>#{item.rarityNumber}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
