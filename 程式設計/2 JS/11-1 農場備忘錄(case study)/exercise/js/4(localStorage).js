 // 取得物件
 let Send = document.querySelector('.send');
 let List = document.querySelector('.list');
 // 設定資料儲存陣列
 let data = [];

 // 監聽與更新
 Send.addEventListener('click', addItem);
 List.addEventListener('click', deleteItem);
 // 顯示待辦事項
 updateList(data);

 //加入待辦事項，並同步更新網頁與 localstorage
 function addItem(e) {
   e.preventDefault();
   let Text = document.querySelector('.text');
   let todo = {
     content: Text.value
   };
   data.push(todo);
   updateList(data);
   // 陣列加入 localStorage
   

   // 清空 輸入文字方塊
   Text.value ="";
 }
 
 // 更新網頁內容
 function updateList(items) {
   str = '';
   items.forEach(function(item, index){
     str += `<li><a href="#" data-index="${index}"/>刪除</a> <span>${item.content}</span></li>`
   })
   List.innerHTML = str;
 }
 // 刪除待辦事項
 function deleteItem(e) {
   e.preventDefault();
   if(e.target.nodeName !== 'A'){return};

   let index = e.target.dataset.index;
   data.splice(index, 1);
   updateList(data);
   // localStorage 資料更新
   
 }