const PdfPrinter = require('pdfmake')

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Bold.ttf',
    italic: 'fonts/Roboto-Italic.ttf',
    bolditalic: 'fonts/Roboto-BoldItalic.ttf'
  }
}

const lines = []
lines.push([
  { text: 'Nome', style: 'header' },
  { text: 'E-mail', style: 'header' },
  { text: 'Situação', style: 'header' }
])

for (let i = 0; i < 50; i++) {
  let ativo = 'Ativo'
  if (i % 2 == 0) {
    ativo = { text: 'Inativo', style: 'inativo' }
  }
  lines.push(['Usuario ' + i, 'user' + i + '@email.com', ativo])
}

const printer = new PdfPrinter(fonts)
const docDefinition = {
  content: [
    { text: 'Fullstack Master' },
    {
      table: {
        width: ['*', '*', 100],
        body: lines
      }
    }
  ],
  styles: {
    header: {
      fontSize: 16,
      bold: true
    },
    inativo: {
      fontSize: 12,
      bold: true
    }
  }
}

const pdf = printer.createPdfKitDocument(docDefinition)
const fs = require('fs')
pdf.pipe(fs.createWriteStream('doc.pdf'))
pdf.end()