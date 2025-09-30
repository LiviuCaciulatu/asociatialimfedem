const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const eventsJsonPath = path.join(root, 'public', 'assets', 'json', 'events.json');
const eventsDir = path.join(root, 'public', 'assets', 'events');

function isImage(name) {
  return /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(name);
}

function main() {
  if (!fs.existsSync(eventsJsonPath)) {
    console.error('events.json not found at', eventsJsonPath);
    process.exit(1);
  }

  const events = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));

  const folders = fs.existsSync(eventsDir)
    ? fs.readdirSync(eventsDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)
    : [];

  const folderMap = {};
  for (const f of folders) {
    const files = fs.readdirSync(path.join(eventsDir, f)).filter(isImage).sort();
    folderMap[f] = files.map(fn => `/assets/events/${f}/${fn}`);
  }

  const updated = events.map(ev => {
    const images = folderMap[ev.id] || (ev.image ? [ev.image] : []);
    return { ...ev, images };
  });

  fs.writeFileSync(eventsJsonPath, JSON.stringify(updated, null, 2) + '\n', 'utf8');
  console.log('events.json updated with images arrays.');
}

main();
