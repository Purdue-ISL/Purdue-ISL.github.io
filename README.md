# ISL Webpage
This repo contains the isl webpage content which is build using nodejs, VueJs and NUXT3.

## Webpage Structure
- The main pages (e.g., homepage, team, and publication) are placed under the pages directory
- Each main page is split into multiple components for simplicity and reusability. These component can be found under `components/<page>/<component>.vue`
- For styling the pages, we used tailwind css library. The css file can be found under the following path `/assets/css/main.css`
- Images and videos data are place under the `public` directory

## Build Website
To build the website you need to install all node modules using the command `npm install`

## Start Website
To run the website, use the command `npm run dev`, this should publish the website on `https://<ip>:3000/`


