# Add Monsters

## Step 1

Open the file `TantraParam.xml` and we locate ourselves in the `Monster` sheet.

![TantraParam.xml: Open](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/01.png)

Go to the last line to add a new ID, which we must verify that it does not exist.

Copy an existing row to have a base structure for the monster to be added.

For this example we will add:

```note
ID: 3785
Name: Ancient Vasabhum
```

![TantraParam.xml : Add new monster line](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/02.png)

## Step 2

Now we open the `Clientres.xml` file.

Here we are going to see the following sheets:

- **Monster** = Assembly configuration.
- **MonTMD** = 3D model object.
- **MonAni** = Animation of the 3D model object.
- **MonTex** = Texture of the 3D model object.

### Texture

In the `MonText` sheet, we are on the last line to add the texture resource. The extension of the texture file is `DDS`.

For this example we will add:

```note
ID: 13399
File: MON_Ancient_Vasabhum.dds
```

![ClientRes.xml : Add new texture line](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/03.png)

### Animation

In the `MonAni` sheet, we are on the last line to add the animation resource. The extension of the animation file is `TAB`.

For this example we will add:

```note
ID: 53417
File: MON_Ancient_Vasabhum_STD.tab

ID: 53418
File: MON_Ancient_Vasabhum_IDL.tab

ID: 53419
File: MON_Ancient_Vasabhum_WLK.tab

ID: 53420
File: MON_Ancient_Vasabhum_RUN.tab

ID: 53421
File: MON_Ancient_Vasabhum_ATK1.tab

ID: 53422
File: MON_Ancient_Vasabhum_ATK2.tab

ID: 53423
File: MON_Ancient_Vasabhum_HIT.tab

ID: 53424
File: MON_Ancient_Vasabhum_DIE.tab
```

![ClientRes.xml : Add new animation line](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/04.png)

### Model 3D

In the `MonTMD` sheet, we are on the last line to add the models resource. The extension of the model file is `TMB` or `TMX`.

For this example we will add:

```note
ID: 12294
File: MON_Ancient_Vasabhum.tmb
```

![ClientRes.xml : Add new model line](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/05.png)

### Monster Assembly

In the `Monster` sheet, we are on the last line to add all references resource of the model.

We copy a row of some similar monster, that is, it is made of land or air depending on the case. And we started to introduce the reference values to assemble the new monster.

For this example we will add:

```note
- **ID**: 3785
- **Name**: Ancient Vasabhum
- **NumMesh**: 1
- **BasicModel**: 12294
- **Mesh1**: 12294
- **Tex1**: 13399
- **STD**: 53417
- **IDL**: 53418
- **WLK**: 53419
- **RUN**: 53420
- **ATK1**: 53421
- **ATK2**: 53422
- **HIT**: 53423
- **DIE**: 53424
- **Material_ID**: 9991
- **MonFXID**: 61002
- **Scale**: 90
```

![ClientRes.xml : Add new monster assembly line](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/06.png)

It is worth mentioning that the added attributes are relative to the model, some models have more parts and others less.

## Step 3

### Add resources to the client

The files configured in the XML must be added in the following directories:

```note
- **resource/object/Monster/MonsterTex2.hpk** : MON_Ancient_Vasabhum.dds

- **resource/object/Monster/Ani** : MON_Ancient_Vasabhum_STD.tab, MON_Ancient_Vasabhum_IDL.tab, MON_Ancient_Vasabhum_WLK.tab, MON_Ancient_Vasabhum_RUN.tab, MON_Ancient_Vasabhum_ATK1.tab, MON_Ancient_Vasabhum_ATK2.tab, MON_Ancient_Vasabhum_HIT.tab,  MON_Ancient_Vasabhum_DIE.tab

- **resource/object/Monster/Mesh** : MON_Ancient_Vasabhum.tmb
```

First the hpk file must be unpacked, in the case of textures, the `HPK2Files` tool is used for this. Choose the option `HPK2 => Files`.

![ClientRes.xml : Unpack hpk file](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/07.png)

Now, for the client to interpret the added files, the resources must be added to the `MonsterTex2.csv` file.

Add a line at the end with the resources. This file can be opened with notepad or another text editor.

```note
MON_Ancient_Vasabhum.dds,42064,16013715
```

Now we repackage it with the tool `HPK2Files` `Files => hpk`.

Go to the package folder and extract (copy) the generated `MonsterTex2.hpk` file, to replace it in a previous path.

## Step 4

### Test result

To test the changes made. We open the compilation tool for XML `XML2TXL`. We do the conversion: `Convert S_Param, Convert_CParam, ClientRes`.

We paste the files `Clientres.txl` and `TantraParam.tpa` in the Client's `system folder`. We rename the file `TantraParam_tpa.tpa` by `TantraParam.tpa` and replace it on the server, in the corresponding zone folder.

Within the game we introduce the command to summon the new monster.

```note
/summon2 3785
```

![Client: Summon new monster](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/08.png)

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)

source: `{{ page.path }}`
