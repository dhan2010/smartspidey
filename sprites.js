// ==================== CHARACTER SVG SPRITES ====================
// Each function: characterSVG(pose, size) -> SVG string
// Poses: 'stand', 'action', 'celebrate'
// ViewBox: 0 0 48 64 (consistent with spideySVG)

function hulkSVG(pose, size) {
    size = size || 120;
    var h = Math.round(size * 1.33);

    // Head - big square jaw, green
    var head = '<rect x="12" y="2" width="24" height="20" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="14" y="0" width="20" height="6" rx="2" fill="#2E7D32" stroke="#1A1A2E" stroke-width="1"/>';
    // Angry eyes
    var angryEyes = '<rect x="15" y="9" width="7" height="4" rx="1" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="26" y="9" width="7" height="4" rx="1" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="18" cy="11" r="1.5" fill="#1A1A2E"/>' +
        '<circle cx="30" cy="11" r="1.5" fill="#1A1A2E"/>' +
        '<line x1="15" y1="8" x2="22" y2="10" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<line x1="33" y1="8" x2="26" y2="10" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Happy eyes for celebrate
    var happyEyes = '<path d="M15,11 Q18.5,7 22,11" fill="none" stroke="#1A1A2E" stroke-width="2"/>' +
        '<path d="M26,11 Q29.5,7 33,11" fill="none" stroke="#1A1A2E" stroke-width="2"/>';
    // Mouth
    var mouth = '<path d="M18,17 Q24,21 30,17" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>';
    var grin = '<path d="M17,16 Q24,22 31,16" fill="white" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Body - wide torso, green with purple pants
    var body = '<rect x="10" y="22" width="28" height="18" rx="3" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<line x1="24" y1="24" x2="24" y2="36" stroke="#2E7D32" stroke-width="1"/>' +
        '<line x1="14" y1="28" x2="34" y2="28" stroke="#2E7D32" stroke-width="0.7"/>';
    // Purple pants
    var legs = '<rect x="12" y="40" width="11" height="14" rx="2" fill="#6A1B9A" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="25" y="40" width="11" height="14" rx="2" fill="#6A1B9A" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="11" y="50" width="13" height="6" rx="2" fill="#4A148C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="24" y="50" width="13" height="6" rx="2" fill="#4A148C" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Arms down - big green arms
    var armsDown = '<rect x="2" y="22" width="8" height="16" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="38" y="22" width="8" height="16" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="39" r="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="42" cy="39" r="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Arms up - smash pose
    var armsUp = '<rect x="2" y="4" width="8" height="20" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="38" y="4" width="8" height="20" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="3" r="5" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="42" cy="3" r="5" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Action arms - one fist forward
    var armsAction = '<rect x="2" y="22" width="8" height="16" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="39" r="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="38" y="16" width="10" height="8" rx="4" fill="#388E3C" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="48" cy="20" r="5" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>';

    var inner = '';
    if (pose === 'celebrate') inner = head + happyEyes + grin + body + armsUp + legs;
    else if (pose === 'action') inner = head + angryEyes + mouth + body + armsAction + legs;
    else inner = head + angryEyes + mouth + body + armsDown + legs;

    return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' + inner + '</svg>';
}

function ironManSVG(pose, size) {
    size = size || 120;
    var h = Math.round(size * 1.33);

    // Helmet - red with gold faceplate
    var head = '<rect x="14" y="2" width="20" height="18" rx="4" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="16" y="8" width="16" height="10" rx="2" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>' +
        '<line x1="24" y1="8" x2="24" y2="18" stroke="#C62828" stroke-width="1"/>';
    // Eyes - glowing white slits
    var eyes = '<rect x="17" y="10" width="5" height="3" rx="1" fill="white" stroke="#1A1A2E" stroke-width="0.8"/>' +
        '<rect x="26" y="10" width="5" height="3" rx="1" fill="white" stroke="#1A1A2E" stroke-width="0.8"/>';
    var happyEyes = '<path d="M17,12 Q19.5,9 22,12" fill="none" stroke="white" stroke-width="2"/>' +
        '<path d="M26,12 Q28.5,9 31,12" fill="none" stroke="white" stroke-width="2"/>';
    // Body - red armor with gold accents, arc reactor
    var body = '<rect x="14" y="20" width="20" height="20" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="16" y="22" width="16" height="8" rx="1" fill="#B71C1C" stroke="#FFB300" stroke-width="0.7"/>' +
        '<circle cx="24" cy="26" r="3.5" fill="#29B6F6" stroke="#0288D1" stroke-width="1"/>' +
        '<circle cx="24" cy="26" r="1.5" fill="white"/>';
    // Legs - red with gold knees
    var legs = '<rect x="15" y="40" width="8" height="14" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="25" y="40" width="8" height="14" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="16" y="44" width="6" height="3" rx="1" fill="#FFB300"/>' +
        '<rect x="26" y="44" width="6" height="3" rx="1" fill="#FFB300"/>' +
        '<rect x="14" y="50" width="10" height="6" rx="2" fill="#FFB300" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="24" y="50" width="10" height="6" rx="2" fill="#FFB300" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Arms down
    var armsDown = '<rect x="6" y="22" width="8" height="6" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="34" y="22" width="8" height="6" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="25" r="3" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="42" cy="25" r="3" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>';
    // Arms up celebrate
    var armsUp = '<rect x="6" y="6" width="6" height="18" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="36" y="6" width="6" height="18" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="9" cy="5" r="3.5" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="39" cy="5" r="3.5" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>';
    // Action - repulsor blast (arm forward with energy)
    var armsAction = '<rect x="6" y="22" width="8" height="6" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="25" r="3" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="34" y="18" width="12" height="6" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="46" cy="21" r="3" fill="#FFB300" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="46" cy="21" r="5" fill="none" stroke="#29B6F6" stroke-width="1" opacity="0.7"/>' +
        '<circle cx="46" cy="21" r="7" fill="none" stroke="#29B6F6" stroke-width="0.5" opacity="0.4"/>';

    var inner = '';
    if (pose === 'celebrate') inner = head + happyEyes + body + armsUp + legs;
    else if (pose === 'action') inner = head + eyes + body + armsAction + legs;
    else inner = head + eyes + body + armsDown + legs;

    return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' + inner + '</svg>';
}

function captainAmericaSVG(pose, size) {
    size = size || 120;
    var h = Math.round(size * 1.33);

    // Head - blue cowl with white A and wings
    var head = '<rect x="14" y="2" width="20" height="18" rx="4" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="18" y="8" width="12" height="10" rx="2" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<text x="24" y="7" text-anchor="middle" font-size="6" font-weight="bold" fill="white">A</text>' +
        '<polygon points="13,6 10,4 14,8" fill="white" stroke="#1A1A2E" stroke-width="0.5"/>' +
        '<polygon points="35,6 38,4 34,8" fill="white" stroke="#1A1A2E" stroke-width="0.5"/>';
    // Eyes
    var eyes = '<circle cx="21" cy="12" r="1.5" fill="#1A1A2E"/>' +
        '<circle cx="27" cy="12" r="1.5" fill="#1A1A2E"/>';
    var happyEyes = '<path d="M19,12 Q21,9.5 23,12" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<path d="M25,12 Q27,9.5 29,12" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Mouth
    var smile = '<path d="M21,15 Q24,17 27,15" fill="none" stroke="#1A1A2E" stroke-width="1"/>';
    // Body - blue suit with white star and stripes
    var body = '<rect x="14" y="20" width="20" height="20" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="14" y="32" width="20" height="4" fill="#E53935"/>' +
        '<rect x="14" y="36" width="20" height="4" fill="white"/>' +
        '<polygon points="24,24 25.5,28 29.5,28 26.5,30.5 27.5,34.5 24,32 20.5,34.5 21.5,30.5 18.5,28 22.5,28" fill="white" stroke="#1A1A2E" stroke-width="0.5"/>';
    // Legs
    var legs = '<rect x="15" y="40" width="8" height="14" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="25" y="40" width="8" height="14" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="14" y="50" width="10" height="6" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="24" y="50" width="10" height="6" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Shield - concentric circles
    var shield = '<circle cx="8" cy="30" r="7" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="8" cy="30" r="5" fill="white" stroke="#1A1A2E" stroke-width="0.7"/>' +
        '<circle cx="8" cy="30" r="3.5" fill="#C62828" stroke="#1A1A2E" stroke-width="0.5"/>' +
        '<circle cx="8" cy="30" r="2" fill="#1565C0"/>' +
        '<polygon points="8,28.5 8.7,29.7 10,29.7 9,30.5 9.4,31.7 8,31 6.6,31.7 7,30.5 6,29.7 7.3,29.7" fill="white"/>';
    // Arms down with shield on left
    var armsDown = '<rect x="4" y="22" width="10" height="6" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="34" y="22" width="8" height="6" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="42" cy="25" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' + shield;
    // Arms up
    var armsUp = '<rect x="4" y="6" width="6" height="18" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="38" y="6" width="6" height="18" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="7" cy="5" r="3.5" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="41" cy="5" r="3.5" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>';
    // Action - shield throw (arm forward)
    var armsAction = '<rect x="4" y="22" width="10" height="6" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="4" cy="25" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="34" y="18" width="10" height="6" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="44" cy="21" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="44" cy="14" r="5" fill="#C62828" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="44" cy="14" r="3.5" fill="white"/>' +
        '<circle cx="44" cy="14" r="2" fill="#C62828"/>' +
        '<circle cx="44" cy="14" r="1" fill="#1565C0"/>';

    var inner = '';
    if (pose === 'celebrate') inner = head + happyEyes + smile + body + armsUp + legs;
    else if (pose === 'action') inner = head + eyes + smile + body + armsAction + legs;
    else inner = head + eyes + smile + body + armsDown + legs;

    return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' + inner + '</svg>';
}

function blackSpideySVG(pose, size) {
    size = size || 120;
    var h = Math.round(size * 1.33);

    // Head - black with white eyes (symbiote)
    var head = '<rect x="14" y="2" width="20" height="18" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<line x1="24" y1="2" x2="24" y2="20" stroke="#333" stroke-width="0.7"/>' +
        '<line x1="14" y1="11" x2="34" y2="11" stroke="#333" stroke-width="0.5"/>';
    // White angular eyes
    var eyes = '<polygon points="17,8 22,7 23,11 18,12" fill="white" stroke="#555" stroke-width="1"/>' +
        '<polygon points="25,7 30,8 30,12 25,11" fill="white" stroke="#555" stroke-width="1"/>';
    var happyEyes = '<path d="M17,10 Q20,7 23,10" fill="none" stroke="white" stroke-width="2.5"/>' +
        '<path d="M25,10 Q28,7 31,10" fill="none" stroke="white" stroke-width="2.5"/>';
    // Body - black with white spider emblem
    var body = '<rect x="16" y="20" width="16" height="18" rx="2" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        // White spider emblem
        '<circle cx="24" cy="26" r="2" fill="white"/>' +
        '<line x1="22" y1="25" x2="17" y2="22" stroke="white" stroke-width="1"/>' +
        '<line x1="26" y1="25" x2="31" y2="22" stroke="white" stroke-width="1"/>' +
        '<line x1="22" y1="27" x2="17" y2="30" stroke="white" stroke-width="1"/>' +
        '<line x1="26" y1="27" x2="31" y2="30" stroke="white" stroke-width="1"/>' +
        '<line x1="23" y1="26" x2="19" y2="26" stroke="white" stroke-width="0.7"/>' +
        '<line x1="25" y1="26" x2="29" y2="26" stroke="white" stroke-width="0.7"/>' +
        '<line x1="24" y1="28" x2="24" y2="34" stroke="white" stroke-width="0.7"/>';
    // Legs - black
    var legs = '<rect x="16" y="38" width="7" height="14" rx="2" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="25" y="38" width="7" height="14" rx="2" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="15" y="48" width="9" height="6" rx="2" fill="#111" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="24" y="48" width="9" height="6" rx="2" fill="#111" stroke="#333" stroke-width="1.5"/>';
    // Arms down
    var armsDown = '<rect x="6" y="22" width="10" height="6" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="32" y="22" width="10" height="6" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<circle cx="7" cy="25" r="3" fill="#222" stroke="#333" stroke-width="1"/>' +
        '<circle cx="41" cy="25" r="3" fill="#222" stroke="#333" stroke-width="1"/>';
    // Arms up
    var armsUp = '<rect x="8" y="6" width="6" height="18" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="34" y="6" width="6" height="18" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<circle cx="11" cy="5" r="3.5" fill="#222" stroke="#333" stroke-width="1"/>' +
        '<circle cx="37" cy="5" r="3.5" fill="#222" stroke="#333" stroke-width="1"/>';
    // Action - web shooting (one arm out with web lines)
    var armWave = '<rect x="6" y="22" width="10" height="6" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<circle cx="7" cy="25" r="3" fill="#222" stroke="#333" stroke-width="1"/>' +
        '<rect x="32" y="8" width="6" height="16" rx="3" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<circle cx="35" cy="7" r="3.5" fill="#222" stroke="#333" stroke-width="1"/>' +
        // Web lines
        '<line x1="35" y1="7" x2="44" y2="2" stroke="white" stroke-width="0.6" opacity="0.8"/>' +
        '<line x1="35" y1="7" x2="46" y2="6" stroke="white" stroke-width="0.6" opacity="0.8"/>' +
        '<line x1="35" y1="7" x2="44" y2="10" stroke="white" stroke-width="0.6" opacity="0.8"/>';

    var inner = '';
    if (pose === 'celebrate') inner = head + happyEyes + body + armsUp + legs;
    else if (pose === 'action') inner = head + eyes + body + armWave + legs;
    else inner = head + eyes + body + armsDown + legs;

    return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' + inner + '</svg>';
}

function harryPotterSVG(pose, size) {
    size = size || 120;
    var h = Math.round(size * 1.33);

    // Head - skin tone with messy black hair
    var head = '<rect x="14" y="6" width="20" height="18" rx="4" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1.5"/>' +
        // Messy black hair
        '<path d="M13,12 Q14,2 20,4 Q22,1 26,3 Q30,1 33,5 Q36,3 35,12" fill="#2C2C2C" stroke="#1A1A2E" stroke-width="1"/>' +
        // Lightning scar
        '<path d="M28,6 L27,8 L29,9 L27.5,12" fill="none" stroke="#FFD700" stroke-width="1.2"/>';
    // Round glasses and eyes
    var eyes = '<circle cx="19" cy="14" r="3" fill="none" stroke="#1A1A2E" stroke-width="1.2"/>' +
        '<circle cx="29" cy="14" r="3" fill="none" stroke="#1A1A2E" stroke-width="1.2"/>' +
        '<line x1="22" y1="14" x2="26" y2="14" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="19" cy="14" r="1.2" fill="#1A1A2E"/>' +
        '<circle cx="29" cy="14" r="1.2" fill="#1A1A2E"/>';
    var happyEyes = '<circle cx="19" cy="14" r="3" fill="none" stroke="#1A1A2E" stroke-width="1.2"/>' +
        '<circle cx="29" cy="14" r="3" fill="none" stroke="#1A1A2E" stroke-width="1.2"/>' +
        '<line x1="22" y1="14" x2="26" y2="14" stroke="#1A1A2E" stroke-width="1"/>' +
        '<path d="M17.5,14 Q19,12 20.5,14" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<path d="M27.5,14 Q29,12 30.5,14" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Smile
    var smile = '<path d="M21,19 Q24,22 27,19" fill="none" stroke="#1A1A2E" stroke-width="1"/>';
    // Body - brown/maroon Hogwarts robe with gold trim
    var body = '<rect x="14" y="24" width="20" height="20" rx="2" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<line x1="24" y1="24" x2="24" y2="44" stroke="#3E2723" stroke-width="1"/>' +
        '<rect x="19" y="25" width="10" height="4" rx="1" fill="#8D6E63"/>' +
        // Gryffindor tie
        '<rect x="22" y="25" width="4" height="8" rx="1" fill="#C62828"/>' +
        '<line x1="22" y1="28" x2="26" y2="28" stroke="#FFB300" stroke-width="0.7"/>' +
        '<line x1="22" y1="31" x2="26" y2="31" stroke="#FFB300" stroke-width="0.7"/>';
    // Legs - dark pants under robe
    var legs = '<rect x="16" y="44" width="7" height="10" rx="2" fill="#3E2723" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="25" y="44" width="7" height="10" rx="2" fill="#3E2723" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="15" y="50" width="9" height="6" rx="2" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>' +
        '<rect x="24" y="50" width="9" height="6" rx="2" fill="#1A1A2E" stroke="#333" stroke-width="1.5"/>';
    // Arms down
    var armsDown = '<rect x="6" y="26" width="8" height="6" rx="3" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="34" y="26" width="8" height="6" rx="3" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="29" r="2.5" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="42" cy="29" r="2.5" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>';
    // Arms up
    var armsUp = '<rect x="6" y="10" width="6" height="18" rx="3" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="36" y="10" width="6" height="18" rx="3" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="9" cy="9" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="39" cy="9" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>';
    // Action - wand casting with sparkles
    var armsAction = '<rect x="6" y="26" width="8" height="6" rx="3" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="6" cy="29" r="2.5" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="34" y="12" width="6" height="16" rx="3" fill="#5D4037" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<circle cx="37" cy="11" r="2.5" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
        // Wand
        '<line x1="37" y1="9" x2="44" y2="2" stroke="#8D6E63" stroke-width="2" stroke-linecap="round"/>' +
        // Sparkles
        '<circle cx="45" cy="1" r="1" fill="#FFD700"/>' +
        '<circle cx="46" cy="4" r="0.7" fill="#FFD700" opacity="0.7"/>' +
        '<circle cx="43" cy="0" r="0.7" fill="#FFD700" opacity="0.7"/>' +
        '<path d="M44,1 L46,1 M45,0 L45,2" stroke="#FFD700" stroke-width="0.5"/>';

    var inner = '';
    if (pose === 'celebrate') inner = head + happyEyes + smile + body + armsUp + legs;
    else if (pose === 'action') inner = head + eyes + smile + body + armsAction + legs;
    else inner = head + eyes + smile + body + armsDown + legs;

    return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' + inner + '</svg>';
}

function sonicSVG(pose, size) {
    size = size || 120;
    var h = Math.round(size * 1.33);

    // Head - blue circle with spiky quills
    var headBase = '<circle cx="24" cy="14" r="10" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Spiky quills on back of head
    var quills = '<polygon points="28,6 40,2 34,10" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<polygon points="30,10 42,8 36,16" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<polygon points="28,14 40,14 34,20" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>';
    // Face - peach skin area
    var face = '<ellipse cx="21" cy="16" rx="7" ry="6" fill="#FFCC80" stroke="#1A1A2E" stroke-width="0.7"/>';
    // Big green eyes
    var eyes = '<ellipse cx="19" cy="13" rx="3" ry="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<ellipse cx="23" cy="13" rx="3" ry="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="20" cy="13" r="1.5" fill="#388E3C"/>' +
        '<circle cx="24" cy="13" r="1.5" fill="#388E3C"/>' +
        '<circle cx="20" cy="13" r="0.7" fill="#1A1A2E"/>' +
        '<circle cx="24" cy="13" r="0.7" fill="#1A1A2E"/>';
    var happyEyes = '<ellipse cx="19" cy="13" rx="3" ry="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<ellipse cx="23" cy="13" rx="3" ry="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<path d="M18,13 Q20,10.5 22,13" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<path d="M22,13 Q24,10.5 26,13" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>';
    // Nose
    var nose = '<circle cx="17" cy="15" r="1.2" fill="#1A1A2E"/>';
    // Smile
    var smile = '<path d="M17,18 Q20,21 23,18" fill="none" stroke="#1A1A2E" stroke-width="1"/>';
    // Body - blue, small and round
    var body = '<ellipse cx="24" cy="32" rx="8" ry="8" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<ellipse cx="24" cy="33" rx="5" ry="5" fill="#FFCC80"/>';
    // Legs - with red shoes
    var legs = '<rect x="16" y="38" width="6" height="8" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="26" y="38" width="6" height="8" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="13" y="44" width="10" height="7" rx="3" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="25" y="44" width="10" height="7" rx="3" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<rect x="14" y="46" width="4" height="3" rx="1" fill="white"/>' +
        '<rect x="26" y="46" width="4" height="3" rx="1" fill="white"/>';
    // Arms down - white gloves
    var armsDown = '<rect x="8" y="28" width="8" height="5" rx="2.5" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="32" y="28" width="8" height="5" rx="2.5" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="8" cy="30" r="3" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="40" cy="30" r="3" fill="white" stroke="#1A1A2E" stroke-width="1"/>';
    // Arms up
    var armsUp = '<rect x="8" y="14" width="5" height="14" rx="2.5" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="35" y="14" width="5" height="14" rx="2.5" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="10" cy="13" r="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="38" cy="13" r="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>';
    // Action - running pose (one arm forward, speed lines)
    var armsAction = '<rect x="8" y="28" width="8" height="5" rx="2.5" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="8" cy="30" r="3" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        '<rect x="32" y="22" width="10" height="5" rx="2.5" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
        '<circle cx="42" cy="24" r="3" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
        // Speed lines
        '<line x1="0" y1="30" x2="6" y2="30" stroke="#29B6F6" stroke-width="1" opacity="0.6"/>' +
        '<line x1="1" y1="34" x2="8" y2="34" stroke="#29B6F6" stroke-width="0.8" opacity="0.5"/>' +
        '<line x1="2" y1="26" x2="7" y2="26" stroke="#29B6F6" stroke-width="0.8" opacity="0.5"/>';
    // Spin legs for action
    var legsAction = '<rect x="12" y="38" width="6" height="10" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1" transform="rotate(-20 15 40)"/>' +
        '<rect x="30" y="36" width="6" height="10" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1" transform="rotate(15 33 38)"/>' +
        '<ellipse cx="10" cy="49" rx="5" ry="3.5" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
        '<ellipse cx="37" cy="47" rx="5" ry="3.5" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>';

    var inner = '';
    if (pose === 'celebrate') inner = quills + headBase + face + happyEyes + nose + smile + body + armsUp + legs;
    else if (pose === 'action') inner = quills + headBase + face + eyes + nose + smile + body + armsAction + legsAction;
    else inner = quills + headBase + face + eyes + nose + smile + body + armsDown + legs;

    return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' + inner + '</svg>';
}
