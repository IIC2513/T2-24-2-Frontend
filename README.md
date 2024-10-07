# General
### App [1 punto]
| **Criterio**                           | **Puntaje** |
|----------------------------------------|-------------|
| Incluyen el navbar en el `<body>`      | 1           |

---

### Navbar [1 punto]  
| **Criterio**                           | **Puntaje** |
|----------------------------------------|-------------|
| Tener logo                             | 0.25        |
| Mostrar nombre                         | 0.25        |
| Tener links a otras páginas            | 0.50        |




# Pages
### RecipePage [4 puntos]
| **Criterio**                                      | **Puntaje** |
|---------------------------------------------------|-------------|
| Uso del método GET para obtener todas las recetas | 1           |
| Uso de grilla 3x3                                 | 1           |
| Paginación (ver final de la página)               | 0.5         |
| Paginación funcionando correctamente              | 0.5         |
| Uso del componente Card                           | 1           |

---
### CreatePage [4 puntos]
| **Criterio**                                            | **Puntaje** |
|---------------------------------------------------------|-------------|
| Uso del método POST                                     | 1           |
| Inclusión de todos los campos en el formulario          | 1           |
| Validación para no permitir enviar si falta algún campo | 1           |
| Mostrar mensaje de éxito                                | 1           |





# Components
### RecipeCard [0.75 puntos]  
| **Criterio**                           | **Puntaje** |
|----------------------------------------|-------------|
| Mostrar imagen                         | 0.25        |
| Mostrar título                         | 0.25        |
| Mostrar descripción                    | 0.25        |

---

### RecipeModal [5 puntos]  
| **Criterio**                                                        | **Puntaje** |
|---------------------------------------------------------------------|-------------|
| Mostrar título                                                      | 0.25        |
| Mostrar descripción                                                 | 0.25        |
| Usar `<li>` para mostrar ingredientes                               | 0.25        |
| Usar `<li>` para mostrar pasos                                      | 0.25        |
| Mostrar tiempo de preparación                                       | 0.25        |
| Mostrar evaluación                                                  | 0.25        |
| Mostrar categorías (No sirve mostrarlo con [])                      | 0.25        |
| Tener botón de salir                                                | 0.25        |
| Uso de `<button>` en la edición                                     | 0.25        |
| **Uso del componente `RecipeForm` para editar**                     |             |
| Cargar toda la información correctamente al editar                  | 0.25        |
| Realizar el PUT correctamente al editar                             | 0.25        |
| Tener botón de cancelar en la edición                               | 0.25        |
| Uso de un modal (superposición a la página)                         | 1.00        |
| Uso de `<button>` en el delete                                      | 0.25        |
| Eliminar correctamente                                              | 0.75        |

---

### PageNavigator [1 punto]  
| **Criterio**                            | **Puntaje** |
|-----------------------------------------|-------------|
| Avanzar y retroceder correctamente      | 0.25        |
| Ir al inicio y fin correctamente        | 0.25        |
| Mostrar página actual                   | 0.25        |
| Mostrar total de páginas                | 0.25        |

---

### RecipeForm [10 puntos]  
| **Criterio**                                            | **Puntaje** |
|---------------------------------------------------------|-------------|
| Contener todos los campos                               | 2           |
| Usar formato correcto en las listas (1 pto c/u, total 3)| 3           |
| No permitir enviar si falta algún valor                 | 1           |
| Validar correctamente campos numéricos (1 pto c/u)      | 2           |
| Validar correctamente el link                           | 1           |
| Usar el PUT correctamente                               | 1           |





# Documentación
Revisar el README.md de [este repositorio](https://github.com/IIC2513/T2-24-1) para más información.


---
## Importante
- Las dependencias del proyecto deben ser las siguientes:
```bash
  "dependencies": {
    "axios": "^1.6.8",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  }
```
En caso de que este distinto, deben colocar en la columna "Utiliza componentes prehechos" Verdadero.

- No deben tener el directorio `node_modules` en su repositorio. Si lo tienen, deben colocar Verdadero en la columna de "Subió node_modules".

- La pauta esta en este [link](https://github.com/IIC2513/T2-24-2-Frontend)
