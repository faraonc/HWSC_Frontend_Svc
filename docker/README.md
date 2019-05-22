# hwsc-frontend Docker Compose

## Running docker-compose
`$ docker-compose up`

<br>

## Updating `Envoy.yaml`
When updating `envoy_proxy > envoy.yaml` file, 
you need to delete the envoy images so that docker can 
rebuild the image with the updated yaml file

<br>

## Errors with CORS
If you get cors header issues denying access, make sure the metadata you are trying
to send is included in `cors.allow_headers` list in `envoy_proxy > envoy.yaml` file
and rebuild envoy image with the updated yaml file.

<br>

## Docker Commands
1. **Stop running containers:**
   - See the list of running containers: `$ docker ps`
     - Stop ALL containers ran by docker-compose: `$ docker-compose stop`
     - Stop a single container: `$ docker stop <IMAGE NAME>` 

1. **Remove stopped containers:**
   - See the list of stopped containers: `$ docker ps -a` 
     - Remove ALL stopped containers: `$ docker rm $(docker ps -a -q)`
     - Remove a single container: `$ docker rm <CONTAINER ID>`
     
1. **Delete an image:**
   - See the list of images: `$ docker images`
     - Remove ALL images: `$ docker rmi $(docker images -q)`
     - Remove a single image: `$ docker rmi <IMAGE ID>`

