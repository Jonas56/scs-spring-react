#
# Build stage
#
FROM maven:3.6-jdk-11 AS maven_build

### Copy src ###
COPY src /home/app/src

### Copy pom.xml ###
COPY pom.xml /home/app

### Build ###
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:11 as package_run

WORKDIR /usr/src/nemo-app

EXPOSE 8081

ARG PACKAGING_DIR=/home/app/target

COPY --from=maven_build ${PACKAGING_DIR}/*.jar app.jar

CMD ["java", "-jar", "app.jar"]