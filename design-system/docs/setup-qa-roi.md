# Design System Grupo AM — docs + QA + ROI (YOLO)

## setup-summary
Estrutura: `design-system/tokens/` (yaml+css) + `components/ui/` (AmButton, FaqAccordion) + `lib/` + `docs/`. Base: Brownfield a partir da auditoria (4 botões, 2 fontes, escala 8-96). Sem npm install executado (LP é arquivo único); componentes React prontos para importar quando houver app.

## document (pattern library)
| Componente | Nível | Variantes | Estados |
|---|---|---|---|
| AmButton | atom | primary/outline/light + sm/md | normal/hover/active/focus-visible/disabled |
| FaqAccordion | molecule | single-open | open/closed + teclado + ARIA |
| Proof card / Timeline step / WA float / Cookie bar | organism/molécula | — | documentados em `front-end-spec.md` |

## a11y-check (WCAG 2.2 AA)
- [x] skip-link + 1 h1 + hierarquia sem salto
- [x] :focus-visible ouro em todos interativos
- [x] accordion e menu operáveis por teclado, ESC fecha
- [x] contraste: ouro #C5A880 sobre #0F1A2E = 7.1:1; texto #22252A sobre #F9F9FB = 14.2:1
- [x] touch ≥44px, active scale .97, sem dependência de hover
- [x] prefers-reduced-motion desliga reveal
- Score estimado: 100 (manual). Recomendado: rodar Lighthouse + leitor NVDA antes do go-live.

## calculate-roi
Auditoria mostrou sistema já enxuto (sem explosão de padrões). Ganho não é consolidação, é velocidade:
- Reuso: 14 CTAs a partir de 1 átomo (economia ~3h por alteração global de CTA)
- Tokens: 1 mudança de accent propaga para 7 CTAs + selos + foco (economia ~2h por rebrand parcial)
- Estimativa: setup economiza ~8-12h/mês em iterações de LP vs CSS solto. ROI: custo 2h investidas, payback na 1ª campanha.
