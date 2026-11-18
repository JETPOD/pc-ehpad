/* Contenu pédagogique : « Chambre par chambre », précautions standard et complémentaires en EHPAD.
   Base : procédure « Précautions standard et complémentaires », Pôle MS, v03, mars 2026,
   complétée par les recommandations nationales et régionales citées dans SOURCES.
   Catégories : ok (décision juste), risque (risque de transmission), exces (mesure excessive,
   atteinte au lieu de vie), ecart (écart à la procédure ou à l'organisation).
   Pour les questions BMR/BHRe, cat et fb peuvent être des objets {loc, nat} :
   loc = procédure Pôle MS v03 ; nat = HCSP 2026 et CPias. */

window.SOURCES = {
  proc: { court: "Procédure Pôle MS v03 (2026)", titre: "Précautions standard et complémentaires, Pôle médico-social, version 03, mars 2026 (document interne)", url: null },
  ps2017: { court: "SF2H, Précautions standard 2017", titre: "SF2H. Actualisation des précautions standard, 2017", url: "https://www.sf2h.net/publications/actualisation-des-precautions-standard.html" },
  resp2013: { court: "SF2H, Air ou gouttelettes 2013", titre: "SF2H. Prévention de la transmission croisée par voie respiratoire : air ou gouttelettes, 2013", url: "https://www.sf2h.net/publications/prevention-de-la-transmission-croisee-par-voie-respiratoire-air-ou-gouttelettes.html" },
  hiver2023: { court: "SF2H, avis épidémies hivernales 2023", titre: "SF2H. Avis relatif aux mesures de prévention des épidémies hivernales, novembre 2023", url: "https://www.sf2h.net/k-stock/data/uploads/2023/11/avis_sf2h_mesures_epidemies_hivernales_v14112023.pdf" },
  bhre2026: { court: "HCSP, BHRe/ABRI 2026", titre: "HCSP. Prévention et contrôle de la transmission croisée des BHRe et des ABRI, 16 juin 2026", url: "https://www.hcsp.fr/Explore.cgi/Telecharger?NomFichier=hcspr20260616_prventionetcontrlebhreabri.pdf" },
  ira2012: { court: "HCSP, IRA en EHPAD 2012", titre: "HCSP. Conduite à tenir devant une ou plusieurs infections respiratoires aiguës en EHPAD, juillet 2012", url: "https://www.hcsp.fr/Explore.cgi/Telecharger?NomFichier=hcspr20120703_infecrespicollagees.pdf" },
  gea2010: { court: "HCSP, GEA en EHPAD 2010", titre: "HCSP. Recommandations relatives aux conduites à tenir devant des gastro-entérites aiguës en établissement d'hébergement pour personnes âgées, janvier 2010", url: "https://www.hcsp.fr/Explore.cgi/Telecharger?NomFichier=hcspr20100129_gastro.pdf" },
  gale2012: { court: "HCSP, gale 2012", titre: "HCSP. Recommandations relatives à la conduite à tenir devant un ou plusieurs cas de gale, novembre 2012", url: "https://sante.gouv.fr/IMG/pdf/Recommandations_HCSP_gale_conduite_a_tenir_nov_2012_.pdf" },
  bzh2026: { court: "CPias Bretagne, levée des PC en EHPAD 2026", titre: "CPias Bretagne. Levée des précautions complémentaires en EHPAD, fiche technique 2026", url: "https://cpiasbretagne.chu-rennes.fr/CPias-Bretagne/pdf/Outils_regionaux/IDEmut/2026_FT_Levee_PC_Ehpad_CPias-Bzh.pdf" },
  idf2023: { court: "CPias IdF, PCC en ESMS 2023", titre: "CPias Île-de-France. Fiches techniques précautions complémentaires contact en ESMS, 2023", url: "https://www.cpias-ile-de-france.fr/docprocom/doc/cpiasidf-ft-pcc-ems-2023.pdf" },
  aes: { court: "INRS, conduite à tenir AES", titre: "INRS. Conduite à tenir en cas d'accident avec exposition au sang (affiche A 775)", url: "https://www.inrs.fr/dam/jcr:1d772778-1ceb-45d5-9cb3-5d30771e50a4/A775.pdf" }
};

window.CATS = {
  ok: { label: "Décision juste", short: "Juste" },
  risque: { label: "Risque de transmission", short: "Risque" },
  exces: { label: "Mesure excessive", short: "Excès" },
  ecart: { label: "Écart d'organisation", short: "Écart" }
};

window.PC_TYPES = [
  { key: "ps", nom: "Précautions standard", sigle: "PS", pour: "Tous les résidents, tous les soins, en tous lieux, quel que soit le statut infectieux.",
    mesures: ["Avant-bras dégagés, ongles courts sans vernis ni résine, aucun bijou ni montre", "Friction hydro-alcoolique (FHA) : technique de référence sur mains sèches, non souillées", "Gants seulement si risque de contact avec un liquide biologique, peau lésée ou muqueuse ; une paire par geste, retirée aussitôt", "Tablier à usage unique pour les soins mouillants ou souillants (toilette, change)", "Masque et lunettes si risque de projection ; masque pour toute personne qui tousse", "Excreta : lave-bassin ou sac protecteur, jamais de douchette", "Détergent-désinfectant pour le matériel partagé et les surfaces hautes, sans délai sur une surface souillée", "AES : ne pas recapuchonner, conteneur OPCT au plus près du soin"],
    levee: "Sans objet : elles ne se lèvent jamais." },
  { key: "pcc", nom: "Contact", sigle: "PCC", pour: "Diarrhée et gastro-entérite, Clostridioides difficile, gale, zona et varicelle (avec Air), BMR/BHRe selon le référentiel retenu.",
    mesures: ["Affiche sur la porte et unité mobile de protection (UMP) devant la chambre", "FHA avant d'entrer et impérativement avant de sortir", "Tablier pour les soins directs ; gants si contact avec liquides biologiques", "Matériel dédié qui reste dans la chambre ; déchets en sac jaune doublé en sortant", "Résident : hygiène des mains et change ou pansement refait avant de se déplacer", "Visiteurs : pas de tenue particulière, ne pas s'asseoir sur le lit, ne pas utiliser les WC de la chambre, PHA entrée et sortie", "Soins et bionettoyage en fin de tournée"],
    levee: "GEA : 48 h après les dernières diarrhées. Gale : 48 h après le début du traitement (résident, contacts et environnement)." },
  { key: "cd", nom: "Contact renforcé C. difficile", sigle: "PCC CD", pour: "Infection à Clostridioides difficile (diarrhée).",
    mesures: ["Surblouse et gants pour les soins, tablier en plus pour les soins mouillants", "En sortant : lavage eau et savon puis FHA (le PHA n'agit pas sur les spores)", "Lingettes sporicides pour le matériel qui reste dans la chambre", "Linge en sac en tissu rouge puis sac plastique (SDEZ)", "Ménage en fin de circuit, protocole javel ; à la sortie du résident, protocole javel de la chambre"],
    levee: "48 h après les dernières diarrhées, sur prescription médicale. Pas de contrôle de guérison." },
  { key: "gale", nom: "Contact gale", sigle: "PCC G", pour: "Gale commune ; gale profuse ou hyperkératosique avec avis EOH, CPias et ARS.",
    mesures: ["Surblouse plastifiée à manches longues et gants", "En sortant : lavage eau et savon puis FHA", "Visiteurs : surblouse et gants, lavage eau et savon puis FHA en sortant", "Linge de soins en sac rouge puis sac plastique (SDEZ) ; linge du résident traité par acaricide en sac fermé", "Traitement simultané du résident et des contacts du premier cercle"],
    levee: "48 h après le début du traitement du résident, des contacts et de l'environnement." },
  { key: "pcg", nom: "Gouttelettes", sigle: "PCG", pour: "Grippe, Covid-19, coqueluche, méningite à méningocoque, infection ou portage respiratoire à BMR, IRA non documentée.",
    mesures: ["Masque chirurgical dès l'entrée dans la chambre", "FFP2 pour les gestes à risque d'aérosolisation (aspiration, prélèvement nasopharyngé)", "Lunettes ou masque à visière si risque de projection", "Résident maintenu en chambre si possible, surtout pour les repas ; masque chirurgical s'il sort", "Visiteurs masqués, informés, visites limitées quand c'est possible", "Aérer la chambre le plus souvent possible"],
    levee: "Grippe : repère régional de 8 jours après le début des signes. IRA : disparition des signes. Selon le protocole en vigueur." },
  { key: "pca", nom: "Air", sigle: "PCA", pour: "Tuberculose pulmonaire suspectée ou confirmée, rougeole, varicelle (phase d'invasion et début de phase d'état).",
    mesures: ["FFP2 posé et ajusté (fit-check) avant d'entrer, retiré après être sorti", "Chambre individuelle obligatoire, porte fermée", "Aérer plusieurs fois par jour", "Déplacements strictement limités, résident masqué chirurgical s'il sort", "Visites limitées au maximum, visiteurs en FFP2", "Masques jetés dans le sac DAOM sur l'UMP à l'extérieur de la chambre"],
    levee: "Tuberculose : au moins 15 jours de traitement efficace et amélioration clinique, sur avis médical." },
  { key: "pcp", nom: "Protecteur", sigle: "PCP", pour: "Résident immunodéprimé (neutropénie profonde notamment).",
    mesures: ["Soins et bionettoyage en premier dans la tournée", "FHA avant d'entrer, masque chirurgical pour entrer", "Visiteurs masqués, ne s'assoient pas sur le lit, n'utilisent pas les WC", "Linge filmé ; masques retirés et jetés à l'extérieur de la chambre", "Résident en FFP2 s'il sort de sa chambre"],
    levee: "Sur prescription, à la correction du déficit immunitaire." }
];

window.DIVERGENCE = {
  titre: "BMR et BHRe en EHPAD : la procédure et les recommandations nationales divergent",
  texte: [
    "La procédure Pôle MS v03 place les résidents porteurs de BMR ou de BHRe en précautions contact, lève les PCC BMR après 2 prélèvements négatifs à 1 semaine d'intervalle, ne lève jamais celles d'un porteur d'EPC et lève celles d'un contact EPC après 3 prélèvements négatifs.",
    "Le HCSP (juin 2026, R19 et R52) recommande de ne pas mettre en place de PCC en EHPAD pour les porteurs de BHRe et leurs contacts, de ne pas dépister les autres résidents ni les porteurs connus (sauf transfert en MCO), et de laisser l'accès aux espaces de vie avec hygiène des mains du résident. Les CPias d'Île-de-France et de Bretagne appliquent la même logique aux BMR : précautions standard strictes, l'EHPAD étant un lieu de vie.",
    "Le jeu propose les deux référentiels. Le mode « Procédure Pôle MS » est réglé par défaut. Une mise à jour de la procédure sur ce point est à discuter en EOH."
  ]
};

window.MODULES = [
/* ============================== MODULE 1 ============================== */
{
  id: "m1", num: 1, titre: "Le socle", sous: "Précautions standard, pour tous, tout le temps",
  pitch: "Prise de poste à 6 h 45, aile des Glycines. Avant de parler de précautions complémentaires, la base : les gestes qui protègent tous les résidents, porteurs connus ou non.",
  color: "ps",
  retenir: ["Les PS s'appliquent à tous les résidents, même sans statut infectieux connu : la plupart des porteurs ne sont pas identifiés.", "La FHA est la technique de référence ; le lavage au savon est réservé aux mains visiblement souillées, à la gale et à C. difficile.", "Les gants protègent du liquide biologique, pas de la transmission croisée : une paire par geste, retirée aussitôt, puis FHA.", "Jamais de douchette sur un bassin, jamais de tenue lavée à domicile, jamais d'aiguille recapuchonnée."],
  decisions: [
    { id: "m1d1", titre: "Prise de poste", role: "Tous les professionnels",
      ctx: "Vous arrivez au vestiaire. Vous portez votre alliance, une montre connectée, un vernis semi-permanent posé hier et un gilet à manches longues : il fait froid dans les couloirs ce matin.",
      q: "Comment vous préparez-vous avant le premier soin ?",
      type: "choice",
      options: [
        { t: "Je retire alliance, montre et gilet, et je signale que le vernis doit être retiré avant de prendre un soin.", cat: "ok", fb: "Prérequis de l'hygiène des mains : avant-bras dégagés, ongles courts sans vernis ni faux ongles ou résine, aucun bijou ni montre. Le gilet par-dessus la tenue recouvre les avant-bras et ne s'entretient pas comme la tenue professionnelle." },
        { t: "Je retire la montre mais je garde l'alliance, elle est lisse et ne gêne pas la friction.", cat: "risque", fb: "La procédure exclut aussi l'alliance : la peau sous la bague n'est pas atteinte par la friction et reste colonisée." },
        { t: "Je garde le gilet, il est propre, et je relève les manches pendant les soins.", cat: "risque", fb: "Les manches relevées retombent et touchent le résident et son environnement. La tenue doit être dédiée à l'activité, avant-bras dégagés." },
        { t: "Je mettrai des gants pour toute la matinée, ce qui compense le vernis.", cat: "risque", fb: "Les gants ne remplacent pas l'hygiène des mains. Portés en continu, ils deviennent un vecteur de transmission d'un résident à l'autre." }
      ],
      refs: ["proc", "ps2017"] },
    { id: "m1d2", titre: "Toilette au lit", role: "AS · AMP",
      resident: { nom: "M. Dupont", age: 91, chambre: "G12", tag: "Aucun statut infectieux connu" },
      ctx: "Toilette au lit de M. Dupont, incontinent urinaire, peau saine. Le change est prévu en fin de toilette.",
      q: "Quels équipements de protection utilisez-vous ?",
      type: "choice",
      options: [
        { t: "Un tablier à usage unique pour toute la toilette ; des gants pour la toilette intime et le change seulement, retirés aussitôt, suivis d'une FHA.", cat: "ok", fb: "Le tablier protège la tenue lors d'un soin mouillant ou souillant. Les gants sont réservés au risque de contact avec un liquide biologique ou une muqueuse, une paire par geste." },
        { t: "Gants et tablier dès le début, la même paire de gants du visage jusqu'au change.", cat: "risque", fb: "Une paire de gants par geste. Passer du siège au visage, ou l'inverse, avec les mêmes gants déplace la flore d'une zone à l'autre et contamine l'environnement." },
        { t: "Aucun équipement : M. Dupont n'est pas infecté.", cat: "risque", fb: "Les PS ne dépendent pas du statut infectieux. Le change expose aux urines et aux selles, d'où gants et tablier." },
        { t: "Surblouse à manches longues, masque et gants pour tout soin, chez tous les résidents, par sécurité.", cat: "exces", fb: "Cet équipement systématique n'est pas recommandé. Il consomme du matériel, gêne la relation, et la surblouse est réservée aux expositions importantes ou à certaines précautions complémentaires." }
      ],
      refs: ["proc", "ps2017"] },
    { id: "m1d3", titre: "Les moments de la friction", role: "Tous les professionnels",
      ctx: "Au cours d'une matinée, vous enchaînez les gestes dans plusieurs chambres.",
      q: "Dans quelles situations une friction hydro-alcoolique est-elle indiquée ? Cochez toutes les bonnes réponses.",
      type: "multi", missCat: "risque",
      items: [
        { t: "Avant de toucher un résident", need: true },
        { t: "Juste après avoir retiré mes gants", need: true },
        { t: "Après avoir remonté la barrière du lit ou rangé l'adaptable", need: true },
        { t: "Avant de mettre et après avoir retiré un masque ou un tablier", need: true },
        { t: "Sur des mains visiblement souillées, pour gagner du temps", need: false, cat: "risque", why: "Mains souillées : lavage eau et savon, séchage, puis friction si besoin. Le PHA n'agit pas sur une souillure." },
        { t: "Sur des mains encore mouillées, juste après un lavage", need: false, cat: "risque", why: "La friction se fait sur mains sèches ; l'eau dilue le produit et réduit son efficacité." }
      ],
      fbOk: "Ce sont les indications de l'hygiène des mains : avant et après contact avec le résident, après contact avec son environnement, autour de la pose et du retrait des équipements.",
      refs: ["proc", "ps2017"] },
    { id: "m1d4", titre: "Le bassin", role: "AS · ASH",
      resident: { nom: "Mme Martin", age: 86, chambre: "G08", tag: "Aucun statut infectieux connu" },
      ctx: "Mme Martin a utilisé le bassin. L'unité dispose d'un lave-bassin dans l'office et de sacs protecteurs absorbants.",
      q: "Comment gérez-vous le bassin ?",
      type: "choice",
      options: [
        { t: "Gants et tablier, je transporte le bassin couvert jusqu'au lave-bassin, ou j'utilise un sac protecteur que j'élimine.", cat: "ok", fb: "Les excreta se manipulent avec les équipements nécessaires, au plus court, sans aérosolisation." },
        { t: "Je le vide dans les WC de la chambre et je le rince à la douchette.", cat: "risque", fb: "La procédure l'interdit : la douchette projette des gouttelettes de selles sur la tenue, le lavabo et les surfaces. C'est une voie connue de diffusion des entérobactéries résistantes." },
        { t: "Je le laisse sous le lit et je m'en occuperai en fin de tournée.", cat: "risque", fb: "Un bassin plein laissé dans la chambre contamine l'environnement et expose le résident et les visiteurs." }
      ],
      refs: ["proc", "ps2017", "bhre2026"] },
    { id: "m1d5", titre: "Piqûre", role: "IDE",
      resident: { nom: "M. Garnier", age: 79, chambre: "G03", tag: "Diabétique, insuline" },
      ctx: "En retirant l'aiguille du stylo à insuline, vous vous piquez l'index.",
      q: "Que faites-vous immédiatement ?",
      type: "choice",
      options: [
        { t: "Je ne fais pas saigner, je lave à l'eau et au savon, je rince, je désinfecte au moins 5 minutes (Dakin de préférence), puis j'applique la conduite à tenir du kit AES du PC IDE : avis médical rapide pour un éventuel traitement post-exposition, au mieux dans les 4 heures, puis déclaration.", cat: "ok", fb: "C'est la séquence de référence. L'avis médical précoce permet d'évaluer le risque (statut de la personne source avec son accord, immunité contre l'hépatite B) et de débuter un traitement si nécessaire." },
        { t: "Je presse le doigt pour faire saigner, puis je passe de l'alcool.", cat: "risque", fb: "Il ne faut pas faire saigner : la pression peut favoriser la pénétration. Lavage, rinçage puis antiseptique au moins 5 minutes." },
        { t: "Je recapuchonne l'aiguille pour l'éliminer en sécurité et je termine ma tournée avant d'en parler.", cat: "risque", fb: "Recapuchonner est interdit et retarder la prise en charge fait perdre le bénéfice d'un traitement post-exposition. L'aiguille va directement dans le conteneur OPCT, placé au plus près du soin." }
      ],
      refs: ["proc", "aes"] },
    { id: "m1d6", titre: "Une toux en salle d'animation", role: "AS · animateur",
      resident: { nom: "Mme Roux", age: 84, chambre: "G15", tag: "Toux depuis ce matin" },
      ctx: "Pendant l'atelier mémoire, Mme Roux tousse beaucoup, sans fièvre connue. Aucun diagnostic n'est posé.",
      q: "Quelle est la bonne réaction ?",
      type: "choice",
      options: [
        { t: "Je lui propose un masque chirurgical et des mouchoirs à usage unique, je l'aide à se frictionner les mains, et je préviens l'IDE pour une évaluation.", cat: "ok", fb: "Hygiène respiratoire des PS : faire porter un masque à toute personne qui tousse, mouchoir à usage unique jeté aussitôt, hygiène des mains. L'évaluation médicale décidera d'éventuelles précautions gouttelettes." },
        { t: "Je la raccompagne en chambre et je mets en place des précautions Air.", cat: "exces", fb: "Une toux isolée ne relève pas des précautions Air, réservées à la tuberculose, à la rougeole et à la varicelle. Toute précaution complémentaire repose sur une prescription médicale." },
        { t: "Je ne fais rien tant qu'il n'y a pas de prescription.", cat: "risque", fb: "L'hygiène respiratoire fait partie des PS et ne nécessite aucune prescription." }
      ],
      refs: ["proc", "ps2017", "ira2012"] },
    { id: "m1d7", titre: "Le fauteuil partagé", role: "AS · ASH",
      ctx: "Le fauteuil roulant de l'unité vient de servir à Mme Martin pour aller au salon. M. Garnier doit l'utiliser maintenant.",
      q: "Que faites-vous entre les deux résidents ?",
      type: "choice",
      options: [
        { t: "J'essuie accoudoirs, poignées et assise avec une lingette détergente-désinfectante, en respectant le temps de contact du produit.", cat: "ok", fb: "Le matériel réutilisable partagé est entretenu avec un détergent-désinfectant entre deux résidents ; le temps de contact conditionne l'efficacité." },
        { t: "Rien, il est visiblement propre.", cat: "risque", fb: "Une surface propre en apparence peut porter des bactéries. Les points de contact des mains (accoudoirs, poignées) sont les plus contaminés." },
        { t: "Je pulvérise de l'eau de javel pure sur l'ensemble du fauteuil après chaque utilisation.", cat: "exces", fb: "La javel pure abîme le matériel et irrite. Le produit prévu est le détergent-désinfectant de l'établissement, utilisé à la bonne dilution ; la javel relève de protocoles précis (C. difficile, norovirus)." }
      ],
      refs: ["proc", "ps2017"] },
    { id: "m1d8", titre: "La tenue tachée", role: "Tous les professionnels",
      ctx: "À 10 h, votre tunique est tachée d'urine après un change difficile.",
      q: "Que faites-vous ?",
      type: "choice",
      options: [
        { t: "Je change de tenue maintenant ; la tenue sale part dans le circuit de linge de l'établissement.", cat: "ok", fb: "La tenue professionnelle se change en cas de souillure au cours du poste et n'est jamais entretenue au domicile." },
        { t: "Je mets un tablier par-dessus et je change à la fin du poste.", cat: "risque", fb: "Le tablier ne neutralise pas la souillure : la tenue reste un vecteur pour tous les résidents de la matinée." },
        { t: "Je la ramène à la maison pour la laver à 60 degrés ce soir.", cat: "ecart", fb: "La procédure l'interdit : la tenue ne doit en aucun cas être entretenue au domicile, la traçabilité et la qualité du traitement n'étant pas garanties." }
      ],
      refs: ["proc", "ps2017"] }
  ]
},
/* ============================== MODULE 2 ============================== */
{
  id: "m2", num: 2, titre: "Le bon type", sous: "Choisir la précaution selon le mode de transmission",
  pitch: "Huit résidents, huit situations. Le type de précaution dépend du mode de transmission de l'agent : contact, gouttelettes, air, ou protection d'un résident fragile.",
  color: "pcc",
  retenir: ["Le type de précaution suit le mode de transmission, pas la gravité perçue.", "C. difficile et gale : lavage eau et savon puis friction, car le PHA n'agit pas sur les spores ni sur le sarcopte.", "Air : FFP2 avant d'entrer, porte fermée. Gouttelettes : masque chirurgical dès l'entrée.", "En EHPAD, la précaution ne doit pas priver le résident de sa vie sociale sans raison : chaque mesure se discute au cas par cas."],
  decisions: [
    { id: "m2d1", titre: "Diarrhées et vomissements", role: "IDE · médecin coordonnateur",
      resident: { nom: "Mme Bernard", age: 88, chambre: "G05", tag: "3 selles liquides, vomissements" },
      ctx: "Depuis cette nuit, Mme Bernard a eu trois selles liquides et a vomi deux fois. Un autre résident de l'aile présente les mêmes signes depuis hier.",
      q: "Quelles précautions proposez-vous au médecin ?",
      type: "choice",
      options: [
        { t: "Précautions contact, avec masque et lunettes en cas d'exposition aux vomissements, et ménage en fin de circuit selon le protocole javel.", cat: "ok", fb: "La gastro-entérite relève des PCC. Le HCSP ajoute des mesures gouttelettes autour des vomissements. Pour une gastro-entérite (norovirus), la procédure prévoit le protocole javel en fin de circuit." },
        { t: "Précautions standard seules, en attendant la coproculture.", cat: "risque", fb: "Les mesures se mettent en place dès les signes cliniques, sans attendre le laboratoire : deux cas liés suggèrent déjà un début de cas groupés." },
        { t: "Précautions Air, chambre porte fermée, FFP2 pour tous.", cat: "exces", fb: "Le norovirus se transmet par les mains, les surfaces et les projections de vomissements, pas par voie aérienne au sens des précautions Air." },
        { t: "Précautions contact, et interdiction de toutes les visites à l'étage pendant quinze jours.", cat: "exces", fb: "Les visites se limitent et s'encadrent (information, hygiène des mains) ; une interdiction générale et longue n'est pas proportionnée et prive les résidents de leurs proches." }
      ],
      refs: ["proc", "gea2010"] },
    { id: "m2d2", titre: "Toxine positive", role: "IDE · AS · ASH",
      resident: { nom: "M. Caron", age: 82, chambre: "G10", tag: "C. difficile toxinogène" },
      ctx: "M. Caron, sous antibiotique pour une pneumopathie, a des diarrhées. Le laboratoire confirme un Clostridioides difficile toxinogène.",
      q: "Quelle conduite retenez-vous ?",
      type: "choice",
      options: [
        { t: "PCC renforcées C. difficile : surblouse et gants, lavage eau et savon puis FHA en sortant, lingettes sporicides, linge en sac rouge puis sac plastique, protocole javel.", cat: "ok", fb: "C'est la fiche « CD » de la procédure. Les spores résistent aux produits hydro-alcooliques : le lavage les élimine mécaniquement, la friction complète." },
        { t: "PCC habituelles avec FHA seule, comme pour une gastro-entérite.", cat: "risque", fb: "Le PHA n'a pas d'action sur les spores de C. difficile. Sans lavage au savon, les mains restent contaminées." },
        { t: "PCC renforcées et traitement préventif des voisins de chambre.", cat: "exces", fb: "Aucun traitement préventif n'est indiqué pour les contacts. La prévention repose sur l'hygiène des mains, l'environnement et le bon usage des antibiotiques." }
      ],
      refs: ["proc", "bzh2026"] },
    { id: "m2d3", titre: "Grippe confirmée", role: "IDE · AS",
      resident: { nom: "Mme Petit", age: 90, chambre: "G14", tag: "Test grippe positif, toux" },
      ctx: "Mme Petit a 38,6 °C et tousse. Le test rapide grippe est positif.",
      q: "Quelles précautions s'appliquent ?",
      type: "choice",
      options: [
        { t: "Gouttelettes : masque chirurgical dès l'entrée, lunettes si risque de projection, maintien en chambre surtout pour les repas, masque pour Mme Petit si elle sort, visiteurs informés et masqués.", cat: "ok", fb: "Ce sont les mesures de la fiche gouttelettes et du HCSP pour les IRA en EHPAD : masque de soin, maintien en chambre si possible, limitation et information des visites." },
        { t: "Air : FFP2 pour tous, porte fermée.", cat: "exces", fb: "La grippe relève des précautions gouttelettes. Le FFP2 se réserve aux gestes à risque d'aérosolisation (aspiration, prélèvement nasopharyngé)." },
        { t: "Précautions standard seules, puisqu'elle est vaccinée.", cat: "risque", fb: "La vaccination réduit le risque de forme grave mais n'empêche pas la transmission. Une grippe confirmée justifie des PCG." },
        { t: "Gouttelettes, et suppression de toutes les visites jusqu'à la fin de l'hiver.", cat: "exces", fb: "Les visites se limitent pendant la durée des PCG, avec information et masque. Une suppression prolongée n'est pas proportionnée." }
      ],
      refs: ["proc", "resp2013", "ira2012"] },
    { id: "m2d4", titre: "Une toux qui dure", role: "Médecin coordonnateur · IDE",
      resident: { nom: "M. Lambert", age: 77, chambre: "G02", tag: "Toux 3 semaines, sueurs nocturnes" },
      ctx: "M. Lambert, arrivé il y a deux mois, tousse depuis trois semaines, a perdu 4 kg et transpire la nuit. La radio montre une image suspecte. Les examens de crachats sont demandés.",
      q: "Que mettez-vous en place maintenant ?",
      type: "choice",
      options: [
        { t: "Précautions Air dès la suspicion : chambre individuelle porte fermée, FFP2 ajusté avant d'entrer, aération, masque chirurgical pour M. Lambert s'il sort, visites limitées avec FFP2.", cat: "ok", fb: "Les précautions Air s'appliquent au résident suspect ou atteint, sans attendre la confirmation. Le contrôle d'étanchéité (fit-check) se fait à chaque pose." },
        { t: "Gouttelettes : masque chirurgical pour les soignants.", cat: "risque", fb: "Le masque chirurgical ne protège pas des particules fines qui restent en suspension. Tuberculose = précautions Air et FFP2." },
        { t: "J'attends le résultat des crachats pour décider.", cat: "risque", fb: "Plusieurs jours sans mesure exposent soignants, résidents et visiteurs. La suspicion suffit." }
      ],
      refs: ["proc", "resp2013"] },
    { id: "m2d5", titre: "Démangeaisons nocturnes", role: "IDE · AS · ASH",
      resident: { nom: "Mme Robert", age: 85, chambre: "G07", tag: "Gale commune diagnostiquée" },
      ctx: "Mme Robert se gratte la nuit depuis deux semaines. Le médecin traitant diagnostique une gale commune.",
      q: "Quelle conduite retenez-vous ?",
      type: "choice",
      options: [
        { t: "PCC gale : surblouse plastifiée et gants, lavage eau et savon puis FHA en sortant, linge en sac rouge puis sac plastique, linge personnel traité par acaricide en sac fermé, traitement simultané des contacts du premier cercle.", cat: "ok", fb: "C'est la fiche « G » de la procédure, complétée par le HCSP : en gale commune, tous les contacts du premier cercle, même sans symptôme, sont traités en même temps que le cas." },
        { t: "PCC avec FHA seule, et traitement de Mme Robert uniquement.", cat: "risque", fb: "Le PHA n'agit pas sur le sarcopte ; et sans traitement simultané des contacts, la gale revient." },
        { t: "Chambre fermée à clé et repas en chambre pendant trois semaines.", cat: "exces", fb: "La levée intervient 48 h après le début du traitement. Fermer une chambre à clé constitue une privation de liberté sans fondement." }
      ],
      refs: ["proc", "gale2012"] },
    { id: "m2d6", titre: "Une résidente fragile", role: "IDE · médecin coordonnateur",
      resident: { nom: "Mme Girard", age: 80, chambre: "G01", tag: "Chimiothérapie, neutropénie" },
      ctx: "Mme Girard reçoit une chimiothérapie orale. Ses polynucléaires neutrophiles sont à 300/mm³.",
      q: "Quelle précaution est adaptée ?",
      type: "choice",
      options: [
        { t: "Précautions protecteur : soins et bionettoyage en premier, FHA et masque chirurgical pour entrer, visiteurs masqués, linge filmé, FFP2 pour elle si elle sort.", cat: "ok", fb: "Les PCP protègent le résident immunodéprimé de l'extérieur. C'est l'inverse des autres précautions, d'où le passage en premier dans la tournée." },
        { t: "Précautions contact, avec soins en fin de tournée.", cat: "ecart", fb: "Mme Girard n'est pas source de transmission : les PCC ne la protègent pas, et passer en dernier l'expose à ce que la tournée a ramassé." },
        { t: "Précautions Air, porte fermée.", cat: "exces", fb: "La porte fermée et le FFP2 des soignants ne correspondent pas au besoin d'une résidente neutropénique." }
      ],
      refs: ["proc"] },
    { id: "m2d7", titre: "Retour d'hospitalisation, BLSE", role: "IDE · médecin coordonnateur", div: true,
      resident: { nom: "M. Henry", age: 83, chambre: "G11", tag: "E. coli BLSE urinaire, colonisation" },
      ctx: "M. Henry revient du centre hospitalier. Le courrier signale une colonisation urinaire à E. coli BLSE. Il est continent, autonome, et tient à prendre ses repas en salle à manger avec ses voisins de table.",
      q: "Quelle conduite retenez-vous ?",
      type: "choice",
      options: [
        { t: "Précautions contact (affiche, UMP, tablier pour les soins directs, matériel dédié), et maintien des repas en salle avec hygiène des mains avant et après.",
          cat: { loc: "ok", nat: "exces" },
          fb: { loc: "C'est la conduite de la procédure Pôle MS : PCC pour une BMR, sans priver le résident de la vie collective. Les mesures géographiques (chambre individuelle) se discutent au cas par cas.", nat: "Le CPias Île-de-France et le CPias Bretagne ne recommandent pas de PCC pour les BMR en EHPAD : l'EHPAD est un lieu de vie, et des PS strictes suffisent. L'affiche et l'UMP sont ici des mesures excessives." } },
        { t: "Précautions standard strictes : hygiène des mains, protection de la tenue, gestion rigoureuse des excreta, matériel dédié ou désinfecté, information transmise en cas d'hospitalisation ; repas en salle avec hygiène des mains.",
          cat: { loc: "ecart", nat: "ok" },
          fb: { loc: "Cette conduite correspond aux recommandations régionales récentes, mais la procédure Pôle MS v03 prévoit des PCC pour les BMR. Tant que la procédure n'est pas mise à jour, l'appliquer seule constitue un écart.", nat: "C'est la conduite recommandée par les CPias en EHPAD : pas de PCC, mais des PS strictes, surtout pour les excreta, avec transmission de l'information aux soignants et en cas d'hospitalisation." } },
        { t: "Précautions contact avec repas en chambre et arrêt des animations jusqu'à des prélèvements négatifs.",
          cat: "exces",
          fb: "Quel que soit le référentiel, une colonisation urinaire chez un résident continent ne justifie pas de l'isoler de la vie collective. Le HCSP demande de ne pas interdire l'accès aux espaces de vie." }
      ],
      refs: ["proc", "idf2023", "bzh2026", "bhre2026"] },
    { id: "m2d8", titre: "Zona localisé", role: "IDE · AS",
      resident: { nom: "M. Fabre", age: 87, chambre: "G09", tag: "Zona thoracique, non immunodéprimé" },
      ctx: "M. Fabre présente un zona thoracique localisé. Il n'est pas immunodéprimé. Une jeune AS remplaçante ne sait pas si elle a eu la varicelle.",
      q: "Quelle conduite est adaptée ?",
      type: "choice",
      options: [
        { t: "Précautions contact, lésions couvertes ; les soins sont confiés à des soignants immunisés contre la varicelle.", cat: "ok", fb: "La procédure classe le zona dans les PCC. Le contenu des vésicules peut transmettre la varicelle à une personne non immunisée, d'où l'affectation de soignants immunisés." },
        { t: "Précautions Air, FFP2 pour tous.", cat: "exces", fb: "Pour un zona localisé chez un résident non immunodéprimé, les PCC suffisent. Les précautions Air concernent la varicelle et le zona généralisé ou chez l'immunodéprimé (repère CPias)." },
        { t: "Rien de particulier, le zona n'est pas contagieux.", cat: "risque", fb: "Le zona ne se transmet pas sous forme de zona, mais le liquide des vésicules peut donner une varicelle à une personne non immunisée." }
      ],
      refs: ["proc", "bzh2026"] }
  ]
},
/* ============================== MODULE 3 ============================== */
{
  id: "m3", num: 3, titre: "La mise en place", sous: "Prescription, affichage, chariot, tournée, famille",
  pitch: "M. Caron vient d'être placé en précautions C. difficile. Tout se joue dans l'organisation : qui décide, qui informe, ce qu'on met sur le chariot, dans quel ordre on entre et on sort.",
  color: "cd",
  retenir: ["Mise en place et levée relèvent d'une prescription médicale, avec information du médecin coordonnateur ou de l'IDEC.", "L'affiche indique le type de précautions, jamais le diagnostic : le secret s'applique aussi aux autres résidents.", "Résident informé et information tracée dans TITAN ; famille et visiteurs informés par l'équipe.", "Tournée : PCP en premier, PCC, PCG et PCA en dernier. Ambulanciers et établissement d'accueil prévenus en cas de transfert."],
  decisions: [
    { id: "m3d1", titre: "Les étapes obligatoires", role: "IDE · IDEC",
      resident: { nom: "M. Caron", age: 82, chambre: "G10", tag: "PCC C. difficile" },
      ctx: "Le médecin traitant vient de prescrire les précautions C. difficile.",
      q: "Quelles actions font partie de la mise en œuvre prévue par la procédure ? Cochez toutes les bonnes réponses.",
      type: "multi", missCat: "ecart",
      items: [
        { t: "Informer le médecin coordonnateur ou l'IDEC, qui évalue la conduite à tenir avec l'équipe", need: true },
        { t: "Afficher le type de précautions sur la porte et installer l'UMP", need: true },
        { t: "Informer M. Caron et tracer cette information dans TITAN", need: true },
        { t: "Informer la famille et les visiteurs", need: true },
        { t: "Écrire « C. difficile » sur l'affiche pour que chacun comprenne", need: false, cat: "ecart", why: "L'affiche signale le type de précautions, pas le diagnostic. Le diagnostic relève du secret médical." },
        { t: "Prévenir tous les résidents de l'aile que M. Caron est contagieux", need: false, cat: "ecart", why: "Ce serait une atteinte au secret et une source de stigmatisation. Les visiteurs sont informés des mesures, pas du diagnostic." }
      ],
      fbOk: "Prescription, information du médecin coordonnateur ou de l'IDEC, affichage, information du résident tracée dans TITAN, information des proches : c'est la séquence de la procédure.",
      refs: ["proc"] },
    { id: "m3d2", titre: "Le chariot devant la porte", role: "AS · ASH",
      ctx: "Vous équipez l'unité mobile de protection (échelle ou adaptable) devant la chambre de M. Caron.",
      q: "Que doit contenir l'UMP ? Cochez toutes les bonnes réponses.",
      type: "multi", missCat: "risque",
      items: [
        { t: "Produit hydro-alcoolique", need: true },
        { t: "Gants et surblouses", need: true },
        { t: "Tabliers à usage unique", need: true },
        { t: "Sacs jaunes, sac en tissu rouge et sac plastique pour le linge", need: true },
        { t: "Masques FFP2", need: false, cat: "exces", why: "C. difficile ne se transmet pas par voie aérienne : le FFP2 n'a pas d'indication ici." },
        { t: "Un stock de protections pour la semaine, rangé dans la chambre", need: false, cat: "risque", why: "Tout ce qui entre dans la chambre est considéré comme contaminé. On limite le stock et le matériel dédié reste dans la chambre." }
      ],
      fbOk: "C'est la liste de la fiche C. difficile de la procédure. Les lingettes sporicides servent au matériel qui reste dans la chambre.",
      refs: ["proc"] },
    { id: "m3d3", titre: "Entrer, sortir", role: "AS · IDE",
      ctx: "Vous allez réaliser le change de M. Caron.",
      q: "Remettez les étapes dans l'ordre, de l'entrée à la sortie.",
      type: "order", wrongCat: "risque",
      items: [
        "FHA avant d'entrer",
        "Surblouse et gants (tablier en plus pour le change)",
        "Réaliser le soin avec le matériel dédié",
        "Déchets en sac jaune, laissé dans la chambre",
        "Retirer gants et surblouse dans la chambre",
        "Lavage eau et savon, puis FHA en sortant"
      ],
      accept: [[0, 1, 2, 3, 4, 5]],
      fbOk: "La friction ouvre la séquence ; les équipements se retirent dans la chambre ; le lavage au savon suivi de la friction la ferme, car le PHA seul n'élimine pas les spores.",
      fbKo: "L'ordre attendu : FHA, surblouse et gants, soin, déchets en sac jaune dans la chambre, retrait des équipements dans la chambre, puis lavage eau et savon suivi d'une FHA en sortant.",
      refs: ["proc"] },
    { id: "m3d4", titre: "L'ordre de la tournée", role: "AS · IDE",
      ctx: "Ce matin, vous avez quatre toilettes : Mme Girard (précautions protecteur), M. Dupont (aucune précaution complémentaire), Mme Petit (gouttelettes, grippe), M. Caron (contact C. difficile).",
      q: "Dans quel ordre organisez-vous la tournée ?",
      type: "order", wrongCat: "risque",
      items: ["Mme Girard (protecteur)", "M. Dupont (précautions standard)", "Mme Petit (gouttelettes)", "M. Caron (contact C. difficile)"],
      accept: [[0, 1, 2, 3], [0, 1, 3, 2]],
      fbOk: "Le résident en précautions protecteur passe en premier, les résidents en PCC, PCG ou PCA en dernier, quand c'est possible. Entre Mme Petit et M. Caron, l'ordre se discute selon l'organisation.",
      fbKo: "Le résident protégé (PCP) passe en premier ; ceux qui sont en précautions contact, gouttelettes ou air passent en dernier, après les résidents en précautions standard.",
      refs: ["proc"] },
    { id: "m3d5", titre: "La fille de M. Caron", role: "IDE · AS",
      ctx: "La fille de M. Caron arrive pour la visite de l'après-midi. Elle voit l'affiche et demande ce qu'elle doit faire.",
      q: "Que lui expliquez-vous ?",
      type: "choice",
      options: [
        { t: "Pas de tenue particulière ; ne pas s'asseoir sur le lit ni utiliser les WC de la chambre ; hygiène des mains à l'entrée et à la sortie, avec lavage au savon conseillé en sortant.", cat: "ok", fb: "Ce sont les consignes visiteurs de la fiche C. difficile. Vu le mécanisme (spores), le lavage au savon en sortant est un conseil cohérent." },
        { t: "Les visites sont suspendues jusqu'à la levée des précautions.", cat: "exces", fb: "Aucune recommandation n'impose de suspendre les visites pour un C. difficile. La présence des proches fait partie des droits du résident." },
        { t: "Surblouse, gants et FFP2 à chaque visite.", cat: "exces", fb: "Ces équipements ne sont pas demandés aux visiteurs pour C. difficile ; le FFP2 n'a aucune indication." },
        { t: "Rien, pour ne pas l'inquiéter.", cat: "ecart", fb: "L'information des visiteurs par l'équipe fait partie de la mise en œuvre. Sans elle, la fille de M. Caron peut contaminer ses mains et l'environnement de son père." }
      ],
      refs: ["proc"] },
    { id: "m3d6", titre: "Linge et déchets", role: "AS · ASH",
      ctx: "Fin de change chez M. Caron : draps souillés, protection, gants et surblouse.",
      q: "Quelle filière appliquez-vous ?",
      type: "choice",
      options: [
        { t: "Déchets en sac jaune laissé dans la chambre et doublé en sortant ; linge en sac en tissu rouge puis sac plastique (SDEZ) ; ménage de la chambre en fin de circuit, protocole javel.", cat: "ok", fb: "C'est la fiche C. difficile : filière sac jaune pour les déchets, double emballage du linge, protocole javel en fin de circuit." },
        { t: "Linge dans le sac de linge habituel du chariot de l'aile, déchets dans la poubelle de l'office.", cat: "risque", fb: "Le linge et les déchets d'un résident en précautions C. difficile ne doivent pas rejoindre les circuits communs sans emballage spécifique : les spores survivent longtemps." },
        { t: "Je rince le drap souillé dans la douche de la chambre avant de l'emballer.", cat: "risque", fb: "Ne jamais pré-traiter le linge souillé dans la chambre : projections et contamination de la salle de bain." }
      ],
      refs: ["proc"] },
    { id: "m3d7", titre: "Le kinésithérapeute", role: "Paramédicaux extérieurs",
      resident: { nom: "Mme Petit", age: 90, chambre: "G14", tag: "PCG grippe, J2" },
      ctx: "Le kinésithérapeute libéral prévoit la séance de Mme Petit en salle de rééducation, avec deux autres résidents.",
      q: "Que lui proposez-vous ?",
      type: "choice",
      options: [
        { t: "Séance en chambre, masque chirurgical dès l'entrée, FHA, matériel désinfecté après usage ; rééducation collective reprise après la levée.", cat: "ok", fb: "La procédure engage aussi les paramédicaux extérieurs. Pendant les PCG, le résident reste en chambre si possible." },
        { t: "Séance en salle, Mme Petit porte un masque, ça suffit.", cat: "risque", fb: "Le masque de la résidente réduit l'émission mais ne permet pas une activité de groupe en espace clos pendant la phase contagieuse." },
        { t: "Pas de kinésithérapie pendant quinze jours.", cat: "exces", fb: "Interrompre la rééducation d'une résidente de 90 ans expose à une perte d'autonomie. La séance se fait en chambre." }
      ],
      refs: ["proc", "ira2012"] },
    { id: "m3d8", titre: "Départ aux urgences", role: "IDE",
      resident: { nom: "M. Caron", age: 82, chambre: "G10", tag: "PCC C. difficile" },
      ctx: "M. Caron se déshydrate ; le médecin demande un transfert aux urgences.",
      q: "Que faites-vous avant le départ ?",
      type: "choice",
      options: [
        { t: "Je préviens les ambulanciers et l'établissement d'accueil des précautions en cours, je mets une protection propre et j'inscris l'information dans le document de liaison.", cat: "ok", fb: "La procédure prévoit de prévenir les ambulances en cas de transfert. Le HCSP demande d'informer l'établissement qui accueille un porteur de bactérie hautement résistante, principe valable pour toutes les précautions." },
        { t: "Je ne dis rien, pour ne pas retarder sa prise en charge.", cat: "risque", fb: "Sans information, l'ambulance et le service d'accueil ne prennent pas de précautions et peuvent transmettre C. difficile à d'autres patients." },
        { t: "Je refuse le transfert tant que les précautions sont en cours.", cat: "exces", fb: "Une précaution complémentaire n'est jamais un motif de perte de chance : le transfert se fait avec information." }
      ],
      refs: ["proc", "bhre2026"] }
  ]
},
/* ============================== MODULE 4 ============================== */
{
  id: "m4", num: 4, titre: "La levée", sous: "Lever au bon moment, sur prescription",
  pitch: "Une semaine plus tard. Plusieurs dossiers arrivent à échéance. Lever trop tôt expose les autres résidents ; lever trop tard prive le résident de sa vie collective. Lisez la chronologie.",
  color: "pcg",
  retenir: ["La levée relève d'une prescription médicale, comme la mise en place.", "C. difficile et GEA : 48 h après les dernières diarrhées. Gale : 48 h après le début du traitement du résident, des contacts et de l'environnement.", "Tuberculose : au moins 15 jours de traitement efficace et amélioration clinique.", "À la levée : bionettoyage de fin de précaution, retrait de l'affiche et de l'UMP, élimination du matériel à usage unique resté dans la chambre, information et traçabilité."],
  decisions: [
    { id: "m4d1", titre: "M. Caron, 50 heures", role: "Médecin · IDE",
      resident: { nom: "M. Caron", age: 82, chambre: "G10", tag: "PCC C. difficile" },
      chrono: ["Lundi 8 h : dernière selle liquide", "Mardi : selles moulées", "Mercredi 10 h : 50 heures sans diarrhée, traitement en cours"],
      q: "Que faites-vous ?",
      type: "choice",
      options: [
        { t: "Je demande au médecin la prescription de levée ; à la levée, protocole javel de la chambre, retrait de l'affiche et de l'UMP, information de M. Caron et de sa fille, traçabilité.", cat: "ok", fb: "Critère de la procédure : levée possible 48 h après l'arrêt des diarrhées, sur prescription." },
        { t: "Je maintiens jusqu'à la fin du traitement et à une recherche de toxine négative.", cat: "exces", fb: "Aucun contrôle de guérison n'est recommandé : la toxine peut rester détectable chez un patient guéri. Le critère est clinique." },
        { t: "L'AS retire l'affiche ce matin, puisque le critère est rempli.", cat: "ecart", fb: "La levée relève d'une prescription médicale, comme la mise en place." }
      ],
      refs: ["proc", "bzh2026"] },
    { id: "m4d2", titre: "Fin de l'épisode de gastro, ou pas", role: "Médecin coordonnateur · IDEC",
      resident: { nom: "Aile des Glycines", age: null, chambre: "", tag: "Cas groupés de GEA" },
      chrono: ["Mme Bernard : asymptomatique depuis 52 heures", "Dernier nouveau cas de l'aile : hier soir", "Mesures collectives en cours : repas en chambre des malades, animations suspendues"],
      q: "Que décidez-vous ?",
      type: "choice",
      options: [
        { t: "Je lève les PCC de Mme Bernard sur prescription, mais je maintiens les mesures collectives de l'aile jusqu'à 48 heures après la fin des signes du dernier cas.", cat: "ok", fb: "Critère individuel : 48 h après les dernières diarrhées. En situation épidémique, les mesures collectives se lèvent 48 h après la fin des signes du dernier cas (repère CPias Bretagne)." },
        { t: "Je lève tout dans l'aile, Mme Bernard étant guérie.", cat: "risque", fb: "Le dernier cas date d'hier : l'épisode est encore actif." },
        { t: "Je maintiens les PCC de Mme Bernard jusqu'à la fin de l'épidémie.", cat: "exces", fb: "Après 48 h sans symptôme, le risque de transmission devient faible, même si l'excrétion peut persister : les PS strictes prennent le relais. La maintenir en PCC n'a plus de justification individuelle." }
      ],
      refs: ["proc", "bzh2026", "gea2010"] },
    { id: "m4d3", titre: "Mme Robert, 49 heures", role: "Médecin · IDE",
      resident: { nom: "Mme Robert", age: 85, chambre: "G07", tag: "PCC gale" },
      chrono: ["Lundi 14 h : traitement de Mme Robert ; contacts du premier cercle traités le même jour", "Lundi : linge et literie traités", "Mercredi 15 h : 49 heures, elle se gratte encore un peu la nuit"],
      q: "Que décidez-vous ?",
      type: "choice",
      options: [
        { t: "Je propose la levée sur prescription : plus de 48 heures après le début du traitement du résident, des contacts et de l'environnement. Le prurit résiduel n'est pas un critère de maintien.", cat: "ok", fb: "Critère de la procédure, précisé par le CPias Bretagne : 48 h après le début du traitement des personnes atteintes et de leur environnement. Le prurit peut persister une à deux semaines." },
        { t: "Je maintiens tant qu'elle se gratte.", cat: "exces", fb: "Le prurit post-scabieux persiste souvent après guérison. Le maintenir comme critère prolonge les précautions sans bénéfice." },
        { t: "J'aurais pu lever dès 24 heures.", cat: "risque", fb: "Le délai de 48 h après le début du traitement est le critère retenu." }
      ],
      refs: ["proc", "bzh2026", "gale2012"] },
    { id: "m4d4", titre: "Mme Petit, J5", role: "Médecin · IDE",
      resident: { nom: "Mme Petit", age: 90, chambre: "G14", tag: "PCG grippe" },
      chrono: ["J0 : fièvre et toux, test grippe positif", "J3 : apyrexie", "J5 : toux résiduelle, elle demande à retourner en salle à manger"],
      q: "Que proposez-vous ?",
      type: "choice",
      options: [
        { t: "Je maintiens les PCG et je prévois la réévaluation pour une levée vers J8, selon le protocole en vigueur ; en attendant, je lui explique pourquoi.", cat: "ok", fb: "La procédure ne fixe pas de durée pour la grippe ; le HCSP renvoie au protocole de l'établissement. Le repère du CPias Bretagne est de 8 jours après le début des signes, car la personne âgée excrète le virus plus longtemps." },
        { t: "Je lève : elle n'a plus de fièvre.", cat: "risque", fb: "L'apyrexie ne signe pas la fin de la contagiosité chez la personne âgée." },
        { t: "Je maintiens jusqu'à une PCR négative.", cat: "exces", fb: "Aucun contrôle virologique n'est recommandé pour lever les précautions de la grippe." }
      ],
      refs: ["bzh2026", "ira2012"] },
    { id: "m4d5", titre: "M. Lambert, J6 de traitement", role: "Médecin coordonnateur",
      resident: { nom: "M. Lambert", age: 77, chambre: "G02", tag: "PCA tuberculose" },
      chrono: ["Tuberculose pulmonaire confirmée, examen direct positif", "Traitement antituberculeux débuté il y a 6 jours", "Toux en diminution, sensibilité de la souche en attente"],
      q: "Que décidez-vous ?",
      type: "choice",
      options: [
        { t: "Je maintiens les PCA jusqu'à au moins 15 jours de traitement efficace et amélioration clinique, puis j'en discute avec le médecin qui suit le traitement ; je fais le lien avec le CLAT pour le dépistage des contacts.", cat: "ok", fb: "Repère CPias Bretagne : 15 jours après le début d'un traitement efficace. La sensibilité de la souche conditionne l'efficacité du traitement." },
        { t: "Je lève : la toux diminue.", cat: "risque", fb: "Six jours de traitement ne suffisent pas, et la souche pourrait être résistante." },
        { t: "Je maintiens jusqu'à la fin des six mois de traitement.", cat: "exces", fb: "Sous traitement efficace, la contagiosité chute en quelques semaines. Six mois d'isolement seraient une privation injustifiée." }
      ],
      refs: ["proc", "bzh2026", "resp2013"] },
    { id: "m4d6", titre: "M. Henry, BLSE", role: "IDE · médecin coordonnateur", div: true,
      resident: { nom: "M. Henry", age: 83, chambre: "G11", tag: "E. coli BLSE, colonisation" },
      chrono: ["J0 : retour d'hospitalisation, colonisation urinaire BLSE", "J7 : l'IDE propose de prélever un ECBU de contrôle chaque semaine pour pouvoir lever les précautions"],
      q: "Quelle est la bonne conduite ?",
      type: "choice",
      options: [
        { t: "Levée des PCC après 2 prélèvements négatifs à une semaine d'intervalle, sur prescription.",
          cat: { loc: "ok", nat: "exces" },
          fb: { loc: "C'est le critère de levée de la procédure Pôle MS v03 pour une BMR.", nat: "Selon les CPias, il n'y a pas de PCC pour une BMR en EHPAD, donc pas de levée à organiser ni de prélèvements de contrôle : un ECBU chez un résident asymptomatique risque surtout de déclencher des antibiotiques inutiles." } },
        { t: "Pas de prélèvement de contrôle : PS strictes, information portée au dossier et transmise en cas d'hospitalisation.",
          cat: { loc: "ecart", nat: "ok" },
          fb: { loc: "Cette conduite suit les recommandations régionales, mais la procédure v03 prévoit un critère de levée à 2 prélèvements négatifs. C'est un écart tant que la procédure n'est pas révisée.", nat: "C'est la logique des CPias et du HCSP pour les BHRe : pas de dépistage de contrôle en EHPAD, PS strictes et information des soignants et de l'établissement d'accueil." } },
        { t: "Je lève dès que l'ECBU est négatif une fois.",
          cat: "risque",
          fb: "Un seul prélèvement négatif ne correspond à aucun des deux référentiels ; le portage digestif persiste souvent." }
      ],
      refs: ["proc", "idf2023", "bzh2026"] },
    { id: "m4d7", titre: "Mme Fontaine, porteuse d'EPC", role: "Médecin coordonnateur · IDEC", div: true,
      resident: { nom: "Mme Fontaine", age: 81, chambre: "G06", tag: "Porteuse connue d'EPC (OXA-48)" },
      chrono: ["Portage digestif d'EPC connu depuis une hospitalisation l'an dernier", "Aucun symptôme, continente, aime le salon de l'aile"],
      q: "Quelle conduite retenez-vous ?",
      type: "choice",
      options: [
        { t: "PCC maintenues sans levée, avec accès au salon après hygiène des mains et bionettoyage quotidien de la chambre.",
          cat: { loc: "ok", nat: "exces" },
          fb: { loc: "La procédure v03 prévoit de ne pas lever l'isolement d'une porteuse d'EPC. Garder l'accès au salon avec hygiène des mains préserve sa vie sociale.", nat: "Le HCSP (R52) recommande de ne pas mettre en place de PCC en EHPAD pour un porteur de BHRe. Les mesures clés sont des PS rigoureuses, le bionettoyage quotidien, l'accès aux espaces de vie avec FHA et l'appel à l'équipe d'hygiène." } },
        { t: "Pas de PCC : PS rigoureuses, bionettoyage quotidien, FHA de Mme Fontaine avant et après le salon, avis de l'équipe d'hygiène, information de l'établissement d'accueil en cas de transfert.",
          cat: { loc: "ecart", nat: "ok" },
          fb: { loc: "C'est la recommandation HCSP de juin 2026, plus récente que la procédure v03, qui prévoit encore des PCC. Signalez cette divergence à l'EOH pour une mise à jour.", nat: "C'est la conduite HCSP 2026 (R39, R51, R52) : en EHPAD, le risque de transmission est faible si les PS sont bien appliquées." } },
        { t: "Chambre individuelle sans sortie, repas en chambre, tant qu'elle est porteuse.",
          cat: "exces",
          fb: "Aucun référentiel ne justifie de priver une résidente asymptomatique de vie collective. Le HCSP demande de ne pas interdire l'accès aux espaces de vie." }
      ],
      refs: ["proc", "bhre2026"] },
    { id: "m4d8", titre: "La voisine de chambre", role: "Médecin coordonnateur · IDEC", div: true,
      resident: { nom: "Mme Clément", age: 89, chambre: "G06 bis", tag: "Contact d'une porteuse d'EPC" },
      chrono: ["Mme Clément a partagé la chambre double de Mme Fontaine pendant trois mois", "Pas de cas secondaire connu dans l'aile"],
      q: "Que faites-vous pour Mme Clément ?",
      type: "choice",
      options: [
        { t: "PCC de contact, levées après 3 prélèvements négatifs à une semaine d'intervalle.",
          cat: { loc: "ok", nat: "exces" },
          fb: { loc: "C'est le critère de la procédure v03 pour un contact EPC.", nat: "Le HCSP (R52) recommande de ne pas mettre de PCC pour les contacts et de ne pas les dépister en EHPAD, sauf épidémie avérée ou suspectée, sur stratégie décidée avec l'équipe d'hygiène et le CPias." } },
        { t: "Ni PCC ni dépistage hors épidémie : PS strictes, et alerte de l'équipe d'hygiène si un cas secondaire apparaît.",
          cat: { loc: "ecart", nat: "ok" },
          fb: { loc: "Conforme au HCSP 2026, mais en écart avec la procédure v03 qui prévoit 3 prélèvements. À arbitrer en EOH.", nat: "Conforme au HCSP 2026 : pas de dépistage des contacts en EHPAD, sauf en cas d'épidémie (R53)." } },
        { t: "Je la transfère dans une autre chambre double avec une nouvelle voisine, pour éviter qu'elle reste exposée.",
          cat: "risque",
          fb: "Déplacer une contact vers une autre résidente multiplie les expositions potentielles. Une chambre individuelle se discute avec l'EOH." }
      ],
      refs: ["proc", "bhre2026"] },
    { id: "m4d9", titre: "Le jour de la levée", role: "IDE · AS · ASH",
      resident: { nom: "M. Caron", age: 82, chambre: "G10", tag: "Levée prescrite ce matin" },
      ctx: "La levée des précautions C. difficile de M. Caron vient d'être prescrite.",
      q: "Qu'est-ce qui accompagne la levée ? Cochez toutes les bonnes réponses.",
      type: "multi", missCat: "risque",
      items: [
        { t: "Bionettoyage complet de la chambre selon le protocole javel", need: true },
        { t: "Retrait de l'affiche et de l'UMP", need: true },
        { t: "Élimination du matériel à usage unique resté dans la chambre", need: true },
        { t: "Information de M. Caron et de sa famille, traçabilité dans TITAN", need: true },
        { t: "Recherche de toxine pour confirmer la guérison", need: false, cat: "exces", why: "Pas de contrôle de guérison : le critère est clinique." },
        { t: "Reprise des boîtes de gants restées dans la chambre pour d'autres résidents", need: false, cat: "risque", why: "Ce qui est entré dans la chambre est éliminé : les boîtes ouvertes ont été exposées aux spores." }
      ],
      fbOk: "La levée se prépare comme la mise en place : bionettoyage de fin, retrait de la signalétique, élimination du consommable exposé, information et traçabilité.",
      refs: ["proc", "bzh2026"] }
  ]
},
/* ============================== MODULE 5 ============================== */
{
  id: "m5", num: 5, titre: "Cas groupés", sous: "Une gastro qui se répand dans l'aile",
  pitch: "Décembre. Les cas de gastro-entérite s'additionnent à l'aile des Glycines. Il faut réagir vite, signaler à temps, et protéger sans enfermer.",
  color: "pca",
  retenir: ["Dès 2 cas liés : mesures immédiates sans attendre le laboratoire, fiche de surveillance et courbe épidémique.", "Signalement à l'ARS dès 5 cas de GEA (ou d'IRA) en 4 jours parmi les résidents, par le médecin coordonnateur.", "Mesures collectives proportionnées : activités de groupe suspendues pour les malades, visites encadrées, personnel malade écarté.", "Résidents qui déambulent : on adapte l'accompagnement, on n'enferme pas."],
  decisions: [
    { id: "m5d1", titre: "Lundi : deux cas", role: "IDE · IDEC",
      chrono: ["Dimanche soir : Mme Bernard, diarrhées et vomissements", "Lundi matin : M. Fabre, mêmes signes", "Ils partagent la même table en salle à manger"],
      q: "Quelle est la première réponse ?",
      type: "choice",
      options: [
        { t: "Je préviens le médecin coordonnateur et l'IDEC, PCC prescrites pour les deux, renforcement de l'hygiène des mains de tous, ouverture de la fiche de surveillance avec courbe épidémique, prélèvements de selles.", cat: "ok", fb: "Dès deux cas liés, les mesures se mettent en place sans attendre le laboratoire. La fiche de surveillance permet de repérer le seuil de signalement." },
        { t: "J'attends les résultats de selles pour éviter de m'affoler pour rien.", cat: "risque", fb: "Le norovirus se diffuse en quelques jours. Les mesures précoces limitent l'ampleur de l'épisode." },
        { t: "Je confine immédiatement tous les résidents de l'EHPAD en chambre.", cat: "exces", fb: "Mesure disproportionnée à ce stade, avec un coût important pour les résidents (isolement, perte d'autonomie, troubles du comportement)." }
      ],
      refs: ["gea2010", "proc"] },
    { id: "m5d2", titre: "Mercredi : cinq cas", role: "Médecin coordonnateur",
      chrono: ["Lundi : 2 cas", "Mardi : 1 cas", "Mercredi : 2 nouveaux cas, soit 5 résidents en 3 jours", "Deux soignantes ont aussi des symptômes"],
      q: "Que faut-il faire maintenant ?",
      type: "choice",
      options: [
        { t: "Signaler à l'ARS via le portail des signalements, prévenir l'EOH ou le CPias, et poursuivre la courbe épidémique.", cat: "ok", fb: "Critère national : au moins 5 cas de GEA en 4 jours parmi les résidents. Le signalement se fait sans attendre d'avoir toutes les informations." },
        { t: "Attendre 10 cas : 5 cas, c'est l'hiver normal.", cat: "risque", fb: "Le seuil est de 5 cas en 4 jours : le dépasser sans signaler prive l'établissement de l'appui de l'ARS et du CPias." },
        { t: "Compter les deux soignantes pour atteindre le seuil plus vite.", cat: "ecart", fb: "Le critère porte sur les résidents. Les cas chez le personnel sont recensés, mais n'entrent pas dans le seuil de signalement." }
      ],
      refs: ["gea2010", "ira2012"] },
    { id: "m5d3", titre: "Les mesures collectives", role: "Médecin coordonnateur · IDEC · direction",
      ctx: "Le norovirus est confirmé. Vous réunissez l'équipe pour fixer les mesures collectives.",
      q: "Quelles mesures retenez-vous ? Cochez toutes les bonnes réponses.",
      type: "multi", missCat: "risque",
      items: [
        { t: "Suspendre les activités de groupe pour les résidents malades, repas en chambre pour eux", need: true },
        { t: "Informer les visiteurs, limiter et encadrer les visites, hygiène des mains à l'entrée et à la sortie", need: true },
        { t: "Écarter le personnel malade jusqu'à 48 heures après la fin des symptômes", need: true },
        { t: "Renforcer le bionettoyage des points de contact, protocole javel en fin de circuit", need: true },
        { t: "Le personnel malade peut travailler s'il porte des gants", need: false, cat: "risque", why: "Un soignant malade excrète le virus : les gants n'empêchent pas la transmission. Il doit être écarté." },
        { t: "Interdire toutes les visites à l'ensemble de l'EHPAD jusqu'à nouvel ordre", need: false, cat: "exces", why: "Une interdiction générale et sans échéance n'est pas proportionnée ; les visites s'encadrent." }
      ],
      fbOk: "Ce sont les mesures du HCSP pour les GEA en EHPAD, adaptées au caractère de lieu de vie.",
      refs: ["gea2010", "proc"] },
    { id: "m5d4", titre: "Mme Roux déambule", role: "AS · AMP · IDE",
      resident: { nom: "Mme Roux", age: 84, chambre: "UVP 4", tag: "Troubles cognitifs, GEA" },
      ctx: "Mme Roux vit en unité de vie protégée. Elle a une GEA, mais ne comprend pas qu'elle doit rester dans sa chambre et déambule dans le couloir.",
      q: "Comment gérez-vous la situation ?",
      type: "choice",
      options: [
        { t: "J'accompagne sa déambulation : hygiène de ses mains fréquente, change et protection adaptés, bionettoyage renforcé des surfaces qu'elle touche, un soignant référent si possible.", cat: "ok", fb: "En EHPAD, et en UVP surtout, les mesures s'adaptent au résident. La procédure rappelle la prise en compte de la dimension psychologique et relationnelle." },
        { t: "Je ferme sa porte à clé jusqu'à la levée.", cat: "exces", fb: "Fermer une porte à clé est une privation de liberté et une contention, qui exige une décision médicale encadrée. Elle aggrave l'agitation." },
        { t: "Je laisse faire, on ne peut rien faire.", cat: "risque", fb: "Sans mesure, chaque surface touchée devient un relais. Des solutions intermédiaires existent." }
      ],
      refs: ["proc", "gea2010"] },
    { id: "m5d5", titre: "Une nouvelle admission", role: "Direction · médecin coordonnateur",
      ctx: "Une admission est prévue jeudi dans l'aile des Glycines, en plein épisode.",
      q: "Que décidez-vous ?",
      type: "choice",
      options: [
        { t: "Je reporte l'admission dans l'aile touchée, ou j'oriente vers une aile indemne, en lien avec l'ARS et la famille.", cat: "ok", fb: "Les conduites à tenir GEA en EHPAD prévoient de limiter les admissions et les transferts dans les unités touchées pendant l'épisode, en lien avec l'ARS." },
        { t: "J'admets normalement, la chambre est prête.", cat: "risque", fb: "Le nouveau résident serait exposé dès son arrivée, dans une aile en pleine transmission." },
        { t: "Je ferme les admissions de tout l'EHPAD pendant un mois.", cat: "exces", fb: "Les mesures se limitent aux unités touchées et à la durée de l'épisode." }
      ],
      refs: ["gea2010"] },
    { id: "m5d6", titre: "Fin de l'épisode", role: "Médecin coordonnateur · IDEC",
      chrono: ["Dernier cas : mardi, symptômes terminés jeudi midi", "Samedi midi : 48 heures sans nouveau symptôme dans l'aile"],
      q: "Comment clôturez-vous l'épisode ?",
      type: "choice",
      options: [
        { t: "Levée des mesures collectives 48 heures après la fin des signes du dernier cas, bilan final transmis à l'ARS avec la courbe épidémique, retour d'expérience avec l'équipe.", cat: "ok", fb: "Le signalement comporte deux temps : la fiche initiale, puis le bilan final. Le retour d'expérience identifie ce qui a fonctionné et ce qu'il faut améliorer." },
        { t: "Je lève tout dès le dernier cas guéri, sans bilan.", cat: "ecart", fb: "Le bilan final fait partie du signalement, et le délai de 48 heures après le dernier cas protège contre une reprise." },
        { t: "Je maintiens les mesures encore deux semaines, par précaution.", cat: "exces", fb: "Au-delà du critère, les mesures collectives pèsent sur la vie des résidents sans bénéfice démontré." }
      ],
      refs: ["gea2010", "bzh2026", "ira2012"] }
  ]
}
];
