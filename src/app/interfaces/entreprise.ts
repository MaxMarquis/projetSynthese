export interface Entreprise {
    _id: String
    name: String
    description: String
    imageUrl: String
    contactName: String
    contactEmail: String
    contactPhone: String
    address: String
    city: String
    province: String
    postalCode: String
    published: Boolean
    updatedAt: Date

}

// Chercher toutes les entreprises > GET /enterprise

// Chercher une entreprise par numéro d’identifiant > GET /enterprise/<id>

// Ajouter une entreprise > POST /enterprise (mettre les données dans le “body” de la requête)

// Modifier une entreprise > PUT /enterprise/<id> (mettre les données dans le “body” de la requête)

// Supprimer une entreprise > DELETE /enterprise/<id>