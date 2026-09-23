// Tipos específicos para o Painel do Montador
import { Module, Part, AssemblyStep, DXFUpload } from '../types/project';

// Estado visualização 3D
export interface MontadorVisualizationState {
  rotation: { x: number; y: number };
  zoom: number; // 0.5 - 3.0
  isExploded: boolean; // Peças separadas para ver estrutura
  currentModuleIndex: number; // Índice do módulo sendo visualizado
}

// Lista de peças com checklist (montador)
export interface PartListMontador {
  part: Part;
  isChecked: boolean;
  checkedAt?: string;
}

// Estado da montagem (progresso geral)
export interface MontagemProgress {
  totalSteps: number;
  completedSteps: number;
  currentStepIndex: number; // Índice da etapa atual (0-based)
  partsChecked: PartListMontador[]; // Todas as peças com checklist
}

// Dados completos do projeto para o montador
export interface ProjectForMontador {
  project: Omit<Project, 'assignedMontadores'>;
  modules: Module[];
  currentModule?: Module | null; // Módulo atualmente sendo montado
  montagemProgress: MontagemProgress;
}

// Visualização de módulo com peças e passos
export interface ModuleForMontador {
  module: Module;
  partsWithChecklist: PartListMontador[];
  stepsCompleted: Set<string>; // IDs de steps concluídos
  currentStepIndex?: number; // -1 se não começou, índice da etapa atual
}

// Resposta do parser DXF
export interface DXFData {
  filename: string;
  uploadId: string;
  modules: Array<{
    id: string;
    name: string;
    dimensions: { width: number; height: number; depth: number };
    material: MaterialSpec;
    dxfFileId?: string;
  }>;
}

// Observações do projeto para o montador
export interface ProjectObservations {
  generalNotes?: string[]; // Observações gerais
  moduleSpecificNotes?: Record<string, string>; // Notas por módulo (ex: "módulo 2: cliente tem preferência por cor X")
}