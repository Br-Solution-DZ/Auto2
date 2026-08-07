/* =========================================================
   AUTO PRESTIGE — script.js
   - i18n FR/AR avec persistance
   - Panier local (localStorage)
   - Filtres produits
   - Galerie + lightbox
   - WhatsApp CTA (génération du message)
   - Badge horaires dynamiques
   - Parallax, reveal, count-up, menu mobile, preloader
   ========================================================= */

/* ---------- i18n dictionaries ---------- */
const I18N = {
    fr: {
        closed: 'Fermé',
        logoSub: 'Showroom Automobile',
        navHome: 'Accueil',
        navServices: 'Services',
        navShop: 'Véhicules',
        navGallery: 'Galerie',
        navTesti: 'Avis',
        navContact: 'Contact',
        heroEyebrow: '— Showroom Premium Alger —',
        heroTitle1: "L'excellence",
        heroTitle2: 'automobile',
        heroSub: 'Véhicules neufs et d\'occasion sélectionnés, financement sur mesure, service après-vente premium.',
        heroCta1: 'Découvrir nos véhicules',
        heroCta2: 'Nous contacter',
        stat1: 'Véhicules vendus',
        stat2: "Ans d'expérience",
        stat3: 'Clients satisfaits',
        servicesEyebrow: '— Nos services —',
        servicesTitle: 'Un accompagnement complet',
        servicesSub: "De l'achat à l'entretien, nous nous occupons de tout pour votre tranquillité.",
        svc1Title: 'Vente de véhicules',
        svc1Desc: 'Large choix de véhicules neufs et d\'occasion rigoureusement sélectionnés et contrôlés.',
        svc2Title: 'Financement sur mesure',
        svc2Desc: 'Solutions de crédit adaptées à votre budget, avec nos partenaires bancaires.',
        svc3Title: 'Garantie & assurance',
        svc3Desc: 'Tous nos véhicules sont garantis. Assurance tous risques négociée au meilleur prix.',
        svc4Title: 'Service après-vente',
        svc4Desc: 'Atelier agréé, pièces d\'origine, techniciens certifiés pour l\'entretien de votre véhicule.',
        svc5Title: 'Immatriculation',
        svc5Desc: 'Démarches administratives complètes : carte grise, plaque, assurance et livraison.',
        svc6Title: 'Reprise véhicule',
        svc6Desc: 'Reprise de votre ancien véhicule au meilleur prix du marché, estimation gratuite.',
        shopEyebrow: '— Notre catalogue —',
        shopTitle: 'Véhicules en vedette',
        shopSub: 'Découvrez notre sélection premium. Ajoutez vos favoris au panier pour demander un devis.',
        fAll: 'Tous', fSuv: 'SUV', fSedan: 'Berline', fSport: 'Sport', fElec: 'Électrique', fAcc: 'Accessoires',
        galleryEyebrow: '— Notre showroom —',
        galleryTitle: 'Galerie photos',
        gallerySub: "Plongez dans l'univers Auto Prestige.",
        testiEyebrow: '— Ils nous font confiance —',
        testiTitle: 'Avis de nos clients',
        t1Text: '"Service exceptionnel du début à la fin. J\'ai trouvé la voiture de mes rêves à un prix très correct. L\'équipe est professionnelle et à l\'écoute."',
        t2Text: '"Le financement a été rapide et le service après-vente est irréprochable. Je recommande Auto Prestige à toutes les personnes sérieuses."',
        t3Text: '"Achat d\'un SUV d\'occasion en parfait état. Aucune mauvaise surprise, tout transparent. Une vraie référence à Alger."',
        contactEyebrow: '— Venez nous rendre visite —',
        contactTitle: 'Notre showroom',
        contactText: 'Nous vous accueillons du samedi au jeudi dans notre showroom moderne à Hydra. Toute l\'équipe est à votre disposition.',
        addrLabel: 'Adresse', addr: 'Rue Didouche Mourad, Hydra, Alger, Algérie',
        phoneLabel: 'Téléphone',
        hoursLabel: 'Horaires', hours: 'Sam - Jeu : 09h00 - 18h00',
        ctaWhatsapp: 'Discuter sur WhatsApp',
        ctaCall: 'Appeler maintenant',
        bannerTitle: 'Prêt à trouver votre prochaine voiture ?',
        bannerSub: 'Contactez-nous sur WhatsApp pour un devis personnalisé en quelques minutes.',
        bannerBtn: 'WhatsApp',
        footerAbout: 'Showroom automobile premium à Alger. Vente, location, financement et service après-vente depuis 2009.',
        footerNav: 'Navigation',
        footerHours: 'Horaires',
        footerLegal: 'Informations légales',
        dSat: 'Samedi - Jeudi', dFri: 'Vendredi', dFriV: 'Fermé',
        rights: 'Tous droits réservés.',
        cartTitle: 'Mon panier',
        total: 'Total',
        checkout: 'Commander via WhatsApp',
        clear: 'Vider le panier',
        empty: 'Votre panier est vide',
        emptyHint: 'Ajoutez un véhicule ou un accessoire pour commencer',
        added: 'Ajouté au panier',
        removed: 'Article supprimé',
        cleared: 'Panier vidé',
        cta: 'Demander un devis',
        filterEmpty: 'Aucun article dans cette catégorie',
        buyNow: 'Réserver',
        // Specs
        specAuto: 'Automatique',
        specMan: 'Manuelle',
        specDiesel: 'Diesel',
        specEssence: 'Essence',
        specHybrid: 'Hybride',
        catSUV: 'SUV', catSedan: 'Berline', catSport: 'Sport', catElec: 'Électrique', catAcc: 'Accessoire',
        prod1Title: 'BMW X5 M Sport', prod1Specs: '2024 · 3.0L · 22 000 km',
        prod2Title: 'Mercedes Classe C', prod2Specs: '2023 · 2.0L · 18 500 km',
        prod3Title: 'Porsche 911 Carrera', prod3Specs: '2024 · 3.0L Twin-Turbo · 5 800 km',
        prod4Title: 'Tesla Model Y', prod4Specs: '2024 · Électrique · 12 000 km',
        prod5Title: 'Audi Q7 Premium', prod5Specs: '2023 · 3.0L TDI · 28 000 km',
        prod6Title: 'Range Rover Velar', prod6Specs: '2024 · 2.0L · 14 300 km',
        prod7Title: 'Sièges cuir premium', prod7Specs: 'Compatible tous modèles',
        prod8Title: 'Système GPS tactile', prod8Specs: '9 pouces · Android Auto',
        prod9Title: 'Jantes alliage 20"', prod9Specs: 'Sport · 5x114',
        catNew: 'Neuf', catHot: 'Top', catUsed: 'Occasion',
        openNow: 'Ouvert maintenant',
        openClosed: 'Fermé',
        openSoon: 'Ouvre bientôt',
        openLate: 'Ferme bientôt',
    },
    ar: {
        closed: 'مغلق',
        logoSub: 'صالة عرض السيارات',
        navHome: 'الرئيسية',
        navServices: 'الخدمات',
        navShop: 'السيارات',
        navGallery: 'المعرض',
        navTesti: 'الآراء',
        navContact: 'اتصل بنا',
        heroEyebrow: '— صالة عرض متميزة في الجزائر —',
        heroTitle1: 'التميز',
        heroTitle2: 'في عالم السيارات',
        heroSub: 'سيارات جديدة ومستعملة مختارة بعناية، تمويل مخصص، وخدمة ما بعد البيع المتميزة.',
        heroCta1: 'اكتشف سياراتنا',
        heroCta2: 'تواصل معنا',
        stat1: 'سيارة مباعة',
        stat2: 'سنة من الخبرة',
        stat3: 'عملاء راضون',
        servicesEyebrow: '— خدماتنا —',
        servicesTitle: 'مرافقة شاملة',
        servicesSub: 'من الشراء إلى الصيانة، نتكفل بكل شيء لراحتكم.',
        svc1Title: 'بيع السيارات',
        svc1Desc: 'تشكيلة واسعة من السيارات الجديدة والمستعملة المختارة والمفحوصة بدقة.',
        svc2Title: 'تمويل مخصص',
        svc2Desc: 'حلول ائتمان ملائمة لميزانيتكم، مع شركائنا البنكيين.',
        svc3Title: 'الضمان والتأمين',
        svc3Desc: 'جميع سياراتنا مضمونة. تأمين شامل بأفضل الأسعار.',
        svc4Title: 'خدمة ما بعد البيع',
        svc4Desc: 'ورشة معتمدة، قطع أصلية، تقنيون معتمدون لصيانة سيارتكم.',
        svc5Title: 'التسجيل',
        svc5Desc: 'إجراءات إدارية كاملة: البطاقة الرمادية، اللوحة، التأمين والتسليم.',
        svc6Title: 'استبدال السيارة',
        svc6Desc: 'نستبدل سيارتكم القديمة بأفضل سعر في السوق، تقدير مجاني.',
        shopEyebrow: '— كتالوجنا —',
        shopTitle: 'سيارات مميزة',
        shopSub: 'اكتشف تشكيلتنا المتميزة. أضف سياراتك المفضلة إلى السلة لطلب عرض سعر.',
        fAll: 'الكل', fSuv: 'سيارة دفع رباعي', fSedan: 'سيدان', fSport: 'رياضية', fElec: 'كهربائية', fAcc: 'إكسسوارات',
        galleryEyebrow: '— صالتنا —',
        galleryTitle: 'معرض الصور',
        gallerySub: 'اغمر نفسك في عالم Auto Prestige.',
        testiEyebrow: '— يثقون بنا —',
        testiTitle: 'آراء عملائنا',
        t1Text: '"خدمة استثنائية من البداية إلى النهاية. وجدت سيارة أحلامي بسعر مناسب جدًا. الفريق محترف ومستمع."',
        t2Text: '"التمويل كان سريعًا وخدمة ما بعد البيع لا تشوبها شائبة. أنصح بـ Auto Prestige لكل شخص جاد."',
        t3Text: '"اشتريت سيارة دفع رباعي مستعملة بحالة ممتازة. لا مفاجآت، كل شيء شفاف. مرجع حقيقي في الجزائر."',
        contactEyebrow: '— تفضل بزيارتنا —',
        contactTitle: 'صالة العرض',
        contactText: 'نرحب بكم من السبت إلى الخميس في صالتنا الحديثة بحيدرة. الفريق كله في خدمتكم.',
        addrLabel: 'العنوان', addr: 'شارع ديدوش مراد، حيدرة، الجزائر العاصمة، الجزائر',
        phoneLabel: 'الهاتف',
        hoursLabel: 'أوقات العمل', hours: 'السبت - الخميس : 09:00 - 18:00',
        ctaWhatsapp: 'محادثة على واتساب',
        ctaCall: 'اتصل الآن',
        bannerTitle: 'هل أنت مستعد للعثور على سيارتك القادمة؟',
        bannerSub: 'تواصل معنا على واتساب للحصول على عرض سعر مخصص في بضع دقائق.',
        bannerBtn: 'واتساب',
        footerAbout: 'صالة عرض سيارات متميزة في الجزائر. بيع، تأجير، تمويل وخدمة ما بعد البيع منذ 2009.',
        footerNav: 'التنقل',
        footerHours: 'أوقات العمل',
        footerLegal: 'معلومات قانونية',
        dSat: 'السبت - الخميس', dFri: 'الجمعة', dFriV: 'مغلق',
        rights: 'جميع الحقوق محفوظة.',
        cartTitle: 'سلتي',
        total: 'المجموع',
        checkout: 'اطلب عبر واتساب',
        clear: 'إفراغ السلة',
        empty: 'سلتك فارغة',
        emptyHint: 'أضف سيارة أو إكسسوارًا للبدء',
        added: 'أضيف إلى السلة',
        removed: 'تم حذف العنصر',
        cleared: 'تم إفراغ السلة',
        cta: 'طلب عرض سعر',
        filterEmpty: 'لا توجد عناصر في هذه الفئة',
        buyNow: 'احجز',
        specAuto: 'أوتوماتيكية',
        specMan: 'يدوية',
        specDiesel: 'ديزل',
        specEssence: 'بنزين',
        specHybrid: 'هجين',
        catSUV: 'دفع رباعي', catSedan: 'سيدان', catSport: 'رياضية', catElec: 'كهربائية', catAcc: 'إكسسوار',
        prod1Title: 'بي إم دبليو X5 M سبورت', prod1Specs: '2024 · 3.0 لتر · 22,000 كم',
        prod2Title: 'مرسيدس الفئة C', prod2Specs: '2023 · 2.0 لتر · 18,500 كم',
        prod3Title: 'بورش 911 كاريرا', prod3Specs: '2024 · 3.0 لتر توين تيربو · 5,800 كم',
        prod4Title: 'تسلا موديل Y', prod4Specs: '2024 · كهربائية · 12,000 كم',
        prod5Title: 'أودي Q7 بريميوم', prod5Specs: '2023 · 3.0 لتر TDI · 28,000 كم',
        prod6Title: 'رينج روفر فيلار', prod6Specs: '2024 · 2.0 لتر · 14,300 كم',
        prod7Title: 'مقاعد جلد فاخرة', prod7Specs: 'متوافق مع جميع الطرازات',
        prod8Title: 'نظام GPS لمسي', prod8Specs: '9 بوصات · أندرويد أوتو',
        prod9Title: 'جنوط ألمنيوم 20"', prod9Specs: 'رياضية · 5x114',
        catNew: 'جديدة', catHot: 'الأكثر طلبًا', catUsed: 'مستعملة',
        openNow: 'مفتوح الآن',
        openClosed: 'مغلق',
        openSoon: 'يفتح قريبًا',
        openLate: 'يغلق قريبًا',
    }
};

/* ---------- Products ---------- */
const PRODUCTS = [
    { id: 1, cat: 'suv',     titleKey: 'prod1Title', specsKey: 'prod1Specs', price: 18500000, badge: 'hot',   badgeKey: 'catHot',  img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80' },
    { id: 2, cat: 'sedan',   titleKey: 'prod2Title', specsKey: 'prod2Specs', price: 9800000,  badge: 'new',   badgeKey: 'catNew',  img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80' },
    { id: 3, cat: 'sport',   titleKey: 'prod3Title', specsKey: 'prod3Specs', price: 42000000, badge: 'hot',   badgeKey: 'catHot',  img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80' },
    { id: 4, cat: 'electric',titleKey: 'prod4Title', specsKey: 'prod4Specs', price: 15500000, badge: 'new',   badgeKey: 'catNew',  img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80' },
    { id: 5, cat: 'suv',     titleKey: 'prod5Title', specsKey: 'prod5Specs', price: 14200000, badge: '',      badgeKey: '',        img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80' },
    { id: 6, cat: 'suv',     titleKey: 'prod6Title', specsKey: 'prod6Specs', price: 17800000, badge: 'new',   badgeKey: 'catNew',  img: 'https://images.unsplash.com/photo-1519440432187-2bf83a1e0e85?w=900&q=80' },
    { id: 7, cat: 'accessory',titleKey:'prod7Title', specsKey: 'prod7Specs', price: 145000,   badge: '',      badgeKey: '',        img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&q=80' },
    { id: 8, cat: 'accessory',titleKey:'prod8Title', specsKey: 'prod8Specs', price: 85000,    badge: '',      badgeKey: '',        img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&q=80' },
    { id: 9, cat: 'accessory',titleKey:'prod9Title', specsKey: 'prod9Specs', price: 220000,   badge: 'hot',   badgeKey: 'catHot',  img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=900&q=80' },
];

/* ---------- State ---------- */
const STATE = {
    lang: localStorage.getItem('ap_lang') || 'fr',
    cart: JSON.parse(localStorage.getItem('ap_cart') || '[]'),
    filter: 'all',
};

/* ---------- Utils ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmtPrice = (n) => new Intl.NumberFormat('fr-FR').format(n) + ' DA';
const t = (key) => I18N[STATE.lang][key] || key;

const TOAST_ICON = { added: 'check', removed: 'trash', cleared: 'broom', error: 'exclamation' };

/* =========================================================
   PRELOADER
   ========================================================= */
window.addEventListener('load', () => {
    const pl = $('#preloader');
    setTimeout(() => pl.classList.add('hide'), 400);
});

/* =========================================================
   HEADER (sticky, scrolled, mobile)
   ========================================================= */
const header = $('#header');
const menuToggle = $('#menuToggle');
const nav = $('#nav');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    $('#backTop').classList.toggle('show', window.scrollY > 500);
});

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-open');
    nav.classList.toggle('open');
});

$$('.nav-list a').forEach(a => a.addEventListener('click', () => {
    menuToggle.classList.remove('is-open');
    nav.classList.remove('open');
}));

$('#backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* =========================================================
   i18n — apply translations
   ========================================================= */
function applyLang() {
    document.documentElement.lang = STATE.lang;
    document.documentElement.dir  = STATE.lang === 'ar' ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (I18N[STATE.lang][k] !== undefined) el.textContent = I18N[STATE.lang][k];
    });

    $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === STATE.lang));
    localStorage.setItem('ap_lang', STATE.lang);
    renderProducts();
    renderCart();
    updateOpenBadge();
}

$$('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    STATE.lang = btn.dataset.lang;
    applyLang();
}));

/* =========================================================
   PRODUCTS render + filters
   ========================================================= */
const productsGrid = $('#productsGrid');
const shopFilters = $('#shopFilters');

function renderProducts() {
    const list = STATE.filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === STATE.filter);
    if (!list.length) {
        productsGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:40px 0;">${t('filterEmpty')}</p>`;
        return;
    }
    productsGrid.innerHTML = list.map(p => `
        <article class="product-card" data-cat="${p.cat}">
            <div class="product-media">
                <img src="${p.img}" alt="${t(p.titleKey)}" loading="lazy">
                ${p.badge ? `<span class="product-badge ${p.badge}">${t(p.badgeKey)}</span>` : ''}
                <button class="product-fav" aria-label="favori"><i class="fa-regular fa-heart"></i></button>
            </div>
            <div class="product-body">
                <span class="product-cat">${t('cat' + p.cat.charAt(0).toUpperCase() + p.cat.slice(1))}</span>
                <h3 class="product-title">${t(p.titleKey)}</h3>
                <p class="product-specs">${t(p.specsKey)}</p>
                <div class="product-foot">
                    <div class="product-price">${fmtPrice(p.price)}<small>${t('buyNow')}</small></div>
                    <button class="btn-add" data-add="${p.id}" aria-label="${t('cta')}"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </article>
    `).join('');

    $$('[data-add]').forEach(btn => btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.add, 10))));
}

shopFilters.addEventListener('click', (e) => {
    const b = e.target.closest('.filter-btn');
    if (!b) return;
    $$('.filter-btn', shopFilters).forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    STATE.filter = b.dataset.filter;
    renderProducts();
});

/* =========================================================
   CART
   ========================================================= */
const cartBtn   = $('#cartBtn');
const cartClose = $('#cartClose');
const cartDrawer = $('#cartDrawer');
const cartOverlay= $('#cartOverlay');
const cartBody  = $('#cartBody');
const cartTotal = $('#cartTotal');
const cartCount = $('#cartCount');

function saveCart() { localStorage.setItem('ap_cart', JSON.stringify(STATE.cart)); }

function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = STATE.cart.find(c => c.id === id);
    if (existing) existing.qty++;
    else STATE.cart.push({ id, qty: 1 });
    saveCart(); renderCart(); openCart();
    toast(t('added'), 'check');
}

function removeFromCart(id) {
    STATE.cart = STATE.cart.filter(c => c.id !== id);
    saveCart(); renderCart();
    toast(t('removed'), 'trash');
}

function changeQty(id, delta) {
    const c = STATE.cart.find(x => x.id === id);
    if (!c) return;
    c.qty = Math.max(1, c.qty + delta);
    saveCart(); renderCart();
}

function clearCart() {
    if (!STATE.cart.length) return;
    STATE.cart = []; saveCart(); renderCart();
    toast(t('cleared'), 'broom');
}

function cartTotalAmount() {
    return STATE.cart.reduce((s, c) => {
        const p = PRODUCTS.find(x => x.id === c.id);
        return s + (p ? p.price * c.qty : 0);
    }, 0);
}

function renderCart() {
    cartCount.textContent = STATE.cart.reduce((s, c) => s + c.qty, 0);
    if (!STATE.cart.length) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-bag-shopping"></i>
                <p><strong>${t('empty')}</strong></p>
                <p style="font-size:13px;margin-top:6px;">${t('emptyHint')}</p>
            </div>`;
        cartTotal.textContent = fmtPrice(0);
        return;
    }
    cartBody.innerHTML = STATE.cart.map(c => {
        const p = PRODUCTS.find(x => x.id === c.id);
        if (!p) return '';
        const name = t(p.titleKey);
        return `
            <div class="cart-item">
                <img src="${p.img}" alt="${name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${name}</div>
                    <div class="cart-item-price">${fmtPrice(p.price * c.qty)}</div>
                    <div style="display:flex;gap:6px;margin-top:8px;align-items:center;">
                        <button class="icon-btn" style="width:30px;height:30px;font-size:12px;" data-dec="${c.id}">−</button>
                        <span style="min-width:24px;text-align:center;color:#fff;">${c.qty}</span>
                        <button class="icon-btn" style="width:30px;height:30px;font-size:12px;" data-inc="${c.id}">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-rem="${c.id}" aria-label="remove"><i class="fa-solid fa-xmark"></i></button>
            </div>`;
    }).join('');

    $$('[data-inc]').forEach(b => b.addEventListener('click', () => changeQty(parseInt(b.dataset.inc), +1)));
    $$('[data-dec]').forEach(b => b.addEventListener('click', () => changeQty(parseInt(b.dataset.dec), -1)));
    $$('[data-rem]').forEach(b => b.addEventListener('click', () => removeFromCart(parseInt(b.dataset.rem))));

    cartTotal.textContent = fmtPrice(cartTotalAmount());
}

function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
}
function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

$('#cartClear').addEventListener('click', clearCart);

/* =========================================================
   WHATSAPP CHECKOUT — build message & open wa.me
   ========================================================= */
const WA_PHONE = '213555123456';

function buildWhatsappMessage() {
    if (!STATE.cart.length) {
        return STATE.lang === 'fr'
            ? 'Bonjour Auto Prestige, je souhaite des informations sur vos véhicules.'
            : 'مرحبا Auto Prestige، أود الحصول على معلومات حول سياراتكم.';
    }
    const lines = STATE.cart.map(c => {
        const p = PRODUCTS.find(x => x.id === c.id);
        return `• ${t(p.titleKey)} (${t(p.specsKey)}) × ${c.qty} — ${fmtPrice(p.price * c.qty)}`;
    });
    const head = STATE.lang === 'fr'
        ? `Bonjour Auto Prestige,\nJe souhaite commander / obtenir un devis pour les articles suivants :\n`
        : `مرحبا Auto Prestige،\nأود طلب / الحصول على عرض سعر للعناصر التالية:\n`;
    const total = (STATE.lang === 'fr' ? 'Total : ' : 'المجموع : ') + fmtPrice(cartTotalAmount());
    const foot = STATE.lang === 'fr'
        ? '\nMerci de me recontacter avec les détails (disponibilité, livraison, financement).'
        : '\nيرجى إعادة الاتصال بي بالتفاصيل (التوفر، التسليم، التمويل).';
    return `${head}\n${lines.join('\n')}\n\n${total}${foot}`;
}

function openWhatsapp() {
    const msg = encodeURIComponent(buildWhatsappMessage());
    window.open(`https://wa.me/${WA_PHONE}?text=${msg}`, '_blank');
}

$('#cartCheckout').addEventListener('click', openWhatsapp);

/* Make every WhatsApp link use the same phone */
$$('a[href*="wa.me/"]').forEach(a => {
    if (!a.href.includes(WA_PHONE)) a.href = `https://wa.me/${WA_PHONE}`;
    if (a.id !== 'whatsappFloat' && !a.dataset.preserve) {
        a.addEventListener('click', (e) => {
            if (a.target && a.target.tagName === 'A' && a.getAttribute('href') === a.href) {
                // Allow direct WhatsApp contact (no message customization)
            }
        });
    }
});

/* =========================================================
   GALLERY + LIGHTBOX
   ========================================================= */
const lightbox = $('#lightbox');
const lightboxImg = $('#lightboxImg');
const lightboxCap = $('#lightboxCaption');
const lbPrev = $('#lightboxPrev');
const lbNext = $('#lightboxNext');
let lbIndex = 0, lbImages = [];

$$('.gallery-item').forEach((it, i) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        lbImages = $$('.gallery-item').map(g => ({ src: g.href, cap: g.dataset.caption || '' }));
        lbIndex = i;
        showLightbox();
    });
});

function showLightbox() {
    const cur = lbImages[lbIndex];
    lightboxImg.src = cur.src;
    lightboxCap.textContent = cur.cap;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function hideLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}
function navLightbox(dir) {
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    showLightbox();
}
$('#lightboxClose').addEventListener('click', hideLightbox);
lbPrev.addEventListener('click', () => navLightbox(-1));
lbNext.addEventListener('click', () => navLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) hideLightbox(); });
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowLeft')  navLightbox(STATE.lang === 'ar' ? 1 : -1);
    if (e.key === 'ArrowRight') navLightbox(STATE.lang === 'ar' ? -1 : 1);
});

/* =========================================================
   OPEN/CLOSED BADGE (dynamic from real time)
   Sam-Jeu 09:00-18:00 · Vendredi fermé
   ========================================================= */
function updateOpenBadge() {
    const badge = $('#openBadge');
    const textEl = badge.querySelector('[data-i18n]');
    if (!textEl) return;
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 5 = Fri
    const h = now.getHours();
    const m = now.getMinutes();
    const time = h * 60 + m;

    let status = 'closed';
    if (day !== 5) { // not Friday
        if (time >= 9*60 && time < 18*60) status = 'open';
        else if (time >= 8*60 && time < 9*60) status = 'soon';
        else if (time >= 17*60 && time < 19*60) status = 'late';
    }
    badge.classList.toggle('is-open', status === 'open' || status === 'late' || status === 'soon');
    const key = status === 'open' ? 'openNow' : status === 'soon' ? 'openSoon' : status === 'late' ? 'openLate' : 'openClosed';
    textEl.setAttribute('data-i18n', key);
    textEl.textContent = t(key);
}

/* =========================================================
   REVEAL on scroll + COUNT-UP + PARALLAX
   ========================================================= */
const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            en.target.classList.add('in-view');
            const nums = en.target.querySelectorAll('[data-count]');
            nums.forEach(n => animateCount(n));
        }
    });
}, { threshold: 0.15 });
$$('.reveal, .stat').forEach(el => io.observe(el));

function animateCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(p * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
    };
    requestAnimationFrame(step);
}

/* Parallax on .parallax-bg */
const parallaxEls = $$('[data-parallax]');
let scrollY = 0;
window.addEventListener('scroll', () => { scrollY = window.scrollY; requestAnimationFrame(updateParallax); }, { passive: true });
function updateParallax() {
    parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
            const y = (rect.top * speed) * -1;
            el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
    });
}

/* =========================================================
   TOAST
   ========================================================= */
const toastEl = $('#toast');
const TOAST_ICONS = { check: 'check-circle', trash: 'trash', broom: 'broom', error: 'exclamation-circle' };
let toastTimer;
function toast(msg, type = 'check') {
    toastEl.innerHTML = `<i class="fa-solid fa-${TOAST_ICONS[type] || 'check'}"></i><span>${msg}</span>`;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

/* =========================================================
   INIT
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
applyLang();
updateOpenBadge();
setInterval(updateOpenBadge, 60_000);

/* smooth scroll for anchor links */
$$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
            const target = $(id);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });
});

/* Active nav link on scroll */
const sections = $$('section[id]');
const navLinks = $$('.nav-list a');
const secObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            const id = en.target.id;
            navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
    });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => secObs.observe(s));
