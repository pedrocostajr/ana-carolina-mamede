# Novo Site — Dra. Ana Carolina Mamede

Site institucional e blog médico da **Dra. Ana Carolina Mamede** (Endocrinologia e Metabologia · CRM-ES 22.237 · RQE 15.266).

Desenvolvido em **Astro v5** com geração estática (SSG), componentes reutilizáveis, design responsivo baseado nos mockups aprovados, conformidade com a LGPD e regras éticas do Conselho Federal de Medicina (CFM).

## 🚀 Tecnologias

- **Astro 5**: SSG ultra-rápido, Core Web Vitals otimizados (PageSpeed 95+)
- **TypeScript**: Tipagem estática rigorosa
- **Content Collections**: Blog médico gerenciado em Markdown (`src/content/blog/`)
- **SEO & Dados Estruturados**: Schemas JSON-LD (`Physician`, `MedicalBusiness`, `FAQPage`, `BreadcrumbList`), Open Graph, Twitter Cards, Sitemap automático (`@astrojs/sitemap`) e robots.txt
- **Rastreamento GA4**: Eventos personalizados (`whatsapp_click`, `generate_lead`, `pdf_download`) com números e mensagens parametrizados por página
- **Fontes Self-hosted**: *Cinzel* e *Roboto* com `font-display: swap`

## 📦 Estrutura de Páginas

- `/` — Página inicial completa
- `/sobre` — A Dra. Ana Carolina Mamede, formação e títulos
- `/consulta-online` — Telemedicina para todo o Brasil
- `/areas` — Índice de áreas de atuação
  - `/obesidade` — Obesidade e emagrecimento saudável
  - `/diabetes` — Diabetes e pré-diabetes
  - `/tireoide` — Distúrbios da tireoide
  - `/menopausa` — Climatério e menopausa
  - `/colesterol` — Colesterol e dislipidemia
- `/blog` — Listagem com filtros por categoria e busca
  - `/blog/categoria/[area]` — Artigos por área
  - `/blog/[slug]` — Artigo individual com índice (TOC) e autor
- `/material-gratuito` — Landing page do guia "Metabolismo em Equilíbrio" (captura de lead com consentimento LGPD)
- `/obrigado` — Página de confirmação e download do PDF (`noindex`)
- `/contato` — Consultório em Guarapari/ES, horários e WhatsApp
- `/politica-de-privacidade` — Termos em total conformidade com a LGPD
- `/404` — Página de erro personalizada

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento
npm run dev

# Gerar build estático de produção
npm run build

# Pré-visualizar o build de produção localmente
npm run preview
```
