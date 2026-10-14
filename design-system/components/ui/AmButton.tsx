import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

type Variant = 'primary' | 'outline' | 'light';
type Size = 'sm' | 'md';

export interface AmButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const base = 'bt';
const variants: Record<Variant, string> = { primary: 'bt-p', outline: 'bt-o', light: 'bt-l' };

export const AmButton = React.forwardRef<HTMLAnchorElement, AmButtonProps>(
  ({ variant = 'primary', size = 'md', asChild = false, className = '', children, ...props }, ref) => {
    const Comp: any = asChild ? Slot : 'a';
    return (
      <Comp
        ref={ref}
        className={[base, variants[variant], size === 'sm' ? 'bt-s' : '', className].join(' ').trim()}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
AmButton.displayName = 'AmButton';
