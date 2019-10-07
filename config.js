var data={
    webTitle:"Miaoing", //网站名
    webIconURL:"img/logo.jpg", //网站logo
    bloger:"Miaoing",   //博客名
    signature:"You said we were changed by the world?",   //个性签名
    copyright:"fa-heartbeat",
    //关于网站的footer部分，在innerData中更改
 

    //可以选择开启一些社账号
    Twitter:true,
        TwitterURL:"https://twitter.com",
    Email:true,
        EmailURL:"1798334412@qq.com",
    Google:false,
        GoogleURL:"https://githubnnnn",
    WeiBo:false,
        WeiBoURL:"https://weibo.com",
    GitHub:true,
        GitHubURL:"https://",
    QQ:false,
        QQacount:"1798334412",
    WeChat:false,
        WeChatacount:"MiaoingWeChat",
  //让你身边的人出现在你的博客页面
    friends:["HCMY","飞鸟与鱼"],  //friends name
    friendDescribe:["平凡的脚步可以走出伟大的行程","鸡腿要吗?"], //用简短的话语描述他
    friendsURL:["https://hcmy.github.io","https://miaoing.github.io"], //他的网站
    

    //about 来介绍你的一些信息
    aboutMe:"",
    aboutMyskill:["Java","HTML","CSS","JS"], //你所掌握的一些技能
        skillPercent:[50,30,60,50],     //掌握程度，按百分比来算
    aboutMyPhotoAlbum:["img/1.jpg","img/2.jpg","img/5.jpg","img/mymus.jpg","img/music.jpg"], //你的相册
    photoDescribe:["Describe the picture","Describe the picture","Describe the picture","Describe the picture","Describe the picture"],
    aboutTypeSpeed:80,//typeSpeed


/******
 * canvas: 是否开启动态背景,
 *  defaultCanvas:默认开启的动态背景名
 * 你可以选择的动态背景有:
 *  snow
 *     --snowcolor:雪的颜色
 *     --snowcount雪的数量
 * touMingDeWangZLiZi
 * pointToPoint
 * waves
 */
    canvas:false,
        defaultCanvas:"snow",
            snowcolor:"#ffffff",
            snowcount:100,

//是否默认开启背景图
    backGroundImg:true,
        backgroundImgs:["img/music.jpg","img/mymus.jpg","img/bg3.jpg","img/1.jpg","img/forest.jpg","img/3.jpg","img/4.jpg","img/2.jpg","img/5.jpg","img/6.jpg"],
        defaultImg:"img/4.jpg",
    

//是否开启不蒜子统计 即网站访问次数
    busuangzi:flase,
        allVisitCount:true, //访问总量
        visitor:false,       //访问人数
    
    clickLove:false,   //点击页面是否产生小红心

//y音乐的配置
    music:[
        {
            name:"此生此世与你",
            url:"music/drdc2.mp3",
            cover:"img/mymus.jpg",
            artist:"大酥"
        },
        {
            name:"You",
            url:"music/Approaching Nirvana - You.mp3",
            cover:"img/music.jpg",
            artist:"Approaching Nirvana"
        },
        {
            name:"Capo Productions",
            url:"music/Capo.mp3",
            cover:"img/music.jpg",
            artist:"Aurora"
        },
        {
            name:"mp3",
            url:"music/夏小舟 - 央视新闻频道天气预报背景音乐.mp3",
            cover:"img/music.jpg",
            artist:"夏小舟"
        }
    ],
        autoPlay:false, //是否自动播放
        theme:"red",    //主题颜色
        volume:0.7,    
        loop:"all" ,  //all one none
        preload:"auto", //auto none metadata
    
    musicBg:false,     //音乐背景
        defaultBg:"paintGirl", //'lizi' 'paintGirl'
        defaultBgList:["paintGirl","lizi"],

}