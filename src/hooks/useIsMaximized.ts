import { useState, useEffect } from 'react';
import { platform } from '@/lib/platform/platformAdapter';

export function useIsMaximized(): boolean {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    platform.isMaximized().then((max) => {
      if (isMounted) setIsMaximized(max);
    });

    const cleanup = platform.onMaximizedChange((max) => {
      if (isMounted) setIsMaximized(max);
    });

    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);

  return isMaximized;
}
