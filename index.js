const server = require('./api/server.js')

/* --------------------------- Makes port dynamic --------------------------- */
const port = process.env.PORT || 4949
server.listen(port, () =>
	console.log(`\n ☻☻☻ Riding The Storm Out On Port ${port} ☻☻☻ \n`)
)
