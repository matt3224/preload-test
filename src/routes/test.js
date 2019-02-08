import fetch from 'node-fetch';

const contents = JSON.stringify({
		title: 'aaaa',
		slug: 'bbbb'
});

export function get(req, res) {

    res.writeHead(200, {
		'Content-Type': 'application/json'
	});

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(r => r.json())
        .then(r => {
            console.log(r)
        });

    res.end(contents);
}
