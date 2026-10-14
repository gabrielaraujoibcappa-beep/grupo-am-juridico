# Master AI Frontend Prompt — Grupo AM Jurídico (v0 / Lovable / IA)
Cole este bloco inteiro na ferramenta de IA. Gere por seção, revise, depois una.

## 1. High-Level Goal
Criar LP premium responsiva de 1 página para escritório previdenciário/trabalhista (Grupo AM), mobile-first, conversão para WhatsApp https://wa.me/556282129097, estética sóbria/acolhedora/autoritária, sem cara de IA, WCAG AA, LCP <2.5s, arquivo único.

## 2. Step-by-step
1. Scaffold HTML semântico único + CSS com variáveis: --p:#1A2B4C; --pd:#0F1A2E; --a:#C5A880; --bg:#F9F9FB; --sf:#FFFFFF; --sa:#EEF0F4; --t:#22252A; --tm:#5B6370; --bd:#E3E0D6. Fontes Playfair Display (títulos) + Inter (corpo) via Google Fonts display=swap.
2. Navbar fixa com scroll state + hamburger <768px + CTA WhatsApp com texto pré-preenchido "Olá, quero falar com um especialista do Grupo AM sobre meu benefício."
3. Hero escuro min 92vh com 5 camadas: gradiente 160deg accent 14%, grid 72px opacidade .045 com máscara radial, 2 curvas SVG opacidade .28/.12, 2 blurs (ouro 420px / azul 300px), conteúdo 2 col desktop / 1 col mobile. Badge, H1 único "Garanta o benefício que é seu por direito" (em itálico ouro), sub 21 palavras, 2 CTAs, 3 micro-provas, foto 4/4.6 com card flutuante "Primeiro passo sem custo".
4. Seções alternadas: prova clara 3 cards / sobre escura 2 col com citação / especialidades bento assimétrico (maternidade destaque span-2 escura + 3 claras) / método timeline vertical 3 etapas / diferenciais 2x2 alternando direção / casos típicos escuros 3 col / FAQ accordion 6 itens 1-aberto-por-vez / CTA final / footer com bloco antifraude + nota OAB sem promessa de resultado.
5. Motion: easeOutExpo/cubic-bezier(.16,1,.3,1), durações 500/700/900ms, stagger 60ms, reveal via IntersectionObserver threshold .15 (opacity+translateY30+blur8), hover cards translateY-4 + borda accent, botões lift 2px, cursor custom desktop, active scale .97, prefers-reduced-motion desliga tudo.
6. Conversão/A11y/SEO: skip-link, focus-visible ouro, ARIA accordion/menu, contraste 4.5, touch 44px, progresso topo 3px, WA flutuante com label contextual por seção via JS, cookie LGPD em barra com localStorage, JSON-LD Organization+ProfessionalService+FAQPage, OG pt_BR, 1 h1, print stylesheet escondendo nav/WA/cookie.

## 3. Constraints e dados
- WhatsApp oficial ÚNICO: 556282129097. CTAs: hero "Quero falar com especialista", secundário "#atuacao", meio "Pedir análise", final "Quero falar com especialista".
- PROIBIDO: jQuery/Bootstrap, emoji como ícone (usar SVG Feather outline 2px currentColor), cards 3x3 idênticos, bolinhas de processo, glassmorphism, gradiente forte/neon, radius 14px+, depoimentos falsos, contadores "mil casos", promessa de resultado, popup automático, carrossel.
- Placeholders a manter: OAB/UF [NÃO ENCONTRADO], endereço [NÃO ENCONTRADO], Instagram/YouTube href="#".
- NÃO alterar: nenhum outro arquivo além da LP; não criar backend; não pedir senha Gov.br.

## 4. Scope estrito
Crie só a LP (index). Não toque em Navbar global do site nem em checkout. Não invente números de prova. Valide HTML sem erros de console.
