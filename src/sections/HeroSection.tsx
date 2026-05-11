import { PortalMark } from "@/components/PortalMark";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1B] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[86vh] w-full max-w-7xl flex-col justify-between gap-16">
        <header className="flex items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#C8C8C2]">
              Lutz PI
            </p>
            <p className="mt-2 text-sm text-white/55">Protection Map</p>
          </div>
          <a
            href="#diagnostico"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#C8C8C2]/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C8C8C2]/40"
          >
            Iniciar diagnóstico
          </a>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-[#C8C8C2]">
              Leitura inicial de proteção de marca
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Entenda o nível de proteção atual da sua marca.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Responda a algumas perguntas simples e receba uma leitura inicial
              sobre presença pública, proteção formal e pontos de atenção para
              sua identidade de marca.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#diagnostico"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1B] transition hover:bg-[#C8C8C2] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Iniciar diagnóstico
              </a>
              <p className="max-w-md text-sm leading-6 text-white/50">
                A leitura é orientativa e deve ser complementada por análise
                profissional e busca específica no INPI.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PortalMark className="max-w-[15rem] sm:max-w-[20rem] lg:max-w-[24rem]" />
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 pt-6 text-sm text-white/52 sm:grid-cols-3">
          <p>Clareza antes de conversão.</p>
          <p>Orientação antes de urgência.</p>
          <p>Diagnóstico antes de oferta.</p>
        </div>
      </div>
    </section>
  );
}

