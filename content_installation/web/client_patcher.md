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

Now we run the `TantraPatchV2.exe` program, and press the `"Update"` button.

![TantrapatchV2](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/web/client_patch/tantrapatchv2.png?raw=true)

![TantrapatchV2 executed](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/web/client_patch/tantrapatchv2_executed.png?raw=true)

This generates two files with the extension `".dat"` and the compressed files inside the `"PatchFold"` folder.

We copy all the compressed files with their respective folders, inside the web folder `"patch/main/PatchFold/"`.

![PatchFold output](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/web/client_patch/patchfold_output.png?raw=true)

Now we go to the folder where we made the patch, and we open the file `"UpdateList.dat"`, to be able to obtain the lines that we are going to update.

```note
[VERSION]  
version = 6.9.0.6  
1  
[FILES]  
PatchFold\HTLauncher.exe                                                           1818624        727705    ccbc9edb3203279318f7a03f90c06656  
PatchFold\resource\etc\Intro_logo_1024.bmp                                         1572920        411938    76b5e191d5b93fd59459778299d65ea8  
PatchFold\resource\etc\Intro_logo_800.bmp                                           786488        523350    b3722935b4639fbe00a009b229f10efc  
PatchFold\Serverlist.txt                                                              1506           386    4aa1264f7debbf8964c818f977361332  
PatchFold\system\HTMessage.txl                                                     1501456         61013    a616ab3dc1ccc060e84af56ea8ac79d1  
PatchFold\system\TantraParam.tpa                                                   1700440       1701088    46ec819426ac292a86e71d387151fb3e  

```

Now we go to the web folder `"patch/mainupdate/"`, we open the file `"UpdateList.dat"` to be able to insert the lines that we are going to update.

```note
[OLDVERSION]  
Oldversion = 6.9.0.6  
1  
[NEWVERSION]  
Newversion = 6.9.0.6  
2  
[NEWFiles]	4
PatchFold\HTLauncher.exe                                                           1818624        727705    ccbc9edb3203279318f7a03f90c06656  
PatchFold\Serverlist.txt                                                              1506           386    4aa1264f7debbf8964c818f977361332  
PatchFold\system\HTMessage.txl                                                     1501456         61013    a616ab3dc1ccc060e84af56ea8ac79d1  
PatchFold\system\TantraParam.tpa                                                   1700440       1701088    46ec819426ac292a86e71d387151fb3e 
[ALLFILES]
PatchFold\HTLauncher.exe                                                           1818624        727705    ccbc9edb3203279318f7a03f90c06656  
PatchFold\resource\etc\Intro_logo_1024.bmp                                         1572920        411938    76b5e191d5b93fd59459778299d65ea8  
PatchFold\resource\etc\Intro_logo_800.bmp                                           786488        523350    b3722935b4639fbe00a009b229f10efc  
PatchFold\Serverlist.txt                                                              1506           386    4aa1264f7debbf8964c818f977361332  
PatchFold\system\HTMessage.txl                                                     1501456         61013    a616ab3dc1ccc060e84af56ea8ac79d1  
PatchFold\system\TantraParam.tpa                                                   1700440       1701088    46ec819426ac292a86e71d387151fb3e 
```

- `Oldversion` = `HTLauncher.exe` version and number of the last patch.
- `Newversion` = `HTLauncher.exe` version and number for the new patch.
- `NEWFiles` = Number of files added and files that will be automatically updated when `STTantra.exe` is opened.
- `ALLFILES` = Files that will be automatically updated when we press `Check Files` in the `STTantra.exe`.

Finally we update the file `"Version.dat"`.

```note
[OLDVERSION]  
Oldversion = 6.9.0.6  
1  
[NEWVERSION]  
Newversion = 6.9.0.6  
2  
```

Ready, now that we run `STTantra.exe`, the patch files will be updated.

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)
