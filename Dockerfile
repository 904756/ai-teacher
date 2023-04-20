#
#FROM maven:3.8.3-openjdk-17 AS build
#WORKDIR /app
#COPY . .
#RUN mvn clean package -DskipTests
#
#FROM eclipse-temurin:17-alpine
#RUN apk add dumb-init
#RUN mkdir -p /app/server
#RUN addgroup --system juser && adduser -S -s /bin/false -G juser juser
#COPY --from=build /app/target/App-0.0.1-SNAPSHOT.jar /app/server/AiTeacherApplication.jar
#WORKDIR /app/server
#RUN chown -R juser:juser /app/server
#USER juser
#CMD ["dumb-init", "java", "-jar", "AiTeacherApplication.jar"]
