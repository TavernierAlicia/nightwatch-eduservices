
// To start this test module properly, launch it with the following command: USER_ID="myusername" USER_PWD="mypassword" npm run test
let id = process.env.USER_ID
let pwd = process.env.USER_PWD
let newpwd = process.env.USER_NEW_PWD

module.exports = {

  // connexion with good ids
  'ConnectGood': function (browser) {
    browser
      .url('https://login.microsoftonline.com/8a2f18a9-8f0e-4f76-a585-9b07b3a38dea/oauth2/v2.0/authorize?client_id=da0e7c5e-cbca-4237-9b85-5981904e95cf&scope=openid%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fappusage.ReadWrite%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fenquetes.ReadWrite%20profile&redirect_uri=https%3A%2F%2Fmycampus.eduservices.org&client-request-id=ca9cea14-9ee8-4c24-bb01-78dbae0e10cb&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.1.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=0be4FJedZHbo5Qhonu3H40550qxf0I6h2HWrYMjfD8U&code_challenge_method=S256&nonce=03a099d1-7016-4441-af34-750c77718b2b&state=eyJpZCI6IjQzNTJjODM5LWUyZjMtNGMyMi1hMzdlLWM0MDZkMzE1NjYyZiIsInRzIjoxNjQzNzEwMTAzLCJtZXRhIjp7ImludGVyYWN0aW9uVHlwZSI6InJlZGlyZWN0In19')

      .pause(1000)
      .pause(1000)

      // insert username
      .waitForElementVisible('[name=loginfmt]')
      .setValue('[name=loginfmt]', id)
      
      // click on "next"
      .click('[id=idSIButton9]')
      .pause(1000)


      // insert password
      .waitForElementVisible('[name=passwd]')
      .setValue('[name=passwd]', pwd)
      .click('[id=idSIButton9]')
      .pause(1000)

      // stay signed
      .waitForElementVisible('[id=idSIButton9]')
      .click('[id=idSIButton9]')


      // verify page content
      .waitForElementVisible('body')
      .pause(1000)
      .assert.containsText('[class=h2]', 'OUTILS')
      .end()
  },


  // connexion with bad mail 
  'ConnectBadMail': function (browser) {
    browser
      .url('https://login.microsoftonline.com/8a2f18a9-8f0e-4f76-a585-9b07b3a38dea/oauth2/v2.0/authorize?client_id=da0e7c5e-cbca-4237-9b85-5981904e95cf&scope=openid%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fappusage.ReadWrite%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fenquetes.ReadWrite%20profile&redirect_uri=https%3A%2F%2Fmycampus.eduservices.org&client-request-id=ca9cea14-9ee8-4c24-bb01-78dbae0e10cb&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.1.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=0be4FJedZHbo5Qhonu3H40550qxf0I6h2HWrYMjfD8U&code_challenge_method=S256&nonce=03a099d1-7016-4441-af34-750c77718b2b&state=eyJpZCI6IjQzNTJjODM5LWUyZjMtNGMyMi1hMzdlLWM0MDZkMzE1NjYyZiIsInRzIjoxNjQzNzEwMTAzLCJtZXRhIjp7ImludGVyYWN0aW9uVHlwZSI6InJlZGlyZWN0In19')
      

      .pause(1000)
      .pause(1000)

      // insert username
      .waitForElementVisible('[name=loginfmt]')
      .setValue('[name=loginfmt]', 'kevin.tunning@my-digital-school.org')
      
      // click on "next"
      .click('[id=idSIButton9]')
      .pause(1000)

      // verify error message
      .assert.containsText('[id=usernameError]', 'incorrect')
      .end()
  },

  // connexion with bad password
  'ConnectBadPWD': function (browser) {
    browser
      .url('https://login.microsoftonline.com/8a2f18a9-8f0e-4f76-a585-9b07b3a38dea/oauth2/v2.0/authorize?client_id=da0e7c5e-cbca-4237-9b85-5981904e95cf&scope=openid%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fappusage.ReadWrite%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fenquetes.ReadWrite%20profile&redirect_uri=https%3A%2F%2Fmycampus.eduservices.org&client-request-id=ca9cea14-9ee8-4c24-bb01-78dbae0e10cb&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.1.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=0be4FJedZHbo5Qhonu3H40550qxf0I6h2HWrYMjfD8U&code_challenge_method=S256&nonce=03a099d1-7016-4441-af34-750c77718b2b&state=eyJpZCI6IjQzNTJjODM5LWUyZjMtNGMyMi1hMzdlLWM0MDZkMzE1NjYyZiIsInRzIjoxNjQzNzEwMTAzLCJtZXRhIjp7ImludGVyYWN0aW9uVHlwZSI6InJlZGlyZWN0In19')
      
      .pause(1000)
      .pause(1000)

      // insert username
      .waitForElementVisible('[name=loginfmt]')
      .setValue('[name=loginfmt]', id)
      
      // click on "next"
      .click('[id=idSIButton9]')
      .pause(1000)


      // insert password
      .waitForElementVisible('[name=passwd]')
      .setValue('[name=passwd]', 'VROOM')
      .click('[id=idSIButton9]')
      .pause(1000)


      .assert.containsText('[id=passwordError]', 'incorrect')
      .end()
  },


  // Deconnexion
  'Disconnect': function (browser) {


    //////////// connect process ////////////
    browser
      .url('https://login.microsoftonline.com/8a2f18a9-8f0e-4f76-a585-9b07b3a38dea/oauth2/v2.0/authorize?client_id=da0e7c5e-cbca-4237-9b85-5981904e95cf&scope=openid%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fappusage.ReadWrite%20api%3A%2F%2F88cda769-8fb4-4582-9f63-93d72896d7bb%2Fenquetes.ReadWrite%20profile&redirect_uri=https%3A%2F%2Fmycampus.eduservices.org&client-request-id=ca9cea14-9ee8-4c24-bb01-78dbae0e10cb&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.1.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=0be4FJedZHbo5Qhonu3H40550qxf0I6h2HWrYMjfD8U&code_challenge_method=S256&nonce=03a099d1-7016-4441-af34-750c77718b2b&state=eyJpZCI6IjQzNTJjODM5LWUyZjMtNGMyMi1hMzdlLWM0MDZkMzE1NjYyZiIsInRzIjoxNjQzNzEwMTAzLCJtZXRhIjp7ImludGVyYWN0aW9uVHlwZSI6InJlZGlyZWN0In19')

      .pause(1000)
      .pause(1000)

      // insert username
      .waitForElementVisible('[name=loginfmt]')
      .setValue('[name=loginfmt]', id)
      
      // click on "next"
      .click('[id=idSIButton9]')
      .pause(1000)


      // insert password
      .waitForElementVisible('[name=passwd]')
      .setValue('[name=passwd]', pwd)
      .click('[id=idSIButton9]')
      .pause(1000)

      // stay signed
      .waitForElementVisible('[id=idSIButton9]')
      .click('[id=idSIButton9]')

      

      // verify page content
      .pause(2500)
      .waitForElementVisible('body')

      .assert.elementPresent('.btn-header-login')

      //////////////////////////////////////////

      // click on disconnect button
      .click('.btn-header-login')
      .pause(1000)


      // confirm
      .waitForElementVisible('[class=confirm]')
      .click('[class=confirm]')


      // verify page content
      .pause(2000)
      .assert.containsText('[role=heading]', 'Pick an account')
      
      .end()
  },

}