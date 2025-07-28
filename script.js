function generateSmartNumbers(drawType) {
  const hotNumbers = [3, 7, 12, 23, 31, 39, 45];
  const coldNumbers = [1, 2, 5, 6, 8, 13, 28];
  const smartNumbers = [];

  while (smartNumbers.length < 6) {
    const useHot = Math.random() > 0.4;
    const range = useHot ? hotNumbers : coldNumbers;
    const number = range[Math.floor(Math.random() * range.length)];

    if (!smartNumbers.includes(number)) {
      smartNumbers.push(number);
    }
  }

  smartNumbers.sort((a, b) => a - b);

  document.getElementById("result").innerHTML = `
    <strong>${drawType.toUpperCase()} Picks:</strong><br>
    ${smartNumbers.join(" - ")}
  `;
}
