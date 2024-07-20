# Khanakat Web v1.0

You can obtain this website [here](https://ko-fi.com/s/ff9aecda1c).

## Setup Frontend Web

### Install PHP

Download [PHP](https://www.php.net/downloads.php) stable version. Unzip to a folder on `drive C` or you can choose any other drive of your choice.

### Install Composer

Download and install [Composer](https://getcomposer.org/Composer-Setup.exe) to be able to install the project's dependency packages.

> During the installation there is a part where they will give you the option to select a `CheckBox` to define the Path of the `php.ini` file, which is in the folder where you unzipped the PHP files.

### Install dependencies

Now we can put the frontend website files in some directory where we want to host the website. If this is in a local environment you can choose any location on the machine. But if it is in some Web Hosting it must be in the root folder (public).

We can open the web project using [VSCode](https://code.visualstudio.com/) or any other code editor. Now open Terminal and run the command:

```bash
composer install
```

![Install frontend dependencies image](https://github.com/FernandoCalmet/Tantra/blob/master/extras/img/installation/web/websites/web-k-v1-001.png?raw=true)

If everything was executed correctly you will see a `vendor` folder, where all the project dependencies were downloaded.

### Web configuration

Now copy the `.env.example` file, you can do it manually or in the same Terminal run the command:

```bash
copy .env.example .env
```

If we are in local environment run the `ipconfig` command to see your IPv4 address. You must configure this IP in the file that you have copied `.env` in the first line in the `CLIENT_URL` variable and in the `SERVER_URL` variable. 
But if this website is going to be in a WebHosting, the `CLIENT_URL` must be your domain address and in the `SERVER_URL` must be the IP of your server will be there.

You must also put your domain's IP or address in the `composer.json` file. On line 29, in the "start" variable is the same IP that we saw in the `.env` file, which we must replace.

IF we are in local environment we have to execute the command:

```bash
composer start
```

And with this we will have the frontend web project running.

## Setup Backend Web



---

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T41JKMI)
