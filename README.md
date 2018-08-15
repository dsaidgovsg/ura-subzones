# URA Subzones
Simple library for dealing with URA subzones

## Example use

```sh
$ npm install ura-subzones # (not available yet)
OR
$ npm install git+ssh://git@github.com/datagovsg/ura-subzones.git
```

```js
const subzones = require('ura-subzones')
subzones.getSubzones() // Returns GeoJSON FeatureCollection of all subzones
subzones.getSubzoneAtPoint([103.673784, 1.256942]).properties.nice_name // "Jurong Island And Bukom"
```

## Data Source

Data is sourced from the [2014 Master Plan Subzone Boundaries](https://data.gov.sg/dataset/master-plan-2014-subzone-boundary-web).
The data has been converted from KML and saved in [data/subzones.js](data/subzones.js) as GeoJSON.

The subzone names in the original dataset contained contractions and were in **UPPERCASE**. We have
converted the names to **Title Case** and saved the conversion as the `nice_name` property.

```js
subzones.getSubzoneAtPoint([103.777475, 1.295793]).properties.nice_name // "National University Of Singapore
subzones.getSubzoneAtPoint([103.777475, 1.295793]).properties.name // "NATIONAL UNIVERSITY OF S'PORE
``` 

List of conversions can be found at [scripts/convertToGeojson.js](scripts/convertToGeojson.js)

The original dataset is licenced under the Singapore Open Data Licence.

