# Build & Run
Clone the repo or click the download button 
```powershell
git clone 
cd ./nodejs
```
Build the helloworld image ('.' specifies dockerfile is in this path). *docker build*  command download all needed images if they are not stored in your local registry.  
```powershell
docker build -t <your_image_name> .
```
*-p* tag is used to binding ports for container and tcp. *-d*  is detach mode, it means *create, run container in background and print the container id* .
```powershell
docker run -p <container_port>:<tcp_port> -d <your_image_name>
```




docker logs <container_id>
docker exec -it <container_id> /bin/bash


-it create and listen logs
-d create and exit terminal


