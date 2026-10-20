import type { Metadata } from "next";
import { MenuExplorer } from "../components/MenuExplorer";
import { sideDishes, smashDishes } from "../data/menu";

export const metadata: Metadata = {
  title: "Cardápio Completo | Brasa & Grão",
  description:
    "Linha Smash & Brasa, acompanhamentos e cafeteria artesanal. Veja todos os itens do cardápio da Brasa & Grão.",
};

export default function CardapioPage() {
  return (
    <>
      {/* --------------------- BANNER DO CABEÇALHO DO CARDÁPIO -------------------- */}
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero__panel">
            <div className="menu-hero__inner">
              <div>
                <span className="menu-hero__eyebrow">
                  Cardápio Artesanal • Edição de Outono
                </span>
                <h1 className="menu-hero__title">Escolha sua experiência na brasa</h1>
                <p className="menu-hero__text">
                  Todos os hambúrgueres acompanham maionese defumada da casa. Adicione batata rústica
                  e bebida artesanal por +R$ 16,00.
                </p>
              </div>

              <div className="menu-hero__combo">
                <span className="menu-hero__combo-label">Combo do Dia</span>
                <strong className="menu-hero__combo-title">Smash + Fritas + Café Gelado</strong>
                <span className="menu-hero__combo-price">
                  <s>De R$ 62,00</s> por <strong>R$ 49,90</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------- FILTROS E LISTAGEM -------------------------- */}
      <div className="container">
        <MenuExplorer smashDishes={smashDishes} sideDishes={sideDishes} />
      </div>
    </>
  );
}
