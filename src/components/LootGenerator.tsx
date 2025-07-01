
import React, { useState } from 'react';
import { LootItem } from '@/types/loot';
import { LootList } from './LootList';
import { PartyConfiguration } from './PartyConfiguration';
import { CategoryFilter } from './CategoryFilter';
import { GenerateButton } from './GenerateButton';
import { RarityControls } from './RarityControls';
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

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (category === 'all') {
      setSelectedCategories(checked ? ['all'] : []);
    } else {
      setSelectedCategories(prev => {
        const newCategories = checked 
          ? [...prev.filter(c => c !== 'all'), category]
          : prev.filter(c => c !== category);
        
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light">
      <div className="min-h-screen bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 bg-forest-dark/80 backdrop-blur-sm rounded-lg p-6 border border-moss-green">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-warm to-amber-glow mb-4">
              Ranger's Loot Generator
            </h1>
            <p className="text-xl text-sage-green">Discover treasures hidden in the depths of the forest</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <PartyConfiguration 
              partyLevel={partyLevel}
              partySize={partySize}
              onPartyLevelChange={setPartyLevel}
              onPartySizeChange={setPartySize}
            />

            <CategoryFilter 
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />

            <GenerateButton 
              isGenerating={isGenerating}
              onGenerate={generateLoot}
            />
          </div>

          <RarityControls 
            rarityMultipliers={rarityMultipliers}
            onRarityMultiplierChange={updateRarityMultiplier}
          />

          {generatedLoot.length > 0 && (
            <LootList loot={generatedLoot} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LootGenerator;
