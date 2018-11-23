# LAB10
- Se creo una aplicacion basica donde se pueda ingresar un listado de trabajadores 
  el cual haga la tarea de ingresar a una base de datos los datos mas rapido y efectivo
- Se mantiene la parte visual de la data con el un base de datos local en cache donde redis funciona solo se crea
  se elimina o se actualiza, ya que esto hace mostrar la data de forma rapida y de forma inmediata sin que 
  se pierda informacion o que tengamos una perdida de informacion al estar manejando la informacion
- Se uso Angular 6, con unas pequeñas animaciones las cuales hicieron un poco mas llamativo al crear, eliminar 
  o editar
- Se uno las librerias ya predetermidads de node_modules
- La aplicacion se encuentra corriendo en AWS en un servidor de Linux, para poder usar la menor cantidad de recuros y no depender
  de una gran cantidad de recursos en el servidor, el Servidor es http://18.224.93.105:4200/ se manejo con una IPV4 publica
- En cada laboratorio que se realizaba se agregaban nuevas cosas haciendo esto un poco mas facil y mas rapido al agregar que no         tener fases en el mismo.
- Al principio se intento crear una API que le diera respuesta a ASP.CORE, pero ese no era la idea final de este curso asi que  se          volvio a crear creando una App de la cual, si se siguiera podria alimentar o ser alimentada por otros servicios
- En la parte de redis se presento errores y problemas ya que mi computadora me bloqueo puertos al momento de instalar REDIS, 
  la solucion que se realizo fue un formateo de computadora ya que ninguna solucion encontrada funciono
- Otro reto fue crear el docker-compose ya que tenia que usa una buena tabulacion en el mismo lo cual hacia que se mantuviera un orden
- En el momento se tienen unos datos en la base de datos como datos de prueba que se ingresaron para la demostracion y prueba que     que la apicacion se encuentra funcionando, en el servidor


# Angular-App-API

##Proyecto de Programacion WEB

El propósito de Programación Web era que al finalizar el curso se tuviera una pagina Web Full Stack alojada en la nube.

##Contrucción de la pagina

    FrontEnd en Angular 
    BackEnd con NodeJs, MongoDB
    FullStack con Redis
    Docker
    Docker in Amazon Web Service y MongoDB en AWS
    
    
# FrontEnd
Se realizo el CRUD en Angular,  Se empleo Angular-Bootstrap 4 para manejar el diseño de la página.

Se siguio la guia para crear una App en Angular del Git. Los comandos que se ejecutaron fueron los siguientes:

    ng new name-app
    npm install -g @angular/cli
    npm install --save @ng-bootstrap/ng-bootstrap
    import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
