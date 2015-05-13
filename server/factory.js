var Chance = Meteor.npmRequire('chance');
var my_chance = new Chance();
Factory.define('story', Stories, {
  title: Fake.word(),
  content: [
    {
      type: "text",
      body: Fake.paragraph(12)
    }
  ],
  sourceDate: my_chance.date(),
  scrapeDate: my_chance.date(),
  source: Fake.word()
});
