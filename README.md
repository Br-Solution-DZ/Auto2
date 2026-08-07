# Auto Prestige — Showroom Automobile

Site web statique premium pour un showroom automobile (Alger). HTML5 / CSS3 / JavaScript vanilla, prêt pour **GitHub Pages**.

## Structure

```
.
├── index.html        # Page unique
├── styles.css        # Design, animations, RTL
├── script.js         # i18n FR/AR, panier, filtres, WhatsApp, lightbox
├── hero-video.mp4    # ⚠️ À AJOUTER — vidéo de fond du hero
└── README.md
```

## Installation locale

1. Téléchargez les 3 fichiers (`index.html`, `styles.css`, `script.js`) dans un même dossier.
2. Placez votre vidéo de hero sous le nom **`hero-video.mp4`** dans ce même dossier.
3. Ouvrez `index.html` dans un navigateur. Aucun build, aucun serveur requis.

> 💡 Pour tester en local avec une URL propre (et éviter les restrictions `<video>` sur `file://`), utilisez :
> `python3 -m http.server 8000` puis ouvrez http://localhost:8000

## Déploiement sur GitHub Pages

1. Créez un nouveau repo GitHub (ex: `autoprestige`).
2. Ajoutez les 4 fichiers à la racine (commit + push).
3. **Settings → Pages → Source : `main` / `(root)` → Save**.
4. Votre site sera disponible sur `https://<user>.github.io/autoprestige/`.

## Configuration rapide

Tous les éléments à personnaliser sont dans `index.html` et `script.js` :

| Quoi | Où | Comment |
|------|-----|---------|
| Téléphone WhatsApp | `script.js` → `const WA_PHONE = '213555123456';` | Remplacer par le vrai numéro (format international, sans `+`) |
| Téléphone | `index.html` → `tel:+213555123456` | 3 occurrences |
| Adresse | `index.html` → section `#contact` |  |
| Logo / nom | `index.html` → `.logo` |  |
| Couleurs | `styles.css` → `:root` | `--gold`, `--whatsapp`, etc. |
| Produits (prix, images) | `script.js` → `const PRODUCTS = [...]` | Tableau JS |
| Horaires d'ouverture | `script.js` → fonction `updateOpenBadge()` |  |
| Vidéo hero | `index.html` → `<video>` source | Chemin `hero-video.mp4` à la racine |
| Google Maps | `index.html` → iframe `#contact` |  |
| Mentions légales (RC, NIF, NIS) | `index.html` → `.legal-list` |  |
| Réseaux sociaux | `index.html` → `.socials` | Remplacer les `#` |

## Fonctionnalités

- ✅ Hero plein écran avec vidéo en arrière-plan (`hero-video.mp4`)
- ✅ Bouton **FR / ع** avec bascule automatique **RTL** pour l'arabe
- ✅ Mémorisation de la langue dans `localStorage`
- ✅ Parallax sur les sections services et galerie
- ✅ Animations reveal au scroll (IntersectionObserver)
- ✅ Compteurs animés (stats hero)
- ✅ 6 cartes services avec icônes animées
- ✅ Catalogue e-commerce avec 6 catégories (SUV / Berline / Sport / Électrique / Accessoire / Tous)
- ✅ Filtres produits dynamiques
- ✅ Panier latéral (drawer) avec `localStorage`
- ✅ Génération automatique du message WhatsApp de commande
- ✅ Bouton WhatsApp flottant + bouton CTA contact
- ✅ Galerie mosaïque avec **lightbox** (clavier + tactile)
- ✅ Témoignages clients
- ✅ Badge dynamique **Ouvert / Fermé** calculé en temps réel
- ✅ Horaires d'ouverture affichés
- ✅ Google Maps intégré
- ✅ Footer avec RC / NIF / NIS / AI + réseaux sociaux
- ✅ 100% responsive (mobile, tablette, desktop)
- ✅ Preloader élégant
- ✅ Bouton "retour en haut"
- ✅ Notifications toast
- ✅ Zéro dépendance (sauf Font Awesome + Google Fonts via CDN)

## Compatibilité

- Tous les navigateurs modernes (Chrome, Firefox, Safari, Edge).
- Mobile iOS / Android.
- Aucune installation npm / build / framework.

## Crédits

- Icônes : [Font Awesome 6](https://fontawesome.com)
- Typo : [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Poppins](https://fonts.google.com/specimen/Poppins)
- Photos démo : [Unsplash](https://unsplash.com) — à remplacer par vos propres photos.

---

**Bon déploiement !** 🚗💨
