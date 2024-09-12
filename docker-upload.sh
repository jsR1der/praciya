docker-compose build;
docker tag playingwithreact-backend:latest dotcer/praciya-backend:latest
docker tag playingwithreact-frontend:latest dotcer/praciya-frontend:latest
docker login
docker push dotcer/praciya-backend:latest
docker push dotcer/praciya-frontend:latest
