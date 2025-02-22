FROM debian:12
LABEL authors="Rozen"

ENTRYPOINT ["top", "-b"]
# FROM and LABEL already provided
WORKDIR /usr/src/app

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy Angular project files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Set the default command to serve the app with Angular CLI
CMD ["npx", "http-server", "dist/<project-name>", "-p", "80"]
