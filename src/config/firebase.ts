// Configuração Firebase - Substitua pelas suas credenciais reais
// Baixe o app em: https://console.firebase.google.com/project/_/settings/api
// Crie projeto → Adicionar app Web → Copiar SDK de inicialização

import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// ⚠️ SUBSTITUA COM SUAS CREDENCIAIS FIREBASE
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || ''
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Autenticação
export const auth = getAuth(app);
connectAuthEmulator(auth, 'https://firebasestorage.googleapis.com'); // Use quando em produção

// Firestore (Banco de dados)
export const db = getFirestore(app);

// Storage (Uploads DXF)
export const storage = getStorage(app);
connectStorageEmulator(storage, 'https://firebasestorage.googleapis.com');

// Configurações do Auth
auth.setPersistence('session');

console.log('✅ Firebase inicializado');

export default { app, auth, db, storage };