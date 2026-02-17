// ==================== LEVELS 3-8 ====================
// Each level exports: introConfig, runScene builder, question generator, winMessage
// This file is designed to be merged into index.html by the assembler (Task #4).

var LEVELS = (function() {
    'use strict';

    // ==================== LEVEL INTRO CONFIGS ====================
    var introConfigs = {
        3: { name: 'Smash the Rocks!', emoji: '\uD83E\uDEA8', bg: 'linear-gradient(180deg,#1b5e20 0%,#388e3c 40%,#66bb6a 100%)' },
        4: { name: 'Fix the Suit!', emoji: '\u2699\uFE0F', bg: 'linear-gradient(180deg,#b71c1c 0%,#c62828 40%,#ffd600 100%)' },
        5: { name: 'Shield Throw!', emoji: '\uD83D\uDEE1\uFE0F', bg: 'linear-gradient(180deg,#0d47a1 0%,#1565c0 40%,#e53935 100%)' },
        6: { name: 'Shadow Chase!', emoji: '\uD83C\uDF11', bg: 'linear-gradient(180deg,#000000 0%,#1a1a2e 40%,#4a148c 100%)' },
        7: { name: 'Magic Spell!', emoji: '\u2728', bg: 'linear-gradient(180deg,#1a237e 0%,#4a148c 40%,#7b1fa2 100%)' },
        8: { name: 'Speed Run!', emoji: '\u26A1', bg: 'linear-gradient(180deg,#0d47a1 0%,#1565c0 50%,#ffd600 100%)' }
    };

    // ==================== SVG SPRITES FOR NEW CHARACTERS ====================
    // Placeholder sprites - will be replaced by Task #1 (sprite-artist)

    function hulkSVG(size) {
        size = size || 80;
        var h = Math.round(size * 1.33);
        return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' +
            // Head
            '<rect x="12" y="2" width="24" height="20" rx="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Angry eyes
            '<line x1="16" y1="8" x2="22" y2="10" stroke="#1A1A2E" stroke-width="2"/>' +
            '<line x1="26" y1="10" x2="32" y2="8" stroke="#1A1A2E" stroke-width="2"/>' +
            '<circle cx="19" cy="11" r="2" fill="#1A1A2E"/>' +
            '<circle cx="29" cy="11" r="2" fill="#1A1A2E"/>' +
            // Mouth
            '<path d="M18,16 Q24,20 30,16" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Hair
            '<path d="M12,6 Q14,0 18,4 Q22,-2 26,4 Q30,0 36,6" fill="#2E7D32" stroke="#1A1A2E" stroke-width="1"/>' +
            // Body (massive)
            '<rect x="8" y="22" width="32" height="22" rx="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Torn pants
            '<rect x="8" y="38" width="14" height="18" rx="2" fill="#7B1FA2" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="26" y="38" width="14" height="18" rx="2" fill="#7B1FA2" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Torn edges on pants
            '<path d="M8,56 L10,52 L14,56 L18,52 L22,56" fill="#7B1FA2" stroke="#1A1A2E" stroke-width="1"/>' +
            '<path d="M26,56 L28,52 L32,56 L36,52 L40,56" fill="#7B1FA2" stroke="#1A1A2E" stroke-width="1"/>' +
            // Arms (huge)
            '<rect x="0" y="22" width="10" height="8" rx="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="38" y="22" width="10" height="8" rx="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Fists
            '<circle cx="2" cy="26" r="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<circle cx="46" cy="26" r="4" fill="#4CAF50" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '</svg>';
    }

    function ironManSVG(size) {
        size = size || 80;
        var h = Math.round(size * 1.33);
        return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' +
            // Helmet
            '<rect x="14" y="2" width="20" height="18" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Face plate
            '<rect x="16" y="6" width="16" height="12" rx="2" fill="#FFD600" stroke="#C62828" stroke-width="1"/>' +
            // Eyes (glowing)
            '<rect x="17" y="8" width="5" height="3" rx="1" fill="white" stroke="#1A1A2E" stroke-width="0.8"/>' +
            '<rect x="26" y="8" width="5" height="3" rx="1" fill="white" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Mouth slit
            '<line x1="19" y1="14" x2="29" y2="14" stroke="#C62828" stroke-width="1"/>' +
            // Body (arc reactor glow)
            '<rect x="14" y="20" width="20" height="20" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<circle cx="24" cy="28" r="4" fill="#29B6F6" stroke="#0288D1" stroke-width="1.5"/>' +
            '<circle cx="24" cy="28" r="2" fill="white"/>' +
            // Legs
            '<rect x="14" y="40" width="8" height="16" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="26" y="40" width="8" height="16" rx="2" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Boots
            '<rect x="13" y="52" width="10" height="6" rx="2" fill="#FFD600" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="25" y="52" width="10" height="6" rx="2" fill="#FFD600" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Arms
            '<rect x="6" y="22" width="8" height="6" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="34" y="22" width="8" height="6" rx="3" fill="#C62828" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Repulsor hands
            '<circle cx="6" cy="25" r="3.5" fill="#FFD600" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="6" cy="25" r="1.5" fill="white"/>' +
            '<circle cx="42" cy="25" r="3.5" fill="#FFD600" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="42" cy="25" r="1.5" fill="white"/>' +
            '</svg>';
    }

    function capSVG(size) {
        size = size || 80;
        var h = Math.round(size * 1.33);
        return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' +
            // Helmet
            '<rect x="14" y="2" width="20" height="18" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // A on helmet
            '<text x="24" y="12" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="sans-serif">A</text>' +
            // Face
            '<rect x="16" y="10" width="16" height="8" rx="1" fill="#FFCC80" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Eyes
            '<circle cx="20" cy="13" r="1.5" fill="#1A1A2E"/>' +
            '<circle cx="28" cy="13" r="1.5" fill="#1A1A2E"/>' +
            // Mouth
            '<path d="M21,16 Q24,18 27,16" fill="none" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Body
            '<rect x="14" y="20" width="20" height="18" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Star on chest
            '<polygon points="24,24 25.5,27 29,27.5 26.5,29.5 27,33 24,31 21,33 21.5,29.5 19,27.5 22.5,27" fill="white" stroke="#1A1A2E" stroke-width="0.5"/>' +
            // Red stripes on body
            '<rect x="14" y="34" width="20" height="2" fill="#E53935"/>' +
            '<rect x="14" y="37" width="20" height="2" fill="white"/>' +
            // Legs
            '<rect x="14" y="38" width="8" height="16" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="26" y="38" width="8" height="16" rx="2" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Boots
            '<rect x="13" y="50" width="10" height="6" rx="2" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="25" y="50" width="10" height="6" rx="2" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Arms
            '<rect x="6" y="22" width="8" height="6" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="34" y="22" width="8" height="6" rx="3" fill="#1565C0" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Gloves
            '<circle cx="6" cy="25" r="3" fill="#E53935" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="42" cy="25" r="3" fill="#E53935" stroke="#1A1A2E" stroke-width="1"/>' +
            '</svg>';
    }

    function shieldSVG(size) {
        size = size || 50;
        return '<svg viewBox="0 0 32 32" width="' + size + '" height="' + size + '">' +
            '<circle cx="16" cy="16" r="14" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<circle cx="16" cy="16" r="10" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="16" cy="16" r="7" fill="#E53935" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="16" cy="16" r="4" fill="#1565C0" stroke="#1A1A2E" stroke-width="1"/>' +
            '<polygon points="16,12 17.2,14.5 20,14.8 18,16.5 18.4,19.2 16,17.8 13.6,19.2 14,16.5 12,14.8 14.8,14.5" fill="white" stroke="#1A1A2E" stroke-width="0.5"/>' +
            '</svg>';
    }

    function blackSpideySVG(size) {
        size = size || 80;
        var h = Math.round(size * 1.33);
        return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' +
            // Head
            '<rect x="14" y="2" width="20" height="18" rx="3" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            // Web lines on mask
            '<line x1="24" y1="2" x2="24" y2="20" stroke="#424242" stroke-width="0.7"/>' +
            '<line x1="14" y1="11" x2="34" y2="11" stroke="#424242" stroke-width="0.5"/>' +
            // Eyes (white, angular)
            '<polygon points="16,8 22,6 23,11 17,12" fill="white" stroke="#424242" stroke-width="1"/>' +
            '<polygon points="26,6 32,8 31,12 25,11" fill="white" stroke="#424242" stroke-width="1"/>' +
            // Body
            '<rect x="14" y="20" width="20" height="18" rx="2" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            // White spider emblem
            '<circle cx="24" cy="27" r="2" fill="white"/>' +
            '<line x1="22" y1="27" x2="16" y2="24" stroke="white" stroke-width="1.2"/>' +
            '<line x1="26" y1="27" x2="32" y2="24" stroke="white" stroke-width="1.2"/>' +
            '<line x1="22" y1="28" x2="16" y2="31" stroke="white" stroke-width="1.2"/>' +
            '<line x1="26" y1="28" x2="32" y2="31" stroke="white" stroke-width="1.2"/>' +
            // Legs
            '<rect x="14" y="38" width="8" height="16" rx="2" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            '<rect x="26" y="38" width="8" height="16" rx="2" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            // Shoes
            '<rect x="13" y="50" width="10" height="6" rx="2" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            '<rect x="25" y="50" width="10" height="6" rx="2" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            // Arms
            '<rect x="6" y="22" width="8" height="6" rx="3" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            '<rect x="34" y="22" width="8" height="6" rx="3" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            '<circle cx="6" cy="25" r="3" fill="#333" stroke="#424242" stroke-width="1"/>' +
            '<circle cx="42" cy="25" r="3" fill="#333" stroke="#424242" stroke-width="1"/>' +
            '</svg>';
    }

    function harryPotterSVG(size) {
        size = size || 80;
        var h = Math.round(size * 1.33);
        return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' +
            // Hair
            '<path d="M12,14 Q12,2 24,2 Q36,2 36,14" fill="#3E2723" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Messy hair bits
            '<path d="M14,6 Q12,2 16,4" fill="#3E2723" stroke="#1A1A2E" stroke-width="0.8"/>' +
            '<path d="M32,4 Q36,2 34,6" fill="#3E2723" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Face
            '<rect x="14" y="8" width="20" height="14" rx="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Glasses
            '<circle cx="19" cy="14" r="3.5" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<circle cx="29" cy="14" r="3.5" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<line x1="22.5" y1="14" x2="25.5" y2="14" stroke="#1A1A2E" stroke-width="1"/>' +
            // Eyes behind glasses
            '<circle cx="19" cy="14" r="1.5" fill="#1A1A2E"/>' +
            '<circle cx="29" cy="14" r="1.5" fill="#1A1A2E"/>' +
            // Scar
            '<path d="M16,8 L18,11 L16,11 L18,14" fill="none" stroke="#E53935" stroke-width="1.2"/>' +
            // Mouth
            '<path d="M21,18 Q24,20 27,18" fill="none" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Robe (Gryffindor)
            '<rect x="12" y="22" width="24" height="22" rx="2" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            // Gryffindor scarf
            '<rect x="16" y="22" width="16" height="3" fill="#B71C1C"/>' +
            '<rect x="16" y="25" width="16" height="2" fill="#FFD600"/>' +
            // Wand (in right hand)
            '<line x1="42" y1="18" x2="46" y2="6" stroke="#795548" stroke-width="2.5" stroke-linecap="round"/>' +
            '<circle cx="46" cy="5" r="2" fill="#FFD600" opacity="0.8"/>' +
            // Legs
            '<rect x="14" y="44" width="8" height="14" rx="2" fill="#37474F" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="26" y="44" width="8" height="14" rx="2" fill="#37474F" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Shoes
            '<rect x="13" y="54" width="10" height="6" rx="2" fill="#3E2723" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="25" y="54" width="10" height="6" rx="2" fill="#3E2723" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // Arms
            '<rect x="4" y="24" width="8" height="6" rx="3" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            '<rect x="36" y="24" width="8" height="6" rx="3" fill="#1A1A2E" stroke="#424242" stroke-width="1.5"/>' +
            '<circle cx="4" cy="27" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="44" cy="27" r="3" fill="#FFCC80" stroke="#1A1A2E" stroke-width="1"/>' +
            '</svg>';
    }

    function sonicSVG(size) {
        size = size || 80;
        var h = Math.round(size * 1.33);
        return '<svg viewBox="0 0 48 64" width="' + size + '" height="' + h + '">' +
            // Quills (spiky hair going back)
            '<polygon points="24,0 36,-4 32,8" fill="#1565C0" stroke="#0D47A1" stroke-width="1"/>' +
            '<polygon points="28,2 42,0 34,10" fill="#1565C0" stroke="#0D47A1" stroke-width="1"/>' +
            '<polygon points="26,4 40,6 32,14" fill="#1565C0" stroke="#0D47A1" stroke-width="1"/>' +
            // Head
            '<circle cx="22" cy="14" r="12" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/>' +
            // Face / muzzle
            '<ellipse cx="20" cy="16" rx="7" ry="6" fill="#FFCC80" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Eyes
            '<ellipse cx="18" cy="12" rx="3" ry="4" fill="white" stroke="#1A1A2E" stroke-width="0.8"/>' +
            '<ellipse cx="24" cy="12" rx="3" ry="4" fill="white" stroke="#1A1A2E" stroke-width="0.8"/>' +
            '<circle cx="20" cy="12" r="2" fill="#4CAF50"/>' +
            '<circle cx="25" cy="12" r="2" fill="#4CAF50"/>' +
            '<circle cx="20" cy="12" r="1" fill="#1A1A2E"/>' +
            '<circle cx="25" cy="12" r="1" fill="#1A1A2E"/>' +
            // Nose
            '<circle cx="17" cy="15" r="1.5" fill="#1A1A2E"/>' +
            // Mouth
            '<path d="M16,18 Q19,20 22,18" fill="none" stroke="#1A1A2E" stroke-width="0.8"/>' +
            // Body
            '<ellipse cx="24" cy="36" rx="10" ry="12" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/>' +
            // Belly
            '<ellipse cx="24" cy="36" rx="6" ry="8" fill="#FFCC80" stroke="#1A1A2E" stroke-width="0.5"/>' +
            // Legs
            '<rect x="16" y="46" width="6" height="10" rx="2" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/>' +
            '<rect x="26" y="46" width="6" height="10" rx="2" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/>' +
            // Shoes
            '<rect x="13" y="54" width="12" height="6" rx="3" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
            '<rect x="23" y="54" width="12" height="6" rx="3" fill="#E53935" stroke="#1A1A2E" stroke-width="1.5"/>' +
            // White stripe on shoes
            '<rect x="15" y="56" width="8" height="2" rx="1" fill="white"/>' +
            '<rect x="25" y="56" width="8" height="2" rx="1" fill="white"/>' +
            // Arms
            '<rect x="6" y="30" width="8" height="5" rx="2.5" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/>' +
            '<rect x="34" y="30" width="8" height="5" rx="2.5" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/>' +
            // Gloves
            '<circle cx="6" cy="33" r="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
            '<circle cx="42" cy="33" r="3.5" fill="white" stroke="#1A1A2E" stroke-width="1"/>' +
            '</svg>';
    }

    function rockSVG(size) {
        size = size || 50;
        return '<svg viewBox="0 0 32 32" width="' + size + '" height="' + size + '">' +
            '<polygon points="4,24 8,8 14,4 22,6 28,12 30,22 26,28 18,30 10,28" fill="#795548" stroke="#4E342E" stroke-width="1.5"/>' +
            '<line x1="10" y1="12" x2="20" y2="10" stroke="#4E342E" stroke-width="0.8" opacity="0.5"/>' +
            '<line x1="8" y1="20" x2="16" y2="22" stroke="#4E342E" stroke-width="0.8" opacity="0.5"/>' +
            '<line x1="22" y1="16" x2="26" y2="22" stroke="#4E342E" stroke-width="0.8" opacity="0.5"/>' +
            '</svg>';
    }

    function gearSVG(size) {
        size = size || 50;
        return '<svg viewBox="0 0 32 32" width="' + size + '" height="' + size + '">' +
            '<path d="M14,2 L18,2 L19,6 L22,7 L25,4 L28,7 L25,10 L26,13 L30,14 L30,18 L26,19 L25,22 L28,25 L25,28 L22,25 L19,26 L18,30 L14,30 L13,26 L10,25 L7,28 L4,25 L7,22 L6,19 L2,18 L2,14 L6,13 L7,10 L4,7 L7,4 L10,7 L13,6 Z" fill="#FFD600" stroke="#F57F17" stroke-width="1.5"/>' +
            '<circle cx="16" cy="16" r="5" fill="#FF9800" stroke="#F57F17" stroke-width="1.5"/>' +
            '<circle cx="16" cy="16" r="2" fill="#FFD600"/>' +
            '</svg>';
    }

    function shadowSVG(size) {
        size = size || 50;
        var h = Math.round(size * 1.25);
        return '<svg viewBox="0 0 32 40" width="' + size + '" height="' + h + '">' +
            '<ellipse cx="16" cy="20" rx="12" ry="16" fill="#1A1A2E" opacity="0.8"/>' +
            '<circle cx="12" cy="14" r="3" fill="#7C4DFF" opacity="0.9"/>' +
            '<circle cx="12" cy="14" r="1.2" fill="white"/>' +
            '<circle cx="22" cy="14" r="3" fill="#7C4DFF" opacity="0.9"/>' +
            '<circle cx="22" cy="14" r="1.2" fill="white"/>' +
            '<path d="M10,24 Q16,28 22,24" fill="none" stroke="#7C4DFF" stroke-width="1.5" opacity="0.8"/>' +
            '</svg>';
    }

    function wandSVG(size) {
        size = size || 50;
        return '<svg viewBox="0 0 32 32" width="' + size + '" height="' + size + '">' +
            '<line x1="4" y1="28" x2="24" y2="8" stroke="#795548" stroke-width="3" stroke-linecap="round"/>' +
            '<circle cx="24" cy="8" r="3" fill="#FFD600" opacity="0.8"/>' +
            '<polygon points="24,2 25.5,5 29,5.5 26.5,7.5 27,11 24,9 21,11 21.5,7.5 19,5.5 22.5,5" fill="#FFD600" stroke="#FFA000" stroke-width="0.5"/>' +
            '</svg>';
    }

    function ringSVG(size) {
        size = size || 40;
        return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '">' +
            '<circle cx="12" cy="12" r="10" fill="#FFD600" stroke="#FFA000" stroke-width="2"/>' +
            '<circle cx="12" cy="12" r="6" fill="#FFF9C4" stroke="#FFA000" stroke-width="1"/>' +
            '</svg>';
    }

    // ==================== HELPER: COLOR DATA ====================
    var COLORS = [
        { name: 'RED', hex: '#E53935', emoji: '\uD83D\uDD34' },
        { name: 'BLUE', hex: '#1565C0', emoji: '\uD83D\uDD35' },
        { name: 'GREEN', hex: '#4CAF50', emoji: '\uD83D\uDFE2' },
        { name: 'YELLOW', hex: '#FFD600', emoji: '\uD83D\uDFE1' },
        { name: 'ORANGE', hex: '#FF9800', emoji: '\uD83D\uDFE0' },
        { name: 'PURPLE', hex: '#7B1FA2', emoji: '\uD83D\uDFE3' }
    ];

    // ==================== HELPER: WORD-PICTURE DATA ====================
    var WORD_PICTURES = [
        { word: 'CAT', emoji: '\uD83D\uDC31' },
        { word: 'DOG', emoji: '\uD83D\uDC36' },
        { word: 'SUN', emoji: '\u2600\uFE0F' },
        { word: 'STAR', emoji: '\u2B50' },
        { word: 'TREE', emoji: '\uD83C\uDF33' },
        { word: 'FISH', emoji: '\uD83D\uDC1F' },
        { word: 'MOON', emoji: '\uD83C\uDF19' },
        { word: 'BIRD', emoji: '\uD83D\uDC26' }
    ];

    // ==================== HELPER: 3-LETTER WORDS FOR SPELLING ====================
    var SPELL_WORDS = [
        { word: 'CAT', emoji: '\uD83D\uDC31' },
        { word: 'DOG', emoji: '\uD83D\uDC36' },
        { word: 'SUN', emoji: '\u2600\uFE0F' },
        { word: 'CUP', emoji: '\u2615' },
        { word: 'HAT', emoji: '\uD83E\uDDE2' },
        { word: 'BUS', emoji: '\uD83D\uDE8C' },
        { word: 'BED', emoji: '\uD83D\uDECF\uFE0F' },
        { word: 'PIG', emoji: '\uD83D\uDC37' }
    ];

    // ==================== HELPER: shuffle ====================
    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }

    function genChoices(correct, options) {
        if (options) {
            // string-based choices (already includes correct)
            return shuffle(options);
        }
        // numeric choices
        var wrongs = [];
        var tries = 0;
        while (wrongs.length < 2 && tries < 30) {
            var off = (Math.random() > 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 3));
            var w = correct + off;
            if (w >= 0 && w !== correct && wrongs.indexOf(w) === -1) wrongs.push(w);
            tries++;
        }
        while (wrongs.length < 2) wrongs.push(correct + wrongs.length + 1);
        return shuffle([correct].concat(wrongs));
    }

    // ==================== QUESTION GENERATORS ====================

    // Level 3: Hulk - Identify colors (voice + name + color swatches)
    function genLevel3() {
        var qs = [];
        var pool = shuffle(COLORS).slice(0, 5);
        pool.forEach(function(color) {
            var wrongColors = COLORS.filter(function(c) { return c.name !== color.name; });
            var picked = shuffle(wrongColors).slice(0, 3);
            picked.push(color);
            var shuffled = shuffle(picked);
            qs.push({
                type: 'color',
                prompt: 'Find this color!',
                displayColor: color.hex,
                target: color.name,
                speakWord: color.name,
                choices: shuffled.map(function(c) { return c.name; }),
                colorChoices: shuffled
            });
        });
        return qs;
    }

    // Level 4: Iron Man - Subtraction
    function genLevel4() {
        var qs = [];
        for (var i = 0; i < 5; i++) {
            var a = 3 + Math.floor(Math.random() * 7); // 3-9
            var b = 1 + Math.floor(Math.random() * a);  // 1 to a (result >= 0)
            qs.push({
                type: 'subtract',
                prompt: a + ' - ' + b + ' = ?',
                displayA: a,
                displayB: b,
                target: a - b
            });
        }
        return qs;
    }

    // Level 5: Captain America - Voice + word + pick matching emoji
    function genLevel5() {
        var qs = [];
        var pool = shuffle(WORD_PICTURES).slice(0, 5);
        pool.forEach(function(item) {
            var wrongItems = WORD_PICTURES.filter(function(w) { return w.word !== item.word; });
            var picked = shuffle(wrongItems).slice(0, 2);
            picked.push(item);
            var shuffled = shuffle(picked);
            qs.push({
                type: 'wordpic',
                prompt: 'Find it!',
                displayWord: item.word,
                target: item.emoji,
                speakWord: item.word,
                choices: shuffled.map(function(w) { return w.emoji; }),
                emojiChoices: shuffled
            });
        });
        return qs;
    }

    // Level 6: Black Spider-Man - Voice + word + pick matching emoji (4 choices)
    function genLevel6() {
        var qs = [];
        var pool = shuffle(WORD_PICTURES).slice(0, 5);
        pool.forEach(function(item) {
            var wrongItems = WORD_PICTURES.filter(function(w) { return w.word !== item.word; });
            var picked = shuffle(wrongItems).slice(0, 3);
            picked.push(item);
            var shuffled = shuffle(picked);
            qs.push({
                type: 'wordpic',
                prompt: 'Find it!',
                displayWord: item.word,
                target: item.emoji,
                speakWord: item.word,
                choices: shuffled.map(function(w) { return w.emoji; }),
                emojiChoices: shuffled
            });
        });
        return qs;
    }

    // Level 7: Harry Potter - Spell 3-letter words
    function genLevel7() {
        var qs = [];
        var pool = shuffle(SPELL_WORDS).slice(0, 5);
        pool.forEach(function(item) {
            var letters = item.word.split('');
            var extraLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(function(l) {
                return letters.indexOf(l) === -1;
            });
            var extras = shuffle(extraLetters).slice(0, 4);
            qs.push({
                type: 'spell',
                prompt: 'Spell it! ' + item.emoji,
                displayEmoji: item.emoji,
                displayWord: item.word,
                target: letters,
                pool: shuffle(letters.concat(extras))
            });
        });
        return qs;
    }

    // Level 8: Sonic - Mixed addition and subtraction (1-15)
    function genLevel8() {
        var qs = [];
        for (var i = 0; i < 5; i++) {
            var isAdd = Math.random() > 0.5;
            var a, b, target, prompt;
            if (isAdd) {
                a = 3 + Math.floor(Math.random() * 12); // 3-14
                b = 1 + Math.floor(Math.random() * (15 - a)); // keep sum <= 15
                target = a + b;
                prompt = a + ' + ' + b + ' = ?';
            } else {
                a = 4 + Math.floor(Math.random() * 12); // 4-15
                b = 1 + Math.floor(Math.random() * (a - 1)); // result >= 1
                target = a - b;
                prompt = a + ' - ' + b + ' = ?';
            }
            qs.push({
                type: 'math',
                prompt: prompt,
                target: target
            });
        }
        return qs;
    }

    // ==================== RUN SCENE BUILDERS ====================
    // Each returns an HTML string for the run/intro animation scene

    function runSceneLevel3(cityBG) {
        return '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#1b5e20 0%,#388e3c 50%,#66bb6a 100%);">' +
            cityBG +
            '<div style="position:relative;z-index:10;width:100%;height:100%;">' +
                '<div id="runner" style="position:absolute;bottom:12%;left:-150px;transition:left 3s ease-out;">' + hulkSVG(90) + '</div>' +
                '<div style="position:absolute;top:18%;right:8%;animation:float 1.5s infinite;">' + rockSVG(60) + '</div>' +
                '<div style="position:absolute;top:30%;right:25%;animation:float 2s infinite;">' + rockSVG(45) + '</div>' +
                '<div style="position:absolute;top:14%;right:40%;animation:float 1.8s infinite;">' + rockSVG(55) + '</div>' +
                '<div style="position:absolute;bottom:30%;left:5%;animation:fadeIn 0.8s;">' +
                    '<div class="speech-bubble" style="font-size:22px;">HULK SMASH!<br>Name the colors!</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    function runSceneLevel4(cityBG) {
        return '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#b71c1c 0%,#c62828 40%,#ffd600 100%);">' +
            cityBG +
            '<div style="position:relative;z-index:10;width:100%;height:100%;">' +
                '<div id="runner" style="position:absolute;bottom:12%;left:-150px;transition:left 3s ease-out;">' + ironManSVG(90) + '</div>' +
                '<div style="position:absolute;top:15%;right:10%;animation:float 1.5s infinite;">' + gearSVG(55) + '</div>' +
                '<div style="position:absolute;top:28%;right:30%;animation:float 2s infinite;">' + gearSVG(40) + '</div>' +
                '<div style="position:absolute;top:20%;right:50%;animation:float 1.8s infinite;">' + gearSVG(48) + '</div>' +
                '<div style="position:absolute;bottom:30%;left:5%;animation:fadeIn 0.8s;">' +
                    '<div class="speech-bubble" style="font-size:22px;">Suit damaged!<br>Solve to fix it!</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    function runSceneLevel5(cityBG) {
        return '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#0d47a1 0%,#1565c0 40%,#e53935 100%);">' +
            cityBG +
            '<div style="position:relative;z-index:10;width:100%;height:100%;">' +
                '<div id="runner" style="position:absolute;bottom:12%;left:-150px;transition:left 3s ease-out;">' + capSVG(90) + '</div>' +
                '<div style="position:absolute;top:10%;right:15%;animation:bounce 1s infinite;">' + shieldSVG(60) + '</div>' +
                '<div style="position:absolute;bottom:30%;left:5%;animation:fadeIn 0.8s;">' +
                    '<div class="speech-bubble" style="font-size:22px;">Shield ready!<br>Match the words!</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    function runSceneLevel6(cityBG) {
        return '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#000000 0%,#1a1a2e 40%,#4a148c 100%);">' +
            '<div style="position:relative;z-index:10;width:100%;height:100%;">' +
                '<div id="runner" style="position:absolute;bottom:12%;left:-150px;transition:left 3s ease-out;">' + blackSpideySVG(90) + '</div>' +
                '<div style="position:absolute;top:18%;right:8%;animation:float 1.2s infinite;">' + shadowSVG(55) + '</div>' +
                '<div style="position:absolute;top:30%;right:35%;animation:float 1.6s infinite;">' + shadowSVG(45) + '</div>' +
                '<div style="position:absolute;top:12%;right:55%;animation:float 1.4s infinite;">' + shadowSVG(50) + '</div>' +
                '<div style="position:absolute;bottom:30%;left:5%;animation:fadeIn 0.8s;">' +
                    '<div class="speech-bubble" style="font-size:22px;">Shadows incoming!<br>Read the words!</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    function runSceneLevel7(cityBG) {
        return '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#1a237e 0%,#4a148c 40%,#7b1fa2 100%);">' +
            '<div style="position:relative;z-index:10;width:100%;height:100%;">' +
                // Stars in background
                '<div style="position:absolute;top:5%;left:20%;font-size:24px;animation:float 2s infinite;">&#10024;</div>' +
                '<div style="position:absolute;top:15%;left:60%;font-size:20px;animation:float 2.5s infinite;">&#10024;</div>' +
                '<div style="position:absolute;top:8%;left:80%;font-size:28px;animation:float 1.8s infinite;">&#10024;</div>' +
                '<div id="runner" style="position:absolute;bottom:12%;left:-150px;transition:left 3s ease-out;">' + harryPotterSVG(90) + '</div>' +
                '<div style="position:absolute;top:15%;right:12%;animation:float 1.5s infinite;">' + wandSVG(60) + '</div>' +
                '<div style="position:absolute;bottom:30%;left:5%;animation:fadeIn 0.8s;">' +
                    '<div class="speech-bubble" style="font-size:22px;">Cast a spell!<br>Spell the words!</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    function runSceneLevel8(cityBG) {
        return '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#0d47a1 0%,#1565c0 50%,#ffd600 100%);">' +
            cityBG +
            '<div style="position:relative;z-index:10;width:100%;height:100%;">' +
                '<div id="runner" style="position:absolute;bottom:12%;left:-150px;transition:left 3s ease-out;">' + sonicSVG(90) + '</div>' +
                '<div style="position:absolute;top:12%;right:10%;animation:float 0.8s infinite;">' + ringSVG(35) + '</div>' +
                '<div style="position:absolute;top:20%;right:30%;animation:float 1s infinite;">' + ringSVG(30) + '</div>' +
                '<div style="position:absolute;top:8%;right:50%;animation:float 1.2s infinite;">' + ringSVG(28) + '</div>' +
                '<div style="position:absolute;top:25%;right:65%;animation:float 0.9s infinite;">' + ringSVG(32) + '</div>' +
                '<div style="position:absolute;bottom:30%;left:5%;animation:fadeIn 0.8s;">' +
                    '<div class="speech-bubble" style="font-size:22px;">Gotta go fast!<br>Solve to speed up!</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    // ==================== WIN MESSAGES ====================
    var winMessages = {
        3: function(name) { return 'HULK SMASH! Colors conquered, ' + name + '!'; },
        4: function(name) { return 'Suit repaired! Great job, ' + name + '!'; },
        5: function(name) { return 'Shield hits the target, ' + name + '!'; },
        6: function(name) { return 'Shadows defeated, ' + name + '!'; },
        7: function(name) { return 'Magical spelling, ' + name + '!'; },
        8: function(name) { return 'Super speed finish, ' + name + '!'; }
    };

    var winEmojis = {
        3: '\uD83E\uDEA8',  // rock
        4: '\u2699\uFE0F',  // gear
        5: '\uD83D\uDEE1\uFE0F', // shield
        6: '\uD83C\uDF11',  // new moon (shadow)
        7: '\u2728',         // sparkles
        8: '\u26A1'          // lightning
    };

    // ==================== CHARACTER SVG GETTERS ====================
    var characterSVGs = {
        3: hulkSVG,
        4: ironManSVG,
        5: capSVG,
        6: blackSpideySVG,
        7: harryPotterSVG,
        8: sonicSVG
    };

    // ==================== PUBLIC API ====================
    return {
        introConfigs: introConfigs,
        generators: {
            3: genLevel3,
            4: genLevel4,
            5: genLevel5,
            6: genLevel6,
            7: genLevel7,
            8: genLevel8
        },
        runScenes: {
            3: runSceneLevel3,
            4: runSceneLevel4,
            5: runSceneLevel5,
            6: runSceneLevel6,
            7: runSceneLevel7,
            8: runSceneLevel8
        },
        winMessages: winMessages,
        winEmojis: winEmojis,
        characterSVGs: characterSVGs,
        genChoices: genChoices,
        shuffle: shuffle,
        // Expose SVG functions for the assembler
        hulkSVG: hulkSVG,
        ironManSVG: ironManSVG,
        capSVG: capSVG,
        blackSpideySVG: blackSpideySVG,
        harryPotterSVG: harryPotterSVG,
        sonicSVG: sonicSVG,
        shieldSVG: shieldSVG,
        rockSVG: rockSVG,
        gearSVG: gearSVG,
        shadowSVG: shadowSVG,
        wandSVG: wandSVG,
        ringSVG: ringSVG
    };
})();
