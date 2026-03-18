FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY backend-spring ./backend-spring
RUN chmod +x backend-spring/mvnw
RUN cd backend-spring && ./mvnw -B clean package -DskipTests -DskipITs -U

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/backend-spring/target/*.jar /app/app.jar
EXPOSE 8080
CMD ["java","-jar","/app/app.jar"]
