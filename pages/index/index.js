// index.js
// 获取应用实例
const db = wx.cloud.database()
const app = getApp()
var base64 = require("../../images/base64");
Page({

  data: {
    i: 0,
    tabs: [
      {
        id: 0,
        value: '热榜推荐',
        isActive: true
      },
      {
        id: 1,
        value: '动态中心',
        isActive: false
      },
      {
        id: 2,
        value: '题集推荐',
        isActive: false
      },
      {
        id: 3,
        value: '每日一题',
        isActive: false
      },
      {
        id: 4,
        value: '刷题排名',
        isActive: false
      },
    ],

    cateList: [
      {
        title: "题集",
        imgname: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/home/cate/tiku1.png?sign=1010e6b0ab475c40f302b28af85dfb32&t=1619005903"
      },
      {
        title: "开发文档",
        imgname: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/home/cate/kaifa1.png?sign=112ad9bd2761b911f32cab5eade5dba7&t=1619005555"
      },
      {
        title: "打卡",
        imgname: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/images/home/cate/daka1%20(1).png?sign=2ef1e0c227c87dd9498f6d06a40849e8&t=1619005871"
      }
    ],
    hot_img: [

    ],

    hot_message: [
      // {
      //   rank: 1,
      //   user_name: "dzw1",
      //   title: "a撒可怜见法律上的发生地覅了解撒打裂缝",
      //   hot_num: 111,
      //   dzsum: 0,
      //   plnum: 0,
      //   likes: 0,
      // }, {
      //   rank: 2,
      //   user_name: "dzw2",
      //   title: "阿萨的腹肌拉伤两地分居拉萨大家发撒旦发生打发手动阀手动阀维特我让他胡",
      //   hot_num: 343,
      //   dzsum: 0,
      //   plnum: 0,
      //   likes: 0,
      // },
      // {
      //   rank: 3,
      //   user_name: "dzw3",
      //   title: "v内进行对抗法国军事对抗老铁稳人",
      //   hot_num: 0,
      //   dzsum: 0,
      //   plnum: 0,
      //   likes: 0,
      // },
      // {
      //   rank: 4,
      //   user_name: "dzw3",
      //   title: "老师的开发商贷款他逢人破i听袁惟仁平台",
      //   hot_num: 0,
      //   dzsum: 0,
      //   plnum: 0,
      //   likes: 0,
      // },
      // {
      //   rank: 5,
      //   user_name: "dzw6",
      //   title: "第三方库两家公司都甲方公司都i复古二年",
      //   hot_num: 0,
      //   dzsum: 0,
      //   plnum: 0,
      //   likes: 0,
      // },
      // {
      //   rank: 6,
      //   user_name: "dzw7",
      //   title: "反动派刚回来艰苦拉萨的空间概念圣诞快乐",
      //   hot_num: 0,
      //   dzsum: 0,
      //   plnum: 0,
      //   likes: 0,
      // }

    ],
    dongtai_data: [],
    show: false,

    user_sort: [
      {
        user_id: 0,
        rank_num: 4,
        user_name: "都挺好",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/248b3abe5cb3a1dffbb727a8b499be3.jpg?sign=310556e8862628e1a979b1714735f18d&t=1619777218"
      },
      {
        user_id: 0,
        rank_num: 5,
        user_name: "嘿嘿",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/4040c18519486bd35e31401191e6297.jpg?sign=1b0e8901e2d8a6245acb3aa944410fe4&t=1619777192"

      },
      {
        user_id: 0,
        rank_num: 6,
        user_name: "温温",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/26bec07acaf1312941381be21cea597.jpg?sign=6313fe825298ad88b5e1fd75f4d96e56&t=1619777236"

      },
      {
        user_id: 0,
        rank_num: 7,
        user_name: "哈哈",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/510992df354d78d3e67bfc6651c0465.jpg?sign=fec10937a0d4da10753fbc7b6daa3879&t=1619777034"

      },
      {
        user_id: 0,
        rank_num: 8,
        user_name: "小选手",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/5d32a62b08ccf9ee633c357991ff12b.jpg?sign=1babdf55db04f3a355b6c2fa15c3f543&t=1619777013"

      },
      {
        user_id: 0,
        rank_num: 9,
        user_name: "java",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/892bc1c77062730ac9f9b191e969f91.jpg?sign=6aac9b31706039978242d7c1fdb64d56&t=1619776984"

      },
      {
        user_id: 0,
        rank_num: 10,
        user_name: "dzw",
        ac_num: 133,
        user_img: "https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/users/user_head_img_test/0d6b2c41b95b2fea25564282a9dc132.jpg?sign=2b608ac059ed60e50097f23a2bad755e&t=1619776971"

      },
    ]

  },
  close: function () {
    this.setData({
      showActionsheet: false
    })
  },
  btnClick(e) {
    console.log(e)
    this.close()
  },
  open: function () {
    this.setData({
      show: true
    })
  },
  buttontap(e) {
    console.log(e.detail)
  },
  // 事件处理函数
  onLoad: function () {
    this.flushData();
  },
  handleTabsItemChange(e) {
    //console.log(e);
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },
  bindFocus: function () {
    wx.navigateTo({
      url: '../../pages/search/search',
    })
  },
  onPullDownRefresh: function () {
    this.flushData();
  },

  flushData() {



    db.collection("user_info").get().then(res => {

      console.log("res123122S=", res)
      app.globalData.user_head = res.data[0].avatar_url
      app.globalData.user_name = res.data[0].nick_name


      if (res.data.length != 0) {

        app.globalData.isLogin = res.data[0].isLogin;

      }





    })

    let _this = this;

    /**
     * 得到动态中心数据
     */
    wx.cloud.callFunction({
      name: "getData"
    }).then(res => {
      console.log("qwe")
      console.log(res)
      _this.setData({

        dongtai_data: res.result.data.reverse()
      })
    })

    /**
     * 得到热榜图片
     */
    wx.cloud.callFunction({
      name: "get_img"
    }).then(res => {
      console.log(res)
      _this.setData({
        hot_img: res.result.data

      })
    })

    wx.cloud.callFunction({
      name: "query"
    }).then(res => {`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *************************************************------------------------------------`
      _this.setData({
        hot_message: res.result.data
      })

    })
    _this.setData({

      icon: base64.icon20,
      slideButtons: [{
        text: '普通',
        src: 'https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/icons/shoucang.png?sign=7b1a6086610c452d39b2f82f33104ae4&t=1618503913', // icon的路径
      }, {
        text: '普通',
        extClass: 'test',
        src: 'https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/icons/001_zhuanfa.png?sign=5542ce94d0fb76fd8a829fe200ab9ac4&t=1618504045', // icon的路径
      }, {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: 'https://6465-dev-2gzxo1d2dc39c5e3-1305581356.tcb.qcloud.la/icons/shanchu.png?sign=762b4f7ee5445f561324b382fec90d28&t=1618504026', // icon的路径
      }],
    });
    app.loadFont()

  }

  // ,
  //   getList: function() {
  //     wx.request({
  //       url: '',
  //       data: {},
  //       header: "",
  //       method: "GET",
  //       success: function(res) {

  //       }
  //     })
  //     // 隐藏loading提示框
  //     wx.hideLoading()
  //     // 隐藏导航条加载动画
  //     wx.hideNavigationBarLoading()
  //     //停止下拉刷新
  //     wx.stopPullDownRefresh()
  //   },
  //   onLoad: function (options) {
  //     this.openMap()
  //   },
  //   /**
  //    * 刷新操作
  //    */
  //   onRefresh: function() {
  //     // 导航条加载动画
  //     wx.showNavigationBarLoading()
  //     //loading提示框
  //     wx.showLoading({
  //       title: 'Loading...',
  //     })
  //     this.getList()
  //   },
  //   /**
  //    * 页面相关事件处理函数--监听用户下拉动作
  //    */
  //   onPullDownRefresh: function() {
  //     this.onRefresh()
  //   }

})
