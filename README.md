## Node: Obtener Listado de Números Primos.

El siguiente proyecto te permite obtener según un número dado, un listado de números primos ordenados de manera descendente. 
El rango de este listado se encontrará entre el número dado y el número 2.

## Uso

Al consultar la siguente ruta: 

http://localhost:4000/api/numbers/prime/15

pasando el parametro: 15, lo siguiente sera el resultado.

```
{
    primeNumbers: "13,11,7,5,3,2"
}
```
El puerto esta definido en el archivo .env en este archivo se puede realizar la modificación, en caso de que este archivo
no exista, el aplicativo usara por defecto el purto 3000


## Instalación

Para realizar la instalación del proyecto y sus dependencias se requiere ejecutar en consola el siguiiente comando:

```
$ npm install 
```

## Ejecución

Para poder ejecutar la aplicación y hacer uso de ella, se requiere realizar el paso anterior "Instalación" y posterior a 
esto ejecutar el siguiente comando

```
$ npm start 
```

## Pruebas

Para visualizar las pruebas unitarias que se ejecutaron sobre el proyecto, es necesario ejecutar el siguiente comando en 
consola ubicandose dentro del proyecto.

```
$ npm test 
```

## Dockerfile

El proyecto se encuentra en una imagen pública, la cual puede ubicar [Aquí](https://hub.docker.com/r/josegmt/prueba-tecnica-stack-mean)

Para bajar la imagenn use:

```
$ docker pull josegmt/prueba-tecnica-stack-mean 
```

Para correr la imagen en un contenedor usar: 

```
$ docker run -d -p 3000:4000 josegmt/prueba-tecnica-stack-mean:test-stack-mean 
```

Para visualizar el proyecto lo podra ver en la siguiente url

```
$ http://localhost:3000/ 
```
