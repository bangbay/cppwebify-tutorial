# Getting your C++ to the Web with Node.js

This repository is the code for a blog series I wrote [here](http://blog.scottfrees.com/getting-your-c-to-the-web-with-node-js).
It's designed to outline a few ways to take legacy C++ (or new C++) and integrate it with Node.js.

# Build instructions
First... get the code:
```
> git clone https://github.com/bangbay/cppwebify-tutorial.git
```

## Step 1:  Install node-gyp
This is required for building all the C++ example projects, including the addons.

```
> npm install -g node-gyp
```

## Step 2:  Build the examples
This tutorial includes 6 seperate C++ projects and one web (express) project.  You'll only run the web app, but you need to build all the C++ apps.  I've included a grunt script to take care of the entire build process (which is explained in the tutorial).

Go into the `/web` directory and to build everything just type:

```
> npm install
```
which installs the web and grunt build dependencies... and then
```
> npm run cpp
```
which builds the C++ examples.   If you want to remove the build artifacts (clean), just type:
```
> npm run cleanup
```

# Run the web app
The web app has links to invoke all the C++ examples.  Just go to `/web` and type:

```
> npm start
```
