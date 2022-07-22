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


### List of Routes
| Action | Method | Path                    | Action                                                               |
| ------ | ------ | ----------------------- | -------------------------------------------------------------------- |
| INDEX  | GET    | `/drinks`               | Read information about all recipes                                   |
| NEW    | GET    | `/drinks/new`           | Show form to make new or copied recipe                               |
| CREATE | POST   | `/drinks`               | Create a new recipe                                                  |
| SHOW   | GET    | `/drinks/:drinkId`      | Read information about the recipe                                    |
| EDIT   | GET    | `/drinks/:drinkId/edit` | Show existing form for existing recipe                               |
| UPDATE | PUT    | `/drinks/:drinkId`      | Update the existing recipe with new content                          |
| DESTROY| DELETE | `/drinks/:drinkId`      | Delete the existing recipe, then redirect                            |


### User Stories
    - As an unlogged-in user, I would like to be able to browse all the pages 
    - As an unlogged-in user, I would like to have the option to login/signup on any page
    - As an logged-in user, I would like to be able to favorite 
    - As an logged-in user, I would like to have a users page that displays all favorites
    - As an logged-in user, I would like to have the option to see my previously viewed


### Wireframe




