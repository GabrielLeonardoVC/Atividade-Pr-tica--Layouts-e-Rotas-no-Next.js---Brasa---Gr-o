import Image from "next/image";
import { StarIcon } from "./icons";
import { formatPrice, type Dish } from "../data/menu";
import { asset } from "../lib/assets";

type ProductCardProps = {
  dish: Dish;
  /** Texto do botão de ação (padrão: "+ Pedir Agora") */
  actionLabel?: string;
  /** Carrega a imagem com prioridade (primeiro card da lista) */
  priority?: boolean;
};

/** Card vertical usado na home e na seção "Linha Smash & Brasa". */
export function ProductCard({ dish, actionLabel = "+ Pedir Agora", priority }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <Image
          src={asset(dish.image)}
          alt={dish.name}
          fill
          priority={priority}
          sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw"
        />
        {dish.tag && (
          <span className={`tag tag--${dish.tag.tone} product-card__tag`}>{dish.tag.label}</span>
        )}
        {dish.rating && (
          <span className="rating product-card__rating">
            <StarIcon className="hero__stat-star" />
            {dish.rating.toFixed(1)}
          </span>
        )}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{dish.name}</h3>
        <p className="product-card__description">{dish.description}</p>

        <div className="product-card__footer">
          <div>
            {dish.unit && <span className="product-card__unit">{dish.unit}</span>}
            <span className="product-card__price">{formatPrice(dish.price)}</span>
          </div>
          <button type="button" className="btn btn--dark">
            {actionLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
