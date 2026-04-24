# Ситуационный центр госзакупок

Презентационный лендинг — аналитический дашборд госзакупок с поддержкой сравнения регионов.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу: `http://localhost:5173/gh-pages/`

## Сборка

```bash
npm run build
```

Результат сборки — в папке `dist/`.

## Деплой на GitHub Pages

### Способ 1: Скрипт

**Windows:**
```bash
deploy.bat
```

**Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### Способ 2: Вручную

```bash
npm run build
npm run deploy
```

Команда `npm run deploy` использует пакет `gh-pages`, который:
1. Собирает проект (`predeploy` → `npm run build`)
2. Пушит содержимое `dist/` в ветку `gh-pages`
3. GitHub Pages автоматически подхватывает изменения

### Настройка GitHub Pages

1. Перейти в **Settings → Pages** в репозитории
2. В **Source** выбрать ветку `gh-pages`, папку `/ (root)`
3. Сохранить

Сайт будет доступен по адресу: `https://farfurix.github.io/gh-pages/`

## Стек

- React 19 + Vite
- CSS Variables (светлая/тёмная тема)
- gh-pages (деплой)