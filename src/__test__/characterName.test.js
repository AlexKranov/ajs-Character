import Character from "../js/character";

test("Количество символов в имени менее 2", () => {
  expect(() => {
    const result = new Character("p", "Bowman");
    return result;
  }).toThrow();
});

test("Количество символов в имени более 10", () => {
  expect(() => {
    const result = new Character("PeterPupkin", "Bowman");
    return result;
  }).toThrow();
});

test("Имя не является строкой", () => {
  expect(() => {
    const result = new Character(555555555, "Bowman");
    return result;
  }).toThrow();
});