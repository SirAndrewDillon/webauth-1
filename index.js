const server = require('./api/server.js')

const port = process.env.PORT || 4949
server.listen(port, () =>
	console.log(`\n ☻☻☻ Riding The Storm Out On Port ${port} ☻☻☻ \n`)
)
