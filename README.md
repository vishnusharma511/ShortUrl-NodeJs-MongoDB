# Create Short URL Node.js Application

This Node.js application allows users to generate short URLs, redirect to original URLs, and view analytics for the short URLs.

## Usage

### Generate Short URL (POST)

Generates a short URL for the provided original URL.

- **Endpoint**: `POST /url`
- **Request Body**:
  - Content Type: `application/json`
  - Body: 
    ```json
    {
        "url": "http://example.com"
    }
    ```
- **Example**:
  ```bash
  curl http://localhost:8000/url



### Redirect Short URL (GET)

Redirects to the original URL associated with the provided short URL.

- **Endpoint**: `GET /url/:shortUrl`
- **Example**:
  ```bash
  curl http://localhost:8000/url/GePeRPUz6



### View Analytics for Short URL (GET)

Displays analytics for the provided short URL, including visit history.

- **Endpoint**: `GET /url/analytics/:shortUrl`
- **Example**:
  ```bash
  curl http://localhost:8000/url/analytics/GePeRPUz6


