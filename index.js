const PdfPrinter = require('pdfmake')

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Bold.ttf',
    italic: 'fonts/Roboto-Italic.ttf',
    bolditalic: 'fonts/Roboto-BoldItalic.ttf'
  }
}

const printer = new PdfPrinter(fonts)
const docDefinition = {
  content: 'FullStack Master'
}

const pdf = printer.createPdfKitDocument(docDefinition)
const fs = require('fs')
pdf.pipe(fs.createWriteStream('doc.pdf'))
pdf.end()