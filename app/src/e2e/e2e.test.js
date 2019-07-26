const IndexPage = require('./index');

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('Google search automated testing', () => {
            let driver, page;

            beforeAll (async () => {
                page = new IndexPage();
                driver = page.driver;
                await page.visit('http://localhost:8000/');
            });

            afterAll (async () => {
                await page.quit();
            });

            it ('find the input box and search button', () => {
                page.findInputAndButton().then((result) => {
                    expect(result.inputEnabled).toEqual(true);
                    expect(result.buttonText).toMatch(/Search/);
                });
            });

            it ('put keyword in search box and count the autocomplete results', () => {
                page.submitKeywordAndGetResult().then((result) => {
                    expect(result.length).toBeGreaterThan(0);
                });
            });

            it ('put keyword in search box and check exact autocomplete results', () => {
                page.submitKeywordAndGetResult('amsterdam').then((result) => {
                    expect(result.length).toBe(5);
                });
            });
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();