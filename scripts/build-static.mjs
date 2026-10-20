/**
 * Build estático para o GitHub Pages (roda em Windows, macOS e Linux).
 *
 *   npm run build:static
 *
 * Gera a pasta ./out com o site 100% estático, já com o basePath
 * do repositório e o payload RSC alinhado.
 */
import { spawnSync } from "node:child_process";

const FALLBACK_REPO = "GabrielLeonardoVC/Atividade-Pratica--Layouts-e-Rotas-no-Next.js---Brasa--e--Grao";

const env = {
  ...process.env,
  NEXT_STATIC_EXPORT: "true",
  GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY ?? FALLBACK_REPO,
};

function run(args) {
  const result = spawnSync(process.execPath, args, { stdio: "inherit", env });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log("→ next build (export estático)");
run(["node_modules/next/dist/bin/next", "build"]);

console.log("→ alinhando payload RSC");
run(["scripts/fix-static-rsc.mjs", "out"]);

console.log("✓ site estático pronto em ./out");
