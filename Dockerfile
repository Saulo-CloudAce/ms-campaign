FROM public.ecr.aws/docker/library/node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

RUN npm audit fix

COPY . .
ENV PORT 80

# RUN npm run migrate:latest

EXPOSE 80

CMD ["npm", "run", "start:prod"]



