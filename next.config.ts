import path from "node:path";
import type { NextConfig } from "next";

/**
 * Quando NEXT_STATIC_EXPORT=true (usado no deploy para o GitHub Pages),
 * o Next gera um site 100% estático na pasta ./out e aponta os assets
 * para o subendereço do repositório.
 *
 * Sem essa variável (dev e build local) o projeto roda normalmente,
 * com o otimizador de imagens e `next start`.
 */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  // Existe um package.json na pasta home do usuário; sem fixar a raiz,
  // o Turbopack exibe um aviso ao procurar o package-lock.json.
  turbopack: {
    root: path.join(__dirname),
  },

  // Caminho base usado pelos assets de /public (ver src/app/lib/assets.ts)
  env: {
    NEXT_PUBLIC_BASE_PATH: isStaticExport ? `/${repoName}` : "",
  },

  ...(isStaticExport
    ? {
        // Build estático para o GitHub Pages
        output: "export" as const,
        basePath: `/${repoName}`,
        trailingSlash: true,
        // O otimizador de imagens do Next não funciona em site estático
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;


