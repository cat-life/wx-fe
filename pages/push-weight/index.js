const Base = require('../../utils/base.js');
const Util = require('../../utils/util.js');
const newDate = new Date();

const app = getApp();


// pages/push-weight/index.js
Page(Object.assign({}, Base, {
  /**
   * 页面的初始数据
   */
  data: Object.assign({}, Base.dataSet, {
    scrollLeft: 100,
    loaded: false,
    pushInfo: {
      currentWeight: '10',
      weightUnit: '斤',
      changeWeight: (10).toFixed(1),
      img: [],
      activeDate: {
        year: Util.formatNumber(newDate.getFullYear()),
        month: Util.formatNumber(newDate.getMonth() + 1),
        day: Util.formatNumber(newDate.getDate())
      }
    }
  }),

  onScroll: function(event) {
    let pushInfo = this.data.pushInfo;

    if (this.data.loaded) {
      pushInfo.changeWeight = (event.detail.scrollLeft / event.detail.scrollWidth / 0.75 * 100).toFixed(1);
      this.setData({
        pushInfo
      });
    } else {
      this.setData({
        scrollLeft: (this.data.pushInfo.changeWeight - 0) / 100 * 0.75 * event.detail.scrollWidth,
        loaded: true
      });
    }
  },
  handleSelect: function (event) {
    let pushInfo = this.data.pushInfo;
    let dataset = event.target.dataset;
    if (dataset.key === 'activeDate') {
      this.setData({
        datePickerInfo: {
          year: pushInfo.activeDate.year,
          month: pushInfo.activeDate.month,
          day: pushInfo.activeDate.day,
        }
      });
      this.switchDatepicker();
    }
  },
  handleConfirm: function() {
    console.log(this.data.pushInfo);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
}));
