# `lofi.co` but Open Source

## FAQ

### Why ?

I love the design of `lofi.co` and I want to keep it alive even after it shuts down.

### What's not included ?

- LofiAI

...and maybe even more things but I don't know yet.

### What about assets ?

Since `lofi.co` will shut down, their assets at `https://lofico.nyc3.cdn.digitaloceanspaces.com` will probably also shut down - not sure about that though.

To prevent losing any of those assets, I've dumped and mirrored them at `https://lofi-co-assets.vexcited.com`. You can spin up your own assets mirror by serving these dumps from [Google Drive](https://drive.google.com/drive/folders/1ZBbENPYxs5mXB-1SIU-ftNBx9opRhhNl). Each `.zip` file is a folder, you can use the [directory listing of my mirror](https://lofi-co-assets.vexcited.com) as reference.

## Setup

Create a file `.env.local`. The contents will depend if you use cloud or locally hosted assets.

```sh
# Cloud
VITE_ASSETS_URL=https://lofi-co-assets.vexcited.com
# Local
VITE_ASSETS_URL=https://localhost:8080
```

### Using cloud hosted assets

After creating `.env.local`, install the dependencies and run the local server with `npm` or `pnpm`

```sh
npm install
npm run dev
```

### Using locally hosted assets

Download the assets from [Google Drive](https://drive.google.com/drive/folders/1ZBbENPYxs5mXB-1SIU-ftNBx9opRhhNl) and unzip them under a directory named `web_assets` at the root of the project.

Then, you can use Docker compose to run both the assets web server and the development server with listening changes:

```sh
docker compose up --build --watch
```

Or run them in separate terminals with a static file server like [live-server](https://www.npmjs.com/package/live-server).

Terminal 1:

```sh
npm install -g live-server
live-server ./web_assets --no-browser --port=8080
```

Terminal 2:

```sh
npm run dev
```
