# Item Effect

```note
File: TantraParam.xml
Tab: Item
Column: byteClass
```

| ID    | NAME                                      | DESCRIPTION                                                                                                                   |
| ----- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 2     | NoDropNoEmail                             | In case of non-dropping and non-tradable, add 2 and 4 and the 6 should be used.                                               |
| 4     | NoTradeNoEmail                            | In case of non-dropping and non-tradable, add 2 and 4 and the 6 should be used.                                               |
| 8     | NoReparable                               | `_`                                                                                                                           |
| 16    | NoNpcNoEmail                              | `_`                                                                                                                           |
| 32    | NoSendNoEmail                             | `_`                                                                                                                           |
| 64    | NoShopNoEmail                             | `_`                                                                                                                           |
| 512   | NoDonable                                 | En Kruma y Mandara                                                                                                            |
| 1024  | NoRefinable                               | `_`                                                                                                                           |
| 1032  | WeaponUnique                              | No reparable No refinable (armas) (1024 + 8 = 1032)                                                                           |
| 1060  | Invisible                                 | `_`                                                                                                                           |
| 1065  | WizardEyes                                | `_`                                                                                                                           |
| 2000  | Hold                                      | `_`                                                                                                                           |
| 2005  | Hold 2                                    | `_`                                                                                                                           |
| 2006  | Hold N Slow Move                          | `_`                                                                                                                           |
| 2010  | Stun                                      | `_`                                                                                                                           |
| 2020  | Sleep                                     | `_`                                                                                                                           |
| 2040  | Blind                                     | `_`                                                                                                                           |
| 2048  | NoStorageNoEmail                          | `_`                                                                                                                           |
| 2082  | NoDropNoTradeNoShopNoStorageNoEmail       | 2 + 4 + 16 + 32 + 2048 = 2102                                                                                                 |
| 2102  | ItemOnlySell                              | It can be sold, it cannot be traded, but it can be stored in the trunk                                                        |
| 2166  | NoDropNoTradeNoShopNoAshramStorageNoEmail | 2 + 4 + 16 + 32 + 64 + 2048 = 2166                                                                                            |
| 2210  | Concentration                             | `_`                                                                                                                           |
| 2220  | Disruption                                | `_`                                                                                                                           |
| 2230  | Invulnerable                              | `_`                                                                                                                           |
| 2240  | Immunity                                  | `_`                                                                                                                           |
| 2241  | Immunity 2                                | `_`                                                                                                                           |
| 2500  | MagicShield                               | `_`                                                                                                                           |
| 2505  | BreakMagicShield                          | `_`                                                                                                                           |
| 2510  | ManaShield                                | `_`                                                                                                                           |
| 2520  | SpiritLink                                | `_`                                                                                                                           |
| 2525  | BreakLinkofSpirit                         | `_`                                                                                                                           |
| 2530  | EnhanceMagicShield                        | `_`                                                                                                                           |
| 2535  | BreakEnhanceMagicShield                   | `_`                                                                                                                           |
| 2540  | TP2Zero                                   | `_`                                                                                                                           |
| 2550  | CantRecoverTP                             | `_`                                                                                                                           |
| 2560  | ProtectFromAttackOnlyOnce                 | `_`                                                                                                                           |
| 2678  | ItemMoveBlocked                           | No Ashram storage,No donatable,No personal storage ,No email,No store,No commerce,No dropeable (2048+512+64+32+16+4+2 = 2678) |
| 2900  | ExpandBag30                               | `_`                                                                                                                           |
| 2910  | GMPotion                                  | `_`                                                                                                                           |
| 2915  | ProtectFromMonster                        | `_`                                                                                                                           |
| 2920  | ResetStat                                 | `_`                                                                                                                           |
| 2930  | ResetSkill                                | `_`                                                                                                                           |
| 2940  | Log                                       | `_`                                                                                                                           |
| 2941  | LogInmu                                   | `_`                                                                                                                           |
| 2945  | Debug                                     | `_`                                                                                                                           |
| 2950  | BlessOfGod                                | `_`                                                                                                                           |
| 2960  | ResetClass                                | `_`                                                                                                                           |
| 2970  | RepairAll                                 | `_`                                                                                                                           |
| 2971  | ExpandBag7                                | `_`                                                                                                                           |
| 2972  | ExpandStore7                              | `_`                                                                                                                           |
| 2973  | AMoneyRoot7                               | `_`                                                                                                                           |
| 2974  | MAtman7                                   | `_`                                                                                                                           |
| 2975  | MAnubaba7                                 | `_`                                                                                                                           |
| 2976  | M15Chakra7                                | `_`                                                                                                                           |
| 2980  | ResetQuest                                | `_`                                                                                                                           |
| 2981  | ExpandStore30                             | `_`                                                                                                                           |
| 2982  | AMoneyRoot30                              | `_`                                                                                                                           |
| 2983  | MAtman30                                  | `_`                                                                                                                           |
| 2984  | MAnubaba30                                | `_`                                                                                                                           |
| 2985  | M15Chakra30                               | `_`                                                                                                                           |
| 2990  | BonusExp                                  | `_`                                                                                                                           |
| 2991  | FuncBeaty                                 | `_`                                                                                                                           |
| 2998  | ExpandFunc                                | `_`                                                                                                                           |
| 2999  | ExpandItem                                | `_`                                                                                                                           |
| 3000  | StealHP                                   | `_`                                                                                                                           |
| 3010  | StealMP                                   | `_`                                                                                                                           |
| 3020  | BonusDamage                               | `_`                                                                                                                           |
| 3021  | BonusDamage2                              | `_`                                                                                                                           |
| 3022  | BonusDamage3                              | `_`                                                                                                                           |
| 3023  | BonusDamage4                              | `_`                                                                                                                           |
| 3024  | BonusDamage5                              | `_`                                                                                                                           |
| 3025  | BonusDamage6                              | `_`                                                                                                                           |
| 3026  | BonusDamage7                              | `_`                                                                                                                           |
| 3027  | BonusDamage8                              | `_`                                                                                                                           |
| 3028  | BonusDamage9                              | `_`                                                                                                                           |
| 3030  | BonusEffect                               | `_`                                                                                                                           |
| 3040  | MultipleStrike                            | `_`                                                                                                                           |
| 3050  | CriticalStrike                            | `_`                                                                                                                           |
| 3060  | PierceStrike                              | `_`                                                                                                                           |
| 3061  | PierceStrike2                             | `_`                                                                                                                           |
| 3065  | HPDown                                    | `_`                                                                                                                           |
| 3070  | KnockBack                                 | `_`                                                                                                                           |
| 3075  | Pull                                      | `_`                                                                                                                           |
| 3080  | Heal                                      | `_`                                                                                                                           |
| 3085  | RecoverTP                                 | `_`                                                                                                                           |
| 3090  | Cure                                      | `_`                                                                                                                           |
| 3100  | TPBurn                                    | `_`                                                                                                                           |
| 3110  | Resurrect                                 | `_`                                                                                                                           |
| 3120  | ReflectDamage                             | `_`                                                                                                                           |
| 3126  | UniqueSet                                 | No reparable / No refinable (Sets)                                                                                            |
| 3130  | AbsorbDamage                              | `_`                                                                                                                           |
| 3134  | `_`                                       | NoDropNoTradeNoShopNoAshramStorageNoEmailNoRefinableNoReparable                                                               |
| 3135  | AbsorbElementalDamage                     | `_`                                                                                                                           |
| 3136  | FireResist                                | `_`                                                                                                                           |
| 3137  | ColdResist                                | `_`                                                                                                                           |
| 3138  | LightResist                               | `_`                                                                                                                           |
| 3139  | PoisonResist                              | `_`                                                                                                                           |
| 3140  | Terror                                    | `_`                                                                                                                           |
| 3150  | Taunt                                     | `_`                                                                                                                           |
| 3151  | DeTaunt                                   | `_`                                                                                                                           |
| 3160  | RangeUp                                   | `_`                                                                                                                           |
| 3165  | RangeDown                                 | `_`                                                                                                                           |
| 3170  | TownPortal                                | `_`                                                                                                                           |
| 3180  | TownPortal2                               | `_`                                                                                                                           |
| 3181  | TownPortal3                               | `_`                                                                                                                           |
| 3190  | SaveTPCost                                | `_`                                                                                                                           |
| 3200  | SlayerItem                                | `_`                                                                                                                           |
| 3210  | PreventRegenHP                            | `_`                                                                                                                           |
| 3220  | PreventRegenTP                            | `_`                                                                                                                           |
| 3230  | SkillUp                                   | `_`                                                                                                                           |
| 3240  | Dash                                      | `_`                                                                                                                           |
| 3250  | Teleport                                  | `_`                                                                                                                           |
| 3260  | CantUsePotion                             | `_`                                                                                                                           |
| 3270  | 100PCriticalHit                           | `_`                                                                                                                           |
| 3280  | Recall                                    | `_`                                                                                                                           |
| 3290  | Weakness                                  | `_`                                                                                                                           |
| 3300  | SuccessRate                               | `_`                                                                                                                           |
| 3310  | SummonParty                               | `_`                                                                                                                           |
| 3320  | MoveToTheMandraTown                       | `_`                                                                                                                           |
| 3330  | ReduceKarma                               | `_`                                                                                                                           |
| 3340  | SummonFriend                              | `_`                                                                                                                           |
| 3350  | Suicide                                   | `_`                                                                                                                           |
| 3360  | Transformacion                            | `_`                                                                                                                           |
| 4000  | WeaponMastery                             | `_`                                                                                                                           |
| 4010  | ElementalDamagePlus                       | `_`                                                                                                                           |
| 4011  | ElementalDamageMinus                      | `_`                                                                                                                           |
| 4096  | PCDecoration                              | Head or Face Equipement                                                                                                       |
| 4098  | ItemDropBlockedAllowTrade                 | Block item drop but allows trading                                                                                            |
| 4100  | DamagePlus                                | `_`                                                                                                                           |
| 4101  | DamageMinus                               | `_`                                                                                                                           |
| 4102  | DamagePlus2                               | `_`                                                                                                                           |
| 4103  | DamageMinus2                              | `_`                                                                                                                           |
| 4110  | FireDamagePlus                            | `_`                                                                                                                           |
| 4111  | FireDamageMinus                           | `_`                                                                                                                           |
| 4120  | ColdDamagePlus                            | `_`                                                                                                                           |
| 4121  | ColdDamageMinus                           | `_`                                                                                                                           |
| 4130  | LightningDamagePlus                       | `_`                                                                                                                           |
| 4131  | LightningDamageMinus                      | `_`                                                                                                                           |
| 4132  | Damage Increased in                       | `_`                                                                                                                           |
| 4140  | PoisonDamagePlus                          | `_`                                                                                                                           |
| 4141  | PoisonDamageMinus                         | `_`                                                                                                                           |
| 4150  | FireResistPlus                            | `_`                                                                                                                           |
| 4151  | FireResistMinus                           | `_`                                                                                                                           |
| 4160  | ColdResistPlus                            | `_`                                                                                                                           |
| 4161  | ColdResistMinus                           | `_`                                                                                                                           |
| 4170  | LightningResistPlus                       | `_`                                                                                                                           |
| 4171  | LightningResistMinus                      | `_`                                                                                                                           |
| 4180  | PoisonResistPlus                          | `_`                                                                                                                           |
| 4181  | PoisonResistMinus                         | `_`                                                                                                                           |
| 4200  | MusclePlus                                | `_`                                                                                                                           |
| 4201  | MuscleMinus                               | `_`                                                                                                                           |
| 4202  | MusclePlus2                               | `_`                                                                                                                           |
| 4210  | NervesPlus                                | `_`                                                                                                                           |
| 4211  | NervesMinus                               | `_`                                                                                                                           |
| 4212  | NervesPlus2                               | `_`                                                                                                                           |
| 4220  | HeartPlus                                 | `_`                                                                                                                           |
| 4221  | HeartMinus                                | `_`                                                                                                                           |
| 4222  | HeartPlus2                                | `_`                                                                                                                           |
| 4230  | MindPlus                                  | `_`                                                                                                                           |
| 4231  | MindMinus                                 | `_`                                                                                                                           |
| 4232  | MindPlus2                                 | `_`                                                                                                                           |
| 4240  | AllResistPlus                             | `_`                                                                                                                           |
| 4241  | AllResistMinus                            | `_`                                                                                                                           |
| 4250  | AllStatePlus                              | `_`                                                                                                                           |
| 4251  | AllStateMinus                             | `_`                                                                                                                           |
| 4252  | AllStatePlus2                             | `_`                                                                                                                           |
| 4253  | AllStateMinus2                            | `_`                                                                                                                           |
| 4260  | AllDamagePlus                             | `_`                                                                                                                           |
| 4261  | AllDamageMinus                            | `_`                                                                                                                           |
| 4270  | FixedDamagePlus                           | `_`                                                                                                                           |
| 4271  | FixedDamageMinus                          | `_`                                                                                                                           |
| 4280  | FixedDamagePlus2                          | `_`                                                                                                                           |
| 4281  | FixedDamageMinus2                         | `_`                                                                                                                           |
| 4300  | AttackRatePlus                            | `_`                                                                                                                           |
| 4301  | AttackRateMinus                           | `_`                                                                                                                           |
| 4302  | AttackRatePlus2                           | `_`                                                                                                                           |
| 4303  | AttackRateMinus2                          | `_`                                                                                                                           |
| 4310  | DodgeRatePlus                             | `_`                                                                                                                           |
| 4311  | DodgeRateMinus                            | `_`                                                                                                                           |
| 4312  | DodgeRatePlus2                            | `_`                                                                                                                           |
| 4313  | DodgeRateMinus2                           | `_`                                                                                                                           |
| 4320  | ACPlus                                    | Defense range increases in %d                                                                                                 |
| 4321  | ACMinus                                   | `_`                                                                                                                           |
| 4322  | EffectDefenseEquipmentSet                 | `_`                                                                                                                           |
| 4330  | DefensePlus                               | `_`                                                                                                                           |
| 4331  | DefenseMinus                              | `_`                                                                                                                           |
| 4332  | DefensePlus2                              | `_`                                                                                                                           |
| 4333  | DefenseMinus2                             | `_`                                                                                                                           |
| 4340  | DodgeSpeedUp                              | `_`                                                                                                                           |
| 4341  | DodgeSpeedDown                            | `_`                                                                                                                           |
| 4400  | MaxHPPlus                                 | `_`                                                                                                                           |
| 4401  | MaxHPMinus                                | `_`                                                                                                                           |
| 4402  | MaxHPPPlus                                | `_`                                                                                                                           |
| 4403  | MaxHPPMinus                               | `_`                                                                                                                           |
| 4404  | MaxHPPlusByMind                           | `_`                                                                                                                           |
| 4405  | LockMaxHP                                 | `_`                                                                                                                           |
| 4406  | MaxHPPlus2                                | `_`                                                                                                                           |
| 4407  | MaxTPPlus2                                | `_`                                                                                                                           |
| 4410  | HPRecoveryPlus                            | `_`                                                                                                                           |
| 4411  | HPRecoveryMinus                           | `_`                                                                                                                           |
| 4420  | MaxTPPlus                                 | `_`                                                                                                                           |
| 4421  | MaxTPMinus                                | `_`                                                                                                                           |
| 4424  | MaxTPPlusByMind                           | `_`                                                                                                                           |
| 4425  | LockMaxTP                                 | `_`                                                                                                                           |
| 4430  | TPRecoveryPlus                            | `_`                                                                                                                           |
| 4431  | TPRecoveryMinus                           | `_`                                                                                                                           |
| 4440  | MoveSpeedPlus                             | `_`                                                                                                                           |
| 4441  | MoveSpeedMinus                            | `_`                                                                                                                           |
| 4442  | MoveSpeedMinus2                           | `_`                                                                                                                           |
| 4450  | AttackSpeedPlus                           | `_`                                                                                                                           |
| 4451  | AttackSpeedMinus                          | `_`                                                                                                                           |
| 4460  | CastSpeedPlus                             | `_`                                                                                                                           |
| 4461  | CastSpeedMinus                            | `_`                                                                                                                           |
| 4470  | EnhanceWeapon                             | `_`                                                                                                                           |
| 4480  | LostTrace                                 | `_`                                                                                                                           |
| 4490  | EnhanceArmor                              | `_`                                                                                                                           |
| 4500  | VictoryHPBonus                            | `_`                                                                                                                           |
| 4505  | VictoryTPBonus                            | `_`                                                                                                                           |
| 4510  | IncreaseCriticalDamage                    | `_`                                                                                                                           |
| 4520  | HealPlus                                  | `_`                                                                                                                           |
| 4530  | RecoverTPPlus                             | `_`                                                                                                                           |
| 4540  | EnhanceHardnessOfArmor                    | `_`                                                                                                                           |
| 4550  | DamageBonusForNextAttack                  | `_`                                                                                                                           |
| 4560  | PerfectDodge                              | `_`                                                                                                                           |
| 4570  | PetGrowth                                 | `_`                                                                                                                           |
| 4580  | ChangeTrimuritiSiva                       | `_`                                                                                                                           |
| 4590  | ChangeTrimuritiBrahma                     | `_`                                                                                                                           |
| 4600  | ChangeTrimuritiVishnu                     | `_`                                                                                                                           |
| 4610  | RefiningJade                              | `_`                                                                                                                           |
| 4611  | RefiningDecrease                          | `_`                                                                                                                           |
| 4620  | RefiningDiscount                          | `_`                                                                                                                           |
| 4630  | RefiningRateUp                            | `_`                                                                                                                           |
| 4640  | RefiningProtect                           | `_`                                                                                                                           |
| 4650  | PranaRatebyLevel                          | `_`                                                                                                                           |
| 4660  | DeathPranaRatebyLevel                     | `_`                                                                                                                           |
| 4670  | MoneyRatebyLevel                          | `_`                                                                                                                           |
| 4680  | Attendence                                | `_`                                                                                                                           |
| 4690  | LevelUpFromLevel1                         | `_`                                                                                                                           |
| 4691  | LevelUpFromLevel3                         | `_`                                                                                                                           |
| 4692  | LevelUpFromLevel5                         | `_`                                                                                                                           |
| 4700  | GiveItem                                  | `_`                                                                                                                           |
| 4710  | ChangeTribeFromLevel                      | `_`                                                                                                                           |
| 4720  | Coupon                                    | `_`                                                                                                                           |
| 4730  | GiveItemMaharaja                          | `_`                                                                                                                           |
| 4740  | QuestStatus                               | `_`                                                                                                                           |
| 4800  | ResistStun                                | `_`                                                                                                                           |
| 4810  | ResistSleep                               | `_`                                                                                                                           |
| 4820  | ResistBlind                               | `_`                                                                                                                           |
| 4821  | Increase Blind Resistance by %            | `_`                                                                                                                           |
| 4830  | ResistHoldNSlow                           | `_`                                                                                                                           |
| 4930  | CallPetSkill                              | `_`                                                                                                                           |
| 5010  | ScrollQuest                               | `_`                                                                                                                           |
| 6262  | ItemQuest                                 | `_`                                                                                                                           |
| 10000 | Birth                                     | `_`                                                                                                                           |
| 10010 | Death                                     | `_`                                                                                                                           |
| 10020 | FireFX                                    | `_`                                                                                                                           |
| 10030 | UnPack                                    | `_`                                                                                                                           |
| 10040 | IWantIt                                   | `_`                                                                                                                           |
| 10041 | MicroSound                                | `_`                                                                                                                           |

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)

source: `{{ page.path }}`
