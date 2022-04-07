FROM node:16.13.1-slim AS enduser-deps

WORKDIR /cafeteria-enduser
COPY package.json package-lock.json ./
RUN npm ci

COPY . .


FROM node:16.13.1-slim

WORKDIR /cafeteria-enduser
COPY --from=enduser-deps /cafeteria-enduser /cafeteria-enduser

RUN npm run lint


FROM enduser-deps AS enduser-build

ARG VERSION=0.0.0
RUN sed -i "s/^  version: .*$/  version: '${VERSION}',/" src/environments/environment.prod.ts
RUN npx ng build -c production


FROM nginx:1.19.6

ENV NGINX_PORT=8000
COPY docker /etc/nginx/templates
COPY --from=enduser-build /cafeteria-enduser/dist /cafeteria-enduser

EXPOSE 8000
