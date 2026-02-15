from urllib.parse import urlparse

def extract_domain_name(url: str):
        """Extrai apenas o nome do domínio sem www, https ou barras"""
        parsed_url = urlparse(url)
        domain = parsed_url.netloc or parsed_url.path
        
        # Remove 'www.' se existir
        if domain.startswith('www.'):
            domain = domain[4:]
            
        return domain