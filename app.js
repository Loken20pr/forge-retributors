// ==========================================
// 1. MODÈLE (Données)
// ==========================================
class DataModel {
    constructor() {
        this.currentView = 'home';
        
        // --- 1. GESTION VÉHICULES (Ancienne BDD restaurée) ---
        this.currentVehicleIndex = 0;
        this.vehicles = [
            {
                name: "RHINO (Transport de Troupes)",
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
                name: "PREDATOR (Appui-Feu)",
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
                name: "LAND RAIDER (Assaut Lourd)",
                image: "img/land_raider.png",
                specs: [
                    "Classe: Char d'Assaut / Transport Lourd",
                    "Blindage: Adamantium épaisseur max (Blindage 14)",
                    "Armement: Canons lasers jumelés, Bolters lourds",
                    "Capacité: 12 Astartes (ou Terminators)",
                    "Point de Rép.: Élevé - Relique du chapitre",
                    "Rôle tactique: Percée de lignes, transport de vétérans."
                ]
            }
        ];

        // --- 2. GESTION RELIQUES ---
        this.currentRelicIndex = 0;
        this.isRelicsAuthenticated = false; 
        
        this.authorizedUsers = {
            "admin": "omnissie2024",
            "magos": "retributors7"
        };

        this.relics = [
            {
                name: "HACHE D'OMNISSIE 'BRÈCHE-CODE'",
                image: "https://www.warhammer-community.com/wp-content/uploads/2019/09/99120108044_TechmarineAxe.jpg", 
                specs: [
                    "Type: Arme de Force Energétique",
                    "Origine: Monde-Forge Mars",
                    "Propriétés: Perforation d'armure lourde, Interface neurale directe.",
                    "Statut: Bénie par l'Archimagos."
                ]
            },
            {
                name: "CRÂNE SERVO-MÉDICAL RELIQUE",
                image: "https://www.warhammer-community.com/wp-content/uploads/2022/10/ServoSkull.jpg", 
                specs: [
                    "Type: Assistant de terrain auto-propulsé",
                    "Fonction: Réanimation d'urgence, Analyse bio-chimique.",
                    "Note: Contient les restes du Frère-Sergent Vorus."
                ]
            }
        ];

        // --- 3. GESTION ARMES (Page 6) ---
        this.currentWeaponIndex = 0;
        this.weapons = [
            {
                name: "BOLTER LOURD (Motif Astartes)",
                image: "https://www.warhammer-community.com/wp-content/uploads/2020/05/6H2l8s9J3k1M4n5P.jpg", 
                specs: [
                    "Type: Arme Lourde d'Appui",
                    "Munition: Calibre .998 Explosif Rétro-propulsé",
                    "Cadence de tir: Élevée",
                    "Rôle: Suppression d'infanterie de masse."
                ]
            },
            {
                name: "FUSIL À PLASMA (Motif Ryza)",
                image: "https://www.warhammer-community.com/wp-content/uploads/2020/05/7H2l8s9J3k1M4n5Q.jpg", 
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
        if (type === 'relics') this.currentRelicIndex = (this.currentRelicIndex + 1) % this.relics.length;
        if (type === 'weapons') this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
    }

    prev(type) {
        if (type === 'vehicles') this.currentVehicleIndex = (this.currentVehicleIndex - 1 + this.vehicles.length) % this.vehicles.length;
        if (type === 'relics') this.currentRelicIndex = (this.currentRelicIndex - 1 + this.relics.length) % this.relics.length;
        if (type === 'weapons') this.currentWeaponIndex = (this.currentWeaponIndex - 1 + this.weapons.length) % this.weapons.length;
    }
}

// ==========================================
// 2. VUE (Affichage)
// ==========================================
class AppView {
    constructor() { this.appRoot = document.getElementById('app-root'); }

    render(viewName, model) {
        this.appRoot.innerHTML = ''; 

        switch (viewName) {
            // Anciens contenus restaurés EXACTEMENT
            case 'home':
                this.appRoot.innerHTML = `
                    <h2>> INITIALISATION...</h2>
                    <p>Authentification confirmée. Bienvenue, Techmarine.</p>
                    <br>
                    <p>Ce terminal vous donne accès aux systèmes de l'armurerie et du garage du Chapitre des <strong>RETRIBUTORS</strong>. N'oubliez jamais : la chair est faible, mais la machine est éternelle.</p>
                    <br>
                    <p>> [STATUT DU CHAPITRE] : DÉPLOIEMENT EN COURS.</p>
                    <p>> [RÉQUISITIONS] : EN LIGNE.</p>
                `;
                break;

            case 'forge':
                this.appRoot.innerHTML = `
                    <h2>> BASE DE DONNÉES : LES FORGES DES RETRIBUTORS</h2>
                    <p>Nos forges brûlent de la fureur de Dorn. En tant que Techmarines, notre devoir est double : honorer le Culte Mechanicus et maintenir l'arsenal des Retributors à son potentiel destructeur maximal.</p>
                    <br>
                    <p>Les rituels d'éveil de la machine doivent être respectés avant chaque déploiement. Veillez à ce que les encensoirs soient pleins et que les onguents bénis soient appliqués sur les culasses des bolters.</p>
                `;
                break;

            case 'roles':
                this.appRoot.innerHTML = `
                    <h2>> HIÉRARCHIE & RÔLES : SYSTÈME DE RÉQUISITION</h2>
                    <p>La survie de nos frères dépend de notre gestion des points de Réquisition (PR). Tout se craft, tout se mérite.</p>
                    <br>
                    <h3>> INITIÉ DE LA FORGE</h3>
                    <p>• <strong>Rôle :</strong> Gestion de base. Collecte de données et réparations mineures.</p>
                    <p>• <strong>Crafting :</strong> Munitions standard, chargeurs, grenades (Coût PR très faible).</p>
                    <br>
                    <h3>> TECHMARINE OPÉRATIONNEL</h3>
                    <p>• <strong>Rôle :</strong> Déployé sur le terrain. L'ange gardien de l'équipement.</p>
                    <p>• <strong>Objectifs de Mission :</strong> Réparation d'armures énergétiques sur le terrain, déploiement de tourelles Tarentula, appui-feu, extraction et maintenance de véhicules endommagés.</p>
                    <p>• <strong>Crafting :</strong> Armes spéciales (Plasmas, Fuseurs), modules tactiques, véhicules légers (Coût PR modéré).</p>
                    <br>
                    <h3>> MAÎTRE DE LA FORGE</h3>
                    <p>• <strong>Rôle :</strong> Gardien des Reliques et superviseur total de l'Armurerie.</p>
                    <p>• <strong>Gestion :</strong> Administration globale de la jauge de Réquisition du chapitre.</p>
                    <p>• <strong>Crafting :</strong> Accès aux schémas de construction complets. Armes lourdes, modules d'armure Terminator, Land Raiders et Dreadnoughts (Coût PR critique).</p>
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
                    this.renderCarousel(model, 'relics');
                }
                break;
        }
    }

    renderLogin(error = false) {
        this.appRoot.innerHTML = `
            <h2>> ACCÈS RESTREINT : NIVEAU DE SÉCURITÉ MAGOS</h2>
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

    renderCarousel(model, type) {
        let item, title;
        if (type === 'vehicles') {
            item = model.vehicles[model.currentVehicleIndex];
            title = "DÉPÔT MOTORISÉ : INSPECTION DES ESPRITS DE LA MACHINE";
        } else if (type === 'relics') {
            item = model.relics[model.currentRelicIndex];
            title = "ARCHIVES SÉCURISÉES : RELIQUES SACRÉES DU CHAPITRE";
        } else if (type === 'weapons') {
            item = model.weapons[model.currentWeaponIndex];
            title = "ARMURERIE : ARSENAL DE L'ASTARTES";
        }
        
        let specsHTML = item.specs.map(spec => `<li>${spec}</li>`).join('');

        // Ancien ID aléatoire restauré
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
                        <ul>
                            ${specsHTML}
                        </ul>
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
// 3. CONTRÔLEUR (Logique & Événements)
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
        if (this.model.currentView === 'vehicles' || 
            this.model.currentView === 'weapons' || 
           (this.model.currentView === 'relics' && this.model.isRelicsAuthenticated)) {
            
            const type = this.model.currentView;
            document.getElementById('btn-prev').addEventListener('click', () => { 
                this.model.prev(type); 
                this.view.renderCarousel(this.model, type); 
                this.attachEvents(); 
            });
            document.getElementById('btn-next').addEventListener('click', () => { 
                this.model.next(type); 
                this.view.renderCarousel(this.model, type); 
                this.attachEvents(); 
            });
        }

        if (this.model.currentView === 'relics' && !this.model.isRelicsAuthenticated) {
            document.getElementById('btn-login-submit').addEventListener('click', () => {
                const u = document.getElementById('login-user').value;
                const p = document.getElementById('login-pass').value;
                if (this.model.checkCredentials(u, p)) {
                    this.updateView('relics');
                } else {
                    this.view.renderLogin(true);
                    this.attachEvents();
                }
            });
        }
    }
}

// ==========================================
// DÉMARRAGE DE L'APPLICATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const model = new DataModel();
    const view = new AppView();
    const controller = new AppController(model, view);
    
    // Activer visuellement le bouton d'accueil au démarrage
    const homeBtn = document.querySelector('nav button[data-target="home"]');
    if(homeBtn) homeBtn.classList.add('active');
});
