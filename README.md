# Node Docker

> Repositório para estudos de Docker em ambiente Node.js.

# Docker machine

Para criar a máquina virtual utilize os comandos:

``` bash
$ docker-machine create dev --driver virtualbox --virtualbox-disk-size "5000" --virtualbox-cpu-count 2 --virtualbox-memory "2048"
$ eval "$(docker-machine env dev)"
```

# Docker image

Para criar uma imagem do projeto utilize os comandos (dentro do diretório do projeto):

``` bash
$ docker build -t node-docker .
$ docker run -p 4500:4500 node-docker
```

# Acesso

Para descobrir o IP da máquina virtual utilize os comandos:

``` bash
$ docker-machine ip dev
```