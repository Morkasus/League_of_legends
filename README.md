# Excellence Students Web Service
This web service manage pool of studetns. it's offers three GET methods:
Each method return Json object.
    
[WebService](https://league-of-legends-service.herokuapp.com)



## Registration Usage
### Login (POST)

`https://ex1-students-morkasus.herokuapp.com/login`

params: 

    username, password

JSON response example :
admin:
```
{
  "user": "admin",
  "isAdmin": true,
  "imgUrl": "images/character2.png",
  "status": "success"
}
```
user:
```
{
  "user": "mork",
  "isAdmin": false,
  "imgUrl": "images/character1.png",
  "status": "success"
}
```

### Insert key (GET): 
checks if this key exists and delete it.
`https://league-of-legends-service.herokuapp.com/insertkey/{key}`
    
JSON response example:
success
```
{
status: "success"
}
```
failed
```
{
    status: "failed"
}
```
    
    
### Create new user (POST): 

`https://league-of-legends-service.herokuapp.com/createuser`

params: 

    username, password, mail, firstname, lastname


JSON response example:
success
```
{
  "status": "success"
}
```
failed
```
{
  "status": "failed"
}
```




## Events Usage
### Create new user (POST): 

`https://league-of-legends-service.herokuapp.com/createevent`

params: 

    eventName, location, description


JSON response example:
success
```
{
  "status": "success"
}
```
failed
```
{
  "status": "failed"
}
```

## Author
Mor Kasus

