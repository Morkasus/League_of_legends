# League_of_legends
## API

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


### Hide event (GET): 

`https://league-of-legends-service.herokuapp.com/hideevent/:eventId`

params: 

    eventId


JSON response example:
success
```
{
  "eventId": 17,
  "hide": true
}
```
failed
```
{
    "eventId": 17,
    "hide": false
}
```


###  Start event (GET): 

`https://league-of-legends-service.herokuapp.com/startevent/:eventId`

params: 

    eventId


JSON response example:
success
```
{
  "eventId": 17,
  "started": true,
}
```
failed
```
{
    "eventId": 17,
    "started": false
}
```


###  Show events (GET): 

`https://league-of-legends-service.herokuapp.com/showevents`

params: 


JSON response example:
success
```
{
  'hide':false
}
```
failed
```
{
    "status": "failed"
}
```


### Join event (GET): 

`https://league-of-legends-service.herokuapp.com/joinevent/:eventId/:userName`

params: 

    eventId,userName


JSON response example:
success
```
{
  "eventId": 14,
  "playerCounter": 6,
      "players": [
        "mork",
        "noamr",
        "daniels",
        "yossia",
        "orb",
        "itayn"
    ]
}
```
failed
```
{
    "status": "failed"
    ("Event not exist")
    ("User already joined to this event")
    ("There is no place to join")
}
```



### Leave event (GET): 

`https://league-of-legends-service.herokuapp.com/leaveevent/:eventId/:userName`

params: 

    eventId,userName


JSON response example:
success
```
{
    "eventId": 14,
      "playerCounter": 5,
      "players": [
        "mork",
        "noamr",
        "daniels",
        "yossia",
        "orb"
    ]
    
}
```
failed
```
{
    "status": "failed"
    ("Event not exist")
    ("the player list is empty")
    (userName + " not include in the player list")
}
```


### Show achievements (GET): 

`https://league-of-legends-service.herokuapp.com/leaveevent/:eventId/:userName`

params: 

    userName


JSON response example:
success
```
{
    "userName": "daniels",
    "gamesCounter": 0,
    "wins": 3,
    "loses": 3,
    "games": [
        18,
        16,
        17,
        13,
        22,
        26
    ]
}
```
failed
```
{
    "status": "failed"
}
```


## Author
Mor Kasus & Yossi Azoulay 

