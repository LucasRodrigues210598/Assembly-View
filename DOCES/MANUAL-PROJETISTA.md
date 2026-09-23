# 📐 MobiBuild Pro - Painel do Projetista

**Manual para Criar e Gerenciar Projetos**

---

## 🎯 Visão Geral

O Painel do Projetista permite:
- ✅ Cadastrar novos projetos
- ✅ Upload de arquivos DXF do Promob
- ✅ Configurar módulos (inferior, superior, gaveteiro)
- ✅ Definir medidas e materiais
- ✅ Gerar lista de peças automática (BOM)
- ✅ Criar sequência de montagem passo a passo
- ✅ Atribuir montadores e definir prazos

---

## 📋 Fluxo Completo de Criação de Projeto

### Passo 1: Iniciar Novo Projeto

1. Clique em **"+ Novo Projeto"** na home
2. Preencha os dados básicos:
   - **Nome do projeto**: Ex: "Armário Aéreo 2 Portas"
   - **Nome do cliente**: Ex: "João Silva"
   - **Endereço**: Rua das Flores, 123 - Centro
   - **Prazo de entrega**: 01/10/2026
   - **Prioridade**: Alta / Média / Baixa

### Passo 2: Upload do Arquivo DXF

1. Clique em **"Escolher arquivo"**
2. Selecione o arquivo `.dxf` exportado do Promob
3. Aguarde o upload com barra de progresso
4. Clique em **"Processar"** quando terminar

> **Nota**: O sistema lê a geometria do DXF e gera automaticamente módulos, peças e instruções.

### Passo 3: Configurar Módulos

Para cada módulo (armário inferior, superior, gaveteiro):

#### Medidas
- **Largura**: Ex: 800 mm
- **Altura**: Ex: 600 mm  
- **Profundidade**: Ex: 300 mm

#### Material
- **Tipo**: MDF, MDP, HDF, Compensado, etc.
- **Espessura**: 15mm, 18mm, 25mm (selecione)
- **Acabamento**: Branco / Carvalho / NatURAL (opcional)

### Passo 4: Gerar Lista de Peças (BOM)

O sistema gera automaticamente:
- Todas as laterais e tampos
- Prateleiras
- Fundo
- Ferragens (dobradiças, puxadores, parafusos)

Clique em **"Gerar BOM"** para criar a lista completa.

### Passo 5: Definir Sequência de Montagem

Para cada etapa da montagem:

1. **Título**: Ação principal (ex: "Fixar a prateleira")
2. **Descrição**: Instruções detalhadas
3. **Dicas**: Observações importantes (múltiplas)
4. **Ferramentas necessárias**: Lista de ferramentas
5. **Imagens** (opcional): Fotos ou desenhos

#### Exemplo de Etapa
```
Título: Fixar a prateleira
Descrição: Encaixe a prateleira nas laterais, posicionando os suportes nos furos indicados.

Dicas:
- Verifique se a prateleira está no nível correto.
- Use um martelo de borracha para facilitar o encaixe.
- Confira se os suportes estão bem fixos.

Ferramentas:
- Chave Philips
- Martelo de borracha
```

### Passo 6: Atribuir Montadores

1. Clique em **"Selecionar montadores"**
2. Marque os profissionais responsáveis
3. Defina prazo para cada serviço (opcional)

### Passo 7: Observações Gerais

Adicione observações importantes:
- "Cliente tem preferência por cor clara"
- "Evitar usar martelo pesado nas laterais"
- "Montar com ajuda de 2 pessoas"

Clique em **"Salvar Projeto"** quando terminar!

---

## 📊 Visualizar Projetos

Na lista de projetos, você pode:

#### Filtrar por Status
- **Pendente**: Projeto não iniciado
- **Em produção**: Montagem em andamento
- **Montado**: Finalizado

#### Ver Detalhes
Clique no nome do projeto para ver:
- Todas as configurações
- Lista de módulos
- BOM completa
- Sequência de montagem
- Status da montagem (porcentagem concluída)

---

## 🔄 Editar Projeto

Para modificar um projeto em andamento:

1. Clique no projeto na lista
2. Edite os campos desejados
3. **Importante**: Ao editar medidas ou materiais, o BOM será atualizado automaticamente

---

## 📦 Upload de DXF do Promob

### Formato do Arquivo
- Extensão: `.dxf`
- Versão compatível: R12-R2000
- Tamanho máximo: 10 MB

### Processo de Upload
1. No cadastro do projeto, clique em **"Upload DXF"**
2. Escolha o arquivo
3. Aguarde a barra de progresso completar
4. Clique em **"Processar DXF"**

### O que o Parser Lê
- Coordenadas dos vértices
- Tipos de linha (contornos, cortes)
- Camadas (linhas, texturas, metálico)
- Blocos reutilizáveis (peças padrão)

> **Nota**: Para integração completa, será necessário configurar biblioteca especializada em DXF.

---

## 💡 Dicas para Projetistas

### ✅ Melhores Práticas
1. **Organize os módulos** na ordem de montagem
2. **Seja específico** nas instruções de cada etapa
3. **Inclua fotos** quando possível para clareza
4. **Teste o projeto** antes de enviar ao montador
5. **Adicione observações** que ajudam a evitar erros

### ⚠️ Erros Comuns a Evitar
- ❌ Medidas inconsistentes entre módulos
- ❌ Esquecer de incluir ferragens na lista
- ❌ Instruções ambíguas ou incompletas
- ❌ Não definir sequência lógica de montagem
- ❌ Esquecer observações importantes do cliente

---

## 📱 Integração com Montador

Quando você salva o projeto:

1. **Dados sincronizados** para o painel do montador
2. **BOM completa** disponível para conferência
3. **Sequência de montagem** já na ordem correta
4. **Observações visíveis** no header do app

O montador pode começar imediatamente!

---

## 🔐 Permissões

Apenas usuários com role **"Projetista"** podem:
- Criar projetos
- Editar configurações
- Fazer upload de DXF
- Definir instruções de montagem

Usuários com role **"Montador"** podem apenas:
- Visualizar projetos
- Marcar peças conferidas
- Completar etapas de montagem
- Ler observações (não editar)

---

**MobiBuild Pro** - Projete com precisão, monte sem erros.  
*Versão 1.0 - Setembro 2026*