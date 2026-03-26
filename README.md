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
