FROM openjdk:11

WORKDIR /usr/src/nemo-app

EXPOSE 8081

COPY target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]