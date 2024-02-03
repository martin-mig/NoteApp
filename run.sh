#!/bin/bash

# Script para instalar dependencias y ejecutar comandos en las carpetas "backend" y "frontend"

# Acciones para la carpeta "backend"
echo "Instalando dependencias en la carpeta 'backend'..."
cd backend || exit
npm install
echo "Iniciando la aplicación en la carpeta 'backend'..."
npm run start

# Regresar al directorio raíz
cd ..

# Acciones para la carpeta "frontend"
echo "Instalando dependencias en la carpeta 'frontend'..."
cd frontend || exit
npm install
echo "Iniciando la aplicación en la carpeta 'frontend'..."
npm start

# Regresar al directorio raíz
cd ..
