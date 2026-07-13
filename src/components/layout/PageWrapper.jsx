import { useEffect } from "react";
 
/**
 * PageWrapper — wraps the content of every page (except Home, which
 * builds its own full-bleed section stack starting with a fullscreen
 * Hero). Handles the two things every other page needs and shouldn't
 * have to repeat: clearing the fixed navbar height, and setting the
 * document title.
 */
 
const SITE_NAME = "Tec Tha";
 
const PageWrapper = ({
  title,
  description,
  fullBleed = false,
  className = "",
  children,
}) => {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
 
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
 
  return (
    <div
      className={`${fullBleed ? "" : "pt-20"} min-h-screen bg-[color:var(--color-bg-primary)] ${className}`}
    >
      {children}
    </div>
  );
};
 
export default PageWrapper;