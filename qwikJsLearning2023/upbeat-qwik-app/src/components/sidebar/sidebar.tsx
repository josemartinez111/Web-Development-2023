// FILE: components/sidebar/sidebar.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { SidebarItem } from '~/components/shared/sidebar-item/sidebar-item';
import { SideBarItemsListType, SideBarItemType } from '~/types/type';
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
  
  const CUSTOM_CLASS = `transition-all duration-350 ease-in-out
  hover:bg-gray-200 cursor-pointer rounded`;
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div class='text-gray-900'>
      <div class='flex-col gap-6 p-6 flex border-gray-200 border-b cursor-pointer'>
        { SIDEBAR_ITEMS_TOP.map((item: SideBarItemType, index: number) => (
          <SidebarItem
            key={ index }
            name={ item.name }
            route={ item.route }
            icon={ item.icon }
            customClass={ CUSTOM_CLASS }
          />
        )) }
      </div>
      <div class='flex-col gap-6 p-6 flex cursor-pointer'>
        { SIDEBAR_ITEMS_BOTTOM.map((item: SideBarItemType, index: number) => (
          <SidebarItem
            key={ index }
            name={ item.name }
            route={ item.route }
            icon={ item.icon }
            customClass={ CUSTOM_CLASS }
          />
        )) }
      </div>
    </div>
  );
});
// _______________________________________________
