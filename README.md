# Brasa & Grão — Atividade Prática: Layouts e Rotas no Next.js

Site da hamburgueria e cafeteria artesanal **Brasa & Grão**, construído como prática de
**Rotas (App Router)**, **Layouts (`layout.tsx`)** e **Estilização** no Next.js, a partir do
protótipo Figma.

🔗 Protótipo: [Figma — Ecommerce Website Design (Community)](https://www.figma.com/design/9S5LaN2QHqmOi5AcAgbrQ5/Ecommerce-Website-Design--Community-?node-id=22-474)

---

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de produção
npm start        # sobe o build de produção
npm run lint     # ESLint
```

---

## Rotas

| Rota             | Arquivo                     | Conteúdo                                                       |
| ---------------- | --------------------------- | -------------------------------------------------------------- |
| `/`              | `src/app/page.tsx`          | Página **Início**: hero, diferenciais e "Os Mais Pedidos"       |
| `/cardapio`      | `src/app/cardapio/page.tsx` | Página **Cardápio Completo**: banner, filtros e listagem        |

A navegação entre as duas rotas é feita com o componente `<Link>` do Next.js
(`import Link from "next/link"`), que faz o roteamento no cliente sem recarregar a página.

---

## Layout compartilhado

O `<header>` e o `<footer>` são escritos **uma única vez** em `src/app/layout.tsx`,
envolvendo o `{children}`:

```
src/
├── app/
│   ├── globals.css          # tokens de design, componentes e responsivo
│   ├── layout.tsx           # <header> + {children} + <footer>  (compartilhado)
│   ├── page.tsx             # rota /
│   ├── cardapio/
│   │   └── page.tsx         # rota /cardapio
│   ├── components/
│   │   ├── ActiveRoute.tsx  # marca a rota atual para destacar o link ativo
│   │   ├── MenuExplorer.tsx # filtros por categoria (Client Component)
│   │   ├── ProductCard.tsx  # card vertical de lanche
│   │   ├── SideCard.tsx     # card horizontal de acompanhamento
│   │   └── icons.tsx        # ícones SVG da marca
│   └── data/
│       └── menu.ts          # dados do cardápio (fonte única de verdade)
└── public/
    └── images/              # fotos do cardápio
```

**Regra de ouro aplicada:** nenhum `page.tsx` repete `<header>` ou `<footer>`.
As duas páginas herdam a estrutura completa do layout automaticamente.

O link ativo do menu (pílula branca em "Início" / "Cardápio Completo") é resolvido sem
transformar o cabeçalho em Client Component: o componente `ActiveRoute` grava a rota atual
em um atributo `data-path` e o CSS usa `:has()` para aplicar o destaque.

---

## Estilização

- **Fontes:** `Playfair Display` (títulos/display) e `Inter` (texto), carregadas com
  `next/font/google` — sem requisição externa em runtime.
- **Tokens de cor e espaçamento** definidos como CSS Custom Properties no topo de
  `src/app/globals.css` (marca laranja `#e45b1f`, creme `#f8f3ec`, espresso `#17120f`…).
- **CSS puro** em arquivo único, organizado em 10 seções comentadas.
- **Responsivo** com breakpoints em 1080px, 960px, 720px e 560px.

---

## Funcionalidades extras

- **Filtros por categoria** no cardápio (`Todos os Itens`, `Smash Burgers`,
  `Porções & Entradas`, `Cafés & Shakes`) — Client Component com `aria-pressed`.
- **Imagens otimizadas** com `next/image` (`fill`, `sizes`, `priority` no LCP).
- **Metadados** por rota via `metadata` exportada.
- Acessibilidade: `lang="pt-BR"`, hierarquia de headings, `aria-label` nos ícones,
  foco visível e link de salto semântico na navegação.

---

## Imagens

As fotos em `public/images/` são as **imagens exatas usadas no protótipo Figma**
(extraídas do arquivo de design). A foto de Fritas Rústicas não existe no protótipo
(placeholder quebrado), portanto foi usada uma foto de batata rústica equivalente.

---

© 2026 Brasa & Grão Artesanal · Terça a Domingo, 18h às 23h30
