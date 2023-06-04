
# redux-jsonplaceholder

Тестовое задание для Сравни.ру.

Реализовать `React` приложение, состоящее из двух роутов. Необходимо использовать `redux` для управления состоянием приложения. Дизайн приложения по усмотрению разработчика.

- Источник данных: https://jsonplaceholder.typicode.com/
- Управление состоянием прилолежния: `Redux`
- Стили: `SCSS`

Главная страница `/` - необходимо вывести 10 карточек пользователей на страницу `ФИО`, `email`, `username`, `phone`. При наведении на карточку показывать плавную анимацию появления данных company этого пользователя (необязательно).

Страница пользователя `user/:userID` - показывать 10 карточек с `photos` пользователя и номером id на карточке. Внизу страницы две кнопки `Назад` и `Вперёд`. При клике на кнопки меняем 10 фотографий на предыдущие или на следующие 10 фотографий. Если params пустой, то показывать `Нет данных`.

Предусмотреть три состояния страниц: `Loading`, `Error`, `Success`.

Страница должна быть адаптивной и корректно отображаться на экранах шириной `320px` и более.

## Запуск проекта

Клонировать репозиторий:

```
  gh repo clone bevuxyna/redux-jsonplaceholder
```

Установить зависимости:

```
  npm install
```

Запустить сервер:

```
  npm run start
```