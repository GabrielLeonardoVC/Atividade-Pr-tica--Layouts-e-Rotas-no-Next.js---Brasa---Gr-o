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
npm run build       # build de produção
npm start           # sobe o build de produção
npm run lint        # ESLint
npm run typecheck   # TypeScript (tsc --noEmit)
npm run build:static # build estático (GitHub Pages) -> pasta ./out
```

---

## Deploy no GitHub Pages

O site é publicado em:
**[gabrielleonardovc.github.io/Atividade-Pratica--Layouts-e-Rotas-no-Next.js---Brasa--e--Grao](https://gabrielleonardovc.github.io/Atividade-Pratica--Layouts-e-Rotas-no-Next.js---Brasa--e--Grao/)**

Como o GitHub Pages só serve arquivos estáticos, o projeto tem um modo de
**exportação estática** ativado por variável de ambiente:

- `NEXT_STATIC_EXPORT=true` → o `next.config.ts` liga `output: "export"`, define o
  `basePath` com o nome do repositório e desliga o otimizador de imagens.
- `scripts/build-static.mjs` → roda o build e alinha o payload RSC das rotas
  aninhadas (o Next exporta em `cardapio/__next.cardapio/__PAGE__.txt`, mas o
  router pede `cardapio/__next.cardapio.__PAGE__.txt`).
- `.github/workflows/deploy.yml` → builda e publica no Pages a cada push na `master`.

> O `basePath` só é aplicado no build de deploy. Em `npm run dev` o site roda em
> `/` normalmente e o otimizador de imagens continua ativo.
> Os arquivos de `public/` recebem o prefixo via `src/app/lib/assets.ts`
> (exigência do Next: _"you will need to add the `basePath` in front of `src`"_).

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
