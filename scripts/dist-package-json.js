/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require('shelljs')
const fs = require('fs')

function updatePackageDistJson() {
    // console.log("doPrune", process.cwd());
    return new Promise(function (resolve) {
        const fromPkg = JSON.parse(fs.readFileSync('package.json'))

        delete fromPkg['scripts']
        delete fromPkg['devDependencies']
        fromPkg['main'] = 'cjs/index.js'
        fromPkg['module'] = 'es/index.js'

        // package.json 캐시를 invalid 하기 위해 현재시간을 넣는다
        fromPkg['description'] = `react-epic-spinner for mui5, build at ${new Date().toISOString()}`
        const newData = { ...fromPkg }
        fs.writeFileSync('dist/package.json', JSON.stringify(newData, undefined, 4), { encoding: 'utf-8' })
        resolve(true)
    })
}

async function main() {
    shell.rm('-rf', 'dist')
    shell.mkdir('dist')
    shell.cp('-rf', './build/cjs', 'dist/')
    shell.cp('-rf', './build/es', 'dist/')
    updatePackageDistJson()
    shell.cp('-rf', 'README.md', 'dist/')
}

main()
