import { createStore } from 'redux'

const ls = require('local-storage');

if(!ls.get('nextJS')){
	console.log(3131132)
	let arry = {};
	arry['authLogin'] = ""
	arry['authUserName'] = ""
	ls.set('nextJS', arry)
}

const ThenextJS = ls.get('nextJS')
	
	
const initialState = {
  authLogin : ThenextJS['authLogin'],
  authUserName : ThenextJS['authUserName']
}

const reducer = (state = initialState, action) => {
	if(action.type==="CHANGE_STATE"){
		let nextJS = ls.get('nextJS');
		if(action.payload.authLogin){
			nextJS['authLogin'] = action.payload.authLogin
			ls.set('nextJS', nextJS);
			state.authLogin = action.payload.authLogin;
		}
		else if(action.payload.authLogin===""){
			nextJS['authLogin'] = ""
			ls.set('nextJS', nextJS);
			state.authLogin = ""
		}
		
		if(action.payload.authUserName){
			nextJS['authUserName'] = action.payload.authUserName
			ls.set('nextJS', nextJS);
			state.authUserName = action.payload.authUserName;
		}
		else if(action.payload.authUserName===""){
			nextJS['authUserName'] = ""
			ls.set('nextJS', nextJS);
			state.authUserName = ""
		}
		
		
		
		

		
		
	}
	
    return state
}

const storeLogin = createStore(reducer)


export {storeLogin}