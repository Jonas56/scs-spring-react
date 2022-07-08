# Ecommerce App (SCS)

## Description

An ecommerce app that allows users to buy smart conected suitcase :luggage:.

## Technologies Used :man_technologist:

- [React](https://reactjs.org/)
- [Spring boot](https://spring.io/)
- [Spring Security](https://spring.io/projects/spring-security)
- [JUnit5](https://junit.org/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Nginx](https://www.nginx.com/)

## Getting Started :airplane:

Clone this repository

```shell
# SSH
$ git clone git@github.com:Jonas56/scs-spring-react.git

# HHTPS
$ git clone https://github.com/Jonas56/scs-spring-react.git
```

## Running the app :dart:

### Docker

```shell
$ docker-compose up
```

Visit the app at [http://localhost:8080](http://localhost:8080)

### Or

```shell
$ cd frontend
$ npm install
$ npm run start
```

```shell
$ cd backend
$ mvn clean install
$ mvn spring-boot:run
```

Visit the app at [http://localhost:3000](http://localhost:3000)

## Test :test_tube:

```shell
# integration tests
$ cd backend
$ mvn test

# e2e tests
$ cd frontend
$ npm test
```

## Contributing

For submitting patches and additions. Follow the **"fork-and-pull"** Git workflow.

- **Fork** the repo
- **Clone** the project to your own machine
- **Commit** changes to your own branch
- **Push** your work back up to your fork
- Submit a **Pull request** so that we can review your changes

## License
