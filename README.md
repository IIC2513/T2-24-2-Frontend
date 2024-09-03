# Tarea 2 :construction:

* :pencil2: **Nombre:** Completar nombre
* :pencil2: **Correo:** Completar correo

## Código :symbols:

### :computer: Cómo ejecutar este código [1 Punto]

```bash
# Debe tener si o si
# Para instalar dependecias
yarn 

# Para correr el codigo
yarn dev
# o
yarn run
```

### :teacher: Explicación del funcionamiento del código [1.5 Puntos]

Se espera que expliquen el funcionamiento del código, cómo se estructura, qué hace cada archivo (de fotma resumida).

#### 0.5: Mencionen el router
#### 0.5: Mencionen los componentes
#### 0.5: Mencionen el uso de hooks

### :warning: Funcionalidades implementadas y no implementadas

Esto solo facilita su corrección, no asigna puntaje.

## Reflexión :thought_balloon: [3.5 Puntos]

### :scroll: ¿Para que utilizamos *async* y *await* en las funciones? [1 Punto]

#### 0.5: Mencionen que es para funciones asincronas

La respuesta esperada debe mencionar:

    - Es una funcion asincronica
    - Se retorna una promesa

#### 0.5: Mencionen que es para esperar a que una promesa se resuelva

La respuesta esperada debe mencionar:

    - Pausa la ejecución de la función hasta que la promesa se resuelva


### :thinking: En cuanto a códigos de error, ¿qué ocurre al intentar enviar valores que no son válidos? [1 Punto]

La respuesta esperada debe mencionar:

    - Los errores más tipicos son 400, 401, 403, 404, 500
    - Explicación de cada uno

### :adhesive_bandage: Explica la diferencia entre *props* y *state* dentro de un componente React. ¿En qué situaciones utilizarías cada uno? [1.5 Puntos]

#### 0.5: Explicar la diferencia entre *props* y *state*
La respuesta esperada debe mencionar:

    - Props: Son valores que se pasan de un componente padre a un componente hijo
    - State: Son valores que se manejan dentro de un componente
    - Props: Son inmutables
    - State: Son mutables
    - Props: Se utilizan para pasar valores a un componente
    - State: Se utilizan para manejar valores dentro de un componente

#### 0.5: Explicar en qué situaciones utilizarías props
#### 0.5: Explicar en qué situaciones utilizarías state

La respuesta esperada debe mencionar:

    - Props: Cuando se quiere pasar valores a un componente
        i.e: Cuando quieras pasar información o callbacks de un componente padre a un componente hijo.
    - State: Cuando se quiere manejar valores dentro de un componente
        i.e: Por ejemplo, mantener el valor de un input de texto o el estado de un switch.