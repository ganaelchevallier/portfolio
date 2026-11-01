/* ═══════════════════════════════════════════════════════════════
   videos.js · LA liste des vidéos du site, partagée par :
     · work.html        → la grille (vidéos avec work: true)
     · Experience.html  → les liens vidéo de chaque studio
   Corriger un lien ici le corrige sur les deux pages.
   Champs : id     identifiant YouTube (11 caractères)
            date   AAAA/MM
            title  titre (pour toi et pour l'éditeur)
            work   true = affichée sur la page Work
            hidden true = masquée partout (Work et XP)
            old    anciens identifiants remplacés : la page XP
                   les reconnaît et affiche la nouvelle vidéo
   Le plus simple : modifier ce fichier avec videos-editor.
   ═══════════════════════════════════════════════════════════════ */
window.VIDEOS = [
  // ── 2025 ────────────────────────────────────────────────────────
  { id: 'U8gAgfimpzE', date: '2025/11', title: 'Teamfight Tactics | Champion Highlight Trailer', work: true },
  { id: '0UUYO-kGprA', date: '2025/07', title: 'Peugeot E-208 | Le fun monte à bord', work: true },
  { id: 'sXJYNb4irSc', date: '2025/05', title: 'PARANORMAN | The Thrifting\' Official Trailer', work: true },
  { id: 'n6iY-0KgHnk', date: '2025/03', title: 'Valorant | Masters Toronto Cinematic', work: true },
  { id: 'YJ4_BKp_GBI', date: '2025/03', title: 'Paco Rabanne | Invictus Victory Absolu', work: true },
  // ── 2024 ────────────────────────────────────────────────────────
  { id: 'S0OO6ZAkE3c', date: '2024/09', title: 'Champions Tactics | Launch Trailer', work: true },
  { id: 'MTVcT53FWSQ', date: '2024/07', title: 'COLD STORAGE | Bande-annonce', work: true },
  { id: 'y64fItPkKVs', date: '2024/06', title: 'Michelin | sur la route et au-delà !', work: true },
  { id: 'ccqn7r9WUHI', date: '2024/05', title: 'Porsche | Dua Lipa for The all-electric Macan', work: true },
  { id: 'LDFkx2SxdOo', date: '2024/03', title: 'Côte d\'Or | Force de Caractère', work: true },
  { id: 'R59xb9vDDfE', date: '2024/02', title: 'Anthony Joshua vs Francis Ngannou', work: true },
  // ── 2023 ────────────────────────────────────────────────────────
  { id: 'maOO8oj3zsU', date: '2023/08', title: 'Free Fire | Rampage: Finale', work: true },
  { id: 'K9kT526MfxA', date: '2023/06', title: 'Renault | Rafale', work: true },
  { id: 'N7ey_DhYhZA', date: '2023/04', title: 'VOLEUSES | Bande-annonce', work: true },
  { id: 'xObjnjwvHMU', date: '2023/03', title: 'TOTO sport Kantine', work: true },
  { id: 'ZzIuV0d-cog', date: '2023/02', title: 'Futuroscope | Chasseurs de Tornades', work: true },
  { id: 'TEaUIOQKAZw', date: '2023/01', title: 'Phytovex', work: true },
  // ── 2022 ────────────────────────────────────────────────────────
  { id: 'Vh59SXy17Rw', date: '2022/05', title: 'Duracell Optimum | Power Bunny 2022', work: true },
  { id: '-aEYoGF9uOE', date: '2022/04', title: 'Castorama | Changer nous fait avancer', work: true },
  { id: 'eVDzNeL5ztM', date: '2022/03', title: 'Feu Vert | fête ses 50 ans', work: true },
  { id: 'XKWcAsT8Sqc', date: '2022/02', title: 'Kanye West | Heaven and Hell', work: true },
  { id: 'IGFL5cHcpbo', date: '2022/01', title: 'Samsung Exynos | Playtime is over', work: true },
  // ── 2021 ────────────────────────────────────────────────────────
  { id: 'IDW0PBLf9JQ', date: '2021/12', title: 'Duracell Optimum | Schroevendraaier 15s', work: true },
  { id: 'GZIQwOUTny4', date: '2021/11', title: 'Duracell Optimum | Krachtige Bunny 15s', work: true },
  { id: 'dJWGrzuDSFc', date: '2021/11', title: 'Grey Goose | Summer Smooth', work: true },
  { id: 'exV1GCDvxQ4', date: '2021/10', title: 'Qatar | Experience a World Beyond', work: true },
  { id: 'PH68kWX7hLk', date: '2021/09', title: 'MINCE ALORS 2 | Bande Annonce', work: true },
  { id: 'TU-9_6l1xkM', date: '2021/08', title: 'Prada | Luna Rossa Ocean', work: true },
  { id: 'EBJtqnKy1Ls', date: '2021/05', title: 'ROBUSTE | Bande Annonce', work: true },
  { id: 'G77aqlNE0PY', date: '2021/02', title: 'Societe Generale | stands by its 175,000 business clients', work: true, old: ['YXAes9ii0Aw'] },
  // ── 2020 ────────────────────────────────────────────────────────
  { id: 'oApORBhyiWs', date: '2020/12', title: 'Issey Miyake IGO', work: true },
  { id: '6tCWBlSttVw', date: '2020/07', title: 'Vittel | Source naturelle de vitalité', work: true },
  { id: 'JJR13qs6aHY', date: '2020/06', title: 'Futuroscope | Objectif Mars', work: true },
  { id: 'L-2IChz0ajM', date: '2020/03', title: 'INTO THE NIGHT | Bande Annonce', work: true, old: ['B94mNfn6IUs'] },
  { id: '_qO6O4Zw1oM', date: '2020/02', title: 'Planters | Superbowl 2020', work: false },
  { id: 'P9nBzYbZ4uM', date: '2020/01', title: 'Diesel SS20 | For Successful Living', work: true },
  // ── 2019 ────────────────────────────────────────────────────────
  { id: 'mWl33-IdOng', date: '2019/11', title: 'Dick\'s Sporting | The New Kid', work: true },
  { id: 'ueaB_d-sZ7U', date: '2019/08', title: 'Samsung | EcoBubble™ Washing Machine', work: true },
  { id: 'T_cYVJIKCuY', date: '2019/06', title: 'ANNA | Bande-annonce', work: true },
  // ── 2018 ────────────────────────────────────────────────────────
  { id: '_m3PIkZW6o8', date: '2018/09', title: 'Huawei | It\'s in your hands', work: true },
  { id: 'tSbDO9TVeTg', date: '2018/03', title: 'SPYCIES | Bande Annonce', work: true },
  // ── 2017 ────────────────────────────────────────────────────────
  { id: 'lLmNL1I_QYU', date: '2017/11', title: 'SEVEN & ME | Opening', work: true },
  { id: 'w5EHhBd0v3E', date: '2017/06', title: 'PEUGEOT 208 - Connected Energy', work: true },
  { id: 'wj257x8ntBo', date: '2017/06', title: 'Duracell | Cars 3', work: true },
  { id: '-fycN9kNaXk', date: '2017/01', title: 'LE SENS DE LA FETE | Bande-Annonce', work: true },
  // ── 2016 ────────────────────────────────────────────────────────
  { id: 'Lg5KWEYs0YM', date: '2016/11', title: 'Duracell | Waiting for Olaf', work: true },
  { id: 'Goy8YMc3KHg', date: '2016/08', title: 'L\'ODYSSÉE | Bande-annonce', work: true },
  { id: '01xifSkTvAg', date: '2016/07', title: 'Cruzcampo CruZial 2016 | La nueva cerveza de Cruzcampo', work: true },
  { id: 'MrSy_aazUOQ', date: '2016/06', title: 'Peugeot 2008 | STORM', work: true },
  { id: 't8sFlno9Fs0', date: '2016/06', title: 'Agents of Mayhem | Trailer', work: true },
  // ── 2015 ────────────────────────────────────────────────────────
  { id: '5dvIuXj4Gm4', date: '2015/09', title: 'Wildstar | Trailer', work: true },
  { id: '9z9Z1cg58no', date: '2015/03', title: 'SFR Red fibre | Lag', work: true },
  { id: '3vXWllzZOJA', date: '2015/02', title: 'BALLERINA | Bande Annonce', work: true },
  // ── 2014 ────────────────────────────────────────────────────────
  { id: 'R8nVKUhaDXc', date: '2014/02', title: 'CNP | Assurances', work: true },
  { id: 'l9R1vLbBiDA', date: '2014/01', title: 'DIESEL | Only the Brave Wild', work: true },
  // ── 2013 ────────────────────────────────────────────────────────
  { id: 'oVsJcsv2pyQ', date: '2013/12', title: 'Bein Sports | Ident Bumpers', work: true },
  // ── 2012 ────────────────────────────────────────────────────────
  { id: 'Ysf12mAd2e0', date: '2012/07', title: 'Garfield & Cie - saison 4', work: true },
  { id: 'w-AStp1DEM4', date: '2012/06', title: 'Renault | Mégane Collection 2012', work: true },
  { id: 'qYNgcgTEC7k', date: '2012/03', title: 'Garfield Left Speechless', work: true },
  // ── 2011 ────────────────────────────────────────────────────────
  { id: 'HxR3reSdNho', date: '2011/06', title: 'Garfield & Cie - saison 3', work: true },
  { id: 'QDEmPpvIumU', date: '2011/04', title: 'THE PRODIGIES | Bande Annonce', work: true },
  // ── 2010 ────────────────────────────────────────────────────────
  { id: 'd0389lPZdGU', date: '2010/03', title: 'ADELE BLANC-SEC | Bande Annonce', work: true },
  { id: 'mOdxATJwad0', date: '2010/02', title: 'ARTHUR 3 - LA GUERRE DES DEUX MONDES | Bande Annonce', work: true },
  // ── 2009 ────────────────────────────────────────────────────────
  { id: 'jgCFy7kl9T8', date: '2009/01', title: 'ARTHUR ET LA VENGEANCE DE MALTAZARD | Bande Annonce', work: true },
  // ── 2008 ────────────────────────────────────────────────────────
  { id: '41EFHlCWpnk', date: '2008/06', title: 'BABYLON A.D. | Theatrical Trailer', work: true },
  { id: 'RBkXxMhc3kk', date: '2008/04', title: 'SPEED RACER | Bande Annonce', work: true },
  // ── 2007 ────────────────────────────────────────────────────────
  { id: 'khf1mj9gkqk', date: '2007/11', title: 'ASTERIX AT THE OLYMPIC GAMES | Bande Annonce', work: true },
  { id: '6KVsyZHKtRY', date: '2007/10', title: 'Nissan | Rogue', work: true },
];
