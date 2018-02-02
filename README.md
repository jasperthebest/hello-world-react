
# Web mockup

This repo contains code to render a Welcome Screen for the user. This welcome screen allows the user to do two things :
	
	1. See upcoming competitions under section `Challenges` 
	2. See already joined competitions under section `In-Play`

For ease of browsing, there are further filters on the top, showing competitions filtered by the sport. 

You are required to process the API response (saved in the repo as a json), and render the design as shown below.

This will require you to fill up JSX files for each of the underlying components and attach them to the container `App.jsx`. You will also need to write minor application logic and enter them as explained below.

![enter image description here](https://cdn-images.spcafe.in/img/es3/test/reacttest.png)


**How to run**
```
$npm install
$npm start
```

**Code**

The code has been divided into these sections:

1. All the components have been defined under `src/components`. Insert your code in the file names as applicable.
2. `src/containers/App.jsx` is where all your components are inserted, and all the underlying/processed data received
3. `src/common/utils.js` contains sample code snippets to load, filter and manipulate data. Given we are building a cross platform app using this base, put all application logic code under this file. 
4. `assets/data/game_data.json` contains the API response you need to work with. 
```
[
	{
		"name" 			:	"Challenge 1",
		"tournament"	:	"Tournament 1",
		"startTime"		:	"2017-12-30T11:30:00.000Z",
		"endTime"		:	"2017-13-30T11:30:00.000Z",
		"isJoined"		: 	1,
		"prizes"		:	20000,
		"sportName"		:	"football"
	},
	...,
	...
]
```
The game card design indicates which parameters are used to render what.

**Application logic**

The page displays a bunch of game cards for the user.

If `is_joined == 1` that means the user has joined the compeition and the card for that segment needs to be shown in `In-Play`. Similarly, if `is_joined == 0` that means it is a contest the user hasn't yet joined and thus must be shown when `Challenges` is tapped. This forms the so called `BottomFilter`. 

Similarly, the `TopFilter` is a sports filter. All the contests have `sportName = cricket ` or `sportName = football`. Clicking each of these buttons should filter the cards accordingly. As evident, clicking `All` should show all the cards.  Do note, there is no `sportName = All`.

Also, in all of the above cases, if the contest `startTime` is already in the past, do not display it under either `In-Play` or `Challenges`.

`STARTS IN` is a countdown ticking down towards the `startTime`. This countdown should be ticking. 

**Reply**

You are expected to Fork this repo, fill up the missing code, push changes to your repo, and email us a link of it to jobs@sportscafe.in

Feel free to reach out on the same email for any doubts/questions on the problem statement.

May the force be with you! 




