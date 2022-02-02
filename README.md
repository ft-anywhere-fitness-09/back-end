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
        "password": "1234",
        "role_id": 1,
        "created_at": "2022-02-02T16:42:17.187Z",
        "updated_at": "2022-02-02T16:42:17.187Z"
    },
    {
        "user_id": 2,
        "username": "tom",
        "password": "1234",
        "role_id": 1,
        "created_at": "2022-02-02T16:42:17.187Z",
        "updated_at": "2022-02-02T16:42:17.187Z"
    },
    {
        "user_id": 3,
        "username": "jimmy",
        "password": "1234",
        "role_id": 2,
        "created_at": "2022-02-02T16:42:17.187Z",
        "updated_at": "2022-02-02T16:42:17.187Z"
    },
    {
        "user_id": 4,
        "username": "susan",
        "password": "1234",
        "role_id": 2,
        "created_at": "2022-02-02T16:42:17.187Z",
        "updated_at": "2022-02-02T16:42:17.187Z"
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
  "auth_code": "auth_instructor_123"
}
```

_What you receive:_

```json
{
  "message": "Account successfully created. Please login.",
  "newUser": {
    "user_id": 15,
    "username": "SampleUser",
    "role_type": "instructor"
  }
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
