<script>
  export let options;

  function handleKeyup(e, key) {
    const { keyCode } = e;

    switch (keyCode) {
      case 38:
        return options[key]++;
      case 40:
        return options[key]--;
    }
  }
</script>

<style>
  .intro {
    width: 270px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    width: 50px;
    margin: 0;
    text-align: center;
  }

  button {
    width: 100%;
    border: 0;
    background: rgb(116, 222, 236);
    color: white;
  }
</style>

<article class="abs-center intro">
  <div>
    <span>몇 장이 일치해야하나요?</span>
    <input
      bind:value={options.matchCount}
      on:keyup={(e) => handleKeyup(e, 'matchCount')} />
  </div>
  <div>
    <span>카드 무늬 수는?</span>
    <input
      bind:value={options.patternCount}
      on:keyup={(e) => handleKeyup(e, 'patternCount')} />
  </div>
  <div>
    <span>몇 배수를 맞출건가요?</span>
    <input
      bind:value={options.multiples}
      on:keyup={(e) => handleKeyup(e, 'multiples')} />
  </div>
  <button on:click>시작하기</button>
</article>
