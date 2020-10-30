FROM node:14

WORKDIR /opt

ADD package.json /opt
ADD package-lock.json /opt
RUN npm ci
COPY ./ /opt

ENV NODE_ENV production

ARG API_URL
ARG CONNECT_URL
ARG IAM_URL

ENV API_URL=$API_URL
ENV CONNECT_URL=$CONNECT_URL
ENV IAM_URL=$IAM_URL

RUN npm run build


FROM nginx:stable
RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /opt/src/.vuepress/dist /usr/share/nginx/html
