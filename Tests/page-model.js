/* eslint-disable semi */
import { Selector, t } from 'testcafe';

const label = Selector('label');

// Selectors

class Feature {
  constructor (text) {
    this.label = label.withText(text);
    this.checkbox = this.label.find('input[type=checkbox]');
  }
}

class Page {
  constructor () {
    this.nameInput = Selector('#developer-name');
    this.featureList = [
      new Feature('Support for testing on remote devices'),
      new Feature('Re-using existing JavaScript code for testing'),
      new Feature('Easy embedding into a Continuous integration system')
    ];

    this.submitButton = Selector('#submit-button');
    this.importantFeaturesLabels = Selector('legend').withExactText('Which features are important to you:').parent().child('p').child('label');
  }

  // Actions

  async selectFeature (number) {
    await t.click(this.importantFeaturesLabels);
  }

  async typeName (name) {
    await t.typeText(this.nameInput, name);
  }

  async submitName (name) {
    await t
      .typeText(this.nameInput, name)
      .click(this.submitButton);
  }

  async clickSubmit () {
    await t.click(this.submitButton);
  }
}

export default new Page();
