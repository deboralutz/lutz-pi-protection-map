"use client";

import { useMemo, useState } from "react";

import { diagnosticQuestions } from "@/data/questions";
import { evaluateDiagnostic } from "@/lib/diagnostic";
import type { DiagnosticAnswers } from "@/types/diagnostic";

import { ResultPanel } from "./ResultPanel";

export function DiagnosticExperience() {
  const [answers, setAnswers] = useState<DiagnosticAnswers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [ctaMessageVisible, setCtaMessageVisible] = useState(false);

  const currentQuestion = diagnosticQuestions[currentIndex];
  const selectedAnswer = answers[currentQuestion.id];
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / diagnosticQuestions.length) * 100);

  const result = useMemo(
    () => evaluateDiagnostic(answers, diagnosticQuestions),
    [answers],
  );

  function handleSelect(value: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: value,
    }));
  }

  function handleNext() {
    if (!selectedAnswer) {
      return;
    }

    if (currentIndex === diagnosticQuestions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
  }

  function handleBack() {
    if (showResult) {
      setShowResult(false);
      return;
    }

    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  function handleRestart() {
    setAnswers({});
    setCurrentIndex(0);
    setShowResult(false);
    setCtaMessageVisible(false);
  }

  return (
    <section
      className="bg-lutz-obsidian px-5 py-20 text-lutz-ivory sm:px-8 sm:py-24 lg:px-12"
      id="diagnostico"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div>
            <p className="text-sm font-medium uppercase text-lutz-fog/85">
              Diagnóstico orientativo
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.04] text-lutz-ivory sm:text-5xl lg:text-6xl">
              Localize o estágio atual da sua marca.
            </h2>
          </div>
        </div>

        {showResult ? (
          <ResultPanel
            ctaMessageVisible={ctaMessageVisible}
            onRequestAnalysis={() => setCtaMessageVisible(true)}
            onRestart={handleRestart}
            result={result}
          />
        ) : (
          <div className="mt-20 grid gap-14 border-t border-lutz-fog/16 pt-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20 lg:pt-14">
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="flex items-center justify-between gap-6 text-sm text-lutz-fog/75">
                <p className="font-medium uppercase">
                  Etapa {currentIndex + 1} de {diagnosticQuestions.length}
                </p>
                <p>{progress}%</p>
              </div>
              <div
                aria-label="Progresso do diagnóstico"
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={progress}
                className="mt-5 h-px bg-lutz-fog/18"
                role="progressbar"
              >
                <div
                  className="h-px bg-lutz-fog/75 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-8 max-w-sm text-base leading-7 text-lutz-fog/60">
                Vamos localizar a presença atual da marca sem transformar esta
                leitura em parecer jurídico.
              </p>
            </aside>

            <article>
              <p className="text-sm font-medium uppercase text-lutz-fog/80">
                {currentQuestion.eyebrow}
              </p>
              <h3 className="mt-6 max-w-4xl text-3xl font-medium leading-[1.08] text-lutz-ivory sm:text-5xl">
                {currentQuestion.title}
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-7 text-lutz-fog/68 sm:text-lg">
                {currentQuestion.helper}
              </p>

              <div className="mt-12 border-y border-lutz-fog/14">
                {currentQuestion.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === option.value;

                  return (
                    <button
                      aria-pressed={isSelected}
                      className={[
                        "group grid w-full gap-4 border-b border-lutz-fog/12 py-7 text-left transition last:border-b-0 focus:outline-none focus:ring-2 focus:ring-lutz-fog/35 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:px-2",
                        isSelected
                          ? "text-lutz-ivory"
                          : "text-lutz-ivory/82 hover:text-lutz-ivory",
                      ].join(" ")}
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      type="button"
                    >
                      <span className="text-sm text-lutz-fog/45 transition group-hover:text-lutz-fog/70">
                        {String(optionIndex + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-xl font-medium leading-snug">
                          {option.label}
                        </span>
                        <span className="mt-3 block max-w-2xl text-base leading-7 text-lutz-fog/62">
                          {option.description}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={[
                          "mt-1 hidden h-2.5 w-2.5 rounded-full transition sm:block",
                          isSelected ? "bg-lutz-ivory" : "bg-lutz-fog/20",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-1 text-sm text-lutz-fog/65 transition hover:text-lutz-ivory focus:outline-none focus:ring-2 focus:ring-lutz-fog/35 disabled:cursor-not-allowed disabled:opacity-30"
                  disabled={currentIndex === 0}
                  onClick={handleBack}
                  type="button"
                >
                  Voltar
                </button>
                <button
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-lutz-ivory px-7 py-3 text-sm font-medium text-lutz-obsidian transition hover:bg-lutz-fog focus:outline-none focus:ring-2 focus:ring-lutz-ivory/50 disabled:cursor-not-allowed disabled:opacity-35"
                  disabled={!selectedAnswer}
                  onClick={handleNext}
                  type="button"
                >
                  {currentIndex === diagnosticQuestions.length - 1
                    ? "Ver resultado"
                    : "Continuar"}
                </button>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
