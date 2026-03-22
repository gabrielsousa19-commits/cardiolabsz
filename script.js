const parts = document.querySelectorAll(".part");
const tooltip = document.getElementById("tooltip");

if (parts.length > 0 && tooltip) {
  parts.forEach(part => {
    part.addEventListener("mousemove", (e) => {
      tooltip.style.display = "block";
      tooltip.style.left = e.pageX + "px";
      tooltip.style.top = e.pageY + "px";
      tooltip.innerText = part.dataset.info;
    });

    part.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
}