const defaultStore = {
    flag:false,
    searchSuggestions:['家具用品','简洁生活','无印良品']
};

export default (state = defaultStore, action)=>{
    // console.log(action)
    if(action.type === 'input_focus')
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = true;
        return newState;
    }else if(action.type === 'input_blur')
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = false;
        return newState;
    }

    return state;
}