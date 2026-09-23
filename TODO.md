# 📋 Checklist de Desenvolvimento - MobiBuild Pro

## ✅ Sprint 1 - MVP Inicial (CONCLUÍDO)

- [x] Configurar estrutura Next.js + TypeScript
- [x] Setup TailwindCSS com tema escuro
- [x] Integração Firebase (Auth, Firestore, Storage)
- [x] Criar todos os tipos TypeScript (`project.ts`, `montador.ts`)
- [x] Criar hooks customizados:
  - [x] `useMontadorChecklist`
  - [x] `useMontagemProgress`
  - [x] `useMontadorVisualization`
  - [x] `useDXFUploader`
- [x] Criar helpers (`bomGenerator.ts`, `dxfParser.ts`)
- [x] Configurar upload DXF com progress bar
- [x] Criar componentes placeholders (visualizador 3D, checklist, montagem)
- [x] Criar páginas: home, login, recovery, montador dashboard
- [x] Documentação completa (READMEs, manuais, changelog)

## 🔄 Sprint 2 - Autenticação & Listagem (EM ANDAMENTO)

### Prioridade Alta ⭐⭐⭐
- [ ] **Criar listagem de projetos** (`src/app/projects/list`)
  - [ ] Carregar projetos do Firestore
  - [ ] Filtrar por status (pendente/produção/montado)
  - [ ] Exibir nome, cliente, prazo, prioridade
  - [ ] Botão "Ver detalhes" para cada projeto
  
- [ ] **Criar formulário novo projeto** (`src/app/projects/new`)
  - [ ] Input: Nome do projeto
  - [ ] Input: Nome do cliente
  - [ ] Input: Endereço completo
  - [ ] Date picker: Prazo de entrega
  - [ ] Select: Prioridade (alta/média/baixa)
  - [ ] Button: Upload DXF
  - [ ] Save button

- [ ] **Criar detalhes projeto** (`src/app/projects/[projectId]`)
  - [ ] Exibir todas as informações do projeto
  - [ ] Ver lista de módulos com medidas
  - [ ] Ver lista de peças (BOM)
  - [ ] Ver sequência de montagem
  - [ ] Editar campos (modo admin)

### Prioridade Média ⭐⭐
- [ ] **Implementar Firebase Auth** em todas as páginas
  - [ ] Proteção de rotas (`middleware.ts`)
  - [ ] Logout do menu
  - [ ] Redirect para login se não autenticado

- [ ] **Criar upload DXF completo**
  - [ ] Input file com drag & drop
  - [ ] Preview do nome do arquivo
  - [ ] Barra de progresso
  - [ ] Mensagem de sucesso/erro
  - [ ] Link para download após upload

### Prioridade Baixa ⭐
- [ ] **Criar editar projeto** (`src/app/projects/[projectId]/edit`)
  - [ ] Formulário com dados atuais do projeto
  - [ ] Botão "Salvar alterações"
  - [ ] Atualizar BOM se medidas mudarem

## 🎨 Sprint 3 - Visualizador 3D (PRÓXIMA)

### Prioridade Alta ⭐⭐⭐
- [ ] **Setup React Three Fiber**
  - [ ] Instalar `@react-three/fiber`, `@react-three/drei`
  - [ ] Criar componente Canvas básico
  - [ ] Implementar `useMontadorVisualization` hook
  - [ ] Controles de rotação com botões
  
- [ ] **Carregar geometria DXF**
  - [ ] Integrar parser DXF real (`dxf-parser`)
  - [ ] Ler vértices e criar Meshes no Three.js
  - [ ] Colorir por camadas/material
  - [ ] Otimizar para mobile (Draco compression)

- [ ] **Controles de câmera completos**
  - [ ] OrbitControls para rotação em todas as direções
  - [ ] Zoom com scroll e botões (+/-)
  - [ ] Modo explosão (separar peças no espaço 3D)
  - [ ] Navegação entre módulos

### Prioridade Média ⭐⭐
- [ ] **Imagens ilustrativas por etapa**
  - [ ] Upload de imagens para cada passo de montagem
  - [ ] Modal de imagem em tela cheia
  - [ ] Galeria de imagens alternativas
  
- [ ] **Notificações e feedbacks**
  - [ ] Toast notifications (react-hot-toast)
  - [ ] Loading states em todos os buttons
  - [ ] Empty states para listas vazias

## 🔥 Sprint 4 - Performance & Offline (OPCIONAL)

### Prioridade Média ⭐⭐
- [ ] **Lazy loading de imagens**
  - [ ] Next/Image com placeholder
  - [ ] Blur on load
  - [ ] IntersectionObserver para carregamento progressivo

- [ ] **Virtualização de listas**
  - [ ] Instalar `react-window` ou `tanstack-virtual`
  - [ ] Virtualizar lista de peças (50+ itens)
  - [ ] Virtualizar lista de passos de montagem

- [ ] **Service Worker para offline**
  - [ ] Instalar PWA (next-pwa)
  - [ ] Cache de APIs do Firestore
  - [ ] Fallback para modo offline
  - [ ] Sincronização automática ao recuperar conexão

## 📊 Sprint 5 - Analytics & Admin (FUTURO)

### Futuro
- [ ] **Dashboard com métricas**
  - [ ] Tempo médio por etapa de montagem
  - [ ] Projetos concluídos vs pendentes
  - [ ] Top montadores mais produtivos
  
- [ ] **Sistema multi-cliente**
  - [ ] Configuração por empresa/cliente
  - [ ] Roles granulares de permissão
  - [ ] Audit log completo

---

## 🧪 Testes e QA

### Todos os sprints
- [ ] Testar em device real (iPhone, Android)
- [ ] Testar upload DXF com arquivos grandes (5MB+)
- [ ] Testar workflow completo de montagem
- [ ] Validar compatibilidade com navegadores modernos

---

## 📦 Deploy & Produtividade

### Próximos passos
- [ ] Build de produção (`npm run build`)
- [ ] Testar deploy em Vercel
- [ ] Configurar CI/CD (GitHub Actions)
- [ ] Monitoramento de erros (Sentry)

---

## 🐛 Bugs Conhecidos / Melhorias Futuras

1. **Parser DXF:** Atualmente placeholder, precisa integrar biblioteca real
2. **Imagens:** Upload de imagens para etapas ainda não implementado
3. **Offline:** Service Worker pode ser adicionado na Sprint 4

---

**Status atual:** Sprint 1 ✅ | Sprint 2 🔄 | Sprint 3 ⏳  
**Próxima data de review:** 01/10/2026 - Sprint 2 completion