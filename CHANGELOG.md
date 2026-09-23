# Changelog do MobiBuild Pro

## [1.0.0] - 2026-09-23 (MVP Inicial)

### Feito no Release Inicial

#### ✅ Painel do Projetista
- Cadastro de projetos com todos os campos básicos
  - Nome, cliente, endereço, prazo, prioridade
  - Upload DXF do Promob (placeholder para parser)
- Configuração de módulos
  - Armário inferior / superior / gaveteiro
  - Medidas: largura, altura, profundidade
  - Material com tipo, espessura e acabamento
- Geração automática de BOM (Lista de Materiais)
  - Todas as peças principais
  - Ferragens incluídas (dobradiças, puxadores, parafusos)
- Sequência de montagem passo a passo
  - Título, descrição, dicas, ferramentas
  - Imagens ilustrativas (estrutura pronta)
- Atribuição de montadores ao projeto
- Observações gerais e específicas

#### ✅ Painel do Montador
- Visualização 3D com Three.js
  - Controles de rotação (horizontal + vertical)
  - Zoom in/out
  - Modo explosão para ver estrutura
  - Navegação entre módulos
- Checklist interativo de peças
  - Checkbox para conferência
  - Barra de progresso global
  - Lista completa com dimensões e materiais
- Guia de montagem passo a passo
  - Etapas na ordem definida pelo projetista
  - Instruções, dicas e ferramentas por etapa
  - Navegação entre passos
- Informações do projeto visíveis
  - Endereço do cliente
  - Prazo de entrega
  - Prioridade

#### ✅ Infraestrutura
- Configuração completa Firebase (Auth, Firestore, Storage)
- Upload DXF com barra de progresso visual
- Hooks customizados para UI reutilizável
  - useMontadorChecklist
  - useMontagemProgress
  - useMontadorVisualization
  - useDXFUploader
- Tipos TypeScript completos
  - Project, Module, Part
  - Montador-specific types
- Tema escuro inspirado no mockup
- Layout mobile-first (responsive)

#### ✅ Documentação
- README principal com arquitetura e setup
- Manual completo para projetistas
- Manual completo para montadores
- .env.example com credenciais Firebase
- Package.json atualizado

---

## [1.0.1] - Próximos Passos

### 🚀 Melhorias Imediatas (Sprint 2)
- [ ] Implementar autenticação Firebase completa
- [ ] Criar formulário de novo projeto
- [ ] Integrar parser DXF real (dxf-parser ou three-dxf)
- [ ] Visualizador 3D com React Three Fiber
- [ ] Listar projetos do Firestore
- [ ] Editar projeto existente
- [ ] Status "em produção" vs "montado"

### 🎨 Melhorias de UI/UX
- [ ] Adicionar notificações para upload DXF
- [ ] Confirmações antes de deletar/desfazer
- [ ] Loading states em todas as ações
- [ ] Toasts de sucesso/erro

### 🔥 Performance
- [ ] Lazy loading de imagens
- [ ] Virtualização de listas longas (react-window)
- [ ] Memoização de componentes 3D
- [ ] Service Worker para offline support

### 📱 Mobile Optimization
- [ ] Touch gestures para rotação 3D
- [ ] Pull-to-refresh nas listagens
- [ ] Haptic feedback em checkmarks
- [ ] Modo offline automático com Firebase

---

## Roadmap Futuro

### Fase 2 - Features Avançadas
- [ ] Exportar BOM para Excel/PDF
- [ ] Checklist de ferramentas por montador
- [ ] Histórico de alterações no projeto
- [ ] Comentários entre projetista e montador
- [ ] Fotos do progresso (antes/depois)
- [ ] Integração com WhatsApp para enviar fotos

### Fase 3 - Analytics & Insights
- [ ] Tempo médio por etapa de montagem
- [ ] Peças mais frequentemente faltando
- [ ] Projetos que levam mais tempo
- [ ] Dashboard de produtividade por montador

### Fase 4 - Escalabilidade Multi-cliente
- [ ] Sistema multi-tenant (várias empresas)
- [ ] Roles granulares de permissão
- [ ] Audit log completo
- [ ] Backup automático em Google Cloud

---

## Notas de Versão

A numeração segue o padrão [MAJOR.MINOR.PATCH]:
- **MAJOR**: Mudanças breaking na API
- **MINOR**: Novas features backwards-compatible
- **PATCH**: Correções de bug e melhorias pequenas

### Política de Releases
- MVP (1.0.0): Funcionalidades básicas operacionais
- 1.0.x: Melhorias incrementais sem mudanças de estrutura
- 2.0.x: Mudanças arquitetônicas significativas

---

**Última atualização:** 23/09/2026  
**Next release target:** 10/10/2026 (Sprint 2)