FROM nginx:1.18.0

# VUE前端
WORKDIR /website/app
COPY ./build /website/app

COPY ./etc/nginx/nginx.conf /etc/nginx
COPY ./etc/nginx/default.conf /etc/nginx/conf.d/