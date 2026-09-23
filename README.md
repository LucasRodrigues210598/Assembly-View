# 📐 MobiBuild Pro

**Sistema de Gestão de Projetos de Móveis**  
_Painel para Projetistas e Montadores_

---

## 🎯 Visão Geral

O MobiBuild é uma plataforma completa para gestão do ciclo de vida de projetos de móveis, desde o projeto inicial (feito no Promob ou outro software) até a montagem final em obra.

### Dois Painéis Principais:

1. **Painel do Projetista** - Cadastro de projetos, upload DXF, definição de módulos, lista de materiais e instruções
2. **Painel do Montador** - Visualização 3D, checklist de peças, guia passo a passo de montagem

---

## 🏗️ Arquitetura

- **Frontend:** Next.js 14 (App Router) + React 18 + TypeScript
- **UI:** TailwindCSS + componentes customizados (tema escuro)
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Visualização 3D:** Three.js com React Three Fiber
- **Validação:** Zod + React Hook Form

---

## 📁 Estrutura do Projeto

```
mobibuild/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # Home
│   │   ├── projects/         # Painel Projetista
│   │   │   ├── new/          # Novo projeto
│   │   │   └── [projectId]/  # Detalhes do projeto
│   │   └── montador/         # Painel Montador
│   ├── components/           # Componentes React
│   │   ├── ui/              # Components básicos (botões, cards)
│   │   ├── visualization/    # Visualizador 3D
│   │   └── montador/        # Checklist, progresso montagem
│   ├── hooks/                # Hooks customizados
│   │   ├── useMontadorChecklist.ts
│   │   ├── useMontagemProgress.ts
│   │   ├── useMontadorVisualization.ts
│   │   └── useDXFUploader.ts
│   ├── lib/                  # Utilities e helpers
│   │   ├── bomGenerator.ts     # Geração de lista de materiais
│   │   └── dxfParser.ts        # Parser DXF (placeholder)
│   ├── types/                # TypeScript interfaces
│   │   ├── project.ts          # Tipos principais (Project, Module, Part)
│   │   └── montador.ts         # Tipos específicos do montador
│   └── config/               # Configurações globais
│       └── firebase.ts         # Inicialização Firebase
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Setup do Projeto

### 1. Pré-requisitos

- Node.js >= 18
- npm ou yarn

### 2. Instalação

```bash
cd mobibuild
npm install
```

### 3. Configurar Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto "mobibuild-pro"
3. No menu do projeto, clique em **Web App** e adicione app Web:
   - Copie o script de inicialização
   - Substitua no arquivo `src/config/firebase.ts`

```typescript
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
```

4. **Importante:** Ative o Firebase Storage para uploads DXF
5. Crie um `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Desenvolvimento

```bash
npm run dev
```

Acessar em: http://localhost:3000

---

## 📐 Funcionalidades Detalhadas

### Painel do Projetista

#### ✅ Cadastro de Projeto
- Nome do projeto (ex: "Armário Aéreo 2 Portas")
- Dados do cliente (nome, endereço, prazo)
- Prioridade (alta/média/baixa)
- Upload DXF do Promob

#### ✅ Módulos
- Armário inferior / Superior / Gaveteiro, etc.
- Configurar para cada módulo:
  - Largura, altura, profundidade
  - Material (MDP, HDF, compensado)
  - Acabamento (cores, texturas)
  - Ferragens incluídas

#### ✅ Lista de Materiais (BOM)
Geração automática da lista de peças:
- Código único para cada peça (Lateral, Tampe, Prateleira, etc.)
- Dimensões AxLxP
- Tipo de material e quantidade
- Separação entre madeira, metal, acabamentos

#### ✅ Passo a Passo de Montagem
Definir sequência de montagem:
1. Título da etapa ("Fixar a prateleira")
2. Descrição detalhada
3. Dicas e observações
4. Ferramentas necessárias
5. Imagens ilustrativas (opcional)

#### ✅ Atribuição de Montadores
- Listar montadores disponíveis
- Definir prazo para cada serviço
- Observações gerais do projeto

---

### Painel do Montador

#### 🎨 Visualização 3D
- Rotação completa (360° horizontal + vertical)
- Zoom in/out
- **Modo explosão** - peças separadas para ver estrutura
- Navegação entre módulos

#### ✅ Checklist de Peças
Lista interativa de todas as peças:
- Checkbox para marcar/conferir cada peça
- Barra de progresso global ("7 de 15 peças = 47%")
- Display de dimensões e material

#### 📋 Guia de Montagem
Passo a passo na ordem definida pelo projetista:
- Etapa atual destacada
- Instruções claras e objetivas
- Dicas importantes com ícones
- Lista de ferramentas necessárias por etapa
- Botões para navegar entre etapas
- Opção de pular para próxima

#### ℹ️ Informações do Projeto
- Endereço do cliente
- Prazo de entrega
- Observações do projetista
- Status do projeto (pendente/produção/montado)

---

## 🔑 Destaques Técnicos

### Performance
- Lazy loading de imagens e módulos
- Virtualização de listas longas
- Memoização de componentes 3D

### Offline Support
- Firebase com Firestore offline persistence
- Service Worker para cache (próximo passo)

### Upload DXF do Promob
- Suporte a arquivos .dxf até 10MB
- Parser robusto (atualmente placeholder, pronto para integrar biblioteca real)
- Preview e validação antes do processamento

---

## 📦 Roadmap

### ✅ Feito no MVP
- [x] Estrutura de diretórios
- [x] Tipos TypeScript completos
- [x] Configuração Firebase
- [x] Hooks customizados (checklist, progresso, visualização)
- [x] Upload DXF com progress bar
- [x] Geração automática BOM
- [x] Layout mobile-first

### 🚀 Próximos Passos
1. Implementar autenticação Firebase (Google Login + Email/Password)
2. Criar formulário de novo projeto
3. Implementar visualizador 3D com Three.js
4. Interface de upload DXF do Promob
5. Painel projetista completo
6. Painel montador completo

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Next.js | 14.2.5 | Framework React + App Router |
| React | 18.3.1 | UI Components |
| TypeScript | 5.5.3 | Tipagem forte |
| TailwindCSS | 3.4.6 | Estilização utilitária |
| Firebase | 10.12.2 | Auth, DB, Storage |
| Three.js | 0.167.1 | Visualização 3D |
| React Three Fiber | 8.1.7 | React + Three.js |
| React Hook Form | 7.53.0 | Formulários |
| Zod | 3.23.8 | Validação de schema |

---

## 📝 Notas Importantes

### Para Desenvolvedores
- O parser DXF atual é um placeholder. Use biblioteca como [dxf-parser](https://github.com/KonstantinKorotkevich/dxf-parser) ou integração com Three.js para ler geometria real.
- Os hooks estão otimizados para mobile performance (uso mínimo de re-renders).

### Para Montadores em Obra
- O sistema foi desenhado para uso offline: o montador pode continuar a trabalhar mesmo sem internet, e as ações serão sincronizadas quando houver conexão.

---

## 📧 Suporte & Contribuição

Para dúvidas ou sugestões de melhoria, abra uma issue no repositório ou entre em contato com o time de desenvolvimento.

---

**Versão:** 1.0.0 (MVP)  
**Última atualização:** Setembro 2026  
**License:** MIT