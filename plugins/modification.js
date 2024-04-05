(function () {
    'use strict';
Lampa.Platform.tv(); 

function mod() {	

Lampa.Storage.set('protocol', 'http');

}

if (window.appready) mod(); 
    else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type == 'ready') {  
                mod();   
            }
        });
    }

})();
