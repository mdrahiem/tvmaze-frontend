This is TVMaze app built with Vue. You can see the live demo of the app [here](https://tvmaze-vue.vercel.app/)

#### About the app

This is TV Show search app where you can browse the top rated TV shows, by show category or just by searching with a name. It has two pages, one is the main page where you see the curated information about shows by category and rating and a details page where you see the details information of the show.

#### Is the app mobile first?

Yes

#### How to run the app locally?

###### Prerequisites:

You should have these tools installed in your laptop before running this app locally.

- Node V 16+
- Yarn package manager

1.  git clone https://github.com/mdrahiem/tvmaze-frontend.git
2.  cd tvmaze-vue
3.  run `yarn install` or simply `yarn`
4.  Then run `yarn dev`

###### How to run tests:

To run tests in your terminal, `yarn test`

#### Technologies used and the reasons why they used:

I've created this app using `vite` tool as it gives minimum scaffolding of the vuejs app. Then I went ahead and setup `Routing` using `vue-router`. For styling purposes I've used `tailwindcss` because it's a utility first framework and I can just focus on the UI and functionality of the app. (Fun fact: I can write my own styles too. I have started my career as a web designer so I am pretty much comfortable with it 😊)

For the one of the main components of the app, the slider I have used `vue3-carousel` library. For state management I've used `pinia` and for testing I've used `vitest`. I chose the above libraries because these were recommended by Vue itself.

I have also used `Typescript` to build this app. The reason being to show that I am comfortable with it 😊 and ofcourse the benefits it brings to the code/repo. For network requests I have used `fetch` api. Also I have built this app using `composition API`.
