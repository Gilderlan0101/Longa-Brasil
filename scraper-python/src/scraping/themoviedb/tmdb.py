import os
import sys
from pathlib import Path

# Adiciona o diretório raiz do projeto ao sys.path
current_file = Path(__file__).resolve()  # Caminho completo do arquivo atual
project_root = (
    current_file.parent.parent.parent.parent
)  # Sobe até scraper-python

# Adiciona o diretório raiz ao path do Python
if str(project_root) not in sys.path:
    sys.path.insert(0, str(project_root))
    print(f'Project root adicionado: {project_root}')

        

import re
import requests
import asyncio
import aiohttp
from src.utils.test_ping import i_request
from src.utils.extract_domain_name import extract_domain_name as format_url
from src.core.config import ConfigApp

from bs4 import BeautifulSoup as Scraping

# Formata pequenos textos simples




class Themoviedb:
    """
    Themoviedb: Classe responsável por realizar raspagem de dados do site The Movie Database (TMDB).

    O TMDB (The Movie Database) é uma base de dados colaborativa e comunitária sobre filmes e séries de TV,
    fundada em 2008. A plataforma se destaca por:

    - Ser completamente construída e mantida pela comunidade
    - Oferecer um dos maiores acervos de metadados de entretenimento do mundo
    - Possuir forte foco internacional com suporte a 39 idiomas oficiais
    - Disponibilizar uma vasta coleção de posters e imagens em alta resolução (mais de 1.000 imagens adicionadas diariamente)
    - Ser utilizada em mais de 180 países por milhões de usuários
    - Processar mais de 10 bilhões de requisições diariamente
    - Ser uma plataforma confiável utilizada por mais de 1,5 milhão de desenvolvedores e empresas

    A classe implementa métodos para extrair informações como:
    * Detalhes de filmes e séries (título, sinopse, data de lançamento)
    * Elenco e equipe técnica
    * Avaliações e pontuações
    * Posters e imagens
    * Informações regionais específicas
    * Metadados completos de produção

    Attributes:
        base_url (str): URL base do site TMDB
        session (requests.Session): Sessão HTTP para manter cookies e headers
        headers (dict): Headers HTTP para simular um navegador real
        timeout (int): Tempo limite para requisições
    """

    def __init__(self):
        """
        Inicializa a classe Themoviedb com configurações padrão para raspagem.

        Define:
        - URL base do site
        - Headers HTTP com User-Agent realista
        - Configurações de timeout
        - Sessão de requisições
        """

        self.origin = 'https://www.themoviedb.org/?language=pt-BR'


        # Local onde salvamos os dados. Salve em um banco local futuramente.
        self.data_json = {}

        # Configurações geral do app
        self.config = ConfigApp()

        # Métodos que devem inicia junto a class
        self.is_live()

    def is_live(self):
        """Testar se o link esta em produção"""
        ping = i_request(url=self.origin)
        domain = format_url(url=self.origin)

        if ping:
            print(f'{domain} is run [200] OK')
            return True

        else:
            print(f'{domain} is run [Error]!')
            return False

    async def get_html(self):
        """
        get_html: Responsável por buscar toda a estrutura do site.
        """
        try:
            # Usando aiohttp em vez de requests (que é síncrono)
            async with aiohttp.ClientSession() as session:
                async with session.get(
                    url=self.origin,
                    headers=self.config.HEADERS,  # Ajuste conforme seu config
                    timeout=aiohttp.ClientTimeout(total=10),
                ) as response:

                    if response.status == 200:
                        html = await response.text()
                        soup = Scraping(html, 'html.parser')
                        print(soup)
                        return soup
                    else:
                        print(f'Erro {response.status}')
                        return None

        except Exception as e:
            print(str(e))
            return None



    async def title(self):
        """
        title: Rertona o nome do site: 
        """
        get_title = await self.get_html()
        title = get_title.title

        # adiciona no dicionario de informações
        self.data_json['title'] = str(title).replace("<", "").replace(">", "").replace("/", "").replace('title', ' ')
        return self.data_json['title'] | 'Não econtrado'



# Jeito 2: Se quiser testar diretamente (adicione no final do arquivo)
if __name__ == '__main__':
    tmdb = Themoviedb()
    asyncio.run(tmdb.get_html())
    asyncio.run(tmdb.title())

