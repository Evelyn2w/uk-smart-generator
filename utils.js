export function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
