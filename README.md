# Missing Error Handling in Express.js POST Request

This repository demonstrates a common error in Express.js applications: missing error handling for POST requests.  The provided code lacks validation and error handling for incoming request bodies, leading to potential crashes or unexpected behavior.

## Bug Description
The `bug.js` file contains an Express.js server that handles POST requests to the `/users` endpoint.  It attempts to log the user data from the request body but doesn't handle cases where the request body is missing or invalid (e.g., missing required fields). This can lead to errors or unexpected responses from the server.

## Solution
The `bugSolution.js` file demonstrates the corrected code with proper error handling.  It includes validation to check for required fields and handles potential errors gracefully, returning appropriate HTTP status codes and error messages to the client.