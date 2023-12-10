<h1>MERN Stack CRUD Application</h1>

Cadastro: A basic MERN CRUD Full Stack Application using MongoDB and VITE

---------------------------------------------------------------------------------------------------------

STATUS: 
<h3 align="center">  
	 STATUS: 🔔  React VITE 🚀  App:   Finished ...  🎯 
</h3>

                      ==========================================

![Screen1&2](https://github.com/Almir-git-unifc/mern_crud-app_vite_peoples_mongo/blob/master/scr12.png)

![Screen3&4](https://github.com/Almir-git-unifc/mern_crud-app_vite_peoples_mongo/blob/master/scr34.png)


--------------------------------------------------------------------------------------

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents
- [Intro](#Intro)
- [Feature](#Feature)
- [Technologies](#Technologies)
- [How To Use](#How-To-Use)
- [Author](#Author)
- [License](#License)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Intro <a name = "Intro"></a>


This project was developed:
- used MongoDB Atlas
- implemented confirmation feature on the Delete button 
- added clearly demarcated Exits cancel buttons, on the 'Add User' and 'Update User' screens, to return to the homepage.

These were the differences, in relation to the original project, previously developed with MongoDB Compass Community by 'Code With Yousaf', found on Youtube with the title """MERN Stack CRUD Operations | Full Stack CRUD Operations | React, Node, Express & MongoDB"""



# Feature <a name = "Feature"></a>
- CRUD
- persistence in MongoDB



&nbsp;
# Technologies <a name = "Technologies"></a>
In youtube's video this project was developed with MongoDB Comunnity local, however, in my devepoment 
-used React, Express, Node.js, MongoDB,Bootstrap, 

### Built With 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

 
&nbsp;

## Requirements
#### You need a account in MongoDB Atlas
#### You can Try Free account in this url: https://www.mongodb.com/atlas/database
#### And you need Create a Database named crud and a Collection named users


# How-To-Use <a name = "How-To-Use"></a>

To clone and run this application, you'll need Git, Node.js v16.15 or higher + npm (used version 8.19.2) installed on your computer from your command line:

```
&nbsp;
## Clone this repository
### $ `git clone https://github.com/Almir-git-unifc/mern_crud-app_vite_peoples_mongo.git`


&nbsp;
## Install project vite
### $ `npm create vite@latest`

&nbsp;
## choose name project, framework and variant
### $ `choose  (your project named)   vite-project `
### $ `(framework)       React`
### $ `(variant)         JavaScript`
```

### $ `Copy content project, was download of this Github repository, inside folder vite-project created before`

### $ `install the dependencies of this front-end`
npm install bootstrap axios react-router-dom

#### And you will need to update the index.js file in the server folder with the data from your connectionString in yourConnectionString variabel and tpour password in yourPassw variable.

&nbsp;
## Run locally the app
### $ `cd folder-name-project (vite-project)`
### $ `npm install`

## Access client folder 
### $ `cd client`

## install vite in client folder
### $ `npm run dev`
#### $ `use the Local link provided by VITE to access the server`

## open server folder
### $ `cd server`

### $ `install the dependencies of this server`
npm install express   mongoose    cors    nodemon body-parser


update the main and script items of the package.json file in the server folder; this way:
  "main": "index.js",
  "scripts": {
	"start": "nodemon index.js",
	"test": "echo \"Error: no specified\" && exit 1",
  },




## MongoDB Account: 
### If you don't already have a MongoDB Atlas account
 #### 1) Create an account on MongoDB Atlas, at:
 ##### https://account.mongodb.com/account/login

 #### Or access MongoDB Atlas with your Github or Google account

 #### 2) In MongoDB Atlas, create a DataBase with the desired name, and within it create a Collection with the name CRUD, or whatever name you prefer



### Once you have a MongoDB Atlas account; access the index.js file from the server folder, and...
 #### 3.1) replace the term your-password in the variable yourPassw, with your MongoDB Atlas password
 #### 3.2) and replace the @cluster...majority term in yourConnectionString variable with your MongoDB Atlas connection string

### save these changes



## run the server
### $ `npm start`


#### Verify id Users.jsx file contain a correct port in useEffect, in line: axios.get( ), in CreateUser.jsx file in line axios.post


<h5>
 Enjoyed and if this is useful to you, give me a star 🌟
</h5>



&nbsp;
# Author <a name = "Author"></a>

👤 **Almir**

- Github: [@Almir-git-hub](https://github.com/Almir-git-unifc)

