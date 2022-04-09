/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

function run() {
    // console.log("doPrune", process.cwd());
    return new Promise(function (resolve) {
        const { main, module, ...others } = JSON.parse(fs.readFileSync('package.json'))
        delete others['scripts']
        delete others['devDependencies']
        delete others['description']

        // package.json 캐시를 invalid 하기 위해 현재시간을 넣는다
        const description = `react-epic-spinner for mui5, build at ${new Date().toISOString()}`
        const newData = { ...others, description, main: 'index.js' }
        fs.writeFileSync('dist/package.json', JSON.stringify(newData, undefined, 4), { encoding: 'utf-8' })
        resolve(true)
    })
}

async function start() {
    await run()
}

start()
