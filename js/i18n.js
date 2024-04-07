// traducciones.js
var translates = {
    ES: {
        header: {
            download_cv: "Descargar CV"
        }
    },
    EN: {
        header: {
            download_cv: "Download CV"
        }
    },
    AS: {
        header: {
            download_cv: "Descargar CV"
        }
    },
    VAL: {
        header: {
            download_cv: "Descarregar CV"
        }
    }
};

function changeLanguage(language) {
    var translateElements = document.getElementsByClassName('translate');
    for (var i = 0; i < translateElements.length; i++) {
      var element = translateElements[i];
      var translateKey = element.getAttribute('data-key');
      var keys = translateKey.split('.');
      var translatedText = translates[language];
      for (var j = 0; j < keys.length; j++) {
        translatedText = translatedText[keys[j]];
      }
      element.innerHTML = translatedText;
    }
}