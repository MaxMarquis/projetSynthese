export interface Requetes_stages {
    _id: String
    title: String
    description: String
    enterprise: String
    startDate: Date
    endDate: Date
    program: String
    requirements: String
    stageType: String
    hoursPerWeek: Number
    additionalInfo: String
    paid: [String]
    skills: [String]
    published: Boolean
    updatedAt: Date
    active: Boolean
}

// Chercher toutes les requêtes de stages > GET /internship-request

// Chercher une requête de stage par numéro d’identifiant > GET /internship-request/<id>

// Ajouter une requête de stage > POST /internship-request (mettre les données dans le “body” de la requête)

// Modifier une requête de stage > PUT /internship-request/<id> (mettre les données dans le “body” de la requête)

// Supprimer une requête de stage > DELETE /internship-request/<id>