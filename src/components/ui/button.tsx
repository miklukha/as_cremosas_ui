import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 lowercase rounded-full',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-secondary hover:bg-primary/90 shadow-md hover:shadow-xl hover:scale-105 border border-primary/20 duration-500',

        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md hover:scale-105 border border-secondary/30 duration-500',

        outline:
          'border-1 border-primary bg-transparent text-primary  shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500',

        ghost:
          'hover:bg-accent/10 hover:text-primary hover:scale-105 text-foreground/80 duration-500',

        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-xl hover:scale-105 border border-destructive/20 duration-500',

        premium:
          'bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-primary shadow-lg hover:shadow-2xl hover:scale-105 border border-primary/30 animate-gradient duration-500',

        elegant:
          'bg-card text-foreground border-2 border-border hover:border-primary hover:text-primary hover:bg-accent/5 shadow-sm hover:shadow-md hover:scale-105 backdrop-blur-sm duration-500',

        icon: 'hover:text-primary hover:bg-accent/10 hover:scale-110 transition-all duration-300 duration-500',

        link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80 p-0 h-auto font-normal duration-500',

        grow: 'hover:text-accent hover:scale-120 transition-all duration-300'
      },
      size: {
        default: 'h-9 px-4 py-2 text-xs sm:h-10 sm:px-6 sm:text-sm',
        sm: 'h-8 px-3 text-xs sm:h-9 sm:px-4',
        lg: 'h-10 px-6 text-sm sm:h-12 sm:px-8 sm:text-base ',
        xl: 'h-10 px-6 text-sm sm:h-14 sm:px-10 sm:text-xl ',
        icon: 'h-9 w-9 sm:h-10 sm:w-10 ',
        'icon-sm': 'h-7 w-7 sm:h-8 sm:w-8 ',
        'icon-lg': 'h-10 w-10 sm:h-12 sm:w-12 '
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
