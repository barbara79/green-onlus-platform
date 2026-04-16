# Use a lightweight PHP-FPM image
FROM php:8.2-fpm-alpine

# Install Postgres PDO extensions so PHP can talk to the database
RUN apk add --no-cache libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy your PHP source code into the container
COPY . .

# PHP-FPM runs on port 9000 by default
EXPOSE 9000