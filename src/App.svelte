<script>
	import {onMount} from 'svelte'
	import {css} from './stitches.config'

const button = css('div', {
  backgroundColor: '$tomato9',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '$tomato9',
  },
});
</script>




<h1>Photo album</h1>
<button class={button()}>Button</button>

