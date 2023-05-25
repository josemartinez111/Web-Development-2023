// FILE: routes/(auth)/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import AuthLoginStyles from './auth-layout.css?inline';
// _______________________________________________

export default component$(() => {
	useStylesScoped$(AuthLoginStyles);
	
	return (
		<div class="login-main">
			<div class="login-bg">
				<div class="login-bg-gradient"></div>
				<div class="login-white-bg">
					<div class="max-w-md mx-auto">
						<div>
							<h1 class="login-title">Login Form</h1>
						</div>
						{/** slot for children ============================ */}
						<div class="login-content">
							<Slot />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
// _________________________________________
