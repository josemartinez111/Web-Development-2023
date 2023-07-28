// FILE: components/shared/custom-button/custom-button.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
// _________________________________________

export interface CustomButtonProps {
  color: 'primary' | 'default';
  label?: string;
  icon?: string;
}
// _________________________________________

export const CustomButton = component$<CustomButtonProps>(({
  color,
  label,
  icon,
}) => {
  const BUTTON_STYLE_CHOICE = {
    'qwik-button-primary text-xs': (color === 'primary'),
    'qwik-button-default': (color !== 'primary'),
  };
  // _______________________________________________
  return (
    <button class={ BUTTON_STYLE_CHOICE }>
    { icon ? <i class={ 'uil ' + icon }></i> : null }
      <span class='overflow-ellipsis overflow-hidden whitespace-nowrap'>
        { label }
      </span>
    </button>
  );
});
// _______________________________________________