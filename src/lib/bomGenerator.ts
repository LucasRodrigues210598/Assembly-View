import { Module } from '@/types/project';
import { Part, MaterialSpec, AssemblyStep } from '@/types/project';

interface GenerateBOMResult {
  parts: Part[];
  steps: AssemblyStep[];
}

export function generateBOM(module: Module): GenerateBOMResult {
  // ⚠️ Na prática, isso viria do parser DXF ou seria pré-configurado
  
  const parts: Part[] = [
    {
      id: `part_${Date.now()}_01`,
      moduleId: module.id,
      code: 'L-ESQ',
      name: 'Lateral esquerda',
      dimensions: { axisA: Number(module.height), axisL: Number(module.width), axisP: 0 },
      materialName: module.material.name,
      type: 'madeira',
      quantity: 1,
    },
    {
      id: `part_${Date.now()}_02`,
      moduleId: module.id,
      code: 'L-DIR',
      name: 'Lateral direita',
      dimensions: { axisA: Number(module.height), axisL: Number(module.width), axisP: 0 },
      materialName: module.material.name,
      type: 'madeira',
      quantity: 1,
    },
    {
      id: `part_${Date.now()}_03`,
      moduleId: module.id,
      code: 'T-SUP',
      name: 'Tampe superior',
      dimensions: { axisA: Number(module.height), axisL: Number(module.width), axisP: 0 },
      materialName: module.material.name,
      type: 'madeira',
      quantity: 1,
    },
    {
      id: `part_${Date.now()}_04`,
      moduleId: module.id,
      code: 'T-INF',
      name: 'Tampe inferior',
      dimensions: { axisA: Number(module.height), axisL: Number(module.width), axisP: 0 },
      materialName: module.material.name,
      type: 'madeira',
      quantity: 1,
    },
    {
      id: `part_${Date.now()}_05`,
      moduleId: module.id,
      code: 'P-ESQ',
      name: 'Prateleira esquerda',
      dimensions: { axisA: Number(module.height), axisL: 300, axisP: 0 },
      materialName: module.material.name,
      type: 'madeira',
      quantity: 1,
    },
    {
      id: `part_${Date.now()}_06`,
      moduleId: module.id,
      code: 'F-DOS',
      name: 'Fundo',
      dimensions: { axisA: Number(module.height), axisL: Number(module.width) - 30, axisP: Number(module.depth) },
      materialName: 'HDF 3mm',
      type: 'madeira',
      quantity: 1,
    },
    // Ferragens
    {
      id: `part_${Date.now()}_07`,
      moduleId: module.id,
      code: 'D-BR',
      name: 'Dobradiça',
      dimensions: { axisA: 35, axisL: 0, axisP: 0 },
      materialName: 'Metal',
      type: 'metal',
      quantity: 2,
      isHardware: true,
    },
    {
      id: `part_${Date.now()}_08`,
      moduleId: module.id,
      code: 'P-EX',
      name: 'Puxador',
      dimensions: { axisA: 160, axisL: 25, axisP: 0 },
      materialName: 'Metal',
      type: 'metal',
      quantity: 2,
      isHardware: true,
    },
  ];

  const steps: AssemblyStep[] = [
    {
      id: `step_${module.id}_01`,
      moduleId: module.id,
      orderIndex: 1,
      title: 'Montar estrutura básica',
      description: 'Fixar as duas laterais (esquerda e direita) ao fundo do móvel.',
      tips: [
        'Use parafusos de 35mm para fixar as laterais ao fundo.',
        'Certifique-se de que o fundo está centralizado horizontalmente.',
      ],
      toolsRequired: [
        { type: 'chave-philips', name: 'Chave Philips' },
        { type: 'martelo-borracha', name: 'Martelo de borracha' },
      ],
    },
    {
      id: `step_${module.id}_02`,
      moduleId: module.id,
      orderIndex: 2,
      title: 'Instalar prateleiras',
      description: 'Encaixe as prateleiras nas laterais, posicionando os suportes nos furos indicados.',
      tips: [
        'Verifique se a prateleira está no nível correto.',
        'Use um martelo de borracha para facilitar o encaixe.',
        'Confira se os suportes estão bem fixos.',
      ],
      toolsRequired: [
        { type: 'chave-philips', name: 'Chave Philips' },
        { type: 'martelo-borracha', name: 'Martelo de borracha' },
      ],
    },
    {
      id: `step_${module.id}_03`,
      moduleId: module.id,
      orderIndex: 3,
      title: 'Acabamento final',
      description: 'Instalar o fundo (se for necessário) e ajustar as dobradiças.',
      tips: [
        'Certifique-se de que todas as peças estão niveladas.',
        'Ajuste as dobradiças para garantir movimento suave das portas.',
      ],
      toolsRequired: [
        { type: 'chave-philips', name: 'Chave Philips' },
      ],
    },
  ];

  return { parts, steps };
}