
# Post Management App

Une application de gestion des posts où les utilisateurs peuvent créer, afficher et supprimer des posts. Chaque post contient un titre, une description. L'application communique avec un backend en FastAPI pour stocker et gérer les posts dans une base de données.

## Technologies utilisées

- **Frontend** : React, Axios, Tailwind CSS
- **Backend** : FastAPI, SQLAlchemy, SQLite
- **Outils de développement** : VSCode, Node.js, Python,

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [Python](https://www.python.org/) (version 3.8+)
- [PostgreSQL](https://www.postgresql.org/) ou toute autre base de données SQL

## Installation

### 1. Clonez le repository

Clonez ce repository sur votre machine locale en utilisant Git :

```bash
git clone https://github.com/Z-Isaac08/BlogApp.git
cd BlogApp
```

### 2. Installation du frontend

Allez dans le dossier `client` et installez les dépendances avec npm :

```bash
cd client
npm install
```

### 3. Installation du backend

Allez dans le dossier `server` et créez un environnement virtuel pour Python :

```bash
cd server
python -m venv env
source env/bin/activate  # Sur Windows, utilisez `env\Scripts\activate`
```

Installez les dépendances Python :

```bash
pip install -r requirements.txt
```

### 4. Lancer l'application

#### Démarrer le backend (FastAPI)

Dans le dossier `server`, lancez le serveur FastAPI avec `uvicorn` :

```bash
uvicorn main:app --reload
```

Cela démarrera l'API sur `http://localhost:8000`.

#### Démarrer le frontend (React)

Dans le dossier `frontend`, lancez le serveur de développement React :

```bash
npm start
```

Cela démarrera l'application frontend sur `http://localhost:5173`.

## Utilisation

1. L'application vous permet de consulter les posts existants.
2. Vous pouvez ajouter de nouveaux posts avec un titre et une description.
3. Chaque post peut être supprimé en cliquant sur le bouton "Supprimer".

## Fonctionnalités

- **Affichage des posts** : La liste de tous les posts est affichée à l'écran.
- **Ajout de posts** : Un formulaire permet de soumettre un nouveau post.
- **Suppression de posts** : Les posts peuvent être supprimés par l'utilisateur.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, voici les étapes :

1. Forkez le repository.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`).
3. Commitez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vos changements (`git push origin feature/nouvelle-fonctionnalite`).
5. Ouvrez une pull request.

## Auteurs

- **Isaac N'cho** - *Développeur principal* - [Votre profil GitHub](https://github.com/Z-Isaac08)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
