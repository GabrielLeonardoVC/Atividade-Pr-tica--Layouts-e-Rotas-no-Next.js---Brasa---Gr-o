import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração padrão do App Router.
  // As rotas / e /cardapio são estáticas (prerenderizadas) e o <header>/<footer>
  // compartilhados ficam em src/app/layout.tsx.
  turbopack: {
    // Fixa a raiz do projeto: existe um package.json na pasta home do usuário
    // e, sem isso, o Turbopack exibe um aviso ao procurar o package-lock.json.
    root: path.join(__dirname),
  },
};

export default nextConfig;
