import Bowman from "../js/Bowman";
import Daemon from "../js/Daemon";
import Magician from "../js/Magician";
import Swordsman from "../js/Swordsman";
import Zombie from "../js/Zombie";

test("Метод levelUp повышает уровень на 1 и изменяет показатели health, attack, deffence", () => {
  const recieved = new Magician("Valera", "Magician");
  recieved.levelUp();
  expect(recieved).toEqual({
    name: "Valera",
    type: "Magician",
    health: 100,
    level: 2,
    attack: 12,
    deffence: 48,
  });
});

test("Метод levelUp выбрасывает ошибку, если health = 0", () => {
  const recieved = new Zombie("Maxim", "Zombie");
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow("Нельзя повысить уровень умершего!");
});

test("метод damage(points), который меняет внутреннее состояние объекта (points - это урон, наносимый персонажу)", () => {
  const recieved = new Bowman("Maxim", "Bowman");
  recieved.damage(1);
  const result = {
    name: "Maxim",
    type: "Bowman",
    health: 99.1,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  expect(recieved).toEqual(result);
});

test("Метод damage(points) не должен изменять значения, если health = 0", () => {
  const recieved = new Swordsman("xxxxxx", "Swordsman");
  recieved.health = 0;
  const result = {
    name: "xxxxxx",
    type: "Swordsman",
    health: 0,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test("при health < 0 метод damage(points) должен уствновить health = 0", () => {
  const recieved = new Daemon("xxxxxx", "Daemon");
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});