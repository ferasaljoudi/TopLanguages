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

# Limit node memory to avoid OOM on RPi
ENV NODE_OPTIONS="--max-old-space-size=192"

EXPOSE 80

CMD ["node", "server.js"]
