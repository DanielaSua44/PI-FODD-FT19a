const { Recipe, conn } = require('../../src/db.js');
//const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');
var chaiAsPromised = require("chai-as-promised");
var chai = require("chai");


chai.use(chaiAsPromised);
chai.should()


describe('Model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Recipe', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('Recipe atributes', () => {
      describe('name', () => {
        it('should throw an error if name is null', () => {
          Recipe.create({
            name: 'Lasaña',
            summary: 'valid summary',
            id: uuidv4()
          })
            .then(() => done(new Error('It requires a valid name')))
            .catch(() => done());
        });
        it('should work when its a valid name', () => {
          Recipe.create({
             name: 'Lasaña',
             summary: 'valid summary', 
             id: uuidv4() 
            }).should.be.fulfilled;
        });
      });
      describe('summary', () => {
        it('should be rejected if summary is null', () => {
          return Recipe.create({
            name: 'Humita',
            id: uuidv4()
          }).should.be.rejected;
        });
        it('should work when its a valid summary', () => {
          return Recipe.create({
            name: 'Humita',
            summary: 'valid summary',
            id: uuidv4()
          }).should.be.rejected;
        });
      })

      describe('id', () => {
        it('should be rejected if id is null', () => {
          return Recipe.create({
            name: 'Humita',
            summary: 'valid summary',
          }).should.be.rejected;
        });
        it('should work when its a valid id', () => {
          return Recipe.create({
            name: 'Humita', 
            summary: 'valid summary', 
          }).should.be.rejected;
        });
      })

      describe('score', () => {
        it('should be rejected if score is < 0', () => {
          return Recipe.create({
            name: 'Humita',
            summary: 'valid summary',
            score: -5 
          }).should.be.rejected;
        });
        it('should be rejected if rating is > 100', () => {
          return Recipe.create({
            name: 'Humita',
            summary: 'valid summary',
            score: 140 
          }).should.be.rejected;
        });
        it('should work when its a valid score', () => {
          return Recipe.create({
            name: 'Humita', 
            summary: 'valid summary', 
            id: uuidv4(),
            score: 80 
          }).should.be.rejected;
        });
      })

      describe('healtScore', () => {
        it('should be rejected if healtScore is < 0', () => {
          return Recipe.create({
            name: 'Humita',
            summary: 'valid summary',
            healtScore:-5
          }).should.be.rejected;
        });
        it('should be rejected if healtScore is > 100', () => {
          return Recipe.create({
            name: 'Humita',
            summary: 'valid summary',
            score: 140 ,
            healtScore:140
          }).should.be.rejected;
        });
        it('should work when its a valid healtScore', () => {
          return Recipe.create({
            name: 'Humita', 
            summary: 'valid summary', 
            id: uuidv4(),
            healtScore: 80 
          }).should.be.rejected;
        });
      })
    });
  })
});
