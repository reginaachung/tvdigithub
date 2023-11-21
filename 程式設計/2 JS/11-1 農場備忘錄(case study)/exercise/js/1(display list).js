 // 取得物件
 let List = document.querySelector('.list');
 let Send = document.querySelector('.send');
 // 設定資料儲存陣列
 let data = [
   {content: 待辦事項1}
 ];

 // 監聽與更新
 Send.addEventListener('click', addItem);
 // 顯示待辦事項
 updateList(data);
 
 // 更新網頁內容
 function updateList(items) {

 }
