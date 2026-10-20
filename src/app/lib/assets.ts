/**
 * Caminho base do site.
 *
 * Em dev/build local é vazio ("/images/...").
 * No deploy no GitHub Pages o site é servido em /<nome-do-repositorio>,
 * então os arquivos de /public precisam do prefixo para funcionar.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixa um caminho de arquivo de /public com o basePath. */
export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
