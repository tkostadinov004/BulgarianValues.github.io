questions = [
    {
        "id": 0,
        "question": "Капитализмът е най-успешната икономическа система досега.",
        "effects": {
            "economy": 1
        },
        "help": null
    },
    {
        "id": 1,
        "question": "Наследството е легитимна форма на богатство.",
        "effects": {
            "economy": 1
        },
        "help": "a"
    },
    {
        "id": 2,
        "question": "Средствата за производство трябва да принадлежат на работниците.",
        "effects": {
            "economy": -1
        },
    },
    {
        "id": 3,
        "question": "Трябва да съществува основна инфраструкура като пътища, здравеопазване и образование, която да бъде държавна собственост.",
        "effects": {
            "economy": -1,
            "taxation": 1
        },
    },
    {
        "id": 4,
        "question": "Обществото трябва да преживява трудностите заедно.",
        "effects": {
            "economy": -1
        }
    },
    {
        "id": 5,
        "question": "Едно силно и голямо правителство винаги е полезно за народа",
        "effects": {
            "auth": 1
        }
    },
    {
        "id": 6,
        "question": "Насилието от страна на протестиращите не е приемливо, дори и когато се правят протести против авторитарни режими",
        "effects": {
            "auth": 1
        }
    },
    {
        "id": 7,
        "question": "Законът и редът са по-важни от свободата",
        "effects": {
            "auth": 1
        }
    },
    {
        "id": 8,
        "question": "Съществуването на държавата е заплаха за човешката свобода",
        "effects": {
            "auth": -1
        }
    },
    {
        "id": 9,
        "question": "Автокрацията е по-добра от либералната демокрация",
        "effects": {
            "auth": 1
        }
    },
    {
        "id": 10,
        "question": "Бих имал против лидер, който управлява в полза на хората, но използва авторитарни методи, за да се задържи на власт",
        "effects": {
            "auth": -1
        }
    },
    {
        "id": 11,
        "question": "Важно е да гледаме българския национален интерес пред този на другите държави",
        "effects": {
            "nat": 1
        }
    },
    {
        "id": 12,
        "question": "България е велика страна",
        "effects": {
            "nat": 1
        }
    },
    {
        "id": 13,
        "question": "Подкрепям сливането на България и Северна Македония",
        "effects": {
            "nat": 1,
            "inter": 1
        }
    },
    {
        "id": 14,
        "question": "Национализмът е егоистична и зла идеология.",
        "effects": {
            "nat": -1
        }
    },
    {
        "id": 15,
        "question": "Беше грешка да налагаме санкции на Русия и да изпращаме оръжие на Украйна",
        "effects": {
            "nat": 1,
            "nonv": 1,
            "inter": -1
        }
    },
    {
        "id": 16,
        "question": "Не подкрепям членството на България в ЕС",
        "effects": {
            "nat": 1,
        }
    },
    {
        "id": 17,
        "question": "Не подкрепям членството на България в НАТО",
        "effects": {
            "nat": 1,
        }
    },
    {
        "id": 18,
        "question": "Едно световно правителство би било полезно за хората",
        "effects": {
            "nat": -1
        }
    },
    {
        "id": 19,
        "question": "Запазването на нашата култура е изключително важно.",
        "effects": {
            "trad": 1
        }
    },
    {
        "id": 20,
        "question": "Трябва да запазим своите традиционни ценности колкото се може повече",
        "effects": {
            "trad": 1
        }
    },
    {
        "id": 21,
        "question": "Обществото трябва да се промени или реформира",
        "effects": {
            "trad": -1
        }
    },
    {
        "id": 22,
        "question": "Подкрепям ЛГБТ обществото",
        "effects": {
            "trad": -1
        }
    },
    {
        "id": 23,
        "question": "Прогресът е от изключителна важност за хората",
        "effects": {
            "trad": -1
        }
    },
    {
        "id": 24,
        "question": "Развитието на технологиите е основно в добра посока",
        "effects": {
            "acc": 1
        }
    },
    {
        "id": 25,
        "question": "Най-добрият начин за справяне с климатичните промени е чрез създаване на нови технологии",
        "effects": {
            "acc": 1
        }
    },
    {
        "id": 26,
        "question": "Животът е по-труден и гаден, отколкото е бил преди няколко десетилетия",
        "effects": {
            "acc": -1
        }
    },
    {
        "id": 27,
        "question": "Трябва да забавим своето технологично развитие",
        "effects": {
            "acc": -1
        }
    },
    {
        "id": 28,
        "question": "Бог съществува",
        "effects": {
            "religion": 1
        }
    },
    {
        "id": 29,
        "question": "Трябва да разпространим своята религия възможно най-много",
        "effects": {
            "religion": 1
        }
    },
    {
        "id": 30,
        "question": "Смятам се за религиозен/религиозна",
        "effects": {
            "religion": 1
        }
    },
    {
        "id": 31,
        "question": "Трябва да създадем религиозно правителство (теокрация)",
        "effects": {
            "religion": 1
        }
    },
    {
        "id": 32,
        "question": "Проблем е, че голяма част от хората в Светия Синод са свързани с Държавна сигурност",
        "effects": {
            "trad": -1
        }
    },
    {
        "id": 33,
        "question": "Протестите трябва да бъдат възможно най-мирни",
        "effects": {
            "nonv": 1
        }
    },
    {
        "id": 34,
        "question": "Агресията носи повече негативи, отколкото позитиви",
        "effects": {
            "nonv": 1
        }
    },
    {
        "id": 35,
        "question": "Насилието понякога е неизбежно, особено ако искаме да направим истински реформи",
        "effects": {
            "nonv": -1
        }
    },
    {
        "id": 36,
        "question": "Експерти и интелигентни хора трябва да управляват България",
        "effects": {
            "aristoc": 1
        }
    },
    {
        "id": 37,
        "question": "Демокрацията е вредна.",
        "effects": {
            "aristoc": 1
        }
    },
    {
        "id": 38,
        "question": "За един лидер е по-важно да разсъждава трезво, отколкото да слуша народа си",
        "effects": {
            "aristoc": 1
        }
    },
    {
        "id": 39,
        "question": "Ако компютрите станат по-умни от хората, то компютрите трябва да управляват",
        "effects": {
            "aristoc": 1
        }
    },
    {
        "id": 40,
        "question": "Какистокрацията (управление от най-лошите, най-малко квалифицирани или най-безскрупулните граждани) е нещо добро.",
        "effects": {
            "aristoc": -1
        }
    },
    {
        "id": 41,
        "question": "Ако съществува орган, който да ни управлява, то е важно той да бъде избран от народа",
        "effects": {
            "const": -1
        }
    },
    {
        "id": 42,
        "question": "Представителната демокрация е по-добра от пряката.",
        "effects": {
            "const": 1
        }
    },
    {
        "id": 43,
        "question": "Силните лидери правят силни държави.",
        "effects": {
            "const": 1
        }
    },
    {
        "id": 44,
        "question": "Глобализацията е неизбежна и трябва да я приемем позитивно.",
        "effects": {
            "inter": 1
        }
    },
    {
        "id": 45,
        "question": "Ако някой емигрира в България, то е важно този човек да се интегрира в нашата култура",
        "effects": {
            "culturalRel": 1
        }
    },
    {
        "id": 46,
        "question": "Всеки етнос трябва да комуникира само със своя вид.",
        "effects": {
            "culturalRel": 1
        }
    },
    {
        "id": 47,
        "question": "Подкрепям опитите за ромска интеграция",
        "effects": {
            "culturalRel": 1
        }
    },
    {
        "id": 48,
        "question": "Етноса не трябва да има значение",
        "effects": {
            "culturalRel": -1
        }
    },
    {
        "id": 49,
        "question": "С цел многообразие, трябва да поставим минимални квоти в учебните заведения или предприятия за хора от етническите малцинства",
        "effects": {
            "culturalRel": -2
        }
    },
    {
        "id": 50,
        "question": "Да бъдеш реалистично настроен е много важно.",
        "effects": {
            "prag": 1
        }
    },
    {
        "id": 51,
        "question": "Трябва да бъдем по-отворени към крайни идеи.",
        "effects": {
            "prag": -1
        }
    },
    {
        "id": 52,
        "question": "Трябва да се стремим към утопично общество.",
        "effects": {
            "prag": -1
        }
    },
    {
        "id": 53,
        "question": "Егоизмът е негативна черта",
        "effects": {
            "prud": 1
        }
    },
    {
        "id": 54,
        "question": "Да работиш за обществото е по-важно, отколкото да търсиш щастие",
        "effects": {
            "prud": 1
        }
    },
    {
        "id": 55,
        "question": "Всеки трябва да може да прави каквото си иска.",
        "effects": {
            "prud": -1
        }
    },
    {
        "id": 56,
        "question": "Най-смисленото време е това, прекарано в правене на неща, полезни за теб",
        "effects": {
            "prud": -1
        }
    },
    {
        "id": 57,
        "question": "Свободата за бизнеса е най-добрия начин, по който може да просперира едно общество",
        "effects": {
            "free": 1
        }
    },
    {
        "id": 58,
        "question": "Регулациите върху икономиката вредят повече, отколкото помагат",
        "effects": {
            "free": 1
        }
    },
    {
        "id": 59,
        "question": "Пазарът се регулира сам и няма нужда правителството да се намесва",
        "effects": {
            "free": 1
        }
    },
    {
        "id": 60,
        "question": "Нужно е правителството да се намеси в икономиката, за да защити потребителите",
        "effects": {
            "free": 1
        }
    },
    {
        "id": 61,
        "question": "Ако корпорации съществуват, то те трябва да бъдат предимно държавна собственост",
        "effects": {
            "free": 1
        }
    },
    {
        "id": 62,
        "question": "Децата винаги трябва да слушат своите родители",
        "effects": {
            "pat": 1
        }
    },
    {
        "id": 63,
        "question": "Възрастните хора обикновено имат повече знание и опит",
        "effects": {
            "pat": 1
        }
    },
    {
        "id": 64,
        "question": "Ако едно дете избере да работи, то трябва да може да го направи",
        "effects": {
            "pat": 1
        }
    },
    {
        "id": 65,
        "question": "Младите хора сега са изключени от много от сферите на обществения живот",
        "effects": {
            "pat": 1
        }
    },
    {
        "id": 66,
        "question": "Няма нужда обществото да бъде организирано",
        "effects": {
            "unru": 1
        }
    },
    {
        "id": 67,
        "question": "Сегашната правосъдна система е прекалено строга",
        "effects": {
            "unru": 1
        }
    },
    {
        "id": 68,
        "question": "Без организация, обществото ще бъде хаотично",
        "effects": {
            "unru": -1
        }
    },
    {
        "id": 69,
        "question": "Да бъдеш организиран е положителна черта",
        "effects": {
            "unru": -1
        }
    },
    {
        "id": 70,
        "question": "Всеки трябва да бъде дисциплиниран в повечето случаи",
        "effects": {
            "unru": -1
        }
    },
    {
        "id": 71,
        "question": "Правил съм много грешни неща в миналото.",
        "effects": {
            "imp": 1
        }
    },
    {
        "id": 72,
        "question": "Нарушавал съм закона преди",
        "effects": {
            "imp": 1
        }
    },
    {
        "id": 73,
        "question": "Не съм перфектен",
        "effects": {
            "imp": 1
        }
    },
    {
        "id": 74,
        "question": "Другите хора ме смятат за алтруистичен и добър човек",
        "effects": {
            "imp": -1
        }
    },
    {
        "id": 75,
        "question": "Случва се често да мразя други хора",
        "effects": {
            "imp": 1
        }
    },
    {
        "id": 76,
        "question": "Местната власт може да разбере по-добре нуждите на гражданите си, отколкото правителството",
        "effects": {
            "federal": 1
        }
    },
    {
        "id": 77,
        "question": "Законите трябва да са различни във всеки район и във всяка култура",
        "effects": {
            "federal": 1
        }
    },
    {
        "id": 78,
        "question": "Една федерална държава би била по-добра от една унитарна такава",
        "effects": {
            "federal": 1
        }
    },
    {
        "id": 79,
        "question": "Правителството се грижи по-добре за малцинствата, отколкото местната власт",
        "effects": {
            "federal": -1
        }
    },
    {
        "id": 80,
        "question": "Повечето неща могат да се постигнат само ако ги правим заедно.",
        "effects": {
            "nih": -1
        }
    },
    {
        "id": 81,
        "question": "Личният и работният животи на хората трябва да бъдат разделени",
        "effects": {
            "nih": 1
        }
    },
    {
        "id": 82,
        "question": "Да бъдеш самодостатъчен е положителна черта.",
        "effects": {
            "nih": 1
        }
    },
    {
        "id": 83,
        "question": "Сигурността е по-важна от свободата.",
        "effects": {
            "gadsden": -1
        }
    },
    {
        "id": 84,
        "question": "Правителството не трябва да влияе на живота на хората по никакъв начин",
        "effects": {
            "gadsden": 1
        }
    },
    {
        "id": 85,
        "question": "Понякога, за да се предотвратят престъпления, е добра идея гражданите да бъдат следени",
        "effects": {
            "gadsden": -1
        }
    },
    {
        "id": 86,
        "question": "Ако човек няма какво да крие, то той няма от какво да се страхува",
        "effects": {
            "gadsden": -1
        }
    },
    {
        "id": 87,
        "question": "Загуба на време е да се рехабилитират някои престъпници",
        "effects": {
            "puni": 1
        }
    },
    {
        "id": 88,
        "question": "Подкрепям смъртното наказания.",
        "effects": {
            "puni": 1
        }
    },
    {
        "id": 89,
        "question": "Подкрепям по-строги наказания при педофилия",
        "effects": {
            "puni": 1
        }
    },
    {
        "id": 90,
        "question": "Реалността се формира от човешкото възприятие и разбиране.",
        "effects": {
            "spir": 1
        }
    },
    {
        "id": 91,
        "question": "Реалността е такава, само тогава когато душата го смята",
        "effects": {
            "spir": 1
        }
    },
    {
        "id": 92,
        "question": "Реалността е абстрактна идея.",
        "effects": {
            "spir": 1
        }
    },
    {
        "id": 93,
        "question": "Всяка мисъл или вярване трябва се докаже материалистично",
        "effects": {
            "spir": -1
        }
    },
    {
        "id": 94,
        "question": "Просвещението беше грешка.",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 95,
        "question": "Животът беше по-добре преди няколко десетилетия",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 96,
        "question": "Искаше ми се да мога да живея в миналото.",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 97,
        "question": "По Бай-Тошово време беше по-добре.",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 98,
        "question": "Стандарта на живот ще се подобри драстично в бъдещето",
        "effects": {
            "lcen": -1
        }
    },
    {
        "id": 99,
        "question": "Бъдещето на човечеството изглежда светло.",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 100,
        "question": "Животът е бил ужасен преди няколко века.",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 101,
        "question": "Искам да живея в бъдещето",
        "effects": {
            "lcen": 1
        }
    },
    {
        "id": 102,
        "question": "Абортите са убийство.",
        "effects": {
            "pron": 1
        }
    },
    {
        "id": 103,
        "question": "Щеше да бъде по-добре, ако раждаемостта беше по-висока",
        "effects": {
            "pron": 1
        }
    },
    {
        "id": 104,
        "question": "Една жена трябва да има правото да направи аборт",
        "effects": {
            "pron": -1
        }
    },
    {
        "id": 105,
        "question": "Животът няма цел.",
        "effects": {
            "pron": -1
        }
    },
    {
        "id": 106,
        "question": "Щеше да бъде по-добре, ако хората изчезнат",
        "effects": {
            "pron": -1
        }
    },
    {
        "id": 107,
        "question": "Климатичните промени не съществуват",
        "effects": {
            "clisk": 1
        }
    },
    {
        "id": 108,
        "question": "Загуба на време е да се опитваме да намерим начин за справяне с климатичните промени",
        "effects": {
            "clisk": 1
        }
    },
    {
        "id": 109,
        "question": "Опазването на околната среда е много важно",
        "effects": {
            "clisk": -1
        }
    },
    {
        "id": 110,
        "question": "Трябва да забавим развитието си, за да защитим природата",
        "effects": {
            "clisk": -2
        }
    },
    {
        "id": 111,
        "question": "Прогресивният данък е добра идея.",
        "effects": {
            "taxation": 1
        }
    },
    {
        "id": 112,
        "question": "Плоският данък е по-добър и ефективен от прогресивния",
        "effects": {
            "taxation": -1
        }
    },
    {
        "id": 113,
        "question": "Принудителното събиране на данъци трябва да бъде премахнато",
        "effects": {
            "taxation": -1
        }
    },
    {
        "id": 114,
        "question": "Данъците са кражба.",
        "effects": {
            "taxation": -1
        }
    },
    {
        "id": 115,
        "question": "По-голямата част от приходите на хората трябва да отиват в държавата, под формата на данъци",
        "effects": {
            "taxation": 1
        }
    },
    {
        "id": 116,
        "question": "Харесвам изкуство, което изглежда футуристично",
        "effects": {
            "pmart": 1
        }
    },
    {
        "id": 117,
        "question": "Постмодернистичното изкуство е подценено.",
        "effects": {
            "pmart": 1
        }
    },
    {
        "id": 118,
        "question": "Абстрактното изкуство не е изкуство.",
        "effects": {
            "pmart": -1
        }
    },
    {
        "id": 119,
        "question": "Ренесансовото изкуство е по-добро от модерното",
        "effects": {
            "pmart": -1
        }
    },
    {
        "id": 120,
        "question": "Средновековното изкуство ми харесва.",
        "effects": {
            "pmart": -1
        }
    },
    {
        "id": 121,
        "question": "Работата може да бъде нещо прекрасно. Важното е човек да намери това, което му харесва.",
        "effects": {
            "enth": 1
        }
    },
    {
        "id": 122,
        "question": "Подкрепям намаляването на работната седмица.",
        "effects": {
            "enth": -1
        }
    },
    {
        "id": 123,
        "question": "Аз съм продуктивен",
        "effects": {
            "enth": -1
        }
    },
    {
        "id": 124,
        "question": "Някои обидни думи и мнения трябва да бъдат цензурирани",
        "effects": {
            "ahs": 1
        }
    },
    {
        "id": 125,
        "question": "Някои думи трябва да бъдат променени, с цел толерантност.",
        "effects": {
            "ahs": 1
        }
    },
    {
        "id": 126,
        "question": "Свободата на изразяване трябва да бъде предпазена.",
        "effects": {
            "ahs": -1
        }
    },
    {
        "id": 127,
        "question": "Всеки човек трябва да може да каже каквото си иска без да има последствия за думите му",
        "effects": {
            "ahs": -1
        }
    },
    {
        "id": 128,
        "question": "Повечето решения трябва да бъдат вземани на логическа основа, дори и това да не се харесва на хората",
        "effects": {
            "fact": 1
        }
    },
    {
        "id": 129,
        "question": "Някои мнения са по-верни от други.",
        "effects": {
            "fact": 1
        }
    },
    {
        "id": 130,
        "question": "Едно решение е грешно, ако всички хора са против него",
        "effects": {
            "fact": -1
        }
    },
    {
        "id": 131,
        "question": "Против принудителната ваксинация съм.",
        "effects": {
            "fact": 1
        }
    },
    {
        "id": 132,
        "question": "Населението не трябва да бъде много интелигентно.",
        "effects": {
            "trpop": 1
        }
    },
    {
        "id": 133,
        "question": "Всеки човек трябва да има достъп до средно образование.",
        "effects": {
            "trpop": -1
        }
    },
    {
        "id": 134,
        "question": "Трябва да се опитваме да правим населението по-умно.",
        "effects": {
            "trpop": -1
        }
    },
    {
        "id": 135,
        "question": "Само корпорациите трябва да имат право на притежание на оръжие",
        "effects": {
            "wmar": 1
        }
    },
    {
        "id": 136,
        "question": "Някои оръжия трябва да бъдат забранени.",
        "effects": {
            "wmar": 1
        }
    },
    {
        "id": 137,
        "question": "Всеки работник трябва да притежава оръжие.",
        "effects": {
            "wmar": -1
        }
    },
    {
        "id": 138,
        "question": "Безмитната търговия обикновено е полезна и за двете страни.",
        "effects": {
            "trade": 1
        }
    },
    {
        "id": 139,
        "question": "Свободната търговия е най-добрия начин, по който една неразвита държава може да забогатее",
        "effects": {
            "trade": 1
        }
    },
    {
        "id": 140,
        "question": "Отрицателните ефекти на митата са повече от положителните",
        "effects": {
            "trade": -1
        }
    },
    {
        "id": 141,
        "question": "Свободната (безмитна) търговия вреди на местния бизнес",
        "effects": {
            "trade": -1
        }
    },
    {
        "id": 142,
        "question": "Ако едно общество стане по-отворено към нови идеи, то ще стане нестабилно.",
        "effects": {
            "cmind": 1
        }
    },
    {
        "id": 143,
        "question": "Някои идеи не трябва да бъдат толерирани в никакъв случай",
        "effects": {
            "cmind": 1
        }
    },
    {
        "id": 144,
        "question": "Хората имат по-голяма стойност от животните",
        "effects": {
            "poach": 1
        }
    },
    {
        "id": 145,
        "question": "Да убиваш животни за храна не е аморално",
        "effects": {
            "poach": 1
        }
    },
    {
        "id": 146,
        "question": "Трябва да има по-силни закони против убийството на животни",
        "effects": {
            "poach": -1
        }
    },
    {
        "id": 147,
        "question": "Работното място трябва да бъде йерархично",
        "effects": {
            "hier": 1
        }
    },
    {
        "id": 148,
        "question": "Собственикът на бизнеса трябва да притежава средствата за производство, защото той поема риска от фалит",
        "effects": {
            "hier": 1
        }
    },
    {
        "id": 149,
        "question": "Работниците трябва да притежават средствата за производство",
        "effects": {
            "hier": -1
        }
    },
    {
        "id": 150,
        "question": "Интересите на гражданите на България са по-важни от интересите на имигрантите, живеещи в България",
        "effects": {
            "open": -1
        }
    },
    {
        "id": 151,
        "question": "Трябва да построим стена на границата с Турция, за да предотвратим влизането на имигранти в България",
        "effects": {
            "open": -1
        }
    },
    {
        "id": 152,
        "question": "Трябва да улесним имиграцията.",
        "effects": {
            "open": 1
        }
    },
];