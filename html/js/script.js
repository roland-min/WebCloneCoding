document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // 폼 제출 기본 동작 방지

        const commentText = commentInput.value.trim();
        if (commentText === "") {
            alert("댓글을 입력하세요!");
            return;
        }

        // 새 댓글 요소 생성
        const comment = document.createElement("p");
        comment.textContent = commentText;

        // 댓글 삭제 버튼 추가
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click", () => {
            commentList.removeChild(comment);
        });

        // 댓글에 삭제 버튼 추가 및 목록에 추가
        comment.appendChild(deleteButton);
        commentList.appendChild(comment);

        // 입력 필드 초기화
        commentInput.value = "";
    });
});
