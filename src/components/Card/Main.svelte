<script>
  import {
    createCards,
    shuffleCards,
    getColumnCount,
    cardWidth,
    cardMargin,
  } from "./util";
  import Card from "./Card.svelte";

  export let options;
  const { matchCount } = options;
  const cards = shuffleCards(createCards(options));
  const columnCount = getColumnCount(cards);

  let openCards = [];

  function openCard(index) {
    const isOpen = cards[index].isOpen;

    if (isOpen || openCards.length >= matchCount) {
      return;
    }

    cards[index].isOpen = true;
    openCards.push(index);
    checkOpenCards();
  }

  function checkOpenCards() {
    if (openCards.length !== matchCount) {
      return;
    }

    const patternMap = {};
    openCards.forEach((i) => (patternMap[cards[i].pattern] = true));
    const openedPatternCount = Object.keys(patternMap).length;

    if (openedPatternCount === 1) {
      openCards = [];
      return;
    }

    setTimeout(() => {
      openCards.forEach((i) => (cards[i].isOpen = false));
      openCards = [];
    }, 500);
  }

  cards.forEach((card, i) => {
    setTimeout(() => {
      cards[i].isOpen = true;
      // NOTE: index로 접근하는법과, card 객체로 접근하는법에 따라 내부동작이 다름
    }, i * 100);
    setTimeout(() => {
      cards[i].isOpen = false;
    }, i * 100 + 100 * (cards.length + 2));
  });
</script>

<style>
  nav {
    text-align: right;
  }

  button {
    border: 0;
    background: rgb(116, 222, 236);
    color: white;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
</style>

<nav><button on:click>처음으로</button></nav>
<article style="width: {columnCount * (cardWidth + cardMargin * 2)}px">
  {#each cards as card, i}
    <Card {card} on:click={() => openCard(i)} />
  {/each}
</article>
