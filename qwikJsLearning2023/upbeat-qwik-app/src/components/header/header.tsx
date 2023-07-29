// FILE: components/header/header.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Avatar, CustomButton, InputSearchBar } from '~/components';
// _________________________________________

// _________________________________________

export const Header = component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <header class='h-[76px] p-5 pt-4 flex'>
      <div class='  w-full flex'>
        <InputSearchBar />
      </div>
      <div class='flex gap-2'>
        <div class='flex gap-2'>
          <CustomButton label='Pricing' color='default' />
          <CustomButton label='Go Premium' icon='uil-star' color='primary' />
        </div>
        <div class='flex gap-2'>
          <Link href='/auth/login'>
            <Avatar src={ '/assets/images/thanos.png' } />
          </Link>
        </div>
      </div>
    </header>
  );
});
// _______________________________________________