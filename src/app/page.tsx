import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./components/ProductCard";
import { ArrowRight, ClockIcon, CoffeeIcon, FlameIcon, SteakIcon } from "./components/icons";
import { featuredDishes } from "./data/menu";
import { asset } from "./lib/assets";

const DIFFERENTIALS = [
  {
    title: "Blend 100% Angus Fresco",
    text: "Carne selecionada e moída diariamente na nossa cozinha.",
    icon: SteakIcon,
  },
  {
    title: "Torrefação Própria",
    text: "Grãos especiais do Cerrado Mineiro e sobremesas autorais.",
    icon: CoffeeIcon,
  },
  {
    title: "Entrega Quente em 30 min",
    text: "Embalagem térmica selada para manter a crocância.",
    icon: ClockIcon,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="hero">
        <div className="container">
          <div className="hero__panel">
            <div className="hero__inner">
              <div>
                <span className="hero__badge">
                  <FlameIcon size={13} />
                  Eleito o Melhor Smash Burger de 2026
                </span>

                <h1 className="hero__title">
                  Sabor defumado na brasa, crosta perfeita <em>a cada mordida.</em>
                </h1>

                <p className="hero__text">
                  Blend 100% Angus moído no dia, pão brioche selado na manteiga de garrafa e cafés
                  especiais torrados artesanalmente na nossa casa.
                </p>

                <div className="hero__actions">
                  <Link href="/cardapio" className="btn btn--primary">
                    Explorar Cardápio
                    <ArrowRight size={16} />
                  </Link>
                  <a href="#mais-pedidos" className="btn btn--ghost">
                    Ver Mais Pedidos
                  </a>
                </div>

                <div className="hero__stats">
                  <span>
                    <strong>4.9 ★</strong> (1.840+ avaliações)
                  </span>
                  <span className="hero__divider" aria-hidden="true" />
                  <span>
                    <strong>100% Artesanal</strong> sem conservantes
                  </span>
                </div>
              </div>

              <div className="hero__media">
                <div className="hero__image">
                  <Image
                    src={asset("/images/duplo-brasa-cheddar.jpg")}
                    alt="Duplo smash burger de 90g com cheddar derretido, picles e molho defumado da casa"
                    fill
                    priority
                    sizes="(max-width: 960px) 100vw, 45vw"
                  />
                </div>

                <div className="hero__card">
                  <span className="hero__price">R$ 38,90</span>
                  <span>
                    <span className="hero__card-title">Duplo Brasa Cheddar</span>
                    <span className="hero__card-sub">2x Smash 90g + Bacon Caramelizado</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- DIFERENCIAIS -------------------------- */}
      <section className="features container" aria-label="Nossos diferenciais">
        {DIFFERENTIALS.map(({ title, text, icon: Icon }) => (
          <article className="feature" key={title}>
            <span className="feature__icon">
              <Icon size={22} />
            </span>
            <div>
              <h3 className="feature__title">{title}</h3>
              <p className="feature__text">{text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* --------------------- MAIS PEDIDOS DA SEMANA ---------------------- */}
      <section className="section container" id="mais-pedidos">
        <span className="eyebrow-pill">Favoritos da Galera</span>

        <div className="section__head" style={{ marginTop: 18 }}>
          <h2 className="section__title">Os Mais Pedidos da Semana</h2>
          <Link href="/cardapio" className="btn btn--outline">
            Ver todos os 16 pratos
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="product-grid">
          {featuredDishes.map((dish) => (
            <ProductCard key={dish.slug} dish={dish} />
          ))}
        </div>
      </section>
    </>
  );
}
