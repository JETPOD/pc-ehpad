# Chambre par chambre

Serious game de formation aux précautions standard et complémentaires en EHPAD : mise en place, organisation, levée et cas groupés.

- 5 modules, 39 décisions, 7 types de précautions (PS, contact, C. difficile, gale, gouttelettes, air, protecteur).
- Correction en quatre catégories : décision juste, risque de transmission, mesure excessive, écart d'organisation.
- Base : procédure « Précautions standard et complémentaires », Groupe AHNAC, Pôle médico-social, v03, mars 2026, complétée par SF2H, HCSP, CPias et INRS (voir l'onglet Sources).
- BMR et BHRe : la procédure v03 et le rapport HCSP du 16 juin 2026 divergent. Le jeu propose les deux référentiels (procédure locale par défaut).

## Utilisation

Site statique, sans dépendance ni stockage local. Ouvrir `index.html` ou publier sur GitHub Pages.

Cible prévue : https://jetpod.github.io/pc-ehpad/

## Statut

Prototype pédagogique, cas fictifs. Contenu à relire par l'EOH avant usage institutionnel ; la procédure de l'établissement prévaut.

## Attestation de fin de parcours

Le module commun `attestation.js` propose, à la fin d'un module ou d'un parcours complet, une attestation nominative imprimable (A4 paysage, impression ou PDF via le navigateur). Elle n'affiche que le palier atteint, jamais le score :

- **Réussite avec excellence** : au moins 95 % de réponses adaptées, sans erreur critique ;
- **Réussite** : au moins 80 %, sans erreur critique (seuil de réussite) ;
- **Participation** : en dessous du seuil.

Signature : Dr Jean-Etienne Podik, EOH AHNAC. Mention : outil pédagogique à partir de cas fictifs, sans valeur de validation des compétences ni d'action de DPC. Le nom saisi reste sur l'appareil ; seul l'événement de palier est compté par Plausible, commun à tous les jeux du site (filtrer par page pour un jeu donné) :

```
Attestation · Participation
Attestation · Réussite
Attestation · Excellence
```
