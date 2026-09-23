import { useState } from 'react';

interface UseMontagemProgress<T extends number> {
  total: T;
  completed: number;
  currentStepIndex: number;
  progressPercentage: number;
}

export function useMontagemProgress<T extends number>(initialCompleted = 0, initialCurrentStep = -1) {
  const [completed, setCompleted] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(initialCurrentStep);
  
  // Calcula progresso geral (ex: 7 de 15 peças = 47%)
  const progressPercentage = Math.round((completed / total) * 100);

  const markStepCompleted = () => {
    if (currentStepIndex < total) {
      setCompleted(c => c + 1);
      setCurrentStepIndex(i => i + 1);
    }
  };

  const moveNextStep = () => {
    if (currentStepIndex < total - 1) {
      setCurrentStepIndex(i => i + 1);
    }
  };

  return {
    completed,
    currentStepIndex,
    progressPercentage,
    markStepCompleted,
    moveNextStep,
    canProceed: currentStepIndex >= completed && currentStepIndex < total - 1,
  } as UseMontagemProgress<T>;
}