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

### If you have grunt installed
Go into the `/web` directory and to build everything just type:

```
> npm install
```
which installs the web and grunt build dependencies... and then
```
> npm run cpp
```
which build the C++ examples.   If you want to remove the build artifacts (clean), just type:
```
> npm run cleanup
```

### If you don't want to use grunt
You need to got into each directory under `/cpp` that has a binding.gyp file - which are the following:

```
/cpp/nodeprime
/cpp/nodeprime_sync
/cpp/standalone_flex_file
/cpp/standalone_stdio
/cpp/standalone_usr
```

And type `npm install` inside each directory.

To run the web app, go to `/web` and type `npm install` as well.

# Run the web app
The web app has links to invoke all the C++ examples.  Just go to `/web` and type:

```
> npm start
```
