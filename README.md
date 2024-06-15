# Snowball-SEO 0.0.0 

Este proyecto es una landing page para [Logical Sistemas](https://www.logicalsistemas.com/).

## 🧰 Tecnologías

- [Astro](https://docs.astro.build/en/getting-started/): Un framework de construcción de sitios web rápido y moderno.
- [Tailwind CSS](https://tailwindcss.com/docs/installation): Un marco de diseño CSS de utilidad de bajo nivel.

## 📒Requisitos

[Node](https://nodejs.org/en) versión 18 +

## 💻  Descarga y ejecución local

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/andrextor/logical-sistemas-landing-page.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd logical-sistemas-landing-page
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

5. Abre tu navegador y visita la siguiente URL:

```url
    http://localhost:4321/
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── CardService.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en el nombre de su archivo.

No hay nada especial en src/components/, pero es ahí donde nos gusta colocar cualquier componente de Astro/React/Vue/Svelte/Preact.

Cualquier activo estático, como imágenes, puede colocarse en el directorio public/."

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contribuciones

Si encuentras algún problema o tienes sugerencias para mejorar el proyecto, siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).