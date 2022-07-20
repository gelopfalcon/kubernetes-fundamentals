FROM node:16.13.0 as node

ARG ENV=prod
ARG APP=contact-list

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /app
COPY ./ /app/

# Install Packaged and Build App
RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

# Serve app, based on Nginx, to have only the compiled app ready for production with Nginx
FROM nginx:1.13.8-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
