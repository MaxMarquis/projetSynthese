export interface Candidats {
    _id: string,
    name: string,
    description: string,
    jobTitle: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    published: boolean,
}

// Chercher tous les candidats > GET /candidate

// Chercher un candidat par numéro d’identifiant > GET /candidate/<id>

// Ajouter un candidat > POST /candidate (mettre les données dans le “body” de la requête)

// Modifier un candidat > PUT /candidate/<id> (mettre les données dans le “body” de la requête)

// Supprimer un candidat > DELETE /candidate/<id>