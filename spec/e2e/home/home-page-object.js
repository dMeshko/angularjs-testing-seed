module.exports = function (){
    this.pageHeading = element(by.id("welcome-message"));

    this.get = function(){
        browser.get("http://127.0.0.1:9000/#!/");
    }
}