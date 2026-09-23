'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/config/firebase';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setEmail('');
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        setError('Usuário não encontrado. Verifique o email e tente novamente.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else {
        setError('Erro ao enviar link de recuperação: ' + err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <svg className="w-16 h-16 mx-auto mb-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <h1 className="text-3xl font-bold text-white mb-2">Recuperar Senha</h1>
          <p className="text-gray-400">Enviamos um link para resetar sua senha</p>
        </div>

        {/* Conteúdo */}
        {success ? (
          <div className="bg-[#16213e] p-8 rounded-lg border border-green-800 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl text-white mb-2">Email Enviado!</h3>
            <p className="text-gray-400 mb-4">
              Enviamos um link de recuperação para o seu email. Verifique sua caixa de entrada e spam.
            </p>
            <button
              onClick={() => router.push('/')}
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Voltar para home
            </button>
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="bg-[#16213e] p-8 rounded-lg border border-gray-700">
            {error && (
              <div className="mb-4 bg-red-900/50 text-red-200 p-3 rounded-lg text-sm border border-red-800">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email do seu account
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

            {/* Botão */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Enviar link de recuperação'}
            </button>

            {/* Links */}
            <div className="mt-6 text-center">
              <Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors">
                ← Voltar para login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}