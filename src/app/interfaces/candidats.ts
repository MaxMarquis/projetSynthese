export interface Candidats {
    _id: String
    name: String
    description: String
    jobTitle: String
    email: String
    phone: String
    address: String
    city: String
    province: String
    postalCode: String
    published: Boolean
    updatedAt: Date

}

// Chercher tous les candidats > GET /candidate

// Chercher un candidat par numéro d’identifiant > GET /candidate/<id>

// Ajouter un candidat > POST /candidate (mettre les données dans le “body” de la requête)

// Modifier un candidat > PUT /candidate/<id> (mettre les données dans le “body” de la requête)

// Supprimer un candidat > DELETE /candidate/<id>