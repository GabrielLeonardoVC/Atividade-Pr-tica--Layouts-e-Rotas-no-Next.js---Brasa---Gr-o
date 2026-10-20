"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { SideCard } from "./SideCard";
import type { Category, Dish } from "../data/menu";

type MenuExplorerProps = {
  smashDishes: Dish[];
  sideDishes: Dish[];
};

type Filter = "all" | Category;

const FILTERS: { id: Filter; label: string; icon: string }[] = [
  { id: "all", label: "Todos os Itens (10)", icon: "🍔" },
  { id: "smash", label: "Smash Burgers (4)", icon: "🔥" },
  { id: "porcoes", label: "Porções & Entradas (3)", icon: "🍟" },
  { id: "cafes", label: "Cafés & Shakes (3)", icon: "☕" },
];

/**
 * Bloco interativo do cardápio: pílulas de filtro por categoria
 * + as duas seções de produtos (Linha Smash & Brasa e
 * Acompanhamentos & Cafeteria).
 */
export function MenuExplorer({ smashDishes, sideDishes }: MenuExplorerProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const matches = (dish: Dish) => filter === "all" || dish.category === filter;

  const visibleSmash = smashDishes.filter(matches);
  const visibleSides = sideDishes.filter(matches);

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar por categoria">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="filter-pill"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {visibleSmash.length > 0 && (
        <section className="section" id="linha-smash">
          <h2 className="section__title">Linha Smash &amp; Brasa</h2>
          <p className="section__subtitle">
            Feitos com blend 100% Angus certificado e pão de fermentação natural.
          </p>

          <div className="product-grid" style={{ marginTop: 24 }}>
            {visibleSmash.map((dish, index) => (
              <ProductCard key={dish.slug} dish={dish} actionLabel="+ Adicionar" priority={index === 0} />
            ))}
          </div>
        </section>
      )}

      {visibleSides.length > 0 && (
        <section className="section" id="acompanhamentos">
          <h2 className="section__title">Acompanhamentos &amp; Cafeteria</h2>
          <p className="section__subtitle">
            Para compartilhar na mesa ou fechar sua refeição com chave de ouro.
          </p>

          <div className="side-grid" style={{ marginTop: 24 }}>
            {visibleSides.map((dish) => (
              <SideCard key={dish.slug} dish={dish} />
            ))}
          </div>
        </section>
      )}

      {visibleSmash.length === 0 && visibleSides.length === 0 && (
        <p className="empty-state">Nenhum item encontrado para esta categoria.</p>
      )}
    </>
  );
}
