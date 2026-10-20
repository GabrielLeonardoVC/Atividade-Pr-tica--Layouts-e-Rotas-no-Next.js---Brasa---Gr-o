/**
 * Pós-build do export estático (GitHub Pages).
 *
 * O Next grava o payload RSC das rotas aninhadas em:
 *    cardapio/__next.cardapio/__PAGE__.txt
 * mas o client-side router pede:
 *    cardapio/__next.cardapio.__PAGE__.txt
 *
 * Esta cópia alinha os dois nomes e elimina o 404 do prefetch,
 * mantendo a navegação entre rotas 100% client-side.
 */
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join } from "node:path";

const OUT_DIR = process.argv[2] ?? "out";

if (!existsSync(OUT_DIR)) {
  console.error(`Pasta "${OUT_DIR}" não encontrada. Rode o build antes.`);
  process.exit(1);
}

let created = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (entry !== "__PAGE__.txt") continue;

    // .../<rota>/__next.<rota>/__PAGE__.txt  ->  .../<rota>/__next.<rota>.__PAGE__.txt
    const folder = basename(dirname(full));
    const target = join(dirname(dirname(full)), `${folder}.__PAGE__.txt`);

    if (existsSync(target)) continue;
    copyFileSync(full, target);
    created += 1;
    console.log(`  + ${target.replaceAll("\\", "/")}`);
  }
}

walk(OUT_DIR);
console.log(`payload RSC alinhado: ${created} arquivo(s)`);
