# CRUD de Publicaciones con Angular 19 y GoRest

Esta aplicación Angular implementa un CRUD de publicaciones basado en la API pública de GoRest ([https://gorest.co.in/public/v2/posts](https://gorest.co.in/public/v2/posts)).

## Funcionalidades
- **Listar Publicaciones:** Se muestran todas las publicaciones disponibles.
- **Ver Detalle:** Al hacer clic en una publicación se muestra el detalle.
- **Crear Publicación:** Se pueden crear nuevas publicaciones mediante un formulario reactivo.
- **Editar Publicación:** Se pueden editar publicaciones existentes.
- **Eliminar Publicación:** Permite eliminar publicaciones.

## Instalación y Configuración
1. Clona el repositorio y ubicarse en la raiz del proyecto:
   ```bash
   git clone https://github.com/yancertuche/crud-gorest.git
   cd crud-gorest
2. Instala las dependencias:
    ```bash
    npm install
3. Configura tu token y id de Usuario de GoRest creando variables de entorno en la siguiente ruta del proyecto:  `src/environments/environment.ts`

    ```typescript
        export const environment = {
            token: 'TU_TOKEN_DE_GOREST',
            userId: xxxx
        };
4. Inicia la aplicación:
    ```bash
        ng serve
5. Abre http://localhost:4200 en tu navegador y empieza a interactuar! 
|
## Estructura del Proyecto

el proyecto se compone de las siguientes carpetas y archivos relevantes:
- **src**|
    - **app**
        - 3.1 **Models**: Directorio que define la estructura (interfaz) para las publicaciones.
        - 3.2 **Components**: Directorio donde se implementan los omponentes para la aplicación
        - 3.3 **services**: Directorio donde ser implementan los servicios encargadod de gestionar las operaciones      CRUD    con la API de GoRest.
        - 3.4 **app-routing.module.ts**: Archivos que configura las rutas de la aplicación, asignando URLs a componentes.
        - 3.5 **app.component.ts**: Archivo del componente raíz que sirve de contenedor principal e incluye un `<router-outlet>` para el enrutamiento.
        - 3.6 **app.module.ts**: Archivo del módulo raíz que declara todos los componentes e importa los módulos necesarios.
        - 3.7 **environments**: Directorio que se debe crear para almacenar los archivos de onfiguración para el entorno de desarrollo (incluye variables como el token e id de Usuario de GoRest).
    - **index.html**: Archivo HTML principal que carga la aplicación Angular.
    - **styles.css**: Estilos globales; aquí se definen variables CSS, tipografías, colores y reglas generales relacionadas a los lineamientos gov.co.
