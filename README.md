# DocSpace

Site estático feito com Vite + Tailwind que reúne conteúdos em português sobre Sistema Solar, luas, estrelas, galáxias e lentes gravitacionais. Inclui grids interativos com modais, um banner rotativo de missões e páginas de apoio (artigos, documentação longa, sobre e contatos).

## Páginas e features
- Home (`index.html`): grade de planetas com modal de descrição (`src/main.js`), banner de missões rotativo (imagens/títulos/textos embutidos no próprio HTML), rodapé simples.
- Documentação (`src/documentation.html` + `src/documentario.js`): coleções de planetas, luas e estrelas acionando modais, seções textuais extensas (estrelas, galáxias, buracos negros) e vídeo YouTube embed.
- Artigos (`src/articles.html`): artigo ilustrado sobre lente gravitacional com GIFs/animações.
- Sobre (`src/about.html`): manifesto do projeto em PT-BR.
- Contato (`src/contact.html`): cartões de perfis do Instagram com imagens locais; `contact.js` lista redes mas ainda não é usado.
- Assets em `src/images/` (planetas, luas, anéis, GIFs de lente gravitacional, fotos de missões e perfis).

## Stack
- Vite 7.x
- Tailwind CSS 4 via plugin `@tailwindcss/vite` (entrada em `src/style.css`, demais *.css apenas importam Tailwind).
- JavaScript vanilla, sem frameworks.

## Como rodar
1. Node 18+ (o `package.json` fixa `node@^25.6.0`; alinhe sua versão ou ajuste a dependência).  
2. `npm install`  
3. `npm run dev` → http://localhost:5173  
4. `npm run build` para empacotar; `npm run preview` para testar o build.

## Estrutura rápida
- `index.html` — landing com banner e grid.
- `src/main.js` — dados e lógica de modais da Home.
- `src/documentation.html` / `src/documentario.js` — página longa com grids e modais.
- `src/articles.html` — artigo sobre lente gravitacional.
- `src/about.html`, `src/contact.html` — páginas de apoio.
- `src/images/` — sprites, fotos e GIFs.
- `public/` — estático padrão do Vite (atualmente vazio).

## Onde editar conteúdos
- Textos dos planetas da Home: array `planets` em `src/main.js`.
- Textos de planetas/luas/estrelas na documentação: arrays em `src/documentario.js`.
- Banner de missões: arrays `BannerImages`, `BannerTitles`, `BannerDescriptions` embutidos em `index.html`.
- Artigo: texto e figuras direto em `src/articles.html`.
- Manifesto e contatos: `src/about.html`, `src/contact.html`.

## Problemas conhecidos / backlog
- Mojibake (acentos quebrados) nos textos PT-BR — salvar `*.html` e `*.js` em UTF-8 corrige os “Ã©/Ã¡”.
- IDs duplicados (`id="card"`) e `<head>` mal fechado dentro do `<header>` em várias páginas; refatorar para tags válidas e classes.
- Sem acessibilidade completa (foco no modal, ARIA, ordem tab).
- Dados de banner e textos ficam hardcoded; considerar mover para JSON e fetch estático.

---

# DocSpace (English)

Static Vite + Tailwind site that showcases Solar System objects and astronomy content (PT-BR). It ships interactive grids with modals, a rotating missions banner, and support pages (articles, documentation, about, contact).

## Pages & features
- Home (`index.html`): planet grid with modal descriptions (`src/main.js`), rotating missions banner (inline data), simple footer.
- Documentation (`src/documentation.html` + `src/documentario.js`): planet/moon/star grids opening modals, long-form sections on stars, galaxies, black holes, plus embedded YouTube video.
- Articles (`src/articles.html`): illustrated piece on gravitational lensing with GIFs.
- About (`src/about.html`): project manifesto in Portuguese.
- Contact (`src/contact.html`): Instagram profile cards fed by local images; `contact.js` lists networks but isn’t wired yet.
- Assets live in `src/images/` (planets, moons, rings, lensing GIFs, mission photos, profile pics).

## Stack
- Vite 7.x
- Tailwind CSS 4 via `@tailwindcss/vite`
- Vanilla JS

## Run locally
1. Node 18+ (repo declares `node@^25.6.0`; match your runtime or adjust).  
2. `npm install`  
3. `npm run dev` → http://localhost:5173  
4. `npm run build` then `npm run preview` to test the bundle.

## Structure at a glance
- `index.html` — landing with banner & grid.
- `src/main.js` — modal data/logic for Home.
- `src/documentation.html` / `src/documentario.js` — long doc page with grids & modals.
- `src/articles.html` — gravitational lensing article.
- `src/about.html`, `src/contact.html` — supporting pages.
- `src/images/` — sprites, photos, GIF assets.
- `public/` — standard Vite static folder (empty now).

## Editable content
- Home planet copy: `planets` array in `src/main.js`.
- Documentation copy: arrays in `src/documentario.js`.
- Missions banner: inline arrays in `index.html`.
- Article body/media: `src/articles.html`.
- About/Contact text: `src/about.html`, `src/contact.html`.

## Known issues / backlog
- Broken diacritics (mojibake) — save source files as UTF-8.
- Duplicate IDs and mis-nested `<head>` tags inside headers — clean up markup and swap IDs for classes.
- Missing accessibility for modals (focus trap, ARIA).
- Inline data — consider JSON + fetch for easier maintenance.
