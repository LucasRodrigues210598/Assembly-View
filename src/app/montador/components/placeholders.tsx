import { ProjectForMontador } from '@/types/montador';
import { ModuleForMontador } from '@/types/montador';

// Placeholder - será implementado com Three.js
export function MontadorAssemblyView({ project }: { project: ProjectForMontador }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="mobile-header border-b border-gray-700">
        <div>
          <h1 className="text-yellow-500 font-bold text-lg">Asssembly View</h1>
          <p className="text-white">{project.project.name}</p>
          <p className="text-gray-400 text-sm">Módulo 01 de {project.modules.length}</p>
        </div>

        <button className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Área do visualizador 3D */}
      <div className="flex-1 bg-[#0a0a15] relative">
        {/* Placeholder do visualizador - substituir por Three.js */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>Ambiente 3D será carregado aqui</p>
            <p className="text-xs mt-2 text-gray-500">(Three.js / React Three Fiber)</p>
          </div>

          {/* Controles de visualização */}
          <div className="absolute top-4 left-4 flex gap-2">
            <button className="bg-[#1a1a2e] text-gray-300 p-2 rounded-lg border border-gray-700 hover:bg-gray-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.975v9A1 1 0 006 14h-2m2 9V3.975" />
              </svg>
            </button>
            
            <button className="bg-yellow-500 text-black p-2 rounded-lg font-medium hover:bg-yellow-400">
              Explodir
            </button>

            <button className="bg-[#1a1a2e] text-gray-300 p-2 rounded-lg border border-gray-700 hover:bg-gray-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Controles de rotação */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#1a1a2e] px-4 py-2 rounded-lg border border-gray-700">
            <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white text-sm">360°</span>
          </div>

          {/* Info do módulo */}
          <div className="absolute top-4 right-4 bg-[#1a1a2e] p-4 rounded-lg border border-gray-700 max-w-xs">
            <h3 className="text-yellow-500 font-semibold mb-3 text-sm">Especificações do módulo</h3>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex justify-between">
                <span>Largura:</span>
                <span className="text-white">{project.modules[0]?.dimensions.width} mm</span>
              </div>
              <div className="flex justify-between">
                <span>Altura:</span>
                <span className="text-white">{project.modules[0]?.dimensions.height} mm</span>
              </div>
              <div className="flex justify-between">
                <span>Profundidade:</span>
                <span className="text-white">{project.modules[0]?.dimensions.depth} mm</span>
              </div>
              <div className="border-t border-gray-700 pt-2">
                <p className="mb-1 text-gray-500">Material:</p>
                <p className="text-yellow-500">{project.modules[0]?.material.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer com navegação */}
      <footer className="bg-[#16213e] border-t border-gray-700 p-2">
        <nav className="flex justify-around">
          <Link href="/montador/visualizar" className="nav-item-inactive flex items-center gap-2 px-4 py-3 text-sm font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Visualizar 3D
          </Link>

          <Link href="/montador/pecas" className="nav-item-active flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-yellow-500 text-yellow-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Peças
          </Link>

          <Link href="/montador/montagem" className="nav-item-active flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-yellow-500 text-yellow-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Montagem
          </Link>
        </nav>
      </footer>
    </div>
  );
}

// Placeholder para lista de peças do montador
export function MontadorPartsList() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mobile-header border-b border-gray-700">
        <h1 className="text-yellow-500 font-bold text-lg">Peças</h1>
        <button className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Barra de progresso */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">Progresso das peças conferidas</span>
            <span className="text-yellow-500 font-semibold">7 de 15</span>
          </div>
          <div className="progress-bar h-3 rounded-full bg-gray-700">
            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '47%' }}></div>
          </div>
        </div>

        {/* Lista de peças */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="part-list-item mb-2">
            <div className="flex items-center gap-3">
              <div className={`custom-checkbox ${i <= 7 ? 'checked' : ''}`}>
                {i <= 7 && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <p className="text-white font-medium">Peça {i}</p>
                <p className="text-gray-500 text-xs">CÓDIGO-{String(i).padStart(3, '0')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-gray-400 text-xs">MDP 15mm</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#16213e] border-t border-gray-700 p-2">
        <nav className="flex justify-around">
          <Link href="/montador/visualizar" className="nav-item-inactive flex items-center gap-2 px-4 py-3 text-sm font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Visualizar 3D
          </Link>

          <Link href="/montador/pecas" className="nav-item-active flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-yellow-500 text-yellow-500">
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
    </div>
  );
}

// Placeholder para guia de montagem do montador
export function MontadorAssemblyStep() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mobile-header border-b border-gray-700">
        <h1 className="text-yellow-500 font-bold text-lg">Montagem</h1>
        <button className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Barra de progresso */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white font-semibold">Passo 3 de 12</span>
            <span className="text-yellow-500">25%</span>
          </div>
          <div className="progress-bar h-3 rounded-full bg-gray-700">
            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>

        {/* Etapa atual */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-yellow-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-black text-xl">
              3
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold">Fixar a prateleira</h2>
              <p className="text-gray-400 text-sm">Encaixe a prateleira nas laterais, posicionando os suportes nos furos indicados.</p>
            </div>
          </div>

          {/* Imagem ilustrativa */}
          <div className="bg-[#16213e] rounded-lg p-4 mb-4 border border-gray-700">
            <div className="bg-gray-800 h-48 rounded flex items-center justify-center">
              <p className="text-gray-500 text-sm">Imagem da etapa</p>
            </div>
          </div>

          {/* Dicas */}
          <div className="mb-4">
            <h3 className="flex items-center gap-2 text-yellow-500 font-semibold mb-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.452 5.325a6.002 6.002 0 01-.287 1.76c-.45.82-1.319 1.32-2.192 1.275M20.175 20.175a2.853 2.853 0 002.381-2.442c.03-.633-.276-1.369-.847-1.953C18.555 14.836 17.33 14.093 16 13.831M9.75 2.6c.068-.43.632-.745 1.104-.545a.85.85 0 00.724-1.5c-.397-.331-.959-.5-1.466-.5C6.13 2 5 3.246 5 5c0 .564.132 1.128.374 1.627l.24.47m-2.293 1.65a.85.85 0 00-.545 1.104c.192.472-.088 1.036-.545 1.104-1.55.435-2.782 1.616-3.147 3.17M4.5 17c0 .564.132 1.128.374 1.627l.24.47m-2.293 1.65a.85.85 0 00-.545 1.104c.192.472-.088 1.036-.545 1.104" />
              </svg>
              Dicas
            </h3>
            <ul className="space-y-2 ml-1 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                Verifique se a prateleira está no nível correto.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                Use um martelo de borracha para facilitar o encaixe.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                Confira se os suportes estão bem fixos.
              </li>
            </ul>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="flex items-center gap-2 text-yellow-500 font-semibold mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 00-.555-1.75zm-6.902 0l3.197 2.132A1 1 0 0014 18.13V13.867a1 1 0 00-1.555-.832l-3.197 2.132a1 1 0 00.555 1.75z" />
              </svg>
              Ferramentas necessárias
            </h3>
            <div className="flex gap-4">
              <div className="bg-[#16213e] p-4 rounded-lg border border-gray-700 flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <div>
                  <p className="text-white font-medium">Chave Philips</p>
                  <p className="text-gray-500 text-xs">Fixação de peças</p>
                </div>
              </div>

              <div className="bg-[#16213e] p-4 rounded-lg border border-gray-700 flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-white font-medium">Martelo de borracha</p>
                  <p className="text-gray-500 text-xs">Ajustes finos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex gap-3 pt-4 border-t border-gray-700">
          <button className="flex-1 btn-secondary text-center">
            ← Passo anterior
          </button>
          <button className="flex-[2] bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
            ✓ Marcar como concluído
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-3">
          Pular para o próximo passo →
        </p>
      </div>
    </div>
  );
}