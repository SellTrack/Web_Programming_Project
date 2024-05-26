# Base image olarak Node.js kullanıyoruz
FROM node:14

# Uygulama dosyalarının yer alacağı dizini oluşturuyoruz
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları yüklüyoruz
RUN npm install

# Uygulama dosyalarını kopyalıyoruz
COPY . .

# Uygulamayı çalıştırmak için bir komut belirliyoruz
CMD ["node", "index.js"]

# Uygulamanın çalışacağı portu belirliyoruz
EXPOSE 3000
