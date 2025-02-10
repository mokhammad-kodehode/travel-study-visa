export type CountryData = {
  nameof:string;
  name: string;
  name_two: string;
  flagUrl: string;
  pageUrl: string;
  backgroundImgUrl: string;
  feature_one:string;
  feature_two:string;
  feature_three:string;
  feature_four:string;
  feature_five:string;
  feature_six:string;
  feature_seven:string;
  [key: string]: string | undefined;
};

export const europeCountries: CountryData[] = [
  { 
    nameof: "austria",
    name: 'Австрия',
    name_two: 'Австрию',
    flagUrl: '/images/Flags/austria.svg',
    backgroundImgUrl: '/images/countries/Austria.jpg',
    pageUrl: '/visa/austria',
    feature_one:"Возможность посещать государства-подписанты Шенгенского соглашения. Это расширяет возможности для туризма, ведения бизнеса и поездок в личных целях.",
    feature_two:"Доступ к получению разрешения на длительное проживание на территории стран-участников. Национальная виза позволяет въехать в Австрию для дальнейшего оформления вида на жительство (ВНЖ).",
    feature_three:"Возможность путешествовать в пределах Шенгенской зоны до 90 дней в течение полугода (если не применимы персональные ограничения к конкретному иностранцу).",
    feature_four:"Лояльное отношение Австрии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "belgium",
    name: 'Бельгия',
    name_two: 'Бельгию',
    flagUrl: '/images/Flags/belgium.svg',
    backgroundImgUrl: '/images/countries/Belgium.jpg',
    pageUrl: '/visa/belgium',
    feature_one:"Возможность посещать государства-подписанты Шенгенского соглашения. Это расширяет возможности для туризма, ведения бизнеса и поездок в личных целях.",
    feature_two:"Доступ к получению разрешения на длительное проживание на территории стран-участников. Национальная виза позволяет въехать в Белгию для дальнейшего оформления вида на жительство (ВНЖ).",
    feature_three:"Возможность путешествовать в пределах Шенгенской зоны до 90 дней в течение полугода (если не применимы персональные ограничения к конкретному иностранцу).",
    feature_four:"Лояльное отношение Белгии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "bulgaria",
    name: 'Болгария',
    name_two: 'Болгарию',
    flagUrl: '/images/Flags/bulgaria.svg',
    backgroundImgUrl: '/images/countries/Bulgaria.jpg',
    pageUrl: '/visa/bulgaria',
    feature_one:"Возможность посещать государства-подписанты Шенгенского соглашения. Это расширяет возможности для туризма, ведения бизнеса и поездок в личных целях.",
    feature_two:"Доступ к получению разрешения на длительное проживание на территории стран-участников. Национальная виза позволяет въехать в Болгарию для дальнейшего оформления вида на жительство (ВНЖ).",
    feature_three:"Возможность путешествовать в пределах Шенгенской зоны до 90 дней в течение полугода (если не применимы персональные ограничения к конкретному иностранцу).",
    feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "hungary",
    name: 'Венгрия',
    name_two: 'Венгрию',
    flagUrl: '/images/Flags/hungary.svg',
    backgroundImgUrl: '/images/countries/Hungary.jpg',
    pageUrl: '/visa/hungary',
    feature_one:"Возможность посещать государства-подписанты Шенгенского соглашения. Это расширяет возможности для туризма, ведения бизнеса и поездок в личных целях.",
    feature_two:"Доступ к получению разрешения на длительное проживание на территории стран-участников. Национальная виза позволяет въехать в Венгрию для дальнейшего оформления вида на жительство (ВНЖ).",
    feature_three:"Возможность путешествовать в пределах Шенгенской зоны до 90 дней в течение полугода (если не применимы персональные ограничения к конкретному иностранцу).",
    feature_four:"Лояльное отношение Венгрии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "germany",
    name: 'Германия',
    name_two: 'Германию',
    flagUrl: '/images/Flags/germany.svg',
    backgroundImgUrl: '/images/countries/Germany.jpg',
    pageUrl: '/visa/germany',
    feature_one:"Оперативность. Средний срок рассмотрения пакета документов на краткосрочный шенген составляет 5–10 рабочих дней, а при использовании услуг юристов допускается сокращение периода до одного рабочего дня.",
    feature_two:"Гарантии успеха. При сотрудничестве с визовым центром соискатель получает одобрение на шенген в 99% случаев.",
    feature_three:"Снижение нагрузки. Для деловых людей, у которых нет времени собирать документы, визовый брокер — находка. Достаточно составить небольшую доверенность, предоставить специалистам паспорт и паруфотографий, остальные процедуры по подготовке к получению визы выполнят юристы.",
    feature_four:"Удобство отслеживания готовности визы. На сайте нужно ввести номер заявления и отследить стадию рассмотрения документов. Как только появится информация о готовности, можно забирать паспорт с выданным разрешением.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",

  },
  { 
    nameof: "greece",
    name: 'Греция',
    name_two: 'Грецию',
    flagUrl: '/images/Flags/greece.svg',
    backgroundImgUrl: '/images/countries/Greece.jpg',
    pageUrl: '/visa/greece',
    feature_one:"Возможность посещения шенгенского пространства. С визой Греции можно отправиться не только в страну, но и во все страны Шенгенского пространства.",
    feature_two:"Краткосрочные поездки. Туристическая виза в Грецию предназначена для коротких поездок до 90 дней в течение полугода.",
    feature_three:"Минимальные требования. Для оформления визы требуется в основном базовый пакет документов и подтверждение бронирования гостиницы и билетов.",
    feature_four:"Ускоренное оформление. В качестве отдельной услуги доступно ускоренное оформление: шенген — за 3–5 дней, национальная — за 1–2 недели.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "denmark",
    name: 'Дания',
    name_two: 'Данию',
    flagUrl: '/images/Flags/denmark.svg',
    backgroundImgUrl: '/images/countries/Denmark.jpg',
    pageUrl: '/visa/denmark',
    feature_one:"Возможность посещения шенгенского пространства. С визой Дании можно отправиться не только в страну, но и во все страны Шенгенского пространства.",
    feature_two:"Краткосрочные поездки. Туристическая виза в Данию предназначена для коротких поездок до 90 дней в течение полугода.",
    feature_three:"Минимальные требования. Для оформления визы требуется в основном базовый пакет документов и подтверждение бронирования гостиницы и билетов.",
    feature_four:"Ускоренное оформление. В качестве отдельной услуги доступно ускоренное оформление: шенген — за 3–5 дней, национальная — за 1–2 недели.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "ireland",
    name: 'Ирландия',
    name_two: 'Ирландию',
    flagUrl: '/images/Flags/ireland.svg',
    backgroundImgUrl: '/images/countries/Ireland.jpg',
    pageUrl: '/visa/ireland',
    feature_one:"Возможность посещения шенгенского пространства. С визой Ирландии можно отправиться не только в страну, но и во все страны Шенгенского пространства.",
    feature_two:"Краткосрочные поездки. Туристическая виза в Ирландию предназначена для коротких поездок до 90 дней в течение полугода.",
    feature_three:"Минимальные требования. Для оформления визы требуется в основном базовый пакет документов и подтверждение бронирования гостиницы и билетов.",
    feature_four:"Ускоренное оформление. В качестве отдельной услуги доступно ускоренное оформление: шенген — за 3–5 дней, национальная — за 1–2 недели.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "iceland",
    name: 'Исландия',
    name_two: 'Исландию',
    flagUrl: '/images/Flags/iceland.svg',
    backgroundImgUrl: '/images/countries/Iceland.jpg',
    pageUrl: '/visa/iceland',
    feature_one:"Возможность посетить уникальную природу страны. Ледники и вулканы, водопады и горячие минеральные источники, лавовые поля и лунные пейзажи делают Исландию привлекательным местом для путешественников.",
    feature_two:"Возможность путешествовать на машине. По Исландии удобно ездить на автомобиле, для этого нужно иметь водительские права международного образца.",
    feature_three:"Возможность воспользоваться Reykjavik Welcome Card. Карта предоставляет бесплатный доступ ко всем термальным источникам Рейкьявика, в ряд музеев, неограниченное количество поездок на автобусах города, скидки в магазинах и ресторанах, а также бесплатный доступ в интернет.",
    feature_four:"",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "spain",
    name: 'Испания',
    name_two: 'Испанию',
    flagUrl: '/images/Flags/spain.svg',
    backgroundImgUrl: '/images/countries/Spain.webp',
    pageUrl: '/visa/spain',
    feature_one:"Лояльность консульства. Испания — одна из немногих стран, которая продолжает давать визы россиянам, хоть и с уменьшенным сроком. К владельцам недвижимости в Испании консульство более благосклонно и может выдать визу на 1 год.",
    feature_two:"Оперативность оформления. В среднем рассмотрение заявления занимает 5–10 дней.",
    feature_three:"Возможность расширить географию путешествий. Обладатели испанской визы могут беспрепятственно посещать не только Испанию, но и любую другую страну ЕС.",
    feature_four:"Доступная цена. Цена на визу в Испанию в 2,5 раза ниже цены её прямого «конкурента» — Франции.",
    feature_five:"Лояльность консульства. Испания — одна из немногих стран, которая продолжает давать визы россиянам, хоть и с уменьшенным сроком. К владельцам недвижимости в Испании консульство более благосклонно и может выдать визу на 1 год.",
    feature_six:"Оперативность оформления. В среднем рассмотрение заявления занимает 5–10 дней.",
    feature_seven:"",
  },
  { 
    nameof: "italy",
    name: 'Италия',
    name_two: 'Италию',
    flagUrl: '/images/Flags/italy.svg',
    backgroundImgUrl: '/images/countries/Italy.jpg',
    pageUrl: '/visa/italy',
    feature_one:"Лояльность консульства. Италия — одна из немногих стран, которая продолжает давать визы россиянам, хоть и с уменьшенным сроком. К владельцам недвижимости в Испании консульство более благосклонно и может выдать визу на 1 год.",
    feature_two:"Оперативность оформления. В среднем рассмотрение заявления занимает 5–10 дней.",
    feature_three:"Возможность расширить географию путешествий. Обладатели испанской визы могут беспрепятственно посещать не только Испанию, но и любую другую страну ЕС.",
    feature_four:"Доступная цена. Цена на визу в Италию в 2,5 раза ниже цены её прямого «конкурента» — Франции.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "cyprus",
    name: 'Кипр',
    name_two: 'Кипр',
    flagUrl: '/images/Flags/сyprus.svg',
    backgroundImgUrl: '/images/countries/Cyprus.jpg',
    pageUrl: '/visa/cyprus',
    feature_one:"Возможность пребывания на территории Кипра с целью туризма, обучения, работы, визита к родственникам, покупки недвижимости с дальнейшим оформлением вида на жительство.",
    feature_two:"Возможность въехать в Шенгенскую зону через Кипр. Островное государство входит в число стран, которые подписали соглашение о едином экономическом пространстве. Получая визу Кипра, можно перемещаться по 26 странам Европы без оформления разрешительных документов.",
    feature_three:"Возможность оформить электронную про-визу. В этом случае окончательное разрешение на въезд в виде штампа поставит пограничная служба при влёте в страну.",
    feature_four:"Возможность оформить визу дистанционно. Заполнение анкеты займёт немного времени в электронном виде, не нужно приезжать в офис.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "latvia",
    name: 'Латвия',
    name_two: 'Латвию',
    flagUrl: '/images/Flags/latvias.svg',
    backgroundImgUrl: '/images/countries/Latvia.jpg',
    pageUrl: '/visa/latvia',
    feature_one: "Возможность пребывания на территории Латвии с целью туризма, обучения, работы, посещения родственников или участия в культурных и деловых мероприятиях.",
    feature_two: "Возможность свободного передвижения по странам Шенгенской зоны. Латвия является членом Шенгенского соглашения, что позволяет посещать другие европейские страны без дополнительных виз.",
    feature_three: "Удобный процесс подачи документов через визовые центры и консульства, что обеспечивает быструю и эффективную обработку заявок.",
    feature_four: "Возможность длительного пребывания при получении национальной визы для учебы, работы или ведения бизнеса в Латвии.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
    
  },
  { 
    nameof: "lithuania",
    name: 'Литва',
    name_two: 'Литву',
    flagUrl: '/images/Flags/lithuania.svg',
    backgroundImgUrl: '/images/countries/Lithuania.jpg',
    pageUrl: '/visa/lithuania',
    feature_one: "Возможность пребывания на территории Литвы для туризма, обучения, работы, посещения родственников или ведения деловых мероприятий.",
    feature_two: "Удобный доступ к странам Шенгенской зоны благодаря участию Литвы в Шенгенском соглашении, что позволяет свободно перемещаться по 26 странам Европы.",
    feature_three: "Возможность подачи заявления на визу через электронные системы или визовые центры, что сокращает время ожидания и упрощает процесс оформления.",
    feature_four: "Оформление национальной визы для долгосрочного пребывания с целью учёбы, работы или ведения бизнеса на территории Литвы.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "luxembourg",
    name: 'Люксембург',
    name_two: 'Люксембург',
    flagUrl: '/images/Flags/luxembourg.svg',
    backgroundImgUrl: '/images/countries/Luxembourg.jpg',
    pageUrl: '/visa/luxembourg',
    feature_one: "Возможность пребывания в Люксембурге для туризма, работы, учёбы или посещения международных конференций и деловых мероприятий.",
    feature_two: "Свободный доступ к странам Шенгенской зоны, так как Люксембург является её участником, что позволяет путешествовать по 26 странам без дополнительных виз.",
    feature_three: "Удобный процесс подачи документов, включая возможность подачи заявления через консульства и визовые центры, расположенные в различных странах.",
    feature_four: "Возможность длительного пребывания на территории Люксембурга при оформлении национальной визы для учёбы, работы или ведения бизнеса.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "malta",
    name: 'Мальта',
    name_two: 'Мальту',
    flagUrl: '/images/Flags/malta.svg',
    backgroundImgUrl: '/images/countries/Malta.jpg',
    pageUrl: '/visa/malta',
    "feature_one": "Возможность посетить остров любым удобным способом и из любой страны. Обладатели действующей шенгенской визы могут попасть на Мальту любым удобным способом.",
    "feature_two": "Возможность находиться в стране до 90 дней в течение полугода. Для туризма обычно подходит краткосрочная виза..",
    "feature_three": "Возможность путешествовать по другим странам Шенгенского соглашения. С визой категории С, которую выдало консульство Мальты, можно посещать другие страны Шенгенского соглашения.",
    "feature_four": "Возможность получить национальную визу категории D. Она разрешает находиться в стране более 90 дней, а также путешествовать по странам Шенгенского соглашения.",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "netherlands",
    name: 'Нидерланды',
    name_two: 'Нидерланды',
    flagUrl: '/images/Flags/netherlands.svg',
    backgroundImgUrl: '/images/countries/Netherlands.jpg',
    pageUrl: '/visa/netherlands',
    feature_one: "Возможность туризма и культурной деятельности. Можно посетить достопримечательности, познакомиться с местной культурой и искусством.",
    feature_two: "Возможность продления визы. Если нужно остаться в стране на более длительный срок, визу можно продлить.",
    feature_three: "Возможность посещения конференций и встреч. Также можно пройти короткие курсы или обучение в течение 90 дней.",
    feature_four: "Возможность переезда с семьёй. ВНЖ семьи будет зависеть от визы главного заявителя.",
    feature_five:"Право на платное и бесплатное образование по европейским стандартам. Ещё с ВНЖ открывается доступ к качественной медицине и высокому качеству жизни в целом.",
    feature_six:"Комфортный климат. Летом нет изнуряющей жары, а зимой — лютых морозов.",
    feature_seven:"Отсутствие языкового барьера. Местные жители свободно понимают английский.",
  },
  { 
    nameof: "norway",
    name: 'Норвегия',
    name_two: 'Норвегию',
    flagUrl: '/images/Flags/norway.svg',
    backgroundImgUrl: '/images/countries/Norway.jpg',
    pageUrl: '/visa/norway',
    feature_one: "Комфортные условия для пересечения границы. Жители приграничных районов могут пользоваться правом безвизового въезда в ближайшие к границе норвежские населённые пункты. Для остальных россиян с 2007года действует упрощённая процедура получения разрешительных документов на въезд.",
    feature_two: "Возможность беспрепятственно посещать 25 стран зоны Шенгенского соглашения. К ним относятся Австрия, Бельгия, Венгрия, Германия, Греция, Дания, Исландия, Испания, Италия, Латвия, Литва, Люксембург, Мальта, Нидерланды, Польша, Португалия, Словакия, Финляндия, Франция, Чехия, Швейцария, Швеция и Эстония.",
    feature_three: "Возможность подать заявление на получение многократной визы. Для этого необходимо документально подтвердить, что в прошлом гражданин России часто совершал краткосрочные поездки в Норвегию и не допускал правонарушений во время своих визитов. Кроме того, требуется обосновать необходимость частых поездок. Это может быть бизнес, посещение близких родственников, работа водителем или моряком, участие в соревнованиях и культурных мероприятиях.",
    feature_four: "",
    feature_five:".",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "poland",
    name: 'Польша',
    name_two: 'Польшу',
    flagUrl: '/images/Flags/poland.svg',
    backgroundImgUrl: '/images/countries/Poland.jpg',
    pageUrl: '/visa/poland',
    feature_one: "Возможность пребывания на территории Польши для туризма, обучения, работы, посещения родственников или участия в деловых и культурных мероприятиях.",
    feature_two: "Свободное перемещение по странам Шенгенской зоны, так как Польша является её участником, что позволяет путешествовать без дополнительных виз.",
    feature_three: "Простота подачи заявления на визу через консульства и визовые центры, а также возможность отслеживания статуса заявки онлайн.",
    feature_four: "Возможность получения национальной визы для длительного пребывания с целью учёбы, работы или открытия бизнеса в Польше.",
    feature_five:"Широкий доступ к образовательным и профессиональным возможностям, включая участие в международных программах и грантах.",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "portugal",
    name: 'Португалия',
    name_two: 'Португалию',
    flagUrl: '/images/Flags/portugal.svg',
    backgroundImgUrl: '/images/countries/Portugal.jpg',
    pageUrl: '/visa/portugal',
    feature_one: "Возможность пребывания в Португалии для туризма, учёбы, работы, посещения родственников или участия в деловых и культурных мероприятиях.",
    feature_two: "Свободное передвижение по странам Шенгенской зоны, так как Португалия является её участником, что позволяет путешествовать без дополнительных разрешений.",
    feature_three: "Простота оформления визы, включая возможность подачи заявления через визовые центры или консульства с доступной консультационной поддержкой.",
    feature_four: "Возможность получения национальной визы для длительного проживания с целью учёбы, работы или ведения бизнеса в Португалии.",
    feature_five:"Привлекательные условия для долгосрочного проживания, включая участие в программе «Золотая виза», которая даёт возможность инвестировать в экономику страны и получать вид на жительство.",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "romania",
    name: 'Румыния',
    name_two: 'Румынию',
    flagUrl: '/images/Flags/romania.svg',
    backgroundImgUrl: '/images/countries/Romania.jpg',
    pageUrl: '/visa/romania',
    feature_one: "Возможность посетить многие страны Европы. Шенгенская виза, в том числе в Румынию, даёт возможность путешествовать по многим странам Шенгенского соглашения. Это удобно для длительных путешествий.",
    feature_two: "Возможность остаться в Румынии на долгое время. Национальная виза (тип D) предоставляет право оставаться в стране на протяжении долгого времени. Документ подходит для постоянной работы, обучения, ведения бизнеса.",
    feature_three: "Возможность получить ВНЖ, ПМЖ и гражданство Румынии. Долгосрочная виза D даёт право иностранцу получить ВНЖ в Румынии, через 5 лет — ПМЖ, а затем — и гражданство Румынии..",
    feature_four: "",
    feature_five:"",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "slovakia",
    name: 'Словакия',
    name_two: 'Словакию',
    flagUrl: '/images/Flags/slovakia.svg',
    backgroundImgUrl: '/images/countries/Slovakia.jpg',
    pageUrl: '/visa/slovakia',
    feature_one: "Возможность пребывания в Словакии для туризма, учёбы, работы, посещения родственников или участия в деловых и культурных мероприятиях.",
    feature_two: "Свободное передвижение по странам Шенгенской зоны, поскольку Словакия является её участником, что позволяет путешествовать без дополнительных виз.",
    feature_three: "Удобный процесс подачи документов через консульства и визовые центры с возможностью отслеживания статуса заявления онлайн.",
    feature_four: "Возможность получения национальной визы для долгосрочного пребывания в Словакии с целью учёбы, работы или ведения бизнеса.",
    feature_five:"Широкие возможности для интеграции благодаря доступным образовательным программам и поддержке иностранцев на территории Словакии.",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "slovenia",
    name: 'Словения',
    name_two: 'Словению',
    flagUrl: '/images/Flags/slovenia.svg',
    backgroundImgUrl: '/images/countries/Slovenia.jpg',
    pageUrl: '/visa/slovenia',
    feature_one: "Возможность посетить живописные ландшафты и богатую культуру страны. Можно, например, увидеть средневековый замок Любляны, озеро Блед, пещеры Постойны и насладиться блюдами словенской кухни.",
    feature_two: "Возможность въезжать в другие страны Шенгенской зоны. По словенской визе можно посетить, например, Францию, Грецию, Австрию, Италию, Венгрию, Латвию, Португалию, Бельгию, Данию, Германию, Литву, Польшу, Норвегию, Финляндию, Монако, Чехию, Испанию, Нидерланды, Андорру, Мальту, Исландию.",
    feature_three: "Возможность оформить визу без личного присутствия. Специалисты визового центра возьмут на себя все процедуры, а клиент сможет спокойно ожидать и планировать поездку.",
    feature_four: "",
    feature_five: "",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "finland",
    name: 'Финляндия',
    name_two: 'Финляндию',
    flagUrl: '/images/Flags/finland.svg',
    backgroundImgUrl: '/images/countries/Finland.jpg',
    pageUrl: '/visa/finland',
    feature_one: "Возможность пребывания в Финляндии для туризма, учёбы, работы, посещения родственников или участия в культурных и деловых мероприятиях.",
    feature_two: "Свободное перемещение по странам Шенгенской зоны, так как Финляндия является её участником, что позволяет путешествовать по Европе без дополнительных виз.",
    feature_three: "Удобный процесс подачи заявления на визу через консульства и визовые центры с возможностью предварительного онлайн-заполнения анкеты.",
    feature_four: "Возможность оформления национальной визы для длительного проживания в Финляндии с целью обучения, работы или ведения бизнеса.",
    feature_five: "Высокий уровень безопасности и благополучия в Финляндии, что делает её привлекательной для длительного проживания и интеграции.",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "france",
    name: 'Франция',
    name_two: 'Францию',
    flagUrl: '/images/Flags/france.svg',
    backgroundImgUrl: '/images/countries/France.jpg',
    pageUrl: '/visa/france',
    feature_one: "Для ценителей высокой моды и трендов во Франции собралось самое большое количество домов моды в мире, а французские вина не оставят равнодушными ценителей виноградного шедевра, ведь здесь собранысамые лучшие сорта вин, не оставившие равнодушными лучших сомилье планеты. Для ценителей природы во Франции открываются бескрайние горные просторы, огромные вулканы, доисторические ущелья и национальные парки. А для ценителей горнолыжного отдыха здесь расположены одни из самых крутых склонов на планете, расположенные на местах известных горнолыжных курортов. Высокий уровень жизни, изумительная кухня, считающаяся самой разнообразной в Европе, а качество питьевой воды напомнит вам мотивы живых источников из высокогорья, укрепляющий иммунитет и стойкость к разным заболеваниям. Проявление высокой культуры во взаимоотношениях с мигрантами. Особенная лояльность наблюдается к русским и украинцам. У вас будет Возможность получить ВНЖ. Высококвалифицированные специалисты, обладающие богатым стажем, могут найти интересное рабочее предложение. Привлекательные пляжи. В стране прекрасная береговая линия протяжённостью 68 км, усеянная очаровательными курортными городками и мягким песком.",
    feature_two: "",
    feature_three: "",
    feature_four: "",
    feature_five: "",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "croatia",
    name: 'Хорватия',
    name_two: 'Хорватию',
    flagUrl: '/images/Flags/croatia.svg',
    backgroundImgUrl: '/images/countries/Croatia.jpg',
    pageUrl: '/visa/croatia',
    feature_one: "Возможность посетить другие страны Евросоюза. Хорватия выдаёт шенгенские визы, благодаря чему не придётся оформлять дополнительные документы.",
    feature_two: "Отсутствие проверок при пересечении границы с другими странами Шенгенского соглашения. Например, можно без проблем улететь из Хорватии в Париж или в Амстердам.",
    feature_three: "Упрощённый режим оформления туристической мультивизы. В 2024 году все граждане Российской Федерации могут получить хорватские туристические мультивизы на полгода, благодаря которым находиться на территории страны можно до 90 дней.",
    feature_four: "Возможность въехать в Хорватию по действующей национальной визе. Это возможно, пока не закончится срок её действия.",
    feature_five: "",
    feature_six:"",
    feature_seven:"",
  },
  { 
    nameof: "czech",
    name: 'Чехия',
    name_two: 'Чехию',
    flagUrl: '/images/Flags/czech.svg',
    backgroundImgUrl: '/images/countries/Czechia.jpg',
    pageUrl: '/visa/czech',
    feature_one: "Возможность пребывания в Чехии для туризма, учёбы, работы, посещения родственников или участия в культурных и деловых мероприятиях.",
    feature_two: "Свободное перемещение по странам Шенгенской зоны, так как Чехия является её участником, что позволяет путешествовать без дополнительных визовых формальностей.",
    feature_three: "Простота подачи заявления на визу через консульства и визовые центры, с возможностью предварительной записи и отслеживания статуса заявки.",
    feature_four: "Возможность получения национальной визы для длительного пребывания с целью обучения в университетах, работы или ведения бизнеса в Чехии.",
    feature_five: "Богатая культурная и историческая атмосфера Чехии делает её популярным выбором для студентов, профессионалов и туристов.",
    feature_six:"",
    feature_seven:"",

  },
  {
    nameof: "sweden",
    name: 'Швеция',
    name_two: 'Швецию',
    flagUrl: '/images/Flags/sweden.svg',
    backgroundImgUrl: '/images/countries/Sweden.jpg',
    pageUrl: '/visa/sweden',
    feature_one: "Возможность пребывания в Швеции для туризма, учёбы, работы, посещения родственников или участия в культурных и деловых мероприятиях.",
    feature_two: "Свободное перемещение по странам Шенгенской зоны, так как Швеция является её участником, что позволяет путешествовать без дополнительных визовых формальностей.",
    feature_three: "Простота подачи заявления на визу через консульства и визовые центры, а также возможность использования электронных сервисов для оформления.",
    feature_four: "Возможность получения национальной визы для длительного пребывания в Швеции с целью учёбы, работы или ведения бизнеса.",
    feature_five: "Высокий уровень жизни и качественное социальное обеспечение делают Швецию привлекательным местом для долгосрочного проживания.",
    feature_six: "",
    feature_seven: ""
},
{
  nameof: "switzerland",
  name: 'Швейцария',
  name_two: 'Швейцарию',
  flagUrl: '/images/Flags/switzerland.svg',
  backgroundImgUrl: '/images/countries/Switzerland.jpg',
  pageUrl: '/visa/switzerland',
  feature_one: "Возможность пребывания в Швейцарии для туризма, учёбы, работы, посещения родственников или участия в международных конференциях и культурных мероприятиях.",
  feature_two: "Свободное перемещение по странам Шенгенской зоны благодаря участию Швейцарии в Шенгенском соглашении, что делает путешествия по Европе удобными.",
  feature_three: "Простота оформления визы через консульства, визовые центры и электронные сервисы, что обеспечивает прозрачность и удобство процесса.",
  feature_four: "Возможность получения национальной визы для долгосрочного пребывания с целью учёбы, работы или открытия бизнеса в Швейцарии.",
  feature_five: "Высокий уровень жизни и стабильная экономика делают Швейцарию привлекательным местом для иммиграции и инвестиций.",
  feature_six: "",
  feature_seven: ""
},
{
  nameof: "estonia",
  name: 'Эстония',
  name_two: 'Эстонию',
  flagUrl: '/images/Flags/estonia.svg',
  backgroundImgUrl: '/images/countries/Estonia.jpg',
  pageUrl: '/visa/estonia',
  feature_one: "Возможность пребывания в Эстонии для туризма, учёбы, работы, посещения родственников или участия в культурных и деловых мероприятиях.",
  feature_two: "Свободное перемещение по странам Шенгенской зоны, так как Эстония является её участником, что позволяет путешествовать без дополнительных визовых формальностей.",
  feature_three: "Эстония предлагает упрощённый процесс подачи документов на визу с использованием электронных систем и сервисов.",
  feature_four: "Возможность получения национальной визы для длительного пребывания в Эстонии с целью учёбы, работы или ведения бизнеса.",
  feature_five: "Эстония известна своей цифровой инфраструктурой и инновационными подходами, что делает её идеальным местом для жизни и работы в современных условиях.",
  feature_six: "",
  feature_seven: ""
}
];
  
  export const AmericaCountries: CountryData[] = [
    { 
      nameof: "usa",
      name: 'США',
      name_two: 'США',
      flagUrl: '/images/Flags/usa.svg',
      backgroundImgUrl: '/images/countries/USA.jpg',
      pageUrl: '/visa_page/america/usa',
      feature_one:"Возможность посещать государства-подписанты Шенгенского соглашения. Это расширяет возможности для туризма, ведения бизнеса и поездок в личных целях.",
      feature_two:"Доступ к получению разрешения на длительное проживание на территории стран-участников. Национальная виза позволяет въехать в Болгарию для дальнейшего оформления вида на жительство (ВНЖ).",
      feature_three:"Возможность путешествовать в пределах Шенгенской зоны до 90 дней в течение полугода (если не применимы персональные ограничения к конкретному иностранцу).",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
    { 
      nameof: "canada",
      name: 'Канада',
      name_two: 'Канаду',
      flagUrl: '/images/Flags/canada.svg',
      backgroundImgUrl: '/images/countries/Canada.jpg',
      pageUrl: '/visa_page/america/canada',
      feature_one:"Возможность посещать государства-подписанты Шенгенского соглашения. Это расширяет возможности для туризма, ведения бизнеса и поездок в личных целях.",
      feature_two:"Доступ к получению разрешения на длительное проживание на территории стран-участников. Национальная виза позволяет въехать в Болгарию для дальнейшего оформления вида на жительство (ВНЖ).",
      feature_three:"Возможность путешествовать в пределах Шенгенской зоны до 90 дней в течение полугода (если не применимы персональные ограничения к конкретному иностранцу).",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
  ];
  
  export const asiaCountries: CountryData[] = [
    { 
      nameof: "japan",
      name: 'Япония',
      name_two: 'Японию',
      flagUrl: '/images/Flags/japan.svg',
      backgroundImgUrl: '/images/japan.jpg',
      pageUrl: '/visa-asia/japan',
      feature_one:"Собираетесь в страну восходящего солнца? Япония манит своими уникальными традициями, современными технологиями и незабываемыми видами и периодами цветения прекрасной сакуры… Мы сделаем процесс получения визы лёгким и быстрым.",
      feature_two:"25 долларов США",
      feature_three:"4–7 рабочих дней.",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
    { 
      nameof: "china",
      name: 'Китай',
      name_two: 'Китай',
      flagUrl: '/images/Flags/china.svg',
      backgroundImgUrl: '/images/countries/China.jpg',
      pageUrl: '/visa-asia/china',
      feature_one:"Планируете поездку в Китай? Мы поможем оформить визу быстро и без лишних хлопот. Независимо от цели визита — бизнес, туризм или обучение — мы позаботимся обо всех документах и избавим вас от бюрократических трудностей.",
      feature_two:" От 60 до 90 долларов США (в зависимости от типа визы).  ",
      feature_three:"5–7 рабочих дней.  ",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
    { 
      nameof: "indonesia",
      name: 'Индонезия',
      name_two: 'Индонезию',
      flagUrl: '/images/Flags/indonesia.svg',
      backgroundImgUrl: '/images/countries/Indonesia.jpg',
      pageUrl: '/visa-asia/indonesia',
      feature_one:"Мечтаете о пляжах Бали, вулканах Явы и культурных сокровищах Суматры? Мы сделаем оформление визы простым и понятным.",
      feature_two:"50 долларов США.",
      feature_three:"3–5 рабочих дней.",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
    { 
      nameof: "south-korea",
      name: 'Южная Корея',
      name_two: 'Южную Корею',
      flagUrl: '/images/Flags/south-korea.svg',
      backgroundImgUrl: '/images/countries/south-korea.jpg',
      pageUrl: '/visa-asia/south-korea',
      feature_one:" это сочетание традиций и современной жизни. Мы поможем вам получить визу без лишних сложностей.",
      feature_two:"От 30 долларов США.",
      feature_three:"5–7 рабочих дней.",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
    { 
      nameof: "Qatar",
      name: 'Катар',
      name_two: 'Катар',
      flagUrl: '/images/Flags/qatar.svg',
      backgroundImgUrl: '/images/countries/Qatar.jpg',
      pageUrl: '/visa-asia/qatar',
      feature_one:" — страна роскоши, футуристической архитектуры и захватывающих пустынных пейзажей. Хотите насладиться сервисом мирового уровня? Мы упростим процесс получения визы.",
      feature_two:"28 долларов США.",
      feature_three:"2–5 рабочих дней.",
      feature_four:"Лояльное отношение Болгарии к российским туристам. Страна одна из немногих ЕС, которая в 90% одобряет заявки и не затягивает сроки выдачи визы.",
      feature_five:"",
      feature_six:"",
      feature_seven:"",
    },
  ];