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

### API Connection Success
![apiSuccess](https://user-images.githubusercontent.com/101614781/180581991-39c17566-0c64-4aea-88ed-15f1067c5515.png)




```


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




