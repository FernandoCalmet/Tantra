# File Structure

> Operation to get TCD2 & TCD3 = ((TCD_slot - 1) \* 1688) + $offsetNumber

| TAD  | TCD1 | TCD2 | TCD3 | ATTRIBUTE                        |
| ---- | ---- | ---- | ---- | -------------------------------- |
| 0    | `_`  | `_`  | `_`  | TAD Name                         |
| 1    | `_`  | `_`  | `_`  | ?                                |
| 2    | `_`  | `_`  | `_`  | ?                                |
| 3    | `_`  | `_`  | `_`  | ?                                |
| 19   | `_`  | `_`  | `_`  | ?                                |
| 51   | `_`  | `_`  | `_`  | ?                                |
| 52   | `_`  | `_`  | `_`  | TAD Password                     |
| 83   | `_`  | `_`  | `_`  | ?                                |
| 92   | `_`  | `_`  | `_`  | ?                                |
| 96   | `_`  | `_`  | `_`  | ?                                |
| 100  | `_`  | `_`  | `_`  | ?                                |
| `_`  | 88   | 1776 | 3464 | TCD Name                         |
| `_`  | 108  | 1796 | 3484 | Chakra muscle                    |
| `_`  | 110  | 1798 | 3486 | Chakra nerve                     |
| `_`  | 112  | 1800 | 3488 | Chakra heart                     |
| `_`  | 114  | 1802 | 3490 | Chakra mental                    |
| `_`  | 116  | 1804 | 3492 | Tribe                            |
| `_`  | 124  | 1812 | 3500 | Health Points                    |
| `_`  | 128  | 1816 | 3504 | Tapas Points                     |
| `_`  | 132  | 1820 | 3508 | Inventory Rupiah                 |
| `_`  | 136  | 1824 | 3512 | Master Points                    |
| `_`  | 140  | 1828 | 3516 | Guild ID                         |
| `_`  | 144  | 1832 | 3520 | Trimurity                        |
| `_`  | 145  | 1833 | 3521 | Level                            |
| `_`  | 146  | 1834 | 3522 | Head Style param1                |
| `_`  | 147  | 1835 | 3523 | Head Style param2                |
| `_`  | 150  | 1838 | 3526 | Zone ID of current zone          |
| `_`  | 151  | 1839 | 3527 | Zone ID of regen zone            |
| `_`  | 153  | 1841 | 3529 | GM Informations                  |
| `_`  | 154  | 1842 | 3530 | 2nd job profession param1        |
| `_`  | 155  | 1843 | 3531 | 2nd job profession param2        |
| `_`  | 156  | 1844 | 3532 | Karma Points                     |
| `_`  | 160  | 1848 | 3536 | Zone current position X          |
| `_`  | 162  | 1850 | 3538 | Zone current position Y          |
| `_`  | 164  | 1852 | 3540 | Zone regen position X            |
| `_`  | 166  | 1854 | 3542 | Zone regen position Y            |
| `_`  | 268  | 1956 | 3644 | Quests (First)                   |
| `_`  | 338  | 2026 | 3714 | Quests (Last)                    |
| `_`  | 368  | 2056 | 3744 | Inventory Item ID (slot1)        |
| `_`  | 374  | 2062 | 3750 | Inventory Tri Option param1      |
| `_`  | 375  | 2063 | 3751 | Inventory Tri Option param2      |
| `_`  | 376  | 2064 | 3752 | Inventory Item Quantity (slot1)  |
| `_`  | 377  | 2065 | 3753 | Inventory Item Description       |
| `_`  | 382  | 2070 | 3758 | Inventory Option Item ID         |
| `_`  | 383  | 2071 | 3759 | Inventory Item Refining (slot1)  |
| `_`  | 384  | 2072 | 3760 | Inventory Item ID (slot2)        |
| `_`  | 399  | 2086 | 3774 | Inventory Item Refining (slot2)  |
| `_`  | 415  | 2088 | 3776 | Inventory Item ID (slot3)        |
| `_`  | 1136 | 2824 | 4512 | Pet id                           |
| `_`  | 1279 | 2967 | 4655 | Pet level                        |
| `_`  | 1328 | 3016 | 4704 | Equipment Head decoration ID     |
| `_`  | 1330 | 3018 | 4706 | Equipment Face Decoration ID     |
| `_`  | 1332 | 3020 | 4708 | Equipment Mount ID               |
| `_`  | 1373 | 3061 | 4749 | ?                                |
| `_`  | 1374 | 3062 | 4750 | ?                                |
| `_`  | 1375 | 3063 | 4751 | ?                                |
| `_`  | 1376 | 3064 | 4752 | Pranas points                    |
| `_`  | 1377 | 3065 | 4753 | ?                                |
| `_`  | 1520 | 3208 | 4896 | Equipment Item ID                |
| `_`  | 1526 | 3214 | 4902 | Equipment item tri option param1 |
| `_`  | 1527 | 3215 | 4903 | Equipment item tri option param2 |
| `_`  | 1528 | 3216 | 4904 | Equipment item Quantity          |
| `_`  | 1529 | 3217 | 4905 | Equipment Extra                  |
| `_`  | 1534 | 3222 | 4910 | Equipment Option Item ID         |
| `_`  | 1535 | 3223 | 4911 | Equipment Item Upgrade           |
| 5152 | `_`  | `_`  | `_`  | Cargo Item ID (slot1)            |
| 5158 | `_`  | `_`  | `_`  | Cargo Tri Option param1          |
| 5159 | `_`  | `_`  | `_`  | Cargo Tri Option param2          |
| 5160 | `_`  | `_`  | `_`  | Cargo Item Upgrade               |
| 5161 | `_`  | `_`  | `_`  | Cargo Item Description           |
| 5166 | `_`  | `_`  | `_`  | Cargo Option Item ID             |
| 5167 | `_`  | `_`  | `_`  | Cargo Item Quantity              |
| 5168 | `_`  | `_`  | `_`  | Cargo Item ID (slot2)            |
| 5184 | `_`  | `_`  | `_`  | Cargo Item ID (slot3)            |
| 5200 | `_`  | `_`  | `_`  | Cargo Item ID (slot4)            |
| 5216 | `_`  | `_`  | `_`  | Cargo Item ID (slot5)            |
| 7072 | `_`  | `_`  | `_`  | Cargo rupiah                     |
| 7073 | `_`  | `_`  | `_`  | ?                                |
| 7124 | `_`  | `_`  | `_`  | Tantra Account Data path         |

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)

source: `{{ page.path }}`
