import { useState, useEffect } from 'react';
import { useAuthState } from 'firebase-ui-react';

export function useMontadorChecklist() {
  const [isChecked, setIsChecked] = useState(false);

  const checkItem = () => setIsChecked(true);
  const uncheckItem = () => setIsChecked(false);

  useEffect(() => {
    // Atualiza UI quando o item é marcado
    if (isChecked) {
      console.log('✅ Item marcado');
    }
  }, [isChecked]);

  return { isChecked, checkItem, uncheckItem };
}