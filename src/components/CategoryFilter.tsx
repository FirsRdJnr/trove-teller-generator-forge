
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sword } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onCategoryChange
}) => {
  return (
    <Card className="bg-forest-medium/80 border-moss-green backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gold-warm flex items-center gap-2">
          <Sword className="w-5 h-5" />
          Loot Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="all-categories"
            checked={selectedCategories.includes('all')}
            onCheckedChange={(checked) => onCategoryChange('all', checked as boolean)}
          />
          <Label htmlFor="all-categories" className="text-sage-green font-medium">
            All Categories
          </Label>
        </div>
        <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => onCategoryChange(category, checked as boolean)}
                disabled={selectedCategories.includes('all')}
              />
              <Label htmlFor={category} className="text-sage-green text-sm">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
