# Symfony Backend API

This project is a REST API developed with Symfony 7 that provides endpoints to manage products.

## Requirements

- PHP 8.1 or higher
- Composer
- SQLite (configured by default) or any other database system compatible with Doctrine

## Installation

1. Clone the repository
2. Install dependencies:
```bash
composer install
```

## Database Configuration

The database configuration is in the `.env` file. By default, it's configured to use SQLite:

```
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
```

If you want to change to another database system, you can uncomment and modify the other available options in the file.

## Migrations

To create the database structure, run the migrations:

```bash
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

## Fixtures (Sample Data)

Fixtures have been created to load sample data into the database. To load this data, run:

```bash
php bin/console doctrine:fixtures:load
```

This will load 5 sample products into the database.

## Available Endpoints

### Get all products
- **URL**: `/api/products`
- **Method**: GET
- **Response**: Array of products with their details (id, name, description, price)

### Get a specific product
- **URL**: `/api/products/{id}`
- **Method**: GET
- **URL Parameters**: `id` - ID of the product
- **Response**: Product details or 404 error message if it doesn't exist

## Run the server

To start the Symfony development server:

```bash
php -S localhost:8000 -t public
```

Or with the built-in Symfony server:

```bash
symfony server:start
```

The server will be available at `http://localhost:8000`.

## Project Structure

- `src/Entity`: Contains database entities, such as Product
- `src/Controller`: Contains controllers that handle requests
- `src/Repository`: Contains repositories for database access
- `src/DataFixtures`: Contains classes to load sample data

## Development

### Create a new entity
```bash
php bin/console make:entity
```

### Create a new controller
```bash
php bin/console make:controller
```

### Create a migration
```bash
php bin/console make:migration
```

### Run migrations
```bash
php bin/console doctrine:migrations:migrate
```
