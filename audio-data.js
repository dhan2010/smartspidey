// Smart Spidey TTS Audio System
// Uses Web Speech API for text-to-speech with kid-friendly voice settings
// Generated: 2026-02-14

// All game text strings mapped by key
var AUDIO_TEXTS = {
  // Intro
  "hey_whats_your_name": "Hey! What is your name?",
  "awesome_lets_go": "Awesome! Let's go save someone!",

  // Level announcements
  "level_1": "Level 1",
  "level_2": "Level 2",
  "level_3": "Level 3",
  "level_4": "Level 4",
  "level_5": "Level 5",
  "level_6": "Level 6",
  "level_7": "Level 7",
  "level_8": "Level 8",

  // Level names
  "save_the_cat": "Save the Cat!",
  "count_the_villains": "Count the Villains!",
  "smash_the_rocks": "Smash the Rocks!",
  "fix_the_suit": "Fix the Suit!",
  "shield_throw": "Shield Throw!",
  "shadow_chase": "Shadow Chase!",
  "magic_spell": "Magic Spell!",
  "speed_run": "Speed Run!",

  // Level 1 prompts
  "tap_letter_a": "Tap the letter A!",
  "tap_letter_m": "Tap the letter M!",
  "tap_letter_s": "Tap the letter S!",
  "spell_your_name": "Spell your name!",
  "spell_mama": "Spell MAMA!",

  // Level 2 prompts
  "how_many_goblins": "How many goblins?",
  "how_many_spiders": "How many spiders?",

  // Level 3 - Colors
  "what_color_is_this": "What color is this?",
  "red": "Red",
  "blue": "Blue",
  "green": "Green",
  "yellow": "Yellow",
  "orange": "Orange",
  "purple": "Purple",

  // Level 4 - Subtraction
  "solve_this": "Solve this!",

  // Level 5 - Word matching
  "match_the_word": "Match the word!",
  "cat": "Cat",
  "dog": "Dog",
  "sun": "Sun",
  "star": "Star",
  "tree": "Tree",

  // Level 6 - Multiplication
  "multiply": "Multiply!",

  // Level 7 - Spelling
  "spell_the_word": "Spell the word!",
  "cup": "Cup",
  "hat": "Hat",

  // Feedback
  "great_job": "Great job!",
  "amazing": "Amazing!",
  "awesome": "Awesome!",
  "oops_try_again": "Oops! Try again!",

  // Level completion
  "level_complete": "Level Complete!",

  // Victory
  "super_hero": "Super Hero!",

  // Replay
  "play_again": "Play Again?",

  // Run scene lines
  "help_me": "Help me!",
  "oh_no_goblins": "Oh no! Goblins! Let's count them!",
  "hulk_smash": "Hulk needs help! Smash those rocks!",
  "suit_is_broken": "The suit is broken! Help fix it!",
  "throw_the_shield": "Throw the shield! Stop the bad guys!",
  "catch_the_shadow": "Catch the shadow! Don't let it escape!",
  "cast_the_spell": "Cast the spell! Say the magic words!",
  "run_fast": "Run fast! Beat the clock!"
};

// TTS engine using Web Speech API
var _speechVoice = null;
var _speechReady = false;

function _initSpeechVoice() {
  if (!window.speechSynthesis) return;
  var voices = speechSynthesis.getVoices();
  if (voices.length === 0) return;

  // Prefer kid-friendly female English voices
  var preferred = [
    'samantha', 'karen', 'victoria', 'fiona', 'moira',
    'google us english', 'google uk english female',
    'microsoft zira', 'microsoft hazel'
  ];

  // Try preferred voices first
  for (var i = 0; i < preferred.length; i++) {
    for (var j = 0; j < voices.length; j++) {
      if (voices[j].name.toLowerCase().indexOf(preferred[i]) !== -1) {
        _speechVoice = voices[j];
        _speechReady = true;
        return;
      }
    }
  }

  // Fall back to any English voice
  for (var k = 0; k < voices.length; k++) {
    if (voices[k].lang && voices[k].lang.indexOf('en') === 0) {
      _speechVoice = voices[k];
      _speechReady = true;
      return;
    }
  }

  // Use default
  _speechReady = true;
}

// Initialize voices (they load async on some browsers)
if (typeof window !== 'undefined' && window.speechSynthesis) {
  _initSpeechVoice();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = _initSpeechVoice;
  }
}

// Play audio by key - looks up text from AUDIO_TEXTS
function speak(key) {
  var text = AUDIO_TEXTS[key] || key;
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  // Cancel any ongoing speech
  speechSynthesis.cancel();

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;   // Slightly slower for kids
  utterance.pitch = 1.3;   // Higher pitch, more kid-friendly
  utterance.volume = 1.0;

  if (_speechVoice) {
    utterance.voice = _speechVoice;
  }

  speechSynthesis.speak(utterance);
  return utterance;
}

// Speak arbitrary text (for dynamic content like player name, math equations)
function speakText(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  speechSynthesis.cancel();

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  utterance.pitch = 1.3;
  utterance.volume = 1.0;

  if (_speechVoice) {
    utterance.voice = _speechVoice;
  }

  speechSynthesis.speak(utterance);
  return utterance;
}

// Stop any ongoing speech
function speakStop() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    speechSynthesis.cancel();
  }
}
