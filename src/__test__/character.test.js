import Character from '../js/character';
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('Заданный персонаж не существует', () => {
  expect(() => {
    const result = new Character('xxx', 'Fairy');
    return result;
  }).toThrow();
});

test('creation Bowman', () => {
  const recieved = new Bowman('Maxim', 'Bowman');
  expect(recieved).toEqual({
    name: 'Maxim',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test('creation Daemon', () => {
  const recieved = new Daemon('Maxim', 'Daemon');
  expect(recieved).toEqual({
    name: 'Maxim',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test('creation Magician', () => {
  const recieved = new Magician('Maxim', 'Magician');
  expect(recieved).toEqual({
    name: 'Maxim',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test('creation Swordsman', () => {
  const recieved = new Swordsman('Maxim', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Maxim',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test('creation Undead', () => {
  const recieved = new Undead('Maxim', 'Undead');
  expect(recieved).toEqual({
    name: 'Maxim',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
test('creation Zombie', () => {
  const recieved = new Zombie('Maxim', 'Zombie');
  expect(recieved).toEqual({
    name: 'Maxim',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
