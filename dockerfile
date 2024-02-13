# Usa una imagen base de Node.js
FROM node

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expón el puerto 3000
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["node", "app.js"]
