docker login -e $DOCKER_EMAIL -p $DOCKER_PASSWORD -u $DOCKER_USER
docker tag zenregistrar_webapp stevenzeiler/zen-registrar:latest
docker push stevenzeiler/zen-registrar:latest
