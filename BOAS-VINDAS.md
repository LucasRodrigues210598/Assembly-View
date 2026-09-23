# 🚀 Bem-vindo ao MobiBuild Pro!

Este é o repositório do sistema de gestão de projetos de móveis.

## 📖 Documentação

### Para Iniciantes (Leia Primeiro!)

1. **[README.md](SUMARIO-MVP.md)** - Visão geral completa e setup
2. **[CHANGELOG.md](CHANGELOG.md)** - Histórico e roadmap
3. **[DOCES/MANUAL-PROJETISTA.md](DOCES/MANUAL-PROJETISTA.md)** - Como usar o painel do projetista
4. **[DOCES/MANUAL-MONTADOR.md](DOCES/MANUAL-MONTADOR.md)** - Como usar o painel do montador

### Para Desenvolvedores

- **Arquitetura:** `src/` contém toda a estrutura Next.js
- **Typescript:** Todos os tipos em `src/types/`
- **Hooks customizados:** `src/hooks/`
- **Config Firebase:** `src/config/firebase.ts`

## 🛠️ Setup Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Configurar Firebase
cp .env.example .env.local
# Substitua as credenciais do seu projeto Firebase

# 3. Iniciar desenvolvimento
npm run dev
```

## 📦 Dependências Principais

- Next.js 14 (App Router)
- React 18 + TypeScript
- TailwindCSS (tema escuro + amarelo)
- Firebase (Auth, Firestore, Storage)
- Three.js + React Three Fiber (visualização 3D)

## 🎯 MVP Atual (Versão 1.0.0)

✅ Painel do Montador (placeholders funcionais)
✅ Typescript completo para todos os domínios
✅ Hooks customizados otimizados
✅ Upload DXF com progress bar
✅ Geração automática de BOM
✅ Documentação completa

🔄 **Próximos passos:**
1. Listagem de projetos
2. Formulário de novo projeto
3. Parser DXF real
4. Visualizador 3D com Three.js

## 📂 Estrutura Principal

```
mobibuild/
├── src/app/              # Next.js Pages
├── src/hooks/           # Hooks customizados
├── src/types/           # TypeScript interfaces
├── src/lib/             # Utils e helpers
├── DOCES/               # Manuais e documentação
└── .env.example         # Credenciais Firebase
```

## 🤝 Contribuição

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Faça commit (`git commit -am 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Código de Conduta

Seja respeitoso e profissional. Lembra: estamos criando algo que vai ajudar montadores em obra!

---

**Feito com ❤️ para Montagem Precisa**

*Versão 1.0.0 - Setembro 2026*