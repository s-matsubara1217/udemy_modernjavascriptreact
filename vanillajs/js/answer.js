const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストに追加
  createIncompleteTodo(inputText);
}

// 渡された引数を元に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // button(完了)生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了"
  completeBtn.addEventListener("click", () => {
    // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeBtn.closest("li");
    completeBtn.nextElementSibling.remove();
    completeBtn.remove();
    // 戻すボタンを生成してdivタグ配下に設定
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    // 戻すボタンを押した時の処理
    backBtn.addEventListener("click", () => {
      // TODOの内容を取得し、未完了リストに追加
      const todoText = backBtn.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      // 押された戻すボタンの親にあるliタグを削除
      backBtn.closest("li").remove();
    })
    moveTarget.firstElementChild.appendChild(backBtn);
    // 完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  })

  // button(削除)生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除"
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteBtn.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener('click', onClickAdd);
