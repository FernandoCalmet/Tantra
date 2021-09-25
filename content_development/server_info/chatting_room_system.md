# Chatting Room System

> *1 word= 1 alphabet/ 1 character 

## 1. Chatting room lounge open :

``/viewchatrooms``

## 2. Lounge : 

**a.** show 10 rooms in per a page (60 rooms at most are available)

- Use left-right moving button to see pages

**b.** shown information: 
- Room No.: When there’s a room empty, room no. will be automatically set, server will automatically give room No.
- Room title: should be less than 10 word(show if the room is opened/closed next to the title) 
- Information of room owner: show as small character emoticon, when mouse indicates it show ID
- Crew information: show current number of person and maximum number of person. When mouse indicates it shows ID information of participated crew

**c.** Available Function:
- Filtering function: opened, closed list filtering, main god list filtering 
- Renewal: When it is difficult to renew the room list by realtime, this function could be added.
- Enterence: Double click the chosen room or choose by mouse click and click ‘enterence’ button
- Page movement: Shape of scroll bar, click it to show another page. 
- Quit: Close chatting room mark. Delete from waiting list 
          
> Basically, users in lounge are considered as waiting member (only participants of the chatting room can look information and invite function)

> When a room is locked (closed) and when other user wants to enter, password UI will pop up

## 3. Chatting room :

**a.** Information needed to make a room: 
- Room number : set by server randomly 
- Room title방제 : less than 10 words
- Limitation of main god : on/off option, when it set as ‘on’ , only users who select same god can enter, invitation as well. – maximum number of people: can choose between 2~8 
- open/close setting: closed room need password setting, unless it’s closed room title is shown in the lounge
(there is an icon for closed room)

**b.** Information shown during chatting:
- Room title : room title and number of people(unchangeable)
- Participant information : ID information of participants.             (current character ID can be at most 19 word, but only 6 word can be shown and “…”for the rest. When mouse indicates information shown
- conversation contents: users’ conversation will be shown. When a user come in and out message below will be shown. 
“player %s has entered”, “player %s has left.”

> (include ID, 50 words shown, when words over 25, it will be printed next line) 

>Conversation input box: when over 50 words input, cannot input more 

# Button function : 

``@invitation``: participants can see user list in lounge and can send an invitation message. Messages will be shown when condition doesn’t suit.

>ex) Max Number of people ``“can not invite anymore.”`` 
when limitation by main god is on, and invite other god’s member, ``”can not invite another main god’s member.”`` 
when an invited user refuse, ``“player %s has refused your invitation”`` When an invited user participate to another room ``“player %s is already in other room”`` User who is in other room and user who haven’t open chatting room list won’t be shown in the waiting list 

> ``@Quit(Exit)``: Exit from the room. Will be added to the waiting list. 

## Addendum

1. Delete main god information from the chatting room info. 
2. room owner(leader) function 

> when room owner leaves the room, follow to the order of entrance, next person will be the owner and message “player %s became room owner” is shown. If the owner left and no more persone left, room will be deleted. 

> ``hand over room owner`` : room owner can hand over his right to other people. 
- choose a character to be next room owner, and click the hand over button then “will you hand over your room owner to player %s?” will show up. 
- after accept the request, room owner will be changed and “player %s became the room owner” show up. Former room owner lose his all function as a room owner. 

> ``functions of room owner``: change room information. (title, max number, open/closed), ban function (after room owner changed to another person, banned person can enter the room again..

---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)

source: `{{ page.path }}`
