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
      <aside className="rounded-3xl border border-lutz-fog/15 bg-lutz-ivory/[0.025] p-6 sm:p-8">
        <p className="text-xs font-medium uppercase text-lutz-fog">
          Estado principal
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-lutz-ivory sm:text-4xl">
          {result.stateLabel}
        </h2>
        <p className="mt-5 text-base leading-7 text-lutz-fog/80">{result.summary}</p>
      </aside>

      <section className="rounded-3xl border border-lutz-fog/15 bg-lutz-steel/30 p-6 sm:p-8">
        <div className="grid gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase text-lutz-fog">
              Pontos de atenção
            </h3>
            <ul className="mt-5 grid gap-3">
              {result.attentionPoints.map((point) => (
                <li
                  className="rounded-2xl border border-lutz-fog/15 bg-lutz-obsidian/35 p-4 text-sm leading-6 text-lutz-ivory/75"
                  key={point}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-lutz-fog/15 pt-6">
            <h3 className="text-sm font-semibold uppercase text-lutz-fog">
              Próximo passo recomendado
            </h3>
            <p className="mt-4 text-base leading-7 text-lutz-ivory/80">
              {result.recommendedNextStep}
            </p>
          </div>

          <div className="rounded-2xl border border-lutz-fog/25 bg-lutz-slate/20 p-4 text-sm leading-6 text-lutz-ivory/75">
            {result.institutionalNotice}
          </div>

          <div className="flex flex-col gap-4 border-t border-lutz-fog/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-lutz-ivory px-6 py-3 text-sm font-semibold text-lutz-obsidian transition hover:bg-lutz-fog focus:outline-none focus:ring-2 focus:ring-lutz-ivory/50"
              onClick={onRequestAnalysis}
              type="button"
            >
              Solicitar análise da marca
            </button>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-lutz-fog/20 px-5 py-3 text-sm text-lutz-fog transition hover:border-lutz-fog/45 hover:text-lutz-ivory focus:outline-none focus:ring-2 focus:ring-lutz-fog/35"
              onClick={onRestart}
              type="button"
            >
              Refazer leitura
            </button>
          </div>

          {ctaMessageVisible ? (
            <p className="text-sm leading-6 text-lutz-fog/75">
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
