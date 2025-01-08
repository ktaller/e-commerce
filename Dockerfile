# Build Stage
FROM node:latest as build-stage

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the React application
RUN npm run build

# Production Stage
FROM nginx:latest

# Copy the NGINX configuration file
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build artifacts from the build stage to NGINX web server
COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80