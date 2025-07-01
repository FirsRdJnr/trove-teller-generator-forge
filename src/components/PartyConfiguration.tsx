
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Dice6 } from 'lucide-react';

interface PartyConfigurationProps {
  partyLevel: number;
  partySize: number;
  onPartyLevelChange: (level: number) => void;
  onPartySizeChange: (size: number) => void;
}

export const PartyConfiguration: React.FC<PartyConfigurationProps> = ({
  partyLevel,
  partySize,
  onPartyLevelChange,
  onPartySizeChange
}) => {
  return (
    <Card className="bg-forest-medium/80 border-moss-green backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gold-warm flex items-center gap-2">
          <Dice6 className="w-5 h-5" />
          Party Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-sage-green">Party Level: {partyLevel}</Label>
          <Slider
            value={[partyLevel]}
            onValueChange={(value) => onPartyLevelChange(value[0])}
            max={20}
            min={1}
            step={1}
            className="mt-2"
          />
        </div>
        <div>
          <Label className="text-sage-green">Party Size: {partySize}</Label>
          <Slider
            value={[partySize]}
            onValueChange={(value) => onPartySizeChange(value[0])}
            max={8}
            min={1}
            step={1}
            className="mt-2"
          />
        </div>
      </CardContent>
    </Card>
  );
};
