# EcoPontos

Site com os pontos de coleta de lixo eletrônico em Cuiabá (MT): endereço, horário, telefone e link para o mapa de cada local, além de uma lista do que pode ser descartado.

## Funcionalidades

- Busca por nome ou bairro e filtro por tipo de local (ecoponto público, comércio, cooperativa, empresa recicladora)
- Link direto para o Google Maps de cada ponto
- Modo claro e escuro, com a escolha salva no navegador
- Layout responsivo e navegável por teclado

## Como rodar

O site é estático, sem etapa de build. Basta abrir o `index.html` no navegador ou servir a pasta:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.

## Estrutura

```
index.html        página principal
css/styles.css    estilos
js/script.js      dados dos pontos de coleta, busca e filtro
js/theme.js       alternância de tema
img/              imagens
```

## Adicionar ou editar um ponto de coleta

Os pontos ficam no array `collectionPoints`, no início de `js/script.js`. Cada item segue o formato:

```js
{
    id: 18,
    name: "Nome do local",
    address: "Rua, número – Bairro",
    phone: "(65) 99999-9999",   // deixe "" se não houver
    hours: "Seg a sex, 8h às 18h",
    type: "cooperativa",        // publica | loja | cooperativa | empresa
    lat: -15.60,
    lng: -56.09,
    mapsLink: "https://www.google.com/maps/..." // opcional
}
```
