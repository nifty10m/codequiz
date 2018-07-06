# codequiz
Quiz Application handling Questions and Answers

# Unit Tests:

Enviornmet: 
    SPRING_PROFILES_ACTIVE = dev

# Database

docker run -d --rm --name pg-codequiz -p 5435:5432 -e POSTGRES_PASSWORD=mysecretpassword camptocamp/postgres:9.6;
