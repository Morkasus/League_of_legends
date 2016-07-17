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
  "status": "success"
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
  "status": "success"
}
```
failed
```
{
    status: "failed",
    message: "failed: can't save the game result"
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
    status: "success",
    msg: "ok",
    players: [
        "daniels",
        "itayn",
        "yossia",
        "mork",
        "noamr"
    ],
    playerCounter: 5
}
```
failed
```
{
    status: "failed",
    msg: "Event not exist",
    players: [ ],
    playerCounter: 0
}
```
msg - "Event not exist"  | "userName" + " already include in the player list".


### Leave event (GET): 

`https://league-of-legends-service.herokuapp.com/leaveevent/:eventId/:userName`

params: 

    eventId,userName


JSON response example:
success
```
{
    status: "success",
    msg: "ok",
    players: [
        "daniels",
        "itayn",
        "yossia",
        "mork"
    ],
    playerCounter: 4
}
```
failed
```
{
    status: "failed",
    msg: "noamr not include in the player list",
    players: [
        "daniels",
        "itayn",
        "yossia",
        "mork"
    ],
    playerCounter: 4
}
```
msg - "Event not exist" | "the player list is empty" | "userName" + " not include in the player list".

### Show achievements (GET): 

`https://league-of-legends-service.herokuapp.com/showachievements/:userName`

params: 

    userName


JSON response example:
success
```
{
    userWin: 3,
    userLoses: 3,
    lastVictory: {
        eventId: 22,
        winScore: 973,
        loseScore: 210,
        loseTeam: [
        "noamr",
        "yossia",
        "itayn"
        ],
        winTeam: [
        "daniels",
        "mork",
        "orb"
        ]
    },
    lastDefet: {
        eventId: 26,
        winScore: 759,
        loseScore: 353,
        loseTeam: [
        "mork",
        "itayn",
        "daniels"
        ],
        winTeam: [
        "orb",
        "yossia",
        "noamr"
        ]
    },
    lastGame: {
        eventId: 26,
        winScore: 759,
        loseScore: 353,
        loseTeam: [
        "mork",
        "itayn",
        "daniels"
        ],
        winTeam: [
        "orb",
        "yossia",
        "noamr"
        ]
        },
        friendsFromLastMacth: [
        "orb",
        "yossia",
        "noamr",
        "itayn",
        "daniels"
        ]
}
```

## Authors
Mor Kasus & Yossi Azoulay 

