import Image from "next/image";
import { formatPrice, type Dish } from "../data/menu";

type SideCardProps = {
  dish: Dish;
};

/** Card horizontal usado na seção "Acompanhamentos & Cafeteria". */
export function SideCard({ dish }: SideCardProps) {
  return (
    <article className="side-card">
      <div className="side-card__media">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 25vw"
        />
      </div>

      <div>
        <div className="side-card__head">
          <h3 className="side-card__title">{dish.name}</h3>
          {dish.chip && <span className="side-card__chip">{dish.chip}</span>}
        </div>

        <p className="side-card__description">{dish.description}</p>

        <div className="side-card__footer">
          <span className="side-card__price">{formatPrice(dish.price)}</span>
          <button type="button" className="btn btn--small">
            + Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
