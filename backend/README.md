# API Documentation
  
  This document provides an overview of all the API endpoints available in the backend of the **Dynamic Form** project.
  
  ---
  
## Base URL
  
  The base URL for all API calls is:

- <https://your-backend-url.com/api>

---

## Endpoints

### 1. **Get All Forms**

- **Endpoint**: `/forms`
- **Method**: `GET`
- **Description**: Fetches a list of all forms.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**:

    ```json
    {
        "statusCode": 200,
        "data": [
            {
                "id": "a14b185b-3531-4a7c-ad93-9f227cb6cd9f",
                "name": "Test"
            },
            {
                "id": "c2f2fd11-53d9-4168-a043-5147763ce8b4",
                "name": "Test"
            }
        ],
        "message": "success"
    }
    ```

---

### 2. **Get Form by ID**

- **Endpoint**: `/forms/:id`
- **Method**: `GET`
- **Description**: Fetches the details of a specific form by its ID.
- **Path Parameters**:
  - `id` (string): The unique identifier of the form.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**:

    ```json
    {
        "statusCode": 200,
        "data": {
            "id": "a14b185b-3531-4a7c-ad93-9f227cb6cd9f",
            "name": "Test",
            "fields": {
                "fields-0": {
                    "type": "text",
                    "question": "Test",
                    "required": true
                },
                "fields-1": {
                    "type": "password",
                    "question": "Test",
                    "required": true
                }
            }
        },
        "message": "success"
    }
    ```

---

### 3. **Create a New Form**

- **Endpoint**: `/forms`
- **Method**: `POST`
- **Description**: Creates a new form.
- **Request Body**:

  ```json
  {
      "name": "Test",
      "fields": {
          "field-1": {
              "type": "text",
              "question": "First Name?",
              "required": true
          },
          "field-2": {
              "type": "text",
              "question": "Last Name?",
              "required": true
          }
      }
  }
  ```

- **Response**:

  - Status Code: `200 OK`
  - Body:
  
  ```json
  {
      "statusCode": 200,
      "data": {
          "id": "ab3de70c-e2e8-4796-884a-e0dfcd43af51",
          "name": "Test",
          "fields": {
              "field-1": {
                  "type": "text",
                  "question": "First Name?",
                  "required": true
              },
              "field-2": {
                  "type": "text",
                  "question": "Last Name?",
                  "required": true
              },
          }
      },
      "message": "success"
  }
  ```

---

### 4. **Update a Form**

- **Endpoint**: `/forms/:id`
- **Method**: `PUT`
- **Description**: Updates an existing form by its ID.
- **Path Parameters**:
  - `id` (string): The unique identifier of the form.
- **Request Body**:

  ```json
  {
      "fields": {
          "field-1": {
              "type": "text",
              "question": "First Name?",
              "required": true
          },
          "field-2": {
              "type": "text",
              "question": "Last Name?",
              "required": true
          }
      }
  }
  ```

- **Response**:

  - Status Code: `200 OK`
  - Body:
  
  ```json
    {
      "statusCode": 200,
      "data": {
          "id": "a14b185b-3531-4a7c-ad93-9f227cb6cd9f",
          "name": "Test",
          "fields": {
              "field-1": {
                  "type": "text",
                  "question": "First Name?",
                  "required": true
              },
              "field-2": {
                  "type": "text",
                  "question": "Last Name?",
                  "required": true
              }
          }
      },
      "message": "success"
    }
  ```
  