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
                    "Blindage: Céramite Standard (Blindage 11)",
                    "Armement: Bolter d'assaut sur pivot",
                    "Capacité: 10 Astartes",
                    "Point de Rép.: Faible - Maintenance requise: Huiles sacrées",
                    "Rôle tactique: Déploiement rapide sur le front."
                ]
            },
            {
                name: "PREDATOR",
                image: "img/predator.png",
                specs: [
                    "Classe: Char de Combat Principal",
                    "Blindage: Renforcé (Blindage 13)",
                    "Armement: Autocanon tourelle, Bolters lourds latéraux",
                    "Capacité: Équipage uniquement (2 Astartes)",
                    "Point de Rép.: Moyen - Rites d'allumage complexes",
                    "Rôle tactique: Soutien blindé, destruction d'infanterie lourde."
                ]
            },
            {
                name: "LAND RAIDER",
                image: "img/land_raider.png",
                specs: [
                    "Classe: Char d'Assaut / Transport Lourd",
                    "Blindage: Adamantium épaisseur max (Blindage 14)",
                    "Armement: Canons lasers jumelés, Bolters lourds",
                    "Capacité: 12 Astartes (ou Terminators)",
                    "Point de Rép.: Élevé - Relique du chapitre",
                    "Rôle tactique: Percée de lignes, transport de vétérans."
                ]
            },
            { 
                name: "LAND SPEEDER",
                image: "img/land_speeder.png",
                specs: [
                    "Classe: Véhicule Léger de Reconnaissance",
                    "Blindage: Léger (Blindage 9)",
                    "Armement: Bolter de reconnaissance, Missiles à fragmentation",
                    "Capacité: 2 Astartes",
                    "Point de Rép.: Faible - Maintenance rapide",
                    "Rôle tactique: Reconnaissance, harcèlement rapide."
                ]
            },
            {
                name: "MOTO DE COMBAT",
                image: "img/bike.png",
                specs: [
                    "Classe: Véhicule Léger de Combat",
                    "Blindage: Léger (Blindage 8)",
                    "Armement: Bolter d'assaut",
                    "Capacité: 1 Astartes",
                    "Point de Rép.: Faible - Maintenance requise: Huiles sacrées",
                    "Rôle tactique: Rapide, souplesse en combat."
                ]
            },
            {
                name: "THUNDERHAWK",
                image: "img/thunderhawk.png",
                specs: [
                    "Classe: Transport Aérien / Gunship",
                    "Blindage: Renforcé (Blindage 12)",
                    "Armement: Canons lasers, Missiles à fragmentation",
                    "Capacité: 30 Astartes",
                    "Point de Rép.: Moyen - Rites d'allumage complexes",
                    "Rôle tactique: Appui aérien, transport de troupes."
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
            {
                name: "BOLTER",
                image: "img/bolter.png", 
                specs: [
                    "Type: Arme Lourde d'Appui",
                    "Munition: Calibre .998 Explosif Rétro-propulsé",
                    "Cadence de tir: Élevée",
                    "Rôle: Suppression d'infanterie de masse."
                ]
            },
            {
                name: "FUSIL À PLASMA",
                image: "img/plasma.png", 
                specs: [
                    "Type: Arme Spéciale",
                    "Énergie: Hydrogène photoplasmique",
                    "Rôle: Perforation de blindage lourd, anti-élite.",
                    "!! ATTENTION !!: Risque de surchauffe létale pour le porteur sans refroidissement."
                ]
            }
        ];

        // --- GESTION DU MATERIEL ---
        this.currentGearIndex = 0;
        this.gear = [
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
                name: "TOURELLE DE DÉFENSE",
                image: "img/turret.png", 
                specs: [
                    "Type: Système de Défense Stationnaire",
                    "Armement: Fusils laser, Canons Plasma",
                    "Rôle: Défense de périmètre, suppression d'infanterie.",
                    "Modules : "
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

            case 'protocols':
                this.appRoot.innerHTML = `
                    <h2>> PROTOCOLES DE PRIORETISATION</h2>
                    <p>En cas d'incidents, les protocoles de priorisation dictent l'ordre dans lequel les réparations et les maintenances doivent être effectuées.<br>
                    En ce qui concernerne les pénuries de stocks, le Maître des Forges viendra définir lui-même la priorité de chaque matériel nécessaire au bon fonctionnement du Chapitre.</p>
                    <ul>
                        <li><strong>Code Rouge</strong> : Priorité absolue, nécessite une intervention immédiate.</li>
                        <li><strong>Code Orange</strong> : Priorité élevée, intervention requise dans les 24 heures.</li>
                        <li><strong>Code Jaune</strong> : Priorité modérée, intervention requise dans les 72 heures.</li>
                        <li><strong>Code Vert</strong> : Priorité basse, intervention requise dans la semaine standard.</li>
                    </ul>

                    <h2>> LE CULTE DE LA MACHINE</h2>
                    <p>Le Culte Mechanicus repose sur une théologie stricte, indispensable à la compréhension de la Quête du Savoir. Cette foi vénère une Trinité divine, fusionnant l'organique et le mécanique sous l'égide du fer :</p>

                    <ul>
                        <li><strong>Le Dieu-Machine (Le Créateur originel) :</strong> L'entité suprême, froide et omnisciente. Il est l'architecte de toute technologie et le détenteur du savoir absolu dans l'univers. Pour le Mechanicus, la chair est faible et éphémère, mais la perfection de la machine est l'expression directe de la volonté du Dieu-Machine.</li>
                        <li><strong>L'Omnimessie (L'Incarnation, le Prophète) :</strong> L'avatar physique du Dieu-Machine parmi les mortels (le Messie). Pour la majorité de l'Imperium et des Techmarines, l'Empereur de l'Humanité est reconnu comme cette incarnation. Il est celui qui a apporté l'illumination technologique et unifié les mondes-forges.</li>
                        <li><strong>La Force Motrice (L'Esprit Saint, le Souffle de Vie) :</strong> C'est l'énergie mystique et électrique qui donne vie à toute chose. C'est l'étincelle divine qui parcourt les circuits d'un Auspex, rugit dans le moteur d'un Rhino, et anime le cœur même des êtres vivants. C'est elle qui confère aux machines leur "Esprit-Machine".</li>
                    </ul>

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

                    <h2>> LA QUÊTE DU SAVOIR &amp; L'ÉDIT D'INITIATION</h2>

                    <p>Le but ultime du Culte Mechanicus est de rassembler et de comprendre tout le savoir de la galaxie pour honorer le Dieu-Machine. Les fidèles croient fermement que tout le savoir existe déjà dans l'univers ; il a simplement été perdu et n'attend que d'être redécouvert. Cette entreprise est sacrée et prévaut sur toute autre considération mortelle.</p>
                    <br>
                    
                    <p>L'intégration d'un nouvel adepte n'est jamais acquise. Lors de l'arrivée d'un Apprenti Techmarine au sein des Forges, ce dernier se voit accorder un délai strict d'une semaine standard. Durant ce cycle, il doit élaborer et présenter son projet personnel afin de prouver sa valeur intellectuelle et amorcer officiellement sa propre Quête du Savoir devant ses pairs.</p>

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