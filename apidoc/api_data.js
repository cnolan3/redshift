define({ "api": [
  {
    "type": "post",
    "url": "/users/authenticate",
    "title": "authenticate a user",
    "name": "authenticate",
    "group": "users",
    "description": "<p>Takes a username and password and checks them against the database, returns an auth token if a match is found.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>users password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status of response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>authentication token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>user database id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested username does not belong to any user</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>incorrect password used</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>database error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "register a new user",
    "name": "register",
    "group": "users",
    "description": "<p>Accepts user data and creates a new user in the database if the username is not already taken.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>new users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>new users first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>new users last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>new users email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new users password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status of registration</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user authentication token</p>"
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user data</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>user database id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "IncompleteUserObject",
            "description": "<p>the user data that whas sent is incomplete</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "UserAlreadyExits",
            "description": "<p>user with requested username already exists</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>database error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  }
] });
