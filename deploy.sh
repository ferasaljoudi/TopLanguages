#!/bin/bash

# Set variables
IMAGE_NAME="top-langs"
DOCKERHUB_USERNAME="ferasaljoudi"
DOCKERHUB_REPO="top-langs"
DOCKERHUB_TAG="latest"
CONTAINER_NAME="top-langs-container"

# Ensure the script stops on any error
set -e

# Ensure Docker Buildx is initialized
docker buildx create --use || true
docker buildx inspect --bootstrap

# Build the Docker image for arm64
echo "Building Docker image for arm64..."
docker buildx build --platform linux/arm64 -t $DOCKERHUB_USERNAME/$DOCKERHUB_REPO:$DOCKERHUB_TAG --push .

# Login to Docker Hub
echo "Logging into Docker Hub..."
echo "Please enter your Docker Hub password:"
docker login -u $DOCKERHUB_USERNAME

# echo "Tagging the image..."
# docker tag $IMAGE_NAME:latest $DOCKERHUB_USERNAME/$DOCKERHUB_REPO:$DOCKERHUB_TAG

# Pushing the image to Docker Hub (handled by buildx)
# echo "Pushing the image to Docker Hub..."
# docker push $DOCKERHUB_USERNAME/$DOCKERHUB_REPO:$DOCKERHUB_TAG

# Stop and remove the existing container if it exists
if [ $(docker ps -a -q --filter name=$CONTAINER_NAME) ]; then
  echo "Stopping and removing existing container..."
  docker stop $CONTAINER_NAME
  docker rm $CONTAINER_NAME
fi

# Force remove any containers using the image
containers=$(docker ps -a -q --filter ancestor=$IMAGE_NAME)
if [ ! -z "$containers" ]; then
  echo "Stopping and removing all containers using the image..."
  docker stop $containers
  docker rm $containers
fi

# Remove the old image
echo "Removing previous images..."
docker rmi -f $(docker images -q $IMAGE_NAME:latest) || true

# Deploy the container
echo "Deploying the container..."
docker-compose up -d

echo "Deployment completed."
