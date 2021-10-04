import App from './App.svelte';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontSize: "$10" },
});

globalStyles()

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;