# 🏛️ Arquitetura DNC — Landing Page

> Landing page profissional para empresa de arquitetura residencial e comercial,
> desenvolvida como **Projeto 01** da [Escola DNC](https://www.escoladnc.com.br/).

[![Netlify Status](https://img.shields.io/badge/deploy-netlify-brightgreen)](https://dnc-landing-page-projeto.netlify.app/)
[![HTML5](https://img.shields.io/badge/HTML5-semantic-orange)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-animated%20gradient-blueviolet)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JS](https://img.shields.io/badge/JavaScript-ES2020-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 🚀 Demo

**Deploy:** https://dnc-landing-page-projeto.netlify.app/
**Leads (Google Sheets):** https://docs.google.com/spreadsheets/d/1oZ7g1jxU2eX-8p1RLZiv4Pv0ittb_dZd8cYIzijMLmU/edit?usp=sharing

---

## ✨ Funcionalidades

| Funcionalidade | Detalhes |
|---|---|
| **Gradient CSS animado** | Background vivo com `background-position` interpolado em 12 s (8 cores, 400% size) |
| **Navbar dinâmica** | Transparente no topo → frost glass ao rolar; menu hamburguer no mobile |
| **Contador animado** | Números sobem do zero com easing cúbico via `IntersectionObserver` + `requestAnimationFrame` |
| **Scroll Reveal** | Seções entram com fade + `translateY` ao chegar na viewport |
| **Formulário validado** | Validação pura em JS — feedback visual por campo em tempo real |
| **Select de serviço** | Campo extra para qualificação do lead (6 opções) |
| **Seção de Serviços** | 6 cards com hover animado (`translateY` + glow border) |
| **Depoimentos** | 3 cards com avatares gerados por iniciais |
| **Footer completo** | Links, redes sociais, copyright |
| **Responsivo** | Breakpoints em 1024 px, 768 px e 480 px; hero stacks 1 coluna no celular |
| **Acessibilidade** | `aria-label`, `aria-expanded`, `role="alert"`, `loading="lazy"` |

---

## 🎨 Paleta de Cores

| Token CSS | Cor | Uso |
|---|---|---|
| `--accent` | `#ff6b35` | Botões, destaques, hover |
| `--accent-2` | `#ffd700` | Stars, gradient highlight |
| `--accent-3` | `#00e5ff` | Contraste acentuado |
| Gradient Hero | `#0f0c29 → #302b63 → #1a0533 → #6d0099 → #0080c8 → #00c2a8 → #7b2fbe` | Fundo animado do hero |
| `--color-bg` | `#0d0d0d` | Fundo geral |
| `--color-surface` | `#161616` | Cards e painéis |

---

## 🗂️ Estrutura do Projeto

```
projeto-landing-page-DNC/
├── index.html      ← HTML5 semântico (nav, section, article, footer)
├── style.css       ← Estilos + gradient animado + responsivo
├── script.js       ← Navbar, reveal, contadores, menu mobile, form validation
├── img/
│   └── image 1.png ← Imagem da seção "Sobre"
└── README.md
```

---

## 🛠️ Tecnologias

- **HTML5** — semântico (`<nav>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** — Variáveis (`--tokens`), Grid, Flexbox, `clamp()`, `keyframes`, `backdrop-filter`
- **JavaScript ES2020** — `IntersectionObserver`, `requestAnimationFrame`, validação sem dependências
- **Google Fonts** — Inter + Playfair Display
- **SheetMonkey** — backend de formulário serverless

---

## 💻 Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Giovanne-Portella/projeto-landing-page-DNC.git

# 2. Entre na pasta
cd projeto-landing-page-DNC

# 3. Abra com Live Server (VS Code) ou diretamente no navegador
#    Windows:
start index.html
#    macOS:
open index.html
```

Nenhuma dependência ou build tool necessária.

---

## 🌿 Branches

| Branch | Propósito |
|---|---|
| `main` | Produção — código estável |
| `hml` | Homologação — pré-release e testes finais |
| `dev` | Desenvolvimento — novas features e experimentos |

---

## 📄 Licença

Desenvolvido para fins educacionais na **Escola DNC**.
© 2024 Giovanne Portella. Todos os direitos reservados.

