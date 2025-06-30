
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
      'common': 'bg-gray-500',
      'uncommon': 'bg-green-500',
      'rare': 'bg-blue-500',
      'very rare': 'bg-purple-500',
      'legendary': 'bg-orange-500'
    };
    return colors[rarity.toLowerCase() as keyof typeof colors] || 'bg-gray-500';
  };

  const getRarityGlow = (rarity: string): string => {
    const glows = {
      'common': 'shadow-gray-400/20',
      'uncommon': 'shadow-green-400/30',
      'rare': 'shadow-blue-400/30',
      'very rare': 'shadow-purple-400/40',
      'legendary': 'shadow-orange-400/50'
    };
    return glows[rarity.toLowerCase() as keyof typeof glows] || 'shadow-gray-400/20';
  };

  return (
    <Card className={`bg-gradient-to-br from-purple-800/80 to-indigo-800/80 border-purple-600 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${getRarityGlow(item.rarity)}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-gold-400 text-lg leading-tight">{item.item}</CardTitle>
          <Badge className={`${getRarityColor(item.rarity)} text-white text-xs`}>
            {item.rarity}
          </Badge>
        </div>
        <p className="text-purple-200 text-sm italic">{item.category}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-purple-100 text-sm leading-relaxed">{item.description}</p>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-yellow-400">
            <Coins className="w-4 h-4" />
            <span>{item.estValue}</span>
          </div>
          
          <div className="flex items-center gap-2 text-purple-300">
            <Weight className="w-4 h-4" />
            <span>{item.weight}</span>
          </div>
        </div>

        {item.properties && (
          <div>
            <h4 className="text-gold-400 text-sm font-semibold mb-1">Properties:</h4>
            <p className="text-purple-200 text-sm">{item.properties}</p>
          </div>
        )}

        {item.requirements && (
          <div>
            <h4 className="text-gold-400 text-sm font-semibold mb-1">Requirements:</h4>
            <p className="text-purple-200 text-sm">{item.requirements}</p>
          </div>
        )}

        <div className="flex justify-between items-center pt-2 border-t border-purple-600/50">
          {item.author && (
            <div className="flex items-center gap-1 text-purple-400 text-xs">
              <User className="w-3 h-3" />
              <span>{item.author}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 text-purple-400 text-xs">
            <Scroll className="w-3 h-3" />
            <span>#{item.rarityNumber}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
