'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Verifica se já está logado
    if (auth.currentUser) {
      router.push('/projects');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        setError('Email ou senha incorretos');
      } else if (err.code === 'auth/user-not-found') {
        setError('Usuário não encontrado');
      } else if (err.code === 'auth/wrong-password') {
        setError('Senha incorreta');
      } else {
        setError('Erro ao fazer login: ' + err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (err) {
      setError('Erro ao sair da conta');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <svg className="w-16 h-16 mx-auto mb-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-bold text-white mb-2">MobiBuild</h1>
          <p className="text-gray-400">Acesso ao Sistema</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="bg-[#16213e] p-8 rounded-lg border border-gray-700">
          {error && (
            <div className="mb-4 bg-red-900/50 text-red-200 p-3 rounded-lg text-sm border border-red-800">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Senha */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Botão Login */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>

          {/* Links de ajuda */}
          <div className="mt-4 text-center">
            <Link href="/auth/forgot-password" className="text-gray-400 hover:text-white text-sm">
              Esqueceu a senha?
            </Link>
          </div>
        </form>

        {/* Informações */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Caso não tenha uma conta, entre em contato com o administrador.</p>
        </div>

        {/* Navegação */}
        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}