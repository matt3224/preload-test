import fetch from 'node-fetch';

export function get(req, res) {

    res.writeHead(200, {
		'Content-Type': 'application/json'
	});

    fetch('https://pokeapi.co/api/v2/pokemon/' + req.query.pokemon)
        .then(r => res.end( r.json() ))
}
