// Create web server
// Start server: node comments.js
// Test: http://localhost:3000/comments
// Test: http://localhost:3000/comments?postId=1
// Test: http://localhost:3000/comments?postId=1&name=et
// Test: http://localhost:3000/comments?postId=1&name=et&email=Eliseo@gardner
// Test: http://localhost:3000/comments?postId=1&name=et&email=Eliseo@gardner&body=laudantium
// Test: http://localhost:3000/comments?postId=1&name=et&email=Eliseo@gardner&body=laudantium&test=123
// Test: http://localhost:3000/comments?postId=1&name=et&email=Eliseo@gardner&body=laudantium&test=123&test=456
// Test: http://localhost:3000/comments?postId=1&name=et&email=Eliseo@gardner&body=laudantium&test=123&test=456&test=789

// Load http module
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Configure HTTP server to respond with Hello World to all requests
const server = http.createServer(function (request, response) {
    // Get the query parameters
    const query = url.parse(request.url).query;
    const params = querystring.parse(query);
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body
    response.end(JSON.stringify(params));
});

// Listen on port 3000, IP defaults to