# javascirptES6-Question

## Zadanie ???? - Javascript Developer

#react #javascript #es2015 #esnext

Napisz funkcję w JavaScript
Funkcja którą napiszesz, musi przeszukiwać tablicę obiektów zawierających pole name typu string i zwracać największą
liczbę występującą w tym polu (liczba powinna być wyszukana wyrażeniem regularnym).

Funkcja powinna przyjmować jeden parametr i zwracać typ number:

> getItemsMaxNumber(items: { name: string; }[]): number;

Jeżeli żadna pozycja nie zawiera liczby, funkcja powinna zwrócić 0.

Przykładowe użycie funkcji:

``` var items = [
{ name: 'item 1' },
{ name: 'item 2' },
{ name: 'item 11' },
{ name: 'item 3' },
{ name: 'item 10' }
];
```

> console.log(getItemsMaxNumber(items)); // Zwraca 11

Postaraj się aby Twój kod był maksymalnie czytelny, wydajny oraz zgodny ze standardami es6+.


# Rozwiązanie:

```
function getItemsMaxNumber(items) {
    let maxNumber = 0;
    for (let item of items) {
        const matches = item.name.match(/\d+/g);
        if (matches) {
            for (let match of matches) {
                const number = parseInt(match);
                if (number > maxNumber) {
                    maxNumber = number;
                }
            }
        }
    }
    return maxNumber;
}
```
Kod ten przeszukuje tablicę items i dla każdego elementu wyciąga liczby z pola name, korzystając z wyrażenia regularnego `/\d+/g`. Następnie dla każdej znalezionej liczby sprawdza, czy jest większa niż dotychczas największa liczba (maxNumber) i jeśli tak, to aktualizuje maxNumber. Na końcu funkcja zwraca maxNumber.

`Kod jest napisany zgodnie ze standardami ES6+ i jest czytelny i wydajny.`

Wyrażenie regularne `/^\d+$/` oznacza:

- `/` - początek wyrażenia regularnego
- `\d+` - oznacza dowolną liczbę cyfr, które występują raz lub więcej razy (co odpowiada liczbom składającym się z jednej lub więcej cyfr)
- `/` - koniec wyrażenia regularnego
- `g` - oznacza globalne dopasowanie (tj. szukanie wszystkich wystąpień w całym ciągu)

>Podsumowując, to wyrażenie regularne /^\d+$/g oznacza szukanie wszystkich liczb, które składają się wyłącznie z cyfr w całym ciągu znaków

# Optymalizacja:

Możemy troche zoptymalizować kod..

- Wykorzystujac `Array.reduce()` zamiast pętli `for`

```
    function getItemsMaxNumber(items) {
        return items.reduce((maxNumber, item) => {
            const matches = item.name.match(/\d+/g);
            if (matches) {
                for (let match of matches) {
                    const number = parseInt(match);
                    if (number > maxNumber) {
                        maxNumber = number;
                    }
                }
            }
            return maxNumber;
        }, 0);
    }
```

Funkcja `reduce()` działa tak, że dla każdego elementu w tablicy wykonuje określoną funkcję zwrotną (tutaj anonimową funkcję strzałkową), która agreguje wartości i na końcu zwraca wynik. Początkową wartością agregowaną jest 0.

- oraz Wykorzystujac `Math.max()` zamiast ręcznego porównywania liczb

```
        function getItemsMaxNumber(items) {
            return items.reduce((maxNumber, item) => {
                const matches = item.name.match(/\d+/g);
                if (matches) {
                    const numbers = matches.map(match => parseInt(match));
                    return Math.max(maxNumber, ...numbers);
                }
                return maxNumber;
            }, 0);
        }
```

Dodajemy `Math.max()` do znalezienia maksymalnej wartości w tablicy, zamiast ręcznego porównywania liczb. Takie rozwiązanie może sprawić kod bardziej czytelnym i bardziej zoptymalizowanym.
