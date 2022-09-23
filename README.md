# Auth Service Express Typescript

To Run the application

* Copy .example.env to .env
* Install Express by running "npm install"
* Create table by creating sequelize command in any route file 
  example user.sync({force:true}) for first time after changing any field in model
  then user.sync({alter:true})
* Run using npm run dev
* To build Run npm run build