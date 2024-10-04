#DockerFile

# Use the official Node.js image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install -g nodemon

# Copy the rest of the app code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "run", "dev"]


