// Create web server
// Create a web server that listens on port 3000
// and responds with a simple message, such as "Hello, World!".
// Use the createServer method from the http module.
// The createServer method takes a callback function that is called
// with the request and response objects.
// The request object represents the HTTP request and has properties
// for the request method, URL, headers, and body. The response object
// represents the HTTP response and has methods for setting the status
// code, headers, and body. To send a response, use the end method.
// For example, to send the response "Hello, World!", use the following code:
// response.end('Hello, World!');
// To listen on a port, use the listen method. The listen method takes
// the port number and an optional hostname as arguments. For example,
// to listen on port 3000, use the following code:
// server.listen(3000);
// To test the server, run the script and open http://localhost:3000 in a web browser.
// The browser should display the message "Hello, World!".
// When you are finished, press the Ctrl+C keys to stop the server.

const http = require('http');

const server = http.createServer((request, response) => {
  response.end('Hello, World!');
});

server.listen(3000);