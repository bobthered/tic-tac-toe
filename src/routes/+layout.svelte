<script>
	import { Pwa, Title } from '$components';
	import { theme } from '$stores';
	import '../app.pcss';
</script>

<Pwa>
	<link rel="alternate icon" href="/icons/icon-16x16.png" />
	<link rel="apple-touch-icon" href="/icons/icon-apple-touch.png" />
	<link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
	<link rel="manifest" href="/manifest.json" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
	/>
	<meta name="theme-color" content="#0a090b" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</Pwa>
<Title base="Tic-Tac-Toe" />
<main
	class="flex max-h-[100dvh] min-h-[100dvh] flex-col pwa:max-h-[100vh] pwa:min-h-[100vh] pwa:pb-[env(safe-area-inset-bottom)] pwa:pt-[env(safe-area-inset-top)]"
>
	<slot />
</main>
