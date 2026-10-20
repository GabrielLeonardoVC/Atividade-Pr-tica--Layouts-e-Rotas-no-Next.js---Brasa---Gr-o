import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração padrão do App Router.
  // As rotas / e /cardapio são estáticas (prerenderizadas) e o <header>/<footer>
  // compartilhados ficam em src/app/layout.tsx.
};

export default nextConfig;
