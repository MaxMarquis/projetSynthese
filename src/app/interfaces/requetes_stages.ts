export interface Requetes_stages {
    _id: string
    description: string
    entreprise: string
    title: string,
    studentName: string,
    studentPresentation: string,
    school: string,
    startDate: Date,
    endDate: Date,
    program: string,
    stageType: string,
    hoursPerWeek: number | string,
    additionalInfo: string,
    skills: string[],
    published: boolean,
    paid: string[],
    active: boolean,
    region: string,
    activitySector: string,
    city: string,
    linkToResume: string,
}

// Chercher toutes les requêtes de stages > GET /internship-request

// Chercher une requête de stage par numéro d’identifiant > GET /internship-request/<id>

// Ajouter une requête de stage > POST /internship-request (mettre les données dans le “body” de la requête)

// Modifier une requête de stage > PUT /internship-request/<id> (mettre les données dans le “body” de la requête)

// Supprimer une requête de stage > DELETE /internship-request/<id>