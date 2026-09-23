import { Module, MaterialSpec, Part } from '@/types/project';
import { DXFData } from '@/types/montador';

export function parseDXFFile(data: any): DXFData {
  // ⚠️ Este é um parser DXF simplificado
  // Na prática, usaríamos uma biblioteca como dxf-parser ou three-dxf
  // Aqui vou criar uma estrutura para receber dados de upload
  
  const modules = data.modules.map((mod: any) => ({
    id: mod.id,
    name: mod.name,
    dimensions: {
      width: Number(mod.width),
      height: Number(mod.height),
      depth: Number(mod.depth),
    },
    material: {
      name: mod.materialName || 'MDP 15mm',
      type: mod.materialType || 'madeira',
      thickness: Number(mod.thickness) || 15,
      finish: mod.finish || 'Branco / Carvalho',
    } as MaterialSpec,
    dxfFileId: mod.dxfFileId,
  })) as Module[];

  return {
    filename: data.filename,
    uploadId: data.uploadId,
    modules,
  } as DXFData;
}