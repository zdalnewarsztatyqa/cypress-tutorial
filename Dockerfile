FROM cypress/browsers:node12.13.0-chrome80-ff74

COPY package.json /e2e/package.json
COPY cypress.json /e2e/cypress.json

RUN cd /e2e && npm install

WORKDIR /e2e

ENTRYPOINT ["npm", "run"]