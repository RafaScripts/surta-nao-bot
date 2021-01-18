# Surta não Bot
## Sobre
Bot do Twitter foi criado para responder os tweets onde for mencionado, exibindo uma mensagem convidando para ouvir a nova música, do cantor [Wander Luiz](https://www.instagram.com/_wanderluiz/), [Surta Não](https://sl.onerpm.com/7032476516?_ga=2.229323420.1417882663.1610680040-814832288.1609726552).

## Setup
- NodeJS v14.15
- [Twit](https://github.com/ttezel/twit)
- [Heroku](https://heroku.com)

### Desenvolvimento

Para utilizar o bot é necessário aduirir as chaves de acesso em  [twitter developers apps](https://developer.twitter.com/en/apps), copiar o arquivo **.env.example** renomeando para **.env** e inserir as chaves `consumer_key`, `consumer_secret`, `access_token` e `access_token_secret`

### Heroku
Para fazer o deploy no Heroku siga os passos abaixo: 

- Crie um [novo *app*](https://dashboard.heroku.com/apps)  
- Tenha o [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) para facilitar o deploy e analizar melhor a aplicação
- Vincule o novo app a entes repositório
```term
heroku git:remote -a nome-do-app-heroku
```
> Ao exececutar o comando a cima será criado um novo *origin* do repositório. Você poderá conferir com o comando a baixo:
```term
git remote -v
```
- Subindo a aplicação para o Heroku
```term
git push heroku master
```
Ao fazer o push o Heroku irá identificar o arquivo [Procfile](https://github.com/flaviofilipe/surta-nao-bot/blob/master/Procfile)
Nele irá conter o *worker* que irá executar o bot.
Neste mesmo arquivo foi necessário adicionar o *web* para que executasse sem que fosse finalizado após 60seg.

Os logs da aplicação poderá ser acompados com o comando a baixo:
```
heroku logs --tail
```
