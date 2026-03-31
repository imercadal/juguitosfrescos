export type PopupData = {
  _id: string;
  title: string;
  slug: string;
  bajada: string;
  linkText: string;
  linkUrl: string;
  visible: boolean;
};

export const POPUP_QUERY = `*[_type == "popup"] {
  _id,
  title,
  slug,
  bajada,
  linkText,
  linkUrl,
  visible
}`
