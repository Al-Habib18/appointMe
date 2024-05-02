<!-- @format -->

# AppointMe

AppointMe is an application,where you can find the best doctor for your needs.You can easily view doctor availability and schedule appointments directly within the application.You can also share your experience with doctors and help others make informed decisions.

## Overview

AppointMe aims to provide a seamless user experience while ensuring the security and entegrity of user data.

-   It allows to browse doctors by Specialty, Location ,Ratings and Availability without any authentication
-   Patients can choose a convenient time slot and confirm the booking for the selected doctor
-   Patients might be able to pay with various payment options(debit card,bkash,roket etc).

## Architecture

We will be using microservice architecture since it will make it easier to horizontally scale and decouple our services. Each service will have ownership of its own data model.Our services are :-

-   Auth services - For Authentication
-   Login History - For manage Login History
-   Patient service - For manage Patients
-   Doctor service - For manage Doctors
-   Appointment service - For manage Appointments
-   Email service - For send and manage Emails
-   Payment service - For manage Payment

For more details about, please cleck [**Architecture**](https://docs.google.com/document/d/1eGwSzCzGQxYLf1NGtKipZXlIxo0nABMrd8u51whl9y8/edit?usp=sharing)

## Technologies at a Glance

Appointme's all service relies on **TypeScript**, a statically typed superset of JavaScript. This choice enhances development by catching errors early and improving code maintainability.

Appointme's all service relies on **Postgres and Prisma**. Prisma provides a type-safe and object-oriented way to interact with databases, reducing boilerplate code and errors.By handling database schema and migrations, Prisma frees us to concentrate on core application logic.

For catching our services relies on **Redis**.It is an in-memory data store, providing incredibly fast read/write operations for frequently accessed data,

For asynchronous communication, we uses **RabbitMQ**. It ensures messages are delivered efficiently and handles failures, guaranteeing message processing even with temporary issues.

We uses **mailhog** to send Email ot user . Because It simulates a real email server, allowing you to test email functionality within your application without sending actual emails.

For managing containers, we uses **Docker-Compose**. It simplifies running and managing multiple Docker containers together as a single application, making development and deployment easier.It allows defining configurations for each container (ports, volumes, networks) in a single file,

## Data Model

AppointMe uses 10 tables in Database(Postgres). These are User,Verifcaintion,Logi History, Refresh Token, Doctor, Patient, Appointment,Email, Payment and Reveiew.

For more details about Data model , Please check [**data model**](https://drive.google.com/file/d/1InKaUokdoUjqcWo_5QDcdH0yXqOxEWuK/view?usp=sharing)

## API Documentaion

This microservice exposes the following API endpoints:

-   GET /doctors - Retrieves a list of doctors
-   GET /doctors/:Id - Retrieves a specific doctor by ID
-   POST /registration - Create a new user
-   POST /login - Login a user

For more details about API Documentaion, Please check [**API Documentation**](https://documenter.getpostman.com/view/27184751/2sA3JF9ip9)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Al-Habib18/appointMe
```

Go to the project directory

```bash
  cd appointMe
```

Install all dependencies of all service and run all services

```bash
  ./main.sh
```

or

Go to every services and The API gateway

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Run in Docker

Clone the project

```bash
  git clone https://github.com/Al-Habib18/appointMe
```

Clone the project

```bash
  docker-compose up
```

## Feedback

If you have any feedback, please reach out to us at "ah18bd@gamil.com"
