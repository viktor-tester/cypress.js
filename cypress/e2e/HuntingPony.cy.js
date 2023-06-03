
describe('Создание заказа на Hunting Pony', function () {
    it('Позитивный кейс добавления товара в корзину', function () {

        cy.intercept("POST", "https://api.carrotquest.app/users/$self_user/events").as("events");
        cy.intercept("POST", "https://api.carrottrack.app/users/$self_user/props").as("events");
        cy.visit('https://huntingpony.com/product/sumka-perenoska-poni');
        cy.get('.add-cart-counter__btn').click();
        cy.wait(1000);
        cy.get('[data-add-cart-counter-plus]').click();
        cy.wait(1000);
        cy.get('.add-cart-counter__detail-dop-text').click();
        cy.get('button[data-cart-submit]').click();
        cy.get('input[name="client[surname]"]').type('Витька');
        cy.get('input[name="client[contact_name]"]').type('Титька');
        cy.get('input[name="client[phone]"]').type('+79001112233');
        cy.get('input[name="client[email]"]').type('extample@mail.ru');
        cy.get('input[name="shipping_address[full_locality_name]"]').clear().type('г. Москва');
        cy.get('input[name="shipping_address[street]"]').type('ул. Пушкино');
        cy.get('input[name="shipping_address[house]"]').type('20');
        cy.get('input[name="shipping_address[flat]"]').type('123');
        cy.get('.co-input--textarea').type('Простите за заказ, тестирую ваш сайт, пишу автотесты, если вам нужен тестировщик обращайтесь))). Алена, спасибо, что возвращаешь дз, в итоге мне парень показал как все это работает и я заново все переделал.');
        cy.get('select[name="order[fields_values_attributes][24333444][value]"]').select('Мальчик');
        cy.get('input[name="order[fields_values_attributes][24333471][value]"]').type('Британец');
        cy.get('.co-input--date').type('01.10.2022');
        cy.wait("@events"); 
        cy.contains('Оформление заказа');
      })
})
