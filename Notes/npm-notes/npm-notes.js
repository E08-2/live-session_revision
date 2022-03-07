// * NPM (Node Package Manager)

// NPM is the default package manager for Node.js
// NPM helps you manage dependencies in your project.

// ? What is a package?

// A package is a collection of code which can do something useful for your project.
// For example, "express" is a package which can work with node to help you easily build a server

// ? What is a dependency?

// There are thousands of packages available via NPM, but we will only use some of them in our project.
// A dependency is a package used by our project, which it needs to work properly.
// When we initialize NPM in a project, we can use it to manage the dependencies for that project.
// We initialize NPM by navigating to the project directory, and use the following command:

// * npm init

// This generates a package.json file.
// * This contains metadata about your project (its name, version, description etc.)
// * It also contains a list of the project's dependencies

// ? How do we use dependencies?

// As we will see later, all dependencies in your project are MODULES.
// This means we can IMPORT them to the files in our project where they are needed.
// For example, after installing "express" in our project, we can IMPORT it to where we need some of its functionality:

import express from "express";

// * ... And that's all we need to know for now!
// We will use NPM when starting out with React later in the module...
// But we will use it most in the Backend module!
// However, having looked at NPM already will help you "hit the ground running" later!