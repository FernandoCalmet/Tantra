# Tantra Web Microservices with PHP :coffee:

> [View project status](https://github.com/orgs/khanakat/projects/1)

## Requirements
- PHP 7.x
- MySQL 5.7+
- MSSQL 9.0+
- Apache 
- Apache mod_rewrite module
- Composer

## Directory structure
> .  
> ├── config/             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configuration files  
> ├── public/             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web server files (DocumentRoot)  
> │   └── .htaccess       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apache redirect rules for the front controller  
> │   └── index.php       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The front controller  
> ├── templates/          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twig templates  
> ├── src/                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHP source code (The App namespace)  
> ├── tmp/                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temporary files (cache and logfiles)  
> ├── vendor/             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserved for composer  
> ├── .htaccess           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internal redirect to the public/ directory  
> └── .gitignore          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git ignore rules  
