'use strict'

const Database = use('Database')
const EtablissementMutualisateur = use('App/Models/EtablissementMutualisateur')
// const Etablissement = use('App/Models/Etablissement')


const STATUSES = [
  "added",
  "addPending",
  "deleted",
  "deletePending"
]

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with etablissementmutualisateurs
 */
class EtablissementMutualisateurController {
  /**
   * Show a list of all etablissementmutualisateurs.
   * GET etablissementmutualisateurs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new etablissementmutualisateur.
   * GET etablissementmutualisateurs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new etablissementmutualisateur.
   * POST etablissementmutualisateurs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const {
      code_uai,
      email,
      nombre_adherents,
      type_adherents,
      zone_de_couverture_code_postal,
      zone_de_couverture_departement,
      zone_de_couverture_departements,
      type_marche,
      mots_cles_fournitures,
      mots_cles_services,
      infos_complementaires,
      nom,
      adresse,
      code_postal,
      commune,
      telephone,
      region,
      academie,
      departement
    } = request.all()

    try {
      let etablissement = await Database
      .table('etablissements')
      .where('code_uai', code_uai)
      .first()

      if (etablissement) {
        await Database
          .table('etablissements')
          .where('code_uai', code_uai)
          .update({
            nom,
            adresse,
            code_postal,
            commune,
            telephone,
            region,
            academie,
            departement
          })
      } else {
        response.noContent('L’établissement n’existe pas dans la base')
        return "response: " + response
      }
    } catch (error) {
      return "Error: " + error
    }

    try {
      const newEtablissement = new EtablissementMutualisateur()

      newEtablissement.code_uai = code_uai
      newEtablissement.email = email
      newEtablissement.nombre_adherents = nombre_adherents
      newEtablissement.eple = ((type_adherents === "1" || type_adherents === "3") ? 1 : 0)
      newEtablissement.autres_admins_publiques = ((type_adherents === "2" || type_adherents === "3") ? 1 : 0)
      if (zone_de_couverture_code_postal) {
        newEtablissement.ville_couverte = zone_de_couverture_code_postal
      }
      newEtablissement.services = ((type_marche === "2" || type_marche === "3") ? 1 : 0)
      newEtablissement.fournitures = ((type_marche === "1" || type_marche === "3") ? 1 : 0)
      newEtablissement.infos_complementaires = infos_complementaires

      newEtablissement.status = STATUSES[1]

      await newEtablissement.save()

    } catch (error) {
      return "Error: " + error
    }


    if ((type_marche === "1" || type_marche === "3") && mots_cles_fournitures.length > 0) {
      try {
        for (let i = 0; i < mots_cles_fournitures.length; i++) {
          await Database
            .raw('INSERT INTO ocga_mutualisateurs_mots_cles VALUES (?, ?)', [code_uai, mots_cles_fournitures[i]])
        }
      } catch (error) {
        return "Error: " + error
      }
    }

    if ((type_marche === "2" || type_marche === "3") && mots_cles_services.length > 0) {
      try {
        for (let i = 0; i < mots_cles_services.length; i++) {
          await Database
            .raw('INSERT INTO ocga_mutualisateurs_mots_cles VALUES (?, ?)', [code_uai, mots_cles_services[i]])
        }
      } catch (error) {
        return "Error: " + error
      }
    }

    if (zone_de_couverture_departement) {
      try {
        await Database.raw('INSERT INTO ocga_mutualisateurs_departements VALUES (?, ?)', [code_uai, zone_de_couverture_departement])
      } catch (error) {
        return "Error: " + error
      }

    } else if (zone_de_couverture_departements.length > 0) {
      try {
        for (let i = 0; i < zone_de_couverture_departements.length; i++) {
          await Database.raw('INSERT INTO ocga_mutualisateurs_departements VALUES (?, ?)', [code_uai, zone_de_couverture_departements[i]])
        }
      } catch (error) {
        return "Error: " + error
      }
    }

    return "response: " + response
  }

  /**
   * Display a single etablissementmutualisateur.
   * GET etablissementmutualisateurs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing etablissementmutualisateur.
   * GET etablissementmutualisateurs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update etablissementmutualisateur details.
   * PUT or PATCH etablissementmutualisateurs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a etablissementmutualisateur with id.
   * DELETE etablissementmutualisateurs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = EtablissementMutualisateurController
