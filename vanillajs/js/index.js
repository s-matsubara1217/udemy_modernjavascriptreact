// inputの内容を取得してTODOリストを作成する関数
const addTodoList = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createTodoList(inputText);
}

// TODO要素を生成する関数
const createTodoList = (todo) => {
  // 要素を生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了"
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除"

  // DOM生成
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  // 未完了のTODOに追加
  document.getElementById("incomplete-list").appendChild(li);

  // 完了ボタンを押した時の処理
  completeBtn.addEventListener("click", () => {
    // 完了リストに移動
    const moveTarget = completeBtn.closest("li");
    document.getElementById("complete-list").appendChild(moveTarget);

    // 完了/削除ボタン削除
    completeBtn.nextElementSibling.remove();
    completeBtn.remove();

    // 戻すボタン生成
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "戻す";
    moveTarget.firstElementChild.appendChild(backBtn);
    // 戻すボタンを押した時の処理
    backBtn.addEventListener("click", () => {
      const todoText = backBtn.previousElementSibling.innerText;
      createTodoList(todoText);
      backBtn.closest("li").remove();
    })
  })

  // 削除ボタンを押した時の処理
  deleteBtn.addEventListener("click", () => {
    completeBtn.closest("li").remove();
  })
}

document.getElementById("add-button").addEventListener("click", addTodoList);
