#!/bin/bash

echo "🚀 Configurando projeto Longa Brasil..."

# Instalar dependências Python
echo "📦 Instalando dependências Python..."
cd scraper-python
if command -v poetry &> /dev/null; then
    poetry install
else
    pip install -r requirements.txt
fi

# Instalar Playwright browsers
echo "🌐 Instalando browsers para Playwright..."
python -m playwright install

# Instalar dependências Node.js
echo "📦 Instalando dependências Node.js..."
cd ../api-express
npm install

# Criar arquivos de configuração
echo "⚙️  Criando arquivos de configuração..."
cd ..
cp scraper-python/.env.example scraper-python/.env
cp api-express/.env.example api-express/.env

echo "✅ Configuração concluída!"
echo ""
echo "📋 Próximos passos:"
echo "1. Configure as variáveis de ambiente em .env"
echo "2. Inicie o Redis: docker-compose up redis -d (no diretório scraper-python)"
echo "3. Inicie a API: cd api-express && npm run dev"
echo "4. Teste o scraper: cd scraper-python && poetry run scrape-movies --limit 5"
