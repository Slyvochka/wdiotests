import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('hifif12466@gridmire.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('Submit button is disabled when email and password fields are empty', () => {
        LoginPage.isDisabled();
    })

    it('An error message "Auth failed" appears, when user does not have an account', function () {
        LoginPage.setLogin('test@test.com')
        LoginPage.setPassword('12345');
        LoginPage.clickSubmitButton()
        LoginPage.errorToastAppeared();
    });

    //  it('submit button is disabled when email and password are empty ', () => {
    //     LoginPage.open();
    //     browser.pause(1000)
    //     //LoginPage.emailIsNotAValid();
    //     //LoginPage.dataFromInputFieldDeleted();
    // });

});


