import { Route } from '../types/enums';
import AppState from './appState';
import { Dictionary, DictionaryKeys } from './dictionary';
import { SvgMap } from './svgMap';

export const ClassMap = {
  transitionButoon: 'transition-button',
  transitionLink: 'transition-link',
  alertMessage: {
    wrapper: 'alert-wrapper',
    error: 'alert-wrapper_error',
    success: 'alert-wrapper_success',
  },
  authorization: {
    section: 'authorization',
    wrapper: 'authorization__wrapper',
    imgContainer: 'authorization__greeting-images',
    title: 'authorization__header',
    greeting: 'authorization__greeting',
    slider: 'authorization__slider',
    slide: 'authorization__slider__slide',
    form: 'authorization__form',
    formItem: 'authorization__form__input',
    inputEmail: 'authorization__form__email',
    inputPassword: 'authorization__form__password',
    registration: 'authorization__form__registration',
    registrationText: 'authorization__form__registration__text',
    registrationLink: 'authorization__form__registration__link',
    signInButton: 'authorization__form_submit',
    main: 'main__authorization',
  },
  registration: {
    wrapper: 'registration-wrapper',
    form: 'registration-form',
    formTitle: 'registration-form__title',
    formItem: 'registration-form__input',
    inputEmail: 'registration-form__email',
    inputName: 'registration-form__name',
    inputPassword: 'registration__form__password',
    selectCurrency: 'registration-form__currency',
    inputConfirmPassword: 'registration__form__confirm-password',
    submit: 'registration-form_submit',
  },
  support: {
    wrapper: 'support-wrapper',
    form: 'support-form',
    formTitle: 'support-form__title',
    formItem: 'support-form__input',
    inputMessage: 'support-form__message',
    submit: 'support-form_submit',
  },
  mode: {
    dark: {
      background: 'dark-mode-background',
      backgroundSection: 'dark-mode-menu-background',
      title: 'dark-mode-title',
      font: 'dark-mode-font',
      modal: 'dark-mode-modal-background',
      modalTitle: 'dark-mode-modal-title',
      modalFont: 'dark-mode-modal-font',
      icon: 'dark-mode-icon',
    },
    light: {
      background: 'light-mode-background',
      backgroundSection: 'light-mode-menu-background',
      title: 'light-mode-title',
      font: 'light-mode-font',
      modal: 'light-mode-modal-background',
      modalTitle: 'light-mode-modal-title',
      modalFont: 'light-mode-modal-font',
      icon: 'light-mode-icon',
    },
  },
  passwordIcon: 'password-icon',
  showPassword: 'show-password',
  closeModalButton: 'close-modal',
  closeLine: 'close-modal__line',
  errorValidation: 'error-validation-message',
  show: 'show',
  hide: 'hide',
  parentInput: 'form__item',
  wrapperPassword: 'wrapper-password',
  footer: {
    footer: 'footer',
    footerLogo: 'footer__logo',
    footerCopyright: 'footer__copyright',
    footerGithubWrap: 'footer__github-wrap',
    footerGithub: 'footer__github',
    footerGithubLogo: 'footer__github-logo',
  },
  menu: {
    navWrap: 'menu__nav-wrap',
    menuSection: 'main__menu',
    logo: 'menu__logo',
    logoTitle: 'menu__logo-title',
    logoWrap: 'menu__logo-wrap',
    navList: 'menu__nav',
    navItem: 'menu__nav-item',
    navIcon: 'menu__nav-icon',
    navButton: 'menu__nav-button',
    navButtonActive: 'menu__nav-button_active',
    menuItem: 'menu__item',
    menuList: 'menu__list',
    userImg: 'user__img',
    userWrap: 'user__wrap',
    user: 'user',
    switchInput: 'menu__input',
    switchSpan: 'menu__button-span',
    switchLabel: 'menu__switch',
    switchWrap: 'switch-wrap',
    logout: 'menu_logout',
  },
  main: 'main',
  mainContent: 'main__content',
  langSwitcher: {
    button: 'lang-switcher',
    container: 'lang-switcher__container',
    item: 'lang-switcher__container__item',
    big: 'big-switcher',
    small: 'small-switcher',
    show: 'switcher-show',
  },
  dashboard: {
    mainDashboard: 'main__dashboard',
    mainAside: 'main__aside',
    dashboard: 'dashboard',
    header: 'dashboard__header',
    iconWrap: 'icon-wrap',
    iconWrapLight: 'icon-wrap_light',
    totalPrice: 'dashboard__total-price',
    title: 'dashboard__title',
    totalBalance: 'balance__value',
    balanceWrap: 'balance__wrap',
    balance: 'balance',
    totalWrap: 'total-wrap',
    balanceButton: 'balance__button',
    incomeForm: 'form',
    formWrapper: 'form__wrapper',
    formTitle: 'form__title',
    formItem: 'form__item',
    formSelect: 'form__select',
    formInput: 'form__input',
    formLabel: 'form__label',
    formSubmitButton: 'form__button',
    formTextarea: 'form__textarea',
  },
  wallet: {
    categoriesSection: 'categories',
    accountsSection: 'accounts',
    wrapper: 'wallet-wrapper',
    section: 'wallet',
    subTitle: 'wallet__subtitle',
    subTitleItem: 'wallet__subtitle__item',
    sum: 'wallet__sum',
    itemContainer: 'wallet__container',
    item: 'wallet__item',
    title: 'wallet__title',
    image: 'wallet__image',
    balance: 'wallet__balance',
    lightIcon: 'wallet__image_light',
    select: 'wallet__select',
  },
  customSelect: {
    container: 'customselect',
    title: 'customselect__title',
    arrow: 'customselect__arrow',
    arrowLeft: 'customselect__arrow_left',
    arrowRight: 'customselect__arrow_right',
  },
  creater: {
    createWrapper: 'create-wrapper',
    createForm: 'create-form',
    createTitle: 'create-form__title',
    createItem: 'create-form__item',
    createInputContainer: 'create-form__input-container',
    createName: 'create-form__name',
    createIcon: 'create-form__icon',
    createBalance: 'create-form__balance',
    createCurrency: 'create-form__currency',
    createSubmit: 'create-form__submit',
    createLimit: 'create-form__limit',
    createCheckbox: 'create-form__limit_checkbox',
  },
  calendar: {
    input: 'calendar__input',
    body: 'calendar__body',
    buttons: 'calendar__button-wrap',
    button: 'calendar__button',
  },
  analytic: {
    title: 'analytic__title',
    chartYearExpenses: {
      container: 'analytic__chart-year-expenses',
    },
  },
};

export const Title = {
  copyright: 'All Rights Reserved © Yoda`s team 2023',
  logo: 'MAPmoney',
};

export const PageLink = {
  rsSchool: 'https://rs.school/js/',
  firstGithub: 'https://github.com/BondPV',
  secondGithub: 'https://github.com/marinastepanchuk',
  thirdGithub: 'https://github.com/Alesia-V175',
};

export const Attribute = {
  target: 'target',
  targetValue: '_blank',
  rel: 'rel',
  relValue: 'noopener',
  dataLink: 'data-link',
  checked: 'checked',
  inputCheckbox: 'checkbox',
  key: 'key',
  dataLang: 'data-lang',
  disabled: 'disabled',
  for: 'for',
};

export const MenuNavItem = {
  dashboard: {
    path: Route.DASHBOARD,
    name: Dictionary[AppState.lang].dashboard,
    key: DictionaryKeys.dashboard,
    image: SvgMap.dashboard,
  },
  wallet: {
    path: Route.WALLET,
    name: Dictionary[AppState.lang].wallet,
    key: DictionaryKeys.wallet,
    image: SvgMap.wallet,
  },
  analytics: {
    path: Route.ANALYTICS,
    name: Dictionary[AppState.lang].analytics,
    key: DictionaryKeys.analytics,
    image: SvgMap.analytic,
  },
  account: {
    path: Route.ACCOUNT,
    name: Dictionary[AppState.lang].account,
    key: DictionaryKeys.account,
    image: SvgMap.account,
  },
};

export const startId = {
  accounts: 'account-',
  categories: 'category-',
  svg: 'svg-',
};

export const ellementId = {
  walletSelect: 'wallet-select',
  limitCheckbox: 'wallet-limit-checkbox',
  chartYearIncomes: 'chart-year-incomes',
  chartYearExpenses: 'chart-year-expenses',
};

export const TextArea = {
  minLength: 3,
  maxLength: 100,
  rows: 3,
};

export const InputValue = {
  minNum: '1',
  maxNum: '10000000',
};

export const MinDate = '2012-01-01';

export const InputType = {
  number: 'number',
  date: 'date',
};
