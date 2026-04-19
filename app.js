// ==========================================
// MODÈLE (Données)
// ==========================================
class DataModel {
    constructor() {
        this.currentView = 'home';
        
        // --- GESTION VÉHICULES ---
        this.currentVehicleIndex = 0;
        this.vehicles = [
            {
                name: "RHINO",
                image: "img/rhino.png",
                specs: [
                    "Classe: Transport Léger",
                    "Rôle tactique: Déploiement rapide sur le front, transport de troupes.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "PREDATOR",
                image: "img/predator.png",
                specs: [
                    "Classe: Char de Combat Principal",
                    "Rôle tactique: Soutien blindé, destruction d'infanterie lourde.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "LAND RAIDER",
                image: "img/land_raider.png",
                specs: [
                    "Classe: Char d'Assaut / Transport Lourd",
                    "Rôle tactique: Percée de lignes, transport de troupes.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "REPUSLOR",
                image: "img/repulsor.png",
                specs: [
                    "Classe: Char de Combat Flottant, Transport Blindé.",
                    "Rôle tactique: Transport Blindé, soutien offensif, mobilité stratégique, contrôle d’objectif.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "STORMTALON",
                image: "img/stormtalon.png",
                specs: [
                    "Classe: Aéronef Leger de Combat, Appui Aérien",
                    "Rôle tactique: Intercepteur aérien et appui-feu au sol, escorte de troupes, attaques éclairs contre l’infanterie et les véhicules légers.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "STORMRAVEN",
                image: "img/stormraven.png",
                specs: [
                    "Classe: Aéronef Lourd de Transport et de Combat",
                    "Rôle tactique: Transport de troupes lourd, soutien aérien, assaut rapide, insertion de forces d'élite, appui-feu contre les cibles fortifiées.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "THUNDERHAWK",
                image: "img/thunderhawk.png",
                specs: [
                    "Classe: Transport Aérien / Gunship",
                    "Rôle tactique: Appui aérien, transport de troupes lourd.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            { 
                name: "LAND SPEEDER",
                image: "img/land_speeder.png",
                specs: [
                    "Classe: Véhicule Léger de Reconnaissance",
                    "Rôle tactique: Reconnaissance, harcèlement rapide.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "MOTO DE COMBAT",
                image: "img/bike.png",
                specs: [
                    "Classe: Véhicule Léger de Combat",
                    "Rôle tactique: Assaut motorisé, harcelment rapide.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "DREADNOUGHT",
                image: "img/dreadnought.png",
                specs: [
                    "Classe: Marcheur Blindé de Combat, Sarcophage de Guerre",
                    "Rôle tactique: Soutien de feu lourd, percée de lignes, assaut contre les cibles fortifiées, défense de positions stratégiques.",
                    "Blindage: ",
                    "Armement: ",
                    "Capacité: "
                ]
            },
            {
                name: "CHEVALIER IMPERIAL",
                image: "img/knight.png",
                specs: [
                    "Classe: Marcheur de Combat Lourd, Chevalier de Guerre",
                    "Rôle tactique: Domination du champ de bataille, destruction de cibles stratégiques, soutien de feu massif, intimidation ennemie.",
                ]
            },
            {
                name: "TITAN WARHOUND",
                image: "img/warhound.png",
                specs: [
                    "Classe: Titan de Combat Lourd, Marcheur de Guerre",
                    "Rôle tactique: Domination du champ de bataille, destruction de cibles stratégiques, soutien de feu massif, intimidation ennemie.",
                    "Blindage: ",
                    "Armement: "
                ]
            }
            
        ];

        this.isLogiAuthenticated = false; 
        this.authorizedUsers = {
            "leandres": "accessgranted",
            "magos": "retributors7"
        };

        // --- GESTION ARMES ---
        this.currentWeaponIndex = 0;
        this.weapons = [
            // Bolters classiques
            {
                name: "BOLTER MK2",
                image: "img/bolter_mk2.png",
                specs: [
                    "Type: Arme standard",
                    "Utilisateur: Space Marines",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Polyvalence en combat."
                ]
            },
            {
                name: "BOLTER LOURD MK2",
                image: "img/bolter_lourd_mk2.png",
                specs: [
                    "Type: Arme Lourde",
                    "Utilisateur: Devastator",
                    "Munition: Bolter",
                    "Cadence de tir: Élevée",
                    "Rôle: Suppression d'infanterie."
                ]
            },
            {
                name: "BOLTER SNIPER MK2",
                image: "img/bolter_sniper_mk2.png",
                specs: [
                    "Type: Arme de précision",
                    "Utilisateur: Eliminator",
                    "Munition: Bolter",
                    "Cadence de tir: Faible",
                    "Rôle: Élimination de cibles prioritaires."
                ]
            },

            // Carabines Bolter
            {
                name: "CARABINE BOLTER STANDARD MK2",
                image: "img/carabine_bolter_standard.png",
                specs: [
                    "Type: Arme légère",
                    "Utilisateur: Space Marines",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Combat mobile."
                ]
            },
            {
                name: "CARABINE BOLTER MARKSMAN MK2",
                image: "img/carabine_bolter_marksman.png",
                specs: [
                    "Type: Arme de précision",
                    "Utilisateur: Space Marines",
                    "Munition: Bolter",
                    "Cadence de tir: Faible",
                    "Rôle: Tir à moyenne portée."
                ]
            },
            {
                name: "CARABINE BOLTER OCULUS MK2",
                image: "img/carabine_bolter_oculus.png",
                specs: [
                    "Type: Arme tactique",
                    "Utilisateur: Space Marines",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Détection et neutralisation."
                ]
            },
            {
                name: "CARABINE BOLTER INFILTRATOR MK2",
                image: "img/carabine_bolter_infiltrator.png",
                specs: [
                    "Type: Arme furtive",
                    "Utilisateur: Infiltrator",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Engagement discret."
                ]
            },

            // Néo-Bolter
            {
                name: "FUSIL NEO-BOLTER",
                image: "img/neo_bolter.png",
                specs: [
                    "Type: Arme standard",
                    "Utilisateur: Neophyte",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Formation et soutien."
                ]
            },
            {
                name: "FUSIL NEO-SHOTGUN",
                image: "img/neo_shotgun.png",
                specs: [
                    "Type: Arme de tir à courte portée",
                    "Utilisateur: Neophyte",
                    "Munition: Ballistique",
                    "Cadence de tir: Faible",
                    "Rôle: Combat rapproché."
                ]
            },
            {
                name: "FUSIL MELTA MK2",
                image: "img/melta_mk2.png",
                specs: [
                    "Type: Arme anti-blindé",
                    "Utilisateur: Devastator",
                    "Munition: Melta",
                    "Cadence de tir: Faible",
                    "Rôle: Destruction de cibles lourdes."
                ]
            },
            {
                name: "MULTI-MELTA LOURD MK2",
                image: "img/multi_melta.png",
                specs: [
                    "Type: Arme Lourde",
                    "Utilisateur: Devastator",
                    "Munition: Melta",
                    "Cadence de tir: Faible",
                    "Rôle: Anti-véhicule."
                ]
            },
            {
                name: "FUSIL NEO-MELTA",
                image: "img/neo_melta.png",
                specs: [
                    "Type: Arme anti-blindé",
                    "Utilisateur: Neophyte",
                    "Munition: Melta",
                    "Cadence de tir: Faible",
                    "Rôle: Initiation au combat lourd."
                ]
            },
            
            {
                name: "FUSIL NEO-PLASMA",
                image: "img/neo_plasma.png",
                specs: [
                    "Type: Arme énergétique",
                    "Utilisateur: Neophyte",
                    "Munition: Plasma",
                    "Cadence de tir: Moyenne",
                    "Rôle: Polyvalence énergétique."
                ]
            },
            {
                name: "INCINERATEUR PLASMA LOURD MK2",
                image: "img/plasma_lourd.png",
                specs: [
                    "Type: Arme Lourde",
                    "Utilisateur: Devastator",
                    "Munition: Plasma",
                    "Cadence de tir: Moyenne",
                    "Rôle: Nettoyage de zone."
                ]
            },
            
            {
                name: "LASSNIPER MK2",
                image: "img/las_sniper.png",
                specs: [
                    "Type: Arme de précision",
                    "Utilisateur: Eliminator",
                    "Munition: Laser",
                    "Cadence de tir: Faible",
                    "Rôle: Tir longue portée."
                ]
            },
            {
                name: "LONGLAS MKV",
                image: "img/longlas.png",
                specs: [
                    "Type: Arme de précision",
                    "Utilisateur: Eliminator",
                    "Munition: Laser",
                    "Cadence de tir: Faible",
                    "Rôle: Sniper longue portée."
                ]
            },
            {
                name: "PISTOLET BOLTER MK2",
                image: "img/pistolet_bolter.png",
                specs: [
                    "Type: Arme secondaire",
                    "Utilisateur: Space Marines",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Combat rapproché.",
                    "Vartiante: Avec bouclier tactique"
                ]
            },
            {
                name: "PISTOLET BOLTER LÉGER MK2",
                image: "img/pistolet_bolter_lourd.png",
                specs: [
                    "Type: Arme secondaire",
                    "Utilisateur: Space Marines",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Combat rapporché lourd."
                ]
            },
            {
                name: "PISTOLET PLASMA MK2",
                image: "img/pistolet_plasma.png",
                specs: [
                    "Type: Arme secondaire",
                    "Utilisateur: Space Marines",
                    "Munition: Plasma",
                    "Cadence de tir: Faible",
                    "Rôle: Puissance concentrée."
                ]
            },
            {
                name: "PISTOLET NEO-BOLTER MK2",
                image: "img/pistolet_neo_bolter.png",
                specs: [
                    "Type: Arme secondaire",
                    "Utilisateur: Neophyte",
                    "Munition: Bolter",
                    "Cadence de tir: Moyenne",
                    "Rôle: Formation rapprochée."
                ]
            },
            {
                name: "COUTEAU ASTARTES",
                image: "img/couteau_astartes.png",
                specs: [
                    "Type: Arme de mêlée",
                    "Utilisateur: Space Marines",
                    "Rôle: Combat rapproché, utilitaire."
                ]
            },
            {
                name: "PELLE DE COMBAT",
                image: "img/pelle_combat.png",
                specs: [
                    "Type: Arme de mêlée",
                    "Utilisateur: Space Marines",
                    "Rôle: Combat rapproché, utilitaire."
                ]
            },
            {
                name: "EPEE TRONCONNEUSE",
                image: "img/epee_tronconneuse.png",
                specs: [
                    "Type: Arme de mêlée",
                    "Utilisateur: Space Marines",
                    "Rôle: Combat rapproché brutal.",
                    "Variante: Avec bouclier"
                ]
            },
            {
                name: "EPEE ENERGETIQUE",
                image: "img/epee_energetique.png",
                specs: [
                    "Type: Arme énergétique",
                    "Utilisateur: Space Marines",
                    "Rôle: Pénétration d’armure.",
                    "Variante: Avec bouclier"
                ]
            },
            {
                name: "HACHE TRONCONNEUSE MK1",
                image: "img/hache_tronconneuse.png",
                specs: [
                    "Type: Arme de mêlée",
                    "Utilisateur: Space Marines",
                    "Rôle: Démembrement.",
                    "Variante: Avec bouclier"
                ]
            },
            {
                name: "HACHE ENERGETIQUE MK1",
                image: "img/hache_energetique.png",
                specs: [
                    "Type: Arme énergétique",
                    "Utilisateur: Space Marines",
                    "Rôle: Anti-armure.",
                    "Variante: Avec bouclier"
                ]
            },
            {
                name: "CROZIUS",
                image: "img/crozius.png",
                specs: [
                    "Type: Arme sacrée",
                    "Utilisateur: Chapelain",
                    "Rôle: Combat et symbole d'autorité.",
                    "Variante: Avec bouclier"
                ]
            },
            {
                name: "HALLEBARDE TECHMARINE",
                image: "img/hallebarde_techmarine.png",
                specs: [
                    "Type: Arme de mêlée",
                    "Utilisateur: Techmarine",
                    "Rôle: Combat technique."
                ]
            },
            {
                name: "JUMP PACK ASTARTES",
                image: "img/jump_pack.png",
                specs: [
                    "Type: Équipement de mobilité",
                    "Utilisateur: Assaut",
                    "Rôle: Déploiement rapide."
                ]
            },
            {
                name: "GRAPPIN ASTARTES",
                image: "img/grappin.png",
                specs: [
                    "Type: Équipement tactique",
                    "Utilisateur: Scout Neophyte / Eliminator",
                    "Rôle: Mobilité verticale."
                ]
            },
            {
                name: "MODULE DE CERAMITE LEGERE",
                image: "img/ceramite.png",
                specs: [
                    "Type: Module Astartes",
                    "Utilisateur: Assaut",
                    "Fonction: Réduction des plaques d'armures au profit d'une meilleure mobilité.",
                ]
            },
            {
                name: "MODULE DE CERAMITE RENFORCÉE",
                image: "img/ceramite.png",
                specs: [
                    "Type: Module Astartes",
                    "Utilisateur: Devastator",
                    "Fonction: Renforcement des plaques d'armures au détriment de la mobilité.",
                ]
            },
            {
                name: "MODULE DE DROGUE STAMINA",
                image: "img/stamina.png",
                specs: [
                    "Type: Module Astartes",
                    "Utilisateur: Space Marines",
                    "Fonction: Augmente la vitesse et diminue la fatigue au détriment de l'intégrité organique."
                ]
            },
            {
                name: "MODULE DE DROGUE D'ENDURANCE",
                image: "img/endurance.png",
                specs: [
                    "Type: Module Astartes",
                    "Utilisateur: Space Marines",
                    "Fonction: Augmente la résistance au détriment de la vitesse et de la fatigue."
                ]
            },
            {
                name: "MODULE DE SCANNER TACTIQUE",
                image: "img/scanner.png",
                specs: [
                    "Type: Module Astartes",
                    "Utilisateur: Space Marines",
                    "Fonction: Fournit une analyse en temps réel de l'environnement et des cibles, même au travers des murs."
                ]
            },
            {
                name: "MODULE DE VISION NOCTURNE",
                image: "img/night_vision.png",
                specs: [
                    "Type: Module Astartes",
                    "Utilisateur: Space Marines",
                    "Fonction: Permet de voir dans l'obscurité totale en amplifiant les faibles sources de lumière."
                ]
            }
        ];

        // --- GESTION DU MATERIEL ---
        this.currentGearIndex = 0;
        this.gear = [
            {
                name: "FABRICATOR",
                image: "img/fabricator.png",
                specs: [
                    "Type: Système de Fabrication",
                    "Fonction: Assemblage de pièces, fabrication d'armes et de munition, réparation de matériel."
                ]
            },
            {
                name: "FABRICATOR LOURD",
                image: "img/fabricator_heavy.png",
                specs: [
                    "Type: Système de Fabrication Lourde",
                    "Fonction: Fabrication de véhicules, réparation de blindés, construction de fortifications."
                ]
            },
            {
                name: "TOURELLE DE DÉFENSE",
                image: "img/turret.png", 
                specs: [
                    "Type: Système de Défense Stationnaire",
                    "Armement: Fusils laser, Canons Plasma",
                    "Rôle: Défense de périmètre, suppression d'infanterie.",
                    "Modules : Bolter, Assaut (Heavy Stubbers), Plasma, LasCannon, Melta, Multi-Melta.",
                    "Augmentiques: Blindage renforcé."
                ]
            },
            {
                name: "REPARATUM",
                image: "img/reparatum.png", 
                specs: [
                    "Type: Système de Réparation Portatif",
                    "Fonction: Détachement de pièces, soudure d'appoint, diagnostic rapide.",
                    "Rôle: Maintenance d'armure et de véhicules sur le champ de bataille, construction de fortifications."
                ]
            },
            {
                name: "NARCTECIUM",
                image: "img/nartec.png",
                specs: [
                    "Type: Système de Soins Portatif",
                    "Fonction: Administration de nanites de réparation, stabilisation des blessures, traitement de la fatigue.",
                    "Rôle: Soins d'urgence sur le champ de bataille, récupération rapide des blessés, soutien aux opérations prolongées."
                ]
            },
            {
                name: "REANIMATOR",
                image: "img/reanimator.png",
                specs: [
                    "Type: Système de Réanimation Portatif",
                    "Fonction: Administration de nanites de réanimation, stimulation cardiaque, restauration des fonctions vitales.",
                    "Rôle: Réanimation d'urgence sur le champ de bataille, récupération des blessés critiques, soutien aux opérations prolongées."
                ]
            },
            {
                name: "SCANNER MEDICAL",
                image: "img/medscanner.png",
                specs: [
                    "Type: Système de Diagnostic Médical Portatif",
                    "Fonction: Analyse rapide de l'état de l'intégrité des organes.",
                    "Rôle: Diagnostic rapide sur le champ de bataille, évaluation de la gravité des blessures, soutien aux décisions médicales d'urgence."
                ]
            },
            {
                name: "TABLETTE DE DONNEES",
                image: "img/tablet.png",
                specs: [
                    "Type: ",
                    "Fonction: ",
                    "Rôle: "
                ]
            },
            {
                name: "DATAPAD TACTIQUE",
                image: "img/tablet.png",
                specs: [
                    "Type: ",
                    "Fonction: ",
                    "Rôle: "
                ]
            },
            {
                name: "POCHE DE COMBAT",
                image: "img/pocket.png",
                specs: [
                    "Type: Augmentation de Stockage Personnel",
                    "Fonction: Compartiments de stockage supplémentaires, accès rapide à l'équipement.",
                    "Rôle: Permet au Space Marine de transporter plus de matériel sur le champ de bataille, améliore la flexibilité tactique, facilite l'accès à l'équipement essentiel."
                ]
            }

        ];
    }



    checkCredentials(user, pass) {
        if (this.authorizedUsers[user] && this.authorizedUsers[user] === pass) {
            this.isLogiAuthenticated = true;
            return true;
        }
        return false;
    }

    next(type) {
        if (type === 'vehicles') this.currentVehicleIndex = (this.currentVehicleIndex + 1) % this.vehicles.length;
        if (type === 'weapons') this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
        if (type === 'gear') this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.gear.length;
    }

    prev(type) {
        if (type === 'vehicles') this.currentVehicleIndex = (this.currentVehicleIndex - 1 + this.vehicles.length) % this.vehicles.length;
        if (type === 'weapons') this.currentWeaponIndex = (this.currentWeaponIndex - 1 + this.weapons.length) % this.weapons.length;
        if (type === 'gear') this.currentWeaponIndex = (this.currentWeaponIndex - 1 + this.gear.length) % this.gear.length;

    }
}

// ==========================================
// VUE (Affichage)
// ==========================================
class AppView {
    constructor() { this.appRoot = document.getElementById('app-root'); }

    render(viewName, model) {
        this.appRoot.innerHTML = ''; 

        switch (viewName) {
            case 'home':
                this.appRoot.innerHTML = `
                    <h2>> INITIALISATION...</h2>
                    <p>> [STATUT DU CHAPITRE] : DÉPLOIEMENT EN COURS.</p>
                    <p>> [RÉQUISITIONS] : EN LIGNE.</p>
                    <p>> [SYSTÈME DE MAINTENANCE] : OPÉRATIONNEL.</p>

                    <br>
                    <p>> [LITANIES] : PRÊTES...</p>
                    <p class="center"> 
                    '''
                    AVE DEUS MECHANICUS, NOSTRI DOMINUS ET DEUS. <br>
                    AVE MARS, PATER OMNISCIENTIAE. <br>
                    AVE OMNIMESSIE, LUMEN DEI. <br>
                    AVE FORTITUDO, PILARUM IMPERII. <br> 
                    AVE GLORIA, VICTORIA AETERNA. <br>
                    AVE RETRIBUTORS, FIDELIS SERVI.
                    '''
                    </p>
                    <br>
                    <p>Authentification confirmée. Bienvenue, Techmarine.</p>
                    <br>
                    <p>Ce terminal vous donne accès aux systèmes de l'armurerie et du garage du Chapitre des <strong>RETRIBUTORS</strong>. N'oubliez jamais : la chair est faible, mais la machine est éternelle.</p>
                    <br>
                    <p>
                        Les Techmarines sont une spécialité de l’Adeptus Astartes, ils sont liés au Culte du Dieux Machine, ils sont également les gardiens des secrets technologiques et mécaniques de leur Chapitre. <br> 
                        L'importance d’un Techmarines est vitale au sein d’un Chapitre car il sont les seuls à pouvoir opérer efficacement sur les machines de leur Chapitre qu’elles soient des armes, des fabricators ou bien des véhicules. Leur rôle passe aussi par l'entretien et la maintenance de tous les appareils, présent sur les différentes bases d'opérations et sur le matériel de leurs Frères. <br>
                        Être un Techmarines n’est pas seulement une spécialisation mais une volonté, un lourd devoirs qui se doit d'être transmis pendant une formation de 30 année standarts sur Mars, années pendant lesquelles vous serez formé sur tous les aspects de la mécanique et la technicité de l'arsenal de l’Adeptus Astartes et étrangères, après cette période de formation vous serez pleinement opérationnel pour opérer au seins de votre Chapitre. <br>
                        Votre rôle est aussi de connaître l'équipement utilisé au sein de votre Chapitre pour pouvoir les déployées avec un maximum d’efficacité, notamment en conseillant les Officiers. Il est également possible d'être rattaché aux escouade de commandements lors de mission pour pouvoir partager vos connaissance stratégique et votre savoir de la machine afin d’assister au mieux votre Chapitre et vos Frères durants les missions 

                    </p>
                    
                `;
                break;

            case 'cults':
                this.appRoot.innerHTML = `
                    <h2>> LE CULTE DE LA MACHINE</h2>
                    <p>Le Culte Mechanicus repose sur une théologie stricte, indispensable à la compréhension de la Quête du Savoir. Cette foi vénère une Trinité divine, fusionnant l'organique et le mécanique sous l'égide du fer :</p>

                    <ul>
                        <li><strong>Le Dieu-Machine (Le Créateur originel) :</strong> L'entité suprême, froide et omnisciente. Il est l'architecte de toute technologie et le détenteur du savoir absolu dans l'univers. Pour le Mechanicus, la chair est faible et éphémère, mais la perfection de la machine est l'expression directe de la volonté du Dieu-Machine.</li>
                        <li><strong>L'Omnimessie (L'Incarnation, le Prophète) :</strong> L'avatar physique du Dieu-Machine parmi les mortels (le Messie). Pour la majorité de l'Imperium et des Techmarines, l'Empereur de l'Humanité est reconnu comme cette incarnation. Il est celui qui a apporté l'illumination technologique et unifié les mondes-forges.</li>
                        <li><strong>La Force Motrice (L'Esprit Saint, le Souffle de Vie) :</strong> C'est l'énergie mystique et électrique qui donne vie à toute chose. C'est l'étincelle divine qui parcourt les circuits d'un Auspex, rugit dans le moteur d'un Rhino, et anime le cœur même des êtres vivants. C'est elle qui confère aux machines leur "Esprit-Machine".</li>
                    </ul>
                    <br>
                    <h2>> LES SEIZES LOIS UNIVERSELLES</h2>

                    <p>Dans leur Quête du Savoir, les Techmarines et les adeptes de Mars sont guidés par un dogme immuable divisé en deux catégories distinctes, les Mystères et les Avertissements.</p> <br>

                    <h3>> Les Huit Mystères — Le Dogme de la Vie et du Savoir</h3>
                    <ul>
                        <li>La vie est un mouvement dirigé.</li>
                        <li>L'esprit est l'étincelle de vie.</li>
                        <li>La sensibilité est la capacité d'apprendre la valeur de la connaissance.</li>
                        <li>L'intellect est la compréhension de la connaissance.</li>
                        <li>La conscience est la forme la plus élémentaire de l'intellect.</li>
                        <li>La compréhension est le véritable chemin vers l'illumination.</li>
                        <li>La compréhension est la clé de toute chose.</li>
                        <li>L'Omnimessie sait tout, comprend tout.</li>
                    </ul>
                    <br>

                    <h3>> Les Huit Avertissements — Les Interdits Sacrés</h3>
                    <ul>
                        <li>Le mécanisme étranger (Xenos) est une perversion du Vrai Chemin.</li>
                        <li>L'âme est la conscience de la sensibilité.</li>
                        <li>Une âme ne peut être conférée que par l'Omnimessie.</li>
                        <li>La conscience sans âme (l'Abominable Intelligence) est l'ennemie de toute vie.</li>
                        <li>Le savoir des Anciens est incontestable.</li>
                        <li>L'Esprit de la Machine garde le savoir des Anciens.</li>
                        <li>La chair est faillible, mais le rituel honore l'Esprit de la Machine.</li>
                        <li>Rompre avec le rituel, c'est rompre avec la foi.</li>
                    </ul>
                    <br>
                    <h2>> LA QUÊTE DU SAVOIR &amp; L'ÉDIT D'INITIATION</h2>

                    <p>Le but ultime du Culte Mechanicus est de rassembler et de comprendre tout le savoir de la galaxie pour honorer le Dieu-Machine. Les fidèles croient fermement que tout le savoir existe déjà dans l'univers ; il a simplement été perdu et n'attend que d'être redécouvert. Cette entreprise est sacrée et prévaut sur toute autre considération mortelle.</p>
                    <br>
                    
                    <p>L'intégration d'un nouvel adepte n'est jamais acquise. Lors de l'arrivée d'un Apprenti Techmarine au sein des Forges, ce dernier se voit accorder un délai strict d'une semaine standard. Durant ce cycle, il doit élaborer et présenter son projet personnel afin de prouver sa valeur intellectuelle et amorcer officiellement sa propre Quête du Savoir devant ses pairs.</p>
                    <br>
                    <h2>Rites, Culture et Litanies des Techmarines</h2>

                    <p>Chaque action d'un Techmarine est codifiée. La maintenance n'est pas un acte de simple ingénierie, c'est un acte de dévotion, chaque erreur peut coûter la vie d'un Frère de bataille. Voici les rites majeurs et les prières qui les accompagnent. Chaque Techmarine, peut importe son rang se doit d'être capable de composer ces propres prières afin d'adapter ces litanies aux diverses situations qu'il peut rencontrer. Chaque Litanie ayant prouvé son efficacité doit être inscrite dans un registre public.</p>

                    <h3>> Le Rite de l'Onction des Machines</h3>
                    <p>Avant toute réparation ou activation, le Techmarine applique des huiles sacrées et de l'encens. Ce geste apaise l'Esprit-Machine de l'artéfact pour qu'il accepte l'intervention.</p>
                    <br>
                    <div>
                        <strong>Prière d'Onction</strong>
                        <p>« Ô Esprit de Fer, gardien des rouages éternels, entends la voix de ton serviteur béni par Mars. Je purifie ton enveloppe par l'huile sacrée. Je chasse les erreurs, je bannis les corruptions invisibles. Que tes fibres d'acier répondent à l'appel du devoir. »</p>
                    </div>

                    <h3>> Les Litanies de Réparation</h3>
                    <p>Chaque action technique (resserrer un boulon, souder un blindage) est rythmée par la récitation de prières. Une syllabe manquée est une insulte à la Force Motrice, risquant de provoquer le dysfonctionnement de l'arme.</p>
                    <br>
                    <div>
                        <strong>Prière de Réparation</strong>
                        <p>« Dieu-Machine, pardonne les outrages du temps et de la guerre. Que mon marteau soit ta volonté, que ma clé soit ta précision. Par ce saint sceau de soudure, je referme tes plaies. Reçois le rite, accepte la pièce, retrouve ta parfaite fonction. »</p>
                    </div>

                    <h3>> Le Rite d'Éveil</h3>
                    <p>Utilisé pour sortir un véhicule, une arme relique ou un Dreadnought de son sommeil. Le Techmarine psalmodie en binaire pour stimuler l'Esprit-Machine et l'inciter à la fureur guerrière.</p>
                    <br>
                    <div>
                        <strong>Prière d'Éveil</strong>
                        <p>« Que tes circuits s'illuminent de la volonté de l'Omnimessie. Par les sceaux de l'Adeptus Mechanicus, par les mystères du code ancien, je t'ordonne : Éveille-toi. Que ton cœur de machine batte à nouveau, que ta voix de tonnerre serve l'Imperium. Loué soit l'Acier. Loué soit la Fonction. Loué soit l'Éternité. »</p>
                    </div>

                    <h3>> La Communion Binaire — Le Cant Mécanique</h3>
                    <p>Plus qu'un langage, c'est un état de transe. Via ses implants corticaux, le Techmarine se connecte à la noosphère de la machine. Ce rituel mystique fusionne temporairement la conscience humaine et les flux de données.</p>
                    <br>
                    <div>
                        <strong>Chant de Communion</strong>
                        <p><span>01000111 01101100 01101111 01101001 01110010 01100101</span>… Mon esprit s'abaisse devant ton architecture. Que tes diagnostics deviennent ma vision. Nous sommes un, dans l'acier partagé et le flux binaire parfait. Parle-moi en tension et en chaleur, je t'écouterai en foi et en code.</p>
                    </div>

                    <h3>> Le Rite de Maintenance Sacrée</h3>
                    <p>C'est le travail quotidien des Forges. Les armures énergétiques et les Bolters sont démontés méthodiquement, purifiés de la crasse des xenos, puis bénis pièce par pièce avant le remontage.</p>
                    <br>
                    <div>
                        <strong>Prière de Maintenance</strong>
                        <p>« La rouille est la maladie de la chair faible, l'huile est le sang des immortels. Je chasse la poussière de l'ignorance. Par l'encens et la calibration, ton esprit est honoré. Repose dans la perfection, jusqu'à l'heure où l'Empereur réclamera ta colère. »</p>
                    </div>

                    <h3>> Le Serment du Maître de Forge</h3>
                    <p>L'engagement solennel prononcé par l'officier suprême des Forges du Chapitre. Il jure de protéger les STC (Schémas de Construction Standard), de préserver les reliques et d'incarner le pont entre le Chapitre Space Marine et les prêtres de Mars.</p>
                    <br>
                    <div>
                        <strong>Le Serment de la Forge</strong>
                        <p>« Sur l'enclume écarlate de Mars et par le sang sacré de mon Primarque, je me tiens comme l'ultime rempart du savoir. Je jure de ne jamais laisser l'ignorance ternir nos reliques. Ce qui a été forgé sera préservé. Le feu de ma forge ne s'éteindra que lorsque les étoiles elles-mêmes seront réduites en cendres. »</p>
                    </div>


                `;
                break;

            case 'protocols':
                this.appRoot.innerHTML = `
                    <h2>> PROTOCOLES DE MAINTENANCE ET D'OPÉRATION</h2>
                    <p>Les Techmarines suivent des protocoles stricts pour garantir la sécurité et l'efficacité de leurs interventions. Les procédures principales sont renseignée ici.</p>
                    <br>

                    <h2>> PROTOCOLES DE PRIORETISATION</h2>
                    <p>En cas d'incidents, les protocoles de priorisation dictent l'ordre dans lequel les réparations et les maintenances doivent être effectuées.<br>
                    En ce qui concernerne les pénuries de stocks, le Maître des Forges viendra définir lui-même la priorité de chaque matériel nécessaire au bon fonctionnement du Chapitre.</p>
                    <ul>
                        <li><strong>Code Rouge</strong> : Priorité absolue, nécessite une intervention immédiate.</li>
                        <li><strong>Code Orange</strong> : Priorité élevée, intervention requise dans les 24 heures.</li>
                        <li><strong>Code Jaune</strong> : Priorité modérée, intervention requise dans les 72 heures.</li>
                        <li><strong>Code Vert</strong> : Priorité basse, intervention requise dans la semaine standard.</li>
                    </ul>
                
                    <br>
                    <h2>> PROTOCOLES DE SÉCURITÉ - HAUTEUR PERSONNELLE</h2>
                    <p>Les Techmarines doivent suivre des protocoles de sécurité rigoureux pour éviter les accidents et les contaminations. Voici les principaux protocoles à respecter :</p>
                    <ul>
                        <li><strong>Protocole de Contamination</strong> : En cas de contact avec des substances xenos ou dangereuses, le Techmarine doit immédiatement se désinfecter et signaler l'incident au Maître des Forges.</li>
                        <li><strong>Protocole de Surchauffe</strong> : Si une arme ou un véhicule montre des signes de surchauffe, le Techmarine doit cesser toute utilisation et procéder à une inspection complète avant toute nouvelle activation.</li>
                        <li><strong>Protocole de Sécurité Électrique</strong> : Lors de l'entretien de systèmes électriques, le Techmarine doit s'assurer que le système est hors tension et utiliser des équipements de protection appropriés pour éviter les chocs électriques.</li>
                        <li><strong>Protocole de Manipulation des Reliques</strong> : Les reliques doivent être manipulées avec une extrême précaution, en suivant les rituels d'Onction et de Réparation pour éviter toute malédiction ou dysfonctionnement.</li>
                    </ul>                
                    <br>

                    <h2>> PROTOCOLES DE SÉCURITÉ - HAUTEUR OPÉRATIONNELLE</h2>
                    <p>Lors des opérations sur le champ de bataille, les Techmarines doivent suivre des protocoles spécifiques pour assurer la sécurité de leurs frères d'armes et l'efficacité de leurs interventions :</p>
                    <ul>
                        <li><strong>Protocole de Priorisation en Combat</strong> : En cas de défaillance d'un véhicule ou d'une arme, le Techmarine doit évaluer rapidement la situation et prioriser les réparations en fonction de l'impact sur la mission et la sécurité des troupes.</li>
                        <li><strong>Protocole de Communication</strong> : Le Techmarine doit maintenir une communication constante avec les commandants pour coordonner les réparations et les soutiens logistiques, en utilisant des codes spécifiques pour signaler les urgences.</li>
                        <li><strong>Protocole de Retrait en Cas de Danger</strong> : Si la situation devient trop dangereuse pour le Techmarine, il doit se retirer immédiatement et signaler sa position pour une extraction sécurisée, en utilisant des signaux de détresse spécifiques.</li>
                    </ul>
                    <p>Il est primordial pour tout Techmarine de rapeller que, notamment lors des opérations, le Techmarine engagé dans une escouade se doit d'obéir à la hiérarchie de cette dite escouade. Son devoir de Techmarine est cependant prioritaire, notamment sur base, aux ordres de la hierarchie du Chapitre.</p>
                    <br>

                    <h2>> PROTOCOLES DE SÉCURITÉ - HAUTEUR LOGISTIQUE</h2>
                    <p>Dans les opérations logistiques, les Techmarines doivent suivre des protocoles pour assurer la sécurité des ressources et la continuité des approvisionnements :</p>
                    <ul>
                        <li><strong>Protocole de Sécurité des Stocks</strong> : Les Techmarines doivent surveiller les niveaux de stock et signaler toute pénurie imminente au Maître des Forges pour éviter les ruptures critiques.</li>
                        <li><strong>Protocole de Transport</strong> : Lors du transport de matériel sensible ou de reliques, les Techmarines doivent s'assurer que les cargaisons sont sécurisées et protégées contre les attaques ennemies ou les sabotages.</li>
                        <li><strong>Protocole de Maintenance Préventive</strong> : Les Techmarines doivent effectuer des inspections régulières et des maintenances préventives sur les équipements logistiques pour garantir leur fiabilité lors des opérations.</li
                        <li><strong>Protocole de Coordination avec les Commandants</strong> : Les Techmarines doivent coordonner étroitement avec les commandants pour planifier les approvisionnements et les déploiements logistiques, en utilisant des canaux de communication sécurisés. Tout commande aux Forges doit obligatoirement être soumise par des canneaux écris (<i>Radio D</i>) par les Officiers du Chapitre avec une validation du Capitaine (Lieutenant en cas exeptionnel) de la Compagnie effectuant la commande.</li>
                        <li><strong>Protocole de Traitement des Commandes</strong> : Toute commande de matériel ou de réparation doit être traitée avec la plus grande rigueur. Les Techmarines doivent vérifier l'authenticité de la commande, s'assurer que les ressources nécessaires sont disponibles, et suivre les procédures de validation avant d'exécuter la commande. Cela passe également par la tenue correcte du registre des ressources du Chapitre (Voir \'Accès Logistiques\').</li>
                        <li><strong>Protocole de Sécurité des Forges et du Coffre-Fort</strong> : Les Techmarines doivent assurer la sécurité des Forges et du Coffre-Fort, pour cela, chaque Techmarine présent dans l'enceinte des Forges doit présenter de façon visibile une arme chargée, en ayant la sécurité d'activée. Aucun Frère n'est autorisé a pénétré l'enceinte des Forges, et encore moins rejoindre le Coffre-Fort sans une accréditation spécifique, de la part d'au moins le Capitaine de ça Compagnie (Capitaine ou État-Major).</li>
                    </ul>
                    <br>

                    <h2>> PROTOCOLES ORGANISATIONNELS</h2>
                    <p>En plus des protocoles de sécurité, les Techmarines doivent suivre des protocoles organisationnels pour assurer la coordination et l'efficacité au sein du Chapitre :</p>
                    <ul>
                        <li><strong>Protocole de Hiérarchie</strong> : Les Techmarines doivent respecter la hiérarchie du Chapitre, en suivant les ordres des supérieurs et en coordonnant leurs actions avec les autres membres de l'escouade et du Chapitre.</li>
                        <li><strong>Protocole de Formation Continue</strong> : Les Techmarines doivent participer régulièrement à des formations et des exercices pour maintenir leurs compétences techniques et tactiques à jour.</li>
                        <li><strong>Protocole de Documentation</strong> : Les Techmarines doivent documenter toutes les interventions, réparations et maintenances dans les registres officiels du Chapitre pour assurer la traçabilité et le partage des connaissances. Toute nouvelle technique ou découverte doit être consignée dans les archives du Chapitre pour être partagée avec les générations futures.</li>
                    </ul>
                    <br>
                    <p>
                        En plus des différents Protocoles d'Organisations présent ci-dessus, le Maître des Forges viendra organiser une fois toutes les deux semaines standarts une réunion de tous les Techmarines du Chapitre afin de faire le point sur les différentes opérations en cours, les différentes découvertes et les différents problèmes rencontrés. C'est également lors de ces réunions que le Maître des Forges viendra définir les priorités de chaque Techmarine pour les deux semaines à venir.
                        C'est lors de cette réunion bihebdomaire que les Techmarines pourront également faire part de leurs découvertes, de leurs problèmes et de leurs idées pour améliorer le fonctionnement du Chapitre.<br><br>
                        Après les différents rapports de chaque Techmarine, qui auront tous une occasion de s'exprimer, le Maître des Forges viendra désigner personnellement les deux prochains Techmarines qui auront l'honneur de recevoir les rôles d'Opérateur Logistique et d'Opérateur de Production pour la prochaine période. Voici un détail de leurs rôles respectifs : <br>
                        <ul>
                            <li><strong>Opérateur Logistique</strong> : Responsable de la gestion des ressources, de la coordination des approvisionnements et de la supervision des opérations logistiques. Il doit assurer la disponibilité des matériaux nécessaires pour les réparations et les maintenances, il doit également s'assurer que les différents inventaires dans les Compagnies soient effectués. Il est le principal garrant du Registre Logistique du Chapitre (Voir \'Accès Logistiques\').</li>
                            <li><strong>Opérateur de Production</strong> : Responsable de la supervision de la production et de l'entretien des équipements. Il doit s'assurer que les réparations sont effectuées selon les standards du Chapitre, que les nouvelles constructions respectent les spécifications techniques, et que les reliques sont préservées avec le plus grand soin. Il viens de ça responsabilité que chaque commande effectué aux Forges soit honorée dans les temps.</li>
                        </ul>
                        <br>
                        Ces deux rôles sont des acteurs clés dans le fonctionnement du Chapitre, ils sont les principaux relais entre le Maître des Forges et les autres Techmarines, ils sont chargés de répartir leurs confrères dans les tâches qu'ils ont a effectué (gestion logistique ou gestion de la production) et de faire remonter les informations au Maître des Forges. <br><br>                        
                        Il est également important de rapeller que les Techmarines sont des membres à part entière de leur Compagnie, et que, même si leur rôle est avant tout technique, ils doivent également être capable de se battre aux côtés de leurs Frères d'Armes. C'est pourquoi, lors de ces réunions, le Maître des Forges viendra également organiser des exercices de combat pour permettre aux Techmarines de maintenir leurs compétences martiales à jour.
                                            
                    </p>
                    `;
                break;

            case 'vehicles': 
                this.renderCarousel(model, 'vehicles'); 
                break;
                
            case 'weapons': 
                this.renderCarousel(model, 'weapons'); 
                break;

            case 'gear': 
                this.renderCarousel(model, 'gear'); 
                break;

            case 'logi':
                if (!model.isLogiAuthenticated) {
                    this.renderLogin();
                } else {
                    this.renderLogisticsLinks(model);
                }
                break;
        }
    }

    renderLogin(error = false) {
        this.appRoot.innerHTML = `
            <h2>> ACCÈS RESTREINT</h2>
            <div class="login-container">
                <div class="login-form">
                    <label>IDENTIFIANT UNITÉ :</label>
                    <input type="text" id="login-user" autocomplete="off">
                    <label>PHRASE DE PASSE SACRÉE :</label>
                    <input type="password" id="login-pass">
                    <button id="btn-login-submit">TENTER L'AUTHENTIFICATION</button>
                    ${error ? `<p class="error-msg">! ERREUR : ESPRIT DE LA MACHINE HOSTILE !</p>` : ''}
                </div>
            </div>
        `;
    }

    renderLogisticsLinks(model) {
        this.appRoot.innerHTML = `
            <h2>> ARCHIVES SÉCURISÉES : UNITÉ DE GESTION LOGISTIQUE</h2>
            <p>Accès autorisé. Synchronisation avec la Noosphère en cours...</p>
            <br>
            <p><a href="https://docs.google.com/spreadsheets/d/13MvK0uYztIRx2zcp7WtICPwF0XFAAco7By6yWzaIIKU/edit?usp=sharing" target="_blank">ACCÉDER AUX ARCHIVES LOGISTIQUES</a></p>
            <br>
            <button onclick="location.reload()" style="background: transparent; color: red; border: 1px solid red; cursor: pointer; padding: 5px;">VERROUILLER LA SESSION</button>
        `;
    }

    renderCarousel(model, type) {
        let item, title;
        if (type === 'vehicles') {
            item = model.vehicles[model.currentVehicleIndex];
            title = "DÉPÔT MOTORISÉ : INSPECTION DES ESPRITS DE LA MACHINE";
        } else if (type === 'weapons') {
            item = model.weapons[model.currentWeaponIndex];
            title = "ARMURERIE : ARSENAL ET MATERIEL DU CHAPITRE";
        } else if (type === 'gear') {
            item = model.gear[model.currentWeaponIndex];
            title = "FORGE : ÉQUIPEMENTS ET MATERIEL DU CHAPITRE";
        }
        
        let specsHTML = item.specs.map(spec => `<li>${spec}</li>`).join('');

        this.appRoot.innerHTML = `
            <h2>> ${title}</h2>
            <div class="carousel-container">
                <div class="carousel-left">
                    <img src="${item.image}" alt="Pict-capture de ${item.name}">
                </div>
                <div class="carousel-right">
                    <div class="vehicle-header">
                        <h3>> ${item.name}</h3>
                        <span>ID: 40K-M41-${Math.floor(Math.random() * 9999)}</span>
                    </div>
                    <div class="vehicle-specs">
                        <p>> _SPÉCIFICATIONS TECHNIQUES_</p><br>
                        <ul>${specsHTML}</ul>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button id="btn-prev"><< RÉTROGRADER</button>
                <button id="btn-next">PROGRESSER >></button>
            </div>
        `;
    }
}

// ==========================================
// CONTRÔLEUR
// ==========================================
class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.updateView('home');

        document.querySelectorAll('nav button').forEach(button => {
            button.addEventListener('click', (e) => {
                const targetView = e.target.getAttribute('data-target');
                this.updateView(targetView);
                document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    updateView(viewName) {
        this.model.currentView = viewName;
        this.view.render(viewName, this.model);
        this.attachEvents();
    }

    attachEvents() {
        if (this.model.currentView === 'vehicles' || this.model.currentView === 'weapons' || this.model.currentView === 'gear') {
            const type = this.model.currentView;
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            
            if (btnPrev) btnPrev.onclick = () => { 
                this.model.prev(type); 
                this.view.renderCarousel(this.model, type); 
                this.attachEvents(); 
            };
            if (btnNext) btnNext.onclick = () => { 
                this.model.next(type); 
                this.view.renderCarousel(this.model, type); 
                this.attachEvents(); 
            };
        }

        if (this.model.currentView === 'logi' && !this.model.isLogiAuthenticated) {
            const btnLogin = document.getElementById('btn-login-submit');
            if (btnLogin) btnLogin.onclick = () => {
                const u = document.getElementById('login-user').value;
                const p = document.getElementById('login-pass').value;
                if (this.model.checkCredentials(u, p)) {
                    this.updateView('logi');
                } else {
                    this.view.renderLogin(true);
                    this.attachEvents();
                }
            };
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const model = new DataModel();
    const view = new AppView();
    new AppController(model, view);
    const homeBtn = document.querySelector('nav button[data-target="home"]');
    if(homeBtn) homeBtn.classList.add('active');
});