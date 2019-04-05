//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isEnter:false
  },

  //事件处理函数
  navigate: function (e) {
    var _this = this;
    if (e.detail.errMsg == "getUserInfo:ok") {
      _this.setData({
        isEnter: true
      });
      setTimeout(function () {
        wx.navigateTo({
          url: '../other/other'
        })
      }, 1000)
    }
    
  },
  onLoad: function () {

  },

  onShow:function() {
    var _this = this;
    _this.setData({
      isEnter:false
    })
  }

})
