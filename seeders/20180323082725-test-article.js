'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('articles', [{
			category: 'Weekly Update',
			title: 'Test Weekly Update',
      date: 'March 10',
			author: 'John Doe',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lorem leo, vitae condimentum odio lobortis et. Nunc metus felis, efficitur ac odio quis, pellentesque fringilla erat. Phasellus ac libero fringilla, ultricies metus ut, tincidunt justo. Suspendisse congue justo vel risus mollis, eget pharetra purus porta. In ligula enim, ultrices non ipsum in, volutpat sollicitudin libero. Vivamus facilisis sollicitudin diam rutrum vestibulum. Mauris vehicula finibus elit, et tempus nibh varius eget. Mauris vehicula diam sit amet laoreet scelerisque. Suspendisse purus lectus, auctor sed ultricies at, molestie quis nisi. Pellentesque a nulla id metus elementum gravida ac ut lorem. Etiam vel viverra metus. Donec a urna libero. Maecenas felis quam, finibus ac mi vitae, rutrum lobortis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget nulla arcu. Pellentesque eget accumsan lectus. Vivamus rhoncus eros sed nulla laoreet finibus. Fusce ut dui faucibus, hendrerit lorem sit amet, sagittis metus. Curabitur semper ex sodales sodales mattis. Nam varius posuere eros, sit amet ultricies diam lacinia nec. Sed malesuada leo in volutpat gravida. Pellentesque eleifend tincidunt metus, sit amet placerat lectus aliquam ut. Curabitur rutrum dictum risus ac laoreet. Sed turpis risus, malesuada vitae fringilla ut, venenatis at nunc. Aliquam at neque scelerisque, dapibus odio quis, cursus diam. Etiam eu malesuada lectus. Nullam neque ipsum, dapibus a suscipit quis, euismod vel nisl. In mollis metus ac massa luctus pharetra. Donec dictum vel lacus mollis pulvinar. Nunc posuere rutrum nulla, eget venenatis nunc mollis vel. Fusce facilisis libero quam, at gravida sem varius a. Praesent ut felis id quam scelerisque rutrum sed quis justo. Aliquam id enim vitae lacus pretium varius ac sed libero. Vivamus nec mollis sapien. Quisque non dolor vitae lectus mattis posuere. Donec ultrices, mauris id venenatis eleifend, felis erat ultricies urna, sed tincidunt risus lacus sit amet augue. Fusce non viverra nisl. Curabitur sollicitudin, enim id commodo malesuada, quam eros venenatis felis, quis porta neque risus et nulla. Maecenas eget semper lacus. Curabitur vitae metus lacus. Pellentesque ut risus id felis bibendum posuere sit amet ut mi. In id sagittis leo. Nulla sed convallis quam, eget placerat tortor. Nam tempor, leo at suscipit porttitor, dui lorem elementum urna, vitae dictum lectus massa sed diam. Duis ullamcorper justo vitae nisl maximus gravida. Praesent eu consectetur purus. Suspendisse feugiat aliquam sapien eget fermentum. Etiam ornare neque a ultrices ullamcorper. Donec at augue quis elit imperdiet scelerisque a sed leo. Aenean sit amet ornare magna. Maecenas sodales magna commodo, lacinia turpis in, vulputate turpis. Fusce sagittis bibendum neque vel dapibus. Suspendisse porta iaculis mi vitae pellentesque. ',
			photo: 'http://spacenews.com/wp-content/uploads/2017/12/Space_Debris-879x485.jpg',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
  },

  down: (queryInterface, Sequelize) => {
  	return queryInterface.bulkDelete('articles', [{ title: 'Test Weekly Update' }], {});
  }
};
