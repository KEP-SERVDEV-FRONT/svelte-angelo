export let cardWidth = 120;
export let cardHeight = cardWidth * 1.5;
export let cardMargin = 16;

export function isValidOption(options) {
  const { matchCount, patternCount, multiples } = options;

  // NOTE: 숫자형이 아닌 값 비교 시 편리함을 위해 < 2 대신 ! >= 2를 선택
  if (!(matchCount >= 2)) {
    alert("장 일치 수는 2 이상부터 가능");
    return false;
  } else if (!(patternCount >= 1)) {
    alert("카드 무늬 수는 1 이상부터 가능");
    return false;
  } else if (!(multiples >= 1)) {
    alert("배수는 1 이상부터 가능");
    return false;
  }

  return true;
}

export function createCards(options) {
  const { matchCount, patternCount, multiples } = options;
  // NOTE: ascii A부터 시작
  const start = 65;
  const repeatPerPattern = matchCount * multiples;
  let cards = [];

  for (let i = 0; i < patternCount; i++) {
    const pattern = String.fromCharCode(start + i);
    const cardsFromPattern = [...Array(repeatPerPattern)].map((_, tempKey) => {
      const key = i * repeatPerPattern + tempKey;
      const card = {
        key,
        pattern,
        isOpen: false,
      };
      return card;
    });
    cards = [...cards, ...cardsFromPattern];
  }

  return cards;
}

export function shuffleCards(cards) {
  return [...cards].sort(() => Math.random() - 0.5);
}

export function getColumnCount(cards) {
  const columns = [8, 7, 5, 4, 3, 2];
  const { length } = cards;

  for (let col of columns) {
    if (length % col === 0) {
      return col;
    }
  }

  return 2;
}
