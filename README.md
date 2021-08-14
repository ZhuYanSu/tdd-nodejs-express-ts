# tdd-nodejs-express-ts

## 目的

使用 TypeScript + nodejs + express + Mocha 體驗 TDD 開發流程

> 參考 [TDD With TypeScript, Express, NodeJS, and Mocha Unit Tests | Ultimate Full-Stack JavaScript Setup
> ](https://www.youtube.com/watch?v=QVxxgEyZt9Y)

## Steps

1. Install packages
   `npm i express dotenv`

1. Install devDependencies

    `npm i -D mocha chai tsconfig-paths nodemon supertest typescript cross-env`

1. Install types

    `npm i -D @types/mocha @types/chai @types/node @types/supertest @types/express`

1. Add scripts to `package.json`

    - build: `tsc -p .`
    - dev: `NODE_ENV=dev nodemon -r tsconfig-paths src/app.ts`

1. Init typescript project

    Run `./node_modules/typescript/bin/tsc --init` to generate `tsconfig.json`

1. Modify some settings in `tsconfig.json`

    - outDir: output directory
    - rootDir: source directory
    - strict: set to **true** to ensure strictly typed
    - moduleResolution: set to `node`
    - baseUrl: give us absolute import power

1. Add script for testing in `package.json`
   `NODE_ENV=test mocha --check-leaks -r tsconfig-paths/register -r ts-node/register \"test/**/*.spec.ts\"`
1. Start writing test and code
    - **Cycle**:
        1. write test
        1. fail test
        1. write just enough code to pass test
        1. cycle through 1~3 until app is finished

## Other Notes

-   express 路由可用一個檔案(e.g., `routes/index.ts`)來集結所有 routes, 如此可讓 server 只依賴於 `routes/index.ts`
    -   例如:
        `server.ts` -use-> `routes/index.ts` (集結所以 routes) -merge-> `routes/**/*.ts` (個別 route)
