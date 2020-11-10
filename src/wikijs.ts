

import { BobRpa, LoginData } from './base';
require('./wikijs.css');

class wikijsRpa extends BobRpa {

    loginSelector(): string {
        return '.login';
    }

    logoutAction() {
        this.deleteCookie('jwt');
        window.location.href = "/login";
    }

    getSubmitButton(): HTMLButtonElement | null {
        const formElem: HTMLElement | null = this.getForm();
        if (formElem) {
            return formElem.querySelector('button.v-btn');
        }
        return null;
    }

    loginAction(data: LoginData): Promise<undefined> {
        const loginInput = this.getFormInputElem('text');
        const pwdInput = this.getFormInputElem('password');
        const buttonConnect = this.getSubmitButton();
        if (buttonConnect && loginInput && pwdInput) {
            if (this.DEBUG) {
                console.log('[Bob-rpa] Child: login detected');
            }
            this.setNativeValue(loginInput, data.login);
            this.setNativeValue(pwdInput, data.pwd);
            if (this.DEBUG) {
                console.log('[Bob-rpa] Child: login filled');
            }
            return this.validateLogin(buttonConnect);
        }
        console.error('[Bob-rpa] Child: fail to get, buttonConnect, loginInput or pwdInput', buttonConnect, loginInput, pwdInput);
        return Promise.reject();
    }
}
export const toucanRpa = new wikijsRpa();