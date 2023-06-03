
describe('Тестирование логина и пароля', function () {
    it('Проверка успещной авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })


     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('hristoforov.vv@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
     }) 
     

     it('Проверка авторизации с правильным логином и неправильным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqa');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })
     
     
     it('Проверка авторизации с неправильным логином и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnik.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
     }) 
     

     it('Проверка авторизации с логином без @ и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnik.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
     })


     it('Проверка на привидение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })


 })
 