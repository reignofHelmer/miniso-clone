import type { SelectEvent } from "@/data/types";

const EVENT = "minila:select";

/** Ask a section to switch tab, e.g. open "Europe" in the stores section. */
export function sendSelect(detail: SelectEvent) {
  window.dispatchEvent(new CustomEvent<SelectEvent>(EVENT, { detail }));
}

/** Listen for select requests aimed at one section. Returns an unsubscribe. */
export function onSelect(
  section: SelectEvent["section"],
  handler: (id: string) => void,
) {
  const listener = (e: Event) => {
    const { detail } = e as CustomEvent<SelectEvent>;
    if (detail.section === section) handler(detail.id);
  };
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
