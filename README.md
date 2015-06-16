Hi! So you're coming to the [**Hands on with the modern front end stack**](http://www.phpconference.nl/schedule#tutorial-day/hands-modern-front-end-stack) workshop at Dutch PHP Conference?

**You'll need to bring a laptop capable of running this project as per the instructions below.** 

As long as you can get the *Minimum Setup* working, you'll be able to participate in most of the tutorial. You should try to get the *Preferred Setup* working so you can get the most out of the tutorial, but if you have problems don't worry!

## Minimum Setup instructions

- Install [Node.js](https://nodejs.org/). You can download the installer from the website, or alternatively use a tool like [nodenv](https://github.com/wfarr/nodenv) or [nvm](https://github.com/creationix/nvm) to install & manage Node versions. 
- Run `node -v` in your terminal to ensure it's installed. You should see something like:
  
  ```bash
  $ node -v
  v0.12.4
  ```
- Clone or download this repo in advance, just in case the conference wifi gives us trouble!

## Preferred Setup instructions

- `cd` into this repo & run `npm install` to install dependencies.
  - **Important note:** Some of the tools we'll use depend on [node-gyp](https://github.com/TooTallNate/node-gyp), which has its own platform-specific dependencies. Instructions for both Mac & Windows are [here](https://github.com/TooTallNate/node-gyp#installation), but in a nutshell:
    - **Mac:** You'll need Xcode & the Command Line Tools
    - **Windows:** Requirements vary depending on your version, check the [instructions](https://github.com/TooTallNate/node-gyp#installation)
- Run `npm start`. This will start a [Webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html). You should see something like this in your terminal if it started correctly:

  ![terminal](doc/server-screenshot.png)

- Open [http://localhost:3000](http://localhost:3000) in your browser. You should see something like this:

  ![browser](doc/browser-screenshot.png)

### If you encounter problems

If you have problems and can't install & run the project as above, open an issue on this repo or email ben@bensmithett.com and I'll help you figure it out!

I'm a Mac user. If you're on Windows, please double check you can at least get the *Minimum Setup* working in advance & let me know if you can't - I won't be much help if you have any Windows-specific issues on the day! :smile: 
