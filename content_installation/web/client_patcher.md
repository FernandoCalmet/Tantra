# Client Patcher

To make an update from the Client, we must first make sure that we have the files with the following structure on our website.

```note
`patch/`  
   |--- `main/`  
         |  
         --- `PatchFold/`  
         |      |  
         |      --- `Here my updated files`  
         |  
         --- `mainupdate/`  
                |  
                --- `Patcher.dat`  
                |  
                --- `Tantra.dat`  
                |  
                --- `Tantra.exe`  
                |  
                --- `UpdateList.dat`  
                |  
                --- `Version.dat`  
```

We need to have the "TantraPatchV2.exe" tool with the following folder structure.

```note
`TantraPatchV2/`  
    |  
    --- `TantraPatchV2.exe`  
    |  
    --- `Patch_Data/`  
    |  
    --- `PatchFold/`  
```

We will do a test update to show the procedure for this activity. First we have to place the files in the `Patch_Data` folder.

![Patch Data test files](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/web/client_patch/patch_data_test.png?raw=true)

```note
`Patch_Data/`  
    |  
    --- `HTLauncher.exe`  
    |  
    --- `Serverlist.txt`  
    |  
    --- `system/`  
    |        |  
    |        --- `HTMessage.txl`  
    |        |  
    |        --- `TantraParam.tpa`  
    |  
    --- `resource/`  
             |  
             --- `etc`  
                   |  
                   --- `Intro_logo_800.bmp`  
                   |  
                   --- `Intro_logo_1024.bmp`  
```

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)
