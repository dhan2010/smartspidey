#!/usr/bin/env node
// Generate TTS audio for Smart Spidey game using ElevenLabs API
// Voice: Jessica (cgSgspJ2msm6clMCkdW9) - Playful, Bright, Warm - perfect for kids

const fs = require('fs');
const https = require('https');

const API_KEY = 'sk_8ad97c2d057126c57c72e3cac1659c7c6d41a023544d2aec';
const VOICE_ID = 'cgSgspJ2msm6clMCkdW9'; // Jessica
const OUTPUT_FILE = '/Users/dimakhan/Projects/smartspidey/audio-data.js';

// All game text strings keyed by identifier
const TEXTS = {
  // Intro
  hey_whats_your_name: "Hey! What is your name?",
  awesome_lets_go: "Awesome! Let's go save someone!",

  // Level announcements
  level_1: "Level 1",
  level_2: "Level 2",
  level_3: "Level 3",
  level_4: "Level 4",
  level_5: "Level 5",
  level_6: "Level 6",
  level_7: "Level 7",
  level_8: "Level 8",

  // Level names
  save_the_cat: "Save the Cat!",
  count_the_villains: "Count the Villains!",
  smash_the_rocks: "Smash the Rocks!",
  fix_the_suit: "Fix the Suit!",
  shield_throw: "Shield Throw!",
  shadow_chase: "Shadow Chase!",
  magic_spell: "Magic Spell!",
  speed_run: "Speed Run!",

  // Level 1 prompts
  tap_letter_a: "Tap the letter A!",
  tap_letter_m: "Tap the letter M!",
  tap_letter_s: "Tap the letter S!",
  spell_your_name: "Spell your name!",
  spell_mama: "Spell MAMA!",

  // Level 2 prompts
  how_many_goblins: "How many goblins?",
  how_many_spiders: "How many spiders?",

  // Level 3 - Colors
  what_color_is_this: "What color is this?",
  red: "Red",
  blue: "Blue",
  green: "Green",
  yellow: "Yellow",
  orange: "Orange",
  purple: "Purple",

  // Level 4 - Subtraction
  solve_this: "Solve this!",

  // Level 5 - Word matching
  match_the_word: "Match the word!",
  cat: "Cat",
  dog: "Dog",
  sun: "Sun",
  star: "Star",
  tree: "Tree",

  // Level 6 - Multiplication
  multiply: "Multiply!",

  // Level 7 - Spelling 3-letter words
  spell_the_word: "Spell the word!",
  cup: "Cup",
  hat: "Hat",

  // Feedback
  great_job: "Great job!",
  amazing: "Amazing!",
  awesome: "Awesome!",
  oops_try_again: "Oops! Try again!",

  // Level completion
  level_complete: "Level Complete!",

  // Victory
  super_hero: "Super Hero!",

  // Replay
  play_again: "Play Again?",

  // Run scene lines
  help_me: "Help me!",
  oh_no_goblins: "Oh no! Goblins! Let's count them!",
  hulk_smash: "Hulk needs help! Smash those rocks!",
  suit_is_broken: "The suit is broken! Help fix it!",
  throw_the_shield: "Throw the shield! Stop the bad guys!",
  catch_the_shadow: "Catch the shadow! Don't let it escape!",
  cast_the_spell: "Cast the spell! Say the magic words!",
  run_fast: "Run fast! Beat the clock!",
};

function generateSpeech(text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: text,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: {
        stability: 0.75,
        similarity_boost: 0.75,
        style: 0.4,
        use_speaker_boost: true
      }
    });

    const options = {
      hostname: 'api.elevenlabs.io',
      port: 443,
      path: `/v1/text-to-speech/${VOICE_ID}`,
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errBody = '';
        res.on('data', (d) => errBody += d);
        res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${errBody}`)));
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const base64 = buffer.toString('base64');
        resolve('data:audio/mpeg;base64,' + base64);
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const keys = Object.keys(TEXTS);
  const total = keys.length;
  const audio = {};

  console.log(`Generating ${total} audio clips with ElevenLabs (Jessica voice)...`);
  console.log('');

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const text = TEXTS[key];
    process.stdout.write(`[${i + 1}/${total}] "${text}" ... `);

    try {
      audio[key] = await generateSpeech(text);
      const sizeKB = Math.round(Buffer.from(audio[key].split(',')[1], 'base64').length / 1024);
      console.log(`OK (${sizeKB} KB)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
      // Retry once after a short delay
      await sleep(2000);
      try {
        process.stdout.write(`  Retrying ... `);
        audio[key] = await generateSpeech(text);
        console.log('OK');
      } catch (err2) {
        console.log(`FAILED again: ${err2.message}`);
        audio[key] = null;
      }
    }

    // Rate limit: ~3 requests/sec for free tier
    if (i < keys.length - 1) await sleep(400);
  }

  // Build output JS file
  let output = '// Auto-generated TTS audio data for Smart Spidey\n';
  output += '// Voice: Jessica (ElevenLabs) - Playful, Bright, Warm\n';
  output += '// Generated: ' + new Date().toISOString() + '\n\n';
  output += 'var AUDIO = {\n';

  const entries = Object.keys(audio).filter(k => audio[k] !== null);
  entries.forEach((key, idx) => {
    const comma = idx < entries.length - 1 ? ',' : '';
    // Truncate the data URI for readability in the source, but keep full value
    output += `  "${key}": "${audio[key]}"${comma}\n`;
  });
  output += '};\n\n';

  // Add speak() helper function
  output += '// Play audio by key\n';
  output += 'function speak(key) {\n';
  output += '  if (!AUDIO[key]) return;\n';
  output += '  try {\n';
  output += '    var a = new Audio(AUDIO[key]);\n';
  output += '    a.play().catch(function() {});\n';
  output += '    return a;\n';
  output += '  } catch(e) {}\n';
  output += '}\n';

  fs.writeFileSync(OUTPUT_FILE, output);

  const fileSizeMB = (Buffer.byteLength(output) / (1024 * 1024)).toFixed(2);
  console.log('');
  console.log(`Done! Written ${entries.length}/${total} clips to ${OUTPUT_FILE} (${fileSizeMB} MB)`);

  const failed = Object.keys(audio).filter(k => audio[k] === null);
  if (failed.length > 0) {
    console.log(`Failed clips: ${failed.join(', ')}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
