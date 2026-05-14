import { BrandLogo } from "@/components/BrandLogo";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-lutz-obsidian px-5 py-8 text-lutz-ivory sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[58vh] w-full max-w-7xl flex-col justify-between gap-16">
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

        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-medium uppercase text-lutz-fog">
            Diagnóstico de proteção de marca
          </p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] text-lutz-ivory sm:text-6xl lg:text-7xl">
            Entenda o estágio atual da sua marca.
          </h1>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-lutz-ivory px-6 py-3 text-sm font-medium text-lutz-obsidian transition hover:bg-lutz-fog focus:outline-none focus:ring-2 focus:ring-lutz-ivory/50"
            >
              Iniciar diagnóstico
            </a>
            <p className="max-w-md text-sm leading-6 text-lutz-fog/68">
              12 perguntas. Leitura orientativa. Sem cadastro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
