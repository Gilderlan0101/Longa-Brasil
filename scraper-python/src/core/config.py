"""
config.py: Todas as configuração do Beautiful Soup e FastAPI estarão neste arquivo.
"""
from typing import Dict, Any, Optional


USER_AGENTE = 'Mozilla/5.0 (X11; Linux x86_64; rv:147.0) Gecko/20100101 Firefox/147.0'


class ConfigApp:

    def __init__(self):
        # Local onde vamos salva as configuração
        self.config = Dict[str, any]
        
        """
        Inicializa as configurações padrão da aplicação incluindo headers HTTP, 
        timeouts e parâmetros de requisição para o Beautiful Soup.
        """
        
        self.USER_AGENT = USER_AGENTE
        
        self.HEADERS = {
            'User-Agent': self.USER_AGENT,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        
        self.TIMEOUT = 30
        self.MAX_RETRIES = 3
        self.DELAY_BETWEEN_REQUESTS = 2


    def headers(self) -> Dict[str, any]:
        return self.HEADERS

    def show_config(self):
        """Exibir configurações atuais em /api/show/config"""
        """
        Retorna um dicionário com todas as configurações atuais da aplicação
        incluindo USER_AGENT, HEADERS, TIMEOUT, MAX_RETRIES e DELAY_BETWEEN_REQUESTS
        para visualização através da rota /api/show/config.
        """
        pass


    