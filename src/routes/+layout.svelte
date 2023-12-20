<script>
	import { Title } from '$components';
	import { theme } from '$stores';
	import '../app.pcss';
</script>

<Title base="Tic-Tac-Toe" />
<main
	class="flex max-h-[100dvh] min-h-[100dvh] flex-col pwa:max-h-[100vh] pwa:min-h-[100vh] pwa:pb-[env(safe-area-inset-bottom)] pwa:pt-[env(safe-area-inset-top)]"
>
	<slot />
</main>
