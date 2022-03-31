INSERT INTO user(id, username, password, givenName, surname, balance, mail) VALUES('1', 'doe', 'doe', 'John', 'Doe', '200 CZK', 'doe@example.com');
INSERT INTO user(id, username, password, givenName, surname, balance, mail) VALUES('2', 'srsen', 'srsen', 'Pepa', 'Sršeň', '300 CZK', 'srsen@example.com');
INSERT INTO user(id, username, password, givenName, surname, balance, mail) VALUES('3', 'novak', 'novak', 'Jan', 'Novák', '200 CZK', 'novak@example.com');
INSERT INTO user(id, username, password, givenName, surname, balance, mail) VALUES('4', 'vareckova', 'vareckova', 'Miluše', 'Vařečková', '["ROLES.COOK"]', '250 CZK', 'vareckova@example.com',);
INSERT INTO user(id, username, password, givenName, surname, balance, mail) VALUES('5', 'kopr', 'kopr' 'David' 'Kopr', '["ROLES.COOK"]', '1000 CZK', 'kopr@example.com');
INSERT INTO user(id, username, password, givenName, surname, balance, mail) VALUES('6', 'admin', 'admin', 'Tomáš', 'Administrátorský', '["ROLES.USER_ADMIN", "ROLES.COOK"]', '2000 CZK', 'administratorsky@example.com');

INSERT INTO order(id, userId, mealId) VALUES('1', '1', '1');
INSERT INTO order(id, userId, mealId) VALUES('2', '1', '4');
INSERT INTO order(id, userId, mealId) VALUES('3', '1', '7');
INSERT INTO order(id, userId, mealId) VALUES('4', '1', '10');
INSERT INTO order(id, userId, mealId) VALUES('5', '1', '13');
INSERT INTO order(id, userId, mealId) VALUES('6', '1', '16');
INSERT INTO order(id, userId, mealId) VALUES('7', '1', '19');

INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES('1','Kuřecí řízek', 'Schnitzel', '120 CZK', NOW(), "['1', '3', '4']");
INSERT INTO meal(id, name, nameEng, cost, date) VALUES('2', 'Vepřové kostky na hříbkách s knedlíkem', 'Pork cubes on porcini mushrooms with dumplings', '99 CZK', NOW());
INSERT INTO meal(id, name, nameEng, cost, date) VALUES('3','Cikánský guláš s knedlíkem','Gypsy stew with dumplings','110 CZK', NOW());
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();
INSERT INTO meal(id, name, nameEng, cost, date, alergens) VALUES();



  {
    id: 
  },
  {
    id: 
    date: new Date('2021-11-12').toISOString(),
  },
  {
    id: '4',
    name: 'Vepřová po selsku bramborový knedlík špenát',
    nameEng: 'Pork potato dumpling spinach',
    cost: '105 CZK',
    date: new Date('2021-11-13').toISOString(),
  },
  {
    id: '5',
    name: 'Smažený sýr hranolky tatarská omáčka',
    nameEng: 'Fried cheese fries tartar sauce',
    cost: '100 CZK',
    date: new Date('2021-11-13').toISOString(),
  },
  {
    id: '6',
    name: 'Kuřecí plátek šťouchané brambory',
    nameEng: 'Chicken slice with mashed potatoes',
    cost: '115 CZK',
    date: new Date('2021-11-13').toISOString(),
  },
  {
    id: '7',
    name: 'Koprová omáčka s vejci a hovězím masem knedlík ',
    nameEng: 'Dill sauce with eggs and beef dumpling',
    cost: '130 CZK',
    date: new Date('2021-11-14').toISOString(),
  },
  {
    id: '8',
    name: 'Vepřové výpečky bramborový knedlík červené zelí ',
    nameEng: 'Pork pastry potato dumpling red cabbage',
    cost: '120 CZK',
    date: new Date('2021-11-14').toISOString(),
  },
  {
    id: '9',
    name: 'Indické kuřecí maso s rýží ',
    nameEng: 'Indian chicken with rice',
    cost: '105 CZK',
    date: new Date('2021-11-14').toISOString(),
  },
  {
    id: '10',
    name: 'Smažený hermelín brambory tatarská omáčka ',
    nameEng: 'Fried Camembert Potato Tartar Sauce',
    cost: '115 CZK',
    date: new Date('2021-11-15').toISOString(),
  },
  {
    id: '11',
    name: 'Kovbojské fazole s klobásou a okurkou,chléb ',
    nameEng: 'Cowboy beans with sausage and cucumber, bread',
    cost: '99 CZK',
    date: new Date('2021-11-15').toISOString(),
  },
  {
    id: '12',
    name: 'Plněné bramborové knedlíky uzeninou zelí ',
    nameEng: 'Stuffed potato dumplings with cabbage sausage',
    cost: '135 CZK',
    date: new Date('2021-11-15').toISOString(),
  },
  {
    id: '13',
    name: 'Drůbeží rizoto se sýrem ',
    nameEng: 'Poultry risotto with cheese',
    cost: '100 CZK',
    date: new Date('2021-11-16').toISOString(),
  },
  {
    id: '14',
    name: 'Vepřový steak se smetanovým pórkem na slanině hranolky ',
    nameEng: 'Pork steak with creamy leek on bacon fries',
    cost: '150 CZK',
    date: new Date('2021-11-16').toISOString(),
  },
  {
    id: '15',
    name: 'Pizza',
    nameEng: 'Pizza',
    cost: '145 CZK',
    date: new Date('2021-11-16').toISOString(),
  },
  {
    id: '16',
    name: 'Přírodní sekaný karbanátek,rajčatová salsa,vařené brambory ',
    nameEng: 'Natural chopped meatball, tomato salsa, boiled potatoes',
    cost: '105 CZK',
    date: new Date('2021-11-17').toISOString(),
  },
  {
    id: '17',
    name: 'Boloňské lasagne se sýrem a mletým masem ',
    nameEng: 'Lasagna bolognese with cheese and minced meat',
    cost: '100 CZK',
    date: new Date('2021-11-17').toISOString(),
  },
  {
    id: '18',
    name: 'XXL Smažený řízek bramborová kaše okurka',
    nameEng: 'XXL Fried schnitzel mashed cucumber',
    cost: '160 CZK',
    date: new Date('2021-11-17').toISOString(),
  },
  {
    id: '19',
    name: 'Kuřecí plátek šťouchané brambory',
    nameEng: 'Chicken slice with mashed potatoes',
    cost: '115 CZK',
    date: new Date('2021-11-18').toISOString(),
  },
  {
    id: '20',
    name: 'Krůtí nudličky se zeleninou a rýží ',
    nameEng: 'Turkey strips with vegetables and rice',
    cost: '110 CZK',
    date: new Date('2021-11-18').toISOString(),
  },
  {
    id: '21',
    name: 'Alpské borůvkové knedlíky s vanilkovým krémem sypané mákem',
    nameEng: 'Alpine blueberry dumplings with vanilla cream sprinkled with poppy seeds',
    cost: '115 CZK',
    date: new Date('2021-11-18').toISOString(),
    alergens: ['3', '2', '5'],
  },
];
