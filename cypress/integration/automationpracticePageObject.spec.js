import LoginPage from '../support/pages/LoginPage';
import HomePage from "../support/pages/HomePage";
import {
    LOGIN,
    PASSWORD,
    TITLE_PAGE,
    ADDRESS,
    ORDER_COMPLETENESS,
    CONSENT_DESCRIPTION,
    PRODUCT_NAME
} from "../config/config";
import AccountPage from "../support/pages/AccountPage";
import CategoryPage from "../support/pages/CategoryPage";
import AddressPage from "../support/pages/orderFlow/AddressPage";
import ShippingPage from "../support/pages/orderFlow/ShippingPage";
import PaymentPage from "../support/pages/orderFlow/PaymentPage";
import SummaryPage from "../support/pages/orderFlow/Summary";
import NavigationPage from "../support/pages/orderFlow/NawigationPage";

describe('when user navigate to submit your order', () => {
    let loginPage = new LoginPage();
    let homePage = new HomePage();
    let accountPage = new AccountPage();
    let categoryPage = new CategoryPage();
    let addressPage = new AddressPage();
    let shippingPage = new ShippingPage();
    let paymentPage = new PaymentPage();
    let summaryPage = new SummaryPage();
    let navigationPage = new NavigationPage();

    before(function () {
        homePage.visit();
    });

    it('Should have proper tittle', function () {
        homePage.verifyTitlePage(TITLE_PAGE);
    });

    it('and user is logging in', function() {
        navigationPage.clickButtonSignIn();
        loginPage.signIn(LOGIN, PASSWORD);
        accountPage.verifyIsVisibleButtonSignOut();
    });

    it('and select the product from the list and place the order then the order is confirmed', function () {
        accountPage.clickButtonCategory();
        categoryPage.searchInProduct();
        categoryPage.clickButtonAddCart();
        categoryPage.clickButtonProceedToCheckout();
        summaryPage.verifyTheSelectedProduct(PRODUCT_NAME);
        summaryPage.clickButtonProceedToCheckout();
        loginPage.signIn(LOGIN, PASSWORD);
        addressPage.verifyIsAddressDelivery(ADDRESS);
        addressPage.clickButtonProceedToCheckout();
        shippingPage.verifyTheConsentDescription(CONSENT_DESCRIPTION);
        shippingPage.clickChecboxAgreeToTheTerms();
        shippingPage.clickButtonProceedToCheckout();
        paymentPage.buttonPaymentIsVisible();
        paymentPage.clickButtonPayment();
        paymentPage.clickButtonConfirmOrder();
        paymentPage.verifyOrderCompleteness(ORDER_COMPLETENESS);
        navigationPage.clickButtonSignOut();
    });
});