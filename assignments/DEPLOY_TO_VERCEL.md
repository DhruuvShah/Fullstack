# Deploying this project to Vercel

This project (the `assignments` app) is a Create React App static site. The repository already includes a Vercel configuration (`vercel.json`) that tells Vercel to run the static build and use `build` as the output directory.

Quick deploy options:

- Option A — Vercel CLI (fast, recommended):

  1. Install the Vercel CLI (if you haven't already):

     ```bash
     npm i -g vercel
     ```

  2. From this workspace, change to the `assignments` folder and deploy:

     ```bash
     cd "D:/Dhruv/iMCA/Sem - 4/Full Stack/Practicle/assignments"
     vercel login
     vercel --prod
     ```

  Follow the interactive prompts. Vercel will run `npm run build` (as defined by `@vercel/static-build`) and publish the `build` folder.

- Option B — Git integration (GitHub/GitLab/Bitbucket):

  1. Push this repository to your Git provider.
  2. In the Vercel dashboard, import the repository and set the project root to the `assignments` folder (if you want to deploy only that app).
  3. Ensure the build command is `npm run build` and the output directory is `build` (the included `vercel.json` already configures this).

Notes:

- Config file: [assignments/vercel.json](assignments/vercel.json)
- If your repo contains multiple apps and you want to deploy from `assignments`, pick that folder during import or run `vercel` from inside it.
- To preview builds locally, run `npm run build` inside `assignments` and serve the `build` folder with a static server (e.g., `npx serve build`).

If you'd like, I can:

- Run `npm run build` here to verify the build (I can run it and report back). 
- Commit these changes and prepare a deployment branch.
