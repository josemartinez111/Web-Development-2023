// FILE: components/shared/sidebar-item/sidebar-item.tsx
// _________________________________________

import { $, component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { useFormattedOutput } from '~/utils/utils';
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
    const HOVER_EFFECT = 'flex items-center justify-center hover:opacity-100 hover:translate-x-5 hover:py-2';
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
           class={ `${ HOVER_EFFECT } ${ customClass }` }
      >
        <span>
          <i class={ `uil ${ icon }` }></i>
        </span>
        <span class='text-sm'>
          <>{ name }</>
        </span>
      </div>
    );
  },
);
// _______________________________________________
