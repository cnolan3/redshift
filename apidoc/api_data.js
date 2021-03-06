define({ "api": [
  {
    "type": "get",
    "url": "/data/search?col&query",
    "title": "search articles",
    "name": "articleSearch",
    "group": "data",
    "description": "<p>searches articles</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "col",
            "description": "<p>table column to search by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>row value to search for, case insensitive</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "articles",
            "description": "<p>array of articles</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "articles.id",
            "description": "<p>article id number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.category",
            "description": "<p>article category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.title",
            "description": "<p>article title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.author",
            "description": "<p>article author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.body",
            "description": "<p>article body</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NoArticles",
            "description": "<p>articles do not exist</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/data.js",
    "groupTitle": "data"
  },
  {
    "type": "get",
    "url": "/data/articles?id",
    "title": "get an article by id",
    "name": "articles",
    "group": "data",
    "description": "<p>gets an article by id from the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id number of article</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>article category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>article title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>article author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>article body</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ArticleNotFound",
            "description": "<p>article with id does not exist</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/data.js",
    "groupTitle": "data"
  },
  {
    "type": "get",
    "url": "/data/latestart?num&off",
    "title": "get the latest articles",
    "name": "latestArticles",
    "group": "data",
    "description": "<p>get the latest 'num' articles offset by 'off' from the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>number of articles to get</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "off",
            "description": "<p>offset for search</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "articles",
            "description": "<p>array of articles</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "articles.id",
            "description": "<p>article id number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.category",
            "description": "<p>article category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.title",
            "description": "<p>article title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.author",
            "description": "<p>article author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articles.body",
            "description": "<p>article body</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NoArticles",
            "description": "<p>articles do not exist</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/data.js",
    "groupTitle": "data"
  },
  {
    "type": "get",
    "url": "/data/stats",
    "title": "get stats from the database",
    "name": "stats",
    "group": "data",
    "description": "<p>Gets system stats.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users",
            "description": "<p>number of users</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "images",
            "description": "<p>number of images analyzed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "confirmed",
            "description": "<p>number of confirmed exoplanets</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NoStats",
            "description": "<p>stats do not exist on database</p>"
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
    "filename": "routes/data.js",
    "groupTitle": "data"
  },
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
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "IncompleteUserObject",
            "description": "<p>user login information incomplete</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>incorrect password used</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested username does not belong to any user</p>"
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
