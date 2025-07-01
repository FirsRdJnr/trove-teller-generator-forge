
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LootItem } from '@/types/loot';
import { LootCard } from './LootCard';

interface LootCarouselProps {
  loot: LootItem[];
}

export const LootCarousel: React.FC<LootCarouselProps> = ({ loot }) => {
  return (
    <div className="relative px-12">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {loot.map((item, index) => (
            <CarouselItem key={`${item.item}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <LootCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-forest-medium/90 border-moss-green text-gold-warm hover:bg-forest-light/90" />
        <CarouselNext className="bg-forest-medium/90 border-moss-green text-gold-warm hover:bg-forest-light/90" />
      </Carousel>
    </div>
  );
};
