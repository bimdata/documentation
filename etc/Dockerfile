FROM node:16

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
COPY --from=0 /opt/src/.vuepress/dist /usr/share/nginx/html
