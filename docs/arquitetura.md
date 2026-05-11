# Arquitetura

## Direção técnica

O protótipo público utiliza Next.js com App Router, React e Tailwind CSS. A primeira versão permanece local, sem banco de dados, autenticação, serviços pagos ou dependências complexas.

## Estrutura

- `src/app`: layout raiz, página pública `/` e integração de estilos globais.
- `src/components`: componentes visuais reutilizáveis.
- `src/sections`: seções compostas da experiência pública.
- `src/styles`: estilos globais, tema visual e utilitários de superfície.
- `src/data`: perguntas e opções do diagnóstico.
- `src/lib`: motor diagnóstico e regras de classificação.
- `src/types`: contratos TypeScript do diagnóstico.

## Processamento

As respostas são mantidas em estado local do React durante a sessão. O motor em `src/lib/diagnostic.ts` calcula a leitura inicial no navegador e não envia dados para servidor.
