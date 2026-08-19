import swaggerAutogen from "swagger-autogen"

const doc = {
  info: {
    title: 'My fist API',
    description: 'Descovery Kids'
  },
  host: 'localhost:5000'
}

const outputFile = './swagger_output.json'

const routes = ['./server.js']

swaggerAutogen()(outputFile, routes,doc)