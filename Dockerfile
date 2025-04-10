# specify node.js image
FROM node:22-alpine

ENV NODE_ENV=production

# set working directory.
WORKDIR /kutt

# Copy package files and install dependencies (using Docker cache efficiently)
COPY package*.json ./

# Use --omit=dev only in production
RUN if [ "$NODE_ENV" = "production" ]; then npm install --omit=dev; else npm install; fi

RUN mkdir -p /var/lib/kutt

# copy the rest of source files into the image
COPY . .

# expose the port that the app listens on
EXPOSE 3000

# Default command (overridable via docker-compose)
CMD ["sh", "-c", "npm run migrate && npm start"]
