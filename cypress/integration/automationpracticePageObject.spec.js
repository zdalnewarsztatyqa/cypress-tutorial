import LoginPage from '../support/pages/LoginPage';
import HomePage from "../support/pages/HomePage";
import {
    LOGIN,
    PASSWORD,
    TITLE_PAGE
} from "../config/config";
import AccountPage from "../support/pages/AccountPage";

describe('when user navigate to login page', () => {
    let loginPage = new LoginPage();
    let homePage = new HomePage();
    let accountPage = new AccountPage();

    beforeEach(function () {
        homePage.visit();
        homePage.verifyTitlePage(TITLE_PAGE);
        homePage.clickButtonSignIn();
    });

    it('then login page is displayed and title of the login page is contains "bot-realm"', function () {
        loginPage.inputLogin(LOGIN);
        loginPage.inputPassword(PASSWORD);
        loginPage.clickButtonSignIn();
        accountPage.verifyIsVisibleButtonSignOut();
    });
});