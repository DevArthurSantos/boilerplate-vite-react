# React+Vite boilerplate
Este é um boilerplate básico para iniciar um projeto React com Vite.
Ele inclui as configurações básicas necessárias para começar a desenvolver
seu aplicativo React de forma rápida e eficiente.

# Estrutura do projeto

```
  ┌──────────────────────────────────────────────────────────────────┐
  │
  ├── public - Contém arquivos estáticos que são servidos publicamente.
  │    └── assets - Contém recursos estáticos que serão utilizados pela aplicação
  │          └── images - Contém as imagens usadas pela aplicação.
  │                 ├── svg
  │                 └── png
  │          └── mídia - Contém arquivos de mídia usadas pela aplicação.
  │                 ├── mp3
  │                 ├── mp4
  │                 └── others
  │
  ├── src - Código-fonte
  │    ├── components - Componentes usados na aplicação.
  │           ├── patterns - Componentes de alto nivel como formulários, modais, header, footer e outros.
  │           └── shared - Componentes que são usados para construir a UI da aplicação.
  │
  │    ├── infra - Contém arquivos de infraestrutura, como estilos globais, tipos e utilitários.
  │           ├── styles - Contém os estilos usados ​​pela aplicação.
  │           ├── types - Contém arquivos de tipos TypeScript
  │                 ├── @DTS - Para definições de tipos para bibliotecas de terceiros "*.d.ts"
  │                 └──  * - Para tipos personalizados
  │           └── utils - Contém utilitários.
  │                 ├── Api - Serviço usado para a comunicar com APIs.
  │                 └── Context - Serviço usado para o contextos da aplicação.
  │                 └──  Hooks
  │                       └── useAppContext - Hook para utilizar o contextos da aplicação.
  │
  │    ├── app.tsx - Arquivo principal da aplicação, onde os componentes raiz são montados.
  │    ├── router.tsx - arquivo que contém a configuração de rotas da aplicação.
  │    └── pages - Contém as páginas da aplicação, que são os componentes que são renderizados em cada rota.
  └──────────────────────────────────────────────────────────────────┘
```

# Iniciar boilerplate

"usando yarn:" "yarn"

"usando npm:" "npm install"

"usando pnpm*:" "pnpm install"