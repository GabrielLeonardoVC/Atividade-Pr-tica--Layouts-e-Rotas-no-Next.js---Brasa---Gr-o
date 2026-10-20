import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import { ActiveRoute } from "./components/ActiveRoute";
import { BrandFlame, GridIcon } from "./components/icons";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brasa & Grão | Smash Burgers & Specialty Coffee",
  description:
    "Smash burgers, porções e cafeteria artesanal. A brasa de verdade em São Paulo — entrega quente em 30 minutos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>

        {/* ================= CABEÇALHO COMPARTILHADO ================= */}
        <header className="site-header">
          <div className="container site-header__inner">
            <Link href="/" className="brand" aria-label="Brasa & Grão — Página inicial">
              <span className="brand__mark">
                <BrandFlame size={24} />
              </span>
              <span>
                <span className="brand__name">Brasa &amp; Grão</span>
                <span className="brand__tagline">Smash Burgers &amp; Specialty Coffee</span>
              </span>
            </Link>

            <nav className="site-nav" aria-label="Navegação principal">
              <Link href="/" className="site-nav__link">
                Início
              </Link>
              <Link href="/cardapio" className="site-nav__link">
                Cardápio Completo
              </Link>
            </nav>

            {/* Marca a rota atual para destacar o link ativo do menu */}
            <ActiveRoute />

            <div className="header-actions">
              <span className="status-badge">
                <span className="status-badge__dot" aria-hidden="true" />
                Aberto • 25-35 min
              </span>
              <button type="button" className="admin-button" title="Área do Gestor (Admin)">
                <GridIcon size={16} />
                Painel Gestor
              </button>
            </div>
          </div>
        </header>

        <div className="site-wrapper">
          {/* ============= CONTEÚDO DINÂMICO DE CADA ROTA ============ */}
          <main className="site-main" id="conteudo">
            {children}
          </main>

          {/* ================== RODAPÉ COMPARTILHADO =================== */}
          <footer className="site-footer">
            <div className="container">
              <div className="site-footer__top">
                <div className="brand">
                  <span className="brand__mark">
                    <BrandFlame size={24} />
                  </span>
                  <span>
                    <span className="brand__name">Brasa &amp; Grão</span>
                    <span className="site-footer__address">
                      Rua dos Pinheiros, 480 • São Paulo
                    </span>
                  </span>
                </div>

                <nav className="site-footer__nav" aria-label="Links do rodapé">
                  <Link href="/" className="site-footer__link">
                    Início
                  </Link>
                  <Link href="/cardapio" className="site-footer__link">
                    Cardápio Completo
                  </Link>
                  <button type="button" className="site-footer__link" title="Em breve">
                    Área do Gestor (Admin)
                  </button>
                </nav>
              </div>

              <hr className="site-footer__divider" />

              <div className="site-footer__bottom">
                <p>
                  © 2026 Brasa &amp; Grão Artesanal. Layout didático para aula de Next.js (Rotas &amp;
                  Layouts).
                </p>
                <p>Terça a Domingo • 18h às 23h30</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
