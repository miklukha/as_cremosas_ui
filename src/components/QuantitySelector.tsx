import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
  btnClassName?: string;
  iconClassName?: string;
  numberClassName?: string;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 10,
  className,
  btnClassName,
  iconClassName,
  numberClassName
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
        className={cn('rounded-full py-6 px-6', btnClassName)}
        aria-label="Disminuir cantidad"
      >
        <Minus className={cn('h-4 w-4', iconClassName)} />
      </Button>

      <div className="w-4 text-center">
        <span
          className={cn('text-s font-semibold tabular-nums', numberClassName)}
        >
          {quantity}
        </span>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={cn('rounded-full py-6 px-6', btnClassName)}
        aria-label="Aumentar cantidad"
      >
        <Plus className={cn('h-4 w-4', iconClassName)} />
      </Button>
    </div>
  );
}
