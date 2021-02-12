define({ "api": [
  {
    "type": "get",
    "url": "/graphql?query:query",
    "title": "Graphql Simples",
    "version": "0.0.1",
    "group": "Graphql",
    "description": "<p>API de Graphql Simples</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Query",
            "description": "<p>Query para execução no Graphql</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   hello,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n\t  {\n\t\t  \"data\": {\n\t\t\t  \"hello\": \"Hello World!\"\n\t\t  }\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errors",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error",
          "content": "   HTTP/1.1 406 Not Acceptable\n\t  {\n\t\t  \"errors\": [\n\t  \t\t{\n\t  \t\t  \"message\": \"Must provide query string.\"\n\t\t\t}\n\t\t  ]\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Graphql",
    "name": "GetGraphqlQueryQuery"
  },
  {
    "type": "get",
    "url": "/play",
    "title": "Graphql Playground",
    "version": "0.0.1",
    "group": "Graphql",
    "description": "<p>API de Graphql usando o playground Simples</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Query",
            "description": "<p>Query para execução no Graphql</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   hello,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n\t  {\n\t\t  \"data\": {\n\t\t\t  \"hello\": \"Hello World!\"\n\t\t  }\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errors",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error",
          "content": "   HTTP/1.1 406 Not Acceptable\n\t  {\n\t\t  \"errors\": [\n\t  \t\t{\n\t  \t\t  \"message\": \"Must provide query string.\"\n\t\t\t}\n\t\t  ]\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Graphql",
    "name": "GetPlay"
  }
] });
