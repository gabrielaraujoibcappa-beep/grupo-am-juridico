import * as React from 'react';

export interface FaqItem { q: string; a: string }
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={isOpen ? 'fq-i op' : 'fq-i'}>
            <button
              className="fq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {it.q}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fq-a" style={{ maxHeight: isOpen ? 300 : 0 }}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
