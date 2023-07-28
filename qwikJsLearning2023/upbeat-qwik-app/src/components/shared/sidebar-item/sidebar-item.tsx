// FILE: components/shared/sidebar-item/sidebar-item.tsx
// _________________________________________

import { $, component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { useFormattedOutput } from '~/utils/utils';
import styles from '~/components/sidebar/sidebar.module.css';
// _________________________________________

type SidebarItemProps = {
  name?: string;
  icon?: string;
  route?: string;
  customClass?: string
};
// _________________________________________

export const SidebarItem = component$<SidebarItemProps>(
  ({ name, icon, route, customClass }) => {
    const navigateTo = useNavigate();
    // ________________ [functions] __________________
    
    const moveToPage = $(() => {
      useFormattedOutput({
        strArg: `🚩 Navigated to: ${ route }` || 'NO ROUTE FOUND',
      });
      // if (route) navigateTo.path = route;
    });
    // _______________________________________________
    return (
      <div onClick$={ moveToPage }
           class={ `${ styles.hoverEffect } ${ customClass }` }>
        <span>
          <i class={ `uil ${ icon }` }></i>
        </span>
        <span class='ml-3 text-sm'>
          <>{ name }</>
        </span>
      </div>
    );
  },
);
// _______________________________________________
