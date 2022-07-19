# Marvel-Wiki
SEI Project 3 


### Marvel Wiki



### MVP



### Stretch Goals



### Front-End
    
    -
    -
    -
    -
    - 

### Back-End

    - 
    -
    -

### List of Mongoose models and their properties

```js
//  Primary Model
User = {
  username: String,
  password: String,
  favorites: [Recipe],
  available_recipe: [Recipe],
  available_booze: [Booze]
}

//  Secondary Model
Recipe = {
  name: String,
  recipe: String,
  description: String,
  favorite: Boolean,
  required: [Booze]
}

// Tertiary Model
Booze = {
  name: String,
  image: String,
  available: Boolean
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

    -
    -
    -
    -
    - 

### Wireframe



### Created By

    - Alex Carr
    - Damian Fletcher
    - Eric Pettaway
    - Jeremy Currier
