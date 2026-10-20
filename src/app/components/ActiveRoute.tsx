"use client";

import { usePathname } from "next/navigation";

/**
 * Marca a rota atual dentro do <header> para que o link ativo
 * (Início / Cardápio Completo) possa ser destacado via CSS,
 * sem precisar transformar o cabeçalho em Client Component.
 */
export function ActiveRoute() {
  const pathname = usePathname();

  return <span className="route-marker" data-path={pathname} aria-hidden="true" />;
}
