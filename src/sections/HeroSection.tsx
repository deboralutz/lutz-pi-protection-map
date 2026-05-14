import { BrandLogo } from "@/components/BrandLogo";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-lutz-obsidian px-5 py-8 text-lutz-ivory sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[86vh] w-full max-w-7xl flex-col justify-between gap-16">
        <header className="flex items-center justify-between gap-6">
          <a
            aria-label="Lutz Propriedade Intelectual"
            className="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-lutz-fog/45"
            href="/"
          >
            <BrandLogo className="w-16 sm:w-[4.75rem]" />
            <div className="hidden sm:block">
              <p className="text-xs font-medium uppercase text-lutz-fog">
                Lutz PI
              </p>
              <p className="mt-2 text-sm text-lutz-ivory/55">Mapa de Proteção</p>
            </div>
          </a>
          <a
            href="#diagnostico"
            className="rounded-full border border-lutz-fog/20 px-4 py-2 text-sm text-lutz-ivory/80 transition hover:border-lutz-fog/70 hover:text-lutz-ivory focus:outline-none focus:ring-2 focus:ring-lutz-fog/45"
          >
            Iniciar diagnóstico
          </a>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase text-lutz-fog">
              Leitura inicial de proteção de marca
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-lutz-ivory sm:text-6xl lg:text-7xl">
              Entenda o nível de proteção atual da sua marca.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-lutz-fog/85 sm:text-xl">
              Responda a algumas perguntas simples e receba uma leitura inicial
              sobre presença pública, proteção formal e pontos de atenção para
              sua identidade de marca.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#diagnostico"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-lutz-ivory px-6 py-3 text-sm font-semibold text-lutz-obsidian transition hover:bg-lutz-fog focus:outline-none focus:ring-2 focus:ring-lutz-ivory/50"
              >
                Iniciar diagnóstico
              </a>
              <p className="max-w-md text-sm leading-6 text-lutz-fog/75">
                A leitura é orientativa e deve ser complementada por análise
                profissional e busca específica no INPI.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <BrandLogo
              className="w-full max-w-[17rem] opacity-95 sm:max-w-[23rem] lg:max-w-[28rem]"
              decorative
            />
          </div>
        </div>

        <div className="grid gap-4 border-t border-lutz-fog/20 pt-6 text-sm text-lutz-fog/70 sm:grid-cols-3">
          <p>Clareza antes de conversão.</p>
          <p>Orientação antes de urgência.</p>
          <p>Diagnóstico antes de oferta.</p>
        </div>
      </div>
    </section>
  );
}
