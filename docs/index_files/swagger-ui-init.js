
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.1",
    "info": {
      "title": "Authentication and CRUD stuff",
      "description": "Contains all available API endpoints in this codebase",
      "contact": {
        "email": "valentinlemaire1618@gmail.com"
      },
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:3000/api"
      }
    ],
    "tags": [
      {
        "name": "stuff",
        "description": "All kind off stuff"
      },
      {
        "name": "user",
        "description": "Operations about user"
      }
    ],
    "paths": {
      "/stuff": {
        "get": {
          "tags": [
            "stuff"
          ],
          "summary": "Get all the stuff",
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Stuff"
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Server error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "Bearer": []
            }
          ]
        },
        "post": {
          "tags": [
            "stuff"
          ],
          "summary": "Create a stuff",
          "requestBody": {
            "description": "The stuff to save into the ddb",
            "content": {
              "stuff": {
                "schema": {
                  "$ref": "#/components/schemas/Stuff"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Client error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "Bearer": []
            }
          ]
        }
      },
      "/stuff/${id}": {
        "get": {
          "tags": [
            "stuff"
          ],
          "summary": "Get a specific stuff",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "ID of stuff to return",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Stuff"
                  }
                }
              }
            },
            "404": {
              "description": "Client error / Not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Server error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "Bearer": []
            }
          ]
        },
        "put": {
          "tags": [
            "stuff"
          ],
          "summary": "Modify a specific stuff",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "ID of stuff to modify",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "The stuff to modify",
            "content": {
              "Stuff": {
                "schema": {
                  "$ref": "#/components/schemas/Stuff"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Client error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "404": {
              "description": "Client error / Not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Server error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "Bearer": []
            }
          ]
        },
        "delete": {
          "tags": [
            "stuff"
          ],
          "summary": "Delete a specific stuff",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "ID of stuff to delete",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Client error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "404": {
              "description": "Client error / Not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Server error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "Bearer": []
            }
          ]
        }
      },
      "/auth/signup": {
        "post": {
          "tags": [
            "user"
          ],
          "summary": "Create a user",
          "requestBody": {
            "description": "The user to create",
            "content": {
              "User": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Client error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Server error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          }
        }
      },
      "/auth/login": {
        "post": {
          "tags": [
            "user"
          ],
          "summary": "Login",
          "requestBody": {
            "description": "The user to log",
            "content": {
              "User": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LoginResponse"
                  }
                }
              }
            },
            "401": {
              "description": "User or password not correct",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Server error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApiResponse"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "ApiResponse": {
          "type": "object",
          "properties": {
            "status": {
              "type": "integer",
              "format": "int32"
            },
            "message": {
              "type": "object",
              "properties": {}
            }
          }
        },
        "LoginResponse": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "string"
            },
            "token": {
              "type": "string"
            }
          }
        },
        "Stuff": {
          "required": [
            "description",
            "imageUrl",
            "price",
            "title",
            "userId"
          ],
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "imageUrl": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "price": {
              "type": "number"
            }
          }
        },
        "User": {
          "required": [
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          }
        }
      },
      "securitySchemes": {
        "Bearer": {
          "type": "apiKey",
          "name": "Authorization",
          "in": "header"
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
