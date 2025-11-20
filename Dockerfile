FROM node:25

RUN apt-get update
RUN apt-get upgrade -y

VOLUME /app
WORKDIR /app

EXPOSE 3001

CMD ["/bin/bash"]