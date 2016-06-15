FROM phase2/node:4.4.4

RUN yum -y install GraphicsMagick \
                   httpd \
                   mod_ssl && \
    npm install -g gulp && \
    npm install -g webpack


ADD package.json /code/package.json

RUN npm install

ADD . /code

RUN gulp
