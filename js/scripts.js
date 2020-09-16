
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
        disable: 'mobile'
    })

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()
    });

    if (screen.width > 990) {
        $('.lang-select').select2();
    } else {
        $('.lang-select-mobile').select2();
    }


    var dictionary = {
        EN: {
            menuItemOne: 'Road map',
            menuItemTwo: 'Assets',
            menuItemThree: 'Token',
            menuItemFour: 'About',
            mainCaptionOne: 'The new mechanism to gain tokens',
            mainPBlockOne: 'The Engine is a money market protocol algorithm on Binance Smart-Chain that allows you to earn percents on a deposit or take digital assets under the pledge of cryptocurrency issued under the Binance Chain protocol.',
            mainCaptionTwo: 'Collaboration with MyWish for Creating Engin Money Market Protocol',
            textButtonOne: 'Learn more',
            mainCaptionThree: 'Main advantages',
            advCaptionOne: 'Decentralized assets',
            advCaptionTwo: 'Reduced volatility',
            advCaptionThree: 'Easy to use',
            advCaptionFour: 'No government control',
            advCaptionFive: 'Low fees',
            advItemOne: 'Manage your savings from any place in the world, in any time. Engine is a decentralized app, that means that your are the only person who can control your assets.',
            advItemTwo: 'UTBC is created to be stable, just like cash. Work in the crypto ecosystem without the volatility.',
            advItemThree: 'Buy UTBC in two clicks and start earning interest income at the good rate.',
            advItemFour: 'Assets that you receive can\'t be under the control from government regulators.',
            advItemFive: 'We give you an opportunity to make transactions with low fees for maximum convenience',
            mainCaptionFour: 'Join our telegram channel',
            footerItemOne: 'Return policy',
            footerItemTwo: 'Terms of use',
            footerItemThree: 'Privacy Policy',
            footerItemFour: 'Complete description of services offered',
            roadCaptionOne: 'Road Map',
            roadItemOne: 'Q1.2020 Development of the concept, technical and architectural documents.',
            roadItemTwo: 'Q1.2020 Building business models for the system, creating custom models and environments.',
            roadItemThree: 'Q2 2020 - Beta version of the platform (test issuance of loans and deposits acceptance).',
            roadItemFour: 'Q3 2020 - Internal safety and work capacity testing, revision and optimization.',
            roadItemFive: 'Q4 2020 - Safety and efficiency testing with external auditors.',
            roadItemSix: 'Q4.2020 – Increasing the number of partners from Europe and North America.',
            roadItemSeven: 'Q3-Q4.2020 - Launch of mass issuance of loans and acceptance of deposits. Diversification and scaling.',
            roadItemEight: 'Q1 — Q2.2021 Diversification and expansion of the platform\'s functionality: search, attraction and integration of partners based on opened API.',
            roadItemNine: 'Q1.2021 — Increasing the number of partners from Asia.',
            roadItemTen: 'Q1. 2021 Development and deployment of a token on Binance Chain to work with Binance Dex.',
            roadItemEleven: 'Q2. 2021 —  Increasing the number of partners from Latin America.',
            roadItemTwelve: ' Q3. 2021 —  Increasing the number of partners from Africa.',
            roadItemThirteen: 'Q3 — Q4. 2021 — Optimization and expansion of the marketplace platform.'
        },
        RU: {
            menuItemOne: 'Путевая карта',
            menuItemTwo: 'Активы',
            menuItemThree: 'Токен',
            menuItemFour: 'О нас',
            mainCaptionOne: 'Новый механизм для заработка токенов',
            mainPBlockOne: 'Engine - это алгоритм протокола денежного рынка на Binance Smart-Chain, который позволяет Вам зарабатывать проценты на депозите или брать цифровые активы под залог криптовалюты, выпущенной на протоколах Binance Chain.',
            mainCaptionTwo: 'Сотрудничество с MyWish для создания протокола Engin Money Market',
            textButtonOne: 'Узнать больше',
            mainCaptionThree: 'Основные преимущества',
            advCaptionOne: 'Децентрализованные активы',
            advCaptionTwo: 'Пониженная волатильность',
            advCaptionThree: 'Легко использовать',
            advCaptionFour: 'Нет государственного контроля',
            advCaptionFive: 'Низкие комиссии',
            advItemOne: 'Управляйте своими сбережениями из любой точки мира в любое время. Engine - это децентрализованное приложение, а это означает, что Вы единственный человек, который может контролировать Ваши активы ',
            advItemTwo: 'UTBC создан, чтобы быть стабильным, как и наличные деньги. Работайте в крипто-экосистеме без волатильности',
            advItemThree: 'Купите UTBC в два клика и начните получать процентный доход по хорошей ставке',
            advItemFour: 'Активы, которые Вы получаете, не могут находиться под контролем государственных регулирующих органов',
            advItemFive: 'Мы даем Вам возможность совершать транзакции с низкими комиссиями для максимального удобства',
            mainCaptionFour: 'Подпишись на наш Telegram канал',
            rulesItemOne: 'Децентрализованный',
            footerItemOne: 'Политика возврата',
            footerItemTwo: 'Условия использования',
            footerItemThree: 'Политика конфиденциальности',
            footerItemFour: 'Полное описание предлагаемых услуг',
            roadCaptionOne: 'Путевая карта',
            roadItemOne: 'Q1.2020  Разработка концепции и других технических и архитектурных документов.',
            roadItemTwo: 'Q1.2020 Построение бизнес-моделей для системы, создание пользовательских моделей и сред',
            roadItemThree: 'Q2 2020 - Бета версия платформы (тестовая выдача займов и прием вкладов)).',
            roadItemFour: 'Q3 2020 -  Внутреннее тестирование безопасности и работоспособности, доработка и оптимизация',
            roadItemFive: 'Q4 2020 - Тестирование безопасности и работоспособности с привлечением внешних аудиторов',
            roadItemSix: 'Q4.2020 – Увеличение количества партнеров из Европы и Северной Америки',
            roadItemSeven: 'Q3-Q4.2020 -  Запуск массовой выдачи займов и приема вкладов. Диверсификация и масштабирование.',
            roadItemEight: 'Q1 — Q2.2021  Диверсификация и расширение функционала платформы: поиск, привлечение и интеграция партнёров на базе открытого API',
            roadItemNine: 'Q1.2021 — Увеличение количества партнеров из Азии',
            roadItemTen: 'Q1. 2021 Разработка и развертывание токена на Binance Chain для работы с Binance Dex.',
            roadItemEleven: 'Q2. 2021 —  Увеличение количества партнеров из Латинской Америки',
            roadItemTwelve: ' Q3. 2021 —  Увеличение количества партнеров из Африки',
            roadItemThirteen: 'Q3 — Q4. 2021 — Оптимизация и расширение маркетплейса платформы'

        }
    }

    var language = 'EN';

    if(localStorage.getItem('todoLang')){
        $('.lang').val(localStorage.getItem('todoLang'));
        console.log('kdjdj')
        setLanguage(dictionary, localStorage.getItem('todoLang'));
        language = localStorage.getItem('todoLang');
    } else {
        setLanguage(dictionary, language);
    }

    $('.lang').change(function () {
        language = $(this).val();
        setLanguage(dictionary, language);
        localStorage.setItem('todoLang', language);
    });

});



function setLanguage(dictionary, language)
{
    $('#menuItemOne').text(dictionary[language].menuItemOne);
    $('#menuItemTwo').text(dictionary[language].menuItemTwo);
    $('#menuItemThree').text(dictionary[language].menuItemThree);
    $('#menuItemFour').text(dictionary[language].menuItemFour);
    $('#mainCaptionOne').text(dictionary[language].mainCaptionOne);
    $('#mainPBlockOne').text(dictionary[language].mainPBlockOne);
    $('#mainCaptionTwo').text(dictionary[language].mainCaptionTwo);
    $('#textButtonOne').text(dictionary[language].textButtonOne);
    $('#mainCaptionThree').text(dictionary[language].mainCaptionThree);
    $('#advCaptionOne').text(dictionary[language].advCaptionOne);
    $('#advCaptionTwo').text(dictionary[language].advCaptionTwo);
    $('#advCaptionThree').text(dictionary[language].advCaptionThree);
    $('#advCaptionFour').text(dictionary[language].advCaptionFour);
    $('#advCaptionFive').text(dictionary[language].advCaptionFive);
    $('#advItemOne').text(dictionary[language].advItemOne);
    $('#advItemTwo').text(dictionary[language].advItemTwo);
    $('#advItemThree').text(dictionary[language].advItemThree);
    $('#advItemFour').text(dictionary[language].advItemFour);
    $('#advItemFive').text(dictionary[language].advItemFive);
    $('#mainCaptionFour').text(dictionary[language].mainCaptionFour);
    $('#footerItemOne').text(dictionary[language].footerItemOne);
    $('#footerItemTwo').text(dictionary[language].footerItemTwo);
    $('#footerItemThree').text(dictionary[language].footerItemThree);
    $('#footerItemFour').text(dictionary[language].footerItemFour);
    $('#roadCaptionOne').text(dictionary[language].roadCaptionOne);
    $('#roadItemOne').text(dictionary[language].roadItemOne);
    $('#roadItemTwo').text(dictionary[language].roadItemTwo);
    $('#roadItemThree').text(dictionary[language].roadItemThree);
    $('#roadItemFour').text(dictionary[language].roadItemFour);
    $('#roadItemFive').text(dictionary[language].roadItemFive);
    $('#roadItemSix').text(dictionary[language].roadItemSix);
    $('#roadItemSeven').text(dictionary[language].roadItemSeven);
    $('#roadItemEight').text(dictionary[language].roadItemEight);
    $('#roadItemNine').text(dictionary[language].roadItemNine);
    $('#roadItemTen').text(dictionary[language].roadItemTen);
    $('#roadItemEleven').text(dictionary[language].roadItemEleven);
    $('#roadItemTwelve').text(dictionary[language].roadItemTwelve);
    $('#roadItemThirteen').text(dictionary[language].roadItemThirteen);

}
