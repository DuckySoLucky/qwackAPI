module.exports = {
    FORBIDDEN_STATS: {
        speed: 1,
        intelligence: 2,
        health: 2,
        defense: 1,
        strength: 1,
    },
    CENTURY_CAKES: {
        walk_speed: 'speed'
    },
    HARP_QUEST: {
        song_hymn_joy_best_completion: 1,
        song_frere_jacques_best_completion: 1,
        song_amazing_grace_best_completion: 1,
        song_brahms_best_completion: 2,
        song_happy_birthday_best_completion: 2,
        song_greensleeves_best_completion: 2,
        song_jeopardy_best_completion: 3,
        song_minuet_best_completion: 3,
        song_joy_world_best_completion: 3,
        song_pure_imagination_best_completion: 4,
        song_vie_en_rose_best_completion: 4,
        song_fire_and_flames_best_completion: 1,
        song_pachelbel_best_completion: 1,
    },
    SPECIAL_SETS: [
        {
            pieces: ["SKELETON_HELMET", "GUARDIAN_CHESTPLATE", "CREEPER_LEGGINGS", "SPIDER_BOOTS"],
            name: "Monster Hunter Armor",
        },
        {
            pieces: ["SKELETON_HELMET", "GUARDIAN_CHESTPLATE", "CREEPER_LEGGINGS", "TARANTULA_BOOTS"],
            name: "Monster Raider Armor",
        },
        {
            pieces: ["SPONGE_HELMET", "SPONGE_CHESTPLATE", "SPONGE_LEGGINGS", "SPONGE_BOOTS"],
            name: "Sponge Armor",
        },
        {
            pieces: ["FAIRY_HELMET", "FAIRY_CHESTPLATE", "FAIRY_LEGGINGS", "FAIRY_BOOTS"],
            name: "Fairy Armor",
        },
        {
            pieces: ["DIVER_HELMET", "DIVER_CHESTPLATE", "DIVER_LEGGINGS", "DIVER_BOOTS"],
            name: "Diver Armor",
        },
        {
            pieces: ["LEAFLET_HELMET", "LEAFLET_CHESTPLATE", "LEAFLET_LEGGINGS", "LEAFLET_BOOTS"],
            name: "Leaflet Armor",
        },
        {
            pieces: ["MASTIFF_HELMET", "MASTIFF_CHESTPLATE", "MASTIFF_LEGGINGS", "MASTIFF_BOOTS"],
            name: "Mastiff Armor",
        },
        {
            pieces: ["ADAPTIVE_HELMET", "ADAPTIVE_CHESTPLATE", "ADAPTIVE_LEGGINGS", "ADAPTIVE_BOOTS"],
            name: "Adaptive Armor",
        },
    ],
    EMAN_KILLS_ARMOR: {
        100: 20,
        200: 40,
        300: 60,
        500: 90,
        800: 120,
        1200: 150,
        1750: 180,
        2500: 210,
        3500: 240,
        5000: 270,
        10000: 310,
        25000: 335,
        50000: 355,
        100000: 370,
        125000: 380,
        150000: 390,
        175000: 395,
        200000: 400,
    },
    SPIDER_KILLS_ARMOR: {
        50: 20,
        300: 45,
        1000: 80,
        2000: 110,
        3000: 135,
        5000: 160,
        7500: 180,
        10000: 200,
        15000: 215,
        25000: 235,
        50000: 250,
        100000: 270,
        200000: 280,
    },
    ZOMBIE_KILLS_ARMOR: {
        50: 20,
        300: 50,
        1000: 90,
        2000: 120,
        3000: 150,
        5000: 180,
        7500: 200,
        10000: 220,
        15000: 240,
        25000: 260,
        50000: 280,
        100000: 300,
        200000: 310,
        300000: 315,
    },
    WISP_PET_KILLS: [
        { kills: 0, defense: 0, true_defense: 0 },
        { kills: 100, defense: 30, true_defense: 3 },
        { kills: 200, defense: 60, true_defense: 6 },
        { kills: 300, defense: 90, true_defense: 9 },
        { kills: 500, defense: 135, true_defense: 14 },
        { kills: 800, defense: 180, true_defense: 18 },
        { kills: 1200, defense: 225, true_defense: 23 },
        { kills: 1750, defense: 270, true_defense: 27 },
        { kills: 2500, defense: 315, true_defense: 32 },
        { kills: 3500, defense: 360, true_defense: 36 },
        { kills: 5000, defense: 405, true_defense: 41 },
        { kills: 10000, defense: 465, true_defense: 47 },
        { kills: 25000, defense: 500, true_defense: 50 },
        { kills: 50000, defense: 535, true_defense: 53 },
        { kills: 100000, defense: 570, true_defense: 57 },
        { kills: 125000, defense: 585, true_defense: 58 },
        { kills: 150000, defense: 595, true_defense: 59 },
        { kills: 200000, defense: 600, true_defense: 60 },
    ],
}