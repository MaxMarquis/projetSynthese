export interface Entreprise {
    _id: string,
    name: string,
    description: string,
    imageUrl: string,
    contactName: string,
    contactEmail: string,
    contactPhone: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    published: boolean,
}

// Chercher toutes les entreprises > GET /enterprise

// Chercher une entreprise par numéro d’identifiant > GET /enterprise/<id>

// Ajouter une entreprise > POST /enterprise (mettre les données dans le “body” de la requête)

// Modifier une entreprise > PUT /enterprise/<id> (mettre les données dans le “body” de la requête)

// Supprimer une entreprise > DELETE /enterprise/<id>