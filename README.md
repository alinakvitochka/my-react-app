# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Опис завдання

Цей проєкт демонструє використання stateful та stateless компонентів у React. Stateful компонент керує станом (лічильником), а stateless компонент лише відображає дані, отримані через пропси.

## Як виконано завдання

- Реалізовано stateful компонент із використанням хука `useState` для управління станом.
- Stateless компонент відображає поточний стан лічильника.
- Для кращої візуалізації додано стилі.

## Основні складнощі

1. Організація структури проєкту:
   - Було складно правильно розділити функціонал між компонентами.

## Як запустити

1. Клонувати репозиторій:
   git clone https://github.com/alinakvitochka/my-react-app
2. cd my-react-app
3. Встановити залежності:
   npm install
   4.Запустити проєкт:
   npm run dev # Для Vite
