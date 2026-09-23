import { MontadorAssemblyView, MontadorPartsList, MontadorAssemblyStep } from './components/placeholders';

export default function MontadorPage() {
  // Placeholder de dados do projeto - será carregado do Firebase
  const dummyProject = {
    project: {
      name: 'Armário Aéreo 2 Portas',
      clientName: 'Cliente Exemplo',
      address: 'Rua das Flores, 123 - Centro',
      deadline: '2026-10-01',
      priority: 'alta',
    },
    modules: [
      {
        id: 'module_01',
        name: 'Armário inferior',
        orderIndex: 1,
        width: 800,
        height: 600,
        depth: 300,
        material: { name: 'MDP 15mm (Branco / Carvalho)', type: 'madeira', thickness: 15 },
      },
    ],
    montagemProgress: {
      totalSteps: 12,
      completedSteps: 2,
      currentStepIndex: 3,
      partsChecked: Array(15).fill(null).map((_, i) => ({
        part: {} as any,
        isChecked: i < 7,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      {/* Header */}
      <header className="mobile-header border-b border-gray-700">
        <div>
          <h1 className="text-yellow-500 font-bold text-lg">Assembly View</h1>
          <p className="text-white">{dummyProject.project.name}</p>
          <p className="text-gray-400 text-xs">{dummyProject.project.address}</p>
        </div>

        <button className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </header>

      {/* Conteúdo principal */}
      <div className="flex-1 p-4">
        <p className="text-gray-500 text-sm text-center mb-4">
          Seleção uma área para começar a montagem
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {/* Visualizar 3D */}
          <button className="col-span-2 bg-[#16213e] p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors text-left">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-white font-medium">Visualizar em 3D</p>
                <p className="text-gray-500 text-xs">Rotação, zoom e explosão de peças</p>
              </div>
            </div>
          </button>

          {/* Conferir peças */}
          <button className="bg-[#16213e] p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors text-left">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <div>
                <p className="text-white font-medium">Conferir peças</p>
                <p className="text-gray-500 text-xs">Checklist interativo e progresso</p>
              </div>
            </div>
          </button>

          {/* Seguir montagem */}
          <button className="bg-[#16213e] p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors text-left">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p className="text-white font-medium">Seguir montagem</p>
                <p className="text-gray-500 text-xs">Passo a passo com instruções</p>
              </div>
            </div>
          </button>
        </div>

        {/* Informações do projeto */}
        <div className="mt-6 bg-[#16213e] p-4 rounded-lg border border-gray-700">
          <h3 className="text-yellow-500 font-semibold mb-3 text-sm">Informações do Projeto</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Prazo:</span>
              <span className="text-white">{dummyProject.project.deadline}</span>
            </div>
            <div className="flex justify-between">
              <span>Prioridade:</span>
              <span className="text-yellow-500 font-medium capitalize">{dummyProject.project.priority}</span>
            </div>
          </div>
        </div>

        {/* Placeholder do visualizador 3D */}
        <MontadorAssemblyView project={dummyProject as any} />
      </div>

      {/* Footer de navegação */}
      <footer className="bg-[#16213e] border-t border-gray-700 p-2">
        <nav className="flex justify-around">
          <Link href="/montador/visualizar" className="nav-item-active flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-yellow-500 text-yellow-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Visualizar 3D
          </Link>

          <Link href="/montador/pecas" className="nav-item-inactive flex items-center gap-2 px-4 py-3 text-sm font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Peças
          </Link>

          <Link href="/montador/montagem" className="nav-item-inactive flex items-center gap-2 px-4 py-3 text-sm font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Montagem
          </Link>
        </nav>
      </footer>

      {/* Links */}
      <style jsx global>{`
        a { color: #FFC107; }
      `}</style>
    </main>
  );
}