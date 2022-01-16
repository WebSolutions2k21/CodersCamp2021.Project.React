## Praca z projektem

### Branch Name

Używamy kebab-case do nazywania branchy

```sh
more-gray-shades
support-dark-theme
button-component
itp.
```

### Commit Message

Przyjmujemy poniższy format commit message

```sh
<type>: <commit_message>
```

#### Commit Message Type

- **build**: Zmiana która afektuje budowanie projektu lub zależności zewnętrzne
- **docs**: Zmiana w dokumentacji bądź dodatkowych materiałach
- **feature**: Wprowadzenie nowej funkcjonalności
- **bugfix**: Naprawienie błędu
- **refactor**: Zmiana w projekcie, która nic nie naprawia, ani nie dodaje

#### Zasady Commit Message

- używaj imperatywnej formy czasu teraźniejszego: "change", nie "changed" lub "changes"
- nie zaczynaj wielką literą
- nie dodawaj kropki na końcu zdania
- używaj języka angielskiego

### Pull Request

Pracujemy na gałęziach w metodologii `branch per feature`. Staramy się tworzyć małe PR. W opisie PR powinno być dokładnie opisane co on zmienia. Każdy PR musi być zaakceptowany przez przynajmniej jedną inną osobę.

### .env

Stwórz plik .env i wklej do niego dane z Trello.


# CodersCamp2021 - Projekt React

## Zespół projektowy:

Zespół pracował w ramach kursu CodersCamp. Aplikację wykonali uczestnicy kursu z pomocą mentora. Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

#### Mentor:

[Aleksander Atamańczuk](https://github.com/TenGosc007)

#### Uczestnicy:

- [Małgorzata Bednarczuk](https://github.com/margiebed) (Developer)

- [Anna Koruc](https://github.com/annakoruc) (UI)

- [Marta Probierz](https://github.com/marta-probierz) (Product Manager)

- [Weronika Kurek-Pękala](https://github.com/SolWika) (Product Owner)

- [Kasia Filip](https://github.com/kasia-filip) (Developer)

- [Sebastian Michalczyk](https://github.com/WindOfCodes) (Tech Lead)

LOGO

[Mockupy i prototyp](https://www.figma.com/file/j8rdQ9KEIYiAfFdH5DNgQM/schematy-PuppyLOG?node-id=0%3A1)
   
### [WEJDŹ NA STRONĘ](https://puppylog.netlify.app/)

## Cel projektu
Celem projektu było dostarczenie aplikacji "Puppylog" pozwalającej użytkownikom na odnalezienie odpowiedniego weterynarza dla swojego pupila. Zalogowany użytkownik może dokonać rezerwacji terminu wizyty, jak i samodzielnie dodawać swoje zwierzęta do bazy. Ponadto użytkownicy mogą otrzymywać powiadomienia o terminach szczepień lub, w przypadku dodania nowego zwierzęcia, zachęcenie do nich lub np. do chipowania. 

Każde zwierzę posiada indywidualną kartę pacjenta. Widnieje w niej imię, gatunek, rasa, data urodzenia, daty szczepień, historia chorób oraz inne ważne informacje dotyczące pupila, np. numer chipa. Wszyscy weterynarze mają dostęp do karty danego zwierzęcia oraz mogą ją edytować. Dodatkowo karta pacjenta jest uzupełniana po każdej odbytej wizycie.

Aplikacja została wykonana według wymagań dostarczonych przez organizatorów CodersCamp.


## Działanie aplikacji

#### Menu Główne

...

#### Lista Funkcjonalności

...

### Dodatkowe informacje

Nasz zespół zrealizował także responsywność stron.

## API

...

## Kod startowy projektu
1. Nasza aplikacja została wdrożona na Netlify.
2. Biorąc pod uwagę fakt, iż nasza aplikacja jest implementowana przez kilku deweloperów, zdecydowaliśmy się na użycie biblioteki Prettier, służącej do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.

## Technologie użyte w projekcie:

1. JSX / TSX
2. React
3. TypeScript
4. Node.js
5. Firebase
6. Material UI

## Narzędzia pomocnicze

- Visual Studio Code
- Yarn
- Figma
- Trello

## Instalacja

#### Uruchomienie projektu:

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj sobie repozytorium.
2. Otwórz repozytorium w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: yarn.
4. Wystartuj serwer za pomocą komendy: yarn start.

Aplikacja będzie dostępna pod adresem: …