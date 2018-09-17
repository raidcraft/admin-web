FROM nginx:alpine

WORKDIR /etc/nginx/

COPY default.conf /etc/nginx/conf.d/default.conf
COPY ssl-certs.conf /etc/nginx/snippets/sssl-certs.conf

VOLUME [ "/etc/letsencrypt/live/" ]

EXPOSE 80 443