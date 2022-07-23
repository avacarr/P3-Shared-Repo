 # Marvel-Wiki
  > SEI - Software Engineering Project 3 
  > Created By: Alex Carr, Damian Fletcher, Eric Pettaway, Jeremy Currier

### Marvel Wiki
  Our team is planning on creating a Wikipedia of the Marvel Universe. We plan to utilize the Marvel API found on [a link](https://www.marvel.com/)


### MVP
    - Home Page
      - Welcoming and shows different routes and login/signup.
    - User Page
      - Shows all favorites and previously viewed items.
    - Show All Page
      - Resource type shows all data and allows for multiple page scroll.
    - Show Page
      - Shows all data pertinent to data selected.


### Stretch Goals
    - User can login using various methods offered. (OAuth)
    - User can upload profile photo
    - User can leave comments and ratings
    - Search Page
      - User can search database and select and view data


### Front-End
    - React
    - HTML
    - CSS
    - JavaScript


### Back-End
    - Express
    - Morgan
    - Mongoose
    - Axios
    - Cors


### List of Mongoose models and their properties
```js
//  Primary Model
User = {
  username: String,
  email: String,
  favorites: [
    comics: [],
    comic_series: [],
    comic_stories: [],
    comic_events: [],
    creators: [],
    characters: []
  ]
  view_history: [
    comics: [],
    comic_series: [],
    comic_stories: [],
    comic_events: [],
    creators: [],
    characters: []
  ]
}
```


### API Connection Success

![](https://user-images.githubusercontent.com/101614781/180583122-db1f4651-b0d5-4536-b937-2dfae51b216a.png)


### List of Routes
| Action | Method | Path                    | Action                                                               |
| ------ | ------ | ----------------------- | -------------------------------------------------------------------- |
| INDEX  | GET    | `/index`                | Show list of Superheroes                                             |
| CREATE | POST   | `/index/favorites`      | Favorite a Superhero                                                 |
| SHOW   | GET    | `/index/:superheroeid`  | Read information about the Superhero                                 |
| UPDATE | PUT    | `/index/:favoritelistid | Update favorite list                                                 |
| DESTROY| DELETE | `/index/:favoritelistid | Delete Super hero from list                                          |
| CREATE | POST   | '/index/createAccount'  | Create an account                                                    |
| INDEX  | GET    | '/index/login'          | Login to account                                                     |
| INDEX  | GET    | '/index/history'        | show previously viewed heroes                                        |


### User Stories
    - As an unlogged-in user, I would like to be able to browse all the pages 
    - As an unlogged-in user, I would like to have the option to login/signup on any page
    - As an logged-in user, I would like to be able to favorite 
    - As an logged-in user, I would like to have a users page that displays all favorites
    - As an logged-in user, I would like to have the option to see my previously viewed


### Wireframe


<img width="759" alt="p3-wireframe1" src="https://user-images.githubusercontent.com/101517274/180585171-0f273f48-7900-41f7-8e4f-695ec59bb061.png">

<img width="759" alt="p3-wireframe2" src="https://user-images.githubusercontent.com/101517274/180585173-587f667b-be8a-4e20-98ad-631911b426e6.png">

<img width="725" alt="p3-wireframe3" src="https://user-images.githubusercontent.com/101517274/180585190-2779e2a6-c145-4973-a4f8-768c9dab3091.png">



