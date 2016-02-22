# How to execute
## Development
```shell
npm start
```
## Production
```shell
npm build
npm production
```

# Execute 

To build the docker image
```shell
docker build -t <your username>/demistifying .
```

Your image will now be listed by Docker:
```shell
docker images
# Example
REPOSITORY                      TAG        ID              CREATED
node                            argon      539c0211cd76    3 weeks ago
<your username>/demistifying    latest     d64d3505b0d2    1 minute ago
```

Run the image in detached mode, leaving the container running in the background.
```shell
docker run -p 3000:3000 -d <your username>/demistifying
```

# Demistifying Modern Javascript Tools
http://blog.lunarlogic.io/2015/creating-a-universal-reactjs-application-part-1-modern-javascript-tools/
http://blog.lunarlogic.io/2015/how-to-create-a-universal-reactjs-application-with-bare-reactjs/
http://blog.lunarlogic.io/2015/how-to-create-a-universal-reactjs-application-with-flux/
http://blog.lunarlogic.io/2015/how-to-create-a-universal-reactjs-application-with-redux/

# Dockerizing a Node.js web app
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
