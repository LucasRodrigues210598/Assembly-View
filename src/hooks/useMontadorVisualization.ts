import { useState, useCallback, useMemo } from 'react';

export interface UseVisualizationState {
  rotation: { x: number; y: number };
  zoom: number;
  isExploded: boolean;
}

export function useMontadorVisualization() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isExploded, setIsExploded] = useState(false);

  // Gira o móvel horizontalmente
  const rotateHorizontal = useCallback((degrees: number) => {
    setRotation(prev => ({ ...prev, y: prev.y + degrees }));
  }, []);

  // Gira verticalmente
  const rotateVertical = useCallback((degrees: number) => {
    setRotation(prev => ({ ...prev, x: prev.x + degrees }));
  }, []);

  // Zoom in/out
  const zoomIn = useCallback(() => {
    setZoom(z => Math.min(z * 1.2, 3));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(z => Math.max(z / 1.2, 0.5));
  }, []);

  // Reset para posição inicial
  const resetView = useCallback(() => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
  }, []);

  // Alternar modo explosão (peças separadas)
  const toggleExplode = useCallback(() => {
    setIsExploded(prev => !prev);
  }, []);

  return {
    rotation,
    zoom,
    isExploded,
    rotateHorizontal,
    rotateVertical,
    zoomIn,
    zoomOut,
    resetView,
    toggleExplode,
    setRotation,
    setZoom,
    setIsExploded,
  } as UseVisualizationState & {
    rotateHorizontal: typeof rotateHorizontal;
    rotateVertical: typeof rotateVertical;
    zoomIn: typeof zoomIn;
    zoomOut: typeof zoomOut;
    resetView: typeof resetView;
    toggleExplode: typeof toggleExplode;
  };
}