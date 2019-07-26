let Page = require('./page');
const locator = require('./locator');
const fake = require('./fakeData');

const searchInputSelectorClassName = locator.searchInputSelectorClassName;
const searchButtonSelectorId = locator.searchButtonSelectorId;
const autoCompleteListItemClassName = locator.autoCompleteListItemClassName;

const fakeNameKeyword = fake.nameKeyword;

let searchInput, searchButton, resultStat;

Page.prototype.findInputAndButton = async function () {
    searchInput = await this.findByClassName(searchInputSelectorClassName);
    searchButton = await this.findById(searchButtonSelectorId);

    return await this.driver.wait(async function () {
        const searchButtonText = await searchButton.getAttribute('value');
        const searchInputEnableFlag = await searchInput.isEnabled();

        return {
            inputEnabled: searchInputEnableFlag,
            buttonText: searchButtonText
        }
    }, 5000);
};

Page.prototype.submitKeywordAndGetResult = async function(searchString) {
    const string = searchString || fakeNameKeyword;
    await this.findInputAndButton();
    await this.write(searchInput, string);
    resultStat = await this.findByClassName(autoCompleteListItemClassName);
    return await this.driver.wait(async function () {
        return await resultStat.length();
    }, 5000);
};

module.exports = Page;