# netflixgpt

- npx create-react-app netflixgpt
- config tailwind css
- routing
- Header
- login form
- sign Up form
- validation for signIn and signUp form
- useRef hooks
- firebase setup
- deploying app to production
- firebase authentication for signUp and signIn
- create redux store and user slice for storing userData
- onauthStatechange we store user data to redux store
- update profile with enter userName when account created
- signOut feature
- display username from redux store

- (--- FIX BUGS----)
  - when user not logged in , /browse redirect him to log in page and vice-versa
  - cleanUp function for unsubscibe to onauthchange
- write urls to a separate file constant.js
- TMDB login ,create API , get accessToken
- log tmdb now-playing-movies data in console
- craete movie slice
- design our browse page
- store the movies and the trailer should show on screen in our store and show my 1st movie trailer and its description
- create cusom hooks for fetch video info like trailer key and video from tmdb
- create customhooks for different types of movies list , store in reduxStore and populate in our app

# features

- Login/ Sign up page

  - sign in / sign up page
  - redirect to Browse page

- Browse page(after login can enter)

  - Header
  - Main movie
    - trailer in background
    - title and description
    - movie suggestions
    - movieList \* n

- netflixgpt
  - searchbar
  - movie suggestion
