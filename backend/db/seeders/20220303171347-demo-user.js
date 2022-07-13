'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        email: 'yoo@gmail.com',
        username: 'Demo-user',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'ayo@gmail.com',
        username: 'StrawberryFam',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'yoot@gmail.com',
        username: 'theDude',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'Alivia21',
        hashedPassword: '$2a$10$H/XjA9rrcFVIDBQlfiWtBe1J21AwN9S3WYQkmksNX3iDccw68eq1m',
        email: 'Miguel7@yahoo.com'
      } ,
      {
        username: 'Adrienne_Hahn',
        hashedPassword: '$2a$10$pKg6u.1wZCersav.ixkaL.IbqMu29Xx98YsH746l93Tjo7LZH0eXi',
        email: 'Breanna.Cremin@yahoo.com'
      } ,
      {
        username: 'Effie.Bradtke19',
        hashedPassword: '$2a$10$Ap4CXYae0Dv7.f5.4I08jOEFQTfoX2KymxZYgzP25VupAeBOU/b2K',
        email: 'Adell_Gleichner66@gmail.com'
      } ,
      {
        username: 'Jamison64',
        hashedPassword: '$2a$10$Wiqr5GHmJaN43udAdvH0Du9laqEp2ync7d5jBW6aC.rbb9T.oD7UO',
        email: 'Orland71@gmail.com'
      } ,
      {
        username: 'Tiara47',
        hashedPassword: '$2a$10$ESrsOKcU3VB6cmk.LdCEHOoroHfUZQW0fPAH5F7vH6TNUreQ8yz3m',
        email: 'Gloria.Boehm@yahoo.com'
      } ,
      {
        username: 'Evalyn.Welch',
        hashedPassword: '$2a$10$/F1s1o/GAaotlGPlGxIqUuIBx/z20a14uSd0KHvm/MRVOmFOvDwcC',
        email: 'Hardy.Kris77@yahoo.com'
      } ,
      {
        username: 'Amparo_Wiegand39',
        hashedPassword: '$2a$10$BP.3LZovFPaYPdxwMcI4YeL4ncGWcCmoVxbE3lUnrASAVr9n/8ArS',
        email: 'Pierce.Hilll@gmail.com'
      } ,
      {
        username: 'Lucienne.Stracke26',
        hashedPassword: '$2a$10$zTZdMSQFEFgE7LdfgXne6.lXiag8iIjr420oFiRBAmGq1KYlbFoWK',
        email: 'Toy12@gmail.com'
      } ,
      {
        username: 'General.Hermiston',
        hashedPassword: '$2a$10$ABeMkfF6cwzhE20oo1H5m.8R4/eI2AxIeuFS3Yrs3d2E3LsJDLuke',
        email: 'Dale60@yahoo.com'
      } ,
      {
        username: 'Ayla87',
        hashedPassword: '$2a$10$5hEVjuAbxMF5etqw6mnH2OsZgACAzEXrq7xafzsemreQatN6BM2Sa',
        email: 'Philip.Wilkinson@gmail.com'
      } ,
      {
        username: 'Natalie_Fay79',
        hashedPassword: '$2a$10$DeWZP.O7B/ysrbPWT3n3K.wVQk/cOBEL0RnPzvbmoQzccxNp2cyqa',
        email: 'Kira.Boyle29@yahoo.com'
      } ,
      {
        username: 'Garland6',
        hashedPassword: '$2a$10$Z8UghKIANxdaAADZ7ZbaHefvrsdUHriU/JlqcYDLuc6EXipBEqNem',
        email: 'Kayla_Gislason9@gmail.com'
      } ,
      {
        username: 'Neha_Torp46',
        hashedPassword: '$2a$10$Tw2WGujsc1wAgU2Xw7AV4erBujDIfv86HPuV7PgLMXXsG2ElTmUki',
        email: 'Isabell_Crooks16@hotmail.com'
      } ,
      {
        username: 'Chadrick_Frami',
        hashedPassword: '$2a$10$Rpr88/IUCDYD8W7hau8b3upFP8PGqmRw/CKOIEWCYOwrDZ.EP0nNC',
        email: 'Ara_Krajcik83@hotmail.com'
      } ,
      {
        username: 'Alejandra_Ledner',
        hashedPassword: '$2a$10$nGz2gYddjm1MUVoZXpK3EuTQtYDnnzMXYP2NfAUXoVqmYCtkw60gm',
        email: 'Rasheed.Mayer98@yahoo.com'
      } ,
      {
        username: 'Frederique.Dach',
        hashedPassword: '$2a$10$djj.NPoYUwwyPVH9GCrj4ufEByvqGbD7v9JaJmrO9WZvKay8.u9MW',
        email: 'Coralie49@hotmail.com'
      } ,
      {
        username: 'Brandyn_Hegmann63',
        hashedPassword: '$2a$10$/rFqyDGovXx7X0T8PAej4.lTY8ENIzN58uK2LsiPUOFUzwk7gQ/aS',
        email: 'Jayde89@yahoo.com'
      } ,
      {
        username: 'Irving69',
        hashedPassword: '$2a$10$5egNjQoHb2WPABPYeDMx1OYhhmEMCS1WCNDITFV.QoZELhWjoBmpO',
        email: 'Veronica.Abshire65@gmail.com'
      } ,
      {
        username: 'Dejuan_Ratke7',
        hashedPassword: '$2a$10$NK5TLKfDBJzIUslNwIBA1O3RoIlPWKBZNTqb0vxJQxt6PdNWm5aVC',
        email: 'Ethan87@yahoo.com'
      } ,
      {
        username: 'Kelly_Lowe98',
        hashedPassword: '$2a$10$fzAYchWHHhpspC8DmPOZ/.o6njMIzfIdP2Jg5f1xuZOhQGNsfhpMG',
        email: 'Fabiola74@hotmail.com'
      } ,

      {
        username: 'Giraffage',
        hashedPassword: bcrypt.hashSync('password'),
        email: 'giraffage@hotmail.com'
      } ,

      {
        username: 'Kaytranada',
        hashedPassword: bcrypt.hashSync('password'),
        email: 'kaytranada@hotmail.com'
      } ,

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-user', 'StrawberryFam', 'theDude'] }
    }, {});
  }
};
