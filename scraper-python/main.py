from fastapi import FastAPI


class ScrapingApp:
    """
    API de scraping que coleta e estrutura dados para o backend Express.js.
    
    Este app gerencia as rotas e o fluxo de dados, mas a lógica de extração
    deve ficar em módulos especializados. Responsável por entregar informações
    limpas e organizadas para consumo externo.
    """
    def __init__(self):
        self.app = FastAPI(
            title='RoyaleScraper',
            version='1.0.0',

        )

        # Inicia rotas
        self.setup_routes()


    def setup_routes(self):
        pass



    def run(self, port=8000, debug=True):
        pass