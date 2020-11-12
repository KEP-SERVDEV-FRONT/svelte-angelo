<script>
  import { cardWidth, cardHeight } from "./util";

  export let card;
</script>

<style>
  article {
    position: relative;
    width: 120px;
    height: 180px;
    margin: 16px;
    font-size: 40px;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 10px solid black;
    border-radius: 10px;
    transition: 0.5s all;
  }

  .front {
    backface-visibility: hidden;
  }

  .turn > .front,
  .turn > .back {
    transform: rotateY(180deg);
  }

  .pattern {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<main>
  <article
    class:turn={!card.isOpen}
    style="width: {cardWidth}px; height: {cardHeight}px;"
    on:click>
    <div class="front"><span class="pattern">{card.pattern}</span></div>
    <div class="back" />
  </article>
</main>
