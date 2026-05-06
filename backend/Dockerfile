# Use a lightweight PHP-FPM image
FROM php:8.2-fpm-alpine

# Install Postgres PDO extensions so PHP can talk to the database
RUN apk add --no-cache libpq-dev && docker-php-ext-install pdo_pgsql

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy your PHP source code into the container
COPY . .

# Ensure permissions for the web user
RUN chown -R www-data:www-data /var/www/html

# Document the internal port
EXPOSE 9000

CMD ["php-fpm"]