const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  var server;
  var testUsers;

  // Test for all Users
  it('Gets All', (done) => {
    User.all(
      (err) => {
        throw new Error(err);
      },
      (users) => {
        this.testUsers = users;
        expect(this.testUsers.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a User
  it('Adds a new User', (done) => {

    // Generate a fake User with a random name
    const fakeUser = { name: faker.name.firstName() };

    // Call user model for adding
    User.add(fakeUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {

        // User.name returned from model should match user.name supplied
        expect(user.name).to.be.equal(fakeUser.name);
        done();
      }
    );
  });

});
