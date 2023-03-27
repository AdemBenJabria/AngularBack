## [Testez notre application en cliquant ici (API)](https://angularmiage-u4il.onrender.com/api/assignments/)
# Projet d'authentification Angular et de gestion des devoirs

Ce projet est une implémentation d'une API pour l'authentification des utilisateurs et la gestion des devoirs. Il utilise Node.js, Express, et MongoDB pour stocker les données des utilisateurs et des matières. L'authentification est basée sur les JSON Web Tokens (JWT) pour sécuriser les communications entre le client et le serveur.

## Prérequis

-   Node.js (version recommandée: 14.x ou supérieure)
-   MongoDB
-   Un éditeur de code (par exemple, Visual Studio Code)

## Installation

1.  Clonez ce dépôt:

`git clone https://github.com/[username]/[repository].git` 

2.  Accédez au dossier du projet:

`cd [repository]` 

3.  Installez les dépendances:

`npm install` 

4.  dans le fichier `config.js` ajoutez vos informations de configuration:

`module.exports = {`
`secret: "votre_clé_secrète",`
  `public: "votre_clé_publique",`
`'jwt_secret': secret};`

5.  Démarrez le serveur:

`npm start` 

Le serveur sera accessible à l'adresse [http://localhost:8080](http://localhost:3000/)

## Utilisation

L'API est composée de plusieurs routes pour gérer l'authentification des utilisateurs et la gestion des devoirs.