// FILE: components/ExampleComponent.tsx

import { $, component$, useOnWindow, useSignal } from '@builder.io/qwik';

/**
 * A custom hook to listen to click events on the window.
 * If the clicked element's id is not 'my-element', it closes the dropdown.
 */
function useCloseDropdown() {
  const isOpen = useSignal(false);
  const dropdownToggleBtn = useSignal<HTMLElement | null>(null);
  
  const closeDropdown = $((event: Event): void => {
    if (dropdownToggleBtn.value && !dropdownToggleBtn.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  });
  
  useOnWindow('click', closeDropdown);
  
  return {
    isOpen,
    dropdownToggleBtn,
  };
}

export const ExampleComponent = component$(() => {
  const { isOpen, dropdownToggleBtn } = useCloseDropdown();
  
  const setDropdownToggleBtnRef = (item: Element): void => {
    dropdownToggleBtn.value = item as HTMLElement;
  };
  
  return (
    <div>
      <button
        ref={ setDropdownToggleBtnRef }
        onClick$={ () => isOpen.value = true }
      >
        Click me!
      </button>
      {
        isOpen.value &&
        <>
          <div><i>The dropdown is open!</i></div>
          <div style={ { margin: '1.5rem', marginLeft: '1.5rem' } }>
            <b>CLICK OUTSIDE</b>
          </div>
        </>
      }
      </div>
  );
});

// /**
//  * A custom hook to listen to click events on the window.
//  * If the clicked element's id is not 'my-element', it closes the dropdown.
//  */
// function useCloseDropdown() {
//   const isOpen = useSignal(false);
//
//   const closeDropdown = $((event: Event): void => {
//     const { id } = event.target as HTMLDivElement;
//     if (id !== 'my-element') isOpen.value = false;
//   });
//
//   useOnWindow('click', closeDropdown);
//   return isOpen;
// }
//
// export const ExampleComponent = component$(() => {
//   const dropdown = useCloseDropdown();
//
//   return (
//     <div>
//       <button id='my-element' onClick$={ () => dropdown.value = true }>
//         Click me!
//       </button>
//       {
//         dropdown.value &&
//         <>
//           <div><i>The dropdown is open!</i></div>
//           <div style={ { margin: '3rem', marginLeft: '1.5rem' } }>
//             <b>CLICK OUTSIDE</b>
//           </div>
//         </>
//       }
//       </div>
//   );
// });
