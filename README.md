# Aplikacja czatowa

Aplikacja czatowa umożliwiająca komunikację wielu użytkowników w czasie rzeczywistym za pomocą WebSocketów.

Projekt został wykonany na podstawie pomysłu [Chat App z App Ideas](https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Chat-App.md#chat-app).

**Poziom projektu:** 3 - Zaawansowany

## Technologie

- HTML
- CSS
- JavaScript
- Node.js
- WebSocket
- Biblioteka `ws`

## Funkcje

- Użytkownik podaje swoją nazwę przed wejściem do czatu.
- Nazwa użytkownika jest zapisywana w `localStorage`.
- Użytkownik może wpisać wiadomość w polu tekstowym.
- Wiadomość jest wyświetlana razem z nazwą użytkownika.
- Wiadomości są wysyłane przez WebSocket.
- Wiadomości są widoczne dla wszystkich podłączonych użytkowników.

## Struktura projektu

```text
Chat-app/
├── index.html
├── README.md
├── package.json
├── css/
│   └── style.css
├── js/
│   └── app.js
└── server/
    └── server.js
```

## Wymagania

Przed uruchomieniem projektu na komputerze musi być zainstalowany:

- [Node.js](https://nodejs.org/)

Możesz sprawdzić instalację poleceniami:

```powershell
node --version
npm --version
```

## Instalacja projektu na innym komputerze

Sklonuj repozytorium:

```powershell
git clone ADRES_REPOZYTORIUM
```

Przejdź do folderu projektu:

```powershell
cd Chat-app
```

Zainstaluj potrzebne biblioteki:

```powershell
npm install
```

Biblioteka WebSocket `ws` jest zapisana w `package.json`, dlatego `npm install` zainstaluje ją automatycznie.

## Uruchomienie aplikacji

Uruchom serwer:

```powershell
node server/server.js
```

Po uruchomieniu powinien pojawić się komunikat podobny do:

```text
Serwer działa pod adresem http://localhost:8080
```

Następnie otwórz aplikację w przeglądarce:

```text
http://localhost:8080
```

Aby sprawdzić komunikację wielu użytkowników:

1. Otwórz aplikację w jednej karcie przeglądarki.
2. Otwórz aplikację w drugiej karcie.
3. W każdej karcie podaj inną nazwę użytkownika.
4. Wyślij wiadomość z jednej karty.
5. Sprawdź, czy wiadomość pojawiła się w obu kartach.

## Historie użytkowników

- Użytkownik jest proszony o wpisanie nazwy użytkownika podczas wizyty w aplikacji czatu.
- Nazwa użytkownika jest przechowywana w aplikacji.
- Użytkownik może zobaczyć pole do wpisywania nowej wiadomości.
- Użytkownik może wysłać wiadomość przyciskiem.
- Wiadomość jest wyświetlana obok nazwy użytkownika, na przykład:

```text
John Doe: Hello World!
```

## Zrealizowane kroki

- Utworzono podstawowy interfejs aplikacji czatowej.
- Dodano formularz do wpisywania nazwy użytkownika.
- Dodano zapisywanie nazwy użytkownika w `localStorage`.
- Dodano pole wpisywania wiadomości.
- Dodano przycisk wysyłania wiadomości.
- Dodano wyświetlanie nazwy użytkownika przy wiadomości.
- Utworzono serwer Node.js.
- Dodano komunikację WebSocket.
- Dodano wysyłanie wiadomości do wszystkich podłączonych użytkowników.

## Możliwe dalsze ulepszenia

- Informowanie o dołączeniu i wyjściu użytkownika.
- Wyświetlanie listy aktywnych użytkowników.
- Dodanie daty i godziny wysłania wiadomości.
- Dodanie możliwości zmiany nazwy użytkownika.
- Dodanie pokoi czatu.
- Dodanie obsługi emotikonów.
- Dodanie zapisywania historii wiadomości.
- Dodanie lepszego wyglądu wiadomości własnych i wiadomości innych użytkowników.

## Zatrzymanie serwera

Aby zatrzymać działający serwer, użyj skrótu:

```text
Ctrl + C
```

## Najczęstsze problemy

### Polecenie `npm` lub `node` nie działa

Zainstaluj Node.js ze strony:

[https://nodejs.org/](https://nodejs.org/)

Następnie zamknij i ponownie otwórz terminal.

### Nie można połączyć się z WebSocketem

Sprawdź, czy serwer jest uruchomiony:

```powershell
node server/server.js
```

Sprawdź również, czy w pliku `app.js` znajduje się poprawny adres:

```js
const socket = new WebSocket("ws://localhost:8080");
```

### Port 8080 jest zajęty

Zamknij poprzednio uruchomiony serwer albo zmień port w `server.js`.
