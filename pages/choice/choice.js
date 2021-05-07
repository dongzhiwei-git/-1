// pages/choice/choice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  reg(){
    wx.navigateTo({
      url: '../../pages/reg/reg',
    })
  },
  login(){
    wx.navigateTo({
      url: '../../pages/login/login',
    })
  }
})