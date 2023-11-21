 // 取得物件
 let Send = document.querySelector('.send');
 let List = document.querySelector('.list');
 // 設定資料儲存陣列
 let data = [
  {content: 待辦事項1}
];

 // 監聽與更新
 Send.addEventListener('click', addItem);
 // 顯示待辦事項
 updateList(data);

 //加入待辦事項
 function addItem(e) {
    // 阻止submit的預設行為

   // 取得(文字方塊)輸入內容  
   let Text = document.querySelector('.text');
   // 組建 陣列元素
   let todo = {
     content: Text.value
   };
   // 把元素加入陣列
   
   // 顯示待辦事項
   
   // 清空 輸入文字方塊
   
 }
 
 // 更新網頁內容
 function updateList(items) {
   str = '';
   items.forEach(function(item, index){
     str += `<li><a>刪除</a> <span>${item.content}</span></li>`
   })
   List.innerHTML = str;
 }
