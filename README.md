# :yin_yang: Tantra Web
> Project developed by [Khanakat](https://www.github.com/khanakat)   
> [View project status](https://github.com/orgs/khanakat/projects/1)  

## Requirements
- NodeJS
- MSSQL
- Express
- Cors
- Cross-Env
- DotEnv
- FS-extra
- HBS
- Morgan
- Multer
- Webpack
- Webpack Cli
- Webpack Dev Server
- Nodemon
- Timeago JS
- Style Loader
- CSS Loader
- Mini CSS Extract Plugin
- HTML Webpack Plugin


## Frontend Directory Structure
| Path | Description |
| :--- | --- |
| . | |
| ├── public/ | Web server files (DocumentRoot)  |
| │   └── css | The front style |
| │   └── js | The front scripts |
| │   └── img | The front images |
| ├── views/  | HBS template |
| ├── services/  | Web services |
| ├── routes/  | Web path |
| ├── models/ | Objects Model Classes |
| ├── .index.js  | index config |

## Backend Directory Structure
| Path | Description |
| :--- | --- |
| . | |
| ├── public/ | Web server files (DocumentRoot)  |
| │   └── index.html | index minified |
| │   └── js | webpack bundle |
| │   └── uploads | images uploaded |
| ├── routes/  | Api path |
| ├── models/ | Objects Model Classes |
| ├── .index.js  | index config |
| ├── .database.js  | database config |
