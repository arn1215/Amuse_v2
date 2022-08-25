'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Songs', [
      { songURL: 'https://amuse-bucket.s3.amazonaws.com/Janet+Jackson+-+Someone+To+Call+My+Lover+(Giraffage+Remix)+%5BFREE+DL%5D.mp3', title: 'Janet Jackson - Someone To Call My Lover (Giraffage Remix)', imageUrl: 'https://amuse-bucket.s3.amazonaws.com/JanetJackson.png', playlistId: null, userId: 24, createdAt: new Date(), updatedAt: new Date(), },
      { songURL: 'https://amuse-bucket.s3.amazonaws.com/Giraffage+%26+Slow+Magic+-+So+Cute!.mp3', title: 'Giraffage & Slow Magic - So Cute!', imageUrl: 'https://amuse-bucket.s3.amazonaws.com/SlowMagic.png', playlistId: null, userId: 24, createdAt: new Date(), updatedAt: new Date(), },
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Make+You+Love+Me.mp3',
        title: 'Giraffage - Make You Love Me', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/MakeYouLoveMe.png', 
        playlistId: null, 
        userId: 24, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Music+Sounds+Better+With+You.mp3',
        title: 'Giraffage - Music Sounds Better With You', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/Music+Sounds+Better+With+You.png', 
        playlistId: null, 
        userId: 24, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
      // KAY ===========================================================================================================================
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/CHANCE+THE+RAPPER%2C+KNOX+FORTUNE+-+ALL+NIGHT+(KAYTRANADA+EXTENDED+JOINT).mp3',
        title: 'CHANCE THE RAPPER, KNOX FORTUNE - ALL NIGHT (KAYTRANADA EXTENDED JOINT)', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/CHANCE+THE+RAPPER%2C+KNOX+FORTUNE+-+ALL+NIGHT+(KAYTRANADA+EXTENDED+JOINT).png', 
        playlistId: null, 
        userId: 25, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Drive+Me+Crazy+(featuring+Vic+Mensa)+(Single+Version).mp3',
        title: 'Drive Me Crazy (featuring Vic Mensa) (Single Version)', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/DriveMeCrazy.png', 
        playlistId: null, 
        userId: 25, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Teedra+Moses+-+Be+Your+Girl+(Kaytranada+Edition).mp3',
        title: 'Teedra Moses - Be Your Girl (Kaytranada Edition)', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/BeYourGirl.png', 
        playlistId: null, 
        userId: 25, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Janet+Jackson+-+If+(Kaytranada+Remix).mp3',
        title: 'Janet Jackson - If (Kaytranada Remix)', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/JanetJacksonKaytrranada.png', 
        playlistId: null, 
        userId: 25, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      },
      
      // ==============================SEAN TURK==================================================================================

      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/No+Drama.mp3',
        title: 'Sean Turk - No Drama', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/No+Drama.png', 
        playlistId: null, 
        userId: 26, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      },
      
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Villains.mp3',
        title: 'Sean Turk - Villains', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/Villains.png', 
        playlistId: null, 
        userId: 26, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      },
      // ===========ABHIDIJON===============
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Ignore.mp3',
        title: 'Abhi//Dijon - Ignore', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/Ignore+Abhi_Dijon.png', 
        playlistId: null, 
        userId: 27, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      },

      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/Often.mp3',
        title: 'Abhi//Dijon - Often', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/Ignore+Abhi_Dijon.png', 
        playlistId: null, 
        userId: 27, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      },

      // =======================RICKY RETRO===============================================
      { 
        songURL: 'https://amuse-bucket.s3.amazonaws.com/in+luv+with+the+rik.mp3',
        title: 'Ricky Retro - in luv with the rik', 
        imageUrl: 'https://amuse-bucket.s3.amazonaws.com/in+luv+with+the+rik.png', 
        playlistId: null, 
        userId: 28, 
        createdAt: new Date(), 
        updatedAt: new Date(), 
        
      },
      
      { 
        songURL: `https://amuse-bucket.s3.amazonaws.com/can't+u+see.mp3`,
        title: 'Ricky Retro - cant u see', 
        imageUrl: `https://amuse-bucket.s3.amazonaws.com/can't+u+see.png`, 
        playlistId: null, 
        userId: 28, 
        createdAt: new Date(), 
        updatedAt: new Date(), 

        
        
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
