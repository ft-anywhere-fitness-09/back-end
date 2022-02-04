# <p align="center">Anywhere Fitness API</p>

## <p align="">https://ft-anywhere-fitness-09.herokuapp.com//</p>

## <p align="">---------- REGISTER / LOGIN ----------</p>


<details>
<summary>Usernames/Passwords</summary>

```json

[
    {
        "user_id": 1,
        "username": "robert",
        "password": "$2a$08$Ib0hdcZKmR81bf/lDBtmSu2BWV7pfZ91STodHGO4.nsHkZT/4pZ/C",//1234
        "role_type": "instructor"
    },
    {
        "user_id": 2,
        "username": "tom",
        "password": "$2a$08$Ib0hdcZKmR81bf/lDBtmSu2BWV7pfZ91STodHGO4.nsHkZT/4pZ/C",//1234
        "role_type": "instructor"
    },
    {
        "user_id": 3,
        "username": "jimmy",
        "password": "$2a$08$Ib0hdcZKmR81bf/lDBtmSu2BWV7pfZ91STodHGO4.nsHkZT/4pZ/C",//1234
        "role_type": "client"
    },
    {
        "user_id": 4,
        "username": "susan",
        "password": "$2a$08$Ib0hdcZKmR81bf/lDBtmSu2BWV7pfZ91STodHGO4.nsHkZT/4pZ/C",//1234
        "role_type": "client"
    },
]

```

</details>




### [POST] /api/auth/register

- Register a new user
  - _username required (must be between 3 and 30 characters)_
  - _password required (must be between 5 and 200 characters)_
  - _role required (must be between 'client' or 'instructor', insructor requires auth code)_

_What you send:_

```json client
{
  "username": "SampleUser",
  "password": "abc123",
  "role_type": "client"
}
```

```json instructor
{
  "username": "SampleUser",
  "password": "abc123",
  "role_type": "instructor",
}
```

_What you receive:_

```json
{
    "massage": "Account successfully created. Please login: aaa1"
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_
  - _provides a newly created token_

_What you send:_

```json
{
  "username": "SampleUser",
  "password": "abc123"
}
```

_What you receive:_

```json
{
  "message": "welcome, SampleUser",
  "role": "instructor",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Ik5ld1VzZXIiLCJpYXQiOjE2MjcyNjY4MDYsImV4cCI6MTYyNzM1MzIwNn0.J1dFd3ghUPYVTodsaAU3Bg2RRcmYM_1oOe-96nvLLUg"
}
```

##

### [GET] /api/users/

**_RESTRICTED ENDPOINT_**

- Get an array of users
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
  {
    "user_id": 1,
    "username": "tom",
    "role_type": "instructor"
  },
  {
    "user_id": 2,
    "username": "jerry",
    "role_type": "instructor"
  },
  {
    "user_id": 3,
    "username": "garfield",
    "role_type": "client"
  },
  {
    "user_id": 4,
    "username": "odie",
    "role_type": "client"
  }
]
```

### [GET] /api/classes

- Get an array of all classes you can sing up for
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
  {
    "class_id": 1,
    "class_name": "Morning Zen",
    "class_duration": "1 hour",
    "max_class_size": 15,
    "class_date": "2021-11-17T05:00:00.000Z",
    "start_time": "08:00:00",
    "class_location": "Central Park",
    "instructor": "tom",
    "intensity_level": "beginner",
    "type_description": "yoga",
    "number_registered": 2
  },
  {
    "class_id": 2,
    "class_name": "Boxing Basics",
    "class_duration": "45 min",
    "max_class_size": 12,
    "class_date": "2021-12-22T05:00:00.000Z",
    "start_time": "10:30:00",
    "class_location": "YMCA",
    "instructor": "jerry",
    "intensity_level": "beginner",
    "type_description": "boxing",
    "number_registered": 1
  },
  {
    "class_id": 3,
    "class_name": "Sunday Spinning",
    "class_duration": "1.5 hours",
    "max_class_size": 25,
    "class_date": "2021-11-19T05:00:00.000Z",
    "start_time": "19:00:00",
    "class_location": "Gym Z",
    "instructor": "tom",
    "intensity_level": "advanced",
    "type_description": "cycling",
    "number_registered": 2
  },
  {
    "class_id": 4,
    "class_name": "Water Aerobics",
    "class_duration": "2 hours",
    "max_class_size": 10,
    "class_date": "2022-01-07T05:00:00.000Z",
    "start_time": "16:45:00",
    "class_location": "Community Pool",
    "instructor": "jerry",
    "intensity_level": "intermediate",
    "type_description": "swimming",
    "number_registered": 1
  },
  {
    "class_id": 5,
    "class_name": "Bikram Yoga",
    "class_duration": "30 min",
    "max_class_size": 20,
    "class_date": "2022-02-08T05:00:00.000Z",
    "start_time": "18:30:00",
    "class_location": "Gym X",
    "instructor": "jerry",
    "intensity_level": "advanced",
    "type_description": "yoga",
    "number_registered": 0
  }
]
```

### [GET] /api/classes/:class_id

_What you receive:_

```json
{
  "class_id": 1,
  "class_name": "Morning Zen",
  "class_duration": "1 hour",
  "max_class_size": 15,
  "class_date": "2021-11-17T05:00:00.000Z",
  "start_time": "08:00:00",
  "class_location": "Central Park",
  "instructor": "tom",
  "intensity_level": "beginner",
  "type_description": "yoga",
  "number_registered": 2
}
```


### [POST] /api/classes

- Add information for a new class
  - _requires valid token in authorization header to access_

_What you send:_

```json
    {
        "class_name": "Sunday",
        "class_duration": "1.5 hours",
        "max_class_size": 25,
        "class_date": "2021-11-19",
        "start_time": "19:00:00",
        "class_location": "Gym Z",
        "class_instructor": 1,
        "intensity_id": 3,
        "type_id": 3
    }
```



### [PUT] /api/classes/:class_id


  _What you send:_

````json
{
  "location": "Gym Z"
}
````

_What you receive:_

```json
{
    "class_id": 2,
    "class_name": "Boxing Basics",
    "class_duration": "45 min",
    "max_class_size": 12,
    "class_date": "2021-12-22T05:00:00.000Z",
    "start_time": "10:30:00",
    "class_location": "Gym Z",
    "instructor": "jerry",
    "intensity_level": "beginner",
    "type_description": "boxing",
    "number_registered": 1
}
```

### [DELETE] /api/classes/:class_id



_What you receive:_

```json
{
    "message": "Boxing Basics has been deleted successfully"
}
```