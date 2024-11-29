const projects = [
  {
    id: 1,
    title: "Projet Kasa",
    description: "Créez une application web de location immobilière avec React",
    link: "/projects/1",
    image: "/images/projet_kasa.PNG",
    technologies: ["React", "Javascript", "CSS", "NodeJs"],
    githubLink: "https://github.com/LeooCl/Kasa",
    context:
      "Kasa est spécialiste de la location entre particuliers en France depuis 10 ans et une refonte totale pour leur site a été mise en place par Laura la CTO. Vous êtes recruté par Kasa en tant que développeur front-end freelance, avec pour objectif de créer une application web de location immobilière en utilisant React.",
    realization: `Pour mener à bien ce projet, j'ai commencé par suivre l'ensemble des cours OpenClassrooms dédiés à ReactJS afin d'acquérir les bases nécessaires pour utiliser ce framework. J'ai ensuite initialisé le projet avec Vite, un outil de build moderne et performant. Vite a posé quelques défis d'apprentissage initial, notamment pour comprendre son fonctionnement et ses différences avec Create React App (CRA). Cependant, son temps de démarrage rapide et ses optimisations pour le développement m'ont convaincu de l'utiliser. L'une des premières difficultés a été d'architecturer mon code de manière claire et évolutive. Pour y parvenir, j'ai structuré le projet autour de deux principaux dossiers : components, contenant des composants réutilisables, chacun avec ses fichiers CSS et JSX. pages, regroupant les composants correspondant aux différentes pages de l'application, avec également leur propre CSS et JS. Cette séparation m'a permis de maintenir un code organisé, bien que cela ait nécessité une réflexion approfondie sur la manière de structurer les relations entre les composants. Ensuite, j'ai conçu l'application en adoptant une logique Single Page Application (SPA). La gestion des routes a posé un défi initial, notamment pour comprendre et configurer le fonctionnement de React Router. J'ai finalement opté pour gérer le routing directement dans le fichier App.jsx. Ce fichier inclut le composant App, qui sert de point central de l'application et orchestre le rendu des différentes pages. Un autre point complexe était le point d'entrée de l'application dans le DOM. Avec Vite, le fichier main.jsx remplace index.js comme point d'entrée du projet. J'y ai effectué le rendu du composant App dans un conteneur ayant l'id root, ce qui permet de connecter l'application au DOM. Comprendre ce changement par rapport à CRA m'a demandé d'approfondir ma connaissance de Vite et de sa configuration. Enfin, l'intégration des composants réutilisables dans les pages, puis des pages dans le composant App, a nécessité une attention particulière pour éviter les doublons, gérer les états locaux et globaux efficacement, et garantir un rendu fluide de l'interface utilisateur.`,
    difficulties: [
      `Découverte de Vite : La configuration initiale avec Vite, différente de celle de CRA, a nécessité un temps d'adaptation. J'ai étudié la documentation officielle et exploré des tutoriels pour comprendre ses spécificités, notamment son système de configuration et sa rapidité d'exécution.`,
      `Problème d'architecture initiale : Structurer le projet pour qu'il reste clair et scalable a été une étape délicate. J'ai pris le temps de planifier la hiérarchie des dossiers et la logique de séparation des responsabilités entre les composants. Cela m'a permis de simplifier la maintenance à long terme.`,
      `Compréhension de React Router : La gestion des routes et des redirections entre les pages n'était pas intuitive au départ. Pour résoudre cela, j'ai approfondi mes connaissances en consultant la documentation officielle et en réalisant plusieurs mini-projets tests.`,
      `Point d'ancrage dans le DOM avec Vite : M'assurer que l'application était correctement rendue avec le fichier main.jsx a été une étape clé. Après quelques essais et lectures, j'ai consolidé ma compréhension des relations entre React, Vite et le DOM.`,
    ],
  },
  {
    id: 2,
    title: "Mon vieux Grimoire",
    description: "Développez le back-end d'un site de notation de livres",
    link: "/projects/2",
    image: "/images/projet_mon_vieux_grimoire.PNG",
    technologies: ["NodeJs", "Express", "MongoDB", "Postman"],
    githubLink: "https://github.com/LeooCl/Mon-vieux-Grimoire",
    context:
      "Vous êtes développeur back-end en freelance, et vous allez collaborer avec Kevin un développeur front-end, sur la réalisation du site “Mon vieux grimoire“. Ce site est pour un client possédant une chaîne de librairies nommée “Le Vieux Grimoire“. Ce site doit permettre aux membres d'ajouter des livres avec des notes publiques. Kevin est chargé de réaliser le front end du site, et vous, devrez développer le backend du site avec notamment la mise en place l'API, en utilisant NodeJS et son framework Express. Kevin qui a terminé le front-end du site vous envoie les spécifications techniques de l'API, et le code du front-end sur Github. De plus, il vous explique que pour que le projet soit conforme aux bonnes pratiques du Green Code, il faut qu’on prenne en compte la taille des images. Il faudra donc que dans le back-end, vous optimisiez les images qui seront envoyées par les utilisateurs.",
    realization:
      "Dans ce projet Full Stack, j’ai développé une application web en utilisant Node.js, Express, et MongoDB, en suivant une méthodologie. J'ai commencé par configurer l'environnement de développement, en créant un serveur avec Node et Express pour gérer les routes de l’API. La connexion avec une base de données MongoDB via Mongoose a permis de définir un modèle de données structuré, supportant les opérations CRUD. J’ai implémenté l’authentification des utilisateurs en sécurisant les mots de passe avec bcrypt, en générant des tokens JWT pour la communication avec le front-end, et en protégeant les routes sensibles à l’aide de middlewares. Par ailleurs, j’ai ajouté des fonctionnalités de gestion des livres, comme l’affichage, la création et la modification, tout en intégrant la gestion des images via Multer. Enfin, j’ai développé un système de notation des livres, avec calcul dynamique des moyennes, et finalisé l’application en effectuant des tests pour garantir la fiabilité et la sécurité de chaque fonctionnalité.",
    difficulties: [
      `Connexion et configuration MongoDB :
La connexion à MongoDB via Mongoose m’a posé des problèmes initiaux, notamment pour gérer les erreurs de connexion. J’ai résolu cela en mettant en place un système de gestion des erreurs et en utilisant des variables d’environnement pour sécuriser les informations de connexion.`,
      `Gestion des fichiers avec Multer :
La gestion des images a demandé un effort particulier pour éviter les conflits de noms et garantir un stockage efficace. J’ai configuré Multer pour générer des noms uniques et organiser les fichiers dans des répertoires spécifiques.`,
      `Sécurisation des routes :
La sécurisation des routes via des middlewares m’a demandé de bien comprendre le processus de validation des tokens JWT et de gérer les cas d’erreurs, comme les tokens expirés ou invalides. J’ai également ajouté des tests pour m'assurer que toutes les routes sensibles étaient correctement protégées.`,
      `Calcul des moyennes de notes :
Mettre en place un système de calcul dynamique des moyennes a été un défi technique, notamment pour maintenir les performances lorsque le nombre de notes augmentait. J’ai optimisé le processus en calculant la moyenne directement dans les requêtes MongoDB, ce qui a réduit la charge côté serveur.`,
    ],
  },
  {
    id: 3,
    title: "Menu Maker",
    description: "Planifiez le développement du site de votre client",
    link: "/projects/3",
    image: "/images/projet_menu_maker.PNG",
    technologies: ["Notion", "Trello", "Feedly"],
    githubLink: "https://github.com/LeooCl/Menu-Maker--QWENTA",
    context:
      "Vous êtes développeur front-end au sein de l’agence Webgencia, et votre mission est de mener, préparer et planifier le projet de développement du site Menu Maker pour votre client Qwenta. Ce site permettra aux restaurateurs d’afficher et de mettre en page leurs menus facilement. C’est l’occasion pour vous de mettre en place une méthodologie de travail agile et de collaborer avec Soufiane le Product Owner. Soufiane vous envoie en pièces jointes ce sur quoi ils ont travaillés ces derniers jours avec l'équipe Produit, soit: la maquette desktop, le document de spécifications fonctionnelles, et le tableau des user stories. La réunion de validation et de présentation du projet avec John chef de projet chez Qwenta, a lieu dans deux semaines, et votre mission est d'aider Soufiane à préparer cette réunion. Pour cela, vous allez développer un système de veille en lien avec la réalisation du projet, et qui pourra être réutilisée dans l’équipe. En parallèle, vous allez déterminer les spécifications techniques du site Menu Maker, et organiser la gestion de projet du développement du site. Vous devrez envoyer à Soufiane avant le rendez-vous de réunion avec John: une présentation de 15 slides qui valorise votre travail de veille, les spécifications techniques de l’outil “Menu Maker”, et une présentation de la planification du projet de 15 slides, qui devra contenir le lien vers l’outil de gestion de projet configuré. Après que Soufiane ai validé votre travail, il vous faudra mettre tout cela en forme pour le présenter à John, en réalisant une présentation de 20 slides, qui devra expliquer la solution technique retenue. Cette présentation devra inclure les spécifications techniques présentées de façon visuelle (pour que John comprenne bien comment fonctionnera le site), et le plan de communication avec Qwenta durant le projet, pour déterminer quand et comment Webgencia et Qwenta communiquerons.",
    realization: `Ce projet a débuté par une phase d'exploration des documents essentiels, incluant les maquettes, les spécifications fonctionnelles, les cartes des besoins utilisateurs (via Notion), ainsi que les modèles de spécifications techniques et le template de présentation. Une veille technique approfondie a également été réalisée pour identifier les technologies adaptées aux besoins du projet. À partir de cette analyse, un outil de veille technique a été configuré, permettant de documenter les solutions proposées dans les colonnes "Solution", "Description de la solution" et "Justification" des spécifications techniques, tout en répertoriant les plugins et librairies nécessaires. La deuxième phase s’est concentrée sur l’organisation et l’estimation des tâches via un tableau Kanban, où les user stories ont été priorisées en fonction de leur importance et de leur complexité. Chaque tâche a été détaillée avec ses spécifications techniques, et des dépendances claires entre les tâches ont été établies. Enfin, une synthèse du projet a été préparée sous la forme d’un support de présentation professionnel destiné à Soufiane, regroupant tous les livrables de manière claire et concise.`,
    difficulties: [
      `Compréhension des spécifications techniques et fonctionnelles :
La diversité des documents à analyser a rendu difficile l’extraction rapide des informations clés. Pour résoudre ce problème, j’ai organisé une lecture systématique des documents et utilisé un outil de prise de notes (Notion) pour catégoriser et relier les informations importantes.`,
      `Choix des technologies et plugins :
Identifier les technologies et plugins adaptés aux spécifications techniques était un défi. Une veille technique approfondie a permis de comparer différentes solutions, et chaque choix a été justifié dans le document de spécifications pour s’assurer de sa pertinence.`,
      `Organisation et estimation des tâches dans le Kanban :
Prioriser les user stories selon leur importance et leur complexité nécessitait une bonne compréhension des dépendances entre les tâches. J’ai utilisé des outils de gestion de projet pour visualiser ces liens et assurer une estimation réaliste.`,
      `Création du support de présentation :
Synthétiser un projet complexe dans un format clair et accessible a demandé plusieurs itérations. J’ai structuré la présentation en sections logiques, avec des visuels et des résumés pour faciliter la compréhension des livrables par un public non technique.`,
    ],
  },
  {
    id: 4,
    title: "Booki",
    description:
      "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    link: "/projects/4",
    image: "/images/projet_booki.PNG",
    technologies: ["HTML", "CSS", "GitHub", "Figma"],
    githubLink: "https://github.com/LeooCl/Booki",
    context:
      "Vous débutez une alternance en tant que développeur web au sein de la start-up Booki, et vous travaillez en étroite collaboration avec Sarah la CTO, et Loïc l'UI designer. L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS. Cette interface devra être responsive et respectée la maquette fournie sur Figma.",
    realization: `Le projet débute par l'installation de l'éditeur de code de votre choix et la création du projet sur un repository GitHub. Ensuite, la maquette du site est découpée pour représenter la structure HTML, et le code de l'en-tête de la page est intégré. Un formulaire de recherche est ajouté à la page HTML, suivi de la réalisation complète de la section "Filtre". Une première carte d'hébergement est créée, utile pour l'étape suivante. La mise en page du site avance, avec presque toute la structure réalisée, à l'exception des sections "Activités à Marseille" et du pied de page. Le projet est alors presque terminé, ne nécessitant plus que la finalisation du footer. Une fois le code terminé, il est vérifié pour sa conformité avec les validateurs W3C. Enfin, le projet est rendu pleinement compatible avec toutes les tailles d'écran, et la maquette est intégrée sur tous les formats d'écran, assurant une expérience utilisateur fluide et responsive.`,
    difficulties: [],
  },
  {
    id: 5,
    title: "Sophie Bluel",
    description: "Créez une page web dynamique avec JavaScript",
    link: "/projects/5",
    image: "/images/projet_architecte_sophie_bluel.PNG",
    technologies: ["JavaScript", "NodeJS", "Swagger", "HTML", "CSS"],
    githubLink: "https://github.com/LeooCl/SophieBluel",
    context:
      "Vous travaillez comme développeur front-end pour l’agence ArchiWebos, et vous êtes envoyé en renfort comme développeur front-end au sein d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur. Après la réunion pour échanger sur le projet, Charlotte (la cheffe de projet), vous envoie en pièces jointes tout ce dont vous aurez besoin pour pouvoir réaliser vos misions, soit: le Figma du design qui vous servira à créer les nouvelles fonctionnalités, le code back-end qui vous permettra de faire persister les données et de tester les fonctionnalités, le code front-end d’origine avec la version statique de la page de l’architecte, et finalement, le Kanban pour la mission pour que vous puissiez voir les tâches qui vous sont attribuées. Vos 3 missions principales sont donc: développer la page de présentation des travaux de l'architecte (à partir du HTML fourni), développer la page de connexion de l'administrateur du site (le client) (code à créer de zéro), et développer la modale permettant d'uploader de nouveaux médias (code à créer from scratch).",
    realization:
      "Pour ce projet, la première étape consiste à s'assurer que l'environnement de développement est correctement configuré, en commençant par l'installation de Node.js et npm, et en suivant le processus d'installation du back-end et du front-end, conformément au projet sur GitHub. Une fois l'environnement configuré, il est important de récupérer dynamiquement les données du back-end en utilisant fetch, notamment pour afficher la galerie de travaux de l'architecte. Ensuite, il est nécessaire d'intégrer la page de connexion à l'aide de la maquette fournie, avant de rendre le formulaire fonctionnel, avec une redirection réussie après une connexion valide et un message d'erreur en cas de données incorrectes. Une fois l'utilisateur connecté, le site doit permettre l'ajout, la suppression et la gestion des projets à travers une fenêtre modale, en prenant soin de bien gérer l'envoi de nouveaux projets au back-end, la suppression d'éléments et l'actualisation dynamique du DOM pour refléter les changements. Le projet se termine par une phase de tests et de validation pour garantir la conformité aux maquettes, la gestion correcte des erreurs et une mise à jour dynamique de l'interface utilisateur sans rechargement de la page.",
    difficulties: [],
  },
  {
    id: 6,
    title: "Nina Carducci",
    description: "Débuggez et optimisez un site de photographe",
    link: "/projects/6",
    image: "/images/projet_optimisation.PNG",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Lighthouse",
      "Wave",
      "Rich Snippets",
    ],
    githubLink: "https://github.com/LeooCl/Nina-Carducci",
    context:
      "Vous êtes développeur freelance, et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. Nina répond positivement à votre demande en vous demandant une optimisation pour son site de photographe. Pour réaliser votre mission, vous allez donc : faire une optimisation globale du site, tant sur les performances que sur le SEO, mettre en place le référencement local en utilisant Schema.org, ajouter les metas pour les réseaux sociaux, faire les modifications liées à l’accessibilité du site, et produire un rapport d’intervention détaillé à destination de Nina pour présenter toutes vos actions/optimisations et leur impact. Dans ce rapport, vous fournirez les performances du site avant et après optimisation (en vous basant sur des audits Lighthouse pour les performances, et sur des audits Wave pour l’accessibilité), ainsi que la liste des modifications que vous avez apporté au site. À la demande de Nina, vous débuggerez le code, soit: la navigation dans la modale de la galerie entre images précédente et suivante ne fonctionne pas, et lorsque l’on change de filtre pour afficher les images, on ne voit pas quelle catégorie est sélectionnée (celle-ci devrait avoir la couleur dorée en fond comme pour le filtre par défaut).",
    realization:
      "Le projet commence par la récupération du code source du site et la prise de connaissance de l'énoncé. La première tâche consiste à analyser le code à l'aide de l'outil Lighthouse pour identifier les axes d'amélioration, notamment en matière de performance, SEO et accessibilité. Ensuite, un audit est réalisé à l'aide de Lighthouse et/ou GTMetrix, permettant de dresser une liste des modifications nécessaires pour améliorer le référencement et les performances du site. Les efforts sont ensuite concentrés sur l'amélioration des performances, en visant une note supérieure ou égale à 90 % sur Lighthouse. Une attention particulière est portée sur l'optimisation des images et d'autres éléments clés du site. La phase suivante se concentre sur l'optimisation SEO, avec une amélioration du code, de la sémantique et des balises. L’intégration des balises meta pour les réseaux sociaux et du référencement local est également effectuée pour améliorer la visibilité. L'accessibilité du site est ensuite vérifiée avec l'outil WAVE, et toutes les erreurs sont corrigées. Une fois le débogage et l'optimisation terminés, un rapport d'intervention est rédigé, détaillant les modifications effectuées, leur impact sur les performances et les résultats obtenus. Le projet se termine par la validation de l’audit Lighthouse avec des scores supérieurs à 90 % dans les trois domaines clés : performances, SEO et accessibilité, et la livraison d’un cahier de recette complet.",
    difficulties: [],
  },
];

export default projects;
