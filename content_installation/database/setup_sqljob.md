# Setup Rank SQL Job

## Refresh Rank for K5

```sql
delete from GameInfo00
insert into GameInfo00(UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup00

delete from GameInfo01
insert into GameInfo01(UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup01

delete from GameInfo02
insert into GameInfo02(UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup02

delete from GameInfo03
insert into GameInfo03(UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup03

delete from GameInfo04
insert into GameInfo04(UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup04

delete from GameInfo05
insert into GameInfo05(UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,MBrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup05
```

## Refresh Rank for K4

```sql
delete from GameInfo00
insert into GameInfo00(UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup00

delete from GameInfo01
insert into GameInfo01(UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup01

delete from GameInfo02
insert into GameInfo02(UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup02

delete from GameInfo03
insert into GameInfo03(UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup03

delete from GameInfo04
insert into GameInfo04(UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup04

delete from GameInfo05
insert into GameInfo05(UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney) select UserID,CharacterName,CharacterLevel,BrahmanPoint,Tribe,Trimurity,GuildName,GuildID,GuildRank,curtime,Name1,Name2,Name3,Level1,Level2,Level3,TotalMoney from TantraBackup05
```

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)
