console.log('fetching doofenschmerz');

async function catchPhrase() {
    const p = await fetch('https://api.kanye.rest');
    const satze = await p.json();
    document.getElementById('doof').innerHTML = satze['quote'];
}

catchPhrase();