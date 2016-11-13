define({ "api": [
  {
    "type": "post",
    "url": "/registrations",
    "title": "Register a New Domain & Launch Machine",
    "name": "CreateRegistration",
    "group": "Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Domain Name to register</p>"
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
            "field": "id",
            "description": "<p>unique id of the registration</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/RegistrationsController.js",
    "groupTitle": "Registration"
  }
] });
