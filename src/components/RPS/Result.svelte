<script>
  export let result;
  export let retry;
</script>

<style>
  article {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eeeeee90;
    animation: fadein 1.5s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 100px;
    background-color: white;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<article>
  <section>
    <h1>{result}</h1>
    <button on:click={retry}>다시하기</button>
  </section>
</article>
