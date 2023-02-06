export function scroll_to_bottom(element: HTMLElement) {
	element.scrollTop = element.scrollHeight;
}

export function reload_page() {
	window.location.reload();
}
