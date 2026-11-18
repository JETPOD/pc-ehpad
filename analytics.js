/* Schéma fermé : aucun texte libre, score, réponse ou identifiant d'apprenant.
   Ce fichier doit précéder l'initialisation de Plausible. */
(() => {
  const allowed = /^(pageview|engagement|PC EHPAD · (Jeu démarré|Parcours terminé|Module [1-5] (démarré|terminé)))$/;
  const sent = new Set();
  window.pcAnalytics = {
    transformRequest(payload) {
      if (!allowed.test(payload.n)) return null;
      payload.u = location.origin + location.pathname;
      payload.r = null;
      delete payload.p;
      delete payload.$;
      return payload;
    },
    track(name) {
      const full = `PC EHPAD · ${name}`;
      if (!allowed.test(full) || sent.has(full)) return;
      sent.add(full);
      try { if (typeof window.plausible === "function") window.plausible(full); } catch { /* Ne jamais bloquer le jeu. */ }
    }
  };
})();
