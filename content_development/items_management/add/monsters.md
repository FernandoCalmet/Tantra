# Add Monsters

## Step 1

Open the file `TantraParam.xml` and we locate ourselves in the `Monster` sheet.

![TantraParam.xml: Open](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/01.png)

Go to the last line to add a new ID, which we must verify that it does not exist.

Copy an existing row to have a base structure for the monster to be added.

For this example we will add:

```note
ID: 3777  
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

![ClientRes.xml : Add new texture line](https://raw.githubusercontent.com/FernandoCalmet/Tantra/master/extras/img/development/items_management/monster/03.png)

For this example we will add:

```note
ID: 13399  
File: MON_Ancient_Vasabhum.dds
```

source: `{{ page.path }}`
