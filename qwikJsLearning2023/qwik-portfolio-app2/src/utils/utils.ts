// FILE: utils/utils.ts
// _______________________________________________

import { $, Signal, useOnDocument, useSignal } from '@builder.io/qwik';
// _______________________________________________

export function useOnScrollTo(): Signal<string> {
  const elementId = useSignal('');
  
  const onScrollTo = $((event: Event) => {
    const { id } = event.target as HTMLElement;
    elementId.value = id;
    
    document.getElementById(id);
  });
  
  useOnDocument('smooth', onScrollTo);
  return elementId;
}

// export const scrollTo = $((elementId: string) => {
//   const element = document.getElementById(elementId);
//   element?.scrollIntoView({ behavior: 'smooth' });
// });
// _______________________________________________