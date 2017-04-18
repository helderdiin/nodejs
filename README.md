# Node.js

> Repositório para estudos de coisas legais com Node.js

# Docker

## Docker machine

Para criar a máquina virtual (caso ainda não tenha) se você estiver em versões antigas do Docker ou no Windows, utilize os comandos:

``` bash
$ docker-machine create dev --driver virtualbox --virtualbox-disk-size "5000" --virtualbox-cpu-count 2 --virtualbox-memory "2048"
$ eval "$(docker-machine env dev)"
```

## Docker image

Para criar uma imagem do projeto utilize os comandos (dentro do diretório do projeto):

``` bash
$ docker build -t node-docker-image .
$ docker run -d -p 4500:4500 --name node-docker node-docker-image
```

## Acesso

Para descobrir o IP da máquina virtual utilize os comandos:

``` bash
$ docker-machine ip dev
```