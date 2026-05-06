# Use a lightweight Node image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your React/TS code
COPY . .

# Vite's default dev port
EXPOSE 5173

# Start the dev server with the --host flag to allow Nginx to connect
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]