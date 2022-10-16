# Tutorial

https://www.youtube.com/watch?v=G8KXFWftCg0

## How it works

This monorepo is installed with `yarn`.

Every folder inside `packages` and `examples` are considered workspace.
From a workspace you can add another workspace as a dependency.
Then you can use it in the code.

## How to create a new workspace

Create a new folder under `packages` or `examples`.  
From there run `yarn init`.

After that you need to remove `node_modules` from root of monorepo and run `yarn install`.  
This step will :
- make all `workspaces` importable in dependencies in other `workspaces`.
- install all dependencies of every `workspace`
