# Como construir uma Api GraphQL com NodeJS (simples)

## Começo
``` bash
npm i yarn -g
```
## Crie um diretorio do projeto (sem clone)
``` bash
yarn init -y
```

## Clone 
``` bash
git clone https://github.com/robsonamendonca/api-graphql-com-nodejs.git
cd api-graphql-com-nodejs.git
npm install
node app.js
```

## Setup
``` bash
yarn add express graphql express-graphql --save
ou
npm install express graphql express-graphql --save
```

## Agilidade
``` bash
yarn add nodemon -D
ou
npm install –save-dev nodemon
```

## Rodando e testando
``` bash
yarn start
```

## Acesse

`http://localhost:3333/graphql`.

## Playground ( graphiql: true ) ::
``` bash
 {
                 hello
 }
```

## url ( graphiql: false )

`http://localhost:3333/graphql?query={hello}`.

## Instalando ApiDoc

``` bash
npm install apidoc -g
```
## Gerando documentação
O parâmetro -f filtra quais arquivos serão documentos, <b>app.js</b> será o arquivo de utilização atual da aplicação enquanto <b>_apidoc.js</b> guarda o histórico de versionamento. 
O parâmetro -o indica qual pasta será gerado a documentação.
``` bash
apidoc -f app.js -f _apidoc.js -o public/apidoc
```

## Visualizando documentação

Com api rodando, abra em seu browser o endereço `http://localhost:3333`