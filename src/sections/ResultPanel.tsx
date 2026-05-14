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
    <div className="mt-20 border-t border-lutz-fog/16 pt-12 lg:pt-16">
      <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
        <aside>
          <p className="text-sm font-medium uppercase text-lutz-fog/80">
            Estado principal
          </p>
          <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] text-lutz-ivory sm:text-6xl">
            {result.stateLabel}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-lutz-fog/72">
            {result.summary}
          </p>
        </aside>

        <section className="space-y-12">
          <div className="border-y border-lutz-fog/14">
            <h3 className="py-5 text-sm font-medium uppercase text-lutz-fog/80">
              Pontos de atenção
            </h3>
            <ul className="border-t border-lutz-fog/12">
              {result.attentionPoints.map((point, index) => (
                <li
                  className="grid gap-4 border-b border-lutz-fog/12 py-6 last:border-b-0 sm:grid-cols-[4rem_1fr]"
                  key={point}
                >
                  <span className="text-sm text-lutz-fog/42">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-2xl text-base leading-7 text-lutz-ivory/78">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase text-lutz-fog/80">
              Próximo passo recomendado
            </h3>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-lutz-ivory/82">
              {result.recommendedNextStep}
            </p>
          </div>

          <p className="border-l border-lutz-fog/24 pl-5 text-sm leading-6 text-lutz-fog/68">
            {result.institutionalNotice}
          </p>

          <div className="flex flex-col gap-4 border-t border-lutz-fog/14 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-lutz-ivory px-7 py-3 text-sm font-medium text-lutz-obsidian transition hover:bg-lutz-fog focus:outline-none focus:ring-2 focus:ring-lutz-ivory/50"
              onClick={onRequestAnalysis}
              type="button"
            >
              Solicitar análise da marca
            </button>
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-full px-1 text-sm text-lutz-fog/65 transition hover:text-lutz-ivory focus:outline-none focus:ring-2 focus:ring-lutz-fog/35"
              onClick={onRestart}
              type="button"
            >
              Refazer leitura
            </button>
          </div>

          {ctaMessageVisible ? (
            <p className="max-w-2xl text-sm leading-6 text-lutz-fog/65">
              Este protótipo não envia respostas automaticamente. Para a próxima
              etapa, a análise profissional deve ser solicitada por um canal
              institucional da Lutz PI.
            </p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
