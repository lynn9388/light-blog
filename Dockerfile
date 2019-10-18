FROM ruby:alpine
RUN apk update && apk add --no-cache git
COPY Gemfile /

RUN apk update && apk add --no-cache --virtual .build_deps build-base && \
    bundle install --gemfile=/Gemfile && \
    apk del .build_deps

WORKDIR /site
CMD ["jekyll", "serve", "-H", "0.0.0.0", "-P", "4000"]
