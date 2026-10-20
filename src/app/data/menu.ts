/**
 * Dados do cardápio — fonte única de verdade para as páginas
 * "/" (Início) e "/cardapio" (Cardápio Completo).
 */

export type Category = "smash" | "porcoes" | "cafes";

export type Dish = {
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  /** Selo do canto superior do card (ex.: "MAIS VENDIDO") */
  tag?: { label: string; tone: "orange" | "dark" | "green" };
  /** Nota exibida no selo inferior do card */
  rating?: number;
  /** Peso/porção exibida acima do preço */
  unit?: string;
  /** Etiqueta compacta dos cards horizontais (ex.: "350g") */
  chip?: string;
  category: Category;
};

export const featuredDishes: Dish[] = [
  {
    slug: "duplo-brasa-bacon",
    name: "Duplo Brasa & Bacon",
    description:
      "Dois smash burgers de 90g na brasa, queijo cheddar inglês derretido, fatias de bacon crocante e molho defumado da casa no brioche.",
    price: 38.9,
    image: "/images/duplo-brasa-bacon.jpg",
    tag: { label: "Mais Vendido", tone: "orange" },
    rating: 4.9,
    unit: "Individual",
    category: "smash",
  },
  {
    slug: "truffle-brie-cebola",
    name: "Truffle Brie & Cebola",
    description:
      "Hambúrguer alto 180g, queijo brie maçaricado, geleia artesanal de pimenta com bacon, rúcula fresca e maionese trufada no pão australiano.",
    price: 44.9,
    image: "/images/truffle-brie-cebola.jpg",
    tag: { label: "Chef's Choice", tone: "dark" },
    rating: 5.0,
    unit: "Individual",
    category: "smash",
  },
  {
    slug: "crispy-chicken-hot-honey",
    name: "Crispy Chicken Hot Honey",
    description:
      "Sobrecoxa de frango empanada super crocante, mel picante artesanal, picles da casa, salad coleslaw cremoso e pão de batata.",
    price: 34.9,
    image: "/images/crispy-chicken-hot-honey.jpg",
    tag: { label: "Novo", tone: "dark" },
    rating: 4.8,
    unit: "Individual",
    category: "smash",
  },
];

export const smashDishes: Dish[] = [
  {
    slug: "classico-american-smash",
    name: "Clássico American Smash",
    description:
      "2x smash 90g, duplo american cheese artesanal, picles agridoce, cebola roxa picada, mostarda dijon e ketchup da casa.",
    price: 34.9,
    image: "/images/duplo-brasa-cheddar.jpg",
    tag: { label: "Campeão", tone: "orange" },
    rating: 4.9,
    unit: "180g de carne",
    category: "smash",
  },
  {
    slug: "oklahoma-crispy-onion",
    name: "Oklahoma Crispy Onion",
    description:
      "Dois discos de 90g prensados na chapa com fios finíssimos de cebola caramelizada, cheddar inglês e maionese de alho negro.",
    price: 37.9,
    image: "/images/oklahoma-crispy-onion.jpg",
    tag: { label: "Prensado na Chapa", tone: "dark" },
    rating: 4.9,
    unit: "180g de carne",
    category: "smash",
  },
  {
    slug: "portobello-crispy-melt",
    name: "Portobello Crispy Melt",
    description:
      "Cogumelo Portobello gigante empanado na panqueca e recheado com queijo meia-cura, tomate confit, rúcula e pesto de manjericão.",
    price: 39.9,
    image: "/images/portobello-crispy-melt.jpg",
    tag: { label: "100% Vegetariano", tone: "green" },
    rating: 4.8,
    unit: "Vegetariano",
    category: "smash",
  },
];

export const sideDishes: Dish[] = [
  {
    slug: "fritas-rusticas",
    name: "Fritas Rústicas com Alecrim & Páprica",
    description:
      "Batatas cortadas à mão, fritas em dupla imersão com flor de sal, alecrim fresco e maionese de páprica defumada.",
    price: 24.9,
    image: "/images/fritas-rusticas.jpg",
    chip: "350g",
    category: "porcoes",
  },
  {
    slug: "shake-espresso",
    name: "Shake Espresso & Caramelo Salgado",
    description:
      "Sorvete artesanal de baunilha em fava batido com dose dupla de espresso 100% arábica e calda de flor de sal.",
    price: 26.9,
    image: "/images/shake-espresso.jpg",
    chip: "400ml",
    category: "cafes",
  },
  {
    slug: "latte-artesanal",
    name: "Latte Artesanal Torra Média",
    description:
      "Grãos microlote da Serra da Mantiqueira com notas de chocolate amargo e avelã, leite vaporizado cremoso.",
    price: 15.9,
    image: "/images/latte-artesanal.jpg",
    chip: "Quente/Gelado",
    category: "cafes",
  },
  {
    slug: "brownie-na-chapa",
    name: "Brownie Belga 70% na Chapa",
    description:
      "Servido quentinho na panela de ferro com sorvete de creme artesanal e farofa crocante de castanhas.",
    price: 28.9,
    image: "/images/brownie-na-chapa.jpg",
    chip: "Sobremesa",
    category: "cafes",
  },
];

/** Formata valores no padrão brasileiro: 38.9 -> "R$ 38,90" */
export function formatPrice(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
