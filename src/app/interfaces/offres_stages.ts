export interface Offres_stages {
    _id: string
    title: string,
    description: string,
    enterprise: string,
    startDate: Date,
    endDate: Date,
    program: string,
    requirements: string,
    stageType: string,
    hoursPerWeek: number,
    additionalInfo: string,
    paid: string[],
    skills: string[],
    published: boolean,
    active: boolean,
}

// Chercher toutes les offres de stages > GET /internship-offer

// Chercher une offre de stage par numéro d’identifiant > GET /internship-offer/<id>

// Ajouter une offre de stage > POST /internship-offer (mettre les données dans le “body” de la requête)

// Modifier une offre de stage > PUT /internship-offer/<id> (mettre les données dans le “body” de la requête)

// Supprimer une offre de stage > DELETE /internship-offer/<id>