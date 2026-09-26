# Inventário — 25/09/2026

## Repositório

- Pasta `Rabik/` sem git, sem `package.json`, sem `AGENTS.md`/`CLAUDE.md`. Continha só o SDD.
- Durante a implementação, o Erick adicionou `logo_rabik.png` na raiz (1536 × 1024, preto sobre branco). Mantido no lugar como original.
- Stack escolhida: Astro 7 + TypeScript + CSS com tokens (recomendação do SDD §15.1 para repositório vazio).

## Sites acessados (todos responderam 200 em 25/09/2026)

| URL | Resultado | Uso |
|---|---|---|
| https://vault-scanner.vercel.app/ | Redireciona para a tela pública de acesso. Área interna exige conta: **não acessada**. | Projeto publicado (produto próprio · em desenvolvimento) |
| https://trabalho-map-mat.vercel.app/ | Página longa com capítulos, simulador, gráfico SVG, fórmulas KaTeX. | Projeto publicado (educacional · interação) |
| https://aristoteles-no-liceu.vercel.app/ | Tela de carregamento, depois narrativa ligada à rolagem sobre vídeo de fundo e encerramento com o título da obra. | Projeto publicado (educacional · conteúdo) |
| https://erick-rocha-web.github.io/Tag-Flow/ | Busca "imagem" devolve `<img>`, descrição e exemplo. | Projeto publicado (pessoal · educacional) |
| https://animalandiapet.vercel.app/ | Demonstração para pet shop. | **Rascunho** — sem autorização de divulgação registrada |
| https://erick-rocha-web.github.io/Portfolio/ | Portfólio pessoal do Erick; páginas de caso com "Como isto foi verificado". | Fonte de fatos e links de repositório |
| https://joaodev-pro.vercel.app/ | Referência visual (escura, navegação compacta). | Só atmosfera; nada copiado |

## Fatos confirmados

- Repositórios públicos (HTTP 200): `erick-rocha-web/trabalho_map_mat`, `erick-rocha-web/aristoteles`, `erick-rocha-web/Tag-Flow`.
- O poder do tempo: `package.json` confirma React 19, TypeScript, Vite, GSAP, KaTeX, Vitest, Playwright. Trabalho de MAP de Matemática, 1ª série, SESI.
- Aristóteles no Liceu: a página carrega GSAP, ScrollTrigger e ScrollToPlugin (cdnjs); repositório é HTML/CSS/JS.
- TagFlow: repositório é HTML/CSS/JS, sem build.
- VaultScanner: arquivos `/_next/` indicam Next.js (**deduzido**); o repositório não é público.
- GitHub do Erick: https://github.com/erick-rocha-web (linkado pelo próprio portfólio).

## Encontrado, mas **não** usado como contato da Rabik

- O portfólio pessoal lista o WhatsApp `+55 61 98364-5763` e o e-mail `erick.rocha.web@gmail.com`. São contatos pessoais do Erick, não confirmados como canais comerciais da Rabik. Ficaram fora da configuração (ver `PENDENCIAS.md`).

## Faltando

- WhatsApp comercial confirmado, domínio, responsável para o aviso de privacidade, provedor de hospedagem, autorização da Animalandia, retrato do Erick (opcional).

## Atualização v2 — 25/09/2026

- Nova especificação: `Specs/SDD_Rabik_Claude_Code_versao2.md` (landing page comercial clara; portfólio fora do site).
- Stack mantida (Astro 7 + TypeScript). Portfólio da v1 movido para `drafts/portfolio-v1/`.
- Os sites de projetos listados acima continuam como referência interna; nenhum aparece no site.
