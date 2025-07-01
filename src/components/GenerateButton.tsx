
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dice6, Sparkles } from 'lucide-react';

interface GenerateButtonProps {
  isGenerating: boolean;
  onGenerate: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  isGenerating,
  onGenerate
}) => {
  return (
    <Card className="bg-forest-medium/80 border-moss-green backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gold-warm flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Generate Loot
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-gold-warm to-gold-bright hover:from-gold-dark hover:to-gold-warm text-forest-dark font-bold"
        >
          {isGenerating ? (
            <div className="flex items-center gap-2">
              <Dice6 className="w-4 h-4 animate-spin" />
              Searching...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Dice6 className="w-4 h-4" />
              Generate Loot
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
