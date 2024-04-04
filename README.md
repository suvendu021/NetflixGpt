
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
- create a buttton for toggling GPT search page add its vale in redux store
- add our GPT search page (multi-language)
- take userInput from search bar by useRef and store it in our redux store
- use searchMovie api of tmdb to seach entered movie and show it to our screen
- reusing our movieList component
- make our website responsive

# NEVER USE (NPM AUDIT FIX --FORCE) BREAK YOUR PROJECT(----FIX BUG ------)

- "git status"(to make sure the changes to package.json and package-lock.json were not yet staged for commit)
- "git restore package-lock.json" and "git restore package.json"
- npm install

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



![Screenshot (43)](https://github.com/suvendu021/NetflixGpt/assets/102411414/eb03e9d7-7a01-4bb3-8baf-763308ba40ed)
![Screenshot (44)](https://github.com/suvendu021/NetflixGpt/assets/102411414/7d709e26-4c20-4448-8df1-657130dfc910)
![Screenshot (45)](https://github.com/suvendu021/NetflixGpt/assets/102411414/de154ce8-90c4-45c9-b2b3-cbf665d7a60b)
![Screenshot (46)](https://github.com/suvendu021/NetflixGpt/assets/102411414/303aad31-86f9-4c28-b5a3-18aa4d92e0d9)
![Screenshot (47)](https://github.com/suvendu021/NetflixGpt/assets/102411414/4ea97afc-d791-4d1a-b846-e9b5c02eb552)
![Screenshot (48)](https://github.com/suvendu021/NetflixGpt/assets/102411414/c5c606ab-93c8-48fd-b66b-981607c13ab9)
![Screenshot (49)](https://github.com/suvendu021/NetflixGpt/assets/102411414/2e8b4ddb-f476-414f-a434-724ef6bbe6e4)
![Screenshot (50)](https://github.com/suvendu021/NetflixGpt/assets/102411414/3602fe75-bb80-4ea6-acad-c048ec86f0c4)

