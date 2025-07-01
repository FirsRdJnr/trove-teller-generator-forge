
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { LootItem } from '@/types/loot';
import { LootCarousel } from './LootCarousel';

interface LootListProps {
  loot: LootItem[];
  sessionNumber?: number;
}

export const LootList: React.FC<LootListProps> = ({ loot, sessionNumber }) => {
  const [isOpen, setIsOpen] = useState(sessionNumber === 1); // Auto-open the most recent session

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

  const totalValue = loot.reduce((sum, item) => {
    const value = item.estValue.replace(/[^0-9]/g, '');
    return sum + (parseInt(value) || 0);
  }, 0);

  const sessionTitle = sessionNumber ? `Session ${sessionNumber} Loot (${loot.length} items)` : `Loot Haul (${loot.length} items)`;

  return (
    <Card className="bg-gradient-to-br from-forest-medium to-forest-light border-moss-green backdrop-blur-sm">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-forest-light/50 transition-colors">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gold-warm flex items-center gap-2">
                {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                {sessionTitle}
              </CardTitle>
              <div className="text-amber-glow text-sm">
                Est. {totalValue.toLocaleString()} gp
              </div>
            </div>
            <div className="text-sage-green text-sm">
              {loot.map((item, index) => (
                <span key={index} className={getRarityColor(item.rarity)}>
                  {item.item}
                  {index < loot.length - 1 && ', '}
                </span>
              ))}
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <LootCarousel loot={loot} />
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
