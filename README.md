# proyecto_deliah



Este proyecto esta desarrollado en node.js con el framework ExpressJS. Los pasos para la ejecución del servidor son los siguientes:

## Servidor 

1. Instalar el entorno de ejecución de Node.js y el gestor de archivo NPM

2. Clonar el repositorio 

3. Abrir una ventana de CMD

4. Navegar hasta la ruta donde se ha clonado el repositorio 

5. ejecutar el  siguiente comando: 

   ```
   npm i
   ```

## Base de datos

Para este proyecto se usa MySql como motor de base de datos. se debe instalar el motor localmente, el cual de puede descargar desde la siguiente url https://www.mysql.com/downloads/ . Tambien se puede usar XAMPP que trae una instancia de MySql ya instalada. 

Si se utiliza la instalación del motor es necesario configurar una instancia local de MySql.

Cuando se tenga correctamente instalado el motor de base de datos, se debe navegar hasta la raiz del proyecto clonado, y acceder a /Documentacion/base_de_datos, ahí se encuentran los archivos para generar la base de datos los cuales deben ser ejecutados en la consola de MySql en el siguiente orden:

1. tables_sql.sql (Genera la estructura y relaciones de las tablas)
2. inserts_sql.sql (Inserta los datos iniciales necesarios para iniciar el proyecto)

## Variables de entorno

Las variables necesarias para la inicialización del proyecto se encuentran en un archivo nombrado **.env**, en este archivo se deben poner las siguientes variables: 

- **NODE_ENV** esta variable define el entorno donde se va a correr el proyecto

  ```
  NODE_ENV=development
  ```

- **DATABASE** Json con la conexión a la base de datos, esta configuración se debe hacer de acuerdo con la instalación anteriormente realizada

  ```
  DATABASE= {"HOST": "localhost","USER": "root","PASSWORD": "password","DB": "delilah_resto","PORT": "3306","dialect": "mysql"}
  
  ```

- **PORT** puerto que se expone para que se pueda consumir la API

  ```
  PORT=3000
  ```

- **TOKENPASSWORD** password de encriptación para el token de acceso

  ```
  TOKENPASSWORD=Ac4m1c4_2021!
  ```

## Inicialización del servidor

Por ultimo cuando se tiene correctamente instaladas las dependencias y configuradas las variables de entorno, se debe iniciar la API de la siguiente forma:

Abrir una nueva ventana de CMD y navegar hasta la ruta del proyecto, ubicarse en la carpeta /project y ejecutar el siguiente comando:

```
node app.js
```

si el servidor se inicio correctamente vera algo como esto:

```
El servidor esta escuchando en el puerto 3000
Executing (default): SELECT 1+1 AS result
Conectado.
```

Para probar los diferentes endpoint de la API puede usar postman, en el actual repositorio en la carpeta documentacion/coleccion_postman se incluye un archivo el cual puede importar en su programa y tendra detallados todos los ejemplos para probar.

Adicionalmente se tiene un archivo documentación para revisar los requerimientos de cada endpoint.

