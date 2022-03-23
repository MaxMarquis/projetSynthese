export interface Requetes_stages {
    _id: String
    description: String
    entreprise: String
    title: String,
    studentName: String,
    studentPresentation: String,
    school: String,
    startDate: Date,
    endDate: Date,
    program: String,
    stageType: String,
    hoursPerWeek: Number,
    additionalInfo: String,
    skills: [String],
    published: Boolean,
    paid: [String],
    user: String,
    active: Boolean,
    region: String,
    activitySector: String,
    city: String,
    linkToResume: String,
}

// Chercher toutes les requêtes de stages > GET /internship-request

// Chercher une requête de stage par numéro d’identifiant > GET /internship-request/<id>

// Ajouter une requête de stage > POST /internship-request (mettre les données dans le “body” de la requête)

// Modifier une requête de stage > PUT /internship-request/<id> (mettre les données dans le “body” de la requête)

// Supprimer une requête de stage > DELETE /internship-request/<id>