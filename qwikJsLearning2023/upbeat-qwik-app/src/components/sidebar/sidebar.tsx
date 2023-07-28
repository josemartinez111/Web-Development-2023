// FILE: components/sidebar/sidebar.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { SidebarItem } from '~/components/shared/sidebar-item/sidebar-item';
import { SideBarItemsListType, SideBarItemType } from '~/types/type';
import styles from '~/components/shared/sidebar-item/sidebar-item.module.css';
// _________________________________________

export const SideBar = component$(() => {
  const SIDEBAR_ITEMS_TOP: SideBarItemsListType = [
    { name: 'Music', route: '/', icon: 'uil-music' },
    { name: 'Sound Effect', route: '/sfx', icon: 'uil-graph-bar' },
    { name: 'Trending', route: '/trending', icon: 'uil-chart-line' },
  ];
  
  const SIDEBAR_ITEMS_BOTTOM: SideBarItemsListType = [
    { name: 'My Favorites', route: '/favorites', icon: 'uil-heart' },
    { name: 'My Playlist', route: '/playlist', icon: 'uil-book-alt' },
    { name: 'Download history', route: '/history', icon: 'uil-history' },
  ];
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div class='text-gray-900'>
      <div class={ styles.wrapper1 }>
        { SIDEBAR_ITEMS_TOP.map((item: SideBarItemType, index: number) => (
          <SidebarItem
            customClass={ `transition-all duration-350 ${ styles.custom }` }
            key={ index }
            name={ item.name }
            route={ item.route }
            icon={ item.icon }
          />
        )) }
      </div>
      <div class={ styles.wrapper2 }>
        { SIDEBAR_ITEMS_BOTTOM.map((item: SideBarItemType, index: number) => (
          <SidebarItem
            customClass={ `transition-all duration-350 ${ styles.custom }` }
            key={ index }
            name={ item.name }
            route={ item.route }
            icon={ item.icon }
          />
        )) }
      </div>
    </div>
  );
});
// _______________________________________________
