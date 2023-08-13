// FILE: components/header/header.tsx
// _________________________________________

import { $, component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { useOnScrollTo } from '~/utils/utils';
import styles from './header.scss?inline';
// _________________________________________

// _________________________________________

export const Header = component$(() => {
  useStylesScoped$(styles);
  const activeTab = useSignal('home');
  const scrollTo = useOnScrollTo();
  
  // ________________ [functions] __________________
  
  const navigateOnClick = $((elementId: string) => {
    scrollTo.value = elementId;
    activeTab.value = elementId;
    console.log({ elementId });
  });
  // _______________________________________________
  return (
    <header>
      <div class='topbar'>
        <div class='container animate__animated animate__fadeInDown'>
          <div class='topbar_inner'>
            <div class='logo'>
              <a href='#'>
                <img src='/images/logo.png' alt='logo' width='65' height='63' />
              </a>
            </div>
            <div class='menu'>
              <ul>
                <li class={ { current: activeTab.value === 'home' } }>
                  <button onClick$={ () => navigateOnClick('home') }>Home</button>
                </li>
                <li class={ { current: activeTab.value === 'about' } }>
                  <button onClick$={ () => navigateOnClick('about') }>
                    About
                  </button>
                </li>
                <li class={ { current: activeTab.value === 'services' } }>
                  <button onClick$={ () => navigateOnClick('services') }>
                    Services
                  </button>
                </li>
                <li class={ { current: activeTab.value === 'portfolio' } }>
                  <button onClick$={ () => navigateOnClick('portfolio') }>
                    Portfolio
                  </button>
                </li>
                <li class={ { current: activeTab.value === 'news' } }>
                  <button onClick$={ () => navigateOnClick('news') }>News</button>
                </li>
                <li class={ { current: activeTab.value === 'contact' } }>
                  <button onClick$={ () => navigateOnClick('contact') }>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
// _______________________________________________














