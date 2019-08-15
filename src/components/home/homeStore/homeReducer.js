const defaultStore = {
    // topicList:[
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666',title:'青竹'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666',title:'良品'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666',title:'设计'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_6?v=1552557703_1560932666',title:'生活'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666',title:'品质'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666',title:'青竹'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666',title:'良品'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666',title:'设计'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_6?v=1552557703_1560932666',title:'生活'},
    //     {topicUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666',title:'品质'}
    // ],
    // list:[
    //     {listUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666',title:'青竹',desc:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化'},
    //     {listUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666',title:'良品',desc:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化'},
    //     {listUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666',title:'设计',desc:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化'},
    //     {listUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_6?v=1552557703_1560932666',title:'生活',desc:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化'},
    //     {listUrl:'//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666',title:'品质',desc:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化'}
    // ]

    topicList:[],
    list:[],
    fineList:[]

};

export default (state = defaultStore, action)=>{

    if(action.type === 'init_home_list')
    {
        console.log(action,'homereducerrrrrr') //可以拿到
        const newState = JSON.parse(JSON.stringify(state));
        newState.topicList = action.data.topicList;
        newState.list = action.data.list;
        newState.fineList = action.data.fineList;

        return newState;
    }

    return state;
}