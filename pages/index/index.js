

// 注释，在js中是这样注释的，计算机不看的

// Page() 代表当前页面，【格式】
//  {} 可以配置页面的一些信息（数据、处理方法），暂时可以当做一个格式
//  ; 可加可不加，一般都还是加上的

//  data: {} 说明 data 的值是 {}，是规定的，不能改名，代表整个页面的数据
//        a: 5 说明在 data 中添加了一个属性a，他的值是5。那么这个a是可以修改名字的


//  js有规定，数字以外的 都需要用 "" 包起来，说明是字符串
//  两个 键值对 直接需要用 , 分隔开


//  拿出 lo 和 la 的作用是 通过程序 来获取当前位置的 经纬度，然后设置 lo 和 la 的值， 从而影响到 地图 的位置


    Page({









      // 数据
      data: {
        a: 18,
        b: "哈哈哈，嘻嘻嘻",
        lo: 113.324520,
        la: 23.099994, 

      },

      // 当前程序执行完的时候
      //   onReady 代表整个程序加载完成 的时候，不能修改，因为是系统规定
      //     function() 是一个格式

      onReady: function () {

        var pages = this;

        wx.getSystemInfo({
          success: function(res) {
            var selfs = res;
            var con =  [
              {
                id: 0,
                position: {
                  top: selfs.windowHeight / 2,
                  left: 0,
                  width: selfs.windowWidth
                },
                iconPath: "/images/panzi.png",
                clickable: true
              },
              {
                id: 1,
                position: {
                  top: selfs.windowHeight / 2 + 30,
                  left: selfs.windowWidth / 2 - 10,
                  width: 30,
                },
                iconPath: "/images/hide_icon.png",
                clickable: true
              },
              {
                id: 2,
                position: {
                  top: selfs.windowHeight - 250,
                  left: selfs.windowWidth / 2 - 100,
                  width: 200,
                  height: 200
                },
                iconPath: "/images/Ride_icon.png",
                clickable: true
              },
              {
                id: 3,
                position: {
                  top: selfs.windowHeight - 50,
                  left: 30,
                  width: 25,
                  height: 25
                },
                iconPath: "/images/personal_icon.png",
                clickable: true
              },
              {
                id: 4,
                position: {
                  top: selfs.windowHeight - 50,
                  left: selfs.windowWidth - 40,
                  width: 25,
                  height: 25
                },
                iconPath: "/images/activity_icon.png",
                clickable: true
              },
              {
                id: 5,
                position: {
                  top: selfs.windowHeight / 4 - 50,
                  left: selfs.windowWidth - 80,
                  width: 60,
                  height: 60
                },
                iconPath: "/images/service_icon.png",
                clickable: true
              },
              {
                id: 6,
                position: {
                  top: selfs.windowHeight / 2 - 100,
                  left: selfs.windowWidth - 80,
                  width: 60,
                  height: 60
                },

                iconPath: "/images/Positioning_icon02.png",
                clickable: true
              }

            ];
            
            pages.setData({
              control: con
            })


          }
        })

      },

      controltap(e) {
        console.log(e.controlId)

        if (e.controlId == 0) {

          // 可以做 0 的事情

          wx.navigateTo({
            url: '/pages/warn/warn',
          })

        }
        else if (e.contronId == 1) {
          // 可以做 1 的事情
        }

      },

      aaaa(e) {

        wx.navigateTo({
          url: '/pages/warn/warn',
        })
      }

    });   
