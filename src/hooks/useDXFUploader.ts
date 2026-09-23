import { useState, useCallback } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/config/firebase';
import { DXFUpload } from '@/types/project';

export function useDXFUploader() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState<DXFUpload | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = useCallback(async (file: File, projectId: string, moduleId?: string) => {
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      // Gera nome único para o arquivo
      const filename = `${projectId}${moduleId ? '_'+moduleId : ''}_${Date.now()}-${file.name}`;
      const storagePath = `dxf/uploads/${filename}`;
      const refFile = ref(storage, storagePath);

      // Upload com listener de progress
      await uploadBytesGauge(refFile, file, (snapshot, loaded, total) => {
        if (total && total > 0) {
          setProgress(Math.round((loaded / total) * 100));
        }
      });

      // Pega URL para preview (opcional)
      const url = await getDownloadURL(refFile);

      const result: DXFUpload = {
        projectId,
        moduleId,
        filename: file.name,
        storagePath,
        uploadedAt: new Date().toISOString(),
      };

      setUploadResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao uploadar');
    } finally {
      setUploading(false);
    }
  }, []);

  return {
    uploading,
    progress,
    uploadResult,
    error,
    uploadFile,
  };
}

// Polyfill para uploadBytesGauge (Firebase v9+)
function uploadBytesGauge(
  ref: any,
  data: Blob | ArrayBufferView | ArrayBuffer | BufferSource,
  gauge?: (snapshot: any, loaded: number, total: number) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    const uploadTask = storage.upload(ref, data);
    
    if (gauge && typeof gauge === 'function') {
      const snapshotListener = uploadTask.snapshot.listen((snapshot) => {
        gauge(snapshot, snapshot.bytesTransferred, snapshot.totalBytes);
      });
      
      uploadTask.then(resolve).catch(reject).finally(() => {
        snapshotListener?.remove();
      });
    } else {
      uploadTask.then(resolve).catch(reject);
    }
  });
}