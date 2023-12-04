# Introducción

---

Las bases de datos tienen precedencia desde la necesidad de tener organizada y almacenada la información, un ejemplo, 
son las bibliotecas, las cuales tienen organizados lo libros por categoría, autor, título, en otras cosas, con el paso 
del tiempo la necesidad de almacenar información llega los sistemas digitales, con una gran cantidad de datos que
necesitan ser organizados, de ahi que existan software especializado para guardar y manipular estos datos

## Base de datos

Llamamos base de datos a toda la información que está almacenada, estructurada y relacionada entre sí, este puede 
almacenarse de distintas formas, pero el concepto de base es la misma.

Quizá lo más cercano a una base de datos que se tenga contacto sea un archivo de excel, el cual consiste en la
manipulación en tablas, es bastante utíl cuando son pocos datos, sin embargo, con vaya avanzando la cantidad y la 
complejidad de los datos, se vuelve difícil mantener la integridad de los datos y el software se vuelve ineficiente para
la manipulación de los datos, de aquí surge software especializado que cubre estos aspectos y más llamado **Gestor de 
Base de datos**

## Gestores de Base de datos
Los gestores de base de datos es el software especializado encargado de crear y manipular la base de datos, existen 
diferentes alternativas a gestores de base de datos, por mencionar algunos de los más populares

- mysql
- mariadb
- postgresql
- sqlserver 
- firebird
- sqlite
- mongodb

Todos estos _gestores_ (exceptuando mongodb) se clasifican dentro de las bases de datos _relacionales_ dado que todas tiene un estructuras 
definidas, se indagara más adelante

::: info
En informatíca, cuando nos referimos a una base de datos se piensa implícitamente en el gestor de base de datos
:::

## Tipos de base datos

Las bases de datos se pueden clasifican según como estos almacenan la información, y estos son base de datos 
**relacional** y **no relacional**, también son llamados base de datos **sql** y **No Sql** respectivamente
(más adelante indagaremos más que significan las siglas sql)

### Base de datos relacional

Estas bases se caracterizan por _esquematizar_ los datos y definir las relaciones entre los mismos, en palabras generales,
la información se definen en tablas que contienen las columnas con los datos que se deben almacenar y qué conexión tienen
las tablas entre sí, en este tipo de tablas es importante tener bien definido que vamos a almacenar y como lo vamos a hacer,
dado que estos respetan el esquema se define, una vez definido y con datos, no está debe alterasé el esquema **ejemplo**


Tabla de alumnos

| nombre | edad | promedio |
|--------|------|----------|
| Pedro  | 23   | 8.4      |
| marcos | 25   | 9.4      |
| jesus  | 22   | 8.6      |

Este caso la tabla alumnos se compone por nombre, edad y promedio y no espera un dato más o menos, de ser el caso la 
tabla debe ser alterada

### base datos no relacional
Estas bases como tal no requieren de un esquema, por lo que no require de antemano saber como están conformados los datos
que va a almacenar, simplemente guarda lo que se le indique, la base datos más popular en este tipo es mongodb, un ejemplo
***ejemplo***

~~~bson
{
  "nombre": "Pedro",
  "edad": 23,
  "puesto": "Developer",
  "promedio": 8.4
}
...
{
  "name": "Marcos",
  "info": {
    "edad": 12,
    "promedio": 13
  }
}
~~~

En último ejemplo, no se tiene un esquema por considerar, por lo tanto se puede guardar de cualquier forma, sin embargo,
siempre se recomienda tener homogeneidad con los datos

