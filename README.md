This repo contains the Purdue ISL webpage content which is build using nodejs, VueJs and NUXT3.

## Webpage Structure
- The main pages (e.g., homepage, team, and publication) are placed under the pages directory
- Each main page is split into multiple components for simplicity and reusability. These component can be found under `components/<page>/<component>.vue`
- For styling the pages, we used tailwind css library. The css file can be found under the following path `/assets/css/main.css`
- Images and videos data are place under the `public` directory

## Public website deployment

***Note:* Changes via GitHub's web editor should automatically trigger a recompilation and deploy (takes about 4 to 5 minutes).
In case you do not see your updates, use the following instructions to trigger a manual update:**

- Install nodeJS and npm (assuming Ubuntu 22.04):
    - `sudo apt update`
    - `sudo apt install nodejs npm`
  
- Clone the Purdue ISL website repo:
  - `git clone git@github.com:Purdue-ISL/Purdue-ISL.github.io.git`
- Navigate into the repo:
    - `cd Purdue-ISL.github.io`
- Install required JS packages:
  - `npm install`
- Deploy website to GitHub pages:
  - `npm run deploy`

## Local website deployment (for testing)
- `npm run dev`, this should publish the website on `https://<ip>:3000/`
