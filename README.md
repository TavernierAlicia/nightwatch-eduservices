# Nightwatch-eduservices


## About
* Nightwatch-eduservices is a testing exercice for the website https://mycampus.eduservices.org written in javascript with node framework Nightwatch
* It test basic, user settings, login-logout and faq page functions

## Prerequisites
* You need to have node v14.15.1 or newer to to ensure the proper functioning of this app
* You need a Eduservices student account https://mycampus.eduservices.org

## Installation
* To install Nightwatch eduservices, you need to clone this repository with the following command:
```git clone https://github.com/TavernierAlicia/nightwatch-eduservices.git```

* Then install node packages:
```npm install```


## Running Nightwatch-eduservices
### To run this application, you have two options:
:warning: **If you launch the "profile" module, your password will be changed**: The "profile" module contains a password change test

* Run all kind of test:
```USER_ID="myeduusername" USER_PWD="myedupassword" USER_NEW_PWD="mynewedupassword" npm run test```

* Run only one kind of test:
```USER_ID="myeduusername" USER_PWD="myedupassword" USER_NEW_PWD="mynewedupassword" npm run test --tag mymodule```

:warning: **USER_NEW_PASSWORD is optionnal on theses modules:**
- general
- faq
- login-out

:warning: **But required with:**
- profile

