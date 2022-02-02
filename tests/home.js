let id = process.env.USER_ID
let pwd = process.env.USER_PWD

module.exports = {
  tags:['general'],

  'Search': function (browser) {

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

      .pause(1000)

      // fill field with tool name
      .waitForElementVisible('[placeholder=Recherche]')
      .setValue('[placeholder=Recherche]', 'office')

      .pause(5000)


      .assert.elementPresent('[src="https://secure.aadcdn.microsoftonline-p.com/c1c6b6c8-qhasdpw2-tyq-vrtyhxcip2vhdsmlzgigbo3yh1j1qe/appbranding/rdy82djonmccqgta1yii-0wdqj-xxojib4s-quhnkmy/1033/bannerlogo?ts=637003628120591303"]')

      

      .end()
  },


  'ReturnIndex': function (browser) {

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

      .assert.elementPresent('a[aria-controls="#collapse-question-30"] > span')

      //////////////////////////////////////////

      .pause(1000)
      .click('a[aria-controls="#collapse-question-30"] > span')

      .pause(3000)
      
      .waitForElementVisible('.desc-accordion-aside')

      .assert.elementPresent('.desc-accordion-aside')
      
      
      .assert.elementPresent('h1[class=h1] > a[href="/"] > [id="mydigitaluniversity"]')

      .click('h1[class=h1] > a[href="/"] > [id="mydigitaluniversity"]')

      .pause(5000)

      .waitForElementVisible('body')

      .assert.containsText('h2[class=h2]', 'OUTILS')

      .end()
  },


  'Messages': function (browser) {

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

      .assert.elementPresent('.mt-5 > a[href="https://outlook.office.com/owa"] > span')


      //////////////////////////////////////////

      .pause(1000)
      .click('.mt-5 > a[href="https://outlook.office.com/owa"] > span')

      .pause(7000)

      .waitForElementVisible('body')
      .assert.elementPresent('body')

      .end()
  },



  'UseHyperplanning': function (browser) {

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

      .assert.elementPresent('img[src="https://secure.aadcdn.microsoftonline-p.com/c1c6b6c8-qhasdpw2-tyq-vrtyhxcip2vhdsmlzgigbo3yh1j1qe/appbranding/x0-z-4ij6wf9rghkhlg6qjhvrrhgojgf-t-dekof-w/1033/bannerlogo?ts=636721826285708206"]')

      //////////////////////////////////////////

      .pause(1000)
      .click('img[src="https://secure.aadcdn.microsoftonline-p.com/c1c6b6c8-qhasdpw2-tyq-vrtyhxcip2vhdsmlzgigbo3yh1j1qe/appbranding/x0-z-4ij6wf9rghkhlg6qjhvrrhgojgf-t-dekof-w/1033/bannerlogo?ts=636721826285708206"]')

      .pause(10000)

      .waitForElementVisible('body')
      .assert.elementPresent('body')

      .end()
  },
}
