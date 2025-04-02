document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));

  Alpine.store("currentUser", {
    username: "Jack",
    posts: ["post 1", "post 2"],
  });
});
