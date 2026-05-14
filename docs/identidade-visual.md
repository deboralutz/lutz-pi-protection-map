# Identidade visual

## Direção

A interface deve parecer um ambiente protegido: escuro, preciso, silencioso e institucional. A estética evita excesso de elementos e usa contraste alto para favorecer leitura.

A Lutz PI pede sofisticação, leitura limpa, densidade institucional e pouca agressividade visual. A linguagem visual deve funcionar como um sistema vivo, capaz de sustentar site, diagnóstico, documentos, posts, apresentações e futuras páginas de serviço.

## Paleta

### Tokens primários

| Nome | Hex | Uso |
| --- | --- | --- |
| Obsidian Black | `#111315` | fundo principal |
| Soft Ivory | `#F3F1EC` | texto claro e marca sobre fundo escuro |
| Slate Blue | `#5C6B73` | destaque institucional |
| Deep Steel | `#3E4A52` | superfícies institucionais |
| Fog Blue | `#A7B3BB` | linhas, divisores e sistemas |

### Primitive tokens

```text
color/base/obsidian
color/base/ivory
color/base/slate
color/base/steel
color/base/fog
```

### Semantic tokens

```text
color/bg/primary
color/text/primary
color/text/inverse
color/border/default
color/accent/primary
color/surface/institutional
```

## Tipografia

Fonte preferencial: Satoshi.

Fallback técnico atual: `Satoshi`, `Inter`, `Aptos`, `Segoe UI`, `system-ui`, `sans-serif`.

| Estilo | Uso |
| --- | --- |
| Display XL | Hero |
| Heading L | Seções |
| Heading M | Cards |
| Body L | Texto institucional |
| Body M | Texto padrão |
| Caption | Detalhes |
| Label | Botões e formulários |

Headings devem usar peso Medium ou Bold. Corpo deve usar peso Regular, line-height confortável e bastante respiro.

## Grid e espaçamento

Escala base:

```text
4
8
12
16
24
32
48
64
96
```

## Radius

Escala recomendada:

```text
4
8
12
16
24
```

A marca combina com cantos suaves, geometria precisa e pouca rigidez extrema.

## Efeitos

Sombras devem ser minimalistas, com profundidade leve e contraste elegante. Evitar estética colorida, excessivamente promocional ou com ruído visual alto.

## Logo system

O logo institucional fica em `public/lutz-pi-logo.svg` e é aplicado no topo e no primeiro plano visual do hero.

Estrutura futura do sistema de logo:

- Logo Master: versão principal, horizontal e vertical.
- Variations: dark, light, monochrome e icon only.
- Clear Space: área mínima de respiro.
- Improper Usage: distorção, sombra, outline, cores erradas e compressão.

O ativo final de marca deve ser reconstruído em vetor no Figma, com grid, proporção, optical spacing, teste de redução e variantes. O SVG exportado dessa versão master deve substituir o ativo técnico atual quando estiver pronto.

## Componentes

Componentes prioritários:

- Buttons: primary, secondary, ghost e institutional.
- Cards: serviço, artigo, diagnóstico e CTA.
- Navigation: navbar, footer e menu mobile.
- Social Templates: post, carrossel, manifesto, diagnóstico, jurisprudência e atualização INPI.

## Site system

Estrutura de página:

- Hero.
- Sections.
- FAQ.
- CTA.
- Serviços.
- Processo.
- Contato.
- Footer.

## Content system

Templates importantes:

- artigo institucional;
- manifesto;
- explicação jurídica;
- reels cover;
- carrossel;
- documento técnico;
- parecer visual;
- apresentação.

## Brand guidelines

O manual vivo da marca deve reunir missão, posicionamento, tom visual, linguagem, aplicação e exemplos.

## Comportamento visual

- Espaçamento generoso.
- Bordas finas e discretas.
- Baixo ruído visual.
- Tipografia institucional com Satoshi como direção principal.
- Símbolo de portal como metáfora de acesso, limite e proteção.
- Botões calmos, sem linguagem de urgência.
