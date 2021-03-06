import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  name: DS.attr('string'),
  retailer: DS.attr('string'),
  price: DS.attr('string'),
  url: DS.attr('string'),
  bought: DS.attr('boolean')
});
