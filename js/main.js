/* =========================================================
   Le Tequila — logique du site (menu façon application)
   ========================================================= */
(function () {
  "use strict";

  var STORE_KEY = "letequila-lang";
  var supported = LANGS.map(function (l) { return l.code; });
  var lang = localStorage.getItem(STORE_KEY);
  if (supported.indexOf(lang) === -1) {
    var nl = (navigator.language || "fr").slice(0, 2);
    lang = supported.indexOf(nl) !== -1 ? nl : "fr";
  }
  function t(key) { var e = I18N[key]; return e ? (e[lang] || e.fr) : key; }
  function dtext(d) { return typeof d === "string" ? d : (d && d[lang]) || ""; }
  function countItems(c) { var n = 0; c.groups.forEach(function (g) { n += g.items.length; }); return n; }

  var currentCat = null;   // id de la catégorie ouverte
  var view = "grid";       // grid | detail | search

  /* ---------- i18n ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    var s = document.getElementById("menuSearch");
    if (s) s.placeholder = t("menu.search");
    document.getElementById("langCurrent").textContent = lang.toUpperCase();
    updateStatus();
    renderGrid();
    if (view === "detail" && currentCat) renderDetail(currentCat);
    if (view === "search") filterMenu();
  }

  /* ---------- langue ---------- */
  function buildLangMenu() {
    document.getElementById("langMenu").innerHTML = LANGS.map(function (l) {
      return '<li class="lang__opt" role="option" data-lang="' + l.code + '" aria-selected="' + (l.code === lang) + '">' +
             '<span class="lang__code">' + l.code.toUpperCase() + "</span>" + l.label + "</li>";
    }).join("");
  }
  function toggleLang(open) {
    var box = document.getElementById("lang"), btn = document.getElementById("langBtn");
    var isOpen = open === undefined ? !box.classList.contains("is-open") : open;
    box.classList.toggle("is-open", isOpen);
    btn.setAttribute("aria-expanded", isOpen);
  }

  /* ---------- rendu ---------- */
  function itemHTML(it) {
    var star = it.star ? ' <span class="star" aria-label="disponible en été">✷</span>' : "";
    var d = dtext(it.d);
    var desc = d ? '<span class="item__desc">' + d + "</span>" : "";
    var price = it.p ? '<span class="item__price">' + it.p + "&nbsp;€</span>" : "";
    var key = (it.n + " " + d).toLowerCase().replace(/"/g, "");
    return '<li class="item" data-q="' + key + '">' +
             '<span class="item__head"><span class="item__name">' + it.n + star + "</span>" +
             '<span class="item__dots"></span>' + price + "</span>" + desc + "</li>";
  }
  function groupHTML(g) {
    var h = "";
    if (g.title) h += '<h4 class="group__title">' + g.title[lang] + "</h4>";
    if (g.note) h += '<p class="group__note">' + g.note[lang] + "</p>";
    h += '<ul class="items">' + g.items.map(itemHTML).join("") + "</ul>";
    return '<div class="group">' + h + "</div>";
  }

  function renderGrid() {
    var grid = document.getElementById("menuGrid");
    grid.innerHTML = MENU.map(function (c) {
      return '<button class="cat" type="button" data-cat="' + c.id + '">' +
               '<span class="cat__img"><img src="' + c.img + '" alt="' + c.label[lang] + ' — Le Tequila, restaurant à Fréjus" loading="lazy" width="380" height="280"></span>' +
               '<span class="cat__meta"><span class="cat__name">' + c.label[lang] + "</span>" +
               '<span class="cat__count">' + countItems(c) + "</span></span>" +
             "</button>";
    }).join("");
  }

  function renderDetail(id) {
    var c = MENU.filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    var titleEl = document.getElementById("detailTitle");
    if (titleEl) titleEl.textContent = c.label[lang];
    var body = document.getElementById("menuDetailBody");
    var inner = "";
    if (c.intro) inner += '<p class="mcat__intro">' + c.intro[lang] + "</p>";
    inner += c.groups.map(groupHTML).join("");
    if (c.endNote) inner += '<p class="group__note group__note--end">' + c.endNote[lang] + "</p>";
    body.innerHTML = inner;
  }

  function showGrid() {
    view = "grid"; currentCat = null;
    document.getElementById("menuGrid").hidden = false;
    document.getElementById("menuDetail").hidden = true;
    document.getElementById("menuResults").hidden = true;
    document.getElementById("menuEmpty").hidden = true;
  }
  function openCategory(id) {
    currentCat = id; view = "detail";
    renderDetail(id);
    document.getElementById("menuGrid").hidden = true;
    document.getElementById("menuResults").hidden = true;
    document.getElementById("menuEmpty").hidden = true;
    var d = document.getElementById("menuDetail");
    d.hidden = false;
    scrollMenuTop();
  }
  function scrollMenuTop() {
    var target = document.getElementById("carte");
    var y = target.getBoundingClientRect().top + window.scrollY - 54;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  /* recherche transversale */
  function filterMenu() {
    var q = (document.getElementById("menuSearch").value || "").trim().toLowerCase();
    var grid = document.getElementById("menuGrid");
    var detail = document.getElementById("menuDetail");
    var results = document.getElementById("menuResults");
    var empty = document.getElementById("menuEmpty");
    if (!q) { // retour à l'état précédent
      if (currentCat) { view = "detail"; grid.hidden = true; detail.hidden = false; }
      else showGrid();
      results.hidden = true; results.innerHTML = ""; empty.hidden = true;
      return;
    }
    view = "search";
    grid.hidden = true; detail.hidden = true;
    var matches = [];
    MENU.forEach(function (c) {
      c.groups.forEach(function (g) {
        g.items.forEach(function (it) {
          var hay = (it.n + " " + dtext(it.d)).toLowerCase();
          if (hay.indexOf(q) !== -1) matches.push({ it: it, cat: c.label[lang] });
        });
      });
    });
    if (matches.length) {
      results.innerHTML = '<ul class="items">' + matches.map(function (m) {
        return itemHTML(m.it).replace('<span class="item__name">', '<span class="item__cat">' + m.cat + '</span><span class="item__name">');
      }).join("") + "</ul>";
      results.hidden = false; empty.hidden = true;
    } else {
      results.hidden = true; results.innerHTML = ""; empty.hidden = false;
    }
  }

  /* ---------- statut ---------- */
  function updateStatus() {
    var b = document.getElementById("statusBadge");
    if (!b) return;
    var now = new Date(), m = now.getMonth() + 1, mins = now.getHours() * 60 + now.getMinutes();
    var open = m >= 5 && m <= 9 && mins >= 480 && mins <= 1380; // 8h00 – 23h00
    b.textContent = open ? t("status.open") : t("hero.badge");
    b.classList.toggle("is-open", open);
  }

  /* ---------- header ---------- */
  function initHeaderScroll() {
    var h = document.querySelector(".site-header");
    var on = function () { h.classList.toggle("is-scrolled", window.scrollY > 24); };
    on(); window.addEventListener("scroll", on, { passive: true });
  }

  /* ---------- events ---------- */
  function initEvents() {
    document.getElementById("langBtn").addEventListener("click", function (e) { e.stopPropagation(); toggleLang(); });
    document.getElementById("langMenu").addEventListener("click", function (e) {
      var li = e.target.closest(".lang__opt"); if (!li) return;
      lang = li.getAttribute("data-lang");
      localStorage.setItem(STORE_KEY, lang);
      buildLangMenu(); applyI18n(); toggleLang(false);
    });
    document.addEventListener("click", function () { toggleLang(false); });

    document.getElementById("menuGrid").addEventListener("click", function (e) {
      var b = e.target.closest(".cat"); if (b) openCategory(b.getAttribute("data-cat"));
    });
    document.getElementById("menuBack").addEventListener("click", function () { showGrid(); scrollMenuTop(); });
    document.getElementById("menuSearch").addEventListener("input", filterMenu);

    // boutons externes qui ouvrent une catégorie (ex. « Voir les pizzas »)
    document.querySelectorAll("[data-open-cat]").forEach(function (b) {
      b.addEventListener("click", function () {
        var s = document.getElementById("menuSearch"); if (s) s.value = "";
        openCategory(b.getAttribute("data-open-cat"));
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href"); if (id.length < 2) return;
        var target = document.querySelector(id); if (!target) return;
        e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---------- init ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  buildLangMenu();
  applyI18n();
  showGrid();
  initEvents();
  initHeaderScroll();
})();
