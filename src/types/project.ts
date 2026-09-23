// Projeto - Entidade principal (cadastra projetista)
export interface Project {
  id: string;
  name: string;
  clientName: string;
  address: string;
  deadline?: string; // YYYY-MM-DD
  priority: 'alta' | 'média' | 'baixa';
  status: 'pendente' | 'em-produção' | 'montado';
  assignedMontadores?: Montador[];
  createdAt: string;
  updatedAt: string;
  dxfFileId?: string; // ID do arquivo DXF no Firebase Storage
}

// Módulo dentro de um projeto
export interface Module {
  id: string;
  projectId: string;
  name: string; // "Armário inferior", "Superior", etc.
  orderIndex: number; // Posição na sequência
  width: number; // mm
  height: number; // mm
  depth: number; // mm
  material: MaterialSpec;
  steps: AssemblyStep[]; // Sequência de montagem
  dxfFileId?: string;
}

// Especificação de material (MDF, HDF, compensado, etc.)
export interface MaterialSpec {
  name: string; // "MDP 15mm"
  type: 'madeira' | 'metal' | 'vidro' | 'outro';
  thickness: number; // mm
  finish?: string; // "Branco / Carvalho"
}

// Peça individual que compõe o módulo
export interface Part {
  id: string;
  moduleId: string;
  code: string; // C001, H001, etc.
  name: string; // "Lateral esquerda", "Tampe superior"
  dimensions: PartDimensions;
  materialName: string;
  type: 'madeira' | 'metal' | 'vidro' | 'acabamento';
  quantity: number;
  isHardware?: boolean; // Ferragens, parafusos, etc.
}

// Dimensões da peça (AxLxP)
export interface PartDimensions {
  axisA: number; // mm - ex: altura
  axisL: number; // mm - ex: largura
  axisP?: number; // mm - ex: profundidade (pode ser 0 para planos)
}

// Etapa de montagem (passo a passo)
export interface AssemblyStep {
  id: string;
  moduleId: string;
  orderIndex: number;
  title: string; // "Fixar a prateleira"
  description: string; // Instruções detalhadas
  tips?: string[]; // Dicas e observações
  toolsRequired: Tool[]; // Ferramentas necessárias
  images?: {
    url: string;
    caption: string;
  }[];
}

// Ferramenta necessária em uma etapa
export interface Tool {
  type: 'chave-philips' | 'martelo-borracha' | 'talharia' | 'fresa' | 'outro';
  name: string; // "Chave Philips", "Martelo de borracha"
}

// Montador (usuário atribuído ao projeto)
export interface Montador {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// Checklist de peça conferida (montador marca cada peça)
export interface PartChecklist {
  partId: string;
  isChecked: boolean;
  checkedAt?: string;
}

// Etapa concluída pelo montador
export interface StepCompletion {
  stepId: string;
  isCompleted: boolean;
  completedAt?: string;
  notes?: string; // Observações do montador na obra
}

// Upload DXF
export interface DXFUpload {
  projectId: string;
  moduleId?: string;
  filename: string;
  storagePath: string;
  uploadedAt: string;
}