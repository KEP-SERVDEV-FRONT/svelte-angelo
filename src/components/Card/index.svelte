<script>
  import { isValidOption } from "./util";
  import Intro from "./Intro.svelte";
  import Main from "./Main.svelte";

  const PAGES = {
    INTRO: "INTRO",
    MAIN: "MAIN",
  };
  let page = PAGES.INTRO;
  let options = { matchCount: 2, patternCount: 5, multiples: 1 };

  function navigateToMain() {
    if (!isValidOption(options)) {
      return;
    }
    page = PAGES.MAIN;
  }

  function navigateToIntro() {
    page = PAGES.INTRO;
  }
</script>

{#if page === PAGES.INTRO}
  <Intro on:click={navigateToMain} {options} />
{:else if page === PAGES.MAIN}
  <Main {options} on:click={navigateToIntro} />
{/if}
