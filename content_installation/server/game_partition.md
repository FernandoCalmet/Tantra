# Game Disk Partition

Creates an Account File in the `“D:\GameInfo\share”` folder. The folder structure is as shown in the image below.

![GameInfo](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/disk_management/GameInfo.png?raw=true)

Create a batch file to instantiate the main partitions of the server.

```batch
subst G: DBSRV\guild
subst R: DBSRV\current_user
subst K: SQLDMN\Rank
subst Q: GameInfo\share
```

The generated Account File file is imported into DBSRV by `DBSRV.exe`.
In order for DBSRV to import the Account File file, the share folder must be shared.
Also, you need to connect the shared folder from DBSRV to `Q` driver. image reference

![DBSRV](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/disk_management/DBSRV.png?raw=true)

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)
