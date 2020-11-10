<script>
  export let finger;
  export let handleFingerClick;
</script>

<button on:click={() => handleFingerClick(finger)}>{finger.label}</button>
