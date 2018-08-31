const rickManipulationFunctions = require("./rickManipulation");
const { expect } = require("chai");

const dadosParaTeste = {
  // Aqui só colocamos um Rick que sabemos que é o que a gente quer
  rickValido: {
    name: "Rick Sanchez",
    dimension: "C-137",
    family: [
      {
        name: "Morty Smith",
        age: 14
      },
      {
        name: "Beth Sanchez",
        age: 30
      },
      {
        name: "Jerry Smith",
        age: 30
      },
      {
        name: "Summer Smith",
        age: 17
      }
    ]
  },
  // e outro que não é o que a gente quer!
  rickInvalido: {
    name: "Rick Sanchez",
    dimension: "J19ζ7",
    family: []
  },
  ricks: [
    {
      name: "Rick Sanchez",
      dimension: "C-137",
      family: [
        {
          name: "Morty Smith",
          age: 14
        },
        {
          name: "Beth Sanchez",
          age: 30
        },
        {
          name: "Jerry Smith",
          age: 30
        },
        {
          name: "Summer Smith",
          age: 17
        }
      ]
    },
    {
      name: "Rick Sanchez",
      dimension: "J19ζ7",
      family: []
    },
    {
      name: "Rick Sanchez",
      dimension: "C-500",
      family: [
        {
          name: "Morty Smith",
          age: 14
        },
        {
          name: "Beth Sanchez",
          age: 30
        },
        {
          name: "Jerry Smith",
          age: 30
        },
        {
          name: "Summer Smith",
          age: 17
        }
      ]
    },
    {
      name: "Rick Sanchez",
      dimension: "G1047-3",
      family: [
        {
          name: "Morty Smith",
          age: 14
        },
        {
          name: "Beth Sanchez",
          age: 30
        },
        {
          name: "Jerry Smith",
          age: 30
        },
        {
          name: "Summer Smith",
          age: 17
        }
      ]
    }
  ]
};

describe("Testando funções de manipulação de Ricks", () => {
  describe("Testando a função toCountIfRickHaveAFamily", () => {
    it("Deve retornar true se o array de family não for vazio", () => {
      const resultado = rickManipulationFunctions.toCountIfRickHaveAFamily(
        dadosParaTeste.rickValido
      );

      expect(resultado).to.be.equal(true);
    });

    it("Deve retornar false se o array de family for vazio", () => {
      const resultado = rickManipulationFunctions.toCountIfRickHaveAFamily(
        dadosParaTeste.rickInvalido
      );

      expect(resultado).to.be.equal(false);
    });
  });

  describe("Testando a função toPickOnlyTheRicksNameAndDimension", () => {
    it("Deve retornar apenas um objeto com as chaves name e dimension", () => {
      const resultado = rickManipulationFunctions.toPickOnlyTheRicksNameAndDimension(
        dadosParaTeste.rickValido
      );

      expect(resultado).to.have.ownProperty("name");
      expect(resultado).to.have.ownProperty("dimension");
      expect(resultado).to.not.have.ownProperty("family");
    });
  });

  describe("Testando a função retriveOnlyTheRicksWithFamily", () => {
    it("Deve retornar apenas os Ricks com familias", () => {
      const dadosParaEsseTeste = [
        dadosParaTeste.rickValido,
        dadosParaTeste.rickInvalido
      ];
      const resultado = rickManipulationFunctions.retriveOnlyTheRicksWithFamily(
        dadosParaEsseTeste
      );

      expect(resultado)
        .to.have.ownProperty("length")
        .and.to.be.equal(1);
    });

    describe("Deve retornar objetos com apenas as chaves name e dimension", () => {
      const resultado = rickManipulationFunctions.retriveOnlyTheRicksWithFamily(
        dadosParaTeste.ricks
      );

      resultado.forEach(resultado => {
        it(`Para o Rick da dimensão ${resultado.dimension}`, () => {
          expect(resultado).to.have.ownProperty("name");
          expect(resultado).to.have.ownProperty("dimension");
          expect(resultado).to.not.have.ownProperty("family");
        });
      });
    });

  });
});
