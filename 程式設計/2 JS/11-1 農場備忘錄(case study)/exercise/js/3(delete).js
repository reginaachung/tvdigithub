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

 //加入待辦事項
 function addItem(e) {
   e.preventDefault();
   let Text = document.querySelector('.text');
   let todo = {
     content: Text.value
   };
   data.push(todo);
   updateList(data);
   Text.value ="";
 }
 
 // 更新網頁內容
 function updateList(items) {
  str = '';
  items.forEach(function(item, index){
    str += `<li><a>刪除</a> <span>${item.content}</span></li>`
  })
  List.innerHTML = str;
}
// 刪除待辦事項
 function deleteItem(e) {
   
   e.preventDefault();
   // 檢查是否點擊到 刪除
   

   // 刪除元素

 }