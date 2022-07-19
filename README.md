## Sherry Tube
Este proyecto es una aplicación de tipo MERN, donde se realizo una copia de funcionamiento de Youtube.

#### Especificaiones
- Frontend
  - ReactJs
  - Redux + Redux-toolkit
  - Styled components
- Backend
  - Express + NodeJs
  - Validación de errores
- Base de datos no relacional
  - MongoDB
- Autenticación
  - JWT 
  - Protección de datos
  - Registro con email y Google 
- Firebase
  - Gestor de imagenes
  - Gestor de videos
  
## Requisitos
Copiar sus credenciales de firebase al archivo de configuración 
```bash
./client/src/firebase.js
```
#### 
El archivo .env debe tener dos variables (MONGO, JWT) donde mongo es la url de su bd y la jwt es un texto al azar donde debe tener una frase secreta poder generar el token 
```bash
./server/.env
```
## Instalación

#### FrontEnd
```bash
cd ./client
npm install 
npm start
```

#### Backend
 ```bash
cd ./server
npm install 
npm start
```

## Diseños
#### Login de SherryTube
![Login de SherryTube](https://github.com/pdrgrds/Sherry-Tube/blob/master/Design/Login%20-%20Register.png)
#### Pantalla Principal de SherryTube
![Pantalla Principal de SherryTube](https://github.com/pdrgrds/Sherry-Tube/blob/master/Design/Principal.png)
#### Videos de SherryTube
![Videos de SherryTube](https://github.com/pdrgrds/Sherry-Tube/blob/master/Design/Replay.png)
