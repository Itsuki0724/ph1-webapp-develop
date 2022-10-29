$(function(){

	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	close.on('click',function(){	
		container.removeClass('active');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// var barChartData = {
//     labels: ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','16','','28','','30'],
//     datasets: [
//       {
//         label: 'blue',
//         data: ['3','4','5','3','0','0','4','2','2','8','8','2','2','1','7','4','4','3','3','3','2','2','6','2','2','1','1','1','7','8'],
//         borderColor : "rgba(54,164,235,0.8)",
//         backgroundColor : "rgba(54,164,235,0.5)",
//         borderWidth :0,
//         borderRadius:10,
//         innerWidth:1,
//       },
//     ],
//     };

// var barOptions = {
//     scales:{
//         xAxes:[
//             {
//                 scaleLabel:{
//                     fontColor :"red",
//                 }
//             }
//         ]
//     }
// }
  
//   var complexChartOption = {
//     responsive: true,
//   };
  
//   window.onload = function() {
//     ctx = document.getElementById("bar-graph").getContext("2d");
//     window.myBar = new Chart(ctx, {
//       type: 'bar',
//       data: barChartData,
//       options : barOptions,
//     });
//   };


// options: { 
    
//     plugins: {
//       datalabels: {
//         color: ["#fff","#fff","#fff",'#9ed7fa','#dea4c2','#7e4d7d','#6935a9','#462974',],
//         font: {
//           weight: "bold",
//           size: 20,
//         },   
//         formatter: (value, ctx) => {
//             return value+'%';
//             },
//       },
//         legend:{
//           position:"bottom",
//           poinStyle:"circle",
//         },       
//     },
// },
// plugins: [
//   ChartDataLabels,
// ],
// })

var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var dataSum = 0;
            dataset.data.forEach(function (element){
                dataSum += element;
            });

            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(255, 255, 255)';

                    var fontSize = 12;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    var labelString = chart.data.labels[index];
                    var dataString = (Math.round(dataset.data[index] / dataSum * 1000)/10).toString() + "%";

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                    ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
                });
            }
        });
    }
};







var ctx = document.getElementById('mychart-doughnut-1');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels:["HTML","CSS","SQL","SHELL","JavaScript","その他","PHP","Laravel"],
    datasets: [{
      data: [30,20,20,20,10,10,5,5],
      backgroundColor: ['#0000ff','#4682B4','#00CED1','#00BFFF','#D8BFD8','#7B68EE','#483D8B','#00008B'],
      weight: 30,
      borderWidth:0,
    }],
  },
  options: {
    plugins:{
        labels: {
            render: 'percentage',
            fontColor: 'white',
            fontSize: 20
          },
        datalabels: {
            formatter: (value, ctx) => {
                return value + '%';
            },
        },
        legend:{
        position : "bottom",
        },
    }
},
plugins: [dataLabelPlugin],
});




var ctx = document.getElementById('mychart-doughnut-2');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels:["N予備校","課題","ドットインストール","aaaaaaa","aaaaa"],
    datasets: [{
      data: [40,40,20],
      backgroundColor: ['#0000ff','#4682B4','#00BFFF'],
      weight: 30,
      borderWidth:0,
    }],
  },
  options: {
    plugins:{
    legend:{
        position : "bottom",
        pointStyle : 'circle',
        },
    }
  },

  plugins: [dataLabelPlugin],
});







window.onload = function() {
        ctx = document.getElementById("bar-graph").getContext("2d");
        window.myBar = new Chart(ctx, {

        type: "bar",   
        data: {
            labels:  ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','16','','28','','30'],  
            datasets: [
                {                       
                    data: ['3','4','5','3','0','0','4','2','2','8','8','2','2','1','7','4','4','3','3','3','2','2','6','2','2','1','1','1','7','8'],                
                    backgroundColor: "#00BFFF",       
                    borderRadius:30,
                }
            ]
        },

        options: {                       
            legend:{
                display:false,
            },
            maintainAspectRatio: true,
            scales: { 

                x:                           
                    {             
                        callback: function(tick){
                            return tick.toString()+'h';
                        },
                        grid:{
                            drawOnChartArea:false,
                        },

                        

                        },
                y:                       
                        {
                            grid:{
                                drawOnChartArea:false,
                            },

                            ticks : {
                                callback: function(tick) {
                                  return tick.toString() + 'h';
                                }
                              }
                        },
                    }
            },
            layout: {                          
                padding: {                         
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 0,
                }
            },
        }
    )};


    // $(document).ready(function(){
    //     //デフォルトで表示する要素を指定
    //     $('.modal-content').show();
    //     $('.element2').hide();
    
    //     //buttonがクリックされたら処理を実行
    //     $('.modal-button').click(function () {
    
    //          //toggleClassでshowのclassを追加または削除
    //         $('#app').toggleClass('show');
    
    //         //#appがshowのclassをを持っていれば
    //         if($('#app').hasClass('show')){
    
    //              //要素の表示を切り替える
    //             $('.modal-content').hide();
    //             $('.element2').show();
    //         }else{
    
    //              //要素の表示を切り替える
    //             $('.modal-content').show();
    //             $('.element2').hide();
    //         }
    //     });
    // });


    $(function() {
        $(".modal-button").click(function() {
            $(".modal-left-box").addClass("C");
        });
    });

    $(function() {
        $(".modal-button").click(function() {
            $(".modal-right-box").toggleClass("C");
        });
    });

    $(function() {
        $(".modal-button").click(function() {
            $(".modal-button").toggleClass("C");
        });
    });

    $(function() {
        $(".modal-button").click(function() {
            $(".roading").toggleClass("C");
        });
    });

    $(function() {
        $(".modal-button").click(function() {
            $("modal-content").toggleClass("E");
        });
    });

    $(function() {
        $(".textbox-1").click(function() {
            $(".modal-left-box").addClass("C");
        });
    });

    $(function() {
        $(".textbox-1").click(function() {
            $(".modal-right-box").addClass("C");
        });
    });

    $(function() {
        $(".textbox-1").click(function() {
            $(".modal-button").addClass("C");
        });
    });

    $(function() {
        $(".textbox-1").click(function() {
            $(".colender").toggleClass("C");
        });
    });

// var my_function = function(){
//     setTimeout(function(){
//         console.log("あ");
//     },300);
// }


// var showAlert = function(){
//     let switchBtn = document.getElementsById("modal-button")[0];
//     //表示・非表示を切り替える要素を取得
//     let box = document.getElementById("complete");
    
//     //styleのdisplayを変更する関数
//     let changeElement = (el)=> {
    
//       if(el.style.display==''){
//         el.style.display='none';
//       }else{
//         el.style.display='box';
//       }
//     }
    
//     //上記関数をボタンクリック時に実行
//     switchBtn.addEventListener('click', ()=> {
//       changeElement(complete);
//     }, false);
//     }

// $(document).ready(function(){
//     setTimeout(showAlert, 3000);
//     });



const $modal_button = $('.modal-button');
const $done = $('.complete')
const $roading = $('.roading')
const shareCheckbox = document.getElementById('share')

// 投稿完了の表示する君
$modal_button.click((e) => {
    setTimeout(()=>{
        $done.addClass('opendone');
    },3000)
    
    // テキストボックスの内容をTwitterに反映
    const textbox = document.getElementById('textbox3');
    const value = textbox.value;
   
   
    isChecked ()
    

    function isChecked () {
        if(shareCheckbox.checked){
            openTwitter(value)
        }
    }
});



// ローディングを閉じる君
$modal_button.click((e) => {
    setTimeout(()=>{
        $roading.addClass('C');
    },3000)
});


function openTwitter(text) {
	var turl = "https://twitter.com/intent/tweet?text="+text;
	window.open(turl,'_blank');
}







// function isChecked () {
//     if(shareCheckbox.checked){
//         openTwitter(value)
//     }
// }


