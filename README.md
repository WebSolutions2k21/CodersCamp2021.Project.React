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



![logo](https://user-images.githubusercontent.com/75137091/152695743-197fdaf5-5e0c-4913-93b2-a3428eec597b.png)

[Mockupy i prototyp](https://www.figma.com/file/j8rdQ9KEIYiAfFdH5DNgQM/schematy-PuppyLOG?node-id=0%3A1)

[Design](https://www.figma.com/file/oQYCNjNNHifTQrutnxik2S/puppyLOG?node-id=0%3A1)
   
### [WEJDŹ NA STRONĘ](https://puppylog.netlify.app/)


## Cel projektu
Celem projektu było dostarczenie aplikacji „Puppylog” pozwalającej użytkownikom na zapisanie do weterynarza swojego pupila. Zalogowany użytkownik może wybrać spośród trzech lekarzy kliniki. Po wyborze odpowiedniego weterynarza może dokonać rezerwacji terminu wizyty oraz samodzielnie dodawać swoje zwierzęta.

Każde zwierzę posiada indywidualną kartę pacjenta. Widnieje w niej imię, rasa, dane właściciela, historia chorób oraz inne ważne informacje dotyczące pupila. Wszyscy weterynarze mają dostęp do karty danego zwierzęcia oraz mogą ją edytować. Dodatkowo karta pacjenta jest uzupełniana przez weterynarza po każdej odbytej wizycie.


Aplikacja została wykonana według wymagań dostarczonych przez organizatorów CodersCamp.


## Działanie aplikacji

### Menu Główne

Na głównej stronie znajduje się autorskie logo (kliknięcie na nie powoduje przeniesienie na stronę główną) oraz nawigacja, z poziomu której można bezpośrednio przejść do sekcji: About, Contacts, Sign Up czy Login. Dodatkowo widnieje tu motto przewodnie strony - „We love Pets!”, a także przycisk „GET STARTED”, po kliknięciu na który, zostaniemy przeniesieni na stronę logowania. 

![Zrzut ekranu 2022-02-09 o 15 12 52](https://user-images.githubusercontent.com/75137091/153219257-bd6c179e-f55a-4601-9440-d5a21488045d.jpg)


### Strona logowania oraz strona rejestracji
Jeżeli użytkownik jest już zarejestrowany, wówczas może się zalogować na stronę podając swój e-mail oraz hasło oraz klikając na „I’M A PETLOVER”. Po pomyślnym zalogowaniu się, otrzymuje on dostęp do kolejnych zasobów strony. W nawigacji zamiast przycisku „Login” pojawi się przycisk „My Account” oraz przycisk „Log out”.

![Zrzut ekranu 2022-02-09 o 15 13 29](https://user-images.githubusercontent.com/75137091/153219337-92f41172-ea67-440c-85c3-e2cbfe92f18e.jpg)


Na stronę mogą się również logować lekarze podając odpowiedni adres e-mail oraz hasło. Specjaliści otrzymują nieco inny zasób strony.

W przypadku, gdy użytkownik jeszcze nie posiada konta na stronie, może się zarejestrować, podając następujące dane: imię, nazwisko, e-mail, numer telefonu oraz hasło. Dane wprowadzone przez użytkownika zostaną zapisane w bazie danych. 

![Zrzut ekranu 2022-02-09 o 15 13 20](https://user-images.githubusercontent.com/75137091/153219441-286b7f31-7814-48d3-835c-c817e0eed1bb.jpg)


### Panel użytkownika
Zalogowany użytkownik jest witany na stronie – pojawia się napis Welcome oraz imię użytkownika. Otrzymuje on dostęp do takich zasobów, jak: 

- #### Moje zwierzęta 

Tu użytkownik może przejrzeć swoje zwierzęta (znajdują się tam następujące dane: imię, gatunek, rasa oraz data urodzenia) bądź dodać nowe. Po kliknięciu przycisku „ADD PET”, użytkownik zostaje przeniesiony do formularza, do którego może wpisać wyżej wspomniane dane dotyczące swojego pupila, a następnie, klikając przycisk „SAVE”, zostanie założona karta zwierzęcia. Dane te zostają zapisane w bazie. 

![Zrzut ekranu 2022-02-09 o 22 54 10](https://user-images.githubusercontent.com/75137091/153296860-e5bdd5b0-23cb-4268-8af6-3e739d1f8c3c.jpg)

![Zrzut ekranu 2022-02-09 o 22 41 51](https://user-images.githubusercontent.com/75137091/153296784-e13ded7b-9a0c-4c34-88f2-20acc0b56b08.jpg)


- #### Moje wizyty

Po kliknięciu w zakładkę „My Visits” użytkownik zobaczy kalendarz. Dni, w które ma zaplanowane wizyty, zastały wzięte w kółko. Klikając na ten dzień, pojawią się szczegółowe informacje dotyczące zaplanowanej wizyty. 

Użytkownik może również zarezerwować wizytę u wybranego przez siebie weterynarza po kliknięciu przycisku „ADD NEW VISIT”. Zostanie on przeniesiony do formularza, w którym będzie mógł wybrać zwierzę, lekarza, datę oraz godzinę nowej wizyty. Dane te również zostaną zapisane w bazie. 

![Zrzut ekranu 2022-02-09 o 22 43 11](https://user-images.githubusercontent.com/75137091/153297136-e05384ed-830f-4e1a-80e5-7dbf1451deec.jpg)


- #### Mój profil

Ostatnia zakładka to mój profil, gdzie użytkownik może przejrzeć dane, wprowadzone przez niego podczas rejestracji. 

![Zrzut ekranu 2022-02-09 o 22 43 22](https://user-images.githubusercontent.com/75137091/153297230-33ccbe95-dcd3-48a2-bfa7-f757204ffadc.jpg)


### Panel lekarza
Zalogowany specjalista jest witany na stronie – pojawia się napis Welcome oraz imię specjalisty. Otrzymuje on dostęp do takich zasobów, jak: 

- #### Moje wizyty

Po kliknięciu w zakładkę „My Visits” specjaliście ukaże się kalendarz. Dni, w które ma zaplanowane wizyty, zastały wzięte w kółko. Klikając na ten dzień, pojawią się szczegółowe informacje dotyczące wizyt. Specjalista może uzupełnić historię choroby danego zwierzęcia, klikając na konkretną wizytę. Pojawi się wówczas okienko, w którym może wpisać bądź edytować niezbędne informacje na temat choroby danego zwierzęcia. 

![Zrzut ekranu 2022-02-09 o 22 49 05](https://user-images.githubusercontent.com/75137091/153297333-ec68abf4-79e6-4962-a684-cbc9e73d0721.jpg)

![Zrzut ekranu 2022-02-09 o 22 48 55](https://user-images.githubusercontent.com/75137091/153297358-1ecc5b9a-b312-4d2a-b558-6ad83560a464.jpg)



- #### Mój profil

Ostatnia zakładka to mój profil, gdzie specjalista może przejrzeć dane, wprowadzone przez niego podczas rejestracji. 

## Lista Funkcjonalności

1. Rejestracja oraz logowanie użytkownika.
2. Nawigacja.
3. Imienne powitanie użytkownika podczas zalogowania się.
4. Sidebar.
5. Dodanie karty zwierzęcia po uzupełnieniu formularza, a następnie możliwość ich przeglądania.
6. Rezerwacja wizyty po uzupełnieniu formularza.
7. Przeniesienie zarezerwowanych wizyt do kalendarza i możliwość ich przeglądania. 
8. Edycja danych.
9. Dodanie oraz edycja opisu wizyty. 

### Dodatkowe informacje

Nasz zespół zrealizował także responsywność stron.

## API
Do tworzenia projektu został użyty Firebase. Jego funkcjonalność umożliwiła nam utworzenie bazy danych oraz uwierzytelnianie. Z kolei API platformy pozwoliło na przechowywanie danych w chmurze Firebase.

## Kod startowy projektu
1. Nasza aplikacja została wdrożona na Netlify.
2. Biorąc pod uwagę fakt, iż nasza aplikacja jest implementowana przez kilku deweloperów, zdecydowaliśmy się na użycie biblioteki Prettier, służącej do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.

## Technologie użyte w projekcie:

1. JSX
2. React
3. Node.js
4. Firebase
5. Material UI

## Narzędzia pomocnicze

- Visual Studio Code
- Yarn
- Figma
- Trello

## Instalacja

#### Uruchomienie projektu:

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj repozytorium.
2. Otwórz je w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: yarn.
4. Wystartuj serwer za pomocą komendy: yarn start

Aplikacja będzie dostępna pod adresem: http://localhost:3000/
