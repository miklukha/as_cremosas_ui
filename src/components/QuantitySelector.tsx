import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

/**
 * Quantity Selector Component
 * Elegant counter with - and + buttons
 */
export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 10,
  className
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="h-10 w-10 rounded-full"
        aria-label="Disminuir cantidad"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <div className="w-12 text-center">
        <span className="text-2xl font-semibold tabular-nums">{quantity}</span>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="h-10 w-10 rounded-full"
        aria-label="Aumentar cantidad"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
