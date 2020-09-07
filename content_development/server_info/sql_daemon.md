# SQL DAEMON

## God grade modification system by ranking

### How to work

SqlDaemon refers to GameInfoXX table on "Rank" folder, sort the character by god point and store it per each world every 4 AM.

Every ZoneServer get these files and set the daily god grade per every character by referring these files

### How to set it

1. Create a table of each world by referring GameInfo_Table_Script.sql and GameInfo00_Table_Schema.  
  1.1 TantraBackupXX and GameInfoXX must be existed in same DataBase.example  
  1.2 GameInfo00 -> world0, GameInfo01 -> world1, GameInfo02 -> world2

2. Make Sql job scheduler run and enable to put the data in GameInfoXX table every 3 A.M.by referring GameInfo_Job_Schedule.txt.

3. Create a "Rank" as a sub folder on the path where SqlDaemon.exe exists, then make every ZoneServer able to shared the folder by setting it as shared folder.

4. Link the Rank folder as network drive “K” , on the computer which is set every ZoneServer of each world.

source: `{{ page.path }}`
