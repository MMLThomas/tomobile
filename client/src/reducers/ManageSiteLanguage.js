function languageReducer( state = {language: 'english'}, action){
    
    switch (action.type) {
      case "CHANGE_LANGUAGE":
        return  {language: action.language}

      default:
        return state;
        };
    }

export default languageReducer