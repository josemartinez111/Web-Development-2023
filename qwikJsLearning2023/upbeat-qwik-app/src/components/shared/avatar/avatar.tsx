// FILE: components/shared/avatar/avatar.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
// _________________________________________

interface AvatarProps {
  src: string;
  alt?: string;
}
// _________________________________________

export const Avatar = component$<AvatarProps>(({ src, alt }) => {
  // _______________________________________________
  return (
    <div class='w-[40px] h-[40px]'>
			<img
        class='qwik-avatar'
        src={ src }
        alt={ alt }
        width='460'
        height='460'
      />
		</div>
  );
});
// _______________________________________________