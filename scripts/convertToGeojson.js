const DOMParser = require('xmldom').DOMParser
const tj = require('@mapbox/togeojson')
const fs = require('fs')
const assert = require('assert')

// The KML file should be downloaded from
// https://data.gov.sg/dataset/2998fad4-ef95-483c-bdf8-a50437446681/download
// Unzip the file and save it to `data`

const kml = new DOMParser().parseFromString(fs.readFileSync(__dirname + '/../data/MP14_SUBZONE_WEB_PL.kml', 'utf8'))
const converted = tj.kml(kml)

for (let feature of converted.features) {
  feature.properties.niceName = feature.properties.name.toLowerCase()
    .replace(/(?:^| )[a-z]/g, s => s.toUpperCase()) // Convert names to title case
    .replace('S\'pore', 'Singapore') // Replace known contractions
    .replace('(mp)', '(MP)') // Replace known contractions
  console.log(feature.properties.niceName)
}

fs.writeFileSync(__dirname + '/../data/subzones.json', JSON.stringify(converted, null, 2))
