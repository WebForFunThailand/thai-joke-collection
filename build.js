const fs = require('fs')
const path = require('path')

const files = []
fs.readdirSync(path.join(__dirname, 'jokes')).forEach(file => {
    if (file.includes('.html')) {
        files.push(file)
    }
})

let htmlTemplateContent = ``
files.forEach(filename => {
    const content = fs.readFileSync(path.join(__dirname, 'jokes', filename)).toString()

    htmlTemplateContent += `
        <div style="padding: 10px; border-radius: 5px; border: 1px solid #ccc; margin-bottom: 30px;">
            ${content}
        </div> 
    `;
})

let htmlTemplate = fs
    .readFileSync(path.join(__dirname, 'template.html'))
    .toString()
    .replace('#include-template', htmlTemplateContent)

fs.writeFileSync('index.html', htmlTemplate)
console.log(`[Log] index.html has been generated`)
