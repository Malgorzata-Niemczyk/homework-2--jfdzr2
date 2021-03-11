## **Zadanie 1**

1) Napisz funkcję, która policzy sumę elementów w tablicy

2) Napisz funkcję, która policzy sumę ale tylko elementów typu number

Dane:

```javascript
[9, 3, '7', '3'] // 22
['5', '0', 9, 3, 2, 1, '9', 6, 7]  // 42
['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] // 41
```

## **Zadanie 2**

Napisz funkcję, która zwróci inicjały imienia I nazwiska, czyli po podaniu np `Harry Potter` zwróci `H.P.` .

Funkcja przyjmuje tylko **jeden** parametr

```javascript
getInitials('Harry Potter') => 'H.P.'
```

## **Zadanie 3**

Napisz funkcję, która policzy sumę dodatnich liczb z tablicy. Użyj `reduce`

```javascript
[1,2,3,4,5]  //15
[1,-2,3,4,5] //13
[] // 0
[-1,-2,-3,-4,-5] //0
[-1,2,3,4,-5] //9
```

*Bonus* (ulepsz funkcję o możliwość liczenia liczb dodatnich I sumowaniu ujemnych. Czyli policzenie ile jest liczb dodatnich w tablicy I podaniu sumy ujemnych. [ ilośćDodatnich, sumaUjemnych ]

## **Zadanie 4**

Czy zostanę junior developerem??
Trudne pytanie! Napisz funkcję, która pomoże rozwikłać zagadkę.

Wiemy, że żeby zostać junior developerem trzeba spełnić 2 warunki jednocześnie:
A) przerobić odpowiednio dużo zadań
B) przepracować w czasie wolnym co najmniej 80h

```javascript
 var students = [
  {name: 'Janusz', tasksDone: 150, hoursSpent: 160},
  {name: 'Karyna', tasksDone: 1, hoursSpent: 1},
  {name: 'Krystek', tasksDone: 100, hoursSpent: 80},
  {name: 'Seba', tasksDone: 200, hoursSpent: 40},
  {name: 'Dagmara', tasksDone: 50, hoursSpent: 100}
]

 var requirements = {
  minHoursSpent: 80,
  minTasksDone: 100
}
```

Funkcja powinna zwracać string w formie
"imionaOsóbKtóreZostanąJuniorDeveloperem - gratulacje! Ciężka praca popłaca! imionaOsóbKtórymSięToNieUda DO ROBOTY LENIE!"

Przykład zwrotki: `"Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek - DO ROBOTY LENIE!"`

## **Zadanie 5**

### dodawanie tablic

Chcę móc dodawać tablice jak liczby, napisz funkcję, gdzie będę mógł podać 2 tablice i jako wynik otrzymam sumę ich elementów

array1 + array2

[1,2] + [1,2] będzie 6

## **Zadanie 6**

### umiesz w banjo?!

Napisz funkcję, która odpowie na pytanie czy umiesz w banjo?!

Założenie jest takie, że jeżeli Twoje imię zaczyna się od `R` albo od `r` to umiesz w banjo!!!

Warunkiem jest to, że funkcja przyjmuje tylko jeden parametr i zwraca string w takiej postaci

`IMIE umie w banjo`

`IMIE, nie umie w banjo :(`

Bonus: Dodaj warunek, że jeżeli ktoś ma gdziekolwiek `r` w imieniu to umie w banjo!

## **Zadanie 7**

### String na lewą stronę

Napisz funkcję, która zrobi coś takiego

```javascript
'world'  =>  'dlrow'
```

czyli przyjmuje parametr string, który zwróci od tyłu

## **Zadanie 8**

Czy się wszyscy zmieszczą?

Napisz funkcję, która przyjmuje 3 parametry

`capacity, onBoard, waiting`

Pierwszy parametr oznacza pojemność np. autobusu, drugi parametr to osoby będące w środku, ostatni parametr to osoby czekające na przystanku. (Kierowcy nie bierzemy pod uwagę).

Funkcja zwraca ile miejsca jeszcze pozostanie lub o ile przekroczony jest limit z osób, które chcą wejść

```javascript
(10, 5, 5) // zwróci, `0, all 5 passengers can get in`

(10, 2, 5) // zwróci `3, all 5 passengers can get in`

(10, 7, 5) // zwróci `2, 2 out of 5 passengers won't get in`
```

## Zadanie 9

### Tabliczka mnożenia

Napisz funkcję, która zwróci mi tabliczkę mnożenia dla tej liczby.

czyli multiTable(5) zwróci

```javascript
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```

Do oddzielenia stringów (dodania nowej linii) możesz użyć `\n`. Nie chciałbym nowej linii na samym końcu :)

function multiTable(number) {
  // good luck
  const table = [1,2,3,4,5,6,7,8,9,10]
  return table.map(n => `${n} * ${number} = ${n*number}`).join('\n')
}

## **Zadanie 10**

Czy mogę podzielić?

Napisz funkcję, która przyjmie 3 argumenty
(liczba_do_podzielenia, dzielnik, dzielnik)
Po czym zwróci boolean, mówiący o tym, czy liczba jest podzielna bez rezsty przez oba dzielniki

```javascript
(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false
```

## **Zadanie 11**

Kto jest najmłodszy, a kto najstarszy i o ile?!

Święta się zbliżają, wśród 5 możliwych domowników na Wiglii chcemy dowiedzieć się kto jest najstarszy, najmłodszy i o ile. Zakładamy pełne skończone lata także dziemcko w wieku 4 miesięcy i 14 tygodniu będzie liczone jako 0.

```javascript
([82, 15, 6, 38, 35]), [6, 82, 76]
```

## **Zadanie 12**

Spotkajmy się w środku

Napisz funkcję, która zwróci index elementu, który jest na środku

```javascript
gimme([2, 3, 1]) => 0
gimme([5, 10, 14]) => 1
```

## **Zadanie 13**

Jak masz na imię super złoczyńco?!

Napisz funkcję, w której podasz datę swoich urodzin, a ona powie Ci brzmi imię Twojego złego alter ego!!!👿

Skorzystaj z poniższego słownika lub stwórz swój jak masz ochotę

```javascript
Month -> first name
January -> "The Evil"
February -> "The Vile"
March -> "The Cruel"
April -> "The Trashy"
May -> "The Despicable"
June -> "The Embarrassing"
July -> "The Disreputable"
August -> "The Atrocious"
September -> "The Twirling"
October -> "The Orange"
November -> "The Terrifying"
December -> "The Awkward"

Last digit of date -> last name
0 -> "Mustache"
1 -> "Pickle"
2 -> "Hood Ornament"
3 -> "Raisin"
4 -> "Recycling Bin"
5 -> "Potato"
6 -> "Tomato"
7 -> "House Cat"
8 -> "Teaspoon"
9 -> "Laundry Basket"
```

```javascript
getVillainName(new Date("May 3") => "The Despicable Raisin"
```

## **Zadanie 14**

Pomóż mi sprawdzić klasówki

Napisz funkcję, która przyjmie 2 tablice o takiej samej długości oraz policzy ilość zdobytych punktów z klasówki.

Poprawna odpowiedź: 2pkt

Niepoprawna odpowiedź: -1pkt

Brak odpowiedzi: 0pkt

```javascript
checkExam(["a", "a", "b", "b"], ["a", "a", "b", "d"]) → 5
checkExam(["b", "c", "b", "a"], ["",  "c", "a", "c"]) → 0
```

Bonus: Napisz funkcję, która operuje na obiektach, a nie na tablicach

## **Zadanie 15**

Pomóż Mikołajowi ogarnąć listę imion!

Św. Mikołaj potrzebuje Twojej pomocy! Napisz 2 funkcje. Każda z nich przyjmuje listę obiektów. Pierwsza funkcja zwróci imiona dobrych osób, druga funkcja zwróci imiona tylko złych osób. Zwróć pustą tablicę, gdy nikt się nie nadaje na żądaną listę.

Każdy obiekt posiada 2 property. `name` oraz `wasNice`

```javascript
getNiceNames( [
    { name: 'Kursant czytający ten tekst', wasNice: true },
    { name: 'Jack Mehoff', wasNice: false },
    { name: 'Santa', wasNice: true }
] )
// => returns [ 'Kursant czytający ten tekst', 'Santa' ]

getNaughtyNames( [
    { name: 'Kursant czytający ten tekst', wasNice: true },
    { name: 'Eric Shun', wasNice: false },
    { name: 'Santa', wasNice: true }
] )
// => returns [ 'Eric Shun' ]
```

# Punktacja

5 pkt za zrobienie wszystkich zadań ( za 10 zadań zrobiony 3 pkt, za 5 zadań zrobionych 1 pkt ).

1 pkt dodatkowy za rozwiązanie bonusów.
