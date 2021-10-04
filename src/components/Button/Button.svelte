<script>
  import {css} from '../../stitches.config'
  const button = css({
  border: 0,
  bg: '$tomato9',
  borderRadius: '$1',
  fontSize: '$1',
  p: '$3',
  color: '#fff',
  transition: 'background-color .2s, box-shadow .2s',

  '&:hover': {
    cursor: 'pointer',
    boxShadow: '$1',
    }
  }
  )
</script>

<button class={button}>
  <slot />
</button>