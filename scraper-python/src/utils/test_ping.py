import requests

def i_request(url: str, timeout: int = 3) -> bool:
    """ping de rota.
    """

    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:147.0) Gecko/20100101 Firefox/147.0'
    }
    
    try:
        # Tenta HEAD primeiro (mais rápido)
        response = requests.head(url, headers=headers, timeout=timeout, allow_redirects=True)
        
        # Se HEAD falhar (405), tenta GET com stream
        if response.status_code == 405:
            response = requests.get(url, headers=headers, timeout=timeout, stream=True)
            response.close()
        
        return 200 <= response.status_code < 300
        
    except requests.exceptions.RequestException:
        return False