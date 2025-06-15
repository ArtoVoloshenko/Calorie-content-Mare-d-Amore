new Vue({
  el: '#app',
  data() {
    return {
      menuCategories: [
        {
          name: 'Завтраки',
          items:   [
    {
      "номер": "16",
      "nazvanie_blyuda": "Блинчики с творожным муссом и домашним вареньем",
      "vykhod_blyuda": 0.186,
      "zhiry": 21,
      "belki": 10,
      "uglevody": 36,
      "kcal": 380,
      "kJ": 1590,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "90",
      "nazvanie_blyuda": "Омлет",
      "vykhod_blyuda": 0.2,
      "zhiry": 19,
      "belki": 18,
      "uglevody": 4.5,
      "kcal": 260,
      "kJ": 1080,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "96",
      "nazvanie_blyuda": "Панкейки",
      "vykhod_blyuda": 0.403,
      "zhiry": 14,
      "belki": 17,
      "uglevody": 99,
      "kcal": 590,
      "kJ": 2460,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "177",
      "nazvanie_blyuda": "Яйцо 1шт",
      "vykhod_blyuda": 0.04,
      "zhiry": 4.5,
      "belki": 5,
      "uglevody": 0.3,
      "kcal": 60,
      "kJ": 250,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "178",
      "nazvanie_blyuda": "Яйцо пашот с драниками из цукини",
      "vykhod_blyuda": 0.2631,
      "zhiry": 33,
      "belki": 24,
      "uglevody": 19,
      "kcal": 470,
      "kJ": 1950,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "176",
      "nazvanie_blyuda": "Яичница",
      "vykhod_blyuda": 0.08,
      "zhiry": 8.5,
      "belki": 10,
      "uglevody": 0.5,
      "kcal": 120,
      "kJ": 510,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "179",
      "nazvanie_blyuda": "Яйцо перепелиное",
      "vykhod_blyuda": 0.02,
      "zhiry": 2.5,
      "belki": 2.5,
      "uglevody": 0.1,
      "kcal": 35,
      "kJ": 140,
      "description": "",
      "oboznachenie": ""
    }
  ]
        },
        {
          name: 'Холодные закуски',
          items:   [
     
    {
      "номер": "3",
      "nazvanie_blyuda": "Антипасти из маслин",
      "vykhod_blyuda": 0.1341,
      "zhiry": 22,
      "belki": 2,
      "uglevody": 2.5,
      "kcal": 220,
      "kJ": 900,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "5",
      "nazvanie_blyuda": "Ассорти европейский сыров",
      "vykhod_blyuda": 0.22,
      "zhiry": 58,
      "belki": 40,
      "uglevody": 29,
      "kcal": 800,
      "kJ": 3350,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "6",
      "nazvanie_blyuda": "Ассорти местных сыров",
      "vykhod_blyuda": 0.231,
      "zhiry": 48,
      "belki": 50,
      "uglevody": 32,
      "kcal": 760,
      "kJ": 3170,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "7",
      "nazvanie_blyuda": "Ассорти морепродуктов",
      "vykhod_blyuda": 0.79,
      "zhiry": 89,
      "belki": 119,
      "uglevody": 18,
      "kcal": 1350,
      "kJ": 5650,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "8",
      "nazvanie_blyuda": "Ассорти мясных деликатечсов",
      "vykhod_blyuda": 0.1145,
      "zhiry": 37,
      "belki": 23,
      "uglevody": 0.2,
      "kcal": 420,
      "kJ": 1770,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "9",
      "nazvanie_blyuda": "Ассорти сезонных овощей",
      "vykhod_blyuda": 0.51,
      "zhiry": 8.5,
      "belki": 6.5,
      "uglevody": 22,
      "kcal": 190,
      "kJ": 800,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "10",
      "nazvanie_blyuda": "банан 50г",
      "vykhod_blyuda": 0.05,
      "zhiry": 0.2,
      "belki": 0.5,
      "uglevody": 10,
      "kcal": 45,
      "kJ": 180,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "11",
      "nazvanie_blyuda": "Баноффи с грушей",
      "vykhod_blyuda": 0.16,
      "zhiry": 40,
      "belki": 6,
      "uglevody": 45,
      "kcal": 560,
      "kJ": 2350,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "23",
      "nazvanie_blyuda": "Брусничный",
      "vykhod_blyuda": 0.05,
      "zhiry": 0.1,
      "belki": 0.2,
      "uglevody": 2,
      "kcal": 10,
      "kJ": 45,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "28",
      "nazvanie_blyuda": "варенье домашнее 50г",
      "vykhod_blyuda": 0.05,
      "zhiry": 0.1,
      "belki": 0.2,
      "uglevody": 37,
      "kcal": 150,
      "kJ": 620,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "29",
      "nazvanie_blyuda": "Варенье фейхоа 50 г",
      "vykhod_blyuda": 0.05,
      "zhiry": 0.1,
      "belki": 0.2,
      "uglevody": 37,
      "kcal": 150,
      "kJ": 620,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "175",
      "nazvanie_blyuda": "Ягодное ассорти",
      "vykhod_blyuda": 0.15,
      "zhiry": 0.5,
      "belki": 1.5,
      "uglevody": 12,
      "kcal": 55,
      "kJ": 240,
      "description": "",
      "oboznachenie": ""
    }
  
  ]
        },
        
        {
          name: 'Завтраки',
          items:   [
    {
      "номер": "16",
      "nazvanie_blyuda": "Блинчики с творожным муссом и домашним вареньем",
      "vykhod_blyuda": 0.186,
      "zhiry": 21,
      "belki": 10,
      "uglevody": 36,
      "kcal": 380,
      "kJ": 1590,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "90",
      "nazvanie_blyuda": "Омлет",
      "vykhod_blyuda": 0.2,
      "zhiry": 19,
      "belki": 18,
      "uglevody": 4.5,
      "kcal": 260,
      "kJ": 1080,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "96",
      "nazvanie_blyuda": "Панкейки",
      "vykhod_blyuda": 0.403,
      "zhiry": 14,
      "belki": 17,
      "uglevody": 99,
      "kcal": 590,
      "kJ": 2460,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "177",
      "nazvanie_blyuda": "Яйцо 1шт",
      "vykhod_blyuda": 0.04,
      "zhiry": 4.5,
      "belki": 5,
      "uglevody": 0.3,
      "kcal": 60,
      "kJ": 250,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "178",
      "nazvanie_blyuda": "Яйцо пашот с драниками из цукини",
      "vykhod_blyuda": 0.2631,
      "zhiry": 33,
      "belki": 24,
      "uglevody": 19,
      "kcal": 470,
      "kJ": 1950,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "176",
      "nazvanie_blyuda": "Яичница",
      "vykhod_blyuda": 0.08,
      "zhiry": 8.5,
      "belki": 10,
      "uglevody": 0.5,
      "kcal": 120,
      "kJ": 510,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "179",
      "nazvanie_blyuda": "Яйцо перепелиное",
      "vykhod_blyuda": 0.02,
      "zhiry": 2.5,
      "belki": 2.5,
      "uglevody": 0.1,
      "kcal": 35,
      "kJ": 140,
      "description": "",
      "oboznachenie": ""
    }
  ]
        },
        {
          name: 'Холодные закуски',
          items:   [
     
    {
      "номер": "12",
      "nazvanie_blyuda": "Барабуля жареная",
      "vykhod_blyuda": 1,
      "zhiry": 38,
      "belki": 194,
      "uglevody": 0,
      "kcal": 1120,
      "kJ": 4680,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "13",
      "nazvanie_blyuda": "Барбекю",
      "vykhod_blyuda": 0.05,
      "zhiry": 1.5,
      "belki": 0.5,
      "uglevody": 6.5,
      "kcal": 40,
      "kJ": 170,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "14",
      "nazvanie_blyuda": "Бекон 50 гр",
      "vykhod_blyuda": 0.05,
      "zhiry": 23,
      "belki": 12,
      "uglevody": 0,
      "kcal": 250,
      "kJ": 1040,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "15",
      "nazvanie_blyuda": "Бефстроганов с картофельным пюре",
      "vykhod_blyuda": 0.3528,
      "zhiry": 42,
      "belki": 17,
      "uglevody": 19,
      "kcal": 530,
      "kJ": 2200,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "16",
      "nazvanie_blyuda": "Блинчики с творожным муссом и домашним вареньем",
      "vykhod_blyuda": 0.186,
      "zhiry": 21,
      "belki": 10,
      "uglevody": 36,
      "kcal": 380,
      "kJ": 1590,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "17",
      "nazvanie_blyuda": "Соус Блю чиз",
      "vykhod_blyuda": 0.05,
      "zhiry": 13,
      "belki": 2,
      "uglevody": 2,
      "kcal": 130,
      "kJ": 560,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "19",
      "nazvanie_blyuda": "Бриошь с мясом краба и соусом голандез",
      "vykhod_blyuda": 0.354,
      "zhiry": 67,
      "belki": 30,
      "uglevody": 42,
      "kcal": 890,
      "kJ": 3740,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "20",
      "nazvanie_blyuda": "Брускетта с креветками конфи, авокадо и острым манго",
      "vykhod_blyuda": 0.23,
      "zhiry": 33,
      "belki": 14,
      "uglevody": 31,
      "kcal": 480,
      "kJ": 2030,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "21",
      "nazvanie_blyuda": "Брускетта с лососем и рикоттой",
      "vykhod_blyuda": 0.215,
      "zhiry": 23,
      "belki": 19,
      "uglevody": 26,
      "kcal": 380,
      "kJ": 1600,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "22",
      "nazvanie_blyuda": "Брускетта с пармой",
      "vykhod_blyuda": 0.217,
      "zhiry": 17,
      "belki": 9.5,
      "uglevody": 41,
      "kcal": 360,
      "kJ": 1500,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "42",
      "nazvanie_blyuda": "Кальмар на гриле с запеченным бататом",
      "vykhod_blyuda": 0.29,
      "zhiry": 31,
      "belki": 29,
      "uglevody": 4,
      "kcal": 410,
      "kJ": 1730,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "41",
      "nazvanie_blyuda": "Жареный камамбер с брусничным вареньем",
      "vykhod_blyuda": 0.232,
      "zhiry": 34,
      "belki": 27,
      "uglevody": 4.5,
      "kcal": 430,
      "kJ": 1800,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "37",
      "nazvanie_blyuda": "Домашний кетчуп",
      "vykhod_blyuda": 0.05,
      "zhiry": 0.3,
      "belki": 1,
      "uglevody": 19,
      "kcal": 85,
      "kJ": 350,
      "description": "",
      "oboznachenie": ""
    }
  ],
  name: 'Холодные закуски',
          items: 'Горячие закуски'
  [
    {
      "номер": "4",
      "nazvanie_blyuda": "Ассорти вяленой рыбы",
      "vykhod_blyuda": 0.75,
      "zhiry": 44,
      "belki": 131,
      "uglevody": 0,
      "kcal": 920,
      "kJ": 3860,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "12",
      "nazvanie_blyuda": "Барабуля жареная",
      "vykhod_blyuda": 1,
      "zhiry": 38,
      "belki": 194,
      "uglevody": 0,
      "kcal": 1120,
      "kJ": 4680,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "15",
      "nazvanie_blyuda": "Бефстроганов с картофельным пюре",
      "vykhod_blyuda": 0.3528,
      "zhiry": 42,
      "belki": 17,
      "uglevody": 19,
      "kcal": 530,
      "kJ": 2200,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "18",
      "nazvanie_blyuda": "Борщ с салом и зеленью",
      "vykhod_blyuda": 0.35,
      "zhiry": 50,
      "belki": 24,
      "uglevody": 61,
      "kcal": 780,
      "kJ": 3280,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "31",
      "nazvanie_blyuda": "Говяжьи щечки с пюре из батата",
      "vykhod_blyuda": 0.4,
      "zhiry": 17,
      "belki": 27,
      "uglevody": 4,
      "kcal": 270,
      "kJ": 1140,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "39",
      "nazvanie_blyuda": "Дорада",
      "vykhod_blyuda": 1,
      "zhiry": 171,
      "belki": 254,
      "uglevody": 9,
      "kcal": 2590,
      "kJ": 10830,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "44",
      "nazvanie_blyuda": "Каре баранины вес",
      "vykhod_blyuda": 1,
      "zhiry": 199,
      "belki": 265,
      "uglevody": 282,
      "kcal": 3970,
      "kJ": 16620,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "45",
      "nazvanie_blyuda": "Карпаччо из печеной свеклы",
      "vykhod_blyuda": 0.32,
      "zhiry": 14,
      "belki": 11,
      "uglevody": 58,
      "kcal": 410,
      "kJ": 1710,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "46",
      "nazvanie_blyuda": "Картофель жареный с луком",
      "vykhod_blyuda": 0.32,
      "zhiry": 15,
      "belki": 7.5,
      "uglevody": 67,
      "kcal": 430,
      "kJ": 1790,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "47",
      "nazvanie_blyuda": "Картофель отварной с маслом и зеленью",
      "vykhod_blyuda": 0.212,
      "zhiry": 6.5,
      "belki": 3.5,
      "uglevody": 35,
      "kcal": 210,
      "kJ": 890,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "48",
      "nazvanie_blyuda": "Картофель с салом",
      "vykhod_blyuda": 0.08,
      "zhiry": 7,
      "belki": 1.5,
      "uglevody": 12,
      "kcal": 120,
      "kJ": 480,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "49",
      "nazvanie_blyuda": "Картофель фри",
      "vykhod_blyuda": 0.15,
      "zhiry": 17,
      "belki": 2.5,
      "uglevody": 24,
      "kcal": 260,
      "kJ": 1090,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "50",
      "nazvanie_blyuda": "Картофель черри запеченный с розмарином",
      "vykhod_blyuda": 0.14,
      "zhiry": 0.1,
      "belki": 2.5,
      "uglevody": 24,
      "kcal": 110,
      "kJ": 450,
      "description": "",
      "oboznachanие": ""
    },
    {
      "номер": "51",
      "nazvanie_blyuda": "Каша пшеничная с томленой прянной грушей",
      "vykhod_blyuda": 0.398,
      "zhiry": 15,
      "belki": 5,
      "uglevody": 32,
      "kcal": 280,
      "kJ": 1180,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "52",
      "nazvanie_blyuda": "Каша рисовая на воде",
      "vykhod_blyuda": 0.15,
      "zhiry": 0,
      "belki": 0,
      "uglevody": 0,
      "kcal": 1,
      "kJ": 1,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "53",
      "nazvanie_blyuda": "Каша рисовая на молоке",
      "vykhod_blyuda": 0.32,
      "zhiry": 13,
      "belki": 15,
      "uglevody": 119,
      "kcal": 650,
      "kJ": 2710,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "106",
      "nazvanie_blyuda": "Пельмени с говядиной и свининой",
      "vykhod_blyuda": 0.32,
      "zhiry": 34,
      "belki": 21,
      "uglevody": 64,
      "kcal": 650,
      "kJ": 2710,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "107",
      "nazvanie_blyuda": "Пюре картофельное",
      "vykhod_blyuda": 0.15,
      "zhiry": 16,
      "belki": 2.5,
      "uglevody": 17,
      "kcal": 220,
      "kJ": 940,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "110",
      "nazvanie_blyuda": "Ризотто de Mare",
      "vykhod_blyuda": 0.335,
      "zhiry": 3.5,
      "belki": 33,
      "uglevody": 107,
      "kcal": 590,
      "kJ": 2470,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "113",
      "nazvanie_blyuda": "Салат с бататом и креветкой",
      "vykhod_blyuda": 0.27,
      "zhiry": 26,
      "belki": 13,
      "uglevody": 4,
      "kcal": 300,
      "kJ": 1260,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "114",
      "nazvanie_blyuda": "Салат с кальмаром и молодым картофелем",
      "vykhod_blyuda": 0.26,
      "zhiry": 12,
      "belki": 33,
      "uglevody": 29,
      "kcal": 350,
      "kJ": 1480,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "119",
      "nazvanie_blyuda": "Сельдь с маринованным луком и отварным картофелем",
      "vykhod_blyuda": 0.4125,
      "zhiry": 39,
      "belki": 23,
      "uglevody": 39,
      "kcal": 600,
      "kJ": 2500,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "121",
      "nazvanie_blyuda": "Сибас",
      "vykhod_blyuda": 1,
      "zhiry": 300,
      "belki": 302,
      "uglevody": 55,
      "kcal": 4130,
      "kJ": 17270,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "138",
      "nazvanie_blyuda": "Стейк из лосося",
      "vykhod_blyuda": 1,
      "zhiry": 331,
      "belki": 295,
      "uglevody": 10,
      "kcal": 4190,
      "kJ": 17540,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "139",
      "nazvanie_blyuda": "Стейк из тунца",
      "vykhod_blyuda": 1,
      "zhiry": 8.5,
      "belki": 229,
      "uglevody": 22,
      "kcal": 1080,
      "kJ": 4520,
      "description": "",
      "oboznachenie": ""
    },
    {
      "номер": "152",
      "nazvanie_blyuda": "Тушки кальмаров",
      "vykhod_blyuda": 1,
      "zhiry": 25,
      "belki": 190,
      "uglevody": 18,
      "kcal": 1060,
      "kJ": 4420,
      "description": "",
      "oboznachenie": ""
    }
  
  ]
        },




      ],
      cart: [],
      observers: [],
      maxItems: 12 // максимум блюд на мобильных
    };
  },
  computed: {
    totalBelki() {
      return this.cart.reduce((sum, item) => sum + item.belki * item.count, 0);
    },
    totalZhiry() {
      return this.cart.reduce((sum, item) => sum + item.zhiry * item.count, 0);
    },
    totalUglevody() {
      return this.cart.reduce((sum, item) => sum + item.uglevody * item.count, 0);
    },
    totalKJ() {
      return this.cart.reduce((sum, item) => sum + item.kJ * item.count, 0);
    }
  },
  methods: {
    // Убираем фильтр, показываем все блюда
    filteredItems(items) {
      // Ограничение по максимуму на мобильных
      if (window.innerWidth <= 768) {
        return items.slice(0, this.maxItems);
      }
      return items;
    },
    getCartItem(item) {
      return this.cart.find(ci => ci.nazvanie_blyuda === item.nazvanie_blyuda);
    },
    addToCart(item) {
      const existingIndex = this.cart.findIndex(ci => ci.nazvanie_blyuda === item.nazvanie_blyuda);
      if (existingIndex !== -1) {
        this.cart[existingIndex].count++;
      } else {
        this.cart.push({ ...item, count: 1 });
      }
    },
    removeFromCart(item) {
      const index = this.cart.findIndex(ci => ci.nazvanie_blyuda === item.nazvanie_blyuda);
      if (index !== -1) {
        if (this.cart[index].count > 1) {
          this.cart[index].count--;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },
    clearCart() {
      this.cart = [];
    },
    handleParallax() {
      const scrollPosition = window.scrollY;
      this.observers.forEach(obs => {
        if (obs.element) {
          obs.element.style.transform = `translateY(${scrollPosition * obs.speed}px)`;
        }
      });
    },
    setupObservers() {
      this.observers = [];
      this.$nextTick(() => {
        document.querySelectorAll('.menu-item').forEach(el => {
          const speed = parseFloat(el.dataset.speed) || 0.2;
          this.observers.push({ element: el, speed: speed });
        });
        window.addEventListener('scroll', this.handleParallax);
      });
    },
    // Для плавного появления блюд — добавляем класс при создании
    observeItems() {
      this.$nextTick(() => {
        document.querySelectorAll('.menu-item').forEach(el => {
          el.classList.add('appear');
        });
      });
    }
  },
});