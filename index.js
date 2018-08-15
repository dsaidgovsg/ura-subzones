const subzones = require('./data/subzones.json')
const geolib = require('geolib')
const assert = require('assert')

module.exports = {
  getSubzones () {
    return subzones
  },

  getSubzoneAtPoint (latlng) {
    /**
     * Determine if a polygon (MultiLinearRing) contains a latlng
     * @param {MultiLinearRing} linearRings
     * @param {LatLng} latlng
     */
    function polygonContains(linearRings, latlng) {
      return linearRings
        .filter((linearRing, index) => geolib.isPointInside(latlng, linearRing))
        .length % 2 === 1
    }

    return subzones.features.find(subzone => {
      if (subzone.geometry.type === 'Polygon') {
        return polygonContains(subzone.geometry.coordinates, latlng)
      } else if (subzone.geometry.type === 'GeometryCollection') {
        return subzone.geometry.geometries.some(geometry =>
          polygonContains(geometry.coordinates, latlng))
      } else {
        assert(`Unhandled geometry type ${subzone.geometry.type}`)
      }
    })
  }
}
