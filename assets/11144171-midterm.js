const skillSection = document.getElementById("skills");
const bars = document.querySelectorAll(".bar-fill");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    bars.forEach(bar => {
      const targetWidth = bar.getAttribute("data-fill");
      bar.style.width = targetWidth;
    });
    observer.disconnect(); // 執行一次就不再觀察
  }
});

observer.observe(skillSection);
