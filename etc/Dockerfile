FROM node:24 AS node

WORKDIR /opt

ADD package.json /opt
ADD package-lock.json /opt
RUN npm ci
COPY ./ /opt

ENV NODE_ENV production

RUN npm run build


FROM nginx:stable
RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /opt/src/.vitepress/dist /usr/share/nginx/html
