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

        // --- GESTION RELIQUES / LOGISTIQUE ---
        this.isRelicsAuthenticated = false; 
        this.authorizedUsers = {
            "admin": "omnissie2024",
            "magos": "retributors7"
        };

        // Tes liens vers les Excel de la logistique
        this.logisticsLinks = [
            { name: "TABLEAU DE BORD LOGISTIQUE", url: "LIEN_VERS_EXCEL_1", desc: "Gestion globale des ressources et stocks." },
            { name: "REGISTRE DES EFFECTIFS", url: "LIEN_VERS_EXCEL_2", desc: "Assignations et suivi des frères de bataille." },
            { name: "PLANIFICATION DE LA FORGE", url: "LIEN_VERS_EXCEL_3", desc: "Projets de construction et réparations prioritaires." }
        ];

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
    }

    checkCredentials(user, pass) {
        if (this.authorizedUsers[user] && this.authorizedUsers[user] === pass) {
            this.isRelicsAuthenticated = true;
            return true;
        }
        return false;
    }

    next(type) {
        if (type === 'vehicles') this.currentVehicleIndex = (this.currentVehicleIndex + 1) % this.vehicles.length;
        if (type === 'weapons') this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
    }

    prev(type) {
        if (type === 'vehicles') this.currentVehicleIndex = (this.currentVehicleIndex - 1 + this.vehicles.length) % this.vehicles.length;
        if (type === 'weapons') this.currentWeaponIndex = (this.currentWeaponIndex - 1 + this.weapons.length) % this.weapons.length;
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
                    
                    <br>
                    <p>> [STATUT DU CHAPITRE] : DÉPLOIEMENT EN COURS.</p>
                    <p>> [RÉQUISITIONS] : EN LIGNE.</p>
                `;
                break;

            case 'equipments':
                this.appRoot.innerHTML = `
                    <h2>> BASE DE DONNÉES : LES FORGES DES RETRIBUTORS</h2>
                    <p>Nos forges brûlent de la fureur de Dorn. En tant que Techmarines, notre devoir est double : honorer le Culte Mechanicus et maintenir l'arsenal des Retributors à son potentiel destructeur maximal.</p>
                    <br>
                    <p>Les rituels d'éveil de la machine doivent être respectés avant chaque déploiement. Veillez à ce que les encensoirs soient pleins et que les onguents bénis soient appliqués sur les culasses des bolters.</p>
                `;
                break;

            case 'protocols':
                this.appRoot.innerHTML = `
                    <h2>> PROTOCOLES DE LA FORGE</h2>
                    <p>Les protocoles de la forge sont les règles sacrées qui régissent l'entretien et la réparation de nos machines. Chaque Techmarine doit les connaître par cœur, car une erreur peut coûter la vie à un Frère de Bataille.</p>
                    <strong>A CONTINUER</strong>
                    <br>

                    <h2>> PROTOCOLES DE PRIORETISATION</h2>
                    <p>En cas d'incidents, les protocoles de priorisation dictent l'ordre dans lequel les réparations et les maintenances doivent être effectuées.<br>
                    En ce qui concernerne les pénuries de stocks, les véhicules de transport sont prioritaires pour assurer la mobilité du Chapitre, suivis des armes lourdes pour maintenir notre puissance de feu.</p>
                    <strong>A CONTINUER</strong>
                `;
                break;

            case 'vehicles': 
                this.renderCarousel(model, 'vehicles'); 
                break;
                
            case 'weapons': 
                this.renderCarousel(model, 'weapons'); 
                break;

            case 'relics':
                if (!model.isRelicsAuthenticated) {
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
            title = "ARMURERIE : ARSENAL DE L'ASTARTES";
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
        if (this.model.currentView === 'vehicles' || this.model.currentView === 'weapons') {
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

        if (this.model.currentView === 'relics' && !this.model.isRelicsAuthenticated) {
            const btnLogin = document.getElementById('btn-login-submit');
            if (btnLogin) btnLogin.onclick = () => {
                const u = document.getElementById('login-user').value;
                const p = document.getElementById('login-pass').value;
                if (this.model.checkCredentials(u, p)) {
                    this.updateView('relics');
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