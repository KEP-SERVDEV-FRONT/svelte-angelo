<script>
  import { fingerMap, score, getRandomFinger, getGameResult } from "./util";
  import Finger from "./Finger.svelte";
  import Result from "./Result.svelte";

  const fingers = Object.values(fingerMap);

  let result;
  let timer;

  let com = getRandomFinger(fingers);
  let user;

  function startGame() {
    timer = setInterval(() => {
      com = getRandomFinger(fingers);
    }, 200);
  }

  function retry() {
    result = null;
    user = null;
    startGame();
  }

  function handleFingerClick(finger) {
    clearInterval(timer);

    user = finger;

    result = getGameResult({
      com: com.value,
      user: user.value,
    });
    $score[result]++;
  }

  startGame();
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  span {
    padding: 5px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello world!</h1>
  {#each Object.entries($score) as [type, count]}
    <span>{type} : {count}</span>
  {/each}
  <h1>{com.label}</h1>
  <h2>vs</h2>
  <h1>{user?.label || '?'}</h1>
  {#each fingers as finger}
    <Finger {finger} {handleFingerClick} />
  {/each}
  {#if result}
    <Result {result} {retry} />
  {/if}
</main>
