# Run as a non-root user
FROM node:20.15-alpine3.19
RUN addgroup -S app && adduser -S app -G app
USER app

# Install dependencies
WORKDIR /app
COPY package.json .
RUN npm install

# Copy and change owner
COPY --chown=app:app . /app

# Expose port and default command
EXPOSE 3000
CMD [ "npm", "run", "dev", "--", "--host" ]