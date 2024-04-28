# Estrutura

```
Geração de Chaves: O método elliptic.generateKey('P-256') é usado para criar um par de chaves pública e privada.

Estrutura das Chaves: As chaves são estruturadas em formato JWK, com a chave pública contendo os parâmetros x, y, e a privada incluindo adicionalmente o parâmetro d.

Assinatura: A função sign() é usada para criar uma assinatura da mensagem usando a chave privada.

Verificação: A função verify() verifica se a assinatura é válida usando a mesma mensagem, a assinatura gerada e a chave pública.

```

# JWK

```
JSON Web Key (JWK) é um formato de dados que representa uma chave criptográfica em formato JSON. Ele é utilizado principalmente em tecnologias que envolvem a comunicação de chaves por meios digitais, como JWT (JSON Web Tokens) e JWS (JSON Web Signatures). Um JWK inclui detalhes como o tipo de chave (kty), o algoritmo de curva elíptica (crv para chaves EC), além das coordenadas do ponto da curva (x e y para chaves públicas) e o segredo privado (d para chaves privadas). Este formato facilita o uso, armazenamento e troca de chaves em sistemas baseados em padrões web.
```

# Curvas

```
P-256 (secp256r1)
P-384 (secp384r1)
P-521 (secp521r1)
P-256K (secp256k1)
P-256 (secp256r1), P-384 (secp384r1), P-521 (secp521r1), e P-256K (secp256k1) são nomes de curvas elípticas especificadas no padrão de criptografia. Cada uma dessas curvas tem diferentes tamanhos de bit que se referem à segurança e ao desempenho:

P-256 (secp256r1): Tem 256 bits e é uma das curvas mais comuns usadas em aplicações de segurança.
P-384 (secp384r1): Com 384 bits, oferece um nível mais alto de segurança do que o P-256.
P-521 (secp521r1): Uma curva de 521 bits que proporciona uma segurança ainda mais alta.
P-256K (secp256k1): Também com 256 bits, mas é otimizada para eficiência em certas operações criptográficas e é famosa pelo seu uso no Bitcoin.

Essas curvas são usadas para a criptografia de chave pública, especialmente em tecnologias como TLS/SSL e criptomoedas, onde a segurança e a eficiência das operações de chave pública são críticas.
```
