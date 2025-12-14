# Инструкции по развертыванию

## Деплой на Vercel (Рекомендуется)

1. Установите Vercel CLI:
```bash
npm install -g vercel
```

2. Авторизуйтесь:
```bash
vercel login
```

3. Разверните проект:
```bash
vercel
```

4. Для продакшен деплоя:
```bash
vercel --prod
```

## Деплой на Netlify

1. Установите Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Авторизуйтесь:
```bash
netlify login
```

3. Разверните:
```bash
netlify deploy --prod
```

## Деплой на собственный сервер

### С использованием PM2

1. Установите PM2:
```bash
npm install -g pm2
```

2. Соберите проект:
```bash
npm run build
```

3. Запустите с PM2:
```bash
pm2 start npm --name "kazakhstan-app" -- start
```

### С использованием Docker

1. Создайте Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. Соберите образ:
```bash
docker build -t kazakhstan-app .
```

3. Запустите контейнер:
```bash
docker run -p 3000:3000 kazakhstan-app
```

## Переменные окружения

Создайте файл `.env.local` для локальной разработки:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Оптимизация для продакшена

1. Включите сжатие в `next.config.js`:
```javascript
module.exports = {
  compress: true,
}
```

2. Используйте Next.js Image optimization для изображений

3. Включите ISR (Incremental Static Regeneration) для динамических данных

4. Настройте CDN для статических ресурсов
