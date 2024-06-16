# Among Us in real life

I extended the [existing project of Michael Gira](https://github.com/michaelgira23/among-us-real-life) who "_hacked together this small little web app for facilitating a game of Among Us in real life_".

These extensions include:

-   Adding the [pkg library](https://www.npmjs.com/package/pkg), to compile the application.
-   Altered the UI to provide a more authentic Among Us feel.
-   Added input entry to the Admin Panel so that tasks can be assigned whilst the application is running, rather than editing an array in the codebase.

## Features

-   Assign impostors/crewmates
-   Assign tasks
-   Checking off tasks updates a global progress bar in real-time

Audio recordings from [https://www.voicy.network/pages/among-us](https://www.voicy.network/pages/among-us)

## UI Pre Extension

<img src="media/IMG_0976.PNG" width="20%" />

## UI Post Extension

### Admin Panel

<img src="media/among_us_admin_panel.png" width="20%">
<img src="media/among_us_admin_panel_2.png" width="20%">

### User View

<img src="media/among_us_user_UI_pre_start_with_sound.png" width="20%">
<img src="media/among_us_user_UI_started_with_sound.png" width="20%">
<img src="media/among_us_user_UI_started_without_sound.png" width="20%">
<img src="media/among_us_user_UI_started_with_sound_progress.png" width="20%">

## Usage

This was built for personal use, but anyone is welcome to use this for hosting their own game.

### 1. Configure the game

You may want to modify the following properties located in [`src/index.js`](https://github.com/michaelgira23/among-us-real-life/blob/master/src/index.js):

[`TASKS`](https://github.com/michaelgira23/among-us-real-life/blob/master/src/index.js#L14) - An array of strings that consist of all possible tasks. These will be randomly assigned to players.

[`N_TASKS`](https://github.com/michaelgira23/among-us-real-life/blob/master/src/index.js#L31) - Number of tasks to assign each player

[`N_IMPOSTORS`](https://github.com/michaelgira23/among-us-real-life/blob/master/src/index.js#L32) - Number of impostors to assign each round

**<u>NOTE</u>**: the `TASKS` and `N_TASKS` variables don't need to be altered, as you can manually change these from the admin panel using the extension.

### 2. Start the backend or build the application

Start the backend with:

```
$ npm install
$ npm start
```

Use a utility like [Nodemon](https://nodemon.io/) to automatically restart the backend upon any changes. This is useful when modifying the number of impostors or tasks.

or alternatively build the application with:

```
$ npm install
$ pkg .
```

Which should produce `umumhungogus-macos` and `umumhungogus-win.exe` in the root folder of the project. These names can be changed by altering the name in `package.json`.

Run either of these executables. On Windows you should see the following cmd window popup:

![alt text](/media/image.png)

### 3. Connect to the admin dashboard

Visit [http://localhost:4046/admin](http://localhost:4046/admin) to access the admin panel. There is a single button to start the game.

Here you can add or remove tasks to the list before starting the game.

Pressing the start button will reset task progress, assign new tasks, and assign impostors. Press it once all players connect, otherwise you will have to press it again.

### 4. Invite friends to join

Players may access the the game at [http://localhost:4046](http://localhost:4046). On other computers (or phones), you will need to enter the computer's local IP or use a tunneling service like [ngrok](https://ngrok.com). Alternatively, you could deploy this yourself.

## Known issues

-   Sometimes, duplicate tasks are assigned (temporary workaround is to start another game)
-   On some Android phones, hiding the browser will reset its state, therefore losing your tasks
