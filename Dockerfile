# Use the official Adoptium OpenJDK 17 as the base image
FROM eclipse-temurin:17-jdk-jammy

# Set a label for your Docker image (optional)
LABEL maintainer="Your Name <your@email.com>"

# Copy the JAR file into the Docker image
COPY target/invoice-0.0.1-SNAPSHOT.jar /app.jar

# Set the working directory
WORKDIR /

# Expose the port that your Spring Boot app will run on
EXPOSE 8080

# Define the command to run your Spring Boot application
CMD ["java", "-jar", "app.jar"]
