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
| Path | Description |
| :--- | --- |
| . | |
| ├── config/ | Configuration files  |
| ├── public/ | Web server files (DocumentRoot)  |
| │   └── .htaccess | Apache redirect rules for the front controller |
| │   └── index.php | The front controller |
| ├── templates/  | Twig templates |
| ├── src/  | PHP source code (The App namespace)
| ├── tmp/  | Temporary files (cache and logfiles) |
| ├── vendor/ | Reserved for composer |
| ├── .htaccess  | Internal redirect to the public/ directory |
| └── .gitignore | Git ignore rules |
