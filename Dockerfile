FROM node:20
WORKDIR /CALCULATOR
COPY calculator.html .
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]