var HomePageObject = require("./home-page-object.js");

describe("main controller e2e test", function(){
    var homePageObject;

    beforeEach(function(){
        homePageObject = new HomePageObject();
        homePageObject.get();
    });

    it("should display a welcome message", function (){
        homePageObject.get();
        expect(homePageObject.pageHeading.getText()).toEqual("hello..hmm, Hello World!");
    });
});