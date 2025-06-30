
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dice6, Sparkles, Sword, Shield, Wand2 } from 'lucide-react';
import { LootItem } from '@/types/loot';
import { LootCard } from './LootCard';
import { lootData } from '@/data/lootData';

const LootGenerator = () => {
  const [partyLevel, setPartyLevel] = useState(5);
  const [partySize, setPartySize] = useState(4);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [rarityMultipliers, setRarityMultipliers] = useState({
    common: 1.0,
    uncommon: 1.0,
    rare: 1.0,
    'very rare': 1.0,
    legendary: 1.0
  });
  const [generatedLoot, setGeneratedLoot] = useState<LootItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const categories = Array.from(new Set(lootData.map(item => item.category)));
  const rarities = ['common', 'uncommon', 'rare', 'very rare', 'legendary'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (category === 'all') {
      setSelectedCategories(checked ? ['all'] : []);
    } else {
      setSelectedCategories(prev => {
        const newCategories = checked 
          ? [...prev.filter(c => c !== 'all'), category]
          : prev.filter(c => c !== category);
        
        // If no specific categories are selected, default to 'all'
        return newCategories.length === 0 ? ['all'] : newCategories;
      });
    }
  };

  const generateLoot = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const filteredItems = lootData.filter(item => {
        if (selectedCategories.includes('all')) {
          return true;
        }
        return selectedCategories.includes(item.category);
      });

      const lootCount = Math.max(1, Math.floor(partySize / 2) + Math.floor(partyLevel / 3));
      const newLoot: LootItem[] = [];

      for (let i = 0; i < lootCount; i++) {
        const weightedItems = filteredItems.map(item => {
          const baseWeight = getRarityWeight(item.rarity, partyLevel);
          const multiplier = rarityMultipliers[item.rarity.toLowerCase() as keyof typeof rarityMultipliers] || 1;
          return {
            ...item,
            calculatedWeight: baseWeight * multiplier
          };
        });

        const totalWeight = weightedItems.reduce((sum, item) => sum + item.calculatedWeight, 0);
        let random = Math.random() * totalWeight;

        for (const item of weightedItems) {
          random -= item.calculatedWeight;
          if (random <= 0) {
            newLoot.push(item);
            break;
          }
        }
      }

      setGeneratedLoot(newLoot);
      setIsGenerating(false);
    }, 1500);
  };

  const getRarityWeight = (rarity: string, level: number): number => {
    const baseWeights = {
      'common': 50,
      'uncommon': 30,
      'rare': 15,
      'very rare': 4,
      'legendary': 1
    };

    const levelMultipliers = {
      'common': Math.max(0.1, 2 - (level * 0.1)),
      'uncommon': level < 5 ? 0.5 : 1 + (level * 0.05),
      'rare': level < 10 ? 0.1 : 1 + (level * 0.08),
      'very rare': level < 15 ? 0.01 : 1 + (level * 0.1),
      'legendary': level < 20 ? 0.001 : 1
    };

    const rarityKey = rarity.toLowerCase() as keyof typeof baseWeights;
    return (baseWeights[rarityKey] || 1) * (levelMultipliers[rarityKey] || 1);
  };

  const updateRarityMultiplier = (rarity: string, value: number) => {
    setRarityMultipliers(prev => ({
      ...prev,
      [rarity]: value
    }));
  };

  const getRarityColor = (rarity: string): string => {
    const colors = {
      'common': 'text-gray-600',
      'uncommon': 'text-green-600',
      'rare': 'text-blue-600',
      'very rare': 'text-purple-600',
      'legendary': 'text-orange-600'
    };
    return colors[rarity.toLowerCase() as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-300 mb-4">
            D&D Loot Generator
          </h1>
          <p className="text-xl text-purple-200">Generate magical treasures for your adventures</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gold-400 flex items-center gap-2">
                <Dice6 className="w-5 h-5" />
                Party Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-purple-200">Party Level: {partyLevel}</Label>
                <Slider
                  value={[partyLevel]}
                  onValueChange={(value) => setPartyLevel(value[0])}
                  max={20}
                  min={1}
                  step={1}
                  className="mt-2"
                />
              </div>
              <div>
                <Label className="text-purple-200">Party Size: {partySize}</Label>
                <Slider
                  value={[partySize]}
                  onValueChange={(value) => setPartySize(value[0])}
                  max={8}
                  min={1}
                  step={1}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gold-400 flex items-center gap-2">
                <Sword className="w-5 h-5" />
                Loot Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="all-categories"
                  checked={selectedCategories.includes('all')}
                  onCheckedChange={(checked) => handleCategoryChange('all', checked as boolean)}
                />
                <Label htmlFor="all-categories" className="text-purple-200 font-medium">
                  All Categories
                </Label>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      disabled={selectedCategories.includes('all')}
                    />
                    <Label htmlFor={category} className="text-purple-200 text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gold-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate Loot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={generateLoot}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-purple-900 font-bold"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <Dice6 className="w-4 h-4 animate-spin" />
                    Rolling...
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
        </div>

        <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-gold-400 flex items-center gap-2">
              <Wand2 className="w-5 h-5" />
              Rarity Probability Adjustments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              {rarities.map(rarity => (
                <div key={rarity} className="space-y-2">
                  <Label className={`text-sm font-medium capitalize ${getRarityColor(rarity)}`}>
                    {rarity} ({(rarityMultipliers[rarity as keyof typeof rarityMultipliers] * 100).toFixed(0)}%)
                  </Label>
                  <Slider
                    value={[rarityMultipliers[rarity as keyof typeof rarityMultipliers]]}
                    onValueChange={(value) => updateRarityMultiplier(rarity, value[0])}
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

        {generatedLoot.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 text-center">
              Generated Loot ({generatedLoot.length} items)
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {generatedLoot.map((item, index) => (
                <LootCard key={`${item.item}-${index}`} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LootGenerator;
