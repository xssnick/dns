const localeDict = {
    ru: {
        about: 'О сервисе',
        dark_mode: 'Темная тема',
        what_is_ton_domains: 'Что такое домены .ton?',
        what_is_ton_domains_p1: 'TON DNS — сервис, который позволяет задать криптокошелькам, смарт-контрактам или сайтам короткие читаемые имена. С TON DNS доступ к децентрализованным сервисам аналогичен доступу к веб-сайтам в интернете.',
        your_nickname_on_a_decentralized_network: 'Ваш никнейм в децентрализованной сети',
        your_nickname_on_a_decentralized_network_p1: 'В социальных сетях или мессенджерах вы можете зарегистрировать себе имя пользователя (юзернейм), по которому вас легко найти другим людям.',
        your_nickname_on_a_decentralized_network_p2: 'Теперь вы можете зарегистрировать домен в блокчейне TON и прописать туда адрес вашего кошелька — это станет вашим юзернеймом в сети TON.',
        your_nickname_on_a_decentralized_network_video1: 'Вводите домен вместо адреса получателя при отправке монет.',
        your_nickname_on_a_decentralized_network_video2: 'Вводите домен в поисковой строке обозревателя сети.',
        your_nickname_on_a_decentralized_network_p3: 'Сервисы <a href="https://tonkeeper.com/" target="_blank">Tonkeeper</a>, <a href="https://wallet.ton.org/" target="_blank">TON Web Wallet</a> и <a href="https://tonscan.org/" target="_blank">Tonscan</a> уже сделали поддержку TON DNS. Большинство других приложений в TON также планирует реализовать поддержку, так что домен можно будет использовать повсеместно.',
        your_nickname_on_a_decentralized_network_p4: 'Домены могут регистрировать не только пользователи, но и разработчики для смарт-контрактов своих децентрализованных сервисов. Теперь у смарт-контрактов тоже будут свои юзернеймы, как у ботов в мессенджерах.',
        a_simple_and_convenient_blockchain: 'Удобный и простой блокчейн',
        a_simple_and_convenient_blockchain_p1: 'TON ставит своей целью достичь массового использования так, чтобы даже неопытные пользователи могли получить преимущества и безопасность от децентрализованных технологий.',
        a_simple_and_convenient_blockchain_p2: 'Разработчики в сети TON только усилили работу в этом направлении — например, последнее <a href="https://t.me/toncoin/400">обновление</a> <a href="https://t.me/wallet">@wallet</a> позволяет отправлять монеты собеседнику прямо в мессенджере Telegram, а <a href="https://t.me/toncoin/441">интеграция</a> NFT в Tonkeeper задает новый стандарт качества для криптокошельков.',
        a_simple_and_convenient_blockchain_p3: 'Вы могли заметить, что в TON-приложениях почти нет технической информации — мы не забиваем голову пользователей номерами блоков и хешами транзакций.',
        a_simple_and_convenient_blockchain_p4: 'Единственная техническая деталь, которую сразу видел пользователь — это адрес кошелька, и хоть он не сильно сложнее номера телефона или адреса банковской карты, мы рады, что с запуском TON DNS это тоже удалось упростить.',
        but_we_are_taking_a_step_even_closer_toward: 'Еще один шаг к децентрализованному интернету',
        but_we_are_taking_a_step_even_closer_toward_p1: 'В третьем квартале 2022 года запустились TON Sites и TON Proxy.',
        but_we_are_taking_a_step_even_closer_toward_p2: 'Это технология децентрализованных сайтов, которая обеспечивает больше приватности и безопасности как пользователям, так и владельцам сайтов.',
        but_we_are_taking_a_step_even_closer_toward_p3: 'Помимо этого появятся инструменты для взаимодействия смарт-контрактов блокчейна с интернет-ресурсами и наоборот.',
        but_we_are_taking_a_step_even_closer_toward_p4: 'К домену TON DNS можно привязать не только адрес кошелька, но также и подключить TON-сайт.',
        but_we_are_taking_a_step_even_closer_toward_p5: 'Мы видим в TON DNS хорошую альтернативу централизованным доменным регистраторам, которые зачастую могут заблокировать домен вашего сайта не по самым объективным причинам или же просто по ошибке.',
        ton_domain_names_are_nft: 'Домены .ton — это NFT',
        ton_domain_names_are_nft_p1: 'Доменная зона TON DNS называется ".ton". Пользователи регистрируют свои домены в этой зоне: например, "alice.ton".',
        ton_domain_names_are_nft_p2: 'Домены в зоне TON — это NFT. Это значит, что вы сможете хранить, дарить или продавать свои домены так же, как вы это делаете с обычными NFT.',
        ton_domain_names_are_nft_p3: 'Домен отображается в кошельках и его можно выставить на продажу на NFT-маркетплейсах, таких как <a href="https://getgems.io/">Getgems</a> или <a href="https://beta.disintar.io/">Disintar</a> — они уже это поддерживают.',
        ton_domain_names_are_nft_image1: 'Домены в NFT-маркетплейсе Getgems',
        rules_for_ton_domain_names: 'Правила доменов .ton',
        rules_for_ton_domain_names_p1: 'Домен в зоне ".ton" должен быть не менее 4 символов и не более 126 символов. Регистрация доменов менее 4 символов недоступна, чтобы не вносить дополнительную путаницу со стандартными интернет-доменами вроде "com", "org", "gov" и т.п.',
        rules_for_ton_domain_names_p2: 'В домене можно использовать английские символы, цифры и дефис.',
        rules_for_ton_domain_names_p3: 'Хотя технически можно было сделать доменные имена даже в виде эмоджи, они недоступны, т.к многие символы выглядят одинаково (например, 😗 и 😙), что могло бы быть использовано мошенниками.',
        rules_for_ton_domain_names_p4: 'Раз в год владельцу домена требуется отправить хотя бы одну нанокопейку на смарт-контракт домена и продлить таким образом домен еще на год. Если домен не продлить, он перейдет в режим аукциона. Это сделано для того, чтобы домены не были потеряны навечно, если их владельцы каким-либо образом утратили к ним доступ.',
        decentralization: 'Децентрализация',
        decentralization_p1: 'TON DNS — это децентрализованная доменная система. Не существует "администратора", который сможет заблокировать ваш домен.',
        decentralization_p2: 'Для исключительных случаев предусмотрена возможность смены владельца или удаление домена посредством общесетевого голосования. Заметим, что большинством в сети можно поменять не только DNS, но и любую конфигурацию блокчейна, но т.к. в сети несколько сотен независимых валидаторов, то для таких изменений нужен исключительно веский повод.',
        auction_rules: 'Условия аукциона',
        auction_rules_li1: 'Аукцион на домен длится неделю. В будущем длительность аукциона может быть снижена для удобства пользователей.',
        auction_rules_li2: 'Любой пользователь может сделать ставку в Toncoin на приобретение любого домена.',
        auction_rules_li3: 'Если ставка делается менее чем за час до окончания аукциона, то аукцион продлевается на час, чтобы другие пользователи могли успеть совершить ответные ставки.',
        auction_rules_li4: 'Каждая новая ставка должна не менее чем на 5% превышать предыдущую.',
        auction_rules_li5: 'После окончания аукциона пользователь, сделавший лучшую ставку, забирает домен.',
        claim_your_ton_domain: 'Как забрать TON-домен с аукциона и привязать к нему кошелёк',
        claim_your_ton_domain_h1: 'Убедитесь, что вы выиграли аукцион',
        claim_your_ton_domain_h2: 'Заберите домен с аукциона',
        claim_your_ton_domain_h3: 'Установка адреса вашего кошелька в домен с помощью Tonkeeper',
        claim_your_ton_domain_h4: 'Установка адреса вашего кошелька в домен с помощью расширения TON Wallet',
        claim_your_ton_domain_p1: 'Зайдите на <a target="_blank" href="https://dns.ton.org/">TON DNS</a> и введите ваш домен. Если аукцион закончился, то вы должны увидеть следующее:',
        claim_your_ton_domain_p2: 'Проверьте, что адрес владельца совпадает с адресом кошелька, с помощью которого вы делали ставки. Домен ваш, поздравляем!',
        claim_your_ton_domain_p3: 'Чтобы забрать домен с аукциона и стать его полноценным владельцем, необходимо совершить с ним любое действие.',
        claim_your_ton_domain_p4: 'Проще всего проставить в него адрес вашего кошелька. После этого вы сможете использовать короткое имя .ton вместо адреса кошелька во всех приложениях, которые поддерживают эту функцию.',
        claim_your_ton_domain_p5: 'В <a target="_blank" href="https://tonkeeper.com/">Tonkeeper</a> у пользователей есть возможность хранить домены во вкладке "NFT". Также у каждого TON DNS появится кнопка "Link" ("Привязать", т.е проставить адрес кошелька в этот домен).',
        claim_your_ton_domain_p6: '1. Откройте браузер Google Chrome на компьютере.',
        claim_your_ton_domain_p7: '2. Установите TON-расширение для Google Chrome по этой <a target="_blank" href="https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd">ссылке</a>.',
        claim_your_ton_domain_p8: '3. Откройте расширение, нажмите "Import wallet" и зайдите в кошелек, с помощью которого делались ставки, с помощью фразы восстановления.',
        claim_your_ton_domain_p9: '4. Теперь откройте ваш домен на <a target="_blank" href="https://dns.ton.org/">TON DNS</a> и нажмите кнопку "Редактировать".',
        claim_your_ton_domain_p10: '5. Скопируйте адрес вашего кошелька в поле "Адрес кошелька" и нажмите "Сохранить".',
        claim_your_ton_domain_p11: '6. Подтвердите отправку транзакции в расширении.',
        claim_your_ton_domain_a1: 'Настроить TON Site и поддомены',
        developers: 'Разработчикам',
        developers_p1: 'Каждый домен хранит до 2^256 DNS-записей, в нем можно хранить не только адрес кошелька и сайта, но и все что угодно.',
        developers_p2: 'Вы можете использовать это в своих продуктах.',
        developers_p3: 'Домену можно назначить произвольный смарт-контракт, отвечающий за менеджмент субдоменов. Он может реализовывать любую функциональность, что может быть использовано для создания новых механик.',
        developers_p4: 'Мы приветствуем написание вспомогательных сервисов, которые могли бы упростить пользователям участие в аукционах, например, чтобы у пользователей не было необходимости просыпаться рано утром, если аукцион проходит в неудобное время. Такие сервисы могли бы брать небольшую комиссию в Toncoin за свою работу.',
        developers_a1: 'Документация',
    },
    en: {},
}

const browserLang = navigator.language || navigator.userLanguage
const lang = (browserLang === 'ru-RU') || (browserLang === 'ru') || (browserLang === 'be-BY') || (browserLang === 'be') || (browserLang === 'kk-KZ') || (browserLang === 'kk') ? 'ru' : 'en';
const locale = localeDict[lang]

if (lang !== 'en') {
    document.querySelectorAll('[data-locale]').forEach((div) => {
        const key = div.attributes['data-locale'].value
        div.innerHTML = locale[key]
    })
}

;(function () {
    window.onload = function () {
        toggle('#about', true, 'flex')
        let elements = document.getElementsByClassName('video-element');
        for (let element of elements) {
            element.muted = 'muted'
            element.play()
        }

        if (window.location.hash) {
            $(window.location.hash).scrollIntoView({block: 'start'})
        }
    }
})()
