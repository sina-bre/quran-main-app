const quranPages = [
  { start: 0, end: 0 },
  {
    start: 1,
    end: 7,
  },
  {
    start: 8,
    end: 12,
  },
  {
    start: 13,
    end: 23,
  },
  {
    start: 24,
    end: 31,
  },
  {
    start: 32,
    end: 36,
  },
  {
    start: 37,
    end: 44,
  },
  {
    start: 45,
    end: 55,
  },
  {
    start: 56,
    end: 64,
  },
  {
    start: 65,
    end: 68,
  },
  {
    start: 69,
    end: 76,
  },
  {
    start: 77,
    end: 83,
  },
  {
    start: 84,
    end: 90,
  },
  {
    start: 91,
    end: 95,
  },
  {
    start: 96,
    end: 100,
  },
  {
    start: 101,
    end: 108,
  },
  {
    start: 109,
    end: 112,
  },
  {
    start: 113,
    end: 119,
  },
  {
    start: 120,
    end: 126,
  },
  {
    start: 127,
    end: 133,
  },
  {
    start: 134,
    end: 141,
  },
  {
    start: 142,
    end: 148,
  },
  {
    start: 149,
    end: 152,
  },
  {
    start: 153,
    end: 160,
  },
  {
    start: 161,
    end: 170,
  },
  {
    start: 171,
    end: 176,
  },
  {
    start: 177,
    end: 183,
  },
  {
    start: 184,
    end: 188,
  },
  {
    start: 189,
    end: 193,
  },
  {
    start: 194,
    end: 197,
  },
  {
    start: 198,
    end: 203,
  },
  {
    start: 204,
    end: 209,
  },
  {
    start: 210,
    end: 217,
  },
  {
    start: 218,
    end: 222,
  },
  {
    start: 223,
    end: 226,
  },
  {
    start: 227,
    end: 231,
  },
  {
    start: 232,
    end: 237,
  },
  {
    start: 238,
    end: 240,
  },
  {
    start: 241,
    end: 244,
  },
  {
    start: 245,
    end: 252,
  },
  {
    start: 253,
    end: 255,
  },
  {
    start: 256,
    end: 259,
  },
  {
    start: 260,
    end: 263,
  },
  {
    start: 264,
    end: 266,
  },
  {
    start: 267,
    end: 271,
  },
  {
    start: 272,
    end: 276,
  },
  {
    start: 277,
    end: 281,
  },
  {
    start: 282,
    end: 288,
  },
  {
    start: 289,
    end: 289,
  },
  {
    start: 290,
    end: 293,
  },
  {
    start: 294,
    end: 302,
  },
  {
    start: 303,
    end: 308,
  },
  {
    start: 309,
    end: 315,
  },
  {
    start: 316,
    end: 322,
  },
  {
    start: 323,
    end: 330,
  },
  {
    start: 331,
    end: 338,
  },
  {
    start: 339,
    end: 345,
  },
  {
    start: 346,
    end: 354,
  },
  {
    start: 355,
    end: 363,
  },
  {
    start: 364,
    end: 370,
  },
  {
    start: 371,
    end: 376,
  },
  {
    start: 377,
    end: 384,
  },
  {
    start: 385,
    end: 393,
  },
  {
    start: 394,
    end: 401,
  },
  {
    start: 402,
    end: 408,
  },
  {
    start: 409,
    end: 414,
  },
  {
    start: 415,
    end: 425,
  },
  {
    start: 426,
    end: 433,
  },
  {
    start: 434,
    end: 441,
  },
  {
    start: 442,
    end: 446,
  },
  {
    start: 447,
    end: 450,
  },
  {
    start: 451,
    end: 458,
  },
  {
    start: 459,
    end: 466,
  },
  {
    start: 467,
    end: 473,
  },
  {
    start: 474,
    end: 479,
  },
  {
    start: 480,
    end: 487,
  },
  {
    start: 488,
    end: 493,
  },
  {
    start: 494,
    end: 499,
  },
  {
    start: 500,
    end: 504,
  },
  {
    start: 505,
    end: 507,
  },
  {
    start: 508,
    end: 512,
  },
  {
    start: 513,
    end: 516,
  },
  {
    start: 517,
    end: 519,
  },
  {
    start: 520,
    end: 526,
  },
  {
    start: 527,
    end: 530,
  },
  {
    start: 531,
    end: 537,
  },
  {
    start: 538,
    end: 544,
  },
  {
    start: 545,
    end: 552,
  },
  {
    start: 553,
    end: 558,
  },
  {
    start: 559,
    end: 567,
  },
  {
    start: 568,
    end: 572,
  },
  {
    start: 573,
    end: 579,
  },
  {
    start: 580,
    end: 584,
  },
  {
    start: 585,
    end: 587,
  },
  {
    start: 588,
    end: 594,
  },
  {
    start: 595,
    end: 598,
  },
  {
    start: 599,
    end: 606,
  },
  {
    start: 607,
    end: 614,
  },
  {
    start: 615,
    end: 620,
  },
  {
    start: 621,
    end: 627,
  },
  {
    start: 628,
    end: 633,
  },
  {
    start: 634,
    end: 640,
  },
  {
    start: 641,
    end: 647,
  },
  {
    start: 648,
    end: 655,
  },
  {
    start: 656,
    end: 663,
  },
  {
    start: 664,
    end: 668,
  },
  {
    start: 669,
    end: 671,
  },
  {
    start: 672,
    end: 674,
  },
  {
    start: 675,
    end: 678,
  },
  {
    start: 679,
    end: 682,
  },
  {
    start: 683,
    end: 686,
  },
  {
    start: 687,
    end: 692,
  },
  {
    start: 693,
    end: 700,
  },
  {
    start: 701,
    end: 705,
  },
  {
    start: 706,
    end: 710,
  },
  {
    start: 711,
    end: 714,
  },
  {
    start: 715,
    end: 719,
  },
  {
    start: 720,
    end: 726,
  },
  {
    start: 727,
    end: 733,
  },
  {
    start: 734,
    end: 739,
  },
  {
    start: 740,
    end: 745,
  },
  {
    start: 746,
    end: 751,
  },
  {
    start: 752,
    end: 758,
  },
  {
    start: 759,
    end: 764,
  },
  {
    start: 765,
    end: 772,
  },
  {
    start: 773,
    end: 777,
  },
  {
    start: 778,
    end: 782,
  },
  {
    start: 783,
    end: 789,
  },
  {
    start: 790,
    end: 797,
  },
  {
    start: 798,
    end: 807,
  },
  {
    start: 808,
    end: 816,
  },
  {
    start: 817,
    end: 824,
  },
  {
    start: 825,
    end: 833,
  },
  {
    start: 834,
    end: 841,
  },
  {
    start: 842,
    end: 848,
  },
  {
    start: 849,
    end: 857,
  },
  {
    start: 858,
    end: 862,
  },
  {
    start: 863,
    end: 870,
  },
  {
    start: 871,
    end: 879,
  },
  {
    start: 880,
    end: 883,
  },
  {
    start: 884,
    end: 890,
  },
  {
    start: 891,
    end: 899,
  },
  {
    start: 900,
    end: 907,
  },
  {
    start: 908,
    end: 913,
  },
  {
    start: 914,
    end: 920,
  },
  {
    start: 921,
    end: 926,
  },
  {
    start: 927,
    end: 931,
  },
  {
    start: 932,
    end: 935,
  },
  {
    start: 936,
    end: 940,
  },
  {
    start: 941,
    end: 946,
  },
  {
    start: 947,
    end: 954,
  },
  {
    start: 955,
    end: 965,
  },
  {
    start: 966,
    end: 976,
  },
  {
    start: 977,
    end: 984,
  },
  {
    start: 985,
    end: 991,
  },
  {
    start: 992,
    end: 997,
  },
  {
    start: 998,
    end: 1005,
  },
  {
    start: 1006,
    end: 1011,
  },
  {
    start: 1012,
    end: 1021,
  },
  {
    start: 1022,
    end: 1027,
  },
  {
    start: 1028,
    end: 1035,
  },
  {
    start: 1036,
    end: 1041,
  },
  {
    start: 1042,
    end: 1049,
  },
  {
    start: 1050,
    end: 1058,
  },
  {
    start: 1059,
    end: 1074,
  },
  {
    start: 1075,
    end: 1084,
  },
  {
    start: 1085,
    end: 1091,
  },
  {
    start: 1092,
    end: 1097,
  },
  {
    start: 1098,
    end: 1103,
  },
  {
    start: 1104,
    end: 1109,
  },
  {
    start: 1110,
    end: 1113,
  },
  {
    start: 1114,
    end: 1117,
  },
  {
    start: 1118,
    end: 1124,
  },
  {
    start: 1125,
    end: 1132,
  },
  {
    start: 1133,
    end: 1141,
  },
  {
    start: 1142,
    end: 1149,
  },
  {
    start: 1150,
    end: 1160,
  },
  {
    start: 1161,
    end: 1168,
  },
  {
    start: 1169,
    end: 1176,
  },
  {
    start: 1177,
    end: 1185,
  },
  {
    start: 1186,
    end: 1193,
  },
  {
    start: 1194,
    end: 1200,
  },
  {
    start: 1201,
    end: 1205,
  },
  {
    start: 1206,
    end: 1212,
  },
  {
    start: 1213,
    end: 1221,
  },
  {
    start: 1222,
    end: 1229,
  },
  {
    start: 1230,
    end: 1235,
  },
  {
    start: 1236,
    end: 1241,
  },
  {
    start: 1242,
    end: 1248,
  },
  {
    start: 1249,
    end: 1255,
  },
  {
    start: 1256,
    end: 1261,
  },
  {
    start: 1262,
    end: 1266,
  },
  {
    start: 1267,
    end: 1271,
  },
  {
    start: 1272,
    end: 1275,
  },
  {
    start: 1276,
    end: 1282,
  },
  {
    start: 1283,
    end: 1289,
  },
  {
    start: 1290,
    end: 1296,
  },
  {
    start: 1297,
    end: 1303,
  },
  {
    start: 1304,
    end: 1307,
  },
  {
    start: 1308,
    end: 1314,
  },
  {
    start: 1315,
    end: 1321,
  },
  {
    start: 1322,
    end: 1328,
  },
  {
    start: 1329,
    end: 1334,
  },
  {
    start: 1335,
    end: 1341,
  },
  {
    start: 1342,
    end: 1346,
  },
  {
    start: 1347,
    end: 1352,
  },
  {
    start: 1353,
    end: 1357,
  },
  {
    start: 1358,
    end: 1364,
  },
  {
    start: 1365,
    end: 1370,
  },
  {
    start: 1371,
    end: 1378,
  },
  {
    start: 1379,
    end: 1384,
  },
  {
    start: 1385,
    end: 1389,
  },
  {
    start: 1390,
    end: 1397,
  },
  {
    start: 1398,
    end: 1406,
  },
  {
    start: 1407,
    end: 1417,
  },
  {
    start: 1418,
    end: 1425,
  },
  {
    start: 1426,
    end: 1434,
  },
  {
    start: 1435,
    end: 1442,
  },
  {
    start: 1443,
    end: 1452,
  },
  {
    start: 1453,
    end: 1461,
  },
  {
    start: 1462,
    end: 1470,
  },
  {
    start: 1471,
    end: 1478,
  },
  {
    start: 1479,
    end: 1485,
  },
  {
    start: 1486,
    end: 1492,
  },
  {
    start: 1493,
    end: 1501,
  },
  {
    start: 1502,
    end: 1510,
  },
  {
    start: 1511,
    end: 1518,
  },
  {
    start: 1519,
    end: 1526,
  },
  {
    start: 1527,
    end: 1535,
  },
  {
    start: 1536,
    end: 1544,
  },
  {
    start: 1545,
    end: 1554,
  },
  {
    start: 1555,
    end: 1561,
  },
  {
    start: 1562,
    end: 1570,
  },
  {
    start: 1571,
    end: 1581,
  },
  {
    start: 1582,
    end: 1590,
  },
  {
    start: 1591,
    end: 1600,
  },
  {
    start: 1601,
    end: 1610,
  },
  {
    start: 1611,
    end: 1618,
  },
  {
    start: 1619,
    end: 1626,
  },
  {
    start: 1627,
    end: 1633,
  },
  {
    start: 1634,
    end: 1639,
  },
  {
    start: 1640,
    end: 1648,
  },
  {
    start: 1649,
    end: 1659,
  },
  {
    start: 1660,
    end: 1665,
  },
  {
    start: 1666,
    end: 1674,
  },
  {
    start: 1675,
    end: 1682,
  },
  {
    start: 1683,
    end: 1691,
  },
  {
    start: 1692,
    end: 1699,
  },
  {
    start: 1700,
    end: 1707,
  },
  {
    start: 1708,
    end: 1712,
  },
  {
    start: 1713,
    end: 1720,
  },
  {
    start: 1721,
    end: 1725,
  },
  {
    start: 1726,
    end: 1735,
  },
  {
    start: 1736,
    end: 1741,
  },
  {
    start: 1742,
    end: 1749,
  },
  {
    start: 1750,
    end: 1755,
  },
  {
    start: 1756,
    end: 1760,
  },
  {
    start: 1761,
    end: 1768,
  },
  {
    start: 1769,
    end: 1774,
  },
  {
    start: 1775,
    end: 1783,
  },
  {
    start: 1784,
    end: 1792,
  },
  {
    start: 1793,
    end: 1802,
  },
  {
    start: 1803,
    end: 1817,
  },
  {
    start: 1818,
    end: 1833,
  },
  {
    start: 1834,
    end: 1853,
  },
  {
    start: 1854,
    end: 1872,
  },
  {
    start: 1873,
    end: 1892,
  },
  {
    start: 1893,
    end: 1907,
  },
  {
    start: 1908,
    end: 1915,
  },
  {
    start: 1916,
    end: 1927,
  },
  {
    start: 1928,
    end: 1935,
  },
  {
    start: 1936,
    end: 1943,
  },
  {
    start: 1944,
    end: 1955,
  },
  {
    start: 1956,
    end: 1965,
  },
  {
    start: 1966,
    end: 1973,
  },
  {
    start: 1974,
    end: 1980,
  },
  {
    start: 1981,
    end: 1988,
  },
  {
    start: 1989,
    end: 1994,
  },
  {
    start: 1995,
    end: 2003,
  },
  {
    start: 2004,
    end: 2011,
  },
  {
    start: 2012,
    end: 2019,
  },
  {
    start: 2020,
    end: 2029,
  },
  {
    start: 2030,
    end: 2036,
  },
  {
    start: 2037,
    end: 2046,
  },
  {
    start: 2047,
    end: 2056,
  },
  {
    start: 2057,
    end: 2067,
  },
  {
    start: 2068,
    end: 2078,
  },
  {
    start: 2079,
    end: 2087,
  },
  {
    start: 2088,
    end: 2095,
  },
  {
    start: 2096,
    end: 2104,
  },
  {
    start: 2105,
    end: 2115,
  },
  {
    start: 2116,
    end: 2125,
  },
  {
    start: 2126,
    end: 2133,
  },
  {
    start: 2134,
    end: 2144,
  },
  {
    start: 2145,
    end: 2155,
  },
  {
    start: 2156,
    end: 2160,
  },
  {
    start: 2161,
    end: 2167,
  },
  {
    start: 2168,
    end: 2174,
  },
  {
    start: 2175,
    end: 2185,
  },
  {
    start: 2186,
    end: 2193,
  },
  {
    start: 2194,
    end: 2201,
  },
  {
    start: 2202,
    end: 2214,
  },
  {
    start: 2215,
    end: 2223,
  },
  {
    start: 2224,
    end: 2237,
  },
  {
    start: 2238,
    end: 2250,
  },
  {
    start: 2251,
    end: 2261,
  },
  {
    start: 2262,
    end: 2275,
  },
  {
    start: 2276,
    end: 2288,
  },
  {
    start: 2289,
    end: 2301,
  },
  {
    start: 2302,
    end: 2314,
  },
  {
    start: 2315,
    end: 2326,
  },
  {
    start: 2327,
    end: 2345,
  },
  {
    start: 2346,
    end: 2360,
  },
  {
    start: 2361,
    end: 2385,
  },
  {
    start: 2386,
    end: 2399,
  },
  {
    start: 2400,
    end: 2412,
  },
  {
    start: 2413,
    end: 2424,
  },
  {
    start: 2425,
    end: 2435,
  },
  {
    start: 2436,
    end: 2446,
  },
  {
    start: 2447,
    end: 2461,
  },
  {
    start: 2462,
    end: 2473,
  },
  {
    start: 2474,
    end: 2483,
  },
  {
    start: 2484,
    end: 2493,
  },
  {
    start: 2494,
    end: 2507,
  },
  {
    start: 2508,
    end: 2518,
  },
  {
    start: 2519,
    end: 2527,
  },
  {
    start: 2528,
    end: 2540,
  },
  {
    start: 2541,
    end: 2555,
  },
  {
    start: 2556,
    end: 2564,
  },
  {
    start: 2565,
    end: 2573,
  },
  {
    start: 2574,
    end: 2584,
  },
  {
    start: 2585,
    end: 2595,
  },
  {
    start: 2596,
    end: 2600,
  },
  {
    start: 2601,
    end: 2610,
  },
  {
    start: 2611,
    end: 2618,
  },
  {
    start: 2619,
    end: 2625,
  },
  {
    start: 2626,
    end: 2633,
  },
  {
    start: 2634,
    end: 2641,
  },
  {
    start: 2642,
    end: 2650,
  },
  {
    start: 2651,
    end: 2659,
  },
  {
    start: 2660,
    end: 2667,
  },
  {
    start: 2668,
    end: 2673,
  },
  {
    start: 2674,
    end: 2690,
  },
  {
    start: 2691,
    end: 2700,
  },
  {
    start: 2701,
    end: 2715,
  },
  {
    start: 2716,
    end: 2732,
  },
  {
    start: 2733,
    end: 2747,
  },
  {
    start: 2748,
    end: 2762,
  },
  {
    start: 2763,
    end: 2777,
  },
  {
    start: 2778,
    end: 2791,
  },
  {
    start: 2792,
    end: 2801,
  },
  {
    start: 2802,
    end: 2811,
  },
  {
    start: 2812,
    end: 2818,
  },
  {
    start: 2819,
    end: 2822,
  },
  {
    start: 2823,
    end: 2827,
  },
  {
    start: 2828,
    end: 2834,
  },
  {
    start: 2835,
    end: 2844,
  },
  {
    start: 2845,
    end: 2849,
  },
  {
    start: 2850,
    end: 2852,
  },
  {
    start: 2853,
    end: 2857,
  },
  {
    start: 2858,
    end: 2866,
  },
  {
    start: 2867,
    end: 2875,
  },
  {
    start: 2876,
    end: 2887,
  },
  {
    start: 2888,
    end: 2898,
  },
  {
    start: 2899,
    end: 2910,
  },
  {
    start: 2911,
    end: 2922,
  },
  {
    start: 2923,
    end: 2932,
  },
  {
    start: 2933,
    end: 2951,
  },
  {
    start: 2952,
    end: 2971,
  },
  {
    start: 2972,
    end: 2992,
  },
  {
    start: 2993,
    end: 3015,
  },
  {
    start: 3016,
    end: 3043,
  },
  {
    start: 3044,
    end: 3068,
  },
  {
    start: 3069,
    end: 3091,
  },
  {
    start: 3092,
    end: 3115,
  },
  {
    start: 3116,
    end: 3138,
  },
  {
    start: 3139,
    end: 3159,
  },
  {
    start: 3160,
    end: 3172,
  },
  {
    start: 3173,
    end: 3181,
  },
  {
    start: 3182,
    end: 3194,
  },
  {
    start: 3195,
    end: 3203,
  },
  {
    start: 3204,
    end: 3214,
  },
  {
    start: 3215,
    end: 3222,
  },
  {
    start: 3223,
    end: 3235,
  },
  {
    start: 3236,
    end: 3247,
  },
  {
    start: 3248,
    end: 3257,
  },
  {
    start: 3258,
    end: 3265,
  },
  {
    start: 3266,
    end: 3273,
  },
  {
    start: 3274,
    end: 3280,
  },
  {
    start: 3281,
    end: 3287,
  },
  {
    start: 3288,
    end: 3295,
  },
  {
    start: 3296,
    end: 3302,
  },
  {
    start: 3303,
    end: 3311,
  },
  {
    start: 3312,
    end: 3322,
  },
  {
    start: 3323,
    end: 3329,
  },
  {
    start: 3330,
    end: 3336,
  },
  {
    start: 3337,
    end: 3346,
  },
  {
    start: 3347,
    end: 3354,
  },
  {
    start: 3355,
    end: 3363,
  },
  {
    start: 3364,
    end: 3370,
  },
  {
    start: 3371,
    end: 3378,
  },
  {
    start: 3379,
    end: 3385,
  },
  {
    start: 3386,
    end: 3392,
  },
  {
    start: 3393,
    end: 3403,
  },
  {
    start: 3404,
    end: 3414,
  },
  {
    start: 3415,
    end: 3424,
  },
  {
    start: 3425,
    end: 3433,
  },
  {
    start: 3434,
    end: 3441,
  },
  {
    start: 3442,
    end: 3450,
  },
  {
    start: 3451,
    end: 3459,
  },
  {
    start: 3460,
    end: 3469,
  },
  {
    start: 3470,
    end: 3480,
  },
  {
    start: 3481,
    end: 3488,
  },
  {
    start: 3489,
    end: 3497,
  },
  {
    start: 3498,
    end: 3503,
  },
  {
    start: 3504,
    end: 3514,
  },
  {
    start: 3515,
    end: 3523,
  },
  {
    start: 3524,
    end: 3533,
  },
  {
    start: 3534,
    end: 3539,
  },
  {
    start: 3540,
    end: 3548,
  },
  {
    start: 3549,
    end: 3555,
  },
  {
    start: 3556,
    end: 3563,
  },
  {
    start: 3564,
    end: 3568,
  },
  {
    start: 3569,
    end: 3576,
  },
  {
    start: 3577,
    end: 3583,
  },
  {
    start: 3584,
    end: 3587,
  },
  {
    start: 3588,
    end: 3595,
  },
  {
    start: 3596,
    end: 3606,
  },
  {
    start: 3607,
    end: 3613,
  },
  {
    start: 3614,
    end: 3620,
  },
  {
    start: 3621,
    end: 3628,
  },
  {
    start: 3629,
    end: 3637,
  },
  {
    start: 3638,
    end: 3645,
  },
  {
    start: 3646,
    end: 3654,
  },
  {
    start: 3655,
    end: 3663,
  },
  {
    start: 3664,
    end: 3671,
  },
  {
    start: 3672,
    end: 3678,
  },
  {
    start: 3679,
    end: 3690,
  },
  {
    start: 3691,
    end: 3698,
  },
  {
    start: 3699,
    end: 3704,
  },
  {
    start: 3705,
    end: 3717,
  },
  {
    start: 3718,
    end: 3732,
  },
  {
    start: 3733,
    end: 3745,
  },
  {
    start: 3746,
    end: 3759,
  },
  {
    start: 3760,
    end: 3775,
  },
  {
    start: 3776,
    end: 3788,
  },
  {
    start: 3789,
    end: 3812,
  },
  {
    start: 3813,
    end: 3839,
  },
  {
    start: 3840,
    end: 3864,
  },
  {
    start: 3865,
    end: 3890,
  },
  {
    start: 3891,
    end: 3914,
  },
  {
    start: 3915,
    end: 3941,
  },
  {
    start: 3942,
    end: 3970,
  },
  {
    start: 3971,
    end: 3986,
  },
  {
    start: 3987,
    end: 3996,
  },
  {
    start: 3997,
    end: 4012,
  },
  {
    start: 4013,
    end: 4031,
  },
  {
    start: 4032,
    end: 4053,
  },
  {
    start: 4054,
    end: 4063,
  },
  {
    start: 4064,
    end: 4068,
  },
  {
    start: 4069,
    end: 4079,
  },
  {
    start: 4080,
    end: 4089,
  },
  {
    start: 4090,
    end: 4098,
  },
  {
    start: 4099,
    end: 4105,
  },
  {
    start: 4106,
    end: 4114,
  },
  {
    start: 4115,
    end: 4125,
  },
  {
    start: 4126,
    end: 4132,
  },
  {
    start: 4133,
    end: 4140,
  },
  {
    start: 4141,
    end: 4149,
  },
  {
    start: 4150,
    end: 4158,
  },
  {
    start: 4159,
    end: 4166,
  },
  {
    start: 4167,
    end: 4173,
  },
  {
    start: 4174,
    end: 4182,
  },
  {
    start: 4183,
    end: 4191,
  },
  {
    start: 4192,
    end: 4199,
  },
  {
    start: 4200,
    end: 4210,
  },
  {
    start: 4211,
    end: 4218,
  },
  {
    start: 4219,
    end: 4229,
  },
  {
    start: 4230,
    end: 4238,
  },
  {
    start: 4239,
    end: 4247,
  },
  {
    start: 4248,
    end: 4256,
  },
  {
    start: 4257,
    end: 4264,
  },
  {
    start: 4265,
    end: 4272,
  },
  {
    start: 4273,
    end: 4282,
  },
  {
    start: 4283,
    end: 4287,
  },
  {
    start: 4288,
    end: 4294,
  },
  {
    start: 4295,
    end: 4303,
  },
  {
    start: 4304,
    end: 4316,
  },
  {
    start: 4317,
    end: 4323,
  },
  {
    start: 4324,
    end: 4335,
  },
  {
    start: 4336,
    end: 4347,
  },
  {
    start: 4348,
    end: 4358,
  },
  {
    start: 4359,
    end: 4372,
  },
  {
    start: 4373,
    end: 4385,
  },
  {
    start: 4386,
    end: 4398,
  },
  {
    start: 4399,
    end: 4414,
  },
  {
    start: 4415,
    end: 4432,
  },
  {
    start: 4433,
    end: 4453,
  },
  {
    start: 4454,
    end: 4473,
  },
  {
    start: 4474,
    end: 4486,
  },
  {
    start: 4487,
    end: 4495,
  },
  {
    start: 4496,
    end: 4505,
  },
  {
    start: 4506,
    end: 4515,
  },
  {
    start: 4516,
    end: 4524,
  },
  {
    start: 4525,
    end: 4530,
  },
  {
    start: 4531,
    end: 4538,
  },
  {
    start: 4539,
    end: 4545,
  },
  {
    start: 4546,
    end: 4556,
  },
  {
    start: 4557,
    end: 4564,
  },
  {
    start: 4565,
    end: 4574,
  },
  {
    start: 4575,
    end: 4583,
  },
  {
    start: 4584,
    end: 4592,
  },
  {
    start: 4593,
    end: 4598,
  },
  {
    start: 4599,
    end: 4606,
  },
  {
    start: 4607,
    end: 4611,
  },
  {
    start: 4612,
    end: 4616,
  },
  {
    start: 4617,
    end: 4623,
  },
  {
    start: 4624,
    end: 4630,
  },
  {
    start: 4631,
    end: 4645,
  },
  {
    start: 4646,
    end: 4665,
  },
  {
    start: 4666,
    end: 4681,
  },
  {
    start: 4682,
    end: 4705,
  },
  {
    start: 4706,
    end: 4726,
  },
  {
    start: 4727,
    end: 4749,
  },
  {
    start: 4750,
    end: 4766,
  },
  {
    start: 4767,
    end: 4784,
  },
  {
    start: 4785,
    end: 4810,
  },
  {
    start: 4811,
    end: 4828,
  },
  {
    start: 4829,
    end: 4852,
  },
  {
    start: 4853,
    end: 4873,
  },
  {
    start: 4874,
    end: 4895,
  },
  {
    start: 4896,
    end: 4917,
  },
  {
    start: 4918,
    end: 4941,
  },
  {
    start: 4942,
    end: 4968,
  },
  {
    start: 4969,
    end: 4995,
  },
  {
    start: 4996,
    end: 5029,
  },
  {
    start: 5030,
    end: 5055,
  },
  {
    start: 5056,
    end: 5078,
  },
  {
    start: 5079,
    end: 5086,
  },
  {
    start: 5087,
    end: 5093,
  },
  {
    start: 5094,
    end: 5099,
  },
  {
    start: 5100,
    end: 5104,
  },
  {
    start: 5105,
    end: 5110,
  },
  {
    start: 5111,
    end: 5115,
  },
  {
    start: 5116,
    end: 5125,
  },
  {
    start: 5126,
    end: 5129,
  },
  {
    start: 5130,
    end: 5135,
  },
  {
    start: 5136,
    end: 5142,
  },
  {
    start: 5143,
    end: 5150,
  },
  {
    start: 5151,
    end: 5155,
  },
  {
    start: 5156,
    end: 5161,
  },
  {
    start: 5162,
    end: 5168,
  },
  {
    start: 5169,
    end: 5177,
  },
  {
    start: 5178,
    end: 5185,
  },
  {
    start: 5186,
    end: 5192,
  },
  {
    start: 5193,
    end: 5199,
  },
  {
    start: 5200,
    end: 5208,
  },
  {
    start: 5209,
    end: 5217,
  },
  {
    start: 5218,
    end: 5222,
  },
  {
    start: 5223,
    end: 5229,
  },
  {
    start: 5230,
    end: 5236,
  },
  {
    start: 5237,
    end: 5241,
  },
  {
    start: 5242,
    end: 5253,
  },
  {
    start: 5254,
    end: 5267,
  },
  {
    start: 5268,
    end: 5286,
  },
  {
    start: 5287,
    end: 5313,
  },
  {
    start: 5314,
    end: 5331,
  },
  {
    start: 5332,
    end: 5357,
  },
  {
    start: 5358,
    end: 5385,
  },
  {
    start: 5386,
    end: 5414,
  },
  {
    start: 5415,
    end: 5429,
  },
  {
    start: 5430,
    end: 5447,
  },
  {
    start: 5448,
    end: 5460,
  },
  {
    start: 5461,
    end: 5475,
  },
  {
    start: 5476,
    end: 5494,
  },
  {
    start: 5495,
    end: 5512,
  },
  {
    start: 5513,
    end: 5542,
  },
  {
    start: 5543,
    end: 5570,
  },
  {
    start: 5571,
    end: 5596,
  },
  {
    start: 5597,
    end: 5616,
  },
  {
    start: 5617,
    end: 5641,
  },
  {
    start: 5642,
    end: 5672,
  },
  {
    start: 5673,
    end: 5702,
  },
  {
    start: 5703,
    end: 5727,
  },
  {
    start: 5728,
    end: 5758,
  },
  {
    start: 5759,
    end: 5800,
  },
  {
    start: 5801,
    end: 5829,
  },
  {
    start: 5830,
    end: 5854,
  },
  {
    start: 5855,
    end: 5882,
  },
  {
    start: 5883,
    end: 5909,
  },
  {
    start: 5910,
    end: 5931,
  },
  {
    start: 5932,
    end: 5963,
  },
  {
    start: 5964,
    end: 5993,
  },
  {
    start: 5994,
    end: 6016,
  },
  {
    start: 6017,
    end: 6043,
  },
  {
    start: 6044,
    end: 6072,
  },
  {
    start: 6073,
    end: 6098,
  },
  {
    start: 6099,
    end: 6125,
  },
  {
    start: 6126,
    end: 6137,
  },
  {
    start: 6138,
    end: 6155,
  },
  {
    start: 6156,
    end: 6176,
  },
  {
    start: 6177,
    end: 6193,
  },
  {
    start: 6194,
    end: 6207,
  },
  {
    start: 6208,
    end: 6221,
  },
  {
    start: 6222,
    end: 6236,
  },
];
export default quranPages;
