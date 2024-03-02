# Puntos a considerar sobre una prueba técnica, usando esta en práctica

Al iniciar el proyecto:

- El proyecto se inicializa con Vite.js, pero para inicializar un proyecto, se inicia
    con Vanilla Javascript, porque en muchas empresas requieren ver que sepas crear
    un punto de entrada para iniciar un proyecto con React.

- Se installa el Plugin de React con Vite, como existe en Babel o en Webpack.

- Se installan las dependencias de NPM que son react (la biblioteca de React) y react-dom 
    (para renderizar los componentes en el   navegador)

- Después se crea la configuración de Vite creando un archivo vite.config.js, que es donde se llama al plugin de react
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```

- Lo importante es que en muchas ocaciones desean saber si el que hace la prueba técnica sabe crear un punto de entrada a la aplicación.

- En el index.html se carga el index.js que es el punto de entrada. En main.js se añade lo siguiente.
```
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(<h1>Hola Mundo</h1>)


- A la hora de correr el proyecto en este caso con Vite con ```npm run dev```. Como los archivos con .js no entiende código jsx,    se tiene que cambiar el archivo de main.js a main.jsx para que pueda correr.

- IMPORTANTE: Es crucial mostrar algo que se muestre y no dejar en blanco, y por eso anteriormente en el 
    root.render en main.jsx se añadió un  h1 con un hola. Tratar de mantener la visualización de lo que pida 
    hacer a medida de que se vaya progresando.

- Después de inicializar el proyecto, es muy IMPORTANTE instalar un eslinter para el código y 
    saber configurarlo rápidamente.

    En este caso se optó por Standard instalándolo así ```npm install standard -D``` y en este caso adicionando la configuración en el archivo
    package.json agregándole la ruta del eslinter

```
    ,
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```

- Aunque la prueba técnica no sea muy difícil, preguntarán cosas sobre cómo se hizo.

*****
Después de dividir la prueba en tres partes en este caso, al hacerla, parte por parte se tiene que mostrar lo que se pide.

En este caso, la primera parte desglosada sería: "- Recupera un hecho aleatorio de gatos de la primera API." Se tiene que mostrar de manera progresiva al estar haciendo la prueba.

Como consejo, para consumir API's muchas empresas no dejan utilizar dependencias externas como ReactQuery, 
    Axiosm GraphQL, ya sea que no utilicen dependencias o quieren saber si sabes manejar peticiones 
    datos de la forma más básica. Se recomienda usar fetch()  para este caso.
    Así quedaría usándo fetch() en React dentro de un useEffect
    ```
        useEffect(() => {
        fetch()
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])
    ```

Antes de codear, IMPORTANTE entender el problema ya desglosado y checar las APIS

Antes de consumir una API es importante checar la fuente de estas, para ENTENDER cómo funciona. En ocaciones 
    sólo dan la página de la documentación de la API para demostrar que eres capaz de buscar la info en la docu. 

Una vez conociendo la API, es IMPORTANTE que dentro de 'useEffect' se considere las dependencias. Como consejo para 
usar 'useEffect' para que nunca se olvide o por nervios, se recomienda empezar escibir por las dependencias, es decir: 
    ```
        // ()
        useEffect([])
    ```
Y luego completandolo con su siguiente parámetro
    ```
        useEffect(() => {}, [])
    ```
Si se olvida de eso, sería un lío al ejecutar la App.
