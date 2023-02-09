import './RegistrationModal.scss';
import createElement from '../../utils/createElement';
import { ClassMap, Currency } from '../../constants/htmlConstants';
import { Dictionary, DictionaryKeys } from '../../constants/dictionary';
import { LANG, MODE } from '../../types/types';
import showErrorValidationMessage from '../../utils/showErrorValidationMessage';
import removeErrorValidationMessage from '../../utils/removeErrorValidationMessage';
import { alertTimeout, RegularExpressions } from '../../constants/common';
import checkForValidity from '../../utils/checkForValidity';
import { IUserRegister } from '../../types/interfaces';
import UserApi from '../../Api/UserApi';
import AlertMessage from '../../components/AlertMessage/AlertMessege';

class RegistrationModal {
  public element: HTMLElement | null = null;

  private form: HTMLFormElement | null = null;

  private email: HTMLInputElement | null = null;

  private name: HTMLInputElement | null = null;

  private selectCurrency: HTMLSelectElement | null = null;

  private password: HTMLInputElement | null = null;

  private confirmPassword: HTMLInputElement | null = null;

  constructor(private lang: LANG, private modeValue: MODE) {
    this.init();
    this.fill();
    this.addListeners();
  }

  private init(): void {
    this.form = createElement({ tag: 'form', classList: [ClassMap.registration.form, ClassMap.mode[this.modeValue].modal] }) as HTMLFormElement;

    this.element = createElement({
      tag: 'div',
      classList: [ClassMap.registration.wrapper],
    });

    this.email = createElement({
      tag: 'input',
      classList: [ClassMap.registration.inputEmail],
    }) as HTMLInputElement;
    this.email.type = 'text';

    this.name = createElement({
      tag: 'input',
      classList: [ClassMap.registration.inputName],
    }) as HTMLInputElement;
    this.name.type = 'text';

    this.selectCurrency = createElement({
      tag: 'select',
      classList: [ClassMap.registration.selectCurrency],
    }) as HTMLSelectElement;

    this.password = createElement({
      tag: 'input',
      classList: [ClassMap.registration.inputPassword],
    }) as HTMLInputElement;
    this.password.type = 'password';

    this.confirmPassword = createElement({
      tag: 'input',
      classList: [ClassMap.registration.inputConfirmPassword],
    }) as HTMLInputElement;
    this.confirmPassword.type = 'password';
  }

  public fill() {
    const formTitle = createElement({
      tag: 'legend',
      classList: [ClassMap.registration.formTitle, ClassMap.mode[this.modeValue].modalTitle],
      key: DictionaryKeys.registrationTitle,
      content: Dictionary[this.lang].registrationTitle,
    });

    const inputContainerEmail = createElement({
      tag: 'div',
      classList: [ClassMap.registration.formItem, ClassMap.parentInput],
    });

    const inputEmailLable = createElement({
      tag: 'span',
      key: DictionaryKeys.labelEmail,
      content: Dictionary[this.lang].labelEmail,
    });

    inputContainerEmail.append(
      inputEmailLable,
      this.email as HTMLInputElement,
    );

    const inputContainerName = createElement({
      tag: 'div',
      classList: [ClassMap.registration.formItem, ClassMap.parentInput],
    });

    const inputNameLable = createElement({
      tag: 'span',
      key: DictionaryKeys.labelName,
      content: Dictionary[this.lang].labelName,
    });

    inputContainerName.append(inputNameLable, this.name as HTMLInputElement);

    const selectContainerCurrency = createElement({
      tag: 'div',
      classList: [ClassMap.registration.formItem, ClassMap.parentInput],
    });

    const selectCurrencyLable = createElement({
      tag: 'span',
      key: DictionaryKeys.labelCurrencySelection,
      content: Dictionary[this.lang].labelCurrencySelection,
    });

    selectContainerCurrency.append(selectCurrencyLable, this.selectCurrency as HTMLSelectElement);

    Currency.forEach((currency) => (this.selectCurrency as HTMLSelectElement).append(this.createOptionCurrency(currency)));

    const inputContainerPassword = createElement({
      tag: 'div',
      classList: [ClassMap.registration.formItem, ClassMap.parentInput],
    });

    const inputPasswordLable = createElement({
      tag: 'span',
      key: DictionaryKeys.labelPassword,
      content: Dictionary[this.lang].labelPassword,
    });

    const wrapperPassword = createElement({
      tag: 'div',
      classList: [ClassMap.wrapperPassword],
    });

    const hidingPassword = createElement({
      tag: 'div',
      classList: [ClassMap.passwordIcon],
    });

    wrapperPassword.append(this.password as HTMLInputElement, hidingPassword);
    inputContainerPassword.append(inputPasswordLable, wrapperPassword);

    const inputContainerConfirmPassword = createElement({
      tag: 'div',
      classList: [ClassMap.registration.formItem, ClassMap.parentInput],
    });

    const inputConfirmPasswordLable = createElement({
      tag: 'span',
      key: DictionaryKeys.labelConfirmPassword,
      content: Dictionary[this.lang].labelConfirmPassword,
    });

    const wrapperConfirmPassword = createElement({
      tag: 'div',
      classList: [ClassMap.wrapperPassword],
    });

    const hidingConfirmPassword = createElement({
      tag: 'div',
      classList: [ClassMap.passwordIcon],
    });

    wrapperConfirmPassword.append(this.confirmPassword as HTMLInputElement, hidingConfirmPassword);
    inputContainerConfirmPassword.append(inputConfirmPasswordLable, wrapperConfirmPassword);

    const submit = createElement({
      tag: 'button',
      classList: [ClassMap.registration.submit],
      key: DictionaryKeys.signUpButton,
      content: Dictionary[this.lang].signUpButton,
    }) as HTMLButtonElement;

    const closeButton = createElement({
      tag: 'div',
      classList: [ClassMap.closeModalButton],
    });
    const firstLine = createElement({
      tag: 'span',
      classList: [ClassMap.closeLine, ClassMap.mode[this.modeValue].background],
    });
    const secondLine = createElement({
      tag: 'span',
      classList: [ClassMap.closeLine, ClassMap.mode[this.modeValue].background],
    });
    closeButton.append(firstLine, secondLine);

    this.form?.append(
      formTitle,
      inputContainerEmail,
      inputContainerName,
      selectContainerCurrency,
      inputContainerPassword,
      inputContainerConfirmPassword,
      submit,
      closeButton,
    );

    this.element?.append(this.form as HTMLFormElement);
  }

  private createOptionCurrency(currency: string): HTMLOptionElement {
    const optionCurrency = createElement({
      tag: 'option',
      content: currency,
    }) as HTMLOptionElement;
    optionCurrency.value = currency;
    return optionCurrency;
  }

  private addListeners(): void {
    this.element?.addEventListener('click', (event) => {
      const targetElement = event.target as HTMLElement;

      if (
        targetElement.classList.contains(ClassMap.registration.wrapper)
        || targetElement.classList.contains(ClassMap.closeModalButton)
        || targetElement.classList.contains(ClassMap.closeLine)
      ) {
        this.element?.remove();
      }
    });

    this.form?.addEventListener('click', (event) => {
      const targetElement = event.target as HTMLElement;

      if (targetElement.classList.contains(ClassMap.passwordIcon)) {
        const icon = targetElement;
        icon.classList.toggle(ClassMap.showPassword);
        const parent = icon.closest(`.${ClassMap.wrapperPassword}`);
        const input = parent?.getElementsByTagName('input')[0] as HTMLInputElement;
        input.type = icon.classList.contains(ClassMap.showPassword) ? 'text' : 'password';
      }

      if (targetElement.classList.contains(ClassMap.registration.submit)) {
        event.preventDefault();
        const errors = [...document.querySelectorAll(`.${ClassMap.errorValidation}`)];
        errors.forEach((error) => error.remove());
        const isValid = this.validation();

        if (isValid) {
          const userRegistr: IUserRegister = {
            username: (this.name as HTMLInputElement).value,
            email: (this.email as HTMLInputElement).value,
            password: (this.password as HTMLInputElement).value,
            currency: (this.selectCurrency as HTMLSelectElement).value,
          };

          this.handleRegistrationResponse(userRegistr);

          this.element?.remove();
        }
      }
    });
  }

  private validation(): boolean {
    const email = this.email as HTMLInputElement;
    const name = this.name as HTMLInputElement;
    const password = this.password as HTMLInputElement;
    const confirmPassword = this.confirmPassword as HTMLInputElement;

    const emailIsValid = checkForValidity({
      element: email,
      regularExpression: RegularExpressions.Email,
      errorMessage: Dictionary[this.lang].errorMessageEmail,
    });

    const nameIsValid = checkForValidity({
      element: name,
      regularExpression: RegularExpressions.Name,
      errorMessage: Dictionary[this.lang].errorMessageName,
    });

    const passwordIsValid = checkForValidity({
      element: password,
      regularExpression: RegularExpressions.Password,
      errorMessage: Dictionary[this.lang].errorMessagePassword,
    });

    let passwordMatch = false;

    if (password.value !== confirmPassword.value) {
      showErrorValidationMessage(confirmPassword, Dictionary[this.lang].errorMessageConfirmPassword);
    } else {
      removeErrorValidationMessage(confirmPassword);
      passwordMatch = true;
    }

    if (
      emailIsValid
      && passwordIsValid
      && nameIsValid
      && passwordMatch
    ) {
      return true;
    }
    return false;
  }

  private async handleRegistrationResponse(userRegistr: IUserRegister) {
    const response = await UserApi.registrationUser(userRegistr);

    const alert = new AlertMessage(response.message, response.status);
    alert.render();
    setTimeout(() => alert.remove(), alertTimeout);
  }
}

export default RegistrationModal;
