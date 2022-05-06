### NodeJS Express Prisma
Demo NodeJS application with Prisma, Prisma client

### Steps for basic express server setup
* STEP 1: First we will setup express draft server to setup a skeleton for CRUD API. The folder needs to be a blank folder with no files/folders in it. In addition to that, express-draft need to be installed globally. express-draft [https://www.npmjs.com/package/express-draft]
* STEP 2: Scaffold the express API application in the current folder 
* STEP 3: Run the application in dev mode. Go to localhost:3000 to see if the application works in local browser.

```
STEP 1:
$ npm i -S express-draft
STEP 2:
$ exp .
STEP 3:
$ npm run dev

```

### Prisma and client setup
* Install the dev dependency prisma
* Install prisma client to make queries to the database
* Initialize the primsa project in the current project to create schema intuitively. This will create a folder "prisma" and .env file. Inside the prisma folder, you will see schema.prisma which has connection setting and the call the prisma-client generator function.
* If you are working in visual code, install the Prisma extension for syntax highlighting, code completion. You may also need the REST Client plugin to test the API's
* When you are establishing relationship between tables, you may need to run prisma format
* Since Prisma is installed as a dev dependency, we can install prisma studio using npx (port 5555)
  
```
$ npm i -D prisma
$ npm i @prisma/client 
$ npx prisma init
$ npx prisma format
$ npx prisma studio
```

END

