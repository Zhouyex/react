const defaultStore = {

    articleList:[]

};

export default (state = defaultStore, action)=>{

    if(action.type==='get_detail_data')
    {
        console.log(action,'actionnnnnnnnn') //注意最外面的reducer combine
        const newState = JSON.parse(JSON.stringify(state));
        newState.articleList = action.data.article;

        return newState;

    }

    return state;
}