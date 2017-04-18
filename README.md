# Node.js

> Repositório para estudos de coisas legais com Node.js

# RabbitMQ

## Instalando

Faça pull da imagem do rabbitmq via docker:

``` bash
$ docker pull rabbitmq
```

Crie um container com RabbitMQ:

``` bash
$ docker run -d --hostname my-rabbit --name some-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

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