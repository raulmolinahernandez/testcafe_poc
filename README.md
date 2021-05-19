# README

## Instalación

El único requisito para instalar Testcafe.io es tener instalado Node última versión.

**Comando:**

```[bash]
npm install -g testcafe
```

Nota: si estas intalando Testcafe en macOS te dejo un enlace para que sigas los pasos: <https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe>

## Generación del package.json

Con el siguiente comando generamos un package.json automático para añadir nuestras dependencias y scripts.

**Comando:**

```[bash]
npm init -y
```

## Ejecutar los tests en local

En esta kata de prueba tenemos instalado node, por lo tanto lo ejecutaremos con un script con npm que añadiremos al package.json

```[bash]
"scripts": {
    "test": "testcafe chrome tests/"
}
```

**Comando:**

```[bash]
npm test
```
