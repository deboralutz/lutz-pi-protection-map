import type { DiagnosticResult } from "@/types/diagnostic";

type ResultPanelProps = {
  result: DiagnosticResult;
  ctaMessageVisible: boolean;
  onRequestAnalysis: () => void;
  onRestart: () => void;
};

export function ResultPanel({
  result,
  ctaMessageVisible,
  onRequestAnalysis,
  onRestart,
}: ResultPanelProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <aside className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#C8C8C2]">
          Estado principal
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
          {result.stateLabel}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/62">{result.summary}</p>
      </aside>

      <section className="rounded-[1.5rem] border border-white/10 bg-[#202123] p-6 sm:p-8">
        <div className="grid gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Pontos de atenção
            </h3>
            <ul className="mt-5 grid gap-3">
              {result.attentionPoints.map((point) => (
                <li
                  className="rounded-2xl border border-white/10 bg-black/10 p-4 text-sm leading-6 text-white/70"
                  key={point}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Próximo passo recomendado
            </h3>
            <p className="mt-4 text-base leading-7 text-white/75">
              {result.recommendedNextStep}
            </p>
          </div>

          <div className="rounded-2xl border border-[#C8C8C2]/20 bg-[#C8C8C2]/[0.06] p-4 text-sm leading-6 text-white/62">
            {result.institutionalNotice}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1B] transition hover:bg-[#C8C8C2] focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={onRequestAnalysis}
              type="button"
            >
              Solicitar análise da marca
            </button>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/35 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              onClick={onRestart}
              type="button"
            >
              Refazer leitura
            </button>
          </div>

          {ctaMessageVisible ? (
            <p className="text-sm leading-6 text-white/55">
              Este protótipo não envia respostas automaticamente. Para a próxima
              etapa, a análise profissional deve ser solicitada por um canal
              institucional da Lutz PI.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}

