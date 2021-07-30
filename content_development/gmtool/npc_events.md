# NPC Events

| Attribute          | Description                                                                                                                                                                  | Example |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| sNPCID             | NPC id, there are usually 5 columns in the param, but by default come 3 with ids.                                                                                            | 1120    |
| byteSourceType     | Here goes the kind of thing you want redeem for example with what you pay, item is number 1, in the gmtool says the other types, obviously "item" is the first, that's why 1 | 1       |
| sSourceItemID      | Here is the id of the delivery item, in the param you can see the id of the items, although it is easier and more advisable to consult them in the gmtool.                   | 7110    |
| iSourceCount       | Here is the amount, for example 100 bags of vasabum. (item of delivery).                                                                                                     | 100     |
| byteRewardPriority | Here is the priority of item                                                                                                                                                 | 100     |
| byteRewardType     | Here as in those of delivery, go the types of what you wish that receive an award, as items "1", gold, karma etc, it looks the same in the gmtool.                           | 1       |
| sReward1Rate       | Success rate to receive the reward (100 = 1%, 1000 = 10%, 10000 = 100%)                                                                                                      | 10000   |
| sRewardItemID      | Item ID to receive the reward                                                                                                                                                | 6776    |
| iRewardCount       | Amount of items to receive the reward                                                                                                                                        | 10      |
| byteMinLevel       | Minimum level restriction to redeem the reward                                                                                                                               | 20      |
| byteMaxLevel       | Maximum level restriction to redeem the reward                                                                                                                               | 100     |

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)

source: `{{ page.path }}`
