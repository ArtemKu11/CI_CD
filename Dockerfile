FROM openjdk:10
EXPOSE 8080
ADD springApp/target/vikentevaApp.jar vikentevaApp.jar
ENTRYPOINT [ "java", "-jar", "/vikentevaApp.jar" ]