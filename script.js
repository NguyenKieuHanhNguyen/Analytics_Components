// Hàm copy văn bản từ thẻ được chỉ định vào clipboard
function copyCodeFromElement(elementId, btnElementId, labelElementId, defaultText) {
    const codeElement = document.querySelector(elementId);
    const btnElement = document.querySelector(btnElementId);
    const labelElement = document.querySelector(labelElementId);

    if (!codeElement || !btnElement) return;

    btnElement.addEventListener("click", () => {
        navigator.clipboard.writeText(codeElement.innerText).then(() => {
            if (labelElement) labelElement.innerText = "Đã Copy!";
            btnElement.classList.replace("bg-slate-800", "bg-emerald-600");

            setTimeout(() => {
                if (labelElement) labelElement.innerText = defaultText;
                btnElement.classList.replace("bg-emerald-600", "bg-slate-800");
            }, 1800);
        });
    });
}

// Khởi chạy khi tài liệu sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    copyCodeFromElement("#codeHtml", "#btnCopyHtml", "#txtCopyHtml", "Copy HTML");
    copyCodeFromElement("#codeJs", "#btnCopyJs", "#txtCopyJs", "Copy JS");
});