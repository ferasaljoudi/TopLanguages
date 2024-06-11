FROM node:lts-bullseye-slim

# RUN apt-get update && apt-get install -y \
#     build-essential \
#     libcairo2-dev \
#     libpango1.0-dev \
#     libjpeg-dev \
#     libgif-dev \
#     # librsvg2-dev \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 86

CMD ["node", "server.js"]
