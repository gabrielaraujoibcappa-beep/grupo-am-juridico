# Flows + Inventory + Annotations — Grupo AM

## flows.md
[LP] -> [Hero CTA] -> [WhatsApp com texto pré-preenchido] -> [Envio relato/CNIS] -> [Análise 1 dia útil] -> [Estratégia+protocolo] -> [Acompanhamento]
Ramo erro: foto ilegível -> orienta reenvio | sem CNIS -> guia Meu INSS | número falso -> bloco antifraude redireciona ao oficial
Login: N/A (LP sem auth). LGPD: só cookies essenciais + aceite em barra.

## component-inventory.md (Atomic)
Atoms (9): Button primary/outline/light/sm, Badge, Input n/a (WA externo), Icon Feather 2px, Progress bar, Toggle tema, Cookie bar, WA float, Accordion item
Molecules (6): Nav link underline animado, Hero CTA group, Proof chip (ícone+título+texto), Timeline step, FAQ item, Footer col
Organisms (7): Navbar fixa, Hero 5 camadas, Proof grid, Bento especialidades, Timeline método, FAQ accordion, CTA final + footer antifraude
Estados: normal/hover/active/focus-visible/disabled/loading(skeleton)/empty/error/visited — todos interativos com :focus-visible e active scale .97 no touch.

## annotations.md
- Hero escuro #0F1A2E para impacto; prova em claro para credibilidade; alternância evita repetição
- Bento assimétrico (destaque maternidade span 2) quebra grid 3x3 idêntico (anti-IA)
- Timeline vertical com conector, não bolinhas 1-2-3 em linha
- Sem depoimentos falsos: "casos típicos" + nota OAB sem promessa de resultado
- A11y: skip-link, 1 h1, accordion via teclado + ESC fecha menu, contraste ≥4.5, reduced-motion desliga reveal
- Perf: arquivo único, imagem hero eager + resto lazy, aspect-ratio zero CLS, content-visibility abaixo da dobra

## handoff-package.md
Entrega: `index.html` único + estes docs. Espaçamento base 8 (8/16/24/32/48/64/96). Radius máx 12. Breakpoints 360/768/1024/1280/1600. O que falta do cliente: OAB/UF, endereço, links IG/YT oficiais, 3 depoimentos autorizados, política de privacidade URL.
