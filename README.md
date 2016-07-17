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
```
[
    {
        eventId: 14,
        eventName: "OMG World Cup Are U IN ?!",
        playerCounter: 4,
        location: "USA MA rm3# ds street",
        eventImg: "images/event1.png",
        description: "3v3 battles Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields",
        started: false,
        players: [
            "daniels",
            "itayn",
            "yossia",
            "mork"
        ]
    },
    {
        eventId: 15,
        eventName: "Fight For honor",
        playerCounter: 4,
        location: "Rehovot Ihakov38 st msi Date: Tuesday, 14 June 2016 Time: 3:00 GMT+3",
        eventImg: "images/event2.png",
        description: "3v3 battles Two teamsJoin the world's largest online gaming community: make friends, form teams and battle tens of millions of opponents from countries across the globe, then exchange strats on reddit, YouTube, the forums and beyond",
        started: false,
        players: [
            "daniels",
            "itayn",
            "yossia",
            "mork"
        ]
    }
]
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

