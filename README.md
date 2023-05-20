1. Запустить PostgeSQL со следующими параметрами:
- database name: docker_db
- port: 5433
- username: postgres
- password: postgres
2. docker pull artemku11/vikenteva-app
3. docker run --name springApp -p 8080:8080 --add-host=host.docker.internal:host-gateway artemku11/vikenteva-app
