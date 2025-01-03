describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал ввойти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio5'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажал ввойти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
 })
    it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
    cy.get('#mail').type('german@dolniko.ru'); // ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажал ввойти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})
    it('Проверка, что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
    cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажал ввойти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})
    it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
    cy.get('#forgotEmailButton').click(); // нажал Забыли пароль?
    cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту для восстановления
    cy.get('#restoreEmailButton').click(); // нажали отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяюна совпадение текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})
    it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажал ввойти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст (баг)
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})
})