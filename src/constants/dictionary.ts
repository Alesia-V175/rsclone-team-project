import { LANG } from '../types/types';

type DictionaryLang = {
  [key in LANG]: {
    [key: string]: string,
  };
};

export const Dictionary: DictionaryLang = {
  EN: {
    authorizationTitle: 'Welcome to MAPmoney.',
    authorizationGreeting: 'The best app for manage your finance',
    quote1: 'Money speaks sense in a language all nations understand. Aphra Behn',
    quote2: 'He who will not economize will have to agonize. Confucius',
    quote3: 'Your life is worth much more than gold. Bob Marley',
    quote4: 'A wise man should have money in his head, but not in his heart. Jonathan Swift',
    quote5: 'A man is rich in proportion to the number of things he can afford to let alone. Henry David Thoreau',
    quote6: 'Success does not consist in never making mistakes but in never making the same one a second time. Bernard Shaw',
    quote7: 'Не does not possess wealth that allows it to possess him. Franklin',
    quote8: 'An investment in knowledge always pays the best interest. Benjamin Franklin',
    quote9: 'It\'s a cash and carry world. Sometimes you pay a little. Mostly it\'s a lot. Sometimes, it\'s everything you have. Stephen King',
    labelEmail: 'Email Address',
    labelPassword: 'Password',
    registrationLinkText: 'Don\'t have an account?',
    signUpButton: 'Sign Up',
    signInButton: 'Sign In',
    registrationTitle: 'Create your Account',
    labelName: 'Name',
    labelConfirmPassword: 'Confirm Password',
    labelCurrencySelection: 'Сurrency (you can\'t change it later)',
    errorMessageEmail: 'Value is not valid.',
    errorMessageName: 'Name must contain at least 3 characters.',
    errorMessagePassword: 'Password must contain at least 5 characters.',
    errorMessageConfirmPassword: 'Passwords do not match. Please try again.',
    menuSupport: 'Support',
    language: 'Language',
    dashboard: 'Dashboard',
    darkMode: 'Dark Mode',
    support: 'Support',
    logout: 'Logout',
    wallet: 'My Wallet',
    analytics: 'Analytics',
    account: 'Account',
    supportTitle: 'Contact Support',
    labelQuestion: 'Question content',
    supportSubmitButton: 'Send a message',
    accountsTitle: 'Balance: ',
    categoriesTitle: 'Expenses: ',
    Transport: 'Transport',
    Clothes: 'Clothes',
    Entertainment: 'Entertainment',
    Food: 'Food',
    'Eating out': 'Eating out',
    Health: 'Health',
    House: 'House',
    Sport: 'Sport',
    Cash: 'Сash',
    Card: 'Сard',
  },
  RU: {
    authorizationTitle: 'Добро пожаловать в MAPmoney.',
    authorizationGreeting: 'Лучшее приложение для управления вашими финансами',
    quote1: 'Деньги говорят на языке, который понятен всем нациям. Афра Бен',
    quote2: 'Тот, кто не будет экономить - будет мучиться. Конфуций',
    quote3: 'Ваша жизнь стоит гораздо больше, чем золото. Боб Марли',
    quote4: 'Мудрый человек должен иметь деньги в своей голове, но не в сердце. Джонатан Свифт',
    quote5: 'Богатство человека прямо пропорционально числу вещей, которые он может позволить себе не делать. Генри Дэвид Торо',
    quote6: 'Секрет успеха заключается не в том, чтобы не делать ошибок, а в том, чтобы не повторять одних и тех же ошибок дважды. Бернард Шоу',
    quote7: 'Тот не владеет богатством, кто позволяет богатству овладеть собой. Франклин',
    quote8: 'Инвестиции в знания всегда дают наибольшую прибыль. Бенджамин Франклин',
    quote9: 'В этом мире все продается за наличные. Иногда приходится платить немного; иногда - много, а иногда вообще все, что у тебя есть. Стивен Кинг',
    labelEmail: 'Электронная Почта',
    labelPassword: 'Пароль',
    registrationLinkText: 'У Вас нет аккаунта?',
    signUpButton: 'Регистрация',
    signInButton: 'Войти',
    registrationTitle: 'Создать учетную запись',
    labelName: 'Имя',
    labelConfirmPassword: 'Повторите Пароль',
    labelCurrencySelection: 'Валюта (вы не сможете изменить ее в дальнейшем)',
    errorMessageEmail: 'Введенное значение не валидно',
    errorMessageName: 'Имя должно содержать не менее 3 символов.',
    errorMessagePassword: 'Пароль должен содержать не менее 5 символов.',
    errorMessageConfirmPassword: 'Пароли не совпадают. Повторите ввод.',
    menuSupport: 'Написать в поддержку',
    language: 'Выбор языка',
    dashboard: 'Панель управления',
    darkMode: 'Темная тема',
    support: 'Служба поддержки',
    logout: 'Выход из аккаунта',
    wallet: 'Мои счета',
    analytics: 'Статистика',
    account: 'Личный кабинет',
    supportTitle: 'Обращение в службу поддержки',
    labelQuestion: 'Содержание вопроса',
    supportSubmitButton: 'Отправить сообщение',
    accountsTitle: 'Баланс: ',
    categoriesTitle: 'Расходы: ',
    Transport: 'Транспорт',
    Clothes: 'Одежда',
    Entertainment: 'Развлечения',
    Food: 'Продукты',
    'Eating out': 'Еда вне дома',
    Health: 'Медицина',
    House: 'Дом',
    Sport: 'Спорт',
    Cash: 'Наличные',
    Card: 'Карта',
  },
  DE: {
    authorizationTitle: '',
    authorizationGreeting: '',
    quote1: '',
    quote2: '',
    quote3: '',
    quote4: '',
    quote5: '',
    quote6: '',
    quote7: '',
    quote8: '',
    quote9: '',
    labelEmail: '',
    labelPassword: '',
    registrationLinkText: '',
    signUpButton: '',
    signInButton: '',
    registrationTitle: '',
    labelName: '',
    labelConfirmPassword: '',
    labelCurrencySelection: '',
    errorMessageEmail: '',
    errorMessageName: '',
    errorMessagePassword: '',
    errorMessageConfirmPassword: '',
    menuSupport: '',
    language: '',
    dashboard: '',
    darkMode: '',
    support: '',
    logout: '',
    wallet: '',
    analytics: '',
    account: '',
    supportTitle: '',
    labelQuestion: '',
    supportSubmitButton: '',
    accountsTitle: '',
    categoriesTitle: '',
    Transport: '',
    Clothes: '',
    Entertainment: '',
    Food: '',
    'Eating out': '',
    Health: '',
    House: '',
    Sport: '',
    Cash: '',
    Card: '',
  },
};

type DictionaryKeysType = {
  [key: string]: string,
};

export const DictionaryKeys: DictionaryKeysType = {
  authorizationTitle: 'authorizationTitle',
  authorizationGreeting: 'authorizationGreeting',
  quote1: 'quote1',
  quote2: 'quote2',
  quote3: 'quote3',
  quote4: 'quote4',
  quote5: 'quote5',
  quote6: 'quote6',
  quote7: 'quote7',
  quote8: 'quote8',
  quote9: 'quote9',
  labelEmail: 'labelEmail',
  labelPassword: 'labelPassword',
  registrationLinkText: 'registrationLinkText',
  signUpButton: 'signUpButton',
  signInButton: 'signInButton',
  labelName: 'labelName',
  labelConfirmPassword: 'labelConfirmPassword',
  labelCurrencySelection: 'labelCurrencySelection',
  registrationTitle: 'registrationTitle',
  errorMessageEmail: 'errorMessageEmail',
  errorMessageName: 'errorMessageName',
  errorMessagePassword: 'errorMessagePassword',
  errorMessageConfirmPassword: 'errorMessageConfirmPassword',
  menuSupport: 'menuSupport',
  language: 'language',
  dashboard: 'dashboard',
  darkMode: 'darkMode',
  support: 'support',
  logout: 'logout',
  wallet: 'wallet',
  analytics: 'analytics',
  account: 'account',
  supportTitle: 'supportTitle',
  labelQuestion: 'labelQuestion',
  supportSubmitButton: 'supportSubmitButton',
  accountsTitle: 'accountsTitle',
  categoriesTitle: 'categoriesTitle',
  Transport: 'Transport',
  Clothes: 'Clothes',
  Entertainment: 'Entertainment',
  Food: 'Food',
  'Eating out': 'Eating out',
  Health: 'Health',
  House: 'House',
  Sport: 'Sport',
  Cash: 'Cash',
  Card: 'Card',
};
