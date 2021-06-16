
# CREW APPLICATION

Simple application which represents dashboard with candidates.

## To run the application locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


## To run the application in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

