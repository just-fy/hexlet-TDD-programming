// дописать функцию iter, в которой описывается логика хода. Если кто-то из игроков убит,
// возвращается список логов. 
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      const message = `${name1} был убит`;
      const newLog = consList(cons(cons(health1, health2), message), log);
      return newLog;
    }
    if (health2 <= 0) {
      const message = `${name2} был убит`;
      const newLog = consList(cons(cons(health1, health2), message), log);
      return newLog;
    }
    const newOrder = order === 1 ? 2 : 1;
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    if (order === 1) {
      const newHealth = health2 - damage;
      const message = `Игрок ${player1} применил ${cardName} против ${player2} и нанес урон ${damage}`;
      const newLog = consList(cons(cons(health1, newHealth), message), log);
      return iter(health1, name1, newHealth, name2, newOrder, newLog);
    }
    const newHealth = health1 - damage;
    const message = `Игрок ${player2} применил ${cardName} против ${player1} и нанес урон ${damage}`;
    const newLog = consList(cons(cons(newHealth, health2), message), log);
    return iter(newHealth, name1, health2, name2, newOrder, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);


// Решение учителя
// BEGIN
if (health1 <= 0) {
  return consList(cons(car(head(log)), `${name1} был убит`), log);
}
const card = random(cards);
const cardName = car(card);
const damage = cdr(card)();
const newHealth = health2 - damage;

const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;
let stats;
// В логе игроки всегда должны быть на своих местах. Первый игрок слева, второй - справа
if (order === 1) {
  stats = cons(cons(health1, newHealth), message);
} else if (order === 2) {
  stats = cons(cons(newHealth, health1), message);
}
const newLog = consList(stats, log);
// Хитрость решения учителя состоит в том, что данные игроков всегда меняются местами. Это видно
// по вызову ниже. Параметры первого игрока становятся параметрами второго и наоборот.
// Такой подход позволяет упростить логику и всегда считать что атакует игрок номер 1.
return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
// END