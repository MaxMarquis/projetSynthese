export interface Offres_stages {
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

// Chercher toutes les offres de stages > GET /internship-offer

// Chercher une offre de stage par numéro d’identifiant > GET /internship-offer/<id>

// Ajouter une offre de stage > POST /internship-offer (mettre les données dans le “body” de la requête)

// Modifier une offre de stage > PUT /internship-offer/<id> (mettre les données dans le “body” de la requête)

// Supprimer une offre de stage > DELETE /internship-offer/<id>