// Recommended filename: Then_I_should_see_the_title_of_#.js
module.exports = function() {
  this.Given(/^I should see the title of "([^"]*)"$/, {timeout: process.env.StepTimeoutInMS}, function (title) {
    // Write the automation code here
    expect(browser.getTitle()).toEqual(title);
  });
};
