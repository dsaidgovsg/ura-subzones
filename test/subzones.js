const index = require('../index')

describe("Simple tests on subzones", () => {
  it("Should match a subzone correctly", async () => {
    expect(index.getSubzoneAtPoint([103.893187, 1.302925]).properties.nice_name)
      .toBe("Mountbatten")

    expect(index.getSubzoneAtPoint([103.673784, 1.256942]).properties.nice_name)
      .toBe("Jurong Island And Bukom")

    expect(index.getSubzoneAtPoint([103.777475, 1.295793]).properties.nice_name)
      .toBe("National University Of Singapore")
  })
})
