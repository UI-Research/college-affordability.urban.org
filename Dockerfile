FROM phase2/node:4.4.4

RUN yum -y install GraphicsMagick \
                   httpd \
                   ImageMagick \
                   mod_ssl \
                   python-pip && \
    npm install -g gulp && \
    npm install -g webpack && \
    pip install awscli


ADD package.json /code/package.json

RUN npm install

ADD . /code

RUN gulp

ENTRYPOINT ["aws", "s3", "sync", "/code/dist/", "s3://urban-ca.dev.phase2tech.com"]
