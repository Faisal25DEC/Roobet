import Ethereum from "../../assets/ethereum.png";
import Tether from "../../assets/tehter.png";
import Bitcoin from "../../assets/bitcoin.png";
import Cash from "../../assets/cash.png";
import Litecoin from "../../assets/litecoin.png";

const getRandomValue = (array) =>
  array[Math.floor(Math.random() * array.length)];

const games = [
  "Dice",
  "Mines",
  "Crash",
  "No Comm Speed",
  "Razor Returns",
  "Sweet Bonanza",
  "Prive Lounge Black",
  "Fat Banker",
];
const users = ["Hidden", "howcouldilose", "Ramsay258", "Finley155", "Jokonda"];
export const currencies = [Tether, Bitcoin, Cash, Litecoin, Ethereum];

export const generateRandomArray = () => {
  const game = getRandomValue(games);
  const user = getRandomValue(users);
  const price = `$${(Math.random() * 500).toFixed(2)} ${getRandomValue(
    currencies
  )}`;
  const multiplier = `${(Math.random() + 1).toFixed(2)}x`;
  const floatAmount = `$${(Math.random() * 500).toFixed(2)}`;

  return [game, user, "", price, multiplier, floatAmount];
};

const randomArrays = Array.from({ length: 12 }, generateRandomArray);

console.log(randomArrays);
randomArrays.unshift(["OYUN", "KULLANICI", "ZAMAN", "BAHIS", "COKLU", "ODEME"]);

export { randomArrays };

export function getCurrentTimeAMPM() {
  const currentTime = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return currentTime.toLocaleTimeString("en-US", options);
}

// Example usage:
const currentTimeAMPM = getCurrentTimeAMPM();
console.log(currentTimeAMPM);
