'use client';

import { useRouter } from 'next/navigation';
import { useAuthState } from 'firebase-ui-react';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [user] = useAuthState();

  return (
    <main className="min-h-screen bg-[#1a1a2e] flex flex-col">
      {/* Header */}
      <header className="mobile-header">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10" />
          </svg>
          <div>
            <h1 className="text-xl font-bold text-white">MobiBuild</h1>
            <p className="text-sm text-gray-400">Gestão de Projetos de Móveis</p>
          </div>
        </div>

        {user ? (
          <button onClick={() => router.push('/projects')} className="text-white hover:text-yellow-500">
            Entrar
          </button>
        ) : (
          <Link href="/auth/login" className="text-yellow-500 hover:underline">
            Acessar Sistema
          </Link>
        )}
      </header>

      {/* Conteúdo */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <svg className="w-20 h-20 mx-auto mb-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>

          <h2 className="text-3xl font-bold text-white mb-4">Bem-vindo ao MobiBuild</h2>
          <p className="text-gray-400 mb-8">
            Sistema completo de gestão de projetos de móveis.
            Crie projetos, visualize em 3D e guie a montagem.
          </p>

          <div className="bg-[#16213e] p-6 rounded-lg text-left mb-6 border border-gray-700">
            <h3 className="text-yellow-500 font-semibold mb-3">Funcionalidades:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Cadastro de projetos com DXF do Promob
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Visualização 3D com rotação e explosão
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Lista de peças com checklist interativo
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Guia passo a passo de montagem
              </li>
            </ul>
          </div>

          {user ? (
            <div className="flex justify-center gap-4">
              <Link href="/projects/new" className="btn-primary w-full text-center">
                + Novo Projeto
              </Link>
              <Link href="/montador" className="btn-secondary w-full text-center">
                Painel Montador
              </Link>
            </div>
          ) : (
            <Link href="/auth/login" className="btn-primary w-full text-center py-4">
              Acessar Sistema
            </Link>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 text-sm border-t border-gray-800">
        MobiBuild Pro - Desenvolvido para Montagem de Móveis
      </footer>
    </main>
  );
}