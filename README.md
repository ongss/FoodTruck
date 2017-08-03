# ChulaFoodTruck
Welcome to ChulaFoodTruck project. This markdown file will show you requirements, installation and file structure of the project.

## Requirements
To run this website on your computer, you need some programs installed on your computer

- Git
- NodeJS
- MySQL

## Installation
There are 5 steps to start the server. Git and NodeJS need to be installed to do the following steps.
1. Install and set up MySQL
2. Set up server
3. Import database

### Installing and setting up MySQL
**Windows**
1. Download MySQL Community Server from
https://dev.mysql.com/downloads/installer/
2. Install MySQL using Setup Type **Server only**
3. Configure Type to **Standalone MySQL Server**
4. Set root password to `password`
5. After installation completed, open **MySQL Command Line Client** and enter password `password`
6. Create database for the website using the query
`CREATE DATABASE cufoodtruck;`
7. Exit MySQL Command Line Client

**Mac OS X**
1. Download and install MySQL Community Server from
https://dev.mysql.com/downloads/mysql/
2. Make sure you have jotted down the temporary password given after installation
3. Start MySQL server from the System Preferences
4. Open MySQL terminal with the command
`$ /usr/local/mysql/bin/mysql -h localhost -u root -p`
5. Type the temporary MySQL password end press <kbd>Enter</kbd>
6. Change MySQL password to `password` using the query
`ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';`
7. Create database for the website using the query
`CREATE DATABASE cufoodtruck;`
8. Exit MySQL terminal using the query
`exit;`

> **Note:** If you have Appserv or Xampp with MySQL installed on your computer, you don't have to do this step.

> **Note:** Setting the password to `password` is to prevent conflict in the `config.js` file.

### Setting up server
1. Clone git repository to your computer using
`$ git clone <repository>`
2. Change directory using
`$ cd <directory>`
3. Install required modules for the project using
`$ npm install`

### Importing database
There is **databases/** directory inside your project. Copy all *.sql files to the following folder.

**Windows**: C:\Program Files\MySQL\MySQL Server 5.7\bin\
**Mac OS X**: /usr/local/mysql/bin/

Open command prompt or terminal at that location and type this command for all files.
`mysql -u root -p rubnongkaomai < <filename.sql>`
**For example**: `mysql -u root -p cufoodtruck < tables.sql`

## Running the server
1. Open terminal or command prompt in the directory of the project
2. Type the command
`$ npm start`
3. If everything goes correctly, you will see the server runs at http://localhost:3000/

Running on Unix server
----------
Run process using `tmux` will help you to exit the remote session
1. Connect to Unix server using the command
`ssh <user>@<host>`
2. Type `tmux`, this will let you enter the new screen
3. Type `npm start` to start the server
4. Type <kbd>Ctrl</kbd>+<kbd>B</kbd> and then <kbd>D</kbd> to exit screen session
5. To exit remote session type `exit`

To stop process after exit remote session
1. Connect to remote session
2. Type `tmux attach` to bring back the screen which run server
3. Type <kbd>Ctrl</kbd>+<kbd>C</kbd> to terminate process

## File structures
### Folders
`/databases/` - Contains MySQL table structure

`/public/` - Contains files and folders which can be shown without routing system

`/routes/` - Split routes into groups according to `/router.js` file

`/views/` - Store EJS view files

### Files
`/app.js` - Main Javascript file

`/config.js` - Store easy-to-edit data such as MySQL connection

`/package.json` - Store npm modules

`/router.js` - Split routes, routes can be stored in `/routes/` folder
