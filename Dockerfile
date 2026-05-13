FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:libsplit

FROM nginx:1.27-alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html/
RUN cp /usr/share/nginx/html/index.libsplit.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
