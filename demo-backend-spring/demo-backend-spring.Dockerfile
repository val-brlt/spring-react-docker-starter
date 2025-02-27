# Étape 1 : Récupération des dépendances Maven
FROM maven:3-openjdk-17 AS deps
WORKDIR /app
COPY ./pom.xml /app
RUN mvn dependency:go-offline

# Étape 2 : Image de développement avec hot reload
FROM maven:3-eclipse-temurin-17-alpine AS dev
WORKDIR /app

# Copie les dépendances Maven mises en cache
COPY --from=deps /root/.m2/repository /root/.m2/repository

# Copie le code source
COPY ./ /app

# Ajoute les permissions sur le script d’entrée
COPY ./docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# Active l'entrée du script
ENTRYPOINT ["/docker-entrypoint.sh"]

