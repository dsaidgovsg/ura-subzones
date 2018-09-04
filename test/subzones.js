const index = require('../index')

describe("Simple tests on subzones", () => {
  it("Should match a subzone correctly", async () => {
    expect(index.getSubzoneAtPoint([103.893187, 1.302925]).properties.niceName)
      .toBe("Mountbatten")

    expect(index.getSubzoneAtPoint([103.673784, 1.256942]).properties.niceName)
      .toBe("Jurong Island And Bukom")

    expect(index.getSubzoneAtPoint([103.777475, 1.295793]).properties.niceName)
      .toBe("National University Of Singapore")
  })
})
