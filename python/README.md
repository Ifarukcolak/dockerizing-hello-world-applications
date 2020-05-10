# Build & Run
Clone the repo or click the download button 
```powershell
git clone 
cd ./python
```

Build the simple python file with this command
```powershell
docker build -t py-web-server .
```

Run this command according to server port
```powershell
docker run -p 3000:8888 -d py-web-server
```