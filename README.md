# EndPointGen VS Code Extension

## Overview

**EndPointGen** is a Visual Studio Code extension developed by **KeshavSoft** focused on **AI-assisted server-side development using Node.js and Express**.  
It helps developers quickly generate endpoints, sub-routes, and API structure directly from the Explorer context menu.

* Version: 1.8.1  
* Engine: VS Code ^1.109.0  
* Module Type: ES Modules  
* Supports untrusted workspaces  

## Features

* Generate Express.js API structure instantly  
* Create endpoints in `app.js` with minimal effort  
* Add modular sub-routes in `routes.js`  
* Inject endpoint logic into `.js` files  
* Context-aware right-click actions in Explorer  
* Modular orchestration-based architecture  

## Commands

| Command                  | Title             | Description                                               |
| ------------------------ | ----------------- | --------------------------------------------------------- |
| extension.initJs         | Initiate Node API | Initializes base Express server structure in a folder     |
| extension.createEndpoint | CreateEndpoint    | Creates a new route entry (GET/POST) in `app.js`          |
| extension.addSubRoute    | AddSubRoute       | Registers and links sub-route modules in `routes.js`      |
| extension.addEndPoint    | AddEndPoint       | Injects endpoint handler logic into selected `.js` file   |

## Context Menu Integration

Commands appear in Explorer based on file context:

* On folders:
  * Initiate Node API → Creates base Express setup

* On `app.js`:
  * CreateEndpoint → Adds route entry

* On `routes.js`:
  * AddSubRoute → Adds router-level structure

* On `.js` files:
  * AddEndPoint → Adds endpoint business logic

## Project Structure

## How to use
* Open your Node.js project in VS Code
* Right-click on a file or folder
* Select a command from the context menu
* Extension will automatically generate or update required files

## What this extension does

Helps you quickly scaffold and organize Node.js + Express server-side endpoints directly from your project files using AI-assisted commands.

* It reduces manual work by automatically:

. Creating Express structure
. Linking routes
. Injecting endpoint logic
. Maintaining clean modular architecture

⭐  Fix App.js (Right Click Command)

Ensures app.js contains required Express configuration and route registrations.

Useful when:

* app.js missing middleware
* routes not connected
* structure broken
* project imported from another source

## How to use
* Right-click on app.js

## Benefits

* Saves development time
* Standardized Express structure
* Reduces manual errors
* Works directly from VS Code right-click menu
* Keeps project modular and scalable

## New Feature – Editor Title Bar Actions (Top Right Buttons)

EndPointGen also provides quick access buttons in the VS Code editor title bar (top-right corner).
These buttons allow you to create and manage endpoints without right-clicking in Explorer.


Available Title Bar Commands
1. Fix (Button)

Ensures app.js contains required Express configuration and route registrations.

Use when:

middleware missing
routes not connected
structure broken
project copied from another repo
app.js needs standard structure

How to use:

Open app.js
Click Fix  button (top right)

2. AddSubRoute

Registers a modular router inside routes.js.

Automatically:

imports router
links router path
keeps modular architecture

How to use:

Open routes.js
Click AddSubRoute button (top right)

3. AddEndPoint

Creates a new Express route entry inside SubRoute

Supports:

GET endpoint
POST endpoint
automatic route registration

How to use:

Open app.js
Click AddEndPoint button (top right)
Endpoint will be added automatically
