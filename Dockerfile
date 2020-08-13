FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN yarn install --silent
COPY . .
RUN yarn build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular /app/dist/ng-tests-study /usr/share/nginx/html
COPY ./config/.nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t ng-tests-study .
# docker run -p 8081:80 ng-tests-study
