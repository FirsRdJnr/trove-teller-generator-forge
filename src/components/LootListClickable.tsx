
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LootItem } from '@/types/loot';
import { LootCarousel } from './LootCarousel';

interface LootListClickableProps {
  loot: LootItem[];
  sessionNumber?: number;
}

export const LootListClickable: React.FC<LootListClickableProps> = ({ loot, sessionNumber }) => {
  const [isOpen, setIsOpen] = useState(sessionNumber === 1);

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
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-2 mb-4">
              {loot.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-forest-dark/50 rounded-lg border border-moss-green/30 hover:border-moss-green/60 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${getRarityColor(item.rarity)}`}>
                        {item.item}
                      </span>
                      <span className="text-sage-green text-sm">({item.category})</span>
                    </div>
                    <div className="text-amber-glow text-sm">{item.estValue}</div>
                  </div>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="bg-forest-medium/80 border-moss-green text-gold-warm hover:bg-forest-light/80">
                        <Eye className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-gradient-to-br from-forest-dark to-forest-medium border-moss-green w-full sm:max-w-4xl">
                      <SheetHeader>
                        <SheetTitle className="text-gold-warm text-xl">
                          {sessionTitle} - Detailed View
                        </SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <LootCarousel loot={loot} />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
