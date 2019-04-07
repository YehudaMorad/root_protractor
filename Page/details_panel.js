var details_panel = function() {
    
    this.title = function(txt) {
        element(by.model('item.title')).sendKeys(txt);
    };

    this.description = function(txt) {
        element(by.model('item.description')).sendKeys(txt);
    };

    this.location = function(txt) {
        element(by.partialLinkText('Location')).sendKeys(txt);
    }

}