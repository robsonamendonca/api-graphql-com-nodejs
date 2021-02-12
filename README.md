# Como construir uma Api GraphQL com NodeJS (simples)

## Começo

npm i yarn -g

##Crie um diretorio do projeto (sem clone)

yarn init -y

##Clone 

git clone https://github.com/robsonamendonca/api-graphql-com-nodejs.git
cd api-graphql-com-nodejs.gi
yarn install
yarn start


##Setup

yarn add express graphql express-graphql --save
ou
npm install express graphql express-graphql --save

##Agilidade

yarn add nodemon -D
ou
npm install –save-dev nodemon

##Rodando e testando

yarn start

##Acesse

http://localhost:3333/graphql 

###Playground ( graphiql: true ) ::

 {
                 hello
 }

###url ( graphiql: false )

http://localhost:3333/graphql?query={hello}
