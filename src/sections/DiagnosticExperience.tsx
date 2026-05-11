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
      className="bg-[#1A1A1B] px-5 py-20 text-white sm:px-8 lg:px-12"
      id="diagnostico"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#C8C8C2]">
              Diagnóstico orientativo
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Localize a relação entre presença pública e proteção formal.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/52">
            As respostas ficam apenas no navegador durante esta leitura. Nenhum
            cadastro é necessário para ver o resultado.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#202123]/90 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:p-6 lg:p-8">
          {showResult ? (
            <ResultPanel
              ctaMessageVisible={ctaMessageVisible}
              onRequestAnalysis={() => setCtaMessageVisible(true)}
              onRestart={handleRestart}
              result={result}
            />
          ) : (
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#C8C8C2]">
                  Etapa {currentIndex + 1} de {diagnosticQuestions.length}
                </p>
                <div
                  aria-label="Progresso do diagnóstico"
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={progress}
                  className="mt-5 h-2 rounded-full bg-white/10"
                  role="progressbar"
                >
                  <div
                    className="h-full rounded-full bg-[#C8C8C2] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-6 text-sm leading-6 text-white/58">
                  Vamos localizar a presença atual da marca sem transformar esta
                  leitura em parecer jurídico.
                </p>
              </aside>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#1A1A1B] p-5 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8C8C2]">
                  {currentQuestion.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {currentQuestion.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  {currentQuestion.helper}
                </p>

                <div className="mt-8 grid gap-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option.value;

                    return (
                      <button
                        aria-pressed={isSelected}
                        className={[
                          "min-h-20 rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#C8C8C2]/40",
                          isSelected
                            ? "border-[#C8C8C2]/70 bg-[#C8C8C2]/12"
                            : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]",
                        ].join(" ")}
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        type="button"
                      >
                        <span className="block text-base font-medium text-white">
                          {option.label}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-white/55">
                          {option.description}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/35 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-35"
                    disabled={currentIndex === 0}
                    onClick={handleBack}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1B] transition hover:bg-[#C8C8C2] focus:outline-none focus:ring-2 focus:ring-white/50 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!selectedAnswer}
                    onClick={handleNext}
                    type="button"
                  >
                    {currentIndex === diagnosticQuestions.length - 1
                      ? "Ver resultado"
                      : "Continuar"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

