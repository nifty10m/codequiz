# codequiz
Quiz Application handling Questions and Answers

# Development
To run the codeQuiz locally you need to start a database using Docker:

    docker run -d --rm --name pg-codequiz -p 5435:5432 -e POSTGRES_PASSWORD=mysecretpassword camptocamp/postgres:9.6;

The development configuration for this datasource is located in the application-dev.properties which you have to activate in order to use the database for unit tests:

    SPRING_PROFILES_ACTIVE = dev

# Continuous Integration
https://circleci.com/gh/nifty10m/codequiz
