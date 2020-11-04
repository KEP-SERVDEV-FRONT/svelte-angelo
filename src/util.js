import { writable } from "svelte/store";

export const WIN = "승리";
export const DRAW = "무승부";
export const LOSE = "패배";
export const fingerMap = {
  rock: {
    label: "✊",
    value: 1,
  },
  paper: {
    label: "✋",
    value: 2,
  },
  sissors: {
    label: "✌️",
    value: 3,
  },
};
export const score = writable({
  [WIN]: 0,
  [DRAW]: 0,
  [LOSE]: 0,
})
export function getRandomFinger(fingers){
  return fingers[Math.floor(Math.random() * fingers.length)];
}
export function getGameResult(game) {
  const { com, user } = game;

  if (com === user) {
    return DRAW;
  } else if ((com % 3) + 1 === user) {
    return WIN;
  }
  return LOSE;
}